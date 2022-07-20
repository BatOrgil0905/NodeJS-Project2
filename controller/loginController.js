const User = require('../model/user');

// -- Хэрэглэгч нэвтрэх хуудсыг харуулах
exports.getLoginData = (req, res) => {
    res.render('login', {
        pageTitle: "Нэвтрэх Хуудас"
    })
}


// -- Хэрэглэгч нэвтрэх
exports.postLoginData = (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({
        username: username,
        email: email,
        password: password
    });

    user.save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => console.log(err))
}