import { useState } from "react";

import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <div className="App-two">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
