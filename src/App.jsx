import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Feed from './pages/Feed';
import Collections from './pages/Collections';
import Community from './pages/Community';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/30">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/community" element={<Community />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;