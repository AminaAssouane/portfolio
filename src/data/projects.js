import OceanDesktop from "../assets/projects/OceanDesktop.png";
import OceanPhone from "../assets/projects/OceanPhone.png";

import SwanDesktop from "../assets/projects/SwanDesktop.png";
import SwanPhone from "../assets/projects/SwanPhone.png";

import DevMindsDesktop from "../assets/projects/DevMindsDesktop.png";
import DevMindsPhone from "../assets/projects/DevMindsPhone.png";

import ThiziriDesktop from "../assets/projects/ThiziriDesktop.png";
import ThiziriPhone from "../assets/projects/ThiziriPhone.png";

export const projects = [
  {
    title: "THIZIRI",
    description:
      "Thiziri is a full-stack personal health management application that allows users to centralize and manage their health information in one place. Users can maintain their health profiles, track medications and medication history, manage allergies and chronic conditions, log mood and health status updates, schedule appointments, store medical documents, and manage emergency contacts. The application also features secure authentication and Google sign-in.",
    align: "left",
    color: "#3EB0B6",
    desktopImg: ThiziriDesktop,
    phoneImg: ThiziriPhone,
    liveDemoLink: "https://amina-thiziri.vercel.app",
    githubLink: "https://github.com/AminaAssouane/thiziri",
  },
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
