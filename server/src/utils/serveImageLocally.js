import fs from 'fs';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadImage = async (url,filename) =>{
    // console.log(__filename)
    // console.log(__dirname)
    // resolve it constructs the filepath for image in images with filename given
    const pathToFile = path.resolve(__dirname,"..","..","images",filename);
    const writer = fs.createWriteStream(pathToFile); // create data stream to write into that path.

    const res = await axios({
        url,
        responseType: 'stream'
    });

    res.data.pipe(writer); // res(readEnd) | writer(writeEnd) -> using pipe.
    // writes automatically into the filename for which writer stream is created.

    return new Promise((resolve,reject)=>{
        writer.on('finish',resolve);
        writer.on('error',reject);
    });
}