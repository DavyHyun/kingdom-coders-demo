// Name it YOUR_NAMESection.js
// Task:
// 1. git checkout to your branch
// 2. Add a picture of yourself, and a quick introduction paragraph
// 3. Make something fun happen if you have time (button, text input)
// 4. Commit to our git repository and make a PR

import "./CharisSection.css"
import pic1 from "./010225.jpeg"
import bear from "./bearwithbubbles.gif"
import pic2 from "./121024.JPG" // digicam pic
// import pic3 from "./111224.JPG" // cookie pic
import pic4 from "./020625.JPG" // snow pic
import React from "react"

class CharisSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // mainClassName: "charisSection1"
    };
    // this.handleColorChange = this.handleColorChange.bind(this.handleColorChange)
  }

  render() {
    return (
      <div className={"charisSection"}>
        <h2>‧˚₊‧⋅˚₊‧⋅˚₊‧ Charis' Section ‧₊˚⋅‧₊˚⋅‧₊˚‧</h2>
        <div className="sideBySideContainer">
          <img className="largeImg" src={pic1} alt="me!" />
          <img className="largeImg" src={pic4} alt="snow day" />
          <img className="largeImg" src={pic2} alt="me and the digi"/>
        </div>
        <p>lesgo kingdom coders ❤︎₊⊹</p>
        <div className="sideBySideContainer">
          <img className="bear" src={bear} alt="a happy bear" />
          <div>
            {/* Select background color element to consider re-implementing */}
            {/* <p>choose the background color here!</p>
            <select onChange={this.handleColorChange} >
              <option value={"charisSection1"}>--------</option>
              <option value={"charisSection1"}>lavender</option>
              <option value={"charisSection2"}>light blue</option>
              <option value={"charisSection3"}>sea green</option>
            </select> */}
          </div>
        </div>
      </div>
    );
  }

  // handleColorChange = (event) => {
  //   console.log(this.event.value)
  //   this.setState({
  //     mainClassName: event.target.value
  //   })
  // }

}

export default CharisSection

