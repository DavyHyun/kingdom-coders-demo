// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./RachelSection.css"

export default function RachelSection() {
  return (
    <div className="section">
      <h2>Rachel Sectionssss</h2>
      <img className= "image" src={require('./download.jpeg')}></img>
      <p>02/03/25</p>
    </div>
  );
}
