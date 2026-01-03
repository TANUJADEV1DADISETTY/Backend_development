function getUserDetails(stuId, getUserSubjects) {
    console.log("Getting user details by student Id", stuId);
    getUserSubjects({stuRoll : "456"});
}
function getUserSubjects(stuRoll, getUserMarks) {
    console.log("Getting user subjects by student roll number", stuRoll)
    getUserMarks({subId : "c-11"});
}
function getUserMarks(subId) {
    console.log("Getting subject marks from subject id:", subId);
}
getUserDetails("123", function(stuRoll) {
    getUserSubjects(stuRoll, function(subId) {
        getUserMarks(subId);
    });
});