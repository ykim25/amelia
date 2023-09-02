import {
  Routes,
  Route,
} from "react-router-dom";
import Game from "./pages/game";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  );
}
export default App;
