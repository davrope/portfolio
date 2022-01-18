const nodemailer = require("nodemailer")
const { user, pass } = require("./config/dev")

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: user,
        pass: pass
    },

});

contactEmail.verify((error)=>{
    if(error) {
        console.log(error);
    }else{
        console.log("Ready to send")
    }
});
