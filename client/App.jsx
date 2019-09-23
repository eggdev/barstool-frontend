import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const Index = lazy(() => import('Templates/Index.jsx'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Index />
        </Suspense>
    )
}

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);