import {useState} from 'react';

const Profile = () =>{
   const [profile, setProfile] = useState({
      name: '',
      age: ''
   })
   

   const handleChange = (e) =>{
      const {name, value} = e.target
      console.log(e.target);

      setProfile((prev)=>({
         ...prev,
         [name]: value,
      }))
     
   }

   

   return(
      <>
         <div>Profile</div>

         <input type="text"
            name='name'
            value = {profile.name}
            placeholder = "Enter To change name"
            onChange = {handleChange}
            />
         <br />
         <input type="number"
            name='age'
            value = {profile.age}
            placeholder = "Enter To change age"
            onChange = {handleChange}
            />



         <h1>Profile Information</h1>
         <h3>Name : {profile.name}</h3>
         <h3>Age : {profile.age}</h3>
      </>
   )

}

export default Profile