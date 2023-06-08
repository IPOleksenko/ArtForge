import { Route, Routes } from "react-router";
import Bass from "./pages/Music/Bass";
import Guitar from "./pages/Music/Guitar";
import Piano from "./pages/Music/Piano";
import Singers from "./pages/Singing/Singers";
import Tembr from "./pages/Singing/Tembr";
import Art from "./pages/Painting/Art";
import Artists from "./pages/Painting/Artists";
import Actors from "./pages/TheatricalArt/Actors";
import Theaters from "./pages/TheatricalArt/Theaters";
import Sculptors from "./pages/Sculpting/Sculptors";
import Sculpture from "./pages/Sculpting/Sculpture";
import Header from "./Components/Header";



export function Pages() {
  return (
    <Routes>

      <Route exact path="/Music/Guitar" element={<Guitar />}></Route>
      <Route exact path="/Music/Piano" element={<Piano />}></Route>
      <Route exact path="/Music/Bass" element={<Bass />}></Route>
      <Route exact path="/Singing/Singers" element={<Singers />}></Route>
      <Route exact path="/Singing/Tembr" element={<Tembr />}></Route>
      <Route exact path="/Painting/Art" element={<Art />}></Route>
      <Route exact path="/Painting/Artists" element={<Artists />}></Route>
      <Route exact path="/TheatricalArt/Actors" element={<Actors />}></Route>
      <Route exact path="/TheatricalArt/Theaters" element={<Theaters />}></Route>
      <Route exact path="/Sculpting/Sculptors" element={<Sculptors />}></Route>
      <Route exact path="/Sculpting/Sculpture" element={<Sculpture />}></Route>
      <Route exact path="/" element={<Header />}></Route>

      

      

      <Route path="*" element={<div> 404</div>} />
    </Routes>
  );
}
