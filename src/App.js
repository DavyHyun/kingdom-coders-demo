import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import CollinSection from './sections/CollinSection/ColinSection';
import CharisSection from './sections/CharisSection/CharisSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <CharisSection/>
          <CollinSection/>
          <DemoSection />
          <DemoSection />
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColor: "lavender"
//     };
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div className="content" style={{ marginTop: '56px' }}>
//           <CharisSection/>
//           <DemoSection />
//           <DemoSection />
//         </div>
//       </div>
//     );
//   }
// }

