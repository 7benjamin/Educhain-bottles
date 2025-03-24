const siteConfig = {
  name: "Bottles",
  description: "Bottles",
  pinata: {
    // Todo
    pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1YTNmZTE5Zi0zOTg0LTRlYmUtYmQ2Yi04YTg4OWY5Y2Y2MDMiLCJlbWFpbCI6ImJlbmppc2ltYW5qdW50YWtAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjliYWYzMjMwYTlkZmIzNzU1YjNmIiwic2NvcGVkS2V5U2VjcmV0IjoiYWRmOGEwOWE4ZGY4ODgwNjM3YTQzMjdjMDE3NzlhMjkwNmZhZTI4ZTYyN2QzYzMyNzQ5N2QzODQyNTk2YTFjOCIsImV4cCI6MTc3NDA4MzQ0NX0.MX1j-exaGAFNnJdCqyLvAgRyeTwKGoRGNGULs8mLjxI",
    pinataGateway: "",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Bottles",
      href: "/bottles",
    },

    {
      label: "More",
      href: "/more",
    },
  ],
};

export default siteConfig;
export type SiteConfig = typeof siteConfig;
