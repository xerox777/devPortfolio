"use client";
import React from 'react';
import Link from "next/link";

const Article = ({ title, company, date, description, skills }) => {
  return (
    <article className="p-6 bg-gradient-to-br from-secondary to-primary rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group">
      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
        <div>
          <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-accent font-semibold mt-1">{company}</p>
        </div>
        <span className="text-xs bg-primary px-3 py-1 rounded-full text-text-secondary font-medium border border-border">
          {date}
        </span>
      </div>
      <p className="text-text-secondary mb-4 leading-relaxed">{description}</p>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30 font-medium hover:bg-accent/20 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default Article;
