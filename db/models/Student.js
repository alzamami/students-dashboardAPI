const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: { type: DataTypes.STRING, allowNull: false },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    major: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
  });
  SequelizeSlugify.slugifyModel(Student, {
    source: ["name"],
  });
  return Student;
};
