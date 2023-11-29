const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req,res)=>{
    try {
        const user = req.body;
        //create salt
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password,salt); 

        //two way in documentation
        //first way
        // const newUser = await new User({
        //     ...user
        // }).save();//save user in mongodb
        //  newUser.save();
        // res.status(200).json(newUser);

        //2nd way
        //create user
        const nU = await User.create({
            ...user,
            password:hashPassword
        });

        //respond
        res.status(200).json(nU);
    } catch (error) {
        console.log(error)
        res.status(422).json({error:error});
    }

}
exports.signin = async(req,res)=>{
    try{
        const user = req.body;

        //find user in db
        const findUser = await User.findOne({email:user.email});
        if(!findUser) return res.status(404).json({message:"User not found!",});
        console.log("hi")
        //check pass match
        const validPass = await bcrypt.compare(user.password,findUser.password);
        if(!validPass) return res.status(404).json({message:"Password is incorrect!",});
        //respond
        return res.status(200).json(findUser); 
       
    }catch(e){
        console.log(e)
        res.status(500).json({message:"Server side error",e});
    }
}