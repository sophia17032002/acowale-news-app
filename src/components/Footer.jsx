// import { Copyright } from "lucide-react";

// const Footer = () => {
//     return (
//         <>
//             <div className="footer bg-gradient-to-r from-slate-900 to-slate-700 h-auto w-full p-8 mt-10 border-t-2 border-slate-700 rounded-t-lg shadow-lg">
//                 <div className="text-white text-3xl font-bold mb-6 text-center">Acowale News</div>
//                 <div className="links flex flex-col md:flex-row gap-10 justify-between items-center pb-8">
//                     <div className="text-center md:text-left">
//                         <ul className="flex flex-col text-white font-medium text-[16px] gap-4">
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Cookie Preferences</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Accessibility</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">User Agreement</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Press Releases</li>
//                         </ul>
//                     </div>
//                     <div className="text-center md:text-left">
//                         <ul className="flex flex-col text-white font-medium text-[16px] gap-4">
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Our Mission</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Advertise with Us</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Investor Relations</li>
//                             <li className="list-none hover:text-gray-300 transition-all duration-300 cursor-pointer">Feedback</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <p className="flex text-slate-400 py-4 justify-center bg-gradient-to-r from-slate-900 to-slate-700 border-t border-slate-700 text-center">
//                     <span className="flex items-center gap-1">
//                         Copyright <Copyright /> 2024 Acowale News Site
//                     </span>
//                 </p>
//             </div>
//         </>
//     );
// };

// export default Footer;

// import { Link } from "react-router-dom";
// import { Copyright } from "lucide-react";

// const Footer = () => {
//   return (
//     <div className="footer bg-gradient-to-r from-slate-900 to-slate-800 h-auto w-full p-8 border-t-2 border-slate-800 rounded-t-lg shadow-xl">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="text-white text-3xl font-bold mb-4 md:mb-0 text-center">Acowale News</div>
//         <div className="flex flex-col md:flex-row gap-10 items-center">
//           <ul className="flex flex-col md:flex-row gap-6 text-white font-medium">
//             <li><Link to="/cookie-preferences" className="hover:text-gray-300 transition-all">Cookie Preferences</Link></li>
//             <li><Link to="/contact" className="hover:text-gray-300 transition-all">Contact Us</Link></li>
//             <li><Link to="/accessibility" className="hover:text-gray-300 transition-all">Accessibility</Link></li>
//             <li><Link to="/about" className="hover:text-gray-300 transition-all">About Us</Link></li>
//           </ul>
//         </div>
//       </div>
//       <p className="text-slate-400 py-4 text-center border-t border-slate-800 mt-4">
//         <span className="flex justify-center items-center gap-1">
//           Copyright <Copyright /> 2024 Acowale News Site
//         </span>
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Acowale News. All rights reserved.</p>
      <div className="mt-2">
        <Link to="/accessibility" className="text-blue-400 hover:underline mx-2">Accessibility</Link>
        <Link to="/cookie-preferences" className="text-blue-400 hover:underline mx-2">Cookie Preferences</Link>
        <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
