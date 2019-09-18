import React, {useState} from 'react';
import Form from "./components/Form";
import Members from './components/Members';
import styled from 'styled-components';
import './App.css';

const CardContainer = styled.div`
  display:flex;
  border: 1px solid red;


`;


function App() {
  
  //set state, add a default entry
  const [memList, setMemList] = useState([
    {
      id: 0,
      name: "Matt Gill",
      email: "me@me.me",
      role: "Student"
    },
    {
      id: 0,
      name: "Matt Gill",
      email: "me@me.me",
      role: "Student"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMemList([...memList,newMember]);
  };

  return (
    <div className="App">
      <Form addMember={addMember}/>
      <CardContainer>
      <Members memList={memList}/>
      </CardContainer>
    </div>
  );
}

export default App;
