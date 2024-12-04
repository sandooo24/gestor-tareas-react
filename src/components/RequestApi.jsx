const fetchApi = async (endpoint,optionsFetch = {
    method: 'GET', 
    headers: {
        'x-api-key': 'xdddddddddd'
    }
}) => {
    const url = `http://localhost:3000/${endpoint}`;

    try {
        const response =  await fetch(url,optionsFetch);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchApi