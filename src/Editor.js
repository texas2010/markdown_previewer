import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() { 
    return (
      <div id="editor-box" className="col-12 col-lg mr-lg-2 card bg-dark-blue">
        <h5 className="card-header text-white">Editor</h5>
        <div className="card-body">
          <textarea
            id="editor"
            onChange={this.props.handleChangeText}
            className="col-12 bg-dark-blue text-white"
            value={this.props.text}
          ></textarea>
        </div>
      </div>
    )
  }
}

export default Editor