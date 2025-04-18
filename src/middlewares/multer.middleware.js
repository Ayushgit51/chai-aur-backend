import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {// cb = callback
      cb(null, './public/temp') // Set the destination to a temporary folder
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
  export const upload = multer({ storage: storage })