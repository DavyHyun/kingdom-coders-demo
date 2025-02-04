// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./CollinSection.css";

export default function CollinSection() {
  return (
    <div className="section">
      <h2>We are kingdom coders 😎</h2>
      <img className="image" src={require("./coders.jpeg")} />
    </div>
  );
}
