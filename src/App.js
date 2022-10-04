import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import ProjectListPage from './pages/ProjectListPage';
import SingleProjectPage from './pages/SingleProjectPage';
import NavBar from './components/NavBar';
import AddProject from './pages/AddProject';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/project-list' element={<ProjectListPage />} />
        <Route path='/project/:projectId' element={<SingleProjectPage />} />
        <Route path='/project/create' element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
