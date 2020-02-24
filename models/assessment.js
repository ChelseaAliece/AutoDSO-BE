const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

//user schema
const AssessmentSchema = mongoose.Schema(
  {
    createdBy: {
      type: String,
      required: true
    },
    testCoverage: {
      type: Number,
      required: true
    },
    changeTypes: {
      type: Number,
      required: true
    },
    timeAvailabilityEventInfo: {
      type: Number,
      required: true
    },
    changeResolutionTime: {
      type: Number,
      required: true
    },
    platformChangeVolumn: {
      type: Number,
      required: true
    },
    platformChangeFailureRate: {
      type: Number,
      required: true
    },
    MTTR: {
      type: Number,
      required: true
    },
    totalVulnerabilityPatch: {
      type: Number,
      required: true
    },
    totalMonitoringAlerts: {
      type: Number,
      required: true
    },
    totalUnitInegrationTests: {
      type: Number,
      required: true
    },
    totalFunctionalAcceptanceTexts: {
      type: Number,
      required: true
    },
    meanRecoveryPoint: {
      type: Number,
      required: true
    },
    retentionControlCompliance: {
      type: Number,
      required: true
    },
    technicalControls: {
      type: Number,
      required: true
    },
    vulnerabilityPatchLeadTime: {
      type: Number,
      required: true
    },
    totalSarFindings: {
      type: Number,
      required: true
    },
    architectureSecurityReviewTime: {
      type: Number,
      required: true
    },
    totalSystemLogging: {
      type: Number,
      required: true
    },
    priviledgeAuditingPercentage: {
      type: Number,
      required: true
    },
    administratorCount: {
      type: Number,
      required: true
    },
    onboardingLeadTime: {
      type: Number,
      required: true
    }
  },
  { collection: "assessments" }
);

const Assessment = (module.exports = mongoose.model(
  "Assessment",
  AssessmentSchema
));

module.exports.addAssessment = function(newAssessment, callback) {
  newAssessment.save(callback);
};

module.exports.getAssessmentByUser = function(createdBy, callback) {
  const query = { createdBy: createdBy };
  Assessment.find(query, callback);

    // Assessment.find({createdBy: 'janedoe@email.com'}, function(err, data) {
    // if (err) console.log(err);
    // res.json(data)
  // });
};

module.exports.deleteAssessment = function(createdBy, callback) {
};