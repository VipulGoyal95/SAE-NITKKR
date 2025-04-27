"use client";

import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Detect all sections in the page
    const allSections = Array.from(document.querySelectorAll("section")).map(
      (section) => {
        return {
          id: section.id || Math.random().toString(36).substr(2, 9),
          element: section,
          top: section.offsetTop,
          height: section.offsetHeight,
        };
      }
    );

    setSections(allSections);

    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Determine scroll direction
      if (position > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollTop(position);
      setScrollPosition(position);

      // Calculate scroll percentage
      const scrollPercentage = (position / (docHeight - windowHeight)) * 100;

      // Set isScrolling flag to true
      setIsScrolling(true);

      // Clear the timeout if it exists
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }

      // Set a timeout to clear the isScrolling flag
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to handleScroll to set the initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }
    };
  }, [lastScrollTop]);

  // Determine which section is currently in view
  const currentSection = sections.find((section) => {
    const sectionTop = section.top;
    const sectionBottom = section.top + section.height;
    const viewportMiddle = scrollPosition + window.innerHeight / 2;

    return viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom;
  });

  return {
    scrollPosition,
    scrollDirection,
    isScrolling,
    currentSection: currentSection ? currentSection.id : null,
    sections,
  };
};

export default useScrollPosition;
