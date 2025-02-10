import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DemoSection from './sections/DemoSection/DemoSection'
import DemoSection2 from './sections/DemoSection2/DemoSection2'
import ChristinaSection from './sections/ChristinaPhamSection/ChristinaSection'
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
          <DemoSection />
          <DemoSection2 />
          <CollinSection />
          <ChristinaSection />
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
