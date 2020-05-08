import React from 'react';
import './shop.styles.scss'
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {fetchShopDataStart} from '../../redux/shop/shop.action';
import Spinner from '../../components/spinner/spinner.component';
import { isFetchingData, isFetchingCollectionData } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
const SpinnerWithCollectionOverview = Spinner(CollectionOverview);
const SpinnerWithCollectionPage = Spinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {match, isLoading, isFetchingCategoryData} = this.props;
        return (
            <div className="shop-page">
                <Route exact path= {match.path} render = { (props)  => <SpinnerWithCollectionOverview isLoading = {isLoading} {...props} /> }></Route>
                <Route exact path = {`${match.path}/:collectionId`} render = { (props) => <SpinnerWithCollectionPage isLoading = { !isFetchingCategoryData} {...props} /> }></Route>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingData,
    isFetchingCategoryData: isFetchingCollectionData
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchShopDataStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);