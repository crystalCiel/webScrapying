# README

爬蟲 ( web scrapying ) 練習

以噗浪 ( Plurk ) 社群網站為例，目前有搭配 CLI 與使用者做互動式指令的延伸，未來可能會將此項目做其他延伸練習

## 安裝 ( Install )

和一般 node.js 的操作方式相同

```javascript
npm install
```

## 使用方法 ( Usage )

### 爬蟲 ( web scrapying )

先進到 /webScrapyingByPlurk 的資料夾中

```
cd webScrapyingByPlurk
```

執行指令
* 三個檔案擇一使用 ( 一樣的結果不同寫法 )
* 預設搜尋關鍵字為"爬蟲"，若要搜尋其他關鍵字請自行修改 serchData 的內容

``` 
node useAxios.js
```

### 延伸練習之互動式指令 ( CLI )

先進到 /implementCLI 的資料夾中

```
cd implementCLI
```

執行指令

```
node index.js
```