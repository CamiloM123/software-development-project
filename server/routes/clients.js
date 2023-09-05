const express = require('express');
const router = express.Router();

const ensureAuth  = require('../middlewares/authenticated');
const clientController = require('../controllers/client');

router.post("/new-client" , clientController.createNewClient);
router.get("/" , clientController.getAllClients );
router.get("/:clientId" , clientController.getClientById );
router.delete("/:clientId" , clientController.deleteClient );

module.exports = router;