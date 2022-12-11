import { useState } from "react";
import styled from "styled-components";
import AddItem from "./components/AddItem";
import List from "./components/List";

export type Items = { name: string }[];

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <Container>
      <AddItem setItems={setItems as React.Dispatch<React.SetStateAction<Items>>} />
      <List
        items={items}
        setItems={setItems as React.Dispatch<React.SetStateAction<Items>>}
      />
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: black;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    margin: none;
    padding: none;

    box-sizing: border-box;
  }

  * {
    font-size: 20px;
  }
`;
