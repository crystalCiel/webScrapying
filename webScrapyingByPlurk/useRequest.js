const request = require('request');
const cheerio = require('cheerio');

let serchData = {
    query: '爬蟲',
    start_date: '2020/06/30',
    end_date: '2020/06/30',
}

// 以 request 方式來搜尋噗浪上的資料
request.post({
    url: 'https://www.plurk.com/Search/search2',
    qs: serchData,
}, (error, res, body) => {
    if ( error || !body ) throw new Error(error);

    let target = JSON.parse(body).plurks;
    let output = target.map((item) => {
        let $ = cheerio.load(item.content);
        return {content: $.text(), url: plurkId(item.plurk_id)}
    });

    function plurkId (target) {
        return `https://www.plurk.com/p/${parseInt(target).toString(36)}`;
    }
    
    console.log(output);
});