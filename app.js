//require('./proba_05.js');
//require('./scenarii/user_modules/vhod_prosto.js');
//require('./files/ipPort/createZiip.js');




/*


let trevoga_00 = require('./scenarii/user_modules/function/trevoga_00.js');
let end = 88;
let start = 78;
let startToday = 52;
//let adressIpPort = 'C:/copy/node/pinterest/files/ipPort/00/00.csv';
//let massivIpPort = fs.readFileSync(adressIpPort, 'utf8').trim().split('\n');
let driver;
(async () => {
    for (let i = start; i <= end; i++) {
        console.log(i);
        const scenarii_00 = await require('./scenarii/scenarii_00.js');
        driver = await scenarii_00.YarmarkaWithPoisk(i);

    
        if (i != end) {
            (await driver).close();
            await trevoga_00.sleep(5000);
          } else {
            await trevoga_00.final(driver);
            await driver.quit();
            await trevoga_00.sleep(5000);
            try {
              await trevoga_00.DeleteTarget('C:/Users/11/AppData/Local/Temp/', 'scoped_');
            } catch (error) { console.log(error) }
        
            try {                       
              await trevoga_00.DeleteTarget('C:/Users/Администратор/AppData/Local/Temp/', 'scoped_');
            } catch (error) { console.log(error) }
            try {
              await trevoga_00.DeleteTarget('C:/Users/11/AppData/Local/Temp/', 'chrome_BITS_');
            } catch (error) { console.log(error) }
        
            try {                       
              await trevoga_00.DeleteTarget('C:/Users/Администратор/AppData/Local/Temp/', 'chrome_BITS_');
            } catch (error) { console.log(error) }
          }
    
    
         
    }

})();

*/

/*
*/


(async () => {
   //let scenarii_00 = require('https://github.com/Kuvshinchik/maison_marine/blob/main/scenarii_00.js');
 let scenarii_00 = require('./scenarii/scenarii_00.js');
  let trevoga_00 = await require('./scenarii/user_modules/function/trevoga_00.js');

  //let driver;
  //let number_accaunt = 11;    



  //driver = await scenarii_00.firstPosting(11, 7);

  //driver = await scenarii_00.deleteDirtyPinFromDesk(number_accaunt);


  //(await driver).close();


  //driver = await scenarii_00.repostDirtyClean(number_accaunt, 25);
  let end = 0;
  let start = 0;
  let startToday = 66;
  let numberAccauntForpublic = 6; //этот параметр и ниже параметр - это откуда берем адреса Пинов
  let papkaForpublic = 2;
  //let adressIpPort = 'C:/copy/node/pinterest/files/ipPort/00/00.csv';
  //let massivIpPort = fs.readFileSync(adressIpPort, 'utf8').trim().split('\n');
  for (let i = start; i <= end; i++) {
    
    let y = i + (new Date).getDay();
    y = y % 118;
    let text_00 = i + ' - номер ПИНА из таблицы ' + y;
    //console.log(`\x1b[1;31m ${text_00}\x1b[0m\n`)
    console.log(text_00);
    let driver = await scenarii_00.nakrutkaYarmarkaWithPinterest(i, y, y, numberAccauntForpublic, papkaForpublic);
    let originalWindow2 = await driver.getWindowHandle();
    await trevoga_00.sleep(10000);
    if (i != end) {
//на случай потери фокуса еще раз вычисляем ID окна
      if (!!originalWindow2) {
        await driver.switchTo().window(originalWindow2);
    } else {
        await trevoga_00.sleep(5000);
        newWindows = await driver.getAllWindowHandles();
        await newWindows.forEach(handle => { if (handle !== originalWindow2) { temp_02 = handle } });
        if (!!temp_02) {
            await driver.switchTo().window(temp_02);
        } else { console.log('Программа не смогла переопредилить окно!') };
        console.log('Пришлось переопределять оставшееся окно, проблему могу объяснить только отсутствием изоляции, если подтвердится нужно писать TRY!')
    };
//и потом закрываем 
try {
      (await driver).close();
       } catch (error) { console.log(error) }

      await trevoga_00.sleep(5000);
    } else {
      await trevoga_00.final(driver);
      await driver.quit();
      await trevoga_00.sleep(5000);
    
      try {
      await trevoga_00.DeleteTarget('C:/Users/11/AppData/Local/Temp/', 'scoped_');
    } catch (error) { console.log(error) }

    try {                       
      await trevoga_00.DeleteTarget('C:/Users/Администратор/AppData/Local/Temp/', 'scoped_');
    } catch (error) { console.log(error) }
    try {
      await trevoga_00.DeleteTarget('C:/Users/11/AppData/Local/Temp/', 'chrome_BITS_');
    } catch (error) { console.log(error) }

    try {                       
      await trevoga_00.DeleteTarget('C:/Users/Администратор/AppData/Local/Temp/', 'chrome_BITS_');
    } catch (error) { console.log(error) }
    }
  }
})();



/*
const { exec } = require("child_process");

exec("git clone https://github.com/Kuvshinchik/maison_marine.git", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

*/

/*
const { spawn } = require("child_process");

const ls = spawn("git clone https://github.com/Kuvshinchik/maison_marine.git");

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});*/