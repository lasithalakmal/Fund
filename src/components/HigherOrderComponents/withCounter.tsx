import React, { useState } from 'react'

const WithCount = (WrappedComponent,incrementNumber) => {

    const WithCount = (props) => {

        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(count + incrementNumber);
        }

        return (
            <WrappedComponent {...props} count={count} incrementCount={incrementCount} />
        );
    }
    return WithCount;
}

export default WithCount;