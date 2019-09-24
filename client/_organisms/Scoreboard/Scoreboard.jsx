import React, { useState, useEffect, lazy, Suspense } from 'react';

const ScoreBoardRow = lazy(() => import('Molecules/ScoreBoardRow/ScoreBoardRow.jsx'));
const ScoreBoardHeader = lazy(() => import('Molecules/ScoreBoardHeader/ScoreBoardHeader.jsx'));

import './Scoreboard.scss';

const Scoreboard = (props) => {
    const { gameData } = props;
    const totalPeriods = (gameData.league === 'MLB') ? 9 : (gameData.league === 'NHL') ? 3 : 4;

    return (
        <div className="scoreboard-wrapper">
            <Suspense fallback={<div>Loading Data...</div>}>
                <div className="team-row">
                    <ScoreBoardHeader 
                        totalPeriods={totalPeriods}
                        leagueName={gameData.league}
                    />
                </div>
                <div className="team-row">
                    <ScoreBoardRow 
                        location="away"
                        totalPeriods={totalPeriods}
                        gameData={gameData}
                    />
                </div>
                <div className="team-row">
                    <ScoreBoardRow 
                        location="home"
                        totalPeriods={totalPeriods}
                        gameData={gameData}
                    />
                </div>
            </Suspense>
        </div>
    )
}

export default Scoreboard;