const getStudents = (req, res) => {
    //logic
    let stdData = {name : "Tanuja", roll : "123"}; 
    res.status(200).json({data : stdData});
}

const addStudents = (req, res) => {
    res.status(200).json({message : "data added"});
}

const editStudents = (req, res) => {
    res.status(200).json({message : "data edited"});
}

const deleteStudents = (req, res) => {
    res.status(200).json({message : "data deleted"});
}

export {getStudents, addStudents, editStudents, deleteStudents};