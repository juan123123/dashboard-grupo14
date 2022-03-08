import React, { useEffect, useState } from 'react';
import BasicCard from './components/BasicCard';
import LastProductCard from './components/LastProductCard';
import Categories from './components/Categories';
import Products from './components/Products';
import LastUser from './components/LastUser';
import './App.css';
import axios from 'axios'
import { apiUrl } from './utils/apiUrl';

function App() {

  const [ countProducts, setCountProducts ] = useState()
  const [ countUsers, setCountUsers ] = useState()
  const [ countCategories, setCountCategories ] = useState()

  const getProductsCount = () => {
    axios
      .get(`${apiUrl}/api/products`)
      .then(res => {
        setCountProducts(res.data.count)
      })
  }

  const getUsersCount = () => {
    axios
      .get(`${apiUrl}/api/users`)
      .then(res => {
        setCountUsers(res.data.count)
      })
  }

  const getCategoriesCount = () => {
    axios
      .get(`${apiUrl}/api/products`)
      .then(res => {
        setCountCategories(res.data.countByCategory.length)
      })
  }

  useEffect(() => {
    getUsersCount()
    getProductsCount()
    getCategoriesCount()
  }, [])

  const [ showGeneral, setShowGeneral ] = useState(false)
  const [ showProduct, setShowProduct ] = useState(false)
  const [ showUser, setShowUser ] = useState(false)
  const [ showCategories, setShowCategories ] = useState(false)
  const [ showProducts, setShowProducts ] = useState(false)
  const [ showMenuLeft , setShowMenu ] = useState(false)

  const hideAll = () => {
    setShowGeneral(false)
    setShowProduct(false)
    setShowUser(false)
    setShowCategories(false)
    setShowProducts(false)
    setShowMenu(false)
  }

  const showMenu = () => {
    setShowMenu(true)
  }

  return (
    <div className="box" style={{
      backgroundImage: `url("/bg-food.jpg")`
    }}>
      {!showMenuLeft && (
        <div className='hamburguer'>
          <img src='/hamburguer.png' alt='hamburguer' onClick={showMenu}/>
        </div>
      )}
      <header className={`banner ${showMenuLeft ? "header" : "hide_header"}`}>
        <img src='/logo.png' alt='logo' />
        <h3>FoodPlace</h3>
        <p onClick={() => {
          hideAll()
          setShowGeneral(true)
        }}>General Info</p>
        <p onClick={() => {
          hideAll()
          setShowProduct(true)
        }}>Last Product</p>
        <p onClick={() => {
          hideAll()
          setShowUser(true)
        }}>Last User</p>
        <p onClick={() => {
          hideAll()
          setShowCategories(true)
        }}>Categories</p>
        <p onClick={() => {
          hideAll()
          setShowProducts(true)
        }}>Products</p>
      </header>
      
      {showGeneral && (
        <section className='section-one'>
          <BasicCard 
            title='Total Products'
            value={countProducts}
          />
          <BasicCard 
            title='Total Users'
            value={countUsers}
          />
          <BasicCard 
            title='Total Categories'
            value={countCategories}
          />
        </section>
      )}

      {showProduct && (
        <section className='section-two'>
          <LastProductCard />
        </section>
      )}

      {showUser && (
        <section className='section-two'>
          <LastUser />
        </section>
      )}

      {showCategories && (
        <Categories />
      )}

      {showProducts && (
        <section>
          <Products />
        </section>
      )}
    </div>
  );
}

export default App;
