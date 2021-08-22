let driver;

async function vhodWithZip(numberInKatalog) {
    try {
        const path = require('path');
        const fs = require("fs");
        const trevoga_00 = require("./function/trevoga_00");
        const { Builder, By, Key, until } = require('selenium-webdriver');
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        const { PageLoadStrategy } = require("selenium-webdriver/lib/capabilities");
        let adressZiip = path.join(__dirname.replace("\\scenarii\\user_modules", '').replace("/scenarii/user_modules", ''), `files/ipPort/${numberInKatalog}/proxy_auth.zip`);        
        options.setPageLoadStrategy(PageLoadStrategy.NONE); //РАБОТАЕТ!!!!
        //options.setChromeOptions();
        options.addArguments(`useAutomationExtension=False`, `disable-blink-features=AutomationControlled`, `window-size=850,750`, `window-position=10,10`);
       // options.addArguments(`useAutomationExtension=False`, `disable-blink-features=AutomationControlled`);
        function encode(file) {
            var stream = fs.readFileSync(file);
            return new Buffer.from(stream).toString('base64');
        }

        options.addExtensions(encode(adressZiip));
        let parrentAdress = path.join(__dirname.replace("\\scenarii\\user_modules", '').replace("/scenarii/user_modules", ''));
        options.addExtensions(encode(`${parrentAdress}/files/webrtc-control-master.zip`));

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await trevoga_00.sleep(5000);
        await trevoga_00.clickLocationNone(driver);
       // await driver.get('https://browserleaks.com/geo');
        //await trevoga_00.final(driver);
        //await trevoga_00.trevoga(driver);    
        return driver;
    } catch (error) { console.log(error) }

}
module.exports.vhodWithZip = vhodWithZip;