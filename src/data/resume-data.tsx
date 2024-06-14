import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Xiangyi Li",
  initials: "XL",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/San+Jose",
  about:
    "Student, software engineer, aspiring entrepreneur. Passionate about tech, design, marketing. Obsessed with automation and snappiness.  ",
  summary:
    "As a Software Engineer, I excel in both frontend and backend development. I have a proven track record of building scalable applications and leading projects from concept to completion. My expertise includes TypeScript, React, Node.js, and cloud-native technologies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/51786539?s=800&v=4",
  personalWebsiteUrl: "https://xiangyi.li",
  contact: {
    email: "lixian9yi@gmail.com",
    tel: "+14084558514",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/xdotli",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/l1xiangyi",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/xdotli",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "San Jose State University",
      degree: "M.S. in Computer Science",
      start: "Sep. 2023",
      end: "Dec. 2024",
    },
    {
      school: "The Chinese University of Hong Kong, Shenzhen",
      degree: "B.Eng. in Computer Science and Engineering",
      start: "Sep. 2019",
      end: "Jun. 2023",
    },
  ],
  work: [
    {
      company: "Tesla",
      link: "https://www.tesla.com",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      logo: "TeslaLogo",
      start: "May. 2024",
      end: "Present",
      description:
        "Enhanced Tesla's internal system using Angular and .NET. Refined Tesla Design System. 3 weeks in and finished 4 stories + many code reviews. ",
    },
    {
      company: "Kimi.ai",
      link: "https://apps.apple.com/us/app/kimi-ai-anime-voice-chat/id6478798034",
      badges: [],
      title: "Founding Engineer",
      logo: "KimiAiLogo",
      start: "Dec. 2023",
      end: "Feb. 2024",
      description:
        "Led the creation of an AI anime voice chat app with React Native, Next.js, and PostgreSQL. Achieved $100k funding and 10k users in the first month.",
    },
    {
      company: "Dolby",
      link: "https://www.dolby.com",
      badges: ["Internship"],
      title: "Windows Platform Developer Intern",
      logo: "DolbyLogo",
      start: "Feb. 2023",
      end: "Apr. 2023",
      description:
        "Shipped features in web portals and SDKs with .NET tuning 500k laptops annually. Improved customer satisfaction by 40% through cross-functional communication.",
    },
    {
      company: "Red Hat",
      link: "https://www.redhat.com",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      logo: "RedHatLogo",
      start: "May 2022",
      end: "Nov 2022",
      description:
        "Automated OpenShift Plugins with Golang and K8s APIs. Built features and e2e tests in OpenShift web console with React and Cypress. Impacted 2 releases + 100M+ users on our infra. ",
    },
    {
      company: "Chinese University of Hong Kong",
      link: "https://www.cuhk.edu.cn",
      badges: ["Research"],
      title: "Research Assistant",
      logo: "CUHKLogo",
      start: "Feb. 2022",
      end: "May 2022",
      description:
        "Accelerated weather data processing by 600x using JIT compilation with LLVM and Numba.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Python",
    "C++",
    "Golang",
    "AWS",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "PyTorch",
  ],
  projects: [
    {
      title: "Ask Abe AI",
      techStack: ["Next.js"],
      description:
        "Built an interactive legal agent using Next.js. Enhanced query speed by 20x with PostgreSQL and pgvector on Supabase.",
      logo: "AskAbeLogo",
      link: {
        label: "ask-abe-beta.vercel.app",
        href: "https://ask-abe-beta.vercel.app",
      },
    },
    {
      title: "ChatGPT Detector",
      techStack: ["RoBERTa", "NLP"],
      description:
        "Developed a RoBERTa-based classification model, improving generalization performance by 4x.",
      logo: "ChatGPTDetectorLogo",
      // link: {
      //   label: "github.com",
      //   href: "https://github.com/xdotli/chatgpt-detector",
      // },
    },
    {
      title: "Kanan Minimal",
      techStack: ["Angular", "Firebase", "Nest.js"],
      description:
        "Designed and developed a minimalistic Kanban board with Angular, Firebase, and Nest.js.",
      logo: "KananMinimalLogo",
      link: {
        label: "kanan-minimal.web.app",
        href: "https://trello-minimal-csc4001.web.app/",
      },
    },
  ],
} as const;
