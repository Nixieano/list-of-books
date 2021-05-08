import React from 'react';
import classes from './Content.module.css';
import notCover from '../../img/Content/notCover.jpg';

const Content = (props) => {
    return (
        <div>
            <div className={classes.container}>
                {props.books.map(book => (
                        <div className={classes.book}>
                            <div><img className={classes.bookImage} src={book.image ? book.image : notCover}/></div>
                            <div key={book.id} className={classes.bookTitle}>{book.title}</div>
                            <div className={classes.author}>{book.author}</div>
                            <div className={classes.bookPrice}>
                                <div>Цена: {book.price}</div>
                                <button className={classes.btn} onClick={() => props.addToCart(book)}>В корзину</button>
                            </div>
                        </div>
                ))}
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p></p>
            </div>
        </div >
    )
};

export default Content;
