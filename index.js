require('dotenv').config();
const express = require("express");
const app = express();
const fs = require('fs');
// const path = require('path');
const date = require('date-and-time')

// const PORT = PORT
const port = process.env.PORT

// // create file
// fs.writeFile('content.txt','!!!This is my content!', (err) => {
//     if (err) throw err;

//     console.log('The file is created!')
// })

// // Read from file
// const filePath = path.join(process.cwd(), 'content.txt')
// // cwd -> current working directory
// fs.readFile(filePath, (error, content) => {
//     if (error) throw error;
//     console.log(content.toString);
// });

// //delete file
// fs.unlink(filePath, (err) =>{
//     if (err) throw err;
//     console.log('File was deleted successfully');
// })

// //Folder content -> display the file in directory
// fs.readdir(process.cwd(), (err, files) =>{
//     if(err) throw err;
//     console.log(files);
// });


// // create a folder / directory
// fs.mkdir(`${process.cwd()}/myFolder/secondFolder`,
// {recursive: true},(err) =>{
//     if (err) throw err;
//     console.log('Folder is created successfully');
// })

// // delete folder
// fs.rmdir(`${process.cwd()}/myFolder/secondFolder`,{recursive:true}, (err) => {
//     if (err) throw err;
//     console.log('Folder is deleted successfully');
// })





// // rename file folder
// fs.rename(`${process.cwd()}/myFolder/secondFolder`, 
// `${process.cwd()}/myFolder/newName`,
//  (err) => {
//     if (err) throw err;
//     console.log('Folder is renamed') 
//  })

// app.get("/",(req,res)=>{res.json("I am backend")});



var d = new Date();
var m = d.getMonth();
var t = d.toLocaleDateString();
var y = d.getFullYear();
// console.log(t);

// to create file


app.post("/createfolder", (req, res) => {
   try {

       fs.writeFile(

           `./03${d.getMonth()}.txt`,
           `today date is ${d}/${m}/${y} time : ${t}`,
           function (err) {
               if (err) throw err;
               console.log("created");
               res.json({ message: "created" })
           });
   }
   catch (err) {
    console.log(err)
       res.json({ message: "error" })
   }

})




// to read file
app.get("/readfile", (req, res) => {
   try {
       fs.readFile(`./03${d.getMonth()}.txt`, "utf-8", function (err, data) {
           if (err) throw err;
           console.log(data);
           res.json(data);
       });
   }
   catch (err) {
       res.json({ message: "error" })
   }

})



// to read folder
app.get("/readfolder", (req, res) => {
   try {
       fs.readdir("./newfile", function (err, data) {
           if (err) throw err;
           console.log(data);
           res.json(data);
       });

   }

   catch (err) {
       res.json({ message: "error" })
   }

})


app.listen(5000, () =>{ 
   console.log(`App is running the PORT ${port}` )
});





















