// #!/usr/bin/env/ node
console.log("hello");
const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

const currdir = (cmd,callback)=>{
     exec(cmd,(err,stdout,stderr)=>{
          if(err){
               console.log(`${error}`);
               return;
          }
          if(stderr){
               console.log(`${stderr}`);
          }
          callback(stdout.trim());
     })
} 
// both dir and files
const make = (name)=>{
     const cmd = "pwd";
     currdir(cmd,(currDir)=>{
          const res = `${currDir}`;
          const fileName = name.split('.');
          const data = path.join(currDir,name);
          // console.log(fileName);
          if(fileName.length>1){
               fs.writeFile(data,"",(err)=>{
                    if(err)
                         console.log(`Error creating file ,${err}`);
                    else
                         console.log("File created");
               })
          }
          else{
               fs.mkdir(data,(err)=>{
                    if(err)
                         console.log(err);
                    else
                         console.log("File Created");
               });
          }  
     });  
}
// both dir and files
const remove = (name)=>{
     const cmd = "pwd";
     currdir(cmd,(currDir)=>{
          const res = `${currDir}`;
          const fileName = name.split('.');
          const data = path.join(currDir,name);
          if(fileName.length>1){
               fs.unlink(data,(err)=>{
                    if(err)
                         console.log(`File not deleted ${err}`);
                    else
                         console.log("File deleted");
               })
          }
          else{
               console.log(fileName.length);
               fs.rmdir(data,(err)=>{
                    if(err){
                         console.log(err);
                    }
               });
          }
     });
}
// for both dir and files
const rename = (oldName,newName)=>{
     const cmd = 'pwd';
     currdir(cmd,(currDir)=>{
          const res = `${currDir}`;
          const oldPath = path.join(res,oldName);
          const newPath = path.join(res,newName);
          fs.rename(oldPath,newName,(err)=>{
               if(err){
                    console.log(`Error found : ${err}`);
               }
               else{
                    console.log("Successfully renamed");
               }
          })
     })
}
// give complete path of old and new; only for files
const copyfile = (oldPath,newPath)=>{
     const cmd = 'pwd';
     const dir = oldPath.split('/');
     const ext = oldPath.split('.')[oldPath.split('.').length-1];
     const fileName= oldPath.split('.')[oldPath.split('.').length-2];

     fs.copyFile(oldPath,path.join(newPath,`copy_of_${fileName}.${ext}`),fs.constants.COPYFILE_EXCL, (err)=>{
          if(err)
               console.log(err);
     });
}
// only for files
const movefile = (oldPath,newPath)=>{
     const cmd = 'pwd';
     const dir = oldPath.split('/');
     const fileName = oldPath.split('.')[oldPath.split('.').length-1];
     fs.copyFile(oldPath,path.join(newPath,`.${fileName}`),fs.constants.COPYFILE_EXCL, (err)=>{
          if(err)
               console.log(err);
          else{
               fs.unlink(oldPath,(err)=>{})
               console.log("File moved to a new location");
          }
     });
}
const cutfile = movefile;