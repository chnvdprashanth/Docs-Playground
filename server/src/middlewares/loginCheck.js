import { getUserFromJsonWebToken } from "../service/auth.js";

export const loginCheck = (req,res,next) => {
    const token = req.cookies?.user;
    console.log(token);
    if(!token) return res.status(400).json({ message : "Access denied" });

    try{
        const user = getUserFromJsonWebToken(token);
        const { userId } = user;
    
        req.body = { userId : userId,...req.body};
        next();
    } catch(err){
        console.error("Invalid token ",err);
        res.status(400).json({ message : "Access denied" });
    }
}