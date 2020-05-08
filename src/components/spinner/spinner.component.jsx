import React from 'react';
import './spinner.styles.scss';

const Spinner = (WrappedComponent) =>  {
    const Spinner = ({isLoading, ...otherProps}) => {
        return (
            isLoading?
            <div id="loader"></div>:
            <WrappedComponent {...otherProps}></WrappedComponent>
        )
    }

    return Spinner;
}

export default Spinner;