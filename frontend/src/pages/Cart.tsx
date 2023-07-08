import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { cartActions } from '@/redux/shopping-cart/cartSlice';
import { CartItemTypes, RootState } from '@/types/ListTypes';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CommonSection from '@/components/UI/banner-section/BannerSection';
import Helmet from '@/components/helmet/Helmet';
import '@/styles/cart-page.scss';

const Cart = () => {

  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
  const totalAmount = useSelector((state: RootState)  => state.cart.totalAmount)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 
                ? <h5 className='text-center'>Your cart is empty</h5> 
                : <table className='table table-bordered table-striped'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item: CartItemTypes, index: number) => (
                            <Tr item={item} key={index}/>
                        ))
                      }
                    </tbody>
                  </table>
              }
              {
                totalAmount !== 0 
                ? <div className='mt-4'>
                    <h6>Subtotal: <span className='cart-subtotal'>${Number(totalAmount).toFixed(2)}</span></h6>
                    <p>Taxes and delivery will calculate at the checkout</p>
                    <div className='cart-page_btn'>
                      <button aria-label="Continue Shopping" className='universal_btn me-4'><Link to='/foods'>Continue Shopping</Link></button>            
                      <button aria-label="Proceed to checkout" className='universal_btn'><Link to='/checkout'>Proceed to checkout</Link></button>
                    </div>
                  </div>
                : ''
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tr = (props: any) => {

  const { id, img, title, price, quantity } = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
      <tr>
        <td className='text-center cart-img_box'><img src={img} alt="order item" loading="lazy"/></td>
        <td className='text-center'>{title}</td>
        <td className='text-center'>${price}</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center cart-item_del'>
          <BsTrash onClick={deleteItem}/>
        </td>
      </tr>
  )
}

export default Cart