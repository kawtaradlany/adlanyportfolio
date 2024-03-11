
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { Header } from './layouts/header';
import { Test } from './pages/work/test';
import { ContactPage} from './pages/contact/contact'

function App() {
  return (
    <>
    
    <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage />} />
      </Routes >
    </>

  );
}
export default App;
