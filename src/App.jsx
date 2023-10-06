import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./Screen/Login/Login";
import HomePrincipal from "./Screen/Home/HomePrincipal";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<HomePrincipal />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
