import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='container mx-auto inter'>
            {children}
        </div>
    );
};

export default Container;