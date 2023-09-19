const express = require('express');
const router = express.Router();

const ensureAuth  = require('../middlewares/authenticated');
const serviceController = require('../controllers/service');

//Para manejo de imagenes
const multer = require('multer');

const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: "uploads/service",
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }   
});

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//         cb(null, 'uploads/service');
//     },
//     filename(req, file = {}, cb) {
//         const { originalname } = file;
//         const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
//         // cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
//         cb(null, `${file.originalname}`);
//     }
// });

const upload = multer({
    storage,
}).single('photos');

router.post("/new-service", upload, serviceController.createNewService);   

router.get("/" , serviceController.getAllServices );
router.get("/:serviceId" , serviceController.getServiceById );
router.delete("/:serviceId" , serviceController.deleteService );

module.exports = router;

// router.post("/new-service", (req, res, next) => {

//     console.log(category);
//     const {...serviceData } = req.body;
//     console.log(req.body);

//     const form = new mp_upload.Form({ uploadDir: './uploads/service' });
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error parsing form data.' });
//       }
  
//       // Accede a los archivos subidos a través de req.files
//       const uploadedFile = files.photos[0]; // Cambia "file" al nombre de tu campo de archivo
  
//       // Puedes mover o manipular el archivo como desees
//       const tempPath = uploadedFile.path;
//       const targetPath = './nueva-ruta/' + uploadedFile.originalFilename;
  
//       // Luego, realiza las acciones específicas que necesites con el archivo
//       // ...
      
//       console.log(files.photos);
//       res.status(200).json({ message: 'File uploaded successfully.' });
//     });
//   });
