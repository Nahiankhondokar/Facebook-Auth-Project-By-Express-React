import nodemailer from 'nodemailer';

// send emial
export const SendEmail = async (to, subject, text) => {

   try {

        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "emaildefaultemail@gmail.com",
                pass: "htfnypnfilvtmoiy"
            }
        });

        await transport.sendMail({
            from : 'info.nahian13@gmail.com',
            to : to,
            subject : subject,
            text : text
        })
    
   } catch (e) {
    console.log(e);
   }

}
