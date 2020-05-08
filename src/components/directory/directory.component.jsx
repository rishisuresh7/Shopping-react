import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import {selectDirectoryItems} from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const  Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {
        sections.map(({id, ...otherProps}) => {
          return (
            <MenuItem key={id} {...otherProps}></MenuItem>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);