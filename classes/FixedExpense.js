export class FixedExpense extends BudgetItem {
    constructor(date, title, amount, description) {
        super(date, title, amount, description);
    }
    get description() {
        return `Fixed Expense: ${super.description}`;
    }
}