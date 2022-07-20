const News = require('../model/newsModel');

// -- Мэдээний хуудсыг харуулах
exports.getNewsData = (req, res) => {
    res.render('news',{
        pageTitle: "Мэдээ үүсгэх"
    })
}

// -- Шинээр мэдээ постлох
exports.postNewsData = (req, res) => {
const { title, avatar, description, /*sort*/ } = req.body;
    const news = new News({
        title: title,
        avatar: avatar,
        description: description,
        // sort: sort
    });

    news.save()
        .then(() => {
            console.log('Шинэ мэдээ нэмэгдлээ')
            res.redirect('/')
        })
        .catch(err => console.log(err))
}

// -- Мэдээ руу орж үзэх
exports.getNewsDetail = (req, res) => {
    const newsId = req.params.id;
    News.findById(newsId)
        .then(news => {
            res.render('newsDetail', {
                newsDetail: news,
                pageTitle: news.title
            })
        })
        .catch(err => console.log(err))
}

// -- Мэдээ шинэчлэх хуудсыг харуулах
exports.getUpdateNewsData = (req, res) => {
    const editNewsId = req.params.id;
    News.findById(editNewsId)
        .then(news => {
            res.render('updateNews', {
                updateNews: news,
                pageTitle: "Засах"
            })
        })
        .catch(err => console.log(err))
}


// -- Мэдээг шинэчлэх
exports.postUpdateNewsData = (req, res) => {
    const editNewsId = req.params.id;
    const { title, avatar, description, /*sort*/ } = req.body;

    News.findById(editNewsId)
      .then((news) => {
        news.title = title;
        news.avatar = avatar;
        news.description = description;
        // news.sort = sort;

        news
          .save()
          .then(() => {
            res.redirect("/");
            console.log("Амжилттай шинэчлэгдлээ...");
          })
          .catch((err) => {
            console.log(err);
          });
      })
}


// -- Мэдээг устгах
exports.deleteNewsData = (req, res) => {
    const delNewsId = req.params.id;
    News.findByIdAndDelete(delNewsId)
        .then(()=> {
            res.redirect('/');
            console.log('Амжилттай устгагдлаа');
        })
        .catch(err => console.log(err))
}