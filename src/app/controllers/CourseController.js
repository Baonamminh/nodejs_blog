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

  //[GET] /learn/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render('courses/edit', { course }))
      .catch(next);
  }

  //[PUT] /learn/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  //[DELETE] /learn/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[DELETE] /learn/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[PATCH] /learn/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[POST] /learn/store
  store(req, res, next) {
    req.body.img =
      'https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1156.png';
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(error);
  }
}

module.exports = new CourseController();
