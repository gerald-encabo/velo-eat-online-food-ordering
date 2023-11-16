/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { signin, reset } from '@/redux/user-credential/authSlice'
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '@/components/helmet/Helmet'
import Spinner from '@/components/UI/spinner/Spinner'
import BannerSection from '@/components/UI/banner-section/BannerSection'
import { AppDispatch, State } from '@/redux/store';
import '@/styles/login.scss'

const Login = () => {

  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [formData, setFormData] = useState({
      email: '',
      password: ''
  })

  const { email, password } = formData;

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { user, isLoading, isSuccess, isError, message } = useSelector((state: State) => state.auth)
    
  useEffect(() => {

    if (isError) { 
        toast.error(message);
    }

    if (isSuccess || user) {
        navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const changeHandler = (e: { target: { name: any; value: any; }; }) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      const userData = { email, password }

      dispatch(signin(userData))
  }

  const loginHandler = () => {
    emailRef.current.focus()
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Helmet title='Login'>
      <BannerSection title='Login'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="login-form mb-5" onSubmit={submitHandler}>
                <div className="login-form_group">
                  <input 
                    type="email" 
                    name="email"
                    ref={emailRef}
                    value={email}
                    placeholder='Email'
                    onChange={changeHandler}
                    aria-label="Your email"
                    required
                  />
                </div>
                <div className="login-form_group">
                  <input 
                    type="password" 
                    name="password"
                    value={password}
                    placeholder='Password'
                    onChange={changeHandler}
                    aria-label="Your password" 
                    required
                  />
                </div>
                <button onClick={loginHandler} type="submit" className='universal_btn w-100 mb-3'>Login</button>
                <Link to='/register' className='text-black-50'>
                  <span className='login-form_link'>Need an account? Sign Up</span>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login