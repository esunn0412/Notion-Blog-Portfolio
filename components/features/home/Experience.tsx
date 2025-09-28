import { FaLink } from 'react-icons/fa';
import Skill from '@/components/ui/skill';
import ExperienceData from '@/data/ExperienceData';

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto scroll-mt-[var(--header-height)] py-16">
      <h2 className="mb-12 text-2xl tracking-widest">My Experience</h2>
      <div className="space-y-12">
        {ExperienceData.map((exp, index) => (
          <div key={`exp-${index}`} className="group m-0 flex flex-col gap-6 md:flex-row">
            {/* Vertical Line and Dot */}
            <div className="relative hidden flex-col items-center md:flex">
              <div className="dark:bg-primary z-10 flex size-6 items-center justify-center rounded-full bg-[var(--highlight)]/30 transition-all duration-200 group-hover:bg-[var(--highlight)]!">
                <div className="h-3 w-3 rounded-full bg-[var(--background)]"></div>
              </div>
              {index !== ExperienceData.length - 1 && (
                <div className="absolute top-6 bottom-0 w-0.5 bg-[var(--highlight)]/30"></div>
              )}
            </div>

            {/* Experience Details */}
            <div className="flex flex-col pb-12 md:flex-row">
              <div className="flex-1">
                <h3 className="text-[var(--description)]">{exp.period}</h3>
              </div>
              <div className="flex-3">
                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="white text-xl font-semibold transition-all duration-200 group-hover:text-[var(--highlight)]">
                    {exp.title} • {exp.company}
                  </h3>
                  <ul className="mt-2 text-sm text-[var(--description)]">
                    {exp.description.map((bp, i) => (
                      <li key={`exp-desc-${i}`} className="mb-2">
                        {bp}
                      </li>
                    ))}
                  </ul>
                </a>
                {exp.links && (
                  <div className="mt-4 flex flex-wrap gap-6">
                    {exp.links.map((link, index) => (
                      <a
                        key={`link-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[var(--description)] transition-all duration-200 hover:text-[var(--highlight)]"
                      >
                        <FaLink className="mr-2 text-xs" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-4">
                  {exp.technologies.map((tech, index) => (
                    <Skill key={`exp-skill-${index}`} name={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
