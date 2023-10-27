import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Physics Enthusiast",
      icon: web,
    },
    {
      title: "React Web Developer",
      icon: mobile,
    },
    {
      title: "Int. British A-Levels Student",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Where it all start",
      company_name: "My first lines of code",
      icon: typescript,
      iconBg: "#383E56",
      date: "July 2020",
      points: [
        "I wrote my first line of code at 14 with one of the most revoluationary programming languages formally known as \"Java\" ",
        "I learned the basics of programming ideas, from variables to arrays to functional programming.",
        "I taught myself how to build useful desktop applications using the Java Swing framework and used them extensively for personal simple use to speed up several regular activites.",
        "I taught myself how to use front-end User Interfaces to interact with the backend of a system using Java.",
      ],
    },
    {
      title: "My Java certificate",
      company_name: "Codecademy",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "September 2020",
      points: [
        "As I was getting lost of what to learn I stumbled upon codecademy, a place where I learned everything I needed to know as beginner in the world of code.",
        "I learned how to implement different ideas which I previously did not fully understand the uses for such inheritence and polymorphism.",
        "It taught me how to use Java more efficiently for someone my level and I managed to implement my new tools in my work.",
        "On this date I received my certificate as a Java beginner.",
      ],
    },
    {
      title: "Live external chats",
      company_name: "Tokyo Guild - Hypixel",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2021",
      points: [
        "I was getting into Minecraft and happened to join a guild by the name of \"Tokyo Guild\" and I became part of the development team for the In-game to Discord bot.",
        "Collaborating with my fellow developer we worked on a bot which managed to extract the chats from the in-game guild chat and send them in a Discord text-channel while also allowing it to do it with Discord ther other way around.",
        "There was lots of room for improvement on the bot's efficieny and inter-connection but we did a marvellous job providing the service to our guild members.",
        "I learned a lot from just using plain JavaScript to the uses and concepts of APIs.",
      ],
    },
    {
      title: "Web Developemnt Era",
      company_name: "The Front-End",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "I started learning front-end web-development specifically with the ReactJS library and have been implementing it (This website is made with it).",
        "I learned the core revolutionary concepts such as the Real and Virtual DOM and how to utilize them.",
        "I learned other remarkable tools such as Tailwind CSS which completely changed the way of styling HTML elements using classes",
        "I currently am learning ThreeJS to try and develop amazing 3D simulations and websites through my path and can't wait to see what else lies ahead in my road.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius - and a lot of courage - to move in the opposite direction.",
      name: "Albert Einstein",
      designation: "Theortical Physicist",
      company: "",
      image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg",
    },
    {
      testimonial:
        "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
      name: "Alan Turring",
      designation: "Mathematician",
      company: "",
      image: "https://www.history.org.uk/library/1308/0000/0217/Turing_square.jpg",
    },
    {
      testimonial:
        "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don't just give up.",
      name: "Stephan Hawking",
      designation: "Theortical Physicist",
      company: "",
      image: "https://m.media-amazon.com/images/M/MV5BMTk3M2YxMTUtMDg0OC00ZmMzLWFkNWQtZWU5YjE1ZDBlODMwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "This is my first and current personal portfolio for me as a person that I made with pure JavaScript, HTML and CSS.",
      tags: [
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MrLegendGaming/MrLegendGaming.github.io",
    },
    {
      name: "Unavailable for now",
      description:
        "Unavailable for now.",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Unavailable for now",
      description:
        "Unavailable for now.",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };