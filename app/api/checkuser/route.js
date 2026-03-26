import { connectDB } from "../../lib/db.js";
import User from "../../models/Users.js";


export async function POST(req){

    const { email } = await req.json();
    await connectDB();
    const user = User.findOne({ email });

    return Response.json({
        exist: !!user
    });

}