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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    /*({
      id: "work",
      title: "Work",
    },*/
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
      title: "Web Developer Intern",
      company_name: "BMCP Solutions",
      icon: BMCP,
      iconBg: "#E6DEDD",
      date: "December 2019 - Feb 2020",
      points: [
        "Improved the official website's Front End/UI, leading to 30% faster load time through optimization techniques and image compression.",
        "Assisted in developing a CRM project, resulting in 20% increased sales productivity and 15% faster customer response time.",
        "Worked in an Agile environment, reducing project delivery time by 10% through adaptive planning and regular feedback.",
        "Optimized code and implemented Responsive Design, reducing page load sizes by 25% and boosting mobile traffic by 20%.",
        "Maintained a 95% client satisfaction rate through effective communication and incorporating client feedback.",
      ],
    },
    {
      title: "Software Engineer and Cyber Security Intern",
      company_name: "City and County of San Francisco",
      icon: CCSF,
      iconBg: "#383E56",
      date: "May 2022 - December 2022",
      points: [
        "Researched and evaluated 5+ Chatbot frameworks for MyApps System, resulting in the identification of three optimal frameworks for diverse use cases.",
        "Developed and tested proof of concept implementations, effectively resolving 60% of user queries, resulting in a 30% reduction in support ticket volumes.",
        "Collaborated with a 6-member cross-functional team to gather requirements and optimize Chatbot performance.",
        "Implemented NLP and machine learning libraries, resulting in a 25% improvement in chatbot understanding and response accuracy.",
        "Conducted 5+ knowledge-sharing sessions, enhancing team-wide proficiency in chatbot development and NLP techniques.",
        "Conducted extensive FIDO MFA - YubiKey testing, ensuring seamless authentication for over 30,000 employees, with a 20% decrease in security-related incidents.",
        "Prepared comprehensive technical documentation, contributing to a 30% reduction in onboarding time for new team members.",
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
