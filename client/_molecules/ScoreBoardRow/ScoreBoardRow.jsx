import React, { Fragment } from 'react';

import Period from 'Atoms/Period/Period.jsx';

import './ScoreBoardRow.scss';

const ScoreBoardRow = (props) => {
    const { location, gameData } = props;
    const periodScores = gameData[`${location}_period_scores`];
    const teamInfo = gameData[`${location}_team`];

    return (
        <div className="team-data" id={location}>
            <Period
                value={teamInfo.abbreviation}
            />
            {periodScores.map((score, index) => {
                return (
                    <Period
                        key={index + 1}
                        value={score}
                    />
                )
            })}
        </div>
    )
}

export default ScoreBoardRow;