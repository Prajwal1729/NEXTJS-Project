import { connectDB } from "../../lib/db.js";
import User from "../../models/Users.js";
import LoggedUsers from "../../models/LoggedUsers.js";
import bcrypt from "bcryptjs";

export async function POST(req){

      const { email,password } = await req.json();

      await connectDB();

      const loggedUsers = await User.findOne({email});

      if(!loggedUsers){
        return Response.json(
            {
                error: "User not found"
            },
            {
                status: 200
            }
        );
      }

      const isMatch = await bcrypt.compare(password,loggedUsers.password);

      if(!isMatch){
        return Response.json(
            {
                error: "Invalid Credential"
            },
            {
                status: 200
            }
        );
      }

     await LoggedUsers.create({
      email,
      loginTime: new Date(),
    });

      return Response.json({
         message: "User Logged in Sucessfully."

      });



}