import React from 'react';
import { useSelector } from 'react-redux';

const ProjectCard = () => {
  const { projects } = useSelector((store) => store);
  return (
    <div className="text-light">
      {projects[0].title}
    </div>
  );
};

export default ProjectCard;
