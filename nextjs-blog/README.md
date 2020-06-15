#This is a frame makes with next.js frontend and use Strapi.js backend.

##Pages

在Page Folder中第一層的頁面都就是網頁直接顯示的內容頁面，如果打開覺得內容很短，看不出實際內容來源的話，那是因為在內容中都被我打包成components的方式來引入。

###Pages/api

在api Folder中都是JSON檔，用來被引入使用的文字內容，因為如果把文字內容放置於jsx中的話會很難閱讀程式，而且部分可以重複使用的內容就會變的無法重複使用，秉持只寫一次用無數次的想法，額外拉出來使用。

###Pages/apiComponents

在apiComponents Folder中除了functionContextJson.js是用來接入pages/api中JSON中的文字內容，其它則是使用Strapi.js的api方式來接入api內容，這樣接入一次之後只要引用檔案中被export的function就可以直接使用接到的內容了。

###Pages/batman or posts

這兩個Folder中的[id].js就是被用來替代變數id值使用的，如果網站有Dynamic Routes就會使用這個機制。

###Pages/loginComponents

在loginComponents Folder中是Login and Signin兩個components，特別拆開來方便不同位置的引入使用。

##Components

在components Folder只有Header.js、Footer.js、layout.js，其中layout是主體，接入了Header、Footer然後把props.children內容傳入，所以layout才是整個頁面的框架主體，這邊的children就是指每個頁面中的內容。

##Styles

在Styles Folder中使用的css or js用法都是來寫css的，但是使用方式不太一樣，js就是把寫好了css object export出來使用，css則是需要先把檔名寫成example.module.css，使用方式如下。

```
in example.module.css
.divStyle {
	padding: 1rem;
}
.backgroud {
	color: 000000;
}

========================================
in example.js

import Example from './Styles/eaxmple.module.css'

export default const ex = () => {
	return (
		// basic
		<div className={Example.divStyle}>TEST</div>
		//  more
		<div className={`${Exapmle.divStyle} ${Example.backgroud}`}>
	)
}
```

##.env

env檔就是外部port or folder的使用，用來被引用。

##next.config.js

用來接入.env內容，還有如果要進行`npm run build` and  `npm run export`，用來指定特定路徑。
