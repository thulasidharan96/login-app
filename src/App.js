import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MissingPage from "./pages/MissingPage";

function App() {
  return (
    <div className="App">
      <title>XYZ</title>
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/" element={<HomePage />} />
                <Route path="/Homepage" element={<HomePage/>}/>
                <Route path="*" element={<MissingPage/>}/>
            </Routes>
        
        
        </BrowserRouter>

        
    </div>
  );
}

export default App;
