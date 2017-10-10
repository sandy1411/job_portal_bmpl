const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobExperienceRequiredSchema = new Schema({
    jobExperienceDescription: {type: String},
    jobExprerienceYearCount: {type: Number},
    jobExprerienceMonthCount: {type: Number} 
});


const jobProfileSchema = new Schema({
    jobCompanyName: { type: String },
    jobType: { type: String },
    jobTitle: { type: String },
    jobDescription: { type: String },
    jobCtc: { type: String },
    jobLocation: [{ type: String }],
    jobExperienceRequired: { type: jobExperienceRequiredSchema },
    jobSkillsRequired: [{ type: String }],
    jobIsPremium: { type: String },
    jobCompanyAddress: { type: String },
    jobsVancancies: { type: Number },
    jobRequiredCollegeType: { type: String }
});

const candidatesAppliedSchema = new Schema({
    jobIsSMSSentCandidate: { type: String },
    jobIsEmailSentCandidate: { type: String },
    jobIsEmailSentEmployer: { type: String },
    jobCandidateId: { type: Schema.ObjectId, ref: "users" }
});

const employerContactedCandidatesSchema = new Schema({
    type:candidatesAppliedSchema
});


const jobsSchema = new Schema({

jobProfile: {type:jobProfileSchema},
jobCreatedOn : {type:Date},
jobUpdatedOn: {type:Date},
jobExpiryDate: {type:Date},
isJobApproved: {type:String},
jobActive:{type:String},
jobEmployerId: {type:Schema.ObjectId, ref:"users"},
candidatesApplied : [{type:candidatesAppliedSchema}],
employerContactedCandidates : [{type:employerContactedCandidatesSchema}],
testIds : [{type:Schema.ObjectId, ref:"tests"}]

});

module.exports = mongoose.model("jobs", jobsSchema);