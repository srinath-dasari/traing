import React, { createContext, useContext } from "react";

const DataContext = createContext();

function App() {
  const data = "Hello, I am Sainath";
  return (
    <DataContext.Provider value={data}>
      <User1 />
    </DataContext.Provider>
  );
}

function User1() {
  return <User2 />;
}

function User2() {
  return <User3 />;
}

function User3() {
  return <User4 />;
}

function User4() {
  const data = useContext(DataContext); // Accessing context value
  return <div>{data}</div>;
}

export default App;
