import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App
