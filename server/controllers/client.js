const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');

const Client = require('../models/client');

//POST
const createNewClient = async (req, res) => {
    const client = new Client({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        active: req.body.active,
        photo: req.body.photo,
    });
    const savedClient = await client.save();
    res.json(savedClient);
};

//GET ALL
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
      } catch (err) { 
        res.status(400).json(err);  
      }
};

//GET ONE
const getClientById =  async (req, res) => {
    const { clientId } = req.params;
    try {
        console.log(clientId);
        const client = await Client.findById(clientId);
        res.status(200).json(client);
        }
    catch (err) {
        res.status(400).json(err);
    }
};

//DELETE
const deleteClient = async (req, res) => {
    try {
        const removedClient = await Client.deleteOne({ _id: req.params.clientId });
        res.status(200).json(removedClient);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createNewClient,
    getAllClients,
    getClientById,
    deleteClient,
}
