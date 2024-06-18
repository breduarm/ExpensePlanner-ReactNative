import { generateId } from "../../helpers";

class Expense {
  id: string;
  name: string;
  amount: string;
  category: string;
  date: number;

  constructor(name: string = '', amount: string = '', category: string = '') {
    this.id = generateId()
    this.date = Date.now()
    this.name = name;
    this.amount = amount;
    this.category = category;
  }

  isValidExpense(): boolean {
    return !Object.values(this).includes('');
  }
}

export default Expense;
