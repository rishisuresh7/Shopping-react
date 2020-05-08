import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-buttom.component';
import {addCartItem} from '../../redux/dropdown/dropdown.actions';
import { connect } from 'react-redux';

const CollectionItem = ({item, addCartItem, inCart}) => {
    const {imageUrl, price, name } = item;
    return (
        <div className='collection-item'>
            <div 
            style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            className="item-preview">
            </div>
            <div className="item-title">
                <span className='item-name'>
                    {name}
                </span>
                <span className='item-price'>
                    &#8377;{price}
                </span>
            </div>
            {
                inCart?
                null:
                <CustomButton onClick = {() => addCartItem(item)} inverted >Add To Cart</CustomButton>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCartItem: item => { dispatch(addCartItem(item))}
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);