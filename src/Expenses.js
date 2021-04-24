import Deposite from './Deposite'


class Expense extends Deposite{
  constructor(dbname) {
    super(dbname)
  }
  addExpense({userId,categoryId,given,cost,description}){
    let { data, error} = this.getUserById(userId)
    if (error) {
      return this.error404('user id not found', 'addExpense')
    }
    let id = new Date().getTime()
    let user = {id,userId,categoryId,given,cost,description}
    this.db3.expenses[id]= user
    if(given<cost){
      this.db3.users[userId].deposit += (cost - given)
      this.db3.Category[categoryId].deposit += (cost - given)
    }
    this.db3.Category[categoryId].deposit -= cost
    this.updateDb(this.db3)
    return this.createSuccess(user,'addExpense')
  }

  getAllExpense(){
    return this.db3.expenses;
  }

  getExpenseById(id){
    let expenseId = this.db3.expenses[id]
    if (!expenseId) {
      return this.error404('id not found', 'getExpenseById')
    }
    return this.success(expenseId,'getExpenseById')
  }

  getExpenseByUserId(userId){
    let { data, error} = this.getUserById(userId)
    if(error){
      return this.error404('user not found', 'getExpenseByUserId')
    }
    let user = Object.values(this.db3.expenses).filter( i => i.userId == userId)
    return this.success(user,'getExpenseByUserId')
  }

  getDeleteExpenseById(id){
    let { data,error} = this.getExpenseById(id)
    if(error){
      return this.error404('id not found', 'getDeleteExpenseById')
    }
    let deletedId = this.db3.expenses[id]
    delete this.db3.expenses[id]
    this.updateDb(this.db3)
    return deleteSuccess(deletedId, 'getDeleteExpenseById')
  }

  getDeleteAllExpenseByUserId(userId){
    let { data, error} = this.getExpenseByUserId(userId)
    if(error){
      return this.error404('user id not  found', 'getDeleteAllExpenseByUserId')
    }
    let arr = []
    for(let key in this.db3.expenses){
      let user = this.db3.expenses[key]
      if(user.userId == userId){
        arr.push(user)
        delete this.db3.expenses[key]
      }
    }
    this.updateDb(this.db3)
    return deleteSuccess(arr, 'getDeleteAllExpenseByUserId')
  }


}


export default Expense;
