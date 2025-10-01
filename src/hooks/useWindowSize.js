// import { useState, useEffect } from 'react';

// /**
//  * A custom React hook that tracks the browser window's dimensions.
//  * This hook is reusable in any component that needs to adapt to screen size.
//  *
//  * @returns {object} An object containing the current `width` and `height` of the window.
//  * Example: const { width, height } = useWindowSize();
//  */
// export default function useWindowSize() {
//   // 1. Initialize state with undefined width/height to handle server-side rendering
//   //    and prevent a mismatch between the server and client render.
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // 2. A handler function to be executed on window resize
//     function handleResize() {
//       // 3. Set window width/height to the state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
    
//     // 4. Add the event listener to the window object
//     window.addEventListener("resize", handleResize);
    
//     // 5. Call the handler right away so state gets updated with the initial window size
//     handleResize();
    
//     // 6. This is the cleanup function. It removes the event listener when the
//     //    component unmounts, which is crucial for preventing memory leaks.
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // The empty dependency array [] ensures this effect runs only once on mount and unmount.

//   return windowSize;
// }
