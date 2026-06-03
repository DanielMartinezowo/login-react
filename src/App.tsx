import { Toaster } from 'react-hot-toast';
import { MapRoutes } from './features/rutes/mapRoutes';

function App() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />

      <MapRoutes />
    </>
  );
}

export default App;
