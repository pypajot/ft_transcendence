import axios from "axios";

const getMessageReceived = async (obj: any) => {
    console.log(obj.sender);
    const url = "http://localhost:3001/chat/getMessageReceived";
    try {
    const msgReceived = await axios.post(url, {
        sender: obj.sender,
        receiver: obj.receiver,
    });
    return (msgReceived.data);
    }
    catch(err){
        console.log(err);
    }


}

export default getMessageReceived;