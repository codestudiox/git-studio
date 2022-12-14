let invoices = [
  {
    theme: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
    url: "/invoices/1955",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
    url: "./invoices/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
    url: "./invoices/2000",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
    url: "./invoices/2000",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
    url: "./invoices/2000",
  },
]

export function getInvoices() {
  return invoices
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number)
}
