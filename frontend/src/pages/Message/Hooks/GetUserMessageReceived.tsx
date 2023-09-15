const getMessageReceived = async (obj: {
  sender: string;
  receiver: string;
}) => {
  const url = "http://localhost:3333/chat/getMessageReceived";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: obj.sender,
        receiver: obj.receiver,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("There was an error fetching the data", error);
  }
};

export default getMessageReceived;
