import React, {useState} from 'react';
import Form from "./components/Form";
import Members from './components/Members';
import styled from "styled-components";
import './App.css';

const AppContainer = styled.div`
  // display:flex;
`;


function App() {
  
  //set state, add a default entry
  const [memList, setMemList] = useState([
    {
      id: 1,
      name: "Matt Gill",
      email: "me@me.me",
      role: "Student"
    }
  ]);
  //member selection state (for editing)
  // const [memberToEdit, setMemberToEdit] = useState("");

  // useEffect()
  //add a new member and member card
  const addMember = member => {
    setMemList([...memList,member]);
  };

  return (
    <AppContainer className="App">
      <Form addMember={addMember} memList={memList}/>
     <div>
     <Members memList={memList}/>
     </div>
    </AppContainer>
  );
}

export default App;


