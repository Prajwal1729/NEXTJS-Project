import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:String
})

const usersData = mongoose.models.Users || mongoose.model('Users',UsersSchema);

export default usersData;