"use client";
import React , {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id:1,
    title:"React Portfolio",
    description:"A personal portfolio website built using React and Tailwind CSS to showcase my projects and skills.",
    imgUrl:"/images/projects/image1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id:2,
    title:"E-commerce Store",
    description:"An online store built with Next.js and Stripe integration for seamless payment processing.",
    imgUrl:"/images/projects/image2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  { id:3,
    title:"Blog Platform",
    description:"A blogging platform developed using Gatsby and GraphQL, featuring a user-friendly interface and SEO optimization.",
    imgUrl:"/images/projects/image3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project)=> 
    project.tag.includes(tag)
  );

  return (
    <><h2 className='text-4xl font-bold place-self-center px-4 py-4'>My Projects</h2>
    <div className='text-white flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
      <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
    </div>
    <div className='grid md:grid-cols-3 gap-8 md;gap-12'>
      {filteredProjects.map((project) => (
        <ProjectCard 
          key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} tags={project.tags} gitUrl={project.gitUrl} previewUrl={project.previewUrl}
        />
      ))} 
    </div></>
  )
}

export default ProjectsSection