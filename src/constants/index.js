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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    yander,
    weatherapp,
    githubfinder,
    type2heart,
    covtrail,
    CCSF,
    BMCP,
    OC,
    IQ
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
      title: "Python Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Machine Learning and Data Science",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   
    {
      title: "Data Analyst",
      company_name: "iQuasar LLC",
      icon: IQ,
      iconBg: "#E6DEDD",
      date: "October 2023 - Present",
      points: [
        "Conducted market research using Pandas and NumPy for data analysis and visualization. Leveraged APIs from Acquisition.gov, Sam.gov, FPDS, and Govtribe to enhance market forecast accuracy. Developed an automated Python pipeline for solicitation data extraction with BeautifulSoup and requests, improving RFP assessment accuracy by 25%.",
        "Designed an automated proposal workflow with AWS Lambda, handling the extraction, filtering, and transformation of solicitation data using Pandas, and dynamically populating templates for various proposal documents. Developed a React.js frontend for automated outline generation and section mapping, reducing document preparation time by 30%.",
        "Developed a modular framework for managing proposal documents, ensuring accurate mapping to solicitation requirements and improving document consistency and compliance, resulting in a 25% increase in proposal quality and success rates.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "One Community Inc.",
      icon: OC,
      iconBg: "#E6DEDD",
      date: "September 2023 - November 2023",
      points: [
        "Led MERN stack code reviews and QA for the Highest Good Network application, ensuring feature integrity across front-end, back-end, and database. Reviewed over 150+ pull requests, enhancing code quality and application performance by 30%.",
        "Contributed to front-end development with a focus on UI/UX enhancements using React.js. Streamlined UI consistency resulting in a 30% improvement in navigation efficiency and a 25% increase in user task completion rate.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "City and County of San Francisco",
      icon: CCSF,
      iconBg: "#E6DEDD",
      date: "May 2022 - December 2022",
      points: [
        "Led the chatbot framework assessment for MyApps System, developed a proof of concept using Microsoft Bot Framework Composer, reducing ticket volume by 30%. Utilized Bot Framework Web Chat and Inspector for testing and debugging.",
        "Integrated QnA Maker to manage FAQs, enhancing interactions in Microsoft Teams and Web Chat channels. Applied user behavior analysis and predictive modeling to optimize chatbot performance, identifying user interaction trends and addressing common queries.",
        "Mitigated security incidents by 20% with FIDO MFA - YubiKey testing, improving authentication for 30k+ government employees.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "BMCP Solutions",
      icon: BMCP,
      iconBg: "#E6DEDD",
      date: "December 2019 - Feb 2020",
      points: [
        "Led the website revamp using MERN stack, achieving a 30% faster load time, enhanced mobile responsiveness, and boosting traffic by 20%.",
        "Utilized data analytics to track user behavior, identify performance bottlenecks, and optimize site responsiveness.",
        "Assisted in developing a Stealth CRM project, resulting in 20% increased sales productivity and 15% faster customer response time.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Yander E-commerce",
      description:
        "A dynamic E-commerce platform fueled by Django. It seamlessly integrates vital components like user authentication, payment gateway, and order management. The interface, artfully crafted using HTML5, CSS3, and Bootstrap, ensures both visual appeal and user-friendly responsiveness.",
      tags: [
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: " bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: yander,
      source_code_link: "https://github.com/malikjahanzaib/yander-ecom-final-1",
    },
    {
      name: "Weather App",
      description:
        "A user-friendly weather application that effortlessly delivers real-time weather updates, including temperature, high/low forecasts, and overall conditions for any city. Stay informed with ease and precision.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/malikjahanzaib/weather-app-js",
    },
    {
      name: "GitHub Finder",
      description:
        "GitHub search app that efficiently retrieves user profiles and their top 5 repositories, complete with essential attributes like Watchers, Stars, Forks, and more. Simplifying the exploration of GitHub data for enhanced user experience.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootswatch",
          color: "blue-text-gradient",
        },
      ],
      image: githubfinder,
      source_code_link: "https://github.com/malikjahanzaib/GitHub-Finder",
    },
    {
      name: "Type2Heart",
      description:
        "Machine Learning derived model to predict the risk of Heart Failure among T2DM patients, utilizing Random Survival Forests as the learning model for accurate predictions.",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "yellow-text-gradient",
        },
        {
          name: "matplotlib",
          color: "orange-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: type2heart,
      source_code_link: "https://github.com/malikjahanzaib/Type2Heart",
    },
    {
      name: "CovTrail",
      description:
        "Epidemiological and supervised machine learning algorithms to analyze the global COVID-19 data and estimate the total number of globally reported cases in the future.",
      tags: [
        {
          name: "r",
          color: "blue-text-gradient",
        },
        {
          name: "ggplot",
          color: "green-text-gradient",
        },
        {
          name: "dplyr",
          color: "orange-text-gradient",
        },
      ],
      image: covtrail,
      source_code_link: "https://github.com/malikjahanzaib/CovTrail",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
