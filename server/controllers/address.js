const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');

//POST
router.post("/new-address", async (req, res) => {
    const address = new Address({
        country: req.body.country,
        department: req.body.department,
        state: req.body.state,
        nomclature: req.body.nomclature,
    });
    const savedAddress = await address.save();
    res.json(savedAddress);
});

//GET
router.get("/", async (req, res) => {
    try {
      const addresses = await Address.find();
      res.status(200).json(addresses);
    } catch (err) {
      res.status(400).json(err);
    }
});

// GET a specific address
router.get("/:addressId", async (req, res) => {
    const address = await Address.findById(req.params.addressId);
    res.json(address);
});
  
// DELETE a specific address
router.delete("/:addressId", async (req, res) => {
    const removedAddress = await Address.findByIdAndDelete({ _id: req.params.addressId });
    res.json(removedAddress);
});
  
// UPDATE a specific address
router.patch("/:addressId", async (req, res) => {
    const updatedAddress = await Address.updateOne(
      { _id: req.params.addressId },
      {
        $set: {
          country: req.body.country,
          department: req.body.department,
          state: req.body.state,
          nomnclature: req.body.nomnclature,
        },
      }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
});

// DELETE MANY
router.delete("/delete-many", async (req, res) => {
  console.log("Diste click en eliminar varios");
  const { ids } = req.body;
  try {
    const removedAddress = await Address.deleteMany({
      _id: { $in: ids.map(mongoose.Types.ObjectId) },
    });
    res.status(200).json(removedAddress);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});



module.exports = router;