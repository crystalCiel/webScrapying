const readline = require('readline');
const webCrawler = require('./webScrapying');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let topic = ['請輸入要搜尋的內容: ', '請輸入要搜尋開始日期(格式 yyyy/mm/dd ): ', '請輸入要搜尋結束日期(格式 yyyy/mm/dd ): '];
let recodeSerchData = [];

function question (topic, recodeArr ) {
    return new Promise ((reslove, reject) => {
        rl.question(topic, (answer) => {
            recodeSerchData.push(answer);
            reslove();
        });
    })
}

// 下面兩種匿名函數擇一使用 (相同作用不同寫法)
// 方法一 : 波動拳法(??
// (() => {
//     rl.question(topic[0], (answer) => {
//         recodeSerchData.push(answer);
    
//         rl.question(topic[1], (answer) => {
//             recodeSerchData.push(answer);
    
//             rl.question(topic[2], (answer) => {
//                 recodeSerchData.push(answer);

//                 console.log('資料正在搜尋中，請稍後...');
//                 console.log('');

//                 webCrawler.searchPlurk(recodeSerchData[0], recodeSerchData[1], recodeSerchData[2]);
                
//                 rl.close();
//             });
//         });
//     });
// }) ();

// 方法二
(async () => {
    await question(topic[0]);
    await question(topic[1]);
    await question(topic[2]);

    console.log('資料正在搜尋中，請稍後...');
    console.log('');

    await webCrawler.searchPlurk(recodeSerchData[0], recodeSerchData[1], recodeSerchData[2]);

    rl.close();
}) ();