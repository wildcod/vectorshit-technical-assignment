import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';

export const TOOL_BARS = [
  { label: 'Input', type: 'customInput', icon: InputOutlinedIcon },
  { label: 'LLM', type: 'llm', icon: ModelTrainingOutlinedIcon },
  { label: 'Output', type: 'customOutput', icon: OutputOutlinedIcon },
  { label: 'Text', type: 'text', icon: TextSnippetOutlinedIcon },
  { label: 'File', type: 'file', icon: InsertDriveFileOutlinedIcon }
];
