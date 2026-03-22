import type { ExperienciaTrabajo } from "../interfaces/experiencia_trabajo";

export const experiencias: ExperienciaTrabajo[] = [
  {
    company: "Redsys",
    logo: "/logo_redsys.svg",
    role: "Full Stack Developer",
    startDate: "Noviembre 2023",
    endDate: "Presente",
    description:
      "Desarrollo del Portal del Sistema de Gestión de Fraude de Pagos en España. Frontend con Angular y PrimeNG; backend en Java con Spring Boot y microservicios en OpenShift.",
    technologies: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "PrimeNG",
      "OpenShift",
      "Java",
      "Lombok",
    ],
  },
  {
    company: "NTT Data",
    logo: "/logo_nttdata.svg",
    role: "Senior Full Stack Developer",
    startDate: "Septiembre 2020",
    endDate: "Noviembre 2023",
    description:
      "Responsable de la transformación tecnológica de GESFSEPLUS en el Ministerio de Educación. Migración de Struts a microservicios con Spring Boot; nueva interfaz Angular y Tailwind con enfoque mobile-first.",
    technologies: [
      "Angular",
      "Java",
      "Spring Boot",
      "Tailwind CSS",
      "Lombok",
      "jUnit",
    ],
  },
];
