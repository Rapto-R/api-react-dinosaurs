import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import CharacterList  from "./components/CharacterList";
import CharacterList from "./CharacterList"
import DinosaursList from "./dinosaursList"



function ControlledTabsExample() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Rick & Morty">
          <CharacterList />
        </Tab>
        <Tab eventKey="profile" title="Dinosaurs">
          <DinosaursList />
        </Tab>
      </Tabs>
    );
  }
  
  export default ControlledTabsExample;