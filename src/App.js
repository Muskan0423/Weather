import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Search from './components/Search';


function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Search/>
      {/* <Text/> */}
    </div>
    </>
  );
}

export default App;
