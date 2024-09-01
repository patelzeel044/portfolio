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
    "MongoDB",
    "Mongoose",
    "Zod",
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
      company: "BrainyBeam Technologies Pvt Ltd",
      href: "",
      badges: ["", "Ahmedabad"],
      location: "Remote",
      title: "Android Intern",
      icon: false,
      logoUrl: "briefcase-business.svg",
      start: "May 2023",
      end: "Jun 2023",
      description:
        "",
    },
    {
      company: "Ultron Technologies",
      href: "",
      badges: ["", "Vidyanagar"],
      location: "On-Site",
      title: "React Intern",
      icon: false,
      logoUrl: "/briefcase-business.svg",
      start: "Jan 2024",
      end: "May 2024",
      description:
        "",
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
      title: "MyTube",
      href: "/mytube",
      dates: "",
      active: true,
      description:
        "Developed a comprehensive YouTube-like video-sharing web application with a full-stack MERN (MongoDB, Express.js, React, Node.js) architecture. The frontend is developed using React and styled with Tailwind CSS for responsive design.State management is efficiently handled with Redux Toolkit with Thunk middleware. React Hook Form is utilized for seamless and efficient form handling. The backend is built using Node.js and Express.js, features robust user management, video handling, and community interaction capabilities. Leveraging MongoDB with Mongoose for data storage and modeling, and utilizing the aggregation pipeline for advanced data handling. This setup supports CRUD operations for users, videos, comments, and tweets (similar to YouTube's community posts). Authentication is secured using JWT, and passwords are encrypted using bcrypt for enhanced security. Media uploads are managed through Multer, seamlessly integrated with Cloudinary for efficient storage and retrieval of images and video content. User engagement is enhanced through features such as liking and commenting on videos, which foster community interaction.Additionally, user activity is tracked to provide personalized experiences such as watch history and subscription management, ensuring a comprehensive and engaging user experience. This fullstack solution is ideal for applications requiring dynamic content management and rich user engagement features.",
      technologies: [
        "React",
        "Redux-Thunk",
        "Redux Toolkit",
        "React Hook Form",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JSON Web Token",
        "bcrypt",
        "Multer",
        "Cloudinary",
        "Aggregation Pipeline",
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
      title: "GhostNotes",
      href: "https://ghost-notes-in.vercel.app/",
      dates: "",
      active: true,
      description:
        "Developed a full-stack Anonymous Messaging web application leveraging the power of Next.js for both frontend and backend development.  The frontend is built with Next.js, styled with Tailwind CSS and ShadCN for responsive design. React Hook Form is utilized for seamless form handling. Zod is implemented for robust form validation. Real-time username checking during signup is achieved using debouncing.  The backend is powered by Next.js and Node.js, leveraging MongoDB with Mongoose for data storage and modeling. Zod schemas are employed for precise data validation. The platform supports CRUD operations for messages, providing robust message management capabilities.  User authentication is managed through a custom signup process and used NextAuth for sign-in, including third-party sign-ins via Google and GitHub. Passwords are encrypted using bcryptjs, and OTP verification for user sign-up is implemented using Resend email services for enhanced security.  The application also integrates Google's Gemini AI to offer intelligent message suggestions, enhancing the overall user experience.  This full-stack solution offers a seamless experience for anonymous messaging with advanced features for security, validation, and intelligent content suggestions. ",

      technologies: [
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
      description:
        "Developed a full-stack authentication web application using Next.js.  The frontend is built with Next.js and styled with Tailwind CSS for responsive design.  The backend is powered by Next.js and Node.js.Leveraging MongoDB with Mongoose for data storage and modeling.  User authentication is secured using JWT, and passwords are encrypted using bcrypt for enhanced security, verification is handled through Nodemailer, with Mailtrap employed for testing mail functionality to ensure reliable email delivery.  This architecture provides reliable security and efficient management of user authentication, delivering a smooth and secure experience for users.",
      technologies: [
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
      description:
        "Developed a comprehensive E-commerce Website using modern web technologies such as React for frontend development, Tailwind CSS for responsive and streamlined styling, Redux Toolkit with Thunk middleware for state management to handle complex state logic asynchronously, and React Hook Form for seamless form handling. Utilized Json-server to simulate backend functionalities, enabling realistic data management and API interactions. The project focused on providing a user-friendly interface for browsing products, managing carts, and processing orders effectively.",
      technologies: [
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
      description:
        "Developed a blog website using React for the front end, Tailwind CSS for responsive design, Redux Toolkit for efficient state management, and React Hook Form for seamless form handling. Leveraged Appwrite for robust backend services, empowering the site with secure authentication features and comprehensive CRUD operations for managing blog posts",
      technologies: [
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
    {
      title: "Other Projects",
      href: "https://github.com/patelzeel044?tab=repositories",
      dates: "",
      active: true,
      description:
        "",
      technologies: [ ],
      links: [
        {
          type: "Github",
          href: "https://github.com/patelzeel044?tab=repositories",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/other.png",
      video: "",
    },
  ],
} as const;
