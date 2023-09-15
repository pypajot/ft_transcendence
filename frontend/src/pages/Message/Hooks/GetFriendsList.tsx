export const getFriendsList = async ( username: string ) => {
    const url = `http://localhost:3001/chat/getFriendsList?username=${username}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
}

