import { Route, Routes } from "react-router-dom";
//import Component from "./components/component3/component1";
import Component4 from "./components/component4/component4";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/c3" element={<Component/>}/> */}
        <Route path="/c4" element={<Component4/>}/>
      </Routes>
    </>
  );
};

export default App;
