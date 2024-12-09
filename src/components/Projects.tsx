import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import '../app/styles/projects.css';

const data = [
  {
    id: 0,
    title: "ATM Machine",
    desc: "A simple Node & TypeScript AtM machine for performming essential arithmetic operations.",
    tags: ["Javascript", "Node", "HTML", "Typescript"],
  },
  {
    id: 1,
    title: "CLI Number Gassing Game",
    desc: "A Node and TypeScript powered website to guess number.",
    tags: ["Javascript", "Node", "HTML", "Typescript"],
  },
  {
    id: 2,
    title: "Country Website",
    desc: "A Next.js and TypeScript country website their showing country data.",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 5,
    title: "Simple Calculator App",
    desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id="projects " className="projects-container font-bolder">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center ">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;