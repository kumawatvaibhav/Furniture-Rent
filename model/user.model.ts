import mongoose, {Schema , Document} from "mongoose";
import { Url } from "next/dist/shared/lib/router/router";



export interface Message extends Document{
    content : string;
    createdAt : Date;
    //image : Url
}

const MessageSchema: Schema<Message> = new Schema{(
    content : {
        type : string,
        required : true 
    },
    createdAt : {
        type : Date,
        required : true,
        default: Date.now
    }
)}

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpire: Date;
    isVerified: boolean;
    // isAcceptingMessage: boolean;
    message: Message[]
}

const UserSchema: Schema<User> = new Schema{(
    username:{
        type : String,
        required : [true, "Username is required"]
        trim: true,
        unique: true,
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique: true
        match:  ['Please use a valid email address']
    },
    password : {
        type : String,
        required : [true, "Password is required"],
    },
    verifyCode : {
        type : String,
        required : [true, "Verify code is required"]
    },
    verifyCodeExpire : {
        type : Date,
        required : [true, "Verify code expire is required"],
    },
    isVerified : {
        type : Boolean,
        default: false,
    },
    isAcceptingMessage : {
        type : Boolean,
        default: true,
    },
    message: [MessageSchema]
)}

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User',UserSchema)

export default UserModel;