import React from 'react';

interface CourseLinksProps {
  courses: string[];
}

export const CourseLinks: React.FC<CourseLinksProps> = ({ courses }) => (
  <div>
    <h4 className="text-xl font-semibold mb-6">Courses</h4>
    <ul className="space-y-3">
      {courses.map((course, index) => (
        <li key={index}>
          <a 
            href="#"
            className="text-gray-300 hover:text-white transition-colors inline-block"
          >
            {course}
          </a>
        </li>
      ))}
    </ul>
  </div>
);