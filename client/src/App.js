
//components
import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/system';
import DetailView from './components/details/DetailView';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
