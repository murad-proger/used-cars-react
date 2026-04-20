import React from 'react'
import { Route, Routes } from "react-router-dom";

import { HomeSkeleton, FavouritesSkeleton, CatalogSkeleton, OrdersSkeleton, CartSkeleton, ProductSkeleton, Loader, MainLayout } from "./components";
// import Home from "./pages/Home"
// import Product from "./pages/Product"
// import Catalog from "./pages/Catalog"
// import Cart from "./pages/Cart"
// import Favourites from "./pages/Favourites";
// import Orders from "./pages/Orders";

const Home = React.lazy(() => import(/*webpackChunkName: "Home"*/'./pages/Home'))
const Product = React.lazy(() => import(/*webpackChunkName: "Product"*/'./pages/Product'))
const Catalog = React.lazy(() => import(/*webpackChunkName: "Catalog"*/'./pages/Catalog'))
const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/'./pages/Cart'))
const Favourites = React.lazy(() => import(/*webpackChunkName: "Favourites"*/'./pages/Favourites'))
const Orders = React.lazy(() => import(/*webpackChunkName: "Orders"*/'./pages/Orders'))

import "./assets/css/style.css"
import "./assets/css/fonts.css"
import "./assets/css/jquery.scrollbar.css"
import "./assets/css/media.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={
            <React.Suspense fallback={
              <>
                <HomeSkeleton />
                <Loader />
              </>
            }>
              <Home />
            </React.Suspense>
          } />
          <Route path="/catalog" element={
            <React.Suspense fallback={
              <>
                <CatalogSkeleton />
                <Loader />
              </>
            }>
              <Catalog />
            </React.Suspense>
            }
          />
          <Route path="/product/:productId" element={
            <React.Suspense fallback={
              <>
                <ProductSkeleton />
                <Loader />
              </>
            }>
              <Product />
            </React.Suspense>
            } 
          />
          <Route path="/cart" element={
            <React.Suspense fallback={
              <>
                <CartSkeleton />
                <Loader />
              </>
            }>
              <Cart />
            </React.Suspense>
            } 
          />
          <Route path="/favourites" element={
            <React.Suspense fallback={
              <>
                <FavouritesSkeleton />
                <Loader />
              </>
            }>
              <Favourites />
            </React.Suspense>
            } 
          />
          <Route path="/orders" element={
            <React.Suspense fallback={
              <>
                <OrdersSkeleton/><Loader />
              </>
            }>
              <Orders />
            </React.Suspense>
            } 
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;