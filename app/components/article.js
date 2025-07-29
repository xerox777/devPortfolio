"use client";
import React from 'react';
import Link from "next/link";

const Article = ({ title, company, date, description, skills }) => {
  return (
    <article className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 font-medium">
        {company} <span className="text-sm text-gray-500">| {date}</span>
      </p>
      <p className="mt-2 text-gray-600">{description}</p>
      {skills && skills.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Article;
