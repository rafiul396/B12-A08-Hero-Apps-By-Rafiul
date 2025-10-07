import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Container from './components/layout/Container'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet></Outlet>
      </Container>
      <ToastContainer/>
    </>
  )
}

export default App
