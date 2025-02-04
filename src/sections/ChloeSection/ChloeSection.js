// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./ChloeSection.css"

export default function ChloeSection() {
  return (
    <div className="section">
      <h2>Chloe's Section</h2>
      <img className='image' src={require("./dog.jpeg")} />
      <h2>Hello</h2>
      <img className='image' src={require("./loopy.jpg")} />
    </div>
  );
}
