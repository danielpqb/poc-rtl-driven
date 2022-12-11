import styled from "styled-components";

export default function List({ items }: { items: [] }) {
  return (
    <Container>
      <ul>
        {items.map((item: { name: string }) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  & {
  }
`;
