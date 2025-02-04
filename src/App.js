import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import ChungSection from './sections/ChungSection/ChungSection'
import DerekSection from './sections/DerekSection/DerekSection'
import ChloeSection from './sections/ChloeSection/ChloeSection';
import CollinSection from './sections/CollinSection/ColinSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <ChungSection />
          <DerekSection />
          <CollinSection />
          <DemoSection />
          <DemoSection />
      </div>
    </div>
  );
}

export default App;
