const fs = require("fs");
const path = require('path');
const zip = new require('node-zip')();

function creatZipIpPort(varIP, varPort, varIpPort, varLogin, varPassword, nomerPapki) {
    nomerPapki = String(nomerPapki);
   // console.log(typeof(nomerPapki) + '\n' + nomerPapki);
    let fileNameTemp = path.join(__dirname, 'template/background_temp.js');
    let filesTextTemp = fs.readFileSync(fileNameTemp, 'utf8');
    //filesTextTemp = filesTextTemp.replace('host: \"*\"', 'host: \"' + varIP.trim() + '\"').replace('port: \"*\"', 'port: parseInt(\"' + varPort.trim() + '\")').replace('bypassList: [\"*\"]', 'bypassList: [\"' + varIpPort.trim() + '\"]');
    filesTextTemp = filesTextTemp.replace(`*`, varIP.trim()).replace(`"*"`, `parseInt("${varPort.trim()}")`).replace(`*`, varIpPort.trim()).replace(`*`, varLogin.trim()).replace(`*`, varPassword.trim());
    //console.log(filesTextTemp);
    //fileNameTemp = './background.js';
    fileNameTemp = path.join(__dirname, `${nomerPapki}/background.js`);
   // fileNameTemp = path.join(__dirname, '0/background.js');
    fs.writeFileSync(fileNameTemp, filesTextTemp);
    fileNameTemp = path.join(__dirname, 'template/manifest.json');
    filesTextTemp = fs.readFileSync(fileNameTemp, 'utf8');
     filesTextTemp = filesTextTemp.replace(`*`, `${nomerPapki}`);
    fileNameTemp = path.join(__dirname, `${nomerPapki}/manifest.json`);
    //fileNameTemp = path.join(__dirname, '0/manifest.json');
    fs.writeFileSync(fileNameTemp, filesTextTemp);
   

    zip.file('manifest.json', fs.readFileSync(path.join(__dirname, `${nomerPapki}/manifest.json`)));
    zip.file('background.js', fs.readFileSync(path.join(__dirname, `${nomerPapki}/background.js`)));

    let data = zip.generate({ base64: false, compression: 'DEFLATE' });

    fileNameTemp = path.join(__dirname, `${nomerPapki}/proxy_auth.zip`);
    //fileNameTemp = path.join(__dirname, '0/proxy_auth.zip');
    fs.writeFileSync(fileNameTemp, data, 'binary');
}


let adressMassivIp = path.join(__dirname, '00/00.csv');
let massivIp = fs.readFileSync(adressMassivIp, 'utf8').trim().split('\n');

for (let i = 0; i < massivIp.length; i++) { 
let varIP = massivIp[i].trim().split(':')[0];
let varPort = massivIp[i].trim().split(':')[1];
let varIpPort = varIP + ':' + varPort;
let varLogin = massivIp[i].trim().split(':')[2];
let varPassword = massivIp[i].trim().split(':')[3];

//let dirZiip = path.join(__dirname, `${nomerPapki}`);
let dirZiip = path.join(__dirname, String(i));
try {
    if (!fs.existsSync(dirZiip)){
      fs.mkdirSync(dirZiip)
    }
  } catch (err) {
    console.error(err)
  }


creatZipIpPort(varIP, varPort, varIpPort, varLogin, varPassword, i);

}













