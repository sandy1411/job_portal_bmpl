const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testQuestionsSchema = new Schema({
    questionId: {type:String},
    question:{type:String},
    option1 :{type:String},
    option2 :{type:String},
    option3 :{type:String},
    option4 :{type:String},
    correctOption : {type:String},
    questionScore : {type:Number}

});

const testProfileSchema = new Schema({
    testName:{type:String},
    testInstructions:{type:String},
    totalQuestions:{type:String},
    testDuration: {type:String},
    testQuestions:[{type:testQuestionsSchema}]

});

const testSchema = new Schema({

    testProfile: {type:testProfileSchema},
    employerId : {type:Schema.ObjectId, ref : "users"},
    testActive: {type:String},
    testCreatedOn: {type:Date},
    testUpdatedOn : {type:Date}
});

module.exports = mongoose.model("tests", testSchema);

