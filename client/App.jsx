import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
const Index = lazy(() => import('Templates/Index.jsx'));

import './styles/Common.scss';

const App = () => {
    return (
        <div className="site-wrapper">
            <Suspense fallback={<div>Loading...</div>}>
                <Index />
            </Suspense>
        </div>
    )
}

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);