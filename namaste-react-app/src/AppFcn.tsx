import React from "react";
import Icon from "./sprites";

const icons = ["account-new", "acount-new-filled"];

function App() {
  return (
    <div className="App">
      {icons.map((id) => {
        return <Icon key={id} id={id} />;
      })}
    </div>
  );
}

export default App;
