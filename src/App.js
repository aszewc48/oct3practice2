import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import ProjectListPage from './pages/ProjectListPage';
import SingleProjectPage from './pages/SingleProjectPage';
import NavBar from './components/NavBar';
import AddProject from './pages/AddProject';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/isAnon';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path='/login' element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path='/project-list' element={<IsPrivate><ProjectListPage /></IsPrivate>} />
        <Route path='/project/:projectId' element={<IsPrivate><SingleProjectPage /></IsPrivate>} />
        <Route path='/project/create' element={
        <IsPrivate>
        <AddProject />
        </IsPrivate>
        } />
      </Routes>
    </div>
  );
}

export default App;
