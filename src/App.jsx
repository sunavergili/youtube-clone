import Header from "./components/layout/header.jsx";
import Detail from "./pages/detail";
import Feed from "./pages/feed";
import Search from "./pages/search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <div className="flex w-full">
          <Sidebar />

          <main className="flex-1 w-full overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/watch" element={<Detail />} />
              <Route path="/results" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
