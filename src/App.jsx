import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Container from './components/layout/Container'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
