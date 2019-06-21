<script>
  import Item from "./TechnologyItem.svelte";
  import Section from "./Section.svelte";

  const technologies = [
    { label: "AngularJS", categories: ["backend", "framework", "interface"] },
    { label: "Ansible", categories: ["infrastructure"] },
    { label: "Bash", categories: ["infrastructure", "language"] },
    { label: "Batch", categories: ["infrastructure", "language"] },
    {
      label: "Build-Scripts",
      categories: ["backend", "infrastructure", "tool"]
    },
    { label: "C#", categories: ["language"] },
    { label: "CLI-Tools", categories: ["interface", "tool"] },
    { label: "CSS", categories: ["language", "interface"] },
    { label: "Capybara", categories: ["tool"] },
    { label: "Chai", categories: ["framework"] },
    { label: "Code Climate", categories: ["infrastructure"] },
    { label: "Continuous Delivery (CD)", categories: ["infrastructure"] },
    { label: "Continuous Integration (CI)", categories: ["infrastructure"] },
    { label: "Coveralls", categories: ["infrastructure"] },
    { label: "Cucumber", categories: ["tool"] },
    { label: "CycleJS", categories: ["framework", "interface"] },
    { label: "Docker", categories: ["infrastructure"] },
    { label: "ESLint", categories: ["infrastructure", "tool"] },
    { label: "ElasticSearch", categories: ["database"] },
    {
      label: "Electron",
      categories: ["backend", "framework", "interface", "tool"]
    },
    { label: "Express.js", categories: ["backend", "infrastructure"] },
    { label: "Flow", categories: ["language"] },
    { label: "Go", categories: ["language"] },
    { label: "Google Adwords API", categories: ["backend", "tool"] },
    { label: "Google Maps API", categories: ["backend", "interface", "tool"] },
    { label: "Google Sheets API", categories: ["backend", "tool"] },
    { label: "Gulp", categories: ["framework", "infrastructure"] },
    { label: "Hugo", categories: ["framework", "infrastructure", "tool"] },
    { label: "JSX", categories: ["interface", "language"] },
    { label: "Jasmine", categories: ["backend", "framework", "tool"] },
    { label: "Java", categories: ["language"] },
    { label: "JavaScript", categories: ["language"] },
    { label: "Jenkins", categories: ["infrastructure"] },
    {
      label: "Jest",
      categories: ["backend", "framework", "interface", "tool"]
    },
    { label: "Karma", categories: ["backend", "framework", "tool"] },
    { label: "Kotlin", categories: ["language"] },
    { label: "Kubernetes", categories: ["infrastructure"] },
    { label: "Lerna", categories: ["infrastructure", "tool"] },
    { label: "LowDB", categories: ["database"] },
    { label: "MariaDB", categories: ["database"] },
    { label: "Mocha", categories: ["framework", "tool"] },
    { label: "MongoDB", categories: ["database"] },
    { label: "MySQL", categories: ["database"] },
    { label: "NPM", categories: ["infrastructure"] },
    { label: "Neo4j", categories: ["database"] },
    { label: "NodeJS", categories: ["backend", "infrastructure"] },
    { label: "Perl", categories: ["language", "tool"] },
    { label: "PixiJS", categories: ["framework", "interface"] },
    { label: "PostgreSQL", categories: ["database"] },
    { label: "Prettier", categories: ["infrastructure", "tool"] },
    { label: "Puppeteer", categories: ["backend", "framework", "tool"] },
    { label: "REST APIs", categories: ["backend"] },
    { label: "Rails", categories: ["backend", "framework"] },
    { label: "React", categories: ["interface"] },
    { label: "Redis", categories: ["database"] },
    { label: "Redux", categories: ["backend", "framework"] },
    { label: "Rollup", categories: ["infrastructure"] },
    { label: "RSpec", categories: ["tool"] },
    { label: "Ruby", categories: ["language"] },
    { label: "Rust", categories: ["language"] },
    { label: "SASS/SCSS", categories: ["language", "interface"] },
    { label: "Scala", categories: ["language"] },
    { label: "ScalaJS", categories: ["interface", "language"] },
    {
      label: "Server side rendering (SSR)",
      categories: ["backend", "infrastructure"]
    },
    {
      label: "Single Page Applications (SPAs)",
      categories: ["backend", "interface"]
    },
    { label: "Sinon", categories: ["framework"] },
    { label: "SockJS", categories: ["framework"] },
    { label: "SocketIO", categories: ["framework"] },
    { label: "Storybook", categories: ["infrastructure", "interface", "tool"] },
    { label: "TCL", categories: ["language"] },
    { label: "TK", categories: ["framework"] },
    { label: "Travis", categories: ["infrastructure"] },
    { label: "TypeScript", categories: ["language"] },
    { label: "Unexpected", categories: ["framework"] },
    { label: "Vert.x", categories: ["backend", "framework"] },
    { label: "VueJS", categories: ["backend", "framework", "interface"] },
    { label: "Webpack", categories: ["infrastructure"] },
    { label: "Youtube API", categories: ["backend", "tool"] }
  ];

  const possibleTechnologies = technologies.reduce(
    (acc, { categories }) => ({
      ...acc,
      ...categories.reduce((cats, c) => ({ ...cats, [c]: false }), {})
    }),
    {}
  );

  let selectedItem = null;
  let selectedTechnology = possibleTechnologies;
  const setSelectedTechnology = tech => (selectedTechnology = tech);
  const setSelectedItem = item => (selectedItem = item);
</script>

<style>
  .technologies {
    background: var(--color-box-background);
    box-shadow: 0 0 5px -2px #000;
    color: var(--color-box-text);
    display: grid;
    font-size: 18px;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "headers technologies";
    margin: 25px;
    max-width: 1000px;
    padding: 25px;
    align-self: center;
    transition: all 0.2s ease-in-out;
  }

  .technologies:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px -2px #000;
  }

  .technologies ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .technologies-header {
    text-align: right;
    padding: 0 25px 0 0;
    margin: 0 25px 0 0;
    box-shadow: 4px 0 5px -5px #000;
  }

  .technologies-heading {
    color: var(--color-box-heading);
    padding: 15px;
    text-align: right;
  }

  .technology-items {
    color: var(--color-box-text);
  }

  .technology-items ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  @media (max-width: 800px) {
    .technologies {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        "headers"
        "technologies";
      font-size: smaller;
    }

    .technologies-heading {
      text-align: center;
    }

    .technologies-header {
      padding: 0 0 15px;
      margin: 0 0 25px;
      text-align: center;
      box-shadow: 0 4px 5px -5px #000;
    }

    .technologies-header ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<Section anchor="technology-section">
  <h2>Technologien</h2>

  <div class="technologies">
    <div class="technologies-header">
      <h2 class="technologies-heading">Technologien</h2>
      <ul>
        <Item
          active={selectedTechnology.backend}
          label="Backend"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              backend: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              backend: false
            })} />
        <Item
          active={selectedTechnology.database}
          label="Datenbanken"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              database: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              database: false
            })} />
        <Item
          active={selectedTechnology.framework}
          label="Frameworks / Libs"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              framework: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              framework: false
            })} />
        <Item
          active={selectedTechnology.infrastructure}
          label="Infrastruktur"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              infrastructure: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              infrastructure: false
            })} />
        <Item
          active={selectedTechnology.interface}
          label="Interface / Frontend"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              interface: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              interface: false
            })} />
        <Item
          active={selectedTechnology.language}
          label="Programmiersprachen"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              language: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              language: false
            })} />
        <Item
          active={selectedTechnology.tool}
          label="Tools"
          menuItem
          onPointerEnter={() => setSelectedTechnology({
              ...possibleTechnologies,
              tool: true
            })}
          onPointerLeave={() => setSelectedTechnology({
              ...selectedTechnology,
              tool: false
            })} />
      </ul>
    </div>

    <div class="technology-items">
      <ul>
        {#each technologies as tech}
          <Item
            key={tech.label}
            active={selectedItem === tech.label || (selectedItem === null && Object.keys(selectedTechnology).some(t => selectedTechnology[t] && tech.categories.includes(t)))}
            label={tech.label}
            onPointerEnter={() => {
              setSelectedTechnology({
                ...possibleTechnologies,
                ...tech.categories.reduce(
                  (cats, cat) => ({ ...cats, [cat]: true }),
                  {}
                )
              });
              setSelectedItem(tech.label);
            }}
            onPointerLeave={() => {
              setSelectedTechnology(possibleTechnologies);
              setSelectedItem(null);
            }} />
        {/each}
      </ul>
    </div>
  </div>
</Section>
