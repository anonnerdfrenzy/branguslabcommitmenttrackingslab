import { labs, commitments, aboutText } from './data/commitments';
import Design1 from './designs/Design1';
import './App.css';

function App() {
  return <Design1 labs={labs} commitments={commitments} aboutText={aboutText} />;
}

export default App;
