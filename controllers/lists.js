const listModel = require('../models/lists')

const getAlllists = async (req, res) => {
    try{
        const lists = await listModel.find()
        res.status(200).json(lists)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

}


const addlist = async (req, res) => {
    const newlist = new listModel({
        listName: req.body.listName,
        status: req.body.status
    })

    try{
        const success = await newlist.save()
        res.status(200).json(success)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }   
}

const getlistById = (req, res) => {
    
    try{
        res.status(200).json(res.list)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const updatelistById = async (req, res) => {
    if(req.body.listName != null)
    {
        res.list.listName = req.body.listName
    }
    if(req.body.status != null)
    {
        res.list.status = req.body.status
    }
    

    try{
        const updatedlist = await res.list.save()
        res.status(200).json(updatedlist)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}


const deletelistById = async(req, res) => {
    try{
        await res.list.deleteOne()
        res.status(200).json({message: `Deleted the list ${res.list.listName}`})
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

const getlist = async (req, res, next) => {
    let list
    try{
        list = await listModel.findById(req.params.id)
        if(list == null){
            return res.status(404).json({message:`Cannot find user id ${req.params.id}`})
        }
    }
    catch(error) {
        return res.status(500).json({message: error.message})
    }

    res.list = list;
    next()

}

module.exports = {getAlllists, addlist, getlistById, updatelistById, deletelistById, getlist}