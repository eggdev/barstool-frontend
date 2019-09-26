import React, { useState, useEffect, Fragment } from 'react';

import './Loading.scss';

const Loading = () => {
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowLoading(true), 2000);
        return () => {
            clearTimeout(timer1)
        }
    },[])

    return (
        <div className="loading-container">
            {(!showLoading) ? (
                <Fragment>
                    <h1>Loading</h1>
                    <div className="loader" />
                </Fragment>
            ) : (
                <h1>Please make sure the DB is running</h1>
            )}
        </div>
    )
}

export default Loading;