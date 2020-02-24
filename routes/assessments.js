const express = require("express");
const router = express.Router();
const passprot = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const Assessment = require("../models/assessment");

router.post("/create-assessment", (req, res, next) => {
  let newAssessment = new Assessment({
    createdBy: req.body.createdBy,
    testCoverage: req.body.testCoverage,
    changeTypes: req.body.changeTypes,
    timeAvailabilityEventInfo: req.body.timeAvailabilityEventInfo,
    changeResolutionTime: req.body.changeResolutionTime,
    platformChangeVolumn: req.body.platformChangeVolumn,
    platformChangeFailureRate: req.body.platformChangeFailureRate,
    MTTR: req.body.MTTR,
    totalVulnerabilityPatch: req.body.totalVulnerabilityPatch,
    totalMonitoringAlerts: req.body.totalMonitoringAlerts,
    totalUnitInegrationTests: req.body.totalUnitInegrationTests,
    totalFunctionalAcceptanceTexts: req.body.totalFunctionalAcceptanceTexts,
    meanRecoveryPoint: req.body.meanRecoveryPoint,
    retentionControlCompliance: req.body.retentionControlCompliance,
    technicalControls: req.body.technicalControls,
    vulnerabilityPatchLeadTime: req.body.vulnerabilityPatchLeadTime,
    totalSarFindings: req.body.totalSarFindings,
    architectureSecurityReviewTime: req.body.architectureSecurityReviewTime,
    totalSystemLogging: req.body.totalSystemLogging,
    priviledgeAuditingPercentage: req.body.priviledgeAuditingPercentage,
    administratorCount: req.body.administratorCount,
    onboardingLeadTime: req.body.onboardingLeadTime
  });

  Assessment.addAssessment(newAssessment, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "failed to submit Assessment" });
    } else {
      res.json({ success: true, msg: "Assessment completed" });
    }
  });
});

// router.delete("/delete-assessment", (req, res, next) => {
//   var id = req.params.id;
//   Assessment.findOneAndDelete({ _id: id }, function(err, data) {
//     if (err) {
//       console.log("error");
//     } else {
//       res.json({ success: true, msg: "delete sucessful" });
//     }
//   });
// });

router.get("/view-assessment", (req, res, next) => {
  var createdBy = req.query.createdBy;
  Assessment.find({ createdBy: createdBy }, function(err, data) {
    if (err) console.log("error");
    res.json(data);
  });
});

module.exports = router;
