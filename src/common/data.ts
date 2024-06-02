export interface Item {
  id: string;
  img: string;
  url: string;
  title: string;
  desc: string;
}
export const TEMPLATES_LIST: Item[] = [
  {
    id: "1",
    img: process.env.PUBLIC_URL + "/imgs/world-map.png",
    url: "https://zoom.us/wb/doc/QasS9btCQweutOjjaFV06Q",
    title: "World Map",
    desc: "A world map is a graphical representation of Earth's surface, illustrating continents, countries, bodies of water, and geographic features. It offers a comprehensive view of global geography, including political boundaries, landforms, and oceans. Varying in scale and detail, world maps aid in navigation, education, and research across disciplines like geography, history, and environmental science. They serve as essential tools for understanding spatial relationships, historical contexts, and global patterns.",
  },
  {
    id: "2",
    img: process.env.PUBLIC_URL + "/imgs/Protractor1.svg",
    url: "https://zoom.us/wb/doc/KsZh7EqHRrqRb2kOd7UQ9w",
    title: "Protractor",
    desc: "In mathematics, a protractor is a tool used to measure angles. It typically consists of a semicircular plastic or metal tool with degree markings along its curved edge. Protractors are commonly used in geometry to measure and draw angles accurately. They allow students to visually understand the concept of angles and practice measuring them with precision.",
  },
  {
    id: "3",
    img: process.env.PUBLIC_URL + "/imgs/international-chess.png",
    url: "https://zoom.us/wb/doc/-Hs1ctj2TiqgS2qadaOd4A",
    title: "International Chess",
    desc: "Playing International Chess on Zoom's whiteboard feature allows players to engage in strategic battles remotely. Participants draw and move pieces with digital tools, mimicking the traditional board experience. Communication is key as players discuss moves and plan strategies via Zoom's audio or chat functions. The virtual setting adds a modern twist, enabling friends, family, or competitors from around the world to compete in real-time. While lacking the tactile sensation of physical pieces, the convenience and accessibility of online play broaden the game's reach. Despite the distance, the thrill of outsmarting opponents and achieving victory remains as captivating as ever.",
  },
  {
    id: "4",
    img: process.env.PUBLIC_URL + "/imgs/Software-Engineer.jpg",
    url: "https://zoom.us/wb/doc/9MBOhc_LSG6G9e0XGxe6Wg",
    title: "Software Engineer - resume",
    desc: "Resume template for software engineer/QA engineer",
  },
  {
    id: "5",
    img: process.env.PUBLIC_URL + "/imgs/mind-map.png",
    url: "https://zoom.us/wb/doc/tUadhR2KTIGseVwrRHWS8g",
    title: "Mind Map",
    desc: "",
  },
  {
    id: "6",
    img: process.env.PUBLIC_URL + "/imgs/project-plan.png",
    url: "https://zoom.us/wb/doc/HxUMDiSNTR6pRw2veYSUWg",
    title: "Project Planning",
    desc: "",
  },
  {
    id: "7",
    img: process.env.PUBLIC_URL + "/imgs/vocation-svg.png",
    url: "https://zoom.us/wb/doc/7l8dxRyVRTOWB74Fl9N8tg",
    title: "Vocation svgs",
    desc: "",
  },
  {
    id: "8",
    img: process.env.PUBLIC_URL + "/imgs/cute-emojis.png",
    url: "https://zoom.us/wb/doc/PsvPh1RaRRywRiqA-mDo3g/p/229523030605824",
    title: "Cute emojis",
    desc: "",
  },
];
