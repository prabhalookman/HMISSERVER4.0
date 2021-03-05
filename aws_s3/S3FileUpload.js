import AWS from "aws-sdk";
require('dotenv').config();
// update AWS config env data
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

const s3DefaultParams = {
   
    Bucket: process.env.S3_BUCKET_NAME,
    Conditions: [
        ['content-length-range', 0, 1024000]
    ],
};
const handleFileUpload = async file => {
    const { createReadStream, filename } = await file;
   
    return new Promise((resolve, reject) => {
        s3.upload(
            {
                ...s3DefaultParams,
                Body: createReadStream(),
                Key: `${filename}`,
                
            },
            (err, data) => {
                if (err) {
                    console.log('error uploading...Please upload filesize less than 1 mb...', err);
                    reject(err);
                } else {
                    console.log('successfully uploaded file...', data);
                    resolve(data);
                }
            },
        );
    });
};

export default handleFileUpload;