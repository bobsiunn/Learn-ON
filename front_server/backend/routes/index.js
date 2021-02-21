const express = require('express');
const router = express.Router();

const multer = require("multer");
const fs = require('fs');
const AWS = require('aws-sdk');
const BUCKET_NAME = 'kpmg-input-video';
const s3 = new AWS.S3();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); //uploads라는 폴더에 file을 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            return cb(res.status(400).end("only mp4 is allowd"), false);
        }
        cb(null, true);
    }
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
        console.log(res.req.file.path);
        return res.json({
            success: true,
            url: res.req.file.path, //파일을 저장하게되면 uploads폴더안에 저장되게되는데 그경로를 보내줌
            fileName: res.req.file.filename,
        });
    });
});
const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };
    s3.upload(params, function(err, data) {
        if (err) { throw err; }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

module.exports = router;