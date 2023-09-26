export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Software Engineer Intern at Dolby Laboratories",
        subTitle: "Shenzhen, China",
        date: "02/23 - 04/23",
        description: "Developed Windows SDK using .NET framework for Dolby Vision color profile generation \
        for >200 manufacturers and designers producing >500k laptops annually. Implemented RBAC for the support web portal and improved customer experiences with ASP.NET Core, SignalR, jQuery, and CSS. Actively collaborated with cross functional teams. Actively participated in the software development lifecycle using AWS and IIS. \
        "
      },
      {
        title: "Software Engineer Intern at Red Hat",
        subTitle: "Beijing, China",
        date: "05/22 - 11/22",
        description: "Extended Kubernetes APIs for automation in Golang for two OpenShift releases. Built OpenShift Dynamic Plugins using React and TypeScript for better feature visibility. Developed Cypress scripts for the OpenShift web console. Actively participated in debugging Jenkins CI, fixing Ruby testing scripts, and setting up AWS network environments.  ",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Master's Degree in Computer Science",
        subTitle: "San Jose State University",
        date: "08/23 - 05/25",
        description: "Attended TechCrunch Disrupt 2023, Stanford Law x LLM Hackathon in Sep. Attending AI Engineer Summits and Next Conf this October! ",
      },
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: "Chinese University of Hong Kong",
        date: "09/19 - 05/23",
        description: "Participated in a campus startup Renter as a full-stack developer. Built a WeChat mini-app using Next.js, Node.js and MySQL. ",
      },
    ],
  },
    // @NOTE: You can add more sections here
    {
      title: "Projects",
      items: [
        {
          title: "PadCoder",
          subTitle: "https://github.com/l1xiangyi/padcoder/",
          date: "May 2023",
          description: "Built an iPad LeetCode grinding app using React Native and TypeScript with another engineer. Participated in designing using Figma. Sold to an early stage startup by my partner.",
        },
        {
          title: "Kanan Minimal",
          subTitle: "https://trello-minimal-csc4001.web.app/",
          date: "Apr 2022",
          description: "A Kanban task management web app built with Angular, Nest.js, and Firebase for the Software Engineering course. ",
        },
      ],
    },
    // {
    //   title: "Kanban Minimal",
    //   items: [
        
    //   ],
    // },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
