const express = require('express');
const router = express.Router();
const ensureAuth  = require('../middlewares/authenticated');
const userController = require('../controllers/user');

router.post("/signup" , userController.register );
router.post("/login" , userController.login );
router.get("/" , userController.getAllUsers );
router.get("/:userId" , userController.getUserById );
router.patch("/:userId" , [ensureAuth.ensureAuth] , userController.updateUser );
router.delete("/:userId" ,[ensureAuth.ensureAuth] , userController.deleteUser );

module.exports = router;