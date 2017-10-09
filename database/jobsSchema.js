const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobProfileSchema = new Schema({
    jobCompanyName: { type: String },
    jobType: { type: String },
    jobTitle: { type: String },
    jobDescription: { type: String },
    jobCtc: { type: String },
    jobLocation: [{ type: String }],
    jobExperienceRequired: { type: String },
    jobSkillsRequired: [{ type: String }],
    jobIsPremium: { type: String },
    jobCompanyAddress: { type: String },
    jobsPositionRequired: { type: Number },
    jobRequiredCollegeType: { type: String }
});

const candidatesAppliedSchema = new Schema({
    jobIsSMSSentCandidate: { type: String },
    jobIsEmailSentCandidate: { type: String },
    jobIsEmailSentEmployer: { type: String },
    jobCandidateId: [{ type: Schema.ObjectId, ref: "users" }]
});

const employerContactedCandidatesSchema = new Schema({
    type:candidatesAppliedSchema
});


const jobsSchema = new Schema({

jobProfile: {type:jobProfileSchema},
jobCreationOn : {type:Date},
jobUpdatedOn: {type:Date},
jobExpiryDate: {type:Date},
isJobApproved: {type:String},
jobActive:{type:String},
jobEmployerId: {type:Schema.ObjectId, ref:"users"},
candidatesApplied : [{type:candidatesAppliedSchema}],
employerContactedCandidates : [{type:employerContactedCandidatesSchema}],
testId : {type:Schema.ObjectId, ref:"tests"}

});

module.exports = mongoose.model("jobs", jobsSchema);