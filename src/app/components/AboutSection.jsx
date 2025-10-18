"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content: 
        <ul className='list-disc pl-2'>
            <li>Node.js</li>
            <li>Python</li>
            <li>C++</li>
            <li>Javascript</li>
        </ul>
    },
    {
        title:"Education",
        id: "education",
        content: 
        <ul className='list-disc pl-2'>
            <li>University of Singapore, Singapore</li>
        </ul>
    },
    {
        title:"Experience",
        id: "experience",
        content: 
        <ul className='list-disc pl-2'>
            <li>Machine Learning Trainee, NUS Fintech Society</li>
            <li>Junior Developer, PINUS</li>
        </ul>
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="./images/about.png" alt="about-photo" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">I'm an aspiring developer with a passion on building and solving problems. I have experience working with Python, HTML, CSS, C++, and Next.js.</p>

                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>{" "} Skills {" "} </TabButton>

                    <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}> {" "}Education{" "} </TabButton>

                    <TabButton selectTab={()=>handleTabChange("experience")} active={tab==="experience"}> {" "}Experience{" "} </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
