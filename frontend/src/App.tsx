import { RootState } from "@/types/ListTypes"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import Header from "@/components/header/Header"
import Spinner from "@/components/UI/spinner/Spinner"
import Routers from "@/routes/Routers"
import Footer from "@/components/footer/Footer"
import Carts from "@/components/UI/cart/Carts"
import { Analytics } from '@vercel/analytics/react';

function App() {

  const showCart = useSelector((state: RootState) => state.cartUI.cartIsVisible)

  return (
    <>
      <Header />
      {
        showCart && <Carts />
      }
      <Suspense fallback={<Spinner />}>
        <Routers />
        <Footer />
      </Suspense>
      <Analytics />
    </>
  )
}

export default App
