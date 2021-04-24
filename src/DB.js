export let DStorage = 'DataStorage'
let db3 = {
  users: {},
  deposite: {},
  expenses : {},
  Category: {}
}

 let Data = localStorage.getItem(DStorage)

if(!Data){
  localStorage.setItem(DStorage, JSON.stringify(db3))
}

class DB {
  constructor(mydb) {
    this.mydb = mydb
    this.db3 = JSON.parse(localStorage.getItem(mydb))
  }

  updateDb(db3){
    localStorage.setItem(DStorage, JSON.stringify(db3))
  }

  error(error,action){
    return {error, action, data: null, status: 400}
  }

  error404(error,action){
    return { error,action, data: null, status: 404}
  }
  success(data,action){
    return {data, action, error: null, status: 200 }
  }

  createSuccess(data,action){
    return {data, action, error: null, status: 201}
  }

  deleteSuccess(data,action){
    return { data, action, error: null, status: 200}
  }

}

export default DB
