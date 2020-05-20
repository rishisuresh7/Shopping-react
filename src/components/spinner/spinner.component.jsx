import React from 'react';
import './spinner.styles.scss';

const Spinner = (WrappedComponent) =>  {
    return ({isLoading, ...otherProps}) => {
        return (
            isLoading?
            <div id="loader"></div>:
            <WrappedComponent {...otherProps}></WrappedComponent>
        )
    }

}

export default Spinner;