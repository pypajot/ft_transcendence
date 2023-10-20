const getMessageSent = async (obj: {
  sender: string;
  receiver: string;
  isUser: boolean;
}) => {
  const url = "http://localhost:3333/api/chat/getMessageSent";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: obj.sender,
        receiver: obj.receiver,
        isUser: obj.isUser,
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

export default getMessageSent;
