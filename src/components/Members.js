import React from 'react';
import styled from 'styled-components';

const CardContainer= styled.div`
    border:3px solid black;
    width: 60%;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    
`;

const Card = styled.div`
    width: 30%;
    padding: 3%;
    margin: 2%;
    border: 1px solid black;
`;


function Members(props){
    return(
       <CardContainer>
        {props.memList.map(member =>(
            <Card key={member.id}>
            <h1>Name: {member.name}</h1>
            <h3>ID: {member.id}</h3>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
            <button type="submit">Edit</button>
            </Card>
        ))}
       </CardContainer>

    );


}

export default Members;