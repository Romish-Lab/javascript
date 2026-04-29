// const path = require("path");

// const url = "./src/folder/file.txt";

// console.log(path.extname(url)); // .txt
// console.log(path.basename(url)); // file.txt
// console.log(path.dirname(url)); // ./src/folder

// const dir = path.join("../", "base", "..", "url");
// console.log(dir); // ../url

// const abs = path.resolve("./server.js");
// console.log(abs)

// console.log(path.relative("./",abs))
// console.log(dir)

//! file system=>fs

// const { error } = require("console");
// const fs = require("fs");
// fs.writeFile("./text.txt", "File Created", (error) => {
//   if (error) {
//     console.log("error!!");
//     return;
//   }
//   console.log("write file completed");
// });

// fs.appendFile("./file.txt", "\nAppend ............................................", (error) => {
//   if (error) {
//     console.log("error!!");
//     return;
//   }
//   console.log("appended");
// });

// fs.readFile('./file.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log('Error!!!')
//     }
// console.log(data)

// })
const fs = require("fs");

// fs.unlink("./text.txt", (err) => {
//   if (err) {
//     if (err.code === "ENOENT") {
//       console.log("file not found");
//     } else {
//       console.log("error deleting file");
//     }
//     return;
//   }
//   console.log("file deleted
fs.mkdir("./folder/dir", { recursive: true }, (err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("folder created");
});

