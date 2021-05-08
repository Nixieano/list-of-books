import classes from './Filter.module.css';


const Filter = (props) => {
    return (
        <div>
            <div className={classes.filter}>
                <button onClick={props.filterForAlphabet} className={classes.btn}>по Алфавиту</button>
                <button onClick={props.filterForPrice} className={classes.btn}>цена(дешевле)</button>
                <button onClick={props.filterForPriceReverse} className={classes.btn}>цена(дороже)</button>
            </div>
        </div>
    )
};

export default Filter;