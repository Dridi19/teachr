import Firstpage from "./Firstpage.js"
import Forumpage from "./Forumpage.js"

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
function App() {
  return (

    <div>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Firstpage />}>
                </Route>
                <Route path="Secondpage" element={<Forumpage />}>
                </Route>
              </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
