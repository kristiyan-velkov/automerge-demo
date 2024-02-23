import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserFormPage from "./pages/UserFormPage";
import UserCardPage from "./pages/UserCardPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-black mb-10">
          <div className="max-w-9xl mx-10 px-2 sm:px-2 lg:px-2">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center text-white text-lg font-semibold">
                Automerge Demo
              </div>
              <div className="flex items-center">
                <div className="ml-auto flex-end">
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    Home
                  </Link>
                  <Link
                    to="/user-form"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    User Form
                  </Link>
                  <Link
                    to="/user-card"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  >
                    User Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-form" element={<UserFormPage />} />
          <Route path="/user-card" element={<UserCardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
