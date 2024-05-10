import { RequestHandler } from "express";
import { sessionExist } from "../wa";


const validateSession:RequestHandler = (req,res,next)=>{
    const sessionId = req.query.sessionId as string | undefined;
    if(!sessionExist( sessionId )){
        return res.status(404).json({ error: 'Session not found' });
    }else{
        console.info("session validation successful")
    }
    next();
};

export default validateSession;