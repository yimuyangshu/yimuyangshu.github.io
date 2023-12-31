# 常用样式
## box-sizing
`box-sizing: border-box;` 边框和内边距包含width内

## flex
```css
flex-wrap:wrap; /*是否换行展示*/

align-content:space-between;    /* 多行垂直对齐*/ 
justify-content: space-around;  /* 多列水平对齐*/

align-items:center; /* 子项在容器当前行的垂直对齐方向 */
align-self:center;  /* 子项单独垂直对齐方向 */

```

## space-between 元素个数不够分散两端
1. 在后面追加1个空div,设置宽度即可
2. 通过父级伪类
```css
	father:after {
		width:100px; /*子元素宽度*/
		content:''
	}
``` 

## 文本
小程序在`<text>`文本标签内生效

::: code-group
```css [文本操作]
text-decoration:line-through;                       /* 下划线 */
font-style: italic;                                 /* 斜体 */
transform:uppercase|lowercase|capitalize;           /* 大写|小写|首字母大写 */
line-height:1.5;                                    /* 行高 */
letter-spacing:1px;                                 /* 字间距 */
text-indent:20px;                                   /* 文本缩进 */
writing-mode: vertical-rl;                          /* 竖排显示 */
user-select: none;                                  /* 禁止文本被选中 */
```

```css [超出省略]
/*快应用*/
lines:1; 

/*单行超出：*/
width:200px;
white-space: nowrap; /*不换行*/
overflow: hidden;
text-overflow: ellipsis; /*文本溢出 ：省略号*/ 

/*超出两行（多行）显示…*/
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /*需要...的行号*/
-webkit-box-orient: vertical;
```

```css [换行]
white-space:pre;        /* 保留空格不换行 */
white-space: pre-wrap;  /* 保留空格换行 */

word-wrap: break-word;  /* 允许长单词或URL地址内部换行*/
word-break: break-all;  /* 允许单词内换行 */  
```
:::

## 选择器:伪类
```css
.item:not(:last-child){}                /* 排除最后一个子元素 */
.item-line:not(:last-child)::after{}    /* 选定除了最后一个元素的内容之后插入 */

```


## 元素吸底
```css
position:sticky;
bottom: 60px;
```

## 背景色渐变
```css
background-image: linear-gradient(#F9C22A,#B86B16)
```

### 抖音小程序中宽度随内容长度变化(标签)
```css
	element {
		width: fit-content;
		width: -moz-fit-content;
		width: -webkit-fit-content;
	}
```


## Electron
:::code-group
```css [最小最大关闭按钮失效]
.custom-titlebar {
  -webkit-app-region: drag; /* 标题栏允许拖动整个窗口 */
}

.custom-button {
  -webkit-app-region: no-drag; /* 给操作按钮设置禁止拖动 */
}
```

```text [换机器功能有问题]
静态文件加上版本号，防止老机器缓存不加载
```
:::

## 滚动条
```css
/*整个滚动条*/
::-webkit-scrollbar {
    width: 10px;
    background-color: #dcdcdc;
    border-radius: 4px;
}
/*滑块*/
::-webkit-scrollbar-thumb{
    background-color: #2678FF;
    border-radius: 4px;
}
/*滑块hover*/
::-webkit-scrollbar-thumb:hover {
    background: #2678FF;
}
```