import { styled } from "@linaria/react";

const Container = styled.div`
  color: ${(props) => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }
`;

function App() {
  return (
    <>
      <div>tstsr</div>
      <Container color="#333"></Container>;
    </>
  );
}

export default App;
