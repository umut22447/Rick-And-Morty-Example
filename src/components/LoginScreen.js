import React, {useState} from 'react'

function LoginScreen() {
    const [count, setCount] = useState("umut");
    const increaseCount = () => {
        if(count === "umut"){
            setCount("göksu");
        }
        else if(count === "göksu"){
            setCount("sanem");
        }
        else if(count === "sanem"){
            setCount("mert");
        }
        else{
            setCount("umut");
        }
    }
    return (
        <div>
            {count}
            <button onClick={increaseCount}>Arttır</button>
        </div>
    )
}

export default LoginScreen;