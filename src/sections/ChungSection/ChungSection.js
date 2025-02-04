// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./ChungSection.css"
import me from "./DSCF5272.jpg"
import christmas from "./P1010064.jpg"

export default function ChungSection() {
  return (
    <div className="chungSection">
      <h2>Christian's Section!</h2>
      <img className="pfp" src= {me} alt="handsome man" />
      <img className="christmas" src= {christmas} alt="me and my christmas gifts" />
    </div>
  );
}
