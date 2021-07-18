const express = require("express");
const students = require("./data");
const studentRoutes = require("./API/student/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./db/models/index");

app.use(bodyParser.json());
app.use(cors());
app.use("/students", studentRoutes);

// app.get("/students", (req, res) => {
//   res.json(students);
// });

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });

    app.listen(8000, () => {
      console.log("the application is running on localhost 8000");
      // ...
    });
  } catch (error) {
    console.error(error);
  }
};

run();

// const express = require("express");
// let students = require("./data");
// const slugify = require("slugify");

// const app = express();
// const db = require("./db/models/index");

// app.use(express.json());

// app.get("/students", (req, res) => {
//   res.json(students);
// });

// app.delete("/students/:studentId", (req, res) => {
//   const { studentId } = req.params;
//   const foundStudent = students.find((student) => student.id === +studentId);
//   if (foundStudent) {
//     students = students.filter((student) => student !== foundStudent);
//     res.status(204).end();
//   } else {
//     res.status(404);
//     res.json({ message: "Student not found" });
//   }
// });

// app.post("/students", (req, res) => {
//   const id = students[students.length - 1].id + 1;
//   const slug = slugify(req.body.name, { lower: true });
//   const newStudent = { id, slug, ...req.body };
//   students.push(newStudent);
//   res.json(newStudent);
// });

// app.listen(8000, () => {
//   db.sequelize.authenticate();
//   console.log("The application is running on localhost:8000");
// });
