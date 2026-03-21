import { Code, Database, Layers, Wrench } from "@lucide/astro";

export interface CategoriaStack {
  titulo: string;
  icono: typeof Code;
  tecnologias: string[];
}

export const categoriasStack: CategoriaStack[] = [
  {
    titulo: "Frontend",
    icono: Code,
    tecnologias: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "PrimeNG",
      "RxJS",
    ],
  },
  {
    titulo: "Backend",
    icono: Layers,
    tecnologias: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Microservicios",
    ],
  },
  {
    titulo: "Herramientas y DevOps",
    icono: Wrench,
    tecnologias: ["Git", "OpenShift", "jUnit", "Lombok", "CI/CD"],
  },
  {
    titulo: "Datos",
    icono: Database,
    tecnologias: [
      "SQL",
      "Bases de datos No SQL",
      "Firebase",
      "Bases de datos relacionales",
    ],
  },
];
