
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contacts from './Contacts.jsx';
const Root = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* Layout wrapper */}
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contacts />} />
                </Route>
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Root