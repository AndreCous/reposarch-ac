import dayjs from "dayjs";
import { Lectures } from "../types/types";
import { content as week01 } from "../slides/week01/_content";
import { content as week02 } from "../slides/week02/_content";
import { content as week03 } from "../slides/week03/_content";

const initialDate = dayjs("2023-09-07");

export const arcn5005Lectures: Lectures = [
  {
    title: "Week 01 - The art of computer graphics",
    id: `week01`,
    date: initialDate,
    content: week01,
    toc: [
      { title: "Overview of the course" },
      { title: "From Descartes and Alberti to Ivan Southerland." },
      { title: "Introduction to digital tools" },
      { title: "The Art of Computer graphics " },
      { title: "Cartesian space and digital representation of geometry" },
      { title: "Overview of assignments and final project" },
      {
        title:
          "🖥️ LAB 1: Dowloading free software, creating Github account, forking repo",
      },
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    id: `week02`,
    date: initialDate.add(1, "week"),
    toc: [
      { title: "Overview to digital tools for architects" },
      { title: "Digital turns" },
      { title: "CAD, 3D CAD" },
      { title: "🖥️ LAB 2: Blender" },
    ],
    content: week02,
  },

  {
    title: "Week 03 - Coding and scripting for architects",
    id: `week03`,
    date: initialDate.add(2, "week"),
    toc: [
      { title: "Coding, programming, scripting" },
      { title: "Close-sourced scripting" },
      { title: "Coding for efficiency and automatization" },
      { title: "Programming and architecture" },
      { title: "🖥️ LAB 3: Close-source scripting - Dynamo / Sverchok" },
    ],
  },
  {
    title: "Week 04 - Open source software",
    id: `week04`,
    date: initialDate.add(3, "week"),
    toc: [
      { title: "Open source. History of open-source" },
      {
        title:
          "FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      },
      {
        title:
          "OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      },
      { title: "Coding as a Language, as a tools and as an apparatus." },
      { title: "OS Libraries / Packages" },
      { title: "🖥️ LAB 4: Visual studio code" },
    ],
  },

  {
    title: "Week 05 - Internet",
    id: `week05`,
    date: initialDate.add(4, "week"),
    toc: [
      { title: "History of internet - Guess lecturer: Julie Ivanoff (?)" },
      { title: "History of Hackerdom" },
      { title: "How does a website work? Structure, style, logic" },
      { title: "Backend and fronted" },
      { title: "🖥️ LAB 5: HTML and CSS, JavaScript and GUI (DOM events)" },
    ],
  },
  {
    title: "Week 06 - Collaboration",
    id: `week06`,
    date: initialDate.add(5, "week"),
    toc: [
      { title: "Git" },
      { title: "Github" },
      { title: "🖥️ LAB 6: Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 07 - BIM",
    id: `week07`,
    date: initialDate.add(6, "week"),
    toc: [
      { title: "What is BIM? , Open and Closed BIM" },
      { title: "ClosedBIM: Revit, Archicad" },
      { title: "OpenBIM - OSArch" },
      { title: "File formats - .rvt vs .ifc" },
      { title: "BuildingSmart International and IFC" },
      { title: "Post 2020 milestones" },
      { title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz" },
      { title: "🖥️ LAB 7: BlenderBIM" },
    ],
  },
  {
    title: "Week 08 - Web based 3D graphics",
    id: `week08`,
    date: initialDate.add(8, "week"),
    toc: [
      { title: "Web based 3D graphics" },
      { title: "WebGL" },
      { title: "GLTF" },
      { title: "Tree.js" },
      { title: "🖥️ LAB 8: and Three.js" },
    ],
  },

  {
    title: "Week 09 - IFC.js",
    id: `week09`,
    date: initialDate.add(9, "week"),
    toc: [
      { title: "Introduction to web-based open source tools for architects" },
      { title: "🖥️ LAB 9: IFC.js" },
    ],
  },

  {
    title: "Week 10 - OS GIS",
    id: `week10`,
    date: initialDate.add(10, "week"),
    toc: [
      { title: "Geospatial Information Systems" },
      { title: "Coordination Systems" },
      { title: "Proprietary GIS (Arc GIS)" },
      { title: "Proprietary web GIS - Cesium and Mapbox" },
      { title: "Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)" },
      { title: "Open Source web GIS - Leaflet and Maplibre" },
      { title: "🖥️ LAB 10: Maplibre" },
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    id: `week11`,
    date: initialDate.add(11, "week"),
    toc: [
      { title: "Deploy your software" },
      { title: "Github pages" },
      { title: "🖥️ LAB 11: Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    id: `week12`,
    date: initialDate.add(12, "week"),
    toc: [
      { title: "Frontend framework" },
      { title: "Vue" },
      { title: "Svelte" },
      { title: "Angular" },
      { title: " React.js" },
      { title: "Typescrip" },
      { title: "Next.js" },
      { title: "🖥️ LAB 12 : Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 13",
    id: `week13`,
    date: initialDate.add(13, "week"),
    toc: [{ title: "🖥️ LAB 13 Final assignment workshop" }],
  },
  {
    title: "Week 14",
    id: `week14`,
    date: dayjs("2023-12-18"),
    toc: [{ title: "🏁 Final presentations" }],
  },
];
