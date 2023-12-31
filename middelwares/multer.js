const multer = require("multer")
const path = require("path")


module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req,file,cb)=>{
      let ext = path.extname(file.originalname+""+""+new Date())
      if(ext){
        cb(null,true)
      }
    }
})