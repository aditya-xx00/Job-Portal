import DataUriParser from "datauri/parser.js"

import path from "path";

// const getDataUri = (file) => {
//     const parser = new DataUriParser();
//     const extName = path.extname(file.originalname).toString();
//     return parser.format(extName, file.buffer);
// }
const getDataUri = (file) => {
    const extName = path.extname(file.originalname); // Error occurs here
    const base64 = file.buffer.toString("base64");
    return `data:${file.mimetype};base64,${base64}`;
};

export default getDataUri;