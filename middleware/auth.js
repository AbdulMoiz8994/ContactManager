const jwt=require('jsonwebtoken');
// if we import env 
const dotenv=require('dotenv');
dotenv.config({path: '../config.env'});

module.exports =function (req,res,next) {
    // get token from header
    const token=req.header('x-auth-token');
    // if not found token
    if(!token){
        return res.status(401).json({msg: "Autentication missing , missing token"})
    }
    try{
      const decoded=jwt.verify(token, process.env.jwtSecret)

      req.user=decoded.user
    //   The purpose of next is that when user loggedIn then it execute next function 
      next();
    }catch(err){
     console.error(err.message);
     res.status(401).json({msg: "invalid token"})
    }
}