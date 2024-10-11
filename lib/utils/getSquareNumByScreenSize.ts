export function getSquareNumByScreenSize(
  isDesktop: boolean,
  isLaptop: boolean,
  isTablet: boolean,
  isMobileL: boolean,
) {
  if (isDesktop) return 18;
  if (isLaptop) return 13;
  if (isTablet) return 22;
  if (isMobileL) return 11;
  return 10;
}
