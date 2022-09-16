import { useReducer } from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
const UserState = (props) => {
    const initialState = {
        users : [],
        selectedUser : null
    }
    
   const [state,dispatch] = useReducer(UserReducer,initialState)

    const getUsers = async () => {
        const res = await fetch("https://reqres.in/api/users"),
         json = await res.json()
        
        dispatch({
            type : "GET_USERS",
            payload : json.data
        })
    }
    
    
    const getProfile = async (id) => {
        const res = await fetch("https://reqres.in/api/users/" + id),
         json = await res.json()
    
        dispatch({
            type : "GET_PROFILE",
            payload : json.data
        })
    }
    
    
    return(
        <UserContext.Provider value={{
            users : state.users,
           selectedUser : state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
