import { useState } from "react";
import styled from "styled-components";

export default function AddItem({ setItems }: { setItems: React.Dispatch<React.SetStateAction<never[]>> }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => {}}>Add Item</button>
    </Container>
  );
}

const Container = styled.div`
  & {
    display: flex;

    margin: none;
    padding: none;
  }

  & > input {
  }

  & > button {
  }
`;
