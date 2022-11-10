import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [ text, setText ] = useState(
    `# Markdown preview
    # this is header 1
    ## this is header 2
    ### this is header 3
    
    ---
    
    this is some code
    
    ---
    - list 1
    - list 2
    - list 3

    ---
    `
    );
  return (
    <div className='main'>
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div className='texts'>
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default App;