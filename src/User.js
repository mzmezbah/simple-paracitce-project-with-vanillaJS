import DB from './DB'

class User extends DB{
  constructor(mydb) {
    super(mydb)
  }

  createUser({name,phone}){
    let {data,error} = this.getUserByName(name)
      if(data){
        return this.error('Already exists','createUser' )
      }
    let id = new Date().getTime()
    let user = {id,name,phone,deposit: 0}
    this.db3.users[id] = user
    this.updateDb(this.db3)
    // console.log(db3);
    return this.createSuccess(user,'createUser')

  }

  getAllUsers(){
    return this.db3.users
  }

  getUserByName(name){
    let user = Object.values(this.db3.users).find( data => data.name === name )

    if(!user){
      return this.error404('data not found')
    }
    return this.success(user, 'getUserByName')
  }

  getUserById(id){
    let user = this.db3.users[id]
    if(!user){
      return this.error404('user not found', 'getUserById')
    }
    return this.success(user,'getUserById')
  }

  getUpdateUser({id,name,phone}){
    let {data,error} = getUserById(id)
    if(error){
      this.error404('User not found', 'getUpdateUser')
    }
    let user = this.db3.users[id]
    user.name = name
    user.phone = phone
    this.updateDb(this.db3)
    return this.success(user, 'getUpdateUser')
  }

  getDeleteUserById(id){
    let { data , error } = this.getUserById(id)
    // console.log(error404);
    if (error) {
      return this.error404('id not found', 'getDeleteUserById')
    }
    let user = this.db3.users[id]
    delete this.db3.users[id]
    this.updateDb(this.db3)
    return this.deleteSuccess(user, 'getDeleteUserById')
  }

  getDeleteAllUserByName(name){
    let { data, error}  = this.getUserByName(name)
    if(error){
      return this.error404('user not found', 'getDeleteUserByName')
    }

    let arr = []
    for(let key in this.db3.users){
      let user = this.db3.users[key]
      if(user.name === name){
        arr.push(user)
        delete this.db3.users[key]
      }
    }
    this.updateDb(this.db3)
    return this.deleteSuccess(data,'getDeleteUserByName');
  }

}

export default User

// console.log(mydb.createUser({name: 'zamshed', phone: '01845454542'}));
// console.log(mydb.getAllUsers());
// console.log(MYDB.getDeleteUserById('1609238236058'));
// console.log(mydb.getDeleteUserByName('zishan'));
