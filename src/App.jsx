import { Route, Routes } from 'react-router-dom';
import UseToTop from './hooks/useToTop';
import './styles/main.scss';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Presentation from './components/presentation/Presentation.jsx';
import Analyze from './components/action/Analyze.jsx';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const isDarkMode = useDarkMode();
  return (
    <div className={`main-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      <UseToTop />

      <Header />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/action" element={<Analyze />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
