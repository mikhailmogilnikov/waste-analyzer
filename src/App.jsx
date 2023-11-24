import { Route, Routes } from 'react-router-dom';
import UseToTop from './hooks/useToTop';
import './styles/main.scss';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './components/home/Home.jsx';
import Action from './components/action/Action.jsx';
import Presentation from './components/presentation/Presentation.jsx';

function App() {
  return (
    <div className="main-wrapper">
      <UseToTop />

      <Header />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/graph" element={<Action />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
