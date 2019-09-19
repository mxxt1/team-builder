import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    border: 1px solid black;
    width: 25%; 
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 1%;
    justify-content:space-between;
`;

const InputItem = styled.input`
    padding: 1% 5% 2% 5%;
    width: 75%;
    margin: 0 auto;
    margin-bottom:5%;
`;

function Form(props){
    console.log(props);
const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
});

const handleChanges = e => {
    console.log(member);
    setMember({...member, [e.target.name]: e.target.value});
};

//ask Reed about form not resetting
const formSubmit = e =>{
    e.preventDefault();
    const newMember = {
        ...member,
        id: props.memList.length+1
        // name: member.name,
        // email: member.email,
        // role: member.role
    };
    props.addMember(newMember);
    //reset
    setMember({
        id:"",
        name: "",
        email: "",
        role: ""
    });
};

return(
<FormContainer onSubmit={formSubmit}>
<h3>Add a new member</h3>
<label htmlFor="name">Team Member Name</label>
<InputItem 
    id="title"
    type="text"
    name="name"
    onChange={handleChanges}
    required
/>
<label htmlFor="email">Email</label>
<InputItem 
id="email"
type="text"
name="email"
onChange={handleChanges}
required
/>
<label htmlFor="role">Role</label>
<InputItem 
id="role"
type="text"
name="role"
onChange={handleChanges}
required
/>
<button type='submit'>Add Member</button>
</FormContainer>
)

}

export default Form;
