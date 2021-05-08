import { connect } from 'react-redux';
import { useState } from 'react';
import { downProductCart } from './downProductCart';
import { upProductCart } from './upProductCart';
import { deletProductCart } from './deletProductCart';
import classes from './Cart.module.css';
import cart from '../../img/Cart/4544843-business-comerce-delivery-shop-trolley_121443.svg';
import './Cart.css';
import notCover from '../../img/Content/notCover.jpg';

const Cart = (props) => {

    const [popupActive, setPopupActive] = useState(false);

    return (
        <div>
            <button className={classes.cart}
                onClick={() => setPopupActive(true)}>
                <img src={cart} className={classes.cartImg}></img>
                <div className={props.items ? classes.count : ''}>{props.items ? props.items : ''}</div>
            </button>
            <div onClick={() => setPopupActive(false)}>
                <div className={popupActive ? 'active' : 'onActive'}>
                    <div className={classes.popupContent} onClick={e => e.stopPropagation()}>
                        <div className={classes.totalPrice}>
                            <div className={classes.cartHeading}>Корзина</div>
                            <div>Итого: {props.totalPrice}</div>
                            </div>
                        {props.cart && props.cart.map(book => (
                            <div className={classes.container}>
                                <div className={classes.book}>
                                    <div><img className={classes.bookImage} src={book.image ? book.image : notCover} /></div>
                                    <div key={book.id} className={classes.bookTitle}>{book.title}</div>
                                    <div className={classes.bookPrice}>
                                        Цена: {book.price}
                                    </div>
                                </div>
                                <div className={classes.quantityManagement}>
                                    <div className={classes.quantityManagementContent}>
                                        <button className={classes.btn} onClick={() => props.upProductCart(book)}>+</button>
                                        <div>{book.count}</div>
                                        <button className={classes.btn} onClick={() => props.downProductCart(book)}>-</button>
                                        <button className={classes.btnDelete} onClick={() => props.deletProductCart(book.id)}>удалить</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({ cart }) => {
    return {
        cart: cart,
        items: cart.length,
        totalPrice: cart.reduce((total, book) => total + book.count * book.price, 0)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        downProductCart: item => dispatch(downProductCart(item)),
        upProductCart: item => dispatch(upProductCart(item)),
        deletProductCart: id => dispatch(deletProductCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);