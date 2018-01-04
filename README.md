# react-markdown-module

1、基于showdown封装的React-markdown组件，支持showdown的所有option配置项。

2、采用github-markdown-css为默认样式，支持自定义其他样式。

### 安装

```npm
npm i --save react-markdown-module
```

### 用法

1、基本用法

将markdown转换成html

```javascript
import ReactMarkdown from 'react-markdown-module'

const text = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
`
<ReactMarkdown markHtml={text}/>
```

2、自定义配置项

如果你不知道有哪些可选的配置，请看：https://github.com/showdownjs/showdown/wiki/Showdown-options

自定义option会覆盖默认值，但不会影响其他默认值。

```javascript
import ReactMarkdown from 'react-markdown-module'

const text = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
`
const options = {tables: false}
<ReactMarkdown
    markHtml={text}
    options={options}
/>
```

3、自定义样式

不喜欢github-mardown-css的默认样式？没问题，只需要在你的组件导入你喜欢的样式，但是必须有一个命名空间、或者是顶级的classname。
```javascript
import ReactMarkdown from 'react-markdown-module'
import 'otherMarkdownCss.css'
const text = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
`
<ReactMarkdown
    className={'otherMarkdownCss'}
    markHtml={text}
/>
```