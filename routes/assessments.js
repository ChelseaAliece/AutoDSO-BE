const express = require("express");
const router = express.Router();
const passprot = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

const Assessment = require("../models/assessment");

router.post("/create-assessment", (req, res, next) => {
  let newAssessment = new Assessment({
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
});
router.delete("/delete-assessment", (req, res, next) => {});
router.post("/view-assessment", (req, res, next) => {});

module.exports = router;
