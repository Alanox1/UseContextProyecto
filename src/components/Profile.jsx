import {useContext} from "react";
import UserContext from "../context/User/UserContext";
import {Image,Text,Box} from "@chakra-ui/react"


function Profile() {
    const {selectedUser} = useContext(UserContext)
  
    return (
      <>
        {selectedUser ? ( 
              <Box textAlign="center" 
                   display="flex" 
                   flexDirection="column" 
                   justifyContent="center">
                      <Image src={selectedUser.avatar} borderRadius="50%" width="180px" />
                      <Text>{`${selectedUser.first_name} ${selectedUser.last_name}`}</Text>
                      <Text>email : {selectedUser.email}</Text>
              </Box> )
          : (<Text>No user selected</Text>)}
      </>
    )
  }
  
  export default Profile