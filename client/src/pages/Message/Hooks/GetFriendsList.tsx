import axios from "axios";

export const getFriendsList = async (obj: any) => {
    const url = "http://localhost:3001/chat/getFriendsList";
    try {
        const val = await axios.get(url, {params: { username: obj}} );
        return (val.data);
    }
    catch(err)
    {
        console.log(err);
    }
}
