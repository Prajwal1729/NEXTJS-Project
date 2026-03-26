import { connectDB } from "../../lib/db.js";
import User from "../../models/Users.js";
import bcrypt from "bcryptjs";

export async function POST(req){

    const { email, password } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });

    if(existingUser){
        return Response.json(
          {
            error: "User already exist."
          },
          {
            status: 200
          }
       );
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await User.create({
        email,
        password:hashedPassword
    });

    return Response.json({
        message: "User Created Succesfully."
    });
}


