import React, { useState } from 'react';

function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    studentNumber: '',
    expiryMonth: '',
    expiryYear: '',
    securityCode: '',
    cardholderName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment data:', { paymentMethod, ...formData });
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Payment option</h2>
        <div className="mb-4">
          <button
            type="button"
            className={`btn ${paymentMethod === 'card' ? 'btn-primary' : 'btn-outline-primary'} me-3`}
            onClick={() => setPaymentMethod('card')}
          >
            Card Payment
          </button> 
          <button
            type="button"
            className={`btn ${paymentMethod === 'transfer' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPaymentMethod('transfer')}
          >
            Fund Transfer
          </button>
        </div>
        {paymentMethod === 'card' && (
          <>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="expiryMonth" className="form-label">Expiry month</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryMonth"
                  name="expiryMonth"
                  placeholder="MM"
                  value={formData.expiryMonth}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="expiryYear" className="form-label">Expiry year</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryYear"
                  name="expiryYear"
                  placeholder="YY"
                  value={formData.expiryYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="securityCode" className="form-label">Security code</label>
                <input
                  type="text"
                  className="form-control"
                  id="securityCode"
                  name="securityCode"
                  value={formData.securityCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="cardholderName" className="form-label">Cardholder name</label>
              <input
                type="text"
                className="form-control"
                id="cardholderName"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
        <div className="mb-3">
          <label htmlFor="studentNumber" className="form-label">Student run run</label>
          <input
            type="text"
            className="form-control"
            id="studentNumber"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Pay Now</button>
          <button type="button" className="btn btn-link">Schedule Payment</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentOptions;