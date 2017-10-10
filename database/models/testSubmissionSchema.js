const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attemptedQuestionsSchema = new Schema({
    question: { type: String },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
    correctOption: { type: String },
    markedAnswer: { type: String },
    questionScore: { type: Number }
});

const submissionDetailsSchema = new Schema({
    testId: { type: Schema.ObjectId, ref: "tests" },
    testName: { type: String },
    totalQuestions: { type: Number },
    attemptedQuestions: [{ type: attemptedQuestionsSchema }],
    correctAnswersCount: { type: Number },
    wrongAnswersCount: { type: Number },
    totalTimeTaken: { type: String },
    totalScore: { type: Number },
    submissionOn: { type: Date }
});

const testSubmissionSchema = new Schema({
    submissionDetails : {type:submissionDetailsSchema},
    candidateId : {type:Schema.ObjectId, ref:"users"},
    jobID: {type:Schema.ObjectId, ref : "jobs"},
    active : {type:String}

});

module.exports = mongoose.model ("testSubmissions", testSubmissionSchema);

