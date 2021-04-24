  import Deposite from './Deposite'


class Category extends Deposite {
  constructor(dbname) {
    super(dbname)
  }
  addCategory({ name }){
    let {data,error} = this.getCategoryByName(name)
    if (data) {
      return this.error404('Already have a category', ' addCategory')
    }
    let id = new Date().getTime()
    let date = new Date()
    let category = { id,name,deposit: 0,date}
    this.db3.Category[id] = category
    this.updateDb(this.db3)
    return this.createSuccess(category,' addCategory')
  }

  getAllCategory(){
    return this.db3.Category
  }

  getCategoryById(id){
    let categoryData = this.db3.Category[id]
    if (!categoryData) {
      return this.error404('id not found',' getCategoryById')
    }
    return this.success(categoryData, 'getCategoryById')
  }

  getCategoryByName(name){
    let cateData = Object.values(this.db3.Category).filter(i => i.name == name)
    if(cateData.lenght<1){
      return this.error404('category not found', 'getCategoryByName')
    }
    return this.success(cateData,' getCategoryByName')
  }

  getDeleteCategoryById(id){
    let{data,error} = this.getCategoryById(id)
    if (error) {
      return this.error404('id not found', ' getDeleteCategoryById')
    }
    let cateData = this.db3.Category[id]
    delete this.db3.Category[id]
    this.updateDb(this.db3)
    return this.deleteSuccess(cateData, ' getDeleteCategoryById')
  }

}

export default Category;
