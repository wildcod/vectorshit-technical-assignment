import { PipelineToolbar } from './components/Toolbar';
import { PipelineUI } from './components/UI';
import { SubmitButton } from './components/SubmitButton';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
