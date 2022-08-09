const settings = {
  meta: {
    rootUrl: "http://localhost:5000",
    title: "Orivesi All Stars",
    description: "Suomen suurin pelimanniorkesteri.",
    social: {
      graphic:
        "https://https://orivesiadmin.net/oas_image.jpg",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/",
    },
    public: {
      pathAfterFailure: "/",
    },
  },
};

export default settings;