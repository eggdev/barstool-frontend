import React, { useState, useEffect, lazy, Suspense } from 'react';

const Period = lazy(() => import('Atoms/Period/Period.jsx'));
const ScoreBoardRow = lazy(() => import('Molecules/ScoreBoardRow/ScoreBoardRow.jsx'));

import './Scoreboard.scss';

const Scoreboard = (props) => {
    const { gameData } = props;
    
    return (
        <div className="scoreboard-wrapper">
            <Suspense fallback={<div>Loading Data...</div>}>
                <div className="team-row">
                    <ScoreBoardRow 
                        location="away"
                        gameData={gameData}
                    />
                </div>
                <div className="team-row">
                    <ScoreBoardRow 
                        location="home"
                        gameData={gameData}
                    />
                </div>
            </Suspense>
        </div>
    )
}

export default Scoreboard;