import Image from 'next/image';
import Skill from '@/components/ui/skill';
import { FaLink, FaGithub } from 'react-icons/fa';
import ProjectData from '@/data/ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto scroll-mt-[var(--header-height)] py-16">
      <h2 className="mb-4 text-2xl tracking-widest">What I&apos;ve Worked On</h2>

      <div>
        {ProjectData.map((project, index) => (
          <div
            key={`proj-${index}`}
            className="group m-0 flex flex-col gap-6 rounded-lg border border-transparent px-4 py-8 transition-all duration-300 md:flex-row"
          >
            <div className="w-full flex-shrink-0 md:w-80">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                width={400}
                height={300}
                className="object-fit h-auto w-full rounded-lg transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div>
              <h3 className="white flex items-baseline gap-4 text-2xl font-semibold transition-all duration-200 group-hover:text-[var(--highlight)]">
                {project.title}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <FaLink className="text-base" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-base" />
                  </a>
                )}
              </h3>
              <p className="mt-2 text-[var(--description)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                  <Skill key={`proj-skill-${index}`} name={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
