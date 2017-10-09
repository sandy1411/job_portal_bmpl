const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const masterSchema = new Schema({
    candidateKeySkills: [{ type: String }],
    graduationTypes: [{ type: String }],
    languagesKnown: [{ type: String }],
    schoolAffiliations: [{ type: String }],
    collegeNames: [{ type: String }],
    SchoolClasses: [{ type: String }],
    CollegeDegrees: [{ type: String }],
    year: [{ type: Number }],
    locations: [{ type: String }],
    collegeTier: [{ type: String }],
    jobTypes: [{ type: String }],
    roles: [{ type: String }],
    groupNames: [{ type: String }],
    companySectors: [{ type: String }],
    companyAreas: [{ type: String }],
    companyLocations: [{ type: String }],
    disabilityTypes: [{ type: String }],
    candidateCategories: [{ type: String }],
    projectRoles: [{ type: String }],
    projectDuration: [{ type: String }],
    projectLocations: [{ type: String }],
    projectTeamSize: [{ type: String }],
    candidateRequiredJobTypes: [{ type: String }],
    candidateWorkAuthorizations: [{ type: String }],
    yesNo: [{ type: String }]
});

module.exports = mongoose.model("masters", masterSchema);