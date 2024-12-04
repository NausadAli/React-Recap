import React from 'react'

function UserStatus({loggedIn, isAdmin}) {
  if(loggedIn && isAdmin){
   return <p>Welcome Admin</p>
  }else if(loggedIn && !isAdmin){
   return <p>Welcome User</p>
  }else{
   return <p>Not Loggedin</p>
  }
}

export default UserStatus
