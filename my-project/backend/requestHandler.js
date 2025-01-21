import pkg from 'jsonwebtoken'
const {sign}=pkg
import service from './modeles/service.model.js'
import project from './modeles/projects.model.js'
import review from './modeles/review.model.js'


export async function addService(req,res){

    const {image,title,description}=req.body

    if(!(image&&title&&description))
        return res.status(400).send("fields requied")
    
    await service.create({image,title,description}).then(()=>{
        return res.status(200).send("New service created successfully")
    }).catch((error)=>{
        return res.status(500).send(error,"internal error")
    })
}

export async function getServices(req,res){
    try {
        const data=await service.find({}).then((data)=>{
            return res.status(200).send(data)

            if(!data)
                return res.status(400).send("No data available")
        })
    } catch (error) {
      return res.status(500).send(error,"error while loading services")  
    }
}

export async function editService(req,res){
    try {
        const {id}=req.params
        const data=await service.findOne({_id:id})
        return res.status(200).send(data)
        console.log(res);
        
    } catch (error) {
        
    }
}

export async function addProject(req,res){
    const {name,description,photo,link}=req.body

    if(!(photo&&name&&description&&link))
        return res.status(400).send("fields required")

     await project.create({photo,name,description,link}).then(()=>{
        return res.status(201).send("Projects added successfully")
     }).catch((error)=>{
        return res.status(500).send(error,"Internal error in addding projects")
     })
}

export async function getProjects(req,res){
    try {
       const data=await project.find({}).then((data)=>{
        return res.status(200).send(data)
       }) 

       if(!data)
        return res.status(400).send("No projects available")
    } catch (error) {
        return res.status(500).send(error,"internal error in getting projects")
    }
}

export async function editProject(req,res){
    try {
        const {id}=req.params
        const data=await project.findOne({_id:id})
        return res.status(200).send(data)
        console.log(res);
        
    } catch (error) {
        
    }
}

export async function addReview(req,res){
    const {name,content,photo,role}=req.body

    if(!(photo&&name&&content&&role))
        return res.status(400).send("fields required")

     await review.create({photo,name,content,photo}).then(()=>{
        return res.status(201).send("Projects added successfully")
     }).catch((error)=>{
        return res.status(500).send(error,"Internal error in addding projects")
     })
}

export async function getReview(req,res){
    try {
       const data=await review.find({}).then((data)=>{
        return res.status(200).send(data)
       }) 

       if(!data)
        return res.status(400).send("No projects available")
    } catch (error) {
        return res.status(500).send(error,"internal error in getting projects")
    }
}