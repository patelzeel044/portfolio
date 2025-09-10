  import { Icons } from "@/components/icons";
  import {
    BriefcaseBusiness,
    CodeIcon,
    GraduationCap,
    HomeIcon,
  } from "lucide-react";

  export const DATA = {
    name: "Zeel Patel",
    initials: "ZP",
    url: "https://github.com/patelzeel044",
    location: "Gujarat, India",
    locationLink: "https://www.google.com/maps/place/gujarat",
    description:
      "Software Developer",
    summary:
      "Software Developer with a passion for acquiring new skills and knowledge. Adaptable and eager to apply my skills to contribute effectively in a dynamic work environment.",
    avatarUrl: " ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "ShadCN",
      "React",
      "Next.js",
      "Redux Toolkit",
      "Express.js",
      "Node.js",
      "Redis",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Rest Api",
      "Socket.io",
      "Git",
      "GitHub",
    ],
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "#projects", icon: CodeIcon, label: "Projects" },
      { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
      { href: "#education", icon: GraduationCap, label: "Education" },
    ],
    contact: {
      email: "patelzeel044@gmail.com",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/patelzeel044",
          icon: Icons.github,
          contact: true,
          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/zeel-patel-a65230281",
          icon: Icons.linkedin,
          contact: true,
          navbar: true,
        },
        Email: {
          name: "Send Email",
          url: "mailto:patelzeel044@gmail.com",
          icon: Icons.email,
          contact: true,
          navbar: false,
        },
      },
    },
    work: [
      {
        company: "BrainyBeam Technologies",
        href: "",
        badges: ["Ahmedabad"],
        location: "Remote",
        title: "Intern Software Developer",
        icon: false,
        logoUrl: "briefcase-business.svg",
        start: "May 2023",
        end: "Jun 2023",
        description:
          ["",],
      },
      {
        company: "Ultron Technologies",
        href: "",
        badges: ["Vidyanagar"],
        location: "On-Site",
        title: "Intern Software Developer",
        icon: false,
        logoUrl: "/briefcase-business.svg",
        start: "Jan 2024",
        end: "May 2024",
        description:
        [ 
          "Gained hands-on experience in **full-stack** development by building projects with the **MERN stack (MongoDB, Express.js, React, Node.js).** Learned end-to-end web development including frontend design, backend APIs, database modeling, and integration, strengthening skills in modern web development practices.",
        ],
      },
      {
        company: "Capermint Technologies",
        href: "",
        badges: ["Ahmedabad"],
        location: "On-Site",
        title: "Jr. Software Developer",
        icon: false,
        logoUrl: "/briefcase-business.svg",
        start: "Mar 2025",
        end: "Aug 2025",
        description:[
          "Developed and Optimized **real-money casino games** including **Plinko** and **Slot game** using **React, Tailwind CSS, Node.js, Express.js, Socket.io, MongoDB and Redis.**",

          "**Implemented real-time gameplay with Socket.io,** supporting thousands of concurrent players with instant spin/drop results.",

          "Integrated **immersive animations and sound effects,** enhancing player engagement and retention.",

          "Designed scalable MongoDB schemas to efficiently track **game history, transaction logs, and player statistics.**",

          "Engineered a **secure backend** with Express for **RTP (Return to Player)** based payout and multiplier engine, wallet systems,  user authentication, and transaction management.",

          "Built a **robust admin panel** with an **interactive dashboard** to manage users, configure game settings, monitor transaction history, and analyze player activity and RTP metrics.",
          
          "Optimized performance and scalability, ensuring smooth gameplay under high traffic and maintaining data integrity across real-time operations.",
          ],
      },
    ],
    education: [
      {
        school: "Madhuben & Bhanubhai Patel Institute of Technology, Vidyanagar",
        href: "",
        degree: "B.E in Computer Engineering",
        icon: true,
        logoUrl: "/graduation-cap.svg",
        start: "2020",
        end: "2024",
      },
      {
        school: "Vidyamandir School, Palanpur",
        href: "",
        degree: "HSC",
        icon: true,
        logoUrl: "/graduation-cap.svg",
        start: "2018",
        end: "2020",
      },
      {
        school: "Vidyamandir School, Palanpur",
        href: "",
        degree: "SSC",
        icon: true,
        logoUrl: "/graduation-cap.svg",
        start: "2017",
        end: "2018",
      },
    ],
    projects: [
      {
        title: "Gold Rush Slot",
        href: "/goldrushslot",
        dates: "",
        active: true,
        description:[
          "Developed a **real-money Slot game** like Pragmatic Play using **React, Tailwind CSS, Node.js, Express.js, Socket.io, MongoDB, Redis, Cloudinary, Framer Motion, and Redux Toolkit with Thunk.**",

          "Implemented **real-time gameplay with Socket.io**, delivering instant spin results. Integrated **immersive animations with Framer Motion and sound effects**, enhancing player engagement and retention.",

          "Designed scalable MongoDB schemas to efficiently track **slot round history, transaction logs, and player statistics.**",

          "Engineered a **secure backend** with Express for an **RTP (Return to Player)-based payout engine,** wallet systems, user authentication, and transaction management.",

          "Built a **robust admin panel** with an **interactive dashboard** to manage users, configure game settings, monitor transaction and slot round history, and analyze player activity and RTP metrics.",

          "Optimized performance and scalability to ensure smooth gameplay under high traffic while maintaining data integrity across real-time operations.",

          ],
        tags: [
          "React",
          "Redux-Thunk",
          "Redux Toolkit",
          "React Hook Form",
          "Tailwind CSS",
          "ShadCN",
          "Framer Motion",
          "Node.js",
          "Express",
          "Mongoose",
          "MongoDB",
          "Aggregation Pipeline",
          "Redis",
          "Socket.io",
          "JSON Web Token",
          "bcrypt",
          "Multer",
          "Cloudinary",
          "Lucide React",
          "React Hot Toast",
        ]
        ,
        links: [
          {
            type: "Website",
            href: "/goldrushslot",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/goldrushslot.png",
        video: "",
      },
      {
        title: "Plinko",
        href: "/plinko",
        dates: "",
        active: true,
        description:[
          "Developed and optimized a **real-money Plinko game** like Stake.com using **React, HTML5-Canvas, Tailwind CSS, Node.js, Express.js, MongoDB, and Redux Toolkit with Thunk.**",

          "Implemented frontend **gameplay rendering and physics** using **HTML5-Canvas for deterministic ball paths**, enhancing player engagement and retention.",

          "Designed scalable MongoDB schemas to efficiently track **game history, transaction logs, and player statistics.**",

          "Engineered a **secure backend** with Express for an **RTP (Return to Player)-based multiplier engine,** wallet systems, user authentication, and transaction management.",

          "Built a **robust admin panel** with an **interactive dashboard** to manage users, monitor transaction and Plinko round history, and analyze player activity and RTP metrics.",

          "Optimized performance and scalability to ensure smooth gameplay while maintaining data integrity across operations."

          ],
        tags: [
          "React",
          "HTML5-Canvas",
          "Redux-Thunk",
          "Redux Toolkit",
          "React Hook Form",
          "Tailwind CSS",
          "ShadCN",
          "Node.js",
          "Express",
          "Mongoose",
          "MongoDB",
          "Aggregation Pipeline",
          "JSON Web Token",
          "bcrypt",
          "Lucide React",
          "React Hot Toast",
        ]
        ,
        links: [
          {
            type: "Website",
            href: "/plinko",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/plinko.png",
        video: "",
      },
      {
        title: "MyTube",
        href: "/mytube",
        dates: "",
        active: true,
        description:[
          "Developed a comprehensive YouTube-like video-sharing web application with a full-stack **MERN (MongoDB, Express.js, React, Node.js)** architecture.",

          "The frontend is developed using **React** and styled with **Tailwind CSS** for responsive design. State management is efficiently handled with **Redux Toolkit** with **Thunk middleware.**",

          "The **Express** backend features robust user management, video handling, and community interaction capabilities. Leveraging **MongoDB** with **aggregation pipeline** for advanced data handling.",

          "This setup supports CRUD operations for users, videos, comments, and community posts. Media uploads are handled with **Cloudinary** for efficient storage and retrieval of images and video content.",

          "User engagement is enhanced through liking and commenting, while activity tracking enables personalized watch history and subscription management, and a dashboard is used for channel analytics and video management.",
          ],
        tags: [
          "React",
          "Redux-Thunk",
          "Redux Toolkit",
          "React Hook Form",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "Mongoose",
          "MongoDB",
          "Aggregation Pipeline",
          "JSON Web Token",
          "bcrypt",
          "Multer",
          "Cloudinary",
          "React Icons",
          "React Hot Toast",
        ]
        ,
        links: [
          {
            type: "Website",
            href: "/mytube",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/mytube.png",
        video: "",
      },
      {
        title: "Chat.com",
        href: "/chat",
        dates: "",
        active: true,
        description:[
          "Developed a real-time chat web application with a full-stack **MERN (MongoDB, Express.js, React, Node.js)** architecture.",

          "The frontend is built with **React** and styled with **Tailwind CSS** for responsive design. State management is handled with **Redux Toolkit.**",

          "The **Express** backend provides robust user management, chat handling, and real-time messaging powered by **Socket.io**, leveraging **MongoDB** for data storage and retrieval.",

          "The app supports private chat, group chat, and both text and media messages. Media uploads are handled with **Cloudinary** for efficient storage and retrieval.",

          "Real-time UX features such as typing indicators and instant message delivery ensure smooth, responsive communication."
          ],
        tags: [
          "React",
          "Redux-Thunk",
          "Redux Toolkit",
          "React Hook Form",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "Mongoose",
          "MongoDB",
          "Aggregation Pipeline",
          "Socket.io",
          "JSON Web Token",
          "bcrypt",
          "Multer",
          "Cloudinary",
          "Lucide React",
          "React Hot Toast",
        ]
        ,
        links: [
          {
            type: "Website",
            href: "/chat",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/chat.png",
        video: "",
      },
      {
        title: "GhostNotes",
        href: "https://ghost-notes-in.vercel.app/",
        dates: "",
        active: true,
        description:[
          "Developed a **full-stack** Anonymous Messaging web application leveraging the power of **Next.js.**",

          "The frontend is styled with **Tailwind CSS** and **ShadCN** for responsive design. **Zod** is implemented for robust form validation and real-time username checking during signup is achieved using **debouncing.**",

          "The backend leverages **MongoDB** for data storage, and **Zod** schemas are used for precise data validation. The platform supports **CRUD** operations for messages, providing robust message management capabilities.",

          "User authentication is managed through a custom signup process and used **NextAuth** for sign-in, including third-party sign-ins via **Google** and **GitHub.** and OTP verification for user sign-up is implemented using **Resend** email services for enhanced security.",

          "The application also integrates Google's **Gemini AI** to offer intelligent message suggestions, enhancing the overall user experience.",
          ],
        tags: [
          "Next.js",
          "Tailwind CSS",
          "ShadCN",
          "React Hook Form",
          "Zod",
          "debouncing",
          "usehooks-ts",
          "Node.js",
          "MongoDB",
          "Mongoose",
          "NextAuth",
          "bcryptjs",
          "Resend",
          "React Email",
          "Gemini AI",     
        ],
        links: [
          {
            type: "Website",
            href: "https://ghost-notes-in.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/ghostnotes.png",
        video: "",
      },
      {
        title: "PassLock",
        href: "https://pass-lock-in.vercel.app/",
        dates: "",
        active: true,
        description:[
          "Developed a **full-stack** authentication web application using **Next.js**.",  
          
          "The frontend is built with **Next.js** and styled with **Tailwind CSS** for responsive design.",

          "The backend is powered by **Next.js**. Leveraging **MongoDB** with **Mongoose** for data storage and modeling.  User authentication is secured using **JWT**, and passwords are encrypted using **bcrypt** for enhanced security, verification is handled through **Nodemailer**, with **Mailtrap** employed for testing mail functionality to ensure reliable email delivery.",
          
          "This architecture provides reliable security and efficient management of user authentication, delivering a smooth and secure experience for users."
        ],
        tags: [
          "Next.js",
          "Tailwind CSS",
          "MongoDB",
          "Mongoose",
          "Nodemailer",
          "Mailtrap",
          "JSON Web Token",
          "Bcryptjs",
          "Axios",
        ]
        ,
        links: [
          {
            type: "Website",
            href: "https://pass-lock-in.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/passlock.png",
        video: "",
      },
      {
        title: "CartSphere",
        href: "https://github.com/patelzeel044/CartSphere",
        dates: "",
        active: true,
        description:[
          "Developed a comprehensive E-commerce Website using modern web technologies such as **React** for frontend development, **Tailwind CSS** for responsive and streamlined styling, **Redux Toolkit** with **Thunk middleware** for state management to handle complex state logic asynchronously, and **React Hook Form** for seamless form handling.", 
          
          "Utilized **Json-server** to simulate backend functionalities, enabling realistic data management and **API** interactions.",
          
          "The project focused on providing a user-friendly interface for browsing products, managing carts, and processing orders effectively."
        ],
        tags: [
          "React",
          "Redux Toolkit",
          "Redux Thunk",
          "React Hook Form",
          "Tailwind CSS",
          "JSON Server",
          "React Alert"
        ]
        ,
        links: [
          {
            type: "Github",
            href: "https://github.com/patelzeel044/CartSphere",
            icon: <Icons.github className="size-3"/>,
          },
        ],
        image: "/projects/cartsphere.png",
        video: "",
      },
      {
        title: "BlogSpace",
        href: "https://blog-space-in.vercel.app/",
        dates: "",
        active: true,
        description:[
          "Developed a blog website using **React** for the front end, **Tailwind CSS** for responsive design, **Redux Toolkit** for efficient state management, and **React Hook Form** for seamless form handling.",
          
          "Leveraged **Appwrite** for robust backend services, empowering the site with secure authentication features and comprehensive **CRUD** operations for managing blog posts",
        ],
        tags: [
          "React",
          "Redux Toolkit",
          "React Hook Form",
          "Tailwind CSS",
          "Appwrite",
          "TinyMCE"
        ],
        links: [
          {
            type: "Website",
            href: "https://blog-space-in.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/blogspace.png",
        video: "",
      },
      /* {
        title: "Other Projects",
        href: "https://github.com/patelzeel044?tab=repositories",
        dates: "",
        active: true,
        description:[
          "",
        ],
        tags: [ ],
        links: [
          {
            type: "Github",
            href: "https://github.com/patelzeel044?tab=repositories",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/projects/other.png",
        video: "",
      } ,*/
    ],
    otherproject:[
      {
        title: "Other Projects",
        href: "https://github.com/patelzeel044?tab=repositories",
        dates: "",
        active: true,
        description:[
          "",
        ],
        tags: [ ],
        links: [
          {
            type: "Github",
            href: "https://github.com/patelzeel044?tab=repositories",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "",
        video: "",
      }
    ]
  };
