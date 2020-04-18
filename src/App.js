import React, {useState} from 'react';
import "./App.css"

 const App = () => {
   const [contact, setContact] = useState({
     firstName: "",
     lastName: "",
     email: ""
   });
   const [color, setColor] = useState(false);


   const handleChange = (e) => {
     const {name, value} = e.target;
     
     setContact((prevValue) => {
       if(name === "firstName") {
        return {
          firstName: value,
          lastName: prevValue.lastName,
          email: prevValue.email
        }
       } else if(name === "lastName"){
         return {
          firstName: prevValue.firstName,
          lastName: value,
          email: prevValue.email
         }
        }  else if(name === "email") {
          return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: value
          }
        }
     })
   }

   const onSubmit = (e) => {
     e.preventDefault();
   }

   const onGreen = () => {
     setColor(true);
   }
   const onBlue = () => {
     setColor(false)
   }


  return (
    <div className="header">
       <h3>{contact.firstName} {contact.lastName}</h3>
       <p>{contact.email}</p>
       <form onSubmit={onSubmit}>
         <div className="wrapper">
            <input
              name="firstName"
              onChange={handleChange} 
              type="text" 
              placeholder=" FIRST NAME" 
              value={contact.firstName}
             />
            <input 
              name="lastName"
              onChange={handleChange} 
              type="text" 
              placeholder="LAST NAME" 
              value={contact.lastName}
             />
             <input
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="EMAIL"
              value={contact.email}
              />
            <button type="submit">ADD FULL NAME</button>            
         </div>
       </form> 
       <button 
         onMouseOver={onGreen}
         onMouseOut={onBlue}
         style={{marginTop: "5rem", backgroundColor: color? "green" : "#ff7675"}}
       >
         CHANGE COLOR
        </button>     
    </div>
  )
}


export default App;
