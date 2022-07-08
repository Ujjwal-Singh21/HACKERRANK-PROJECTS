import './App.css';
import { Debounce } from './Components/Debounce';
import { Folder } from './Components/FolderExpand/Folder';
import explorer from './Components/FolderExpand/FolderData';

function App() {
  return (
    <div>
      {/* <Debounce /> */}
      
      <Folder explorer={explorer}  />
    </div>
  );
}

export default App;
