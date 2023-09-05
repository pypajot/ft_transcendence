import axios from "axios";
import { CreateUserRequest } from "../dto/user";

const postSignin = async (credits: any) => {
    const url = "http://localhost:3001/user/signin";
    try {
        const response = await axios.post(url, {
            username: credits.username,
            password: credits.password
        });
        if (response.data.id != 0)
        {
            return (true);
        }
        else{
            return (false);
        }
    }
    catch(err) {
        console.log(err);
        return (false);
    }
}

export default postSignin;