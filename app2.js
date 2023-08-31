import fs from "fs/promises";

// using async/await

async function main(){
    try{
        let fileName="hanzala.txt";
        let fileData="Hello World"

        //Creating file
        await fs.writeFile(fileName,fileData)
        console.log("File Created sucessfully");

        // //Reading file
        // let read=await fs.readFile(fileName,"utf-8");
        // console.log(read);


        //Renaming Folder name
        await fs.rename(fileName,"han.txt");
        console.log("Rename sucessfully");
        
        
        

        // //Deleting File
        // await fs.unlink(fileName);
        // console.log("File Deleted Sucessfully");

        // //Creating Folder
        // let folderName="YOO"
        // await fs.mkdir(folderName);
        // console.log("Folder Created Sucessfully");


        // //Deleting Folder
        // await fs.rmdir(folderName);
        // console.log("Folder Deleted Sucessfully");
                   
        
        
    }catch(error){
        console.log(error);
        
    }
}
main()