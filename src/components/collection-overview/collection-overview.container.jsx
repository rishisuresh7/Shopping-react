import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import Spinner from '../spinner/spinner.component';
import CollectionOverview from './collection-overview.component';
import { isFetchingData } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingData,
});

export default compose(
    connect(mapStateToProps),
    Spinner
)(CollectionOverview);