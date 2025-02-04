import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import CharisSection from './sections/CharisSection/CharisSection'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <CharisSection />
          <DemoSection />
          <DemoSection />
      </div>
    </div>
  );
}

export default App;
