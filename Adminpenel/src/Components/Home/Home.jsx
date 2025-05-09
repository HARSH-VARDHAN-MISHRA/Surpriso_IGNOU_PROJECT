import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllCategory from '../../Pages/Category/AllCategory'
import AddCategory from '../../Pages/Category/AddCategory'
import EditCategory from '../../Pages/Category/EditCategory'
import AllProduct from '../../Pages/Products/AllProduct'
import AddProduct from '../../Pages/Products/AddProduct'
import EditProduct from '../../Pages/Products/EditProduct'
import AllBanner from '../../Pages/Banners/AllBanner'
import AddBanner from '../../Pages/Banners/AddBanner'
import EditBanner from '../../Pages/Banners/EditBanner'
import AllShopBanner from '../../Pages/ShopBanner/AllShopBanner'
import AddShopBanner from '../../Pages/ShopBanner/AddShopBanner'
import EditShopBanner from '../../Pages/ShopBanner/EditShopBanner'
import AllTags from '../../Pages/Tags/AllTags'
import AddTag from '../../Pages/Tags/AddTag'
import EditTag from '../../Pages/Tags/EditTag'
import AllVoucher from '../../Pages/Vouchers/AllVoucher'
import CreateVoucher from '../../Pages/Vouchers/AddVoucher'
import AllOrder from '../../Pages/Orders/AllOrder'
import EditOrder from '../../Pages/Orders/EditOrder'
import AllUsers from '../../Pages/Users/AllUsers'
import LoginForm from '../../Pages/LoginForm/LoginForm'
const Home = () => {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    setLogin(sessionStorage.getItem("login"))
  }, [])

  return (
    <>
      {login ? (
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Category */}
              <Route path="/all-category" element={<AllCategory />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/edit-category/:_id" element={<EditCategory />} />

              {/* Product */}
              <Route path="/all-products" element={<AllProduct />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:_id" element={<EditProduct />} />

              {/* Users */}
              <Route path="/all-users" element={<AllUsers />} />

              {/* Vouchers */}
              <Route path="/all-contact" element={<AllVoucher />} />
              <Route path="/add-voucher" element={<CreateVoucher />} />

              {/* Tags */}
              <Route path="/all-newsletter" element={<AllTags />} />
              <Route path="/add-newsletter" element={<AddTag />} />
              <Route path="/edit-newsletter/:_id" element={<EditTag />} />

              {/* Banners */}
              <Route path="/all-banners" element={<AllBanner />} />
              <Route path="/add-banner" element={<AddBanner />} />
              <Route path="/edit-banner/:_id" element={<EditBanner />} />

              {/* Shop Banners */}
              <Route path="/all-shop-banners" element={<AllShopBanner />} />
              <Route path="/add-shop-banner" element={<AddShopBanner />} />
              <Route path="/edit-shop-banner/:id" element={<EditShopBanner />} />

              {/* Orders */}
              <Route path="/all-orders" element={<AllOrder />} />
              <Route path="/edit-order/:_id" element={<EditOrder />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      )}
    </>
  )
}

export default Home
