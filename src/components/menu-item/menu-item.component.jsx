import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({size, name, imageUrl, history, match, linkUrl}) => {
    return (
        <div className= {`${size} menu-item`} onClick = {
            () => history.push(`${match.path}${linkUrl}`)
        }>
            <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
             }}>
            </div>
          <div className="menu-content">
              <h1 className="title"> { name }</h1>
              <span className="subtitle">Shop Now</span>
          </div>
        </div>
    )
}

export default withRouter(MenuItem);