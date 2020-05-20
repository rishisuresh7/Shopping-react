import React from 'react'
import {createStructuredSelector} from 'reselect';
import './homepage.styles.scss'
import {connect} from 'react-redux';
import Directory from '../../components/directory/directory.component'
import {fetchSectionsStart} from '../../redux/directory/directory.actions';
import {isLoading, isError} from '../../redux/directory/directory.selectors';
import Spinner from '../../components/spinner/spinner.component';
const WithSpinner = Spinner(Directory);

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchSectionsStart();
  }

  render() {
    const {isLoading, isError} = this.props;
    return (
      <div className="homepage">
        {
          isError?
        <div className= "error" >Oops something went wrong</div>
        :<WithSpinner isLoading = { isLoading}/>
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: isLoading,
  isError: isError,
});

const mapDispatchToProps = dispatch => ({
  fetchSectionsStart: () => dispatch(fetchSectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);