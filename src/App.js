import './App.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MainDesign from './Pages/LoginSignUp/OrderLogin';
import Router from './Router/Router';
import '../src/Components/Interceptor/Interceptor.js'
function App() {
  return (
    <div className="App">
      {/* <MainDesign/> */}
      {/* <DashBoard/> */}
      <Router/>

    </div>
  );
}

export default App;
