import Style from"./Forms.module.css"
import { useState } from "react"
import validation from "./validation"
const Forms = (props) =>{

    const [userData,setUserData]= useState({
        username:"",
        password:""
    })
    const [errors, setErrors] = useState({
        username:"",
        password:""
    })
    const handleInputChange=(event)=>{
     const {name, value} = event.target;
    setUserData({
     ...userData,
     [name]: value,
     //tambien se puede hacer event.target.name: event.target.value
    })
    setErrors(
        validation({
         ...userData,
        [name]: value
        })
    )
    }

    const handleSubmit =()=>{
      props.login(userData)  
    }
return(
    <div className={Style.forms}>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}></input>
            <p className={Style.errors}>{errors.username? errors.username : null}</p>
            
            <label>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}></input>
            <p className={Style.errors}>{errors.password? errors.password : null}</p>

            <button type="submit">Login</button>
        </form>
    </div>)
}

export default Forms