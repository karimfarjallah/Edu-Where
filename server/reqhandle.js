var { signIn, signUp } = require("../controller/userController");
var { enroll } = require("../controller/studentClassController");

var {
  addClass,
  getClasses,
  getClassById
} = require("../controller/classRoomController");
var { getClassesOfStudent } = require("../controller/studentClassController");

const { addPost } = require('../controller/postController')

module.exports.signUp = async (req, res) => {
  var response = await signUp(req.body);
  // console.log(
  //   response,
  //   req.body
  // );
  res.send(response);
};

module.exports.signIn = async (req, res) => {
  var response = await signIn(req.body);
  console.log(response, req.body);
  console.log(response, req.body);
  res.send(response);
};

//classroom
module.exports.addClass = async (req, res) => {
  var response = await addClass(req.body);

  res.send(response);
};

module.exports.getClassesOfStudent = async (req, res) => {
  var response = await getClassesOfStudent();
  console.log(response);
  res.send(response);
};

module.exports.getClasses = async (req, res) => {
  console.log('*********************--------->', req.body)
  getClasses(response => {
    console.log(response)
    res.send(response);
  }, req.body.idStudent);
};

module.exports.getClass = async (req, res) => {
  var id = req.params.id;

  var result = await getClassById(id);

  res.send(result);
};

module.exports.addPost = async (req, res) => {
  var classRoomId = req.params.id;
  addPost(req.body, classRoomId)
}

module.exports.enroll = async (req, res) => {
  console.log('====req.body==>', req.body)

  var res = await enroll(req.body.studentId, req.body.classId)
  console.log('reponse enroll===>', res)
}