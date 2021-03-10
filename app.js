const sgMail = require('@sendgrid/mail')

const API_KEY = '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';

sgMail.setApiKey(API_KEY)

const message = {
    to: ['hrishikeshrathod.171it117@nitk.edu.in'],
    from: {
        name: 'Hrishikesh Rathod',
        email: 'hrishikeshrathod350@gmail.com',
    },
    subject: 'Hello from Hrishikesh',
    text: 'Hello from Hrishikesh',
    Attachments: {
        name: "File_Name_with_Extension",
        path: "C:\Users\HRISHIKESH\3D Objects",
    },
};

sgMail
    .send(message)
    .then((response) => console.log('Email is sent ....'))
    .catch((error) => console.log(error.message));