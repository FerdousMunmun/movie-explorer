
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/movies" element={<h1>Movies Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;