const express = require('express');
const router = express.Router();

const ensureAuth  = require('../middlewares/authenticated');
const categoryController = require('../controllers/category');

router.post("/new-category" , categoryController.createNewCategory);
router.get("/" , categoryController.getAllCategories );
router.get("/:categoryId" , categoryController.getCategoryById );
router.delete("/:categoryId" , categoryController.deleteCategory );

module.exports = router;