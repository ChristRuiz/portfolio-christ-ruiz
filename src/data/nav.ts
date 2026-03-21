import { Briefcase, Home, Layers } from "@lucide/astro";

export interface ItemNav {
  id: string;
  etiqueta: string;
  icono: typeof Home;
}

export const itemsNav: ItemNav[] = [
  { id: "hero", etiqueta: "Inicio", icono: Home },
  { id: "stack", etiqueta: "Stack", icono: Layers },
  { id: "experience", etiqueta: "Experiencia", icono: Briefcase },
];
