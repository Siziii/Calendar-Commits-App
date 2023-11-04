
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:date" element={<Main/>}/>
      <Route path="/404" element={<NotFound/>}/>
    </Routes>
  )
} 

export default App
