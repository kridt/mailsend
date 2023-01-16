export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const mailList = [
    { email: "andreas@barkov.dk", name: "Andreas Barkov" },
    { email: "loui.papi@gmail.com", name: "Louise Nielsen" },
    { email: "chrnielsen2003@gmail.com", name: "Christian Nielsen" },
  ];
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "chrnielsen2003@gmail.com",
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    secure: true,
  });

  mailList.forEach((mail) => {
    const mailData = {
      from: "Føtex teamet <foobar@example.com>",
      to: `${mail.email}`,
      subject: `Email From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${
        "hej " + mail.name
      }</div><p style="color:pink; font-size:3em;">Sent from:
          ${req.body.email}</p>`,
    };
    transporter.sendMail(mailData, function (err, info) {
      console.log("123123123");
      if (err) console.log(err);
      else console.log(info);
    });
  });
  res.status(200);
}
