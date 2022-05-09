import React from "react";
import styled from 'styled-components';
import ToDoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


export default function TodoLists(){
  return(
    <TodoListBlock>
      <ToDoItem text="test1" done={true} />
      <ToDoItem text="test1" done={true} />
      <ToDoItem text="test1" done={true} />
      <ToDoItem text="test1" done={false} />
    </TodoListBlock>
  )
}