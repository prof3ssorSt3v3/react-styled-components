import styled from 'styled-components';
import Theme from './Theme.js';
import Inner from './Inner.js';

const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.colors.brightTxt};
  background-color: ${(props) => props.theme.colors.darkerBg};
  font-size: ${(props) => props.theme.fontSizes.large};
`;
// props.theme

function App() {
  return (
    <Theme>
      <div className="App">
        <header>
          <h1>React App with Styled Components</h1>
        </header>
        <Box>
          <p>Be a box.</p>
        </Box>
        <main>
          <Inner hello="world" />
        </main>
      </div>
    </Theme>
  );
}

export default App;
