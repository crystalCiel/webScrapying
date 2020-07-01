const axios = require('axios');
const cheerio = require('cheerio');

function searchPlurk (query, start_date, end_date) {

    let serchData = {
        query: query,
        start_date: start_date,
        end_date: end_date,
    }

    if (!serchData.query) {
        console.log('搜尋條件不正確.');
        return ;
    } 
    
    // 以 axios 方式來搜尋噗浪上的資料
    axios({
        method: 'post',
        url: 'https://www.plurk.com/Search/search2',
        data: encodeURI(`query=${serchData.query}&start_date=${serchData.start_date}&end_date=${serchData.end_date}`),
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
}

module.exports = {
    searchPlurk
}