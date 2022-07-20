const News = require('../model/newsModel');


// -- Үндсэн нүүр хуудсанд мэдээнүүдээ харуулах
exports.homeController = (req, res) => {
    News.find()
        .then(newsData => {
            res.render('home', {
                pageTitle: "Нүүр Хуудас",
                medee: newsData
            })
        })
        .catch(err => console.log(err))
}