import { PipelineToolbar } from './components/Toolbar/Toolbar';
import { PipelineUI } from './components/PipelineUI/PipelineUI';
import PipelineActionbar from './components/PipelineActionbar/PipelineActionbar';

function App() {
  return (
    <div>
      <PipelineActionbar />
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
