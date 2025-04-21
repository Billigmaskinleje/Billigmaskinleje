export const slug = (link: string) => {
  return link.startsWith("/") ? link : `/${link}`;
};
