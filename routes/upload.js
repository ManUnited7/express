var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer')
var upload = multer();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.post('/', upload.single('img'),function(req, res, next) {
    if(!req.file){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('请选择文件！')
        return;
    }
    if(req.body.text){
        console.log(req.body.text)
        if(!fs.existsSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}`))){
            fs.mkdirSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}`))
        }
        if(req.body.option){
            if(!fs.existsSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}/${req.body.option}`))){
                fs.mkdirSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}/${req.body.option}`))
            }
            if(req.body.name){
                if(!fs.existsSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}/${req.body.option}/${req.body.name}`))){
                    fs.mkdirSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}/${req.body.option}/${req.body.name}`))
                }
                if(!req.file){
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                    res.end('上传失败！')
                    return;
                }else{
                    fs.writeFileSync(path.join(__dirname,`../public/uploadfront/resource/${req.body.text}/${req.body.option}/${req.body.name}/${req.file.originalname}`),req.file.buffer);
                } 
            }else{
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                res.end('请选择姓名')
            }
        }
    }else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('请选择班级')
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('上传成功！')
});

module.exports = router;