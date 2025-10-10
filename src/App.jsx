import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Container from './components/layout/Container'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer/Footer'
import useApp from './hooks/useApp'
import Loaderforapp from './loader/Loaderforapp'

function App() {
  const { loading } = useApp();
  return (
    <div className='flex flex-col min-h-screen'>
      {
        loading ? <Loaderforapp /> : (
          <>
            <Header />
            <div className='flex-1'>
              <Outlet />
            </div>
            <Footer />
            <Loaderforapp />
          </>
        )
      }

      <ToastContainer />
    </div>
  )
}

export default App
