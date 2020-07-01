const fetch = require('node-fetch');
const cheerio = require('cheerio');

let serchData = {
    query: '爬蟲',
    start_date: '2020/06/30',
    end_date: '2020/06/30',
}

let url = 'https://www.plurk.com/Search/search2?'+ encodeURI( `query=${serchData.query}&start_date=${serchData.start_date}&end_date=${serchData.end_date}`);

// 以 fetch 方式來搜尋噗浪上的資料
fetch(url, {
    method: 'POST',
})
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        let output = data.plurks.map((item) => {
            let $ = cheerio.load(item.content);
            return {content: $.text(), url: plurkId(item.plurk_id)};
        });
        function plurkId (target) {
            return `https://www.plurk.com/p/${parseInt(target).toString(36)}`;
        }

        console.log(output);
    })
    .catch((err) => {
        console.log(err);
    })