import './App.css';
import Header from './components/FinancialMng/Header';
import Home from './components/FinancialMng/Home';
import MakePayment from './components/FinancialMng/MakePayment';
import Transactions from './components/FinancialMng/Transactions';
import PaymentPlans from './components/FinancialMng/PaymentPlans';
import Scholarships from './components/FinancialMng/Scholarships';
import PaymentOptions from './components/FinancialMng/PaymentOptions';
import AddAccount from './components/FinancialMng/AddAccount';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mkpayment" element={<MakePayment />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/paymentplans" element={<PaymentPlans />} />
          <Route path="/scholarships" element={<Scholarships />} /> 
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/add-account" element={<AddAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;