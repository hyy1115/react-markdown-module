import React from 'react'
import showdown from 'showdown'
import './githubCss.css'

const ReactMarkdown = () => {
    //默认option配置
    const options = {
        omitExtraWLInCodeBlocks: true,
        noHeaderId: true,
        parseImgDimensions: true,
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true,
        literalMidWordUnderscores: true,
        tables: true,
        tasklists: true,
        strikethrough: true
    }
    class Markdown extends React.Component {
        constructor(props) {
            super(props)
            this.options = {...options, ...props.options}
            this.converter = new showdown.Converter(this.options)
        }
        render() {
            const { markHtml, className } = this.props
            const cls = !!className ? className : 'markdown-body'
            return (
                <div
                    className={cls}
                    dangerouslySetInnerHTML={{__html: this.converter.makeHtml(markHtml)}}
                />
            )
        }
    }
    return Markdown
}
export default ReactMarkdown()