import axios from "axios";

const getMessageSent = async (obj: any) => {
    console.log(obj.sender);
    console.log(obj.receiver);
    const url = "http://localhost:3001/chat/getMessageSent";
    try {
        const val = await axios.post(url, {
            sender: obj.sender,
            receiver: obj.receiver,
        })
        return (val.data);
    }
    catch(err)
    {
        console.log(err);
    }
}

export default getMessageSent;