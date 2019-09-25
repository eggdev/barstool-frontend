import React, { Component, Fragment, Suspense, lazy } from 'react';

// Molecules
import Header from 'Molecules/Header/Header.jsx';

import { gatherGameData } from 'Utilities/tools.js';

const Scoreboard = lazy(() => import('Organisms/Scoreboard/Scoreboard.jsx'));

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSport: 'mlb',
            gameData: {},
            appData: {},
        }
    }

    componentDidMount() {
        this.getSportData(this.state.currentSport);
    }

    getSportData = async (sportName) => {
        const newData = await gatherGameData(sportName);
        this.setState({ gameData: newData });
    }


    toggleSport = (sportName) => {
        this.setState({ currentSport: sportName });
        this.getSportData(sportName);
    }

    render() {
        const { currentSport, gameData } = this.state;
        return (
            <Fragment>
                <Header 
                    toggleSport={this.toggleSport}
                    currentSport={currentSport}
                />
                <Scoreboard
                    gameData={gameData}
                />
            </Fragment>

        );
    }   
}

export default Index;