import multer from "multer";
console.log('3');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./src/public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})