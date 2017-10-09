const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const sessionSchema = new Schema(
    {
        sessionKey: {type:String},
        sessionCrestedOn: {type:Date},
        sessionUpdaetdOn: {type:Date}
    }
);

const emailSchema = new Schema(
    {
        emailLink:{type:String},
        emailLinkCreatedOn:{type:Date}
    }
);

const mobileSchema = new Schema(
    {
        mobileOtp:{type:String},
        mobileOtpCreatedOn: {type:Date}
    }

);

const logSchema = new Schema(
    {
        logValue: {type:String},
        logCreatedOn : {type, Date}
    }
);

const extrasSchema = new Schema({
    userId: {type: Schema.ObjectId, ref: "User"},
    sessions : [sessionSchema],
    emailVerification:[emailSchema],
    mobileVerification:[mobileSchema],
    logs:[logSchema]
});

const extrasModel = mongoose.model('extras', extrasSchema);

module.exports = extrasModel;