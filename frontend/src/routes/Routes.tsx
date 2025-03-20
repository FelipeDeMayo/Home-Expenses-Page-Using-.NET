import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; 
import UsersPage from "../pages/UsersPage";
import TransactionsPage from "../pages/TransactionsPage";
import AddTransactionsPage from "../pages/AddTransactionsPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {}
        <Route path="/users" element={<UsersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/add-transaction" element={<AddTransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
