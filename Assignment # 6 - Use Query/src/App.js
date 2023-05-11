import './App.css';
import Dropdownmenu from './components/Dropdownmenu';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     <Dropdownmenu/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
