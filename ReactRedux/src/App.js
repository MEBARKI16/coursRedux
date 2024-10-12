import Counter from './components/Counter';
import Header from "./components/Header"
import Auth from "./components/Auth"
import { useSelector } from 'react-redux';
import UserProfile from "./components/UserProfile"


function App() {
  const x = useSelector(state => state.auth.isAuthentificated);  //
  return (
    <>
      <Header />
      {
        x ? <UserProfile /> :   <Auth />
      }
    
      <Counter />
    </>
  );
}

export default App;
