export function getSquareNumByScreenSize(
  isDesktop: boolean,
  isLaptop: boolean,
  isTablet: boolean,
  isMobileL: boolean,
) {
  if (isDesktop) return 22;
  if (isLaptop) return 15;
  if (isTablet) return 22;
  if (isMobileL) return 11;
  return 10;
}
