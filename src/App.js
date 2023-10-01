import {Screen} from './components/Screen'
import {ScreenTemplate} from './components/ScreenTemplate'
import {ProgressProvider} from "./contexts/ProgressContext";

function App() {
  return (
    <ProgressProvider>
      <ScreenTemplate>
        <Screen/>
      </ScreenTemplate>
    </ProgressProvider>
  );
}

export default App;
