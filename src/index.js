import DB,{ DStorage } from './DB'
import User from './User'
import Deposite from './Deposite'
import Expense from './Expenses'
import Category from './Category'


let user = new User(DStorage)
let deposit = new Deposite(DStorage)
let expense = new Expense(DStorage)
let category = new Category(DStorage)
let db = new DB(DStorage)


// console.log(expense.addExpense({userId: 1609427715960, categoryId: 1609426555359, given: 600,  cost: 700, description: 'rice,chiken,potato'}));

function $(selector) {
  return document.querySelector(selector)
}


let userBtn = $('#userBtn')
let depositBtn = $('#depositBtn')
let expenseBtn = $('#expenseBtn')
let categoryBtn = $('#categoryBtn')
let millBtn = $('#millBtn')

let userSec = $('.userSec')
let depositeSec = $('.depositeSec')
let expenseSec = $('.expenseSec')
let homeSec = $('.homeSec')
let categorySec = $('.categorySec')

let userAdd = $('.userAdd')
let depositAdd = $('.depositAdd')
let expenseAdd = $('.expenseAdd')
let categoryAdd = $('.categoryAdd')



userBtn.addEventListener('click', ()=> {
  userSec.style.display = 'block';
  depositeSec.style.display = 'none'
  expenseSec.style.display = 'none'
  categorySec.style.display = 'none'
  homeSec.style.display = 'none'
  // userBtn.style = clicked;
  let tbody = $('#tbodyUse')
  let data = user.getAllUsers()
  let trs = ''
  Object.values(data).forEach(Contact => {
    // console.log(data);
    trs += createUserElement(Contact)
  })

  userAdd.addEventListener('click', ()=> {
    trs += createNewUserElement()
  })
  tbody.innerHTML = trs

  for(let i in tbody.children){
    const ele = tbody.children[i]
    if(typeof ele === 'object'){
      const editBtn = ele.querySelector('.editBtn')
      const deleteBtn = ele.querySelector('.DeleteBtn')
      editBtn.addEventListener('click',() => {
        alert('are aodakfjlkdj ldkj')
      })
      deleteBtn.addEventListener('click', () => {
        let cells = ele.getElementsByTagName('td')
        let id = cells[0].innerText
        user.getDeleteUserById(id)
        tbody.removeChild(tbody.children[i])
      })

    }
  }

})

function createUserElement({ name, id, phone, deposit }) {
  return `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${phone}</td>
      <td>${deposit}</td>
      <td>
        <button class="editBtn" type="button" name="button">edit</button>
        <button class="DeleteBtn" type="button" name="button">Delete</button>
      </td>
    </tr>
  `
}

function createNewUserElement(){
  // let tbody = $('#tbodyUse')
  let uForm = document.forms['userForm']
  const name = uForm['userName'].value
  const phone = uForm['phone'].value
  let {data,error} = user.createUser({name,phone})
  createUserElement(data)
  uForm.reset()
}



depositBtn.addEventListener('click', () => {
  userSec.style.display = 'none';
  depositeSec.style.display = 'block'
  expenseSec.style.display = 'none'
  categorySec.style.display = 'none'
  homeSec.style.display = 'none'
  let tbody = $('#tbodyDep')
  let data = deposit.getAllDepositeData()
  let tbr = '';
  Object.values(data).forEach(Contact => {
    // console.log(Contact);
    tbr += createDepositElement(Contact)
  })
  depositAdd.addEventListener('click', ()=> {
    tbr += createNewDepositElement()
    console.log(createNewDepositElement());
  })
  tbody.innerHTML = tbr
  // console.log(tbody);
  for(let i in tbody.children){
    const ele = tbody.children[i]
    // console.log(ele);
    if(typeof ele === 'object'){
      // console.log(ele);
      const editBtn = ele.querySelector('.editBtn')
      const deleteBtn = ele.querySelector('.DeleteBtn')
      editBtn.addEventListener('click',() => {
        alert('i am clicked')
      })
      deleteBtn.addEventListener('click', () => {
        let cells = ele.getElementsByTagName('td')
        let id = cells[0].innerText
        // console.log(tbody.children[i]);
        deposit.getDeleteDepositById(id)
        tbody.removeChild(tbody.children[i])
      })
    }
  }
})

function createDepositElement({ id, userId, categoryId, amount, createdAt }){
  return `
  <tr>
    <td>${id}</td>
    <td>${userId}</td>
    <td>${categoryId}</td>
    <td>${amount}</td>
    <td>${createdAt}</td>
    <td>
      <button class="editBtn" type="button" name="button">edit</button>
      <button class="DeleteBtn" type="button" name="button">Delete</button>
    </td>
  </tr>`
}

function createNewDepositElement(){
  // let tbody = $('#tbodyDep')
  let uForm = document.forms['depositeForm']
  let userId = uForm['userId'].value
  let categoryId = uForm['categoryId'].value
  let amount = uForm['amount'].value
  let {data,error} = deposit.addDeposite({userId,amount,categoryId})
  if(data){
    createDepositElement(data)
  }
  uForm.reset()
}



expenseBtn.addEventListener('click', () => {
  userSec.style.display = 'none';
  depositeSec.style.display = 'none'
  expenseSec.style.display = 'block'
  categorySec.style.display = 'none'
  homeSec.style.display = 'none'
  let tbody = $('#tbodyExp')
  let data = expense.getAllExpense()
  let tbr = '';
  Object.values(data).forEach(Contact => {
    tbr += createExpenseElement(Contact)
  })
  expenseAdd.addEventListener('click', ()=> {
    tbr += createNewExpenseElement()
  })
  tbody.innerHTML = tbr

  for(let i in tbody.children){
    let ele = tbody.children[i]
    if(typeof ele === 'object'){
      let editBtn = ele.querySelector('.editBtn')
      let deleteBtn = ele.querySelector('.DeleteBtn')
      editBtn.addEventListener('click', () => {
        alert('hey iAmClicked')
      })
      deleteBtn.addEventListener('click', () => {
        let cells = ele.getElementsByTagName('td')
        let id = cells[0].innerText
        // console.log(tbody.children[i]);
        expense.getDeleteExpenseById(id)
        tbody.removeChild(tbody.children[i])
      })
    }
  }
})

function createExpenseElement({id,userId,categoryId,given,cost,description}){
  return `
  <tr>
    <td>${id}</td>
    <td>${userId}</td>
    <td>${categoryId}</td>
    <td>${given}</td>
    <td>${cost}</td>
    <td>${description}</td>
    <td>
      <button class="editBtn" type="button" name="button">edit</button>
      <button class="DeleteBtn" type="button" name="button">Delete</button>
    </td>
  </tr>
  `
}

function createNewExpenseElement(){
  // let tbody = $('#tbodyExp')
  let uForm = document.forms['expenseForm']
  const userId = uForm['userId'].value
  const categoryId = uForm['categoryId'].value
  const given = uForm['given'].value
  const cost = uForm['cost'].value
  const description = uForm['description'].value
  let {data,error} = expense.addExpense({userId,categoryId,given,cost,description})
  createExpenseElement(data)
  uForm.reset()
}


categoryBtn.addEventListener('click', ()=> {
  userSec.style.display = 'none';
  depositeSec.style.display = 'none'
  expenseSec.style.display = 'none'
  categorySec.style.display = 'block'
  homeSec.style.display = 'none'
  let tbody = $('#tbodyCat')
  let data = category.getAllCategory()
  let tbr = ''
  Object.values(data).forEach(Contact => {
    tbr += createCategoryElement(Contact)
    // console.log(Contact);
  })
  categoryAdd.addEventListener('click', ()=> {
    tbr += createNewCategoryElement()
  })
  tbody.innerHTML = tbr

  for(let i in tbody.children){
    let ele = tbody.children[i]
    if(typeof ele === 'object'){
      let editBtn = ele.querySelector('.editBtn')
      let deleteBtn = ele.querySelector('.DeleteBtn')
      editBtn.addEventListener('click', () => {
        alert('hey iAmClicked')
      })
      deleteBtn.addEventListener('click', () => {
        let cells = ele.getElementsByTagName('td')
        let id = cells[0].innerText
        // console.log(tbody.children[i]);
        category.getDeleteCategoryById(id)
        tbody.removeChild(tbody.children[i])
      })
    }
  }
})

function createCategoryElement({id,name,deposit,date}){
  return `
  <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${deposit}</td>
    <td>${date}</td>
    <td>
      <button class="editBtn" type="button" name="button">edit</button>
      <button class="DeleteBtn" type="button" name="button">Delete</button>
    </td>
  </tr>
  `
}
function createNewCategoryElement(){
  let tbody = $('#tbodyCat')
  let uForm = document.forms['userForm']
  let name = uForm['name'].value
  let {data,error} = category.addCategory({name})
  createCategoryElement(data)
  uForm.reset()
}
