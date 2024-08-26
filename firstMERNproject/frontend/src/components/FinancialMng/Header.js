import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/mkpayment">Make Payment</a>
                <a class="nav-item nav-link" href="/transactions">Transactions</a>
                <a class="nav-item nav-link" href="/paymentplans">Payment Plans</a>
                <a class="nav-item nav-link" href="/scholarships">Scholarships</a>
            </div>
        </div>
    </nav>
  );
}

export default Header;