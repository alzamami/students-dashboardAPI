const express = require("express");
const {
  studentFetch,
  studentAdd,
  studentUpdate,
  studentDelete,
  fetchStudent,
} = require("./Controllers");

const router = express.Router();

router.param("studentId", async (req, res, next, studentId) => {
  const student = await fetchStudent(studentId, next);
  if (student) {
    req.student = student;
    next();
  } else {
    const err = new Error("Cookie Not Found");
    err.status = 404;
    next(err);
  }
});

//CRUD
router.get("/", studentFetch);

router.post("/", studentAdd);

router.put("/:studentId", studentUpdate);

router.delete("/:studentId", studentDelete);

module.exports = router;
