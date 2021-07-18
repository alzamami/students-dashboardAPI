/* Add Data */

const { Student } = require("../../db/models");

exports.fetchStudent = async (studentId, next) => {
  try {
    const student = await Student.findByPk(studentId);
    return student;
  } catch (error) {
    next(error);
  }
};
/* Read Data from Router */
exports.studentFetch = async (req, res) => {
  try {
    const students = await Student.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(students);
  } catch (error) {
    next(error);
  }
};

/* Create New Task from Router */
exports.studentAdd = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

/* Update Task from Router */
exports.studentUpdate = async (req, res, next) => {
  try {
    await req.student.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

/* Delete Task from Router */
exports.studentDelete = async (req, res) => {
  try {
    await req.student.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
