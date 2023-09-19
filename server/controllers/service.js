
const Service = require('../models/service');


//POST
const createNewService = async (req, res) => {
    const { name, description, category } = req.body;
    const {path}= req.file;
    const newService = new Service({
        name,
        description,
        category,
        active: true,
    });
    console.log(path);
    const newPath = path.replace(/\\/g, "/");

    console.log(newPath);
    newService.photos.push(newPath);

    const savedService = await newService.save();
    console.log(req.file);
    res.status(200).json(savedService);
};

//GET ALL
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
      } catch (err) { 
        res.status(400).json(err);  
      }
};

//GET ONE
const getServiceById =  async (req, res) => {
    const { serviceId } = req.params;
    try {
        console.log(serviceId);
        const service = await Service.findById(serviceId);
        res.status(200).json(service);
        }
    catch (err) {
        res.status(400).json(err);
    }
};

//DELETE
const deleteService = async (req, res) => {
    try {
        const removedService = await Service.deleteOne({ _id: req.params.serviceId });
        res.status(200).json(removedService);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createNewService,
    getAllServices,
    getServiceById,
    deleteService,
}