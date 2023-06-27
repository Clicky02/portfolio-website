import "./App.css";

import Header from "./modules/Header/Header";
import { Box } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Box id="section1" sx={{ height: "150vh" }} />
            <Box id="section2" sx={{ height: "150vh" }} />
            <Box id="section3" sx={{ height: "150vh" }} />
        </div>
    );
}

export default App;
