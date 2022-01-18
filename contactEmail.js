const nodemailer = require("nodemailer")

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: rodpe.david
    }

})