function getUserDetails(stuId) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({ stuRoll: "456" });
        }, 2000)
    });
}

function getUserSubjects(stuRoll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ subId: "c-11" });
        }, 2000)
    });
}

function getUserMarks(subId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Getting subject marks from subject id: " + subId);
        }, 2000)
    });
}
console.log("hello");

const myfun = async() => {
    const result = await getUserDetails("123");
    console.log(result);8
    const result2 = await getUserSubjects("456");
    console.log(result2);
    const result3 = await getUserMarks("c-11");
    console.log(result3);
}

myfun();