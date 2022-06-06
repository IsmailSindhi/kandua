import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './screens/homeScreen/Home';
import Navbar from './components/navbar/Navbar';
import About from './screens/aboutScreen/About';
import Login from './screens/loginScreen/Login';
import SignUp from './screens/signUpScreen/SignUp';
import Test from './screens/testScreen/Test';
import NotFound from './screens/notFoundScreen/NotFound';
import Footer from './components/footer/Footer';


function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' exact element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/login'  element = {<Login />} />
        <Route path='/sign-up'  element = {<SignUp />} />
        <Route path='/test' element = {<Test />} />
        <Route path='*' element = {<NotFound />} />
      </Routes >
    </Router>
    <Footer />

  </>
  );
}

export default App;
