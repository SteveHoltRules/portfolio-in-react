import React from "react";

const categories = [
  { 
    name: "commercial",
    description: "Projects",
  },
  { name: "non-profit", description: "Non-profit projects"},
  { name: "personal projects", description: "Personal projects"}
];

function categorySelected(name) {
  console.log(`${name} clicked`)
}

function Nav() {
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          Home
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Project1" href="#project1">
              Project1
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Project1" href="#project1">
              Project2
            </a>
          </li>
          {categories.map((category) => (
            <li 
              className="mx-1"
              key={category.name}>
              <span onClick={() => categorySelected(category.name)}>{category.name}</span>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;