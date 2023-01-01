import React from "react";
import emojipedia from "../emojipedia";

function myEntry(term) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {term.emoji}
        </span>
        <span>{term.name}</span>
      </dt>
      <dd>{term.meaning}</dd>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(myEntry)}</dl>
    </div>
  );
}

export default App;
