import './App.css';
// import Home from './pages/home/Home';
import AddUser from './pages/userform/UserForm';
import GetUsers from './components/GetUsers';
import ApolloSetup from './components/ApolloSetup';
function App() {
  return (
    <ApolloSetup>
      <div className="App">
      <AddUser />
      <GetUsers />      
 {/*<Home /> */}
      </div>
    </ApolloSetup>
  );
}

export default App;
