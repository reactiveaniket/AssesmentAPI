const login = require('../model/login.js');

// Retrieve and return all notes from the database.
//req.query.username
exports.findAll = (req, res) => {
    //console.log('req',req);
    login.findOne({name:req.body.name,password:req.body.password})
    .then(users => {
        let result = {data:users,message:''}
        if(users){result.message = 'success';res.send(result);}
        else{result.message = 'User Invalid';res.send(result);}       

    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

