const axios = require('axios');
const cheerio = require('cheerio');

function _plurksFormat(result) {
    const output = result.data.plurks.map((item) => {
        const $ = cheerio.load(item.content);
        return {
            content: $.text(),
            url: `https://www.plurk.com/p/${parseInt(item.plurk_id).toString(36)}`
        };
    });
    console.log(output);
}

function searchPlurk (query, start_date, end_date) {
    const searchData = { query, start_date, end_date };
    if (!searchData.query) {
        console.log('搜尋條件不正確.');
        return ;
    }
    // 以 axios 方式來搜尋噗浪上的資料
    axios({
        method: 'post',
        url: 'https://www.plurk.com/Search/search2',
        data: encodeURI(`query=${searchData.query}&start_date=${searchData.start_date}&end_date=${searchData.end_date}`),
    }).then(_plurksFormat).catch((err) => {
        console.error('search error:', err);
    })
}

module.exports = {
    searchPlurk
}