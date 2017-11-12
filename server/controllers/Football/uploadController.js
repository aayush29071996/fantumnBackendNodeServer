/*
var User = require('../../models/User');
var moment = require('moment');
var Codes = require('../../Codes');
var Validation = require('../Validation');
var UserProfile = require('../../models/UserProfile');
var HttpStatus = require('http-status');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var Attachment = require('../../models/Football/Master/Attachment');



*/

/*

aws.config.loadFromPath('./config.json');
aws.config.update({

    signatureVersion:'v4'

});

var s0 = new aws.S3({});

var upload = multer({
    storage: multerS3({

        s3:s0,
        bucket:'fantumn-football',
        acl:'public-read',

        metadata: function(req,file,cb){
            cb(null,{fieldName: file.fieldname});
        },
        key: function(req, file, cb){
            cb(null, Date.now()+ file.originalname);
        }
    })

})
*/
/*

exports.multerUpload = upload.single('file');




exports.uploadProfile = function (req, res, next) {
    if (req.body.type === undefined) {
        console.log('Codes.httpStatus.BR');
        console.log(Codes.httpStatus.BR);
        next({
            status: Codes.httpStatus.BR,
            error: {
                description: Codes.errorMsg.M_T_INV
            }
        });
        return;
    }
    var attachment = new Attachment;
    attachment.url = req.file.location;
    attachment.type = req.body.type;
    attachment.viewport = req.body.viewport;
    attachment.save(function (saveErr, savedAttachement) {
        if (saveErr) {
            next({
                status: Codes.httpStatus.BR,
                error: Validation.validatingErrors(saveErr)
            });
            return;
        }
        res.json({
            status: Codes.status.SUCCESS,
            code: Codes.httpStatus.OK,
            data: savedAttachement,
            error: ''
        });
    });
};

*/
