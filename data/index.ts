export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contacts", link: "#contacts" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack:",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    pinTitle: "TastyTreats",
    title: "TastyTreats - recipes web application.",
    des: "Fully responsive dynamic recipe web application with API-based recipe retrieval, interactive features, filters, pagination, and theme toggling. Enhanced user experience with modals and advanced filtering options.",
    img: "/tasty_treats.png",
    iconLists: ["/js.svg", "/axios.svg"],
    link: "https://biggujo.github.io/project-cooking/",
  },
  {
    id: 2,
    pinTitle: "HealthyHub",
    title: "HealthyHub - dietary tracking web application.",
    des: "HealthyHub designed to help users monitor their eating habits and achieve health goals through robust authentication, personalized dashboards, meal tracking, graphical data visualization, and efficient record management.",
    img: "/healthyhub.png",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/vite.svg",
      "/cloudinary.svg",
      "/mongo.svg",
    ],
    link: "https://okohop.github.io/healthy_hub/",
  },
  {
    id: 3,
    pinTitle: "BabySitterHub",
    title: "BabySitterHub - nanny booking web application.",
    des: "A website designed to streamline the process of finding and booking nanny services. It offers convenient features like favorites management, nanny sorting, and appointment booking, simplifying the process of hiring childcare services.",
    img: "/babysitter.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/axios.svg",
      "/firebase.svg",
      "/redux.svg",
    ],
    link: "https://kludan.github.io/BabySitterHub/",
  },
  {
    id: 4,
    pinTitle: "CashFlow",
    title: "CashFlow is a modern banking platform.",
    des: "Platform enabling users to manage cards, view transactions, make transfers, and more, all through a user-friendly interface with top-notch security.",
    img: "/cashflow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/radix.svg", "/zod.svg"],
    link: "https://cashflow-neon.vercel.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/KluDan",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "www.linkedin.com/in/danylo-kliushnychenko",
  },
];
