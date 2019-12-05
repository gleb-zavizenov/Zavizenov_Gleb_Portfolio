const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {

    let query = "SELECT * FROM tbl_homepage;";

    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }

        //console.log(result);

        res.render('home', { homepage: result });
    })
})

router.get('/projects', (req, res) => {

    let query = "SELECT * FROM tbl_projects;";

    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }

        //console.log(result);

        res.render('projects', { projects: result, layout: 'adaptive-layout' });
    })
})

router.get('/projects/:id', (req, res) => {

    let query = `SELECT * FROM tbl_projects WHERE ID = "${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }

        //console.log(result);

        res.render('project', { project: result, layout: 'project-layout' });
    })
})

router.get('/about', (req, res) => {

    let query = "SELECT * FROM tbl_techs";

    sql.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }

        //console.log(result);

        res.render('about', { techs: result, layout: 'adaptive-layout' });
    })
})

router.get('/technology/:id', (req, res) => {

    let query = `SELECT * FROM tbl_techs WHERE ID = "${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result[0]);

        res.json(result[0]);
    })
})

router.post('/send', (req,res) => {
    const output = `
    <h1>You have a new message from your website!</h1>
    <h3>Contact details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message}</li>
    </ul>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gleb.portfolio@gmail.com',
            pass: 'password-here'
        }
    });

    let mailOptions = {
        from: '"Portfolio website" <connect@gleb-zavizenov.com>',
        to: "gleb.zavizenov@gmail.com",
        subject: "Message from portfolio website",
        html: output 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
        }
        //Else do something to show successful sent;
        res.render('contact-result', {layout: 'adaptive-layout'} )
    });
});

module.exports = router;