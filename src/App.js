import React, { useState } from "react";
import Markdown from "react-markdown";

function App() {
  const [mdInput, setMdInput] = useState("# hello world");

  const copyText = () => {
    const textarea = document.querySelector(".input-container textarea");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <div className="App">
      <header className="header">
        <h3>
          <a className="header-link" href="/">Markdown previewer</a>
        </h3>
        <div>
          <a
            className="header-link"
            href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
          >
            Cheat sheet
          </a>
          <a
            className="header-link"
            href="https://npmjs.org/package/react-markdown"
          >
            react-markdown
          </a>
        </div>
      </header>
      <div className="container">
        <div className="previewer">
          <div className="input-container">
            <div onClick={copyText} className="copy">
              Copy
            </div>
            <textarea
              value={mdInput}
              onChange={(e) => {
                setMdInput(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="preview">
            <Markdown source={mdInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
