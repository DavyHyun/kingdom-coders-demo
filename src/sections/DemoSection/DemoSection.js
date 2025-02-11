// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./DemoSection.css"
import David from "./david.jpg"

export default function DemoSection() {
  return (
    <div className="mainSectionDemo">
      <div className="subSectionTop">
        <div className="imageAndCaptionSection">
          <div className="imageContainer">
            <img className="image" src={David} alt="David" />
          </div>
          <div className="captionContainer">
            <p>This is David's beautiful face</p>
          </div>
        </div>
        <div className="infoSection">
          <div className="nameAndBioSection">
            <h1>David</h1>
            <p>David is a software engineer at Snackpass. He enjoys long walks on the beach, and coding.</p>
          </div>
          <div className="descriptionSection">
            <p>This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. This is David's description. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
