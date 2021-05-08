import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setBooks } from './setBooks';
import { addToCart } from './addToCart';
import { booksSort } from './booksSort';
import Content from './Content';
import Filter from './Filter/Filter';

const ContentContainer = (props) => {

    useEffect(() => {
        axios.get('/books.json')
            .then((response) => {
                props.setBooks(response.data)
            })
    }, [])

    const filterForPrice = () => {
        let result = props.sort
        result.sort((a, b) => a.price - b.price)
        props.booksSort(result)
    }

    const filterForAlphabet = () => {
        let result = props.sort
        result.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
        props.booksSort(result)
    }

    const filterForPriceReverse = () => {
        let result = props.sort
        result.sort((a, b) => a.price - b.price).reverse()
        props.booksSort(result)
    }

    return (<div>
        <Filter filterForPrice={filterForPrice}
            filterForPriceReverse={filterForPriceReverse}
            filterForAlphabet={filterForAlphabet}
            books={props.books}
        />
        <Content books={props.books}
            addToCart={props.addToCart}
            cart={props.cart}
        />
    </div>
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.contentPage.items.filter(items => items.title.includes(state.header.searchResult)),
        cart: state.cart,
        sort: state.contentPage.items
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        setBooks: books => dispatch(setBooks(books)),
        addToCart: item => dispatch(addToCart(item)),
        booksSort: price => dispatch(booksSort(price))
    }
};


export default connect(mapStateToProps, mapDispathToProps)(ContentContainer);