const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  //[GET] /learn/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render('courses/show', { course });
      })
      .catch(next);
  }

  //[GET] /learn/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] /learn/store
  store(req, res, next) {
    const formData = req.body;
    formData.img =
      'https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1156.png';
    const course = new Course(formData);
    course.save();
    // .then(() => res.redirect('/'))
    // .catch(error)
  }
}

module.exports = new CourseController();
