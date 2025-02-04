import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import RachelSection from './sections/RachelSection/RachelSection'
import AlexSection from './sections/AlexSection/AlexSection'
import ChungSection from './sections/ChungSection/ChungSection'
import DerekSection from './sections/DerekSection/DerekSection'
import ChloeSection from './sections/ChloeSection/ChloeSection';
import CollinSection from './sections/CollinSection/ColinSection';
import CharisSection from './sections/CharisSection/CharisSection'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: '56px' }}>
          <CollinSection />
          <AlexSection />
          <CharisSection />
          <ChungSection />
          <DerekSection />
          <ChloeSection />
          <RachelSection />
      </div>
    </div>
  );
}

export default App;
