import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return null;
}

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const previousScrollPosition = sessionStorage.getItem("scrollPosition");

//     if (previousScrollPosition) {
//       window.scrollTo(0, JSON.parse(previousScrollPosition));
//       sessionStorage.removeItem("scrollPosition");
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       sessionStorage.setItem("scrollPosition", JSON.stringify(window.scrollY));
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return null;
// }

// export default ScrollToTop;

// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function ScrollToTop() {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const scrollPositions =
//       JSON.parse(sessionStorage.getItem("scrollPositions")) || {};

//     const previousScrollPosition = scrollPositions[pathname];

//     if (previousScrollPosition !== undefined) {
//       window.scrollTo(0, previousScrollPosition);
//       delete scrollPositions[pathname];
//       sessionStorage.setItem(
//         "scrollPositions",
//         JSON.stringify(scrollPositions)
//       );
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname, navigate]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPositions =
//         JSON.parse(sessionStorage.getItem("scrollPositions")) || {};
//       scrollPositions[pathname] = window.scrollY;
//       sessionStorage.setItem(
//         "scrollPositions",
//         JSON.stringify(scrollPositions)
//       );
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;

// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       sessionStorage.setItem(
//         `scrollPosition_${pathname}`,
//         JSON.stringify(window.scrollY)
//       );
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [pathname]);

//   useEffect(() => {
//     const previousScrollPosition = sessionStorage.getItem(
//       `scrollPosition_${pathname}`
//     );

//     if (previousScrollPosition !== null) {
//       window.scrollTo(0, JSON.parse(previousScrollPosition));
//       sessionStorage.removeItem(`scrollPosition_${pathname}`); // Clear scroll position after restoring
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname, navigate]); // Include navigate in the dependency array

//   return null;
// }

// export default ScrollToTop;
