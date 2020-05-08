import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionId} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    return (
        <div className="collection-page">
            <h2 className='title'>{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map( (item) => <CollectionItem key = {item.id} item = {item}></CollectionItem>)
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
   return {
       collection: selectCollectionId(ownProps.match.params.collectionId)(state)
   }
}

export default connect(mapStateToProps)(CollectionPage);