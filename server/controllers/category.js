const express = require('express');
const { default: mongoose } = require('mongoose');
const Category = require('../models/category');

//POST
const createNewCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
    });
    const savedCategory = await category.save();
    res.json(savedCategory);
};

//GET ALL
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
      } catch (err) { 
        res.status(400).json(err);  
      }
};

//GET ONE
const getCategoryById =  async (req, res) => {
    const { categoryId } = req.params;
    try {
        console.log(categoryId);
        const category = await Category.findById(categoryId);
        res.status(200).json(category);
        }
    catch (err) {
        res.status(400).json(err);
    }
};

//DELETE
const deleteCategory = async (req, res) => {
    try {
        const removedCategory = await Category.deleteOne({ _id: req.params.categoryId });
        res.status(200).json(removedCategory);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    createNewCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory,
}
