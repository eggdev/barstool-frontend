import 'whatwg-fetch';

const gatherGameData = async (leagueName) => {
    const response = await fetch(`http://localhost:3000/data/${leagueName}`);
    return response.json();
}

export { 
    gatherGameData,
}