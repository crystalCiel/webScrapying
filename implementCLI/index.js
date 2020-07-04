const readline = require('readline');
const webCrawler = require('./webScrapying');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function questionSync(str) {
    return new Promise((resolve)=>{
        rl.question(str, resolve);
    });
}

async function questionArray (topic, recodeArr = []) {
    if(topic.length === 0) return recodeArr;
    recodeArr.push(await questionSync(topic.shift()));
    return await questionArray(topic, recodeArr);
}

(async () => {
    let topic = ['請輸入要搜尋的內容: ', '請輸入要搜尋開始日期(格式 yyyy/mm/dd ): ', '請輸入要搜尋結束日期(格式 yyyy/mm/dd ): '];
    const recodeSearchData = await questionArray(topic);
    console.log('資料正在搜尋中，請稍後...');
    await webCrawler.searchPlurk(...recodeSearchData);
    rl.close();
}) ();