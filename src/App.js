import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoForm from './components/TodoForm';
import ProductAPI from './api/productAPI';
import CategoryAPI from './api/categoryAPI';
import Routers from './Routers';

function App() {
  //
  //product
  //
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //call api
    const getTodos = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        console.log(products)
        // let response = await fetch('http://localhost:3001/todos');
        // let dataTodos = await response.json();
        // console.log(dataTodos);
       setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();

    const getCategories = async()=>{
      try{
        const {data: categories} = await CategoryAPI.getAll();
       
        console.log('categories', categories)
        setCategories(categories);
      }
      catch (error)
      {
        console.log(error);
      }
    }
    getCategories();
  },[])
  
  const onHandleAddProduct = async (product) => {
   console.log(product)
   try {
    const {data} =  await ProductAPI.add(product);
     setProducts([
      ...products,
      data
    ])
   } catch (error) {
     console.log(error)
   }
  }
  const onHandleEditProduct = async (id,product) => {
      try {
       const { data} = await ProductAPI.update(id,product);
        const newProducts = products.map(item => (item._id === data._id ? data : item));
       setProducts(newProducts)
      } catch (error) {
        console.log(error)
      }
  }
  const onHandleDeleteProduct = async (id) => {
   try {
        await ProductAPI.remove(id);
        const newProducts = products.filter(product => product._id !== id);
        setProducts(newProducts);
   } catch (error) {
      console.log(error);
   }
  }
  //
  //category
  // 
    const removeCategories = async (id) => {
    try {
      await CategoryAPI.remove(id)
      const newCategories = categories.filter(item => item._id !== id);
      setCategories(newCategories )
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }
  const onHandleAddCategory = async (category) => {
    console.log(category)
    try {
      await CategoryAPI.add(category);
        setCategories([
          ...categories,
          category
        ])
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleEditCategory= async (id, data) => {
    // console.log('id', id)
    // console.log('data', data)
    try {
      await CategoryAPI.update(id, data);

      const newCategories = categories.map(item => (item._id === id ? data : item));
      console.log('newCategories',newCategories);
      setCategories(newCategories)
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div >
      <Routers products={products} onDelete={onHandleDeleteProduct} onAdd={onHandleAddProduct} onEdit={onHandleEditProduct}
               categories={categories} onDeleteCate={removeCategories} onAddCate={onHandleAddCategory} onEditCate={onHandleEditCategory}
      />
      {/* <TodoForm onAdd={onHandleAdd}/>
     <TodoList data={todos} onDelete={onHandledelete}/> */}
    </div>
  );
}

export default App;
