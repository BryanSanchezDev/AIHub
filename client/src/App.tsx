import React from "react";
import ExampleComponent from "./components/ExampleComponent";
import ApiComponent from "./components/ApiComponent";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to AIHub</h1>
      <ExampleComponent />
      <ApiComponent />
    </div>
  );
};

export default App;
