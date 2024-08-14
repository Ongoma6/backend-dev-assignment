// Mock data for demonstration
let expenses = [
    { id: 1, category: 'Groceries', amount: 50 },
    { id: 2, category: 'Transportation', amount: 20 },
    // Add more mock expenses as needed
  ];
  
  exports.getAllExpenses = (req, res) => {
    res.status(200).json(expenses);
  };
  
  exports.addExpense = (req, res) => {
    const newExpense = req.body;
    expenses.push(newExpense);
    res.status(201).send({ message: 'Expense added', expense: newExpense });
  };
  
  exports.updateExpense = (req, res) => {
    const expenseId = parseInt(req.params.id, 10);
    const updatedExpense = req.body;
  
    expenses = expenses.map(exp => (exp.id === expenseId ? updatedExpense : exp));
    res.status(200).send({ message: 'Expense updated', expense: updatedExpense });
  };
  
  exports.deleteExpense = (req, res) => {
    const expenseId = parseInt(req.params.id, 10);
    expenses = expenses.filter(exp => exp.id !== expenseId);
    res.status(200).send({ message: `Expense with id ${expenseId} deleted` });
  };
  
  exports.calculateTotalExpense = (req, res) => {
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    res.status(200).json({ totalExpense });
  };
  