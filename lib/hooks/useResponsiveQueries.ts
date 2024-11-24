import { useMediaQuery } from "react-responsive";

export function useResponsiveQueries() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobileL = useMediaQuery({ query: "(min-width: 425px)" });

  return { isDesktop, isLaptop, isTablet, isMobileL };
}
