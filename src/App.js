import './App.css';

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyAcount from './components/MyAcount/MyAcount';
import Navigation from './components/Navigation/Navigation';



export const AuthContext = React.createContext({ user: null });

const About = React.lazy(() => import('./components/About/About'))
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'))
const ProductList = React.lazy(() => import('./components/ProductList/ProductList'))
const Product = React.lazy(() => import('./components/Product/Product'))

function App() {

  const [authInfo, setAuthInfo] = React.useState({ user: null, favoriteProduct: null })

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes >
            <Route path='/' element={
              <Home />}>
            </Route> {/*Cargada normal*/}

            <Route path='/about' element={
              <React.Suspense fallback={<p>Cargando...</p>}>
                <About />
              </React.Suspense>}>
            </Route>

            <Route path='/product-list' element={
              <React.Suspense fallback={<p>Cargando...</p>}>
                <ProductList />
              </React.Suspense>}>
            </Route>

            <Route path='/product-detail/:id' element={
              <React.Suspense fallback={<p>Cargando...</p>}>
                <Product login={setAuthInfo} />
              </React.Suspense>}>
            </Route>

            <Route path='login' element={
              <Login login={setAuthInfo} />}>
            </Route>

            <Route path='my-acount' element={
              <MyAcount login={setAuthInfo} />}>
            </Route>

            <Route path='*' element={
              <React.Suspense fallback={<p>Cargando...</p>}>
                <NotFound />
              </React.Suspense>}>
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App;

