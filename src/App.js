import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

const placeholder = `
# Header
## Sub Header
[text](link)
my code: \`inline code\`
\`\`\`js
function () {
  return true;
}
\`\`\`
- list
  - list
      - list
- list

> blockquote

![picture of javascript](https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png)

**bold text**
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: placeholder
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(e) {
    const text = e.target.value
    this.setState(() => ({
      text
    }))
  }

  render() {
    return (
      <div id="main" className="container">
        <h1 className="text-center text-white p-3">Markdown Previewer</h1>
        <div className="row">
          <Editor
          text={this.state.text}
          handleChangeText={this.handleChangeText}
          />
          <Previewer text={this.state.text} />
        </div>
      </div>
    )
  }
}

export default App;
