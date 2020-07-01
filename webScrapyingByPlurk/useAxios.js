const axios = require('axios');
const qs = require('qs');
const cheerio = require('cheerio');

let serchData = {
    query: '爬蟲',
    start_date: '2020/06/30',
    end_date: '2020/06/30',
}

// 以 axios 方式來搜尋噗浪上的資料
axios({
    method: 'post',
    url: 'https://www.plurk.com/Search/search2',
    // 下面 data 傳值的方式擇一使用
    data: encodeURI(`query=${serchData.query}&start_date=${serchData.start_date}&end_date=${serchData.end_date}`),
    // data: qs.stringify(serchData),
})
    .then((result) => {
        let target = result.data.plurks;
        let output = target.map((item) => {
            let $ = cheerio.load(item.content);
            return {content: $.text(), url: plurkId(item.plurk_id)};
        });
        function plurkId (target) {
            return `https://www.plurk.com/p/${parseInt(target).toString(36)}`;
        }

        console.log(output);
    })
    .catch((err) => {
        console.error('serch error:', err);
    })