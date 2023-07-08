import { lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
const AllFoods = lazy(() => import("@/pages/AllFoods")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Home = lazy(() => import("@/pages/Home")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const FoodDetails = lazy(() => import("@/pages/FoodDetails")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Cart = lazy(() => import("@/pages/Cart")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Checkout = lazy(() => import("@/pages/Checkout")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Contact = lazy(() => import("@/pages/Contact")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Login = lazy(() => import("@/pages/Login")
  .then(module => { 
    return { 
      default: module.default 
    } 
  })
);
const Register = lazy(() => import("@/pages/Register")
  .then(module => { 
      return { 
        default: module.default 
      } 
  })
);

const Routers = () => {
  return (
    <Routes>
        <Route 
          path='*' 
          element={ <Navigate to='/home' /> } 
        />
        <Route 
          path='/home' 
          element={ <Home/> } 
        />
        <Route 
          path='/foods' 
          element={ <AllFoods /> } 
        />
        <Route 
          path='/food/:productId' 
          element={ <FoodDetails /> } 
        />
        <Route 
          path='/cart' 
          element={ <Cart /> } 
        />
        <Route 
          path='/checkout' 
          element={ <Checkout /> } 
        />
        <Route 
          path='/contact' 
          element={ <Contact /> } 
        />
        <Route 
          path='/login' 
          element={ <Login /> } 
        />
        <Route 
          path='/register' 
          element={ <Register /> } 
        />
    </Routes>
  )
}
export default Routers