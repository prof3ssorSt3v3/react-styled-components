import { Title, InverseTitle, AnimatedTitle, DynamicTitle } from './Styled.js';
import { GlobalStyles } from './Global.js';

function App() {
  return (
    <div className="App">
      <GlobalStyles weight="100" />
      <header>
        <h1>React App with Styled Components</h1>
        <Title>First Title Element</Title>
        <InverseTitle>Second Title Element</InverseTitle>
        <AnimatedTitle>Third Title Element</AnimatedTitle>
        <DynamicTitle>Fourth Title Element</DynamicTitle>
        <DynamicTitle inverted size="4rem">
          Fourth Title Element
        </DynamicTitle>
      </header>
    </div>
  );
}

export default App;
