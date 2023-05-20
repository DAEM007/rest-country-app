import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';


const App = () => {
  return (
    <Box>
      <Router>
          <NavBar />
          <Routes>
           <Route path='/' element={<Home />} />
          </Routes>
        </Router>
    </Box>
  );
}
 
export default App;
