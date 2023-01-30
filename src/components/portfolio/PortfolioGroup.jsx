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
      "This is an auto-image generator with AI. The front end was created with React and Tailwind, and the back end used Express and MongoDB. It uses OpenAI's Image Generator API to display images created based on the words entered. By storing only the images in Cloudinary, I accomplished to speed up the data retrieval from MongoDB.",
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
      "This web app was created with MUI and GraphCMS. It implements a button to switch to dark mode and display a new posting function in the modal.",
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
