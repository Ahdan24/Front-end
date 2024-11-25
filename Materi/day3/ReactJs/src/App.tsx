// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";

// function App() {
//   const nama = "Ahdan";

//   return (
//     <>
//       <ComponentA name={nama} />
//       <ComponentB orang={nama} />
//       <ComponentC name={nama} />
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<NotFound />} path="/*" />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
