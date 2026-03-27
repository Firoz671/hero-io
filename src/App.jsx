import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Apps from './pages/Apps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';
import NotFound from './pages/NotFound';
import AppNotFound from './pages/AppNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="apps/:id" element={<AppDetails />} />
        <Route path="installation" element={<Installation />} />
        <Route path="app-not-found" element={<AppNotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;