//Этот проект предназначен для накрутки трафика на сайте Ярмарка мастеров.
//Робот заходит на Пинтерест и оттуда переходит по ссылке на Ярмарку мастеров.
//Второй робот заходит напрямую на Ярмарку мастеров и через поисковый запрос находит нужный товар и переходит на него.


/*
const { exec } = require("child_process");

exec("git clone https://github.com/Kuvshinchik/yarmarka.git", (error, stdout, stderr) => {
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


const path = require('path');
const fs = require("fs");
let pahtParametrCikl = path.join(__dirname.replace("\\yarmarka", '').replace("/yarmarka", ''));
pahtParametrCikl = `${pahtParametrCikl}/parametr/1.txt`;
let massivParametrCikl = fs.readFileSync(pahtParametrCikl, 'utf8').trim().split(':::');
let start = massivParametrCikl[0];
let end = massivParametrCikl[1];
let numberAccauntForpublic = massivParametrCikl[2]; //этот параметр и ниже параметр - это откуда берем адреса Пинов
let papkaForpublic = massivParametrCikl[3];
let variantApp = +massivParametrCikl[4];
let startToday = 52;
/**/


async function YarmarkaPoisk (start, end) {
let trevoga_00 = require('./scenarii/user_modules/function/trevoga_00.js');
//let adressIpPort = 'C:/copy/node/pinterest/files/ipPort/00/00.csv';
//let massivIpPort = fs.readFileSync(adressIpPort, 'utf8').trim().split('\n');
let driver;

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
}


/**/

async function YarmarkaPinterest (start, end, numberAccauntForpublic, papkaForpublic) {
 let scenarii_00 = require('./scenarii/scenarii_00.js');
  let trevoga_00 = await require('./scenarii/user_modules/function/trevoga_00.js');

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
};


switch(variantApp) {    
	case 1:
    YarmarkaPoisk (start, end);
	break;	
	case 2:
    YarmarkaPinterest (start, end, numberAccauntForpublic, papkaForpublic);
	break;
  case 3:
//require('./proba_05.js');
require('./scenarii/user_modules/vhod_prosto.js');
//require('./files/ipPort/createZiip.js');
	break;	
	default:
    //trevoga_01()
	break;
}