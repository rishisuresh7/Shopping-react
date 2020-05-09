import React from 'react';
import './shop.styles.scss'
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.container';
import CollectionPage from '../collection/collection.container';
import {connect} from 'react-redux';
import {fetchShopDataStart} from '../../redux/shop/shop.action';

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path= {match.path} component = { CollectionOverview }></Route>
                <Route exact path = {`${match.path}/:collectionId`} component = { CollectionPage }></Route>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchShopDataStart())
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);