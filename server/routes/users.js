const express = require('express');
const router = express.Router();
const md_auth  = require('../middlewares/authenticated');
const userController = require('../controllers/user');

router.post("/signup" , userController.register );
router.post("/login" , userController.login );
router.get("/" , userController.getAllUsers );
router.get("/:userId" , userController.getUserById );

router.get("get-me" , [md_auth.ensureAuth] , userController.getMe );
router.patch("/:userId" , [md_auth.ensureAuth] , userController.updateUser );
router.delete("/:userId" ,[md_auth.ensureAuth] , userController.deleteUser );

module.exports = router;