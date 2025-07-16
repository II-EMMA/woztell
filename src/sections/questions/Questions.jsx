"use client";
import { useState } from "react";

export default function Questions({
  projects,
  helpTitleNormalText,
  helpTitleBoldText,
}) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center my-24">
      <p className="lg:self-start self-center lg:ml-14 text-center font-inter text-3xl font-primary-gray mb-5">
        {helpTitleNormalText}{" "}
        <span className="font-bold">{helpTitleBoldText}</span>
      </p>
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer mb-8 group"
        >
          <h3
            className={`
                          flex items-center justify-center gap-x-3 md:mx-0 mx-5 md:text-start text-center
                          text-3xl font-semibold group-hover:text-blue-500 transition-colors duration-300
                          ${
                            selectedProject.id === project.id
                              ? "text-blue-300"
                              : ""
                          }
                        `}
          >
            {project.title}{" "}
            {/* No need for the span around SVG if using flex on h3 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="flex-shrink-0" // Add flex-shrink-0 to prevent shrinking
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
            </svg>
          </h3>
          {selectedProject.id === project.id && (
            <div className="border-b-2 border-blue-300 my-4"></div>
          )}
          {selectedProject.id === project.id && (
            <p
              className={`text-gray-400 transition-all duration-500 ease-in-out md:mx-4 mx-14 lg:text-start text-center ${
                selectedProject.id === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {project.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
