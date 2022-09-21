const breakpoint = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${breakpoint.mobileS})`,
  mobileM: `(min-width: ${breakpoint.mobileM})`,
  mobileL: `(min-width: ${breakpoint.mobileL})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  laptopL: `(min-width: ${breakpoint.laptopL})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
};
