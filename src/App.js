import SearchHeader from './components/SearchHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
