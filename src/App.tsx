import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import MainContent from './components/main-content';

function App() {

  return (
    <div className="container">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
