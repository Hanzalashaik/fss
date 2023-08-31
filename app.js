import fs from "fs"


//Callback Approach

let fileName="Hanzala.txt";
let fileData="I am hanzala";

//creating a file

// fs.writeFile(fileName,fileData,
//     (err)=>{
//         if(err){
//             throw err;
//         }
//         else{
//             console.log("file is created");
            
//         }
//     })

//reading file

// fs.readFile(fileName,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log(data);
        
//     }
// })

//deleting file


// fs.unlink(fileName,(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("File deleted sucessfully");
        
//     }
// })


//Renaming file

// fs.rename(fileName,"rename.txt",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("File renamed!");
        
//     }
// })

//Creating folder

let folder="Apps";

// fs.mkdir(folder,(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("Folder created sucessfully");
        
//     }
// })

//Deleting Folder

fs.rmdir(folder,(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Folder deleted sucessfully");
        
    }
})