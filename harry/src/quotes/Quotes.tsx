import {  Github, Linkedin, Mail, Globe } from 'lucide-react';


export const quotes = [
    {
      jp: "静寂の中に心の声を聴く",
      en: "Listen to the voice of your heart in silence",
      author: "- 松尾 芭蕉"
    },
    {
      jp: "人生は儚き夢のごとし",
      en: "Life is but a fleeting dream",
      author: "- 世阿弥"
    },
    {
      jp: "花は無心に咲く",
      en: "Flowers bloom without worry",
      author: "- 良寛"
    }
  ];

 export  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/harry",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/harry",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:harry@example.com",
      label: "Email"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      href: "#",
      label: "Website"
    }
  ];

  export  const galleryImages = [
    { src: "/api/placeholder/400/300", alt: "Project 1", title: "Research Project 1" },
    { src: "/api/placeholder/400/300", alt: "Project 2", title: "Research Project 2" },
    { src: "/api/placeholder/400/300", alt: "Project 3", title: "Research Project 3" },
    { src: "/api/placeholder/400/300", alt: "Project 4", title: "Research Project 4" }
  ];

  export const research = [
    {
      title: "Research Project 1",
      description: "Description of research project 1 and its impact."
    },
    {
      title: "Research Project 2",
      description: "Description of research project 2 and its impact."
    }
  ];