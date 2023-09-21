export const getFriendsList = async (username: string) => {
  const url = `http://localhost:3333/user/friend/list`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
		'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("There was an error fetching the data", error);
  }
};
