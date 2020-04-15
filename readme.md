##https://github.com/zeit/next-learn-demo/archive/master.zip

使用基於react.js的next.js框架來建立頁面與內容

download整份zip檔案後

使用終端機cd到對應的資料夾後，輸入npm install

1. 使用測試的port

請輸入

npm run dev

打開瀏覽器輸入localhost:3000

可以看到測試server的內容

2. 使用匯出功能

請輸入 npm run build，跑完後輸入npm run exportTrailingSlash

這時候會在資料夾中出現一個out的資料夾，裡面就是匯出的內容

看是要直接把這個資料夾內容丟到server上

或是輸入cd out，然後輸入serve -p port都可以，這個port請輸入你要使用的port

由於next.js的js語法雖然是使用react.js

但是有些使用es5有些使用es6

我統一把風格都改成使用es6

不過目前都是使用function component

後續會一點點改成class component
