import React from "react";

function Transactions() {
    // Sample transaction data
    const transactions = [
        {
            id: 1,
            date: "2024-09-20",
            description: "Payment for Course Registration",
            amount: "$200.00",
            status: "Completed",
        },
        {
            id: 2,
            date: "2024-09-19",
            description: "Payment for Tuition Fees",
            amount: "$1500.00",
            status: "Completed",
        },
        {
            id: 3,
            date: "2024-09-15",
            description: "Payment for Library Membership",
            amount: "$50.00",
            status: "Pending",
        },
        {
            id: 4,
            date: "2024-09-10",
            description: "Application Fee",
            amount: "Rs.2000.00",
            status: "Completed",
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Transaction History</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Transactions;
