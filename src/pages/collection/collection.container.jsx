import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.component';
import {isFetchingCollectionData} from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: isFetchingCollectionData
})

export default compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage)