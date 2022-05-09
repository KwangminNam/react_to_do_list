import React, { createRef } from "react";
import { createGlobalStyle } from 'styled-components';
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoLists from "./components/TodoLists";
import TodoTemplate from "./components/TodoTemplate";

const BodyStyle = createGlobalStyle`
  body{
    background-color: #333;
  }
`
;

function App() {
  return (
    <>
      <BodyStyle/>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoLists></TodoLists>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </>
  );
}

export default App;
