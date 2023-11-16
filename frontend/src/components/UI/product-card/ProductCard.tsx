import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/redux/shopping-cart/cartSlice'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '@/styles/product-card.scss'

const ProductCard = (props: any) => {

    const dispatch = useDispatch()
    const { id, title, img, price } = props.item;

    const addToCart = (): void => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                img,
                price,
                name: '',
                quantity: 0,
                totalPrice: price
            })
        )
    }

    return (
        <div className="product-card-item mt-4">
            <div className="product-card-img">
                <Link to={`/food/${id}`}>
                    <LazyLoadImage 
                        src={img} 
                        alt="product-card-img" 
                        className='product-card-img_solo' 
                        effect="blur"
                        loading="lazy" 
                    />
                </Link>
            </div>
            <div className="product-card-content">
                <h5><Link to={`/food/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center'>
                    <span className='product-card-price'>${price}</span>
                    <button aria-label="Add to Cart" className='universal_btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
  )
}
export default ProductCard