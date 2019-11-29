const express = require('express');
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

module.exports = router;