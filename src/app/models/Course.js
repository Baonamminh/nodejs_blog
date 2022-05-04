const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    img: { type: String },
    slug: { type: String },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

//plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('learns', Course);
