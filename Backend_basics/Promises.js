function getUserDetails(stuId) {
    return new Promise((resolve, reject) => {
        console.log("Fun1 called");
        resolve({ stuRoll: "456" });
    });
}

function getUserSubjects(stuRoll) {
    return new Promise((resolve, reject) => {
        console.log("Fun2 called");
        resolve({ subId: "c-11" });
    });
}

function getUserMarks(subId) {
    return new Promise((resolve, reject) => {
        console.log("Fun3 called");
        resolve("Getting subject marks from subject id: " + subId);
    });
}

getUserDetails("123")
  .then((result) => {
      return getUserSubjects(result.stuRoll);
  })
  .then((result) => {
      return getUserMarks(result.subId);
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
