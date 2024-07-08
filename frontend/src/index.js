// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import ContactForm from "./Form";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/contact-form">Contact Form</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/contact-form" element={<ContactForm />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
