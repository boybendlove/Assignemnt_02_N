import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HotelSearchProvider } from "./components/searchItem/searchContext.jsx"
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <HotelSearchProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    </HotelSearchProvider>
  );
}

export default App;
