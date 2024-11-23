import React from "react";
import OtherDeatils from "./componets/OtherDeatils";
import "./App.css";
import Visit from "./componets/visit";
import PayDetails from "./componets/payDetails";
const App = () => {
  return (
    <div>
      <OtherDeatils />
      <Visit />
      <PayDetails />
    </div>
  );
};

export default App;
