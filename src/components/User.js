import React, { useState, useEffect } from "react";
import FetchUser from "../services/FetchUser";


const User = () => {

    //We will use useState to set the state of the variable
    const [data, setData] = useState([]);

    //now we will create an async function to fetch the data from our services folder
    const getRandomUser = async() => {
        //this variable will hold the data that was fetch
        const output = await FetchUser();
        //this is where we define our exact data object
        console.log(FetchUser());
        setData(output.data.results);
      
    };

    //now we will use useeffect with [] to render it only once
    useEffect( ()=>{
        //useeffect will hold the data the our function getrandomuser fetched for us
        getRandomUser();
    }, []);

    return(
        <div>
            <button onClick={getRandomUser}> Create a random user </button>
            {data.map( (user, index) =>{
                return(
                    <div>
                        <img src={user.picture.thumbnail} alt={user.name.first}></img>
                        <h3>{user.name.first}</h3> <h3>{user.name.last}</h3>
                    </div>
                )
            })

            }

        </div>
    );

};

export default User;
