// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./DerekSection.css"
import img from "./IMG_2228.JPG"

export default function DerekSection() {
  return (
    <div className="derekSection">
      <h2>Derek's Section</h2>
      <img className = "pfp" src={img} alt="Derek" />
    </div>
  );
}
