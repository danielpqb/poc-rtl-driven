import { useState } from "react";
import styled from "styled-components";
import AddItem from "./components/AddItem";
import List from "./components/List";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <Container>
      <AddItem setItems={setItems} />
      <List items={items as []} />
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
`;
