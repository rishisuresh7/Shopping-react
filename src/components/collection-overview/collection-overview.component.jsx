import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionItems} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.component'


const CollectionOverview = ({collection}) => {
    return (
        <div className="collection-overview">
        {
            collection.map( ({id, ...otherCollectionProps}) => <PreviewCollection key={id} {...otherCollectionProps}/>)
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionItems
})

export default connect(mapStateToProps)(CollectionOverview);