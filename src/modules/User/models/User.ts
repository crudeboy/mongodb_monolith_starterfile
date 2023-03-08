import mongoose from "mongoose"


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    phone: String,
},{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
        }
    },
    timestamps: true
});

export const User =  mongoose.model('user', UserSchema);