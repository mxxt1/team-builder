import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border:1px solid black;
    width: 33%;
`;


function Members(props){
    return(
    <div className="cardContainer"> 
       <div> 
       <h1>Member Placeholder</h1>
       </div>
       <div>
        {props.memList.map(member =>(
            <Card>
            <h1>Name: {member.name}</h1>
            <h3>ID: {member.id}</h3>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
            </Card>
        ))}
       </div>
    </div>

    );


}

export default Members;