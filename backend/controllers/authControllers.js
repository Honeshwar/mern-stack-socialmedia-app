const User = require("../models/user")
exports.register = async (req,res)=>{
    try {
        const user = req.body;
        //two way in documentation
        //first way
        // const newUser = await new User({
        //     ...user
        // }).save();
        //  newUser.save();
        // res.status(200).json(newUser);

        //2nd way
        const nU = await User.create({...user});
        res.status(200).json(nU);
    } catch (error) {
        console.log(error)
        res.status(422).json({error:error});
    }

}
exports.signin = async(req,res)=>{

}