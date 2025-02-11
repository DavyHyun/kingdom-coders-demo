// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./AlexSection.css"

export default function AlexSection() {
  return (
    <div className="alexSection">
      <h2>Alex's Section</h2> 
      <img src={(require("./IMG_9035.JPG"))} />
      <p>Hello my name is Alex</p>
    </div>
  );
}
