import { generateId } from "../../helpers";

class Expense {
  id: string;
  name: string;
  amount: string;
  category: string;
  date: number;

  constructor(name?: string, amount?: string, category?: string);
  constructor(name?: string, amount?: string, category?: string, id?: string, date?: number);
  constructor(name?: string, amount?: string, category?: string, id?: string, date?: number) {
    id ? this.id = id : this.id = generateId();
    date ? this.date = date : this.date = Date.now();
    name ? this.name = name : this.name = '';
    amount ? this.amount = amount : this.amount = '';
    category ? this.category = category : this.category = '';
  }

  isValidExpense(): boolean {
    return !Object.values(this).includes('');
  }
}

export default Expense;
