import DB from './DB'
import User from './User'

class Deposite extends User{
  constructor(dbname){
    super(dbname)
    // this.user = new User(dbname)
  }

  addDeposite({userId,amount, categoryId}){
    let {data,error} = this.getUserById(userId)
      if(error){
        return this.error('userId is not avilable', 'addDeposite')
      }
    // check category existence ...



    let id = new Date().getTime()
    let createdAt = new Date()
    let add = {id,userId,categoryId,amount,createdAt}
    this.db3.deposite[id] = add
    // for (var key in this.db3.users) {
    //       let user = this.db3.users[key]
    //     if (userId == user.id){
    //          this.db3.users[key].deposit += amount
    //     }
    //   }
    this.db3.users[userId].deposit += amount
    this.db3.Category[categoryId].deposit += amount
    this.updateDb(this.db3)
    return this.createSuccess(add,'addDeposite')
  }

  getDepositDAtaByUserId(userId){
    let user = Object.values(this.db3.deposite).filter( data => data.userId == userId)
    if(user.length < 1){
      return this.error404('user not found', 'getDeleteUserById')
    }
    return this.success(user, 'getDAtaBYUserId')
  }

  getDepositDataById(id){
    let depositor = this.db3.deposite[id]
    if(!depositor){
      return this.error404('deposit id not found', 'getDepositDataById')
    }
    return this.success(depositor, 'getDepositDataById')
  }

  getAllDepositeData(){
    return this.db3.deposite;
  }

  getDeletDepositeDataByUserId(userId){
    let { data, error} = this.getDepositDAtaBYUserId(userId)
    if (error) {
      return this.error404('user id is not found', 'getDeletDepositeDataByUserId')
    }
    let item = []
    let amount= 0;
    for(let key in this.db3.deposite) {
      let depositore = this.db3.deposite[key]
      if(depositore.userId == userId){
        item.push(depositore)
        amount += depositore.amount
        delete this.db3.deposite[key]
      }
    }
    this.db3.users[userId].deposit -= amount

    this.updateDb(this.db3)
    return this.deleteSuccess(item, 'getDeletDepositeDataByUserId')

  }

  getDeleteDepositById(id){
    let { data, error} = this.getDepositDataById(id)
    if(error){
      return this.error404('id is invalid', 'getDeleteDepositById');
    }
    // let amount = 0;
    // let depositor;
    // let reffer;
    // for (var key in this.db3.deposite[key]) {
    //   let deposit = this.db3.deposite[key]
    //   if (deposit.id == id)) {
    //     depositor = this.db3.deposite[key]
    //     reffer = this.db3.deposite[key].userId
    //     amount += depsoit.amount
    //     delete this.db3.deposite[key]
    //   }
    // }
    // this.db3.users[refer].deposit -= amount

    let depositId = this.db3.deposite[id]
    delete this.db3.deposite[id]
    this.db3.users[depositId.userId].deposit -= depositId.amount
    this.updateDb(this.db3)
    return this.deleteSuccess(depositId,'getDeleteDepositById')
  }


}

export default Deposite;
