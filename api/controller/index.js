const companyModel = require('../model/index')

exports.getData = async(req,res)=>{
    try {
        let textSearch = req.query.textSearch
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage - 1)*limit
        let totalRecord = await companyModel.countDocuments({name:{$regex:textSearch,$options:'i'}})
        let totalPage = Math.ceil(totalRecord/limit)
        let getData = await companyModel.find({name:{$regex:textSearch,$options:'i'}}).skip(skip).limit(limit)
        res.send({getData,totalPage})
        console.log("quanggggggggg")
        console.log("alo alo")
    } catch (error) {
        res.send(error)
    }
}

exports.addData = async(req,res)=>{
    try {
        let {name,address,numberOfEmoloyees,creationDate} = req.body
        let addData = await companyModel.create({name,address,numberOfEmoloyees,creationDate})
        res.send({addData})
    } catch (error) {
        res.send(error)
    }
}

exports.deleteData = async(req,res)=>{
    try {
        let id = req.body.id
        let deleteData = await companyModel.findByIdAndDelete(id)
        res.send({deleteData})
    } catch (error) {
        res.send(error)
    }
}

exports.updateData = async(req,res)=>{
    try {
        let {id,name,address,numberOfEmoloyees,creationDate} = req.body
        let updateData = await companyModel.findByIdAndUpdate(id,{name,address,numberOfEmoloyees,creationDate},{new:true})
        res.send({updateData})
    } catch (error) {
        res.send(error)
    }
}