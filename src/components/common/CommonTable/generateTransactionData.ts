import './CommonTable.scss'

export const generateTransactionData = (count = 10) => {
  return Array.from({ length: count }, (_, index) => ({
    transactionId: `TXN-032165-${index + 1}`,
    customer: "John D.",
    email: "johnd@gmail.com",
    date: "2025-06-12 | 14:15",
    gross: "₱1400.00",
    vat: "₱150.00",
    net: "₱1250.00",
    status: "Completed",
  }));
};
