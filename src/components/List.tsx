import React from "react";
import styled from "styled-components";
import { Items } from "../App";

export default function List({
  items,
  setItems,
}: {
  items: Items;
  setItems: React.Dispatch<React.SetStateAction<Items>>;
}) {
  return (
    <Container>
      <ul>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li>
                {item.name}
                <button
                  id={`${index}`}
                  onClick={(e) => {
                    console.log(e?.currentTarget.id);
                    const targetId = Number(e?.currentTarget?.id);

                    setItems((old) => {
                      let newer = [...old];
                      newer.splice(targetId, 1);
                      return newer;
                    });
                  }}
                >
                  Remove
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  & {
    color: white;
  }

  & > ul > li {
    line-height: 50px;
  }

  & > ul > li > button {
    height: fit-content;
    margin-left: 10px;
  }
`;
