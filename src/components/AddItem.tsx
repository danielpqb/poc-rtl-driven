import { useState } from "react";
import styled from "styled-components";
import { Items } from "../App";

export default function AddItem({ setItems }: { setItems: React.Dispatch<React.SetStateAction<Items>> }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <input
        placeholder="name"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue === "") return;
          setItems((old) => {
            return [...old, { name: inputValue }];
          });
          setInputValue("");
        }}
      >
        Add Item
      </button>
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
