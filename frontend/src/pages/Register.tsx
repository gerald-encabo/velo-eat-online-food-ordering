/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup, reset } from '@/redux/user-credential/authSlice'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '@/components/helmet/Helmet'
import Spinner from '@/components/UI/spinner/Spinner'
import BannerSection from '@/components/UI/banner-section/BannerSection'
import { AppDispatch, State } from '@/redux/store';
import '@/styles/login.scss'

const Register = () => {

  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading, isSuccess, isError, message } = useSelector((state: State) => state.auth);

  useEffect(() => {

    if (isError) { 
      toast.error(message);
    }

    if (isSuccess || user) {
        navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const changeHandler = (e: any) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (password !== password2) {
        toast.error('Password do not match');
    } else {
        const userData = { name, email, password, password2 }
        dispatch(signup(userData));
    }
  }

  const loginHandler = () => {
    nameRef.current.focus()
    emailRef.current.focus()
  }

  if (isLoading) {
      return <Spinner/>
  }

  return (
    <Helmet title='Signup'>
      <BannerSection title='Signup'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="register-form mb-5" onSubmit={submitHandler}>
                <div className="register-form_group">
                  <input 
                    type="text"
                    name="name"
                    ref={nameRef}
                    value={name}
                    placeholder='Name'
                    onChange={changeHandler}
                    aria-label="Your name"
                    required/>
                </div>
                <div className="register-form_group">
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
                <div className="register-form_group">
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
                <div className="register-form_group">
                  <input 
                    type="password"                 
                    name="password2" 
                    value={password2}
                    placeholder='Re-enter password'
                    onChange={changeHandler}
                    aria-label="Confirm password"
                    required
                  />
                </div>
                <button 
                  onClick={loginHandler} 
                  type="submit" 
                  className='universal_btn w-100 mb-3'
                  aria-label="Submit"
                >
                  Sign up
                </button>
                <Link to='/login' className='text-black-50'>
                  <span className='register-form_link'>Already have an account? Login</span>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
export default Register