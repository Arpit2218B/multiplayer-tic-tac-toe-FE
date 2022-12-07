import React from 'react';

const ErrorWrapper = (props: any) => {
    const { error } = props;

    return (
        <div className='error'>
            <p>{error}</p>
        </div>
    )
}

export default ErrorWrapper;