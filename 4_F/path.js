const path=require('path')
const pathFile="C:\\Users\\prade\\OneDrive\\Desktop\\4_F\\path.js"
console.log(path.dirname(pathFile))
console.log(path.basename(pathFile))
console.log(path.extname(pathFile))
const newpathFile=path.join(path.dirname(pathFile),'os.js')
console.log(newpathFile)