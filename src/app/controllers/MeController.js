const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}).lean(), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render('me/stored-courses', { deletedCount, courses });
      })
      .catch(next);
  }
  //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then((courses) => {
        //courses = courses.map(course => course.toObject() )
        res.render('me/trash-courses', { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
