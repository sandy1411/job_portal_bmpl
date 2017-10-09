const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    fisrtName: { type: String, maxlength: 20 },
    middleName: { type: String, maxlength: 20 },
    lastName: { type: String, maxlength: 20 }
});

const emailSchema = new Schema({
    emailId: { type: String },
    isEmailVerified: { type: String },
    emailVerifiedScore: { type: Number }
});

const mobileSchema = new Schema({
    mobilePrimary: { type: Number },
    isMobilePrimaryVerified: { type: String },
    mobileSecondary: { type: Number },
    mobileScore: { type: Number }
});

const addressSchema = new Schema({
    address1: { type: String },
    address2: { type: String },
    landmark: { type: String },
    city: { type: String },
    pincode: { type: Number },
    state: { type: String }
});

const photoSchema = new Schema({
    photoName: { type: String },
    isPhotoVerified: { type: String },
    photoPath: { type: String }
});

const employerSocialConnectionSchema = new Schema({
    employerFacebookPage: { type: String },
    employerLinkedinPage: { type: String },
    employerTwitterHandle: { type: String },
    employerCompanyWebsiteUrl: { type: String },
    employerYouTubePage: { type: String },
    employerYouTubeVideo: { type: String }
});

const employerCompanyReviewSchema = new Schema({
    candidateId: { type: Schema.ObjectId, ref: "users" },
    companyReviewTitle: { type: String },
    companyReviewDescription: { type: String },
    isReviewApproved: { type: String },
    reviewActive: { type: String },
    reviewCreatedOn: { type: Date },
    reviewUpdatedOn: { type: Date }
});

const candidateMedicaldisabilitySchema = new Schema({
    disabilityYesNo: { type: String },
    disabilityType: { type: String }
});

const candidateProjectsSchema = new Schema({
    projectId: { type: String },
    projectName: { type: String },
    projectDescription: { type: String },
    projectDuration: { type: String },
    projectRole: { type: String },
    projectRoleDescription: { type: String },
    projectLcoation: { type: String },
    projectTeamSize: { type: String },
    projectTechnologyUsed: [{ type: String }],
    projectScore: { type: String }
});

const candidateProfileSnapshotSchema = new Schema({
    profileHeadline: { type: String },
    profileSnapshotDescription: { type: String },
    profileSnapshotScore: { type: String }

});

const candidateJobPreferencesSchema = new Schema({
    candidatePreferredJobLcoation: { type: String },
    candidatePreferredPackage: { type: String },
    candidatePreferredJobType: { type: String }
});

const candidateWorkExpSchema = new Schema({
    candidateWorkExpYear: { type: Number },
    candidateWorkExpMonths: { type: Number },
    candidateCompanyName: { type: String },
    candidateProfileIncompany: { type: String },
    candidateProfileDescriptionIncompany: { type: String },
    candidateTechnologyUsedIncompany: { type: String },
    candidateJobTypeInCompany: { type: String }
});

const candidateSkillSchema = new Schema({
    candidateSkillName: { type: String },
    candidateSkillRating: { type: String }
});

const candidateCollegeSchema = new Schema({
    candidateCollegeId: { type: String },
    candidateGraduationType: { type: String },
    candidateCollegeName: { type: String },
    candidateCollegeDegree: { type: String },
    candidateCollegePercentageCGPA: { type: String },
    candidateCollegeGraduationYear: { type: Number },
    candidateCollegeScore: { type: Number }
});

const candidateSchoolSchema = new Schema({
    candidateSchoolId: { type: String },
    candidateSchoolName: { type: String },
    candidateSchoolClass: { type: String },
    candidateSchoolAffiliation: { type: String },
    candidateSchoolPercentageCGPA: { type: String },
    candidateSchoolPassingYear: { type: Number },
    candidateSchoolScore: { type: Number }
});

const candidateAdditionalProfileShowcaseSchema = new Schema({
    candidateOnlineProfileUrl: { type: String },
    candidateOnlineProfileDescription: { type: String }
});

const candidatePatentsSchema = new Schema({
    candidatePatentsFillingId: { type: String },
    candidatePatentsDescription: { type: String }
});

const candidateReseachPaperSchema = new Schema({

    candidateResearchPaperTitle: { type: String },
    candidateRole: { type: String },
    candidateTierPublication: { type: String },
    candidateResearchPaperdescription: { type: String }
});


const candidateGeneralProfileSchema = new Schema({

    candidateMaritalstatus : {type:String},
    candidateDOB : {type:String},
    candidateGender : {typr:String},
    candidateAadharCardNo : {type:String},
    candidatePanCardNo : {type:String},
    candidatePassportNo : {type:String},
    candidateFatherName : {type:String},
    candidateMotherName : {type:String},
    candidateCategory : {type:String},
    candidateHomeTown:{type:String},
    candidateEmail : {type:emailSchema},
    candidateMobile :{type:mobileSchema},
    candidateAddress: [{type:addressSchema}],
    candidateName : {type:nameSchema},
    candidateUsername : {type:String},
    candidatePassword: {type:String},
    candidateMedicalDisability : {type:candidateMedicaldisabilitySchema},
    candidateProjects :{type:candidateProjectsSchema},
    candidateProfileSnapshot : {type:candidateProfileSnapshotSchema},
    candidateJobPreferences : {type:candidateJobPreferencesSchema},
    candidateKeySkills: {type:candidateSkillSchema},
    candidateTotalWorkExperience : {type:candidateWorkExpSchema},
    candidateColleges : [{type:candidateCollegeSchema}],
    candidateSchools: [{type:candidateSchoolSchema}],
    candidateResume: {type:String},
    candidatePhoto:{type:photoSchema},
    candidateAdditionalProfileShowcase :[{type:candidateAdditionalProfileShowcaseSchema}],
    candidatePatents: [{type:candidatePatentsSchema}],
    candidateReseachPapers : [{type:candidateReseachPaperSchema}],
    candidateWorkAuthorization : [{type:String}]




});

const employerGeneralProfileSchema = new Schema({
    employerName: { type: nameSchema },
    employerEmail: { type: emailSchema },
    employerMobile: { type: mobileSchema },
    employerAddress: { type: addressSchema },
    employerUserName:{ type: String },
    employerPassword:{ type: String },
    employeerCompanyContacts: [{ type: String }],
    employerCompanyOverviewDescription: { type: String },
    employerCompanyLocations: [{ type: String }],
    employerCompanyLocationHQ: { type: String },
    employerCompanyTotalOffices: { type: Number },
    employerCompanyTurnOver: { type: String },
    employerCompanyName: { type: String },
    employerCompanyAreaOfWork: { type: String },
    employerCompanySector: { type: String },
    employerStartupYesNo: { type: String },
    employerCompanyFounderName: { type: String },
    employerCompanyCoFounderName: { type: String },
    employerSocialConnections: { type: employerSocialConnectionSchema },
    employerCompanyEmployeeStrength: { type: Number },
    employerCompanyFoundedIn: { type: Number },
    employerCompanyIsPremium: { type: String },
    employerCompanyReview: { type: employerCompanyReviewSchema },
    employerPhoto: { type: photoSchema }
});

const userSchema = new Schema({
    userRole: { type: String },
    groupId: [{ type: String }],
    employerGeneralProfile: { type: employerGeneralProfileSchema },
    candidateGeneralProfile: { type: candidateGeneralProfileSchema },
    candidateAppliedJobs: [{ type: Schema.ObjectId, ref: "jobs" }],
    candidateProfileVisitors: [{ type: Schema.ObjectId, ref: "users" }],
    employerCreatedJobs: [{ type: Schema.ObjectId, ref: "jobs" }],
    employerProfileVisitors: [{ type: Schema.ObjetctId, ref: "users" }],
    userActive: { type: String },
    userCreatedOn: { type: Date },
    userUpdatedOn: { type: Date }
});

module.exports = mongoose.model('users', userSchema);