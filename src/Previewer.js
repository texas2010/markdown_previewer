import React from 'react';
import marked from 'marked'

marked.setOptions({
  breaks: true
})

function Previewer({ text }) {
  return (
    <div id="preview-box" className="col-12 col-lg mt-2 mt-lg-0 card bg-dark-blue">
      <h5 className="card-header text-white">Previewer</h5>
      <div id="preview"
        className="card-body col-12 bg-dark-blue text-white"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  )
}

export default Previewer