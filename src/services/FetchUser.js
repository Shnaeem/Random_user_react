import axios from "axios";


const FetchUser = async () => {
    const url = "https://api.randomuser.me/";
    const response = await axios.get(url).then((res)=>{
        // console.log(res);
        return res
    })

    return response;
}

export default FetchUser;