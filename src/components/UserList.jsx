import { useContext, useEffect } from "react"
import UserContext from "../context/User/UserContext"
import UserState from "../context/User/UserState";
import {Image,Box,OrderedList,ListItem} from "@chakra-ui/react"
function UserList() {
   const {users,getUsers,getProfile} = useContext(UserContext)  
  
   useEffect(() => {
     getUsers();
   },[])
    return (
      <OrderedList>
      {users.map((user) => (
        <ListItem href="#!" key={user.id} borderBottom="1px solid black" width="50vw" 
           onClick={() => getProfile(user.id)}>
          <Image borderRadius="50%" width="70px" src={user.avatar} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
        </ListItem>
      ))}
      </OrderedList>
    )
  }
  
  export default UserList
  