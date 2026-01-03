// const getStudents = (req, res) => {
//     //logic
//     let stdData = {name : "Tanuja", roll : "123"}; 
//     // res.status(200).json({data : stdData});
//     res.status(200).json(stdData);
//     console.log("data added");
// }

// const addStudents = (req, res) => {
//     let mydata = req.body;
//     console.log(mydata);
//     res.status(200).json({message : "data added"});
// }

// const editStudents = (req, res) => {
//     let mydata = req.body;
//     console.log(mydata);
//     res.status(200).json({message : "data edited"});
// }

// const deleteStudents = (req, res) => {
//     res.status(200).json({message : "data deleted"});
// }

// export {getStudents, addStudents, editStudents, deleteStudents};


import student from "../models/studentsModel.js";

const getStudentsDetails = async(req, res) => {
    try{
        // const mydata = await student.find();
        // const mydata = await student.findOne();
        const mydata = await student.findById({_id: "694b85fffb6b34ad252be35a"})
        res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }
};

const getStudentById = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const data = await student.findById({_id : id});
        console.log(data);
        res.status(200).json(data);
    }catch(error) {
        res.status(500).json({error : error.message})
    }
}

const getStudentByConditions = async(req, res) => {
    try {
        const {stdRoll, stdName} = req.query;
        const data = await student.find({stdRoll, stdName});
        res.status(200).json(data);
    }catch(error) {
        res.status(500).json({error:error.message});
    }
}

const updateStudents = async(req, res) => {
    try {
        const {id} = req.params;
        // const data = req.body;
        // const updatedData = await student.findOneAndUpdate({stdRoll : id}, data, {new:true})
        // const updatedData = await student.findByIdAndUpdate({_id:id}, data, {new:true});
        const updatedData = await student.updateMany(
            { status: false },
            { $set: { status: true } }
        );
        if(!updatedData) {
            res.status(404).json({message : "user not exists"});
        }
        res.status(200).json({student : updatedData, message : 'data updated'});
        
    }catch(error) {
        res.status(500).json({error : error.message});
    }
}


const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};

const deleteStudents = async(req, res) => {
  try {
    // const {id} = req.params;
    // const deletedData = await student.deleteOne({stdRoll:id});
    // const deletedData = await student.findByIdAndDelete({_id:id});
    const deletedData = await student.deleteMany({status:false});
    if(!deletedData) {
      res.status(404).json({message : 'User not exists'});
    }
    res.status(200).json({message : 'data deleted'});

  }catch(error) {
    res.status(500).json({error : error.message});
  }
}

export {getStudentsDetails, addStudents, getStudentById, getStudentByConditions, updateStudents, deleteStudents};