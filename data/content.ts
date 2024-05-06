export const contentData = [
  {
    title: "Work Experiences",
    items: [
      {
        title: "Founding Engineer at Imaginix",
        subTitle: "San Jose, US",
        date: "12/23 - 02/24",
        description: "Built the majority of the Kimi app, including the frontend, backend, database, logging, AI engineering, and CI/CD.\
        Built the WebView layer for the Live2D model. Hand-crafted a suite of interview questions used to interview >25 people\
        "
      },
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
      {
        title: "Research Assistant at CUHK",
        subTitle: "Shenzhen, China",
        date: "02/22 - 05/22",
        description: "Implemented statistical algorithms like gradient descent and canonical correlation analysis in C++ and Python. Compiled Python code for auto-vectorization for improved computation speed. Distributed VMs for matrix calculations. "
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
    // VOC2012 Object Detection Task – Deep Learning Course Project
    {
      title: "Projects",
      items: [
        {
          title: "Better Diffusion",
          subTitle: "Work in progress",
          date: "Oct 2023",
          description: "Scraped, cleaned, and analyzed with NLP techniques on Midjourney's Discord messages. Used them for fine-tuning GPT-3.5. Generate prompts with OpenAI Function API and then images using stable diffusion. "
        },
        {
          title: "Ask Abe AI",
          subTitle: "https://ask-abe-beta.vercel.app/",
          date: "Sep 2023 - Present",
          description: "Developed a better law answering agents. Scraped law data with TypeScript and generated vector embedding with OpenAI embedding API. Used Supabase and pgvector with HNSW for RAG. Built the frontend using React Server Components and TypeScript. ",
        },
        {
          title: "PadCoder",
          subTitle: "https://github.com/l1xiangyi/padcoder/",
          date: "May 2023",
          description: "Built an iPad LeetCode grinding app using React Native and TypeScript with another engineer. Participated in designing using Figma. Sold to an early stage startup by my partner.",
        },
        {
          title: "VOC2012 Object Detection Task",
          subTitle: "http://github.com/l1xiangyi/dda4220-final/",
          date: "May 2023",
          description: "Analyzed images with classic OpenCV algorithms. Fine-tuned STOA models like Faster RCNN, SSD, and YOLO and compared performances. Wrote Bash scripts to train and log results for GPU clusters. "
        },
        {
          title: "ChatGPT Detector",
          subTitle: "https://github.com/l1xiangyi/csc3160-final/",
          date: "May 2023",
          description: "Fine-tuned RoBERTa models with scraped human texts and generated texts using a suite of different LLMs. Compared the results with the baseline model. Proved increased generalization performance by introducting more LLM texts. ",
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
