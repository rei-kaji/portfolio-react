const FeaturePortfolios = [
  {
    id: 1,
    title: "AI Image Generator",
    image: require("../../assets/ai-image-generator.png"),
    github: "https://github.com/rei-kaji/AI-Image-Generator",
    demo: "https://rei-ai-image-generator.netlify.app/",
    language: [
      "React",
      "Node.js",
      "Express",
      "Tailwind",
      "OpenAI",
      "Cloudinary",
      "MongoDB",
    ],
    explain:
      "This website is an AI-powered auto-image generator, utilizing cutting-edge technology to create images based on user inputs. The frontend of the website is built using React and Tailwind, while the backend leverages the power of Express and MongoDB. With the integration of OpenAI's Image Generator API, the site generates images in real-time, and with the use of Cloudinary for image storage, it speeds up data retrieval from MongoDB for a seamless user experience.",
  },
  {
    id: 2,
    title: "Note with GraphCMS",
    image: require("../../assets/note.png"),
    github: "https://github.com/rei-kaji/blog_with_MUI-and-GraphCMS",
    demo: "https://blog-with-mui-and-graphcms.netlify.app",
    language: [
      "React",
      "TypeScript",
      "MUI",
      "HTML",
      "CSS",
      "Scss",
      "GraphQL",
      "GraphCMS",
    ],
    explain:
      "This is an elegantly designed web application that was built using MUI and GraphCMS. It features a user-friendly button that enables users to switch to dark mode and an intuitive modal that showcases a new posting function. This app is optimized for user experience and engagement.",
  },
];

const PortfolioGroup = [
  {
    title: "Fitness App",
    image: require("../../assets/fitness.png"),
    github: "https://github.com/rei-kaji/fitness-app",
    demo: "https://rei-fitness.netlify.app/",
    language: ["React", "MUI", "RappidAPI", "HTML", "CSS"],
    explain:
      "Using RappidAPI. You can search and learn how to make your body strong.",
  },
  {
    title: "Event BBS",
    image: require("../../assets/event-bbs.jpg"),
    github: "https://github.com/rei-kaji/event-bbs",
    demo: "https://event-bbs.web.app",
    language: ["React", "Firebase", "MUI", "HTML", "CSS"],
    explain:
      "In Vancouver, people gather at parks and freely form teams to play soccer or basketball, but it is often the case that you cannot play the game even after you arrive because you do not know if anyone is currently there or not until you get there. My friend and I created this service to solve this problem.",
  },
  {
    title: "Portfolio in full scratch",
    image: require("../../assets/portfolio.png"),
    github: "https://github.com/rei-kaji/portfolio-react",
    demo: "https://rei-portfolio.netlify.app/#home",
    language: ["React", "MUI", "HTML", "CSS"],
    explain:
      "This Web site! Features include full-scratch overall creation, floating menus, and CSS animations implemented.",
  },
  {
    title: "Pokemon Picture Book",
    image: require("../../assets/pokemon.png"),
    github: "https://github.com/rei-kaji/pokemon-app",
    demo: "https://pokemon-picture-book.netlify.app/",
    language: ["React", "pokeAPI", "HTML", "CSS"],
    explain: "You can check all of Pokemon! It was created with PokeAPI.",
  },
  {
    title: "Film Dictionary",
    image: require("../../assets/academy.jpeg"),
    github: "https://github.com/rei-kaji/film-dictionary",
    demo: "https://film-dictionary.netlify.app/",
    language: ["React", "omdbAPI", "HTML", "CSS"],
    explain: "I love movies. So I created a web app related to movies.",
  },
  {
    title: "Fake Mario Maker",
    image: require("../../assets/FakeMarioImage.png"),
    github: "https://github.com/rei-kaji/chat-app",
    demo: require("../../assets/FakeMarioMovie.mov"),
    language: ["C#", "Unity", "Visual Studio"],
    explain:
      "This is an application that allows you to freely create and play with fields and enemies like MarioMaker.",
  },
  // {
  //   title: "Chat App",
  //   image: require("../../assets/chat.png"),
  //   github: "https://github.com/rei-kaji/chat-app",
  //   demo: "https://rei-chat-app.netlify.app",
  //   language: ["React", "TypeScript", "Firebase", "MUI", "HTML", "CSS"],
  //   explain:
  //     "It was created using the Firebase user authentication system and FireStorage. It can comunicate with your friends on real time.",
  // },
];

export { PortfolioGroup, FeaturePortfolios };
