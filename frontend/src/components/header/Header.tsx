import { useEffect, useRef } from "react"
import { Container } from "reactstrap"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { signout, reset } from '@/redux/user-credential/authSlice';
import { FiShoppingCart } from 'react-icons/fi'
import { BsVimeo } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { cartUiActions } from '@/redux/shopping-cart/cartUiSlice'
import { AppDispatch, State } from '@/redux/store'
import '@/styles/header.scss'
import '@/index.scss'
import nav_links from '@/assets/data/navlinksData'

const Header = () => {

  const menuRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const { user }: any = useSelector((state: State) => state.auth)
  const totalQuantity = useSelector((state: State) => state.cart.totalQuantity)

  const toggleMenu = () => menuRef.current.classList.toggle('header-show_menu')
  const toggleCart = () => { dispatch(cartUiActions.toggle())  }

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header-shrink')
      } else {
        headerRef.current.classList.remove('header-shrink')
      }
    })
  }, [])

  const signoutHandler = () => {
    dispatch(signout());
    dispatch(reset());
    navigate('/');
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="header-nav_wrapper d-flex align-items-center justify-content-between">

          {/* Velo Eat Logo */}
          <div className="header-logo">
            <Link to='/home'>
              <BsVimeo className="header-logo_icon"/>
              <h5>Velo<span>Eat</span></h5>
            </Link>
          </div>

          {/* Menu Option */}
          <div className="header-navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="header-menu d-flex align-items-center gap-5">
              {
                nav_links.map((item, index)=>(
                  <NavLink
                    to={item.path} 
                    key={index} 
                    className={(navClass) => navClass.isActive ? "header-active_menu" : "" }
                  >
                    {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

           {/* Nav Right Icons */}
           <div className="header-nav_right d-flex align-items-center gap-4">
              {
                user ? (
                  <>
                      <span className="header-user_name active">Hi <span>{user.name.split(' ')[0].trim()}</span></span>

                      <span className="header-cart_icon" onClick={toggleCart}>
                        <FiShoppingCart className="header-icon"/>
                        <span className="header-cart_badge">{totalQuantity}</span>
                      </span>

                      <span className="header-user">
                        <Link to='/' onClick={signoutHandler}>
                          <button aria-label="Logout" className="header-logout_button">Logout</button>
                        </Link>
                      </span>

                      <span className="header-mobile_menu" onClick={toggleMenu}>
                        <AiOutlineMenu className="header-icon"/>
                      </span>
                  </>
                ) : (
                  <>
                    <span className="header-cart_icon" onClick={toggleCart}>
                      <FiShoppingCart className="header-icon"/>
                      <span className="header-cart_badge">{totalQuantity}</span>
                    </span>

                    <span className="header-user">
                      <Link to='/login'>
                        <AiOutlineUser className="header-icon" />
                      </Link>
                    </span>

                    <span className="header-mobile_menu" onClick={toggleMenu}>
                      <AiOutlineMenu className="header-icon"/>
                    </span>
                  </>
                )
              }
           </div>
        
        </div>
      </Container>
    </header>
  )
}
export default Header