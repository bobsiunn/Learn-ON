const express = require('express');
const router = express.Router();

const multer = require("multer");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); //uploads라는 폴더에 file을 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
        //파일이름을 현재시간_파일이름.mp4로 저장하겠다는의미(중복방지)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            //파일확장자는 mp4만허용 추가하고싶다면 || ext !== '.wmv' 와같이가능
            return cb(res.status(400).end("only mp4 is allowd"), false);
        }
        cb(null, true);
    },
});
const upload = multer({ storage: storage }).single("file"); //파일하나만업로드하겠다는의미

//=================================
//             Video
//=================================

router.post("/uploadfiles", (req, res) => {
    //비디오를 서버에 저장한다.
    upload(req, res, (err) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            url: res.req.file.path, //파일을 저장하게되면 uploads폴더안에 저장되게되는데 그경로를 보내줌
            fileName: res.req.file.filename,
        });
    });
});


module.exports = router;