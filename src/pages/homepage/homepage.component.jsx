import React from 'react'
import './homepage.styles.scss'
import {connect} from 'react-redux';
import Directory from '../../components/directory/directory.component'
import {initDirectory} from '../../redux/directory/directory.actions';
import Spinner from '../../components/spinner/spinner.component';
import {convertWithRouteName} from '../../firebase/firebase.util';
const WithSpinner = Spinner(Directory);

class HomePage extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const {upDateSections} = this.props;
    fetch("http://localhost:4000/shoppingCategories/getcollection")
      .then(response => response.json())
      .then(response => {
        upDateSections(convertWithRouteName(response.result.sections));
        this.setState({
        isLoading: false
        });
    });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div className="homepage">
        <WithSpinner isLoading = {isLoading}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  upDateSections: sections => dispatch(initDirectory(sections))
})

export default connect(null, mapDispatchToProps)(HomePage);