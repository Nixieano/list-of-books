import React from 'react';
import { connect } from 'react-redux';
import { searchBook } from './searchBook';
import classes from './HeaderSearch.module.css';
import magnifier from '../../../img/Header/loupe_icon-icons.com_69633.svg';
import { searchResult } from './searchResult';

const HeadersForm = (props) => {

    const onMessageChange = (e) => {
        let text = e.target.value.toLowerCase()
        props.searchBook(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchResult(props.search)
    }

    return (
        <form className={classes.container} onSubmit={handleSubmit}>
            <input className={classes.search}
            onChange={(e) => onMessageChange(e)}
                value={props.search} />
            <button className={classes.searchMagnifier} 
            type={'button'}
            onClick={() => props.searchResult(props.search)}>
                <img src={magnifier} />
            </button>
        </form>
    )

};

const mapDispathToProps = (dispatch) => {
    return {
        searchBook: paylod => dispatch(searchBook(paylod)),
        searchResult: paylod => dispatch(searchResult(paylod))
    }
};

const mapStateToProps = (state) => {
    return {
        search: state.header.searchBook
    }
};


export default connect(mapStateToProps, mapDispathToProps)(HeadersForm);
