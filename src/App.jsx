import './App.css'
import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState'
import {Stack} from "@chakra-ui/react"
function App() {
 

  return (
   
      <UserState>
         <Stack direction="row" padding={{base : "0px", md:"0px 200px"}}>
            <UserList />
            <Profile />
         </Stack>
    </UserState>
    
  
     
  )
}

export default App
