import mongoose from "mongoose";

const LoggedUsersSchema = new mongoose.Schema({
    email:{
        type:String,
        loginTime: {
        type: Date,
        default: Date.now,
     },  
    },
    password:String
})

const usersData = mongoose.models.logged_in_users || mongoose.model('logged_in_users',LoggedUsersSchema);

export default usersData;