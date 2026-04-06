import OceanDesktop from "../assets/projects/OceanDesktop.png";
import OceanPhone from "../assets/projects/OceanPhone.png";

import SwanDesktop from "../assets/projects/SwanDesktop.png";
import SwanPhone from "../assets/projects/SwanPhone.png";

import DevMindsDesktop from "../assets/projects/DevMindsDesktop.png";
import DevMindsPhone from "../assets/projects/DevMindsPhone.png";

export const projects = [
  {
    title: "OCEAN",
    description:
      "Ocean is a full-stack social media application. Users can create accounts, post updates, like and comment on posts, follow other users, and customize their profiles. The app features a guest login option for instant access, a fully responsive layout, and a dark/light mode toggle.",
    align: "right",
    color: "#ADDDFF",
    desktopImg: OceanDesktop,
    phoneImg: OceanPhone,
    liveDemoLink: "https://amina-ocean.vercel.app/",
    githubLink: "https://github.com/AminaAssouane/ocean",
  },
  {
    title: "SWAN",
    description:
      "Swan is a full-stack real-time messaging application. It supports direct messages and group chats with live updates, a friend system with request/accept flows, group roles, and online presence tracking. Features include typing indicators, unread message counts and optimistic UI updates. The app features a guest login option for instant access.",
    align: "left",
    color: "#D2BBF3",
    desktopImg: SwanDesktop,
    phoneImg: SwanPhone,
    liveDemoLink: "https://amina-swan.vercel.app/",
    githubLink: "https://github.com/AminaAssouane/messaging-app",
  },
  {
    title: "DEVMINDS",
    description:
      "DevMinds is a full-stack blog application composed of three parts: a REST API, a public-facing client, and an admin dashboard. The backend handles authentication, data persistence, and secure endpoints, while the client consumes the API to display posts dynamically. The admin panel allows authorized users to create, edit, and delete content.",
    align: "right",
    color: "#f3c0e5",
    desktopImg: DevMindsDesktop,
    phoneImg: DevMindsPhone,
    liveDemoLink: "https://devminds-client.vercel.app/",
    githubLink: "https://github.com/AminaAssouane/blog-client",
  },
];
