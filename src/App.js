import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import AlexSection from './sections/AlexSection/AlexSection'
import ChungSection from './sections/ChungSection/ChungSection'
import DerekSection from './sections/DerekSection/DerekSection'
import ChloeSection from './sections/ChloeSection/ChloeSection';
import CollinSection from './sections/CollinSection/ColinSection';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <DemoSection />
          <AlexSection />
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
