class Expense {
  name: string;
  amount: string;
  category: string;

  constructor(name: string, amount: string, category: string) {
    this.name = name;
    this.amount = amount;
    this.category = category;
  }

  isValidExpense(): boolean {
    return this.name !== '' && this.amount !== '' && this.category !== '';
  }
}

export default Expense;
