import {ScreenResolver} from './components/ScreenResolver'
import {ScreenTemplate} from './components/ScreenTemplate'
import {ProgressProvider} from "./contexts/ProgressContext";

function App() {
  return (
    <ProgressProvider>
      <ScreenTemplate>
        <ScreenResolver/>
      </ScreenTemplate>
    </ProgressProvider>
  );
}

export default App;
