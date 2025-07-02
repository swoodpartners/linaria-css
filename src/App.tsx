import { styled } from "@linaria/react";
import { css as monolithicCss } from "@linaria/core";
import { css as atomicCss } from "@linaria/atomic";
import { Button } from "./Button/Button";

const atomicStyles = atomicCss`
  background: lime;
  text-transform: uppercase;
`;

const MonolithicStyledComponent = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  border: 1px solid red;
  text-decoration: green wavy underline;

  &:hover {
    border-color: blue;
  }
`;

const header = monolithicCss`
  text-transform: uppercase;
  font-size: 24px;
`;

function App() {
  return (
    <>
      <div>Linaria demo</div>
      <h1 className={header}>
        Classic html tag using css via a unique declaration block
      </h1>
      <MonolithicStyledComponent color="#333">
        Styled component styled via a unique declaration block
      </MonolithicStyledComponent>
      <hr />
      <h2>buttons variance demo</h2>
      <Button>default variance</Button>
      <Button variant="link" size="lg">
        Large Link
      </Button>
      <Button variant="accent" size="lg">
        Large Accent
      </Button>
      <Button variant="link" size="sm" className={atomicStyles}>
        Small Link with styles overload
      </Button>
    </>
  );
}

export default App;
