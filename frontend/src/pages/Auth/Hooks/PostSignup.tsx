import axios from "axios";

const postSignup = (info: any) => {
  const url = "http://localhost:3001/user/signup";
  axios
    .post(url, {
      username: info.username,
      password: info.password,
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};
export default postSignup;
