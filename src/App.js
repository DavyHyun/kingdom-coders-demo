import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import DerekSection from './sections/DerekSection/DerekSection'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <DerekSection />
          <DemoSection />
          <DemoSection />
      </div>
    </div>
  );
}

export default App;
