import { Briefcase, House, Layers } from "@lucide/astro";

export interface ItemNav {
  id: string;
  etiqueta: string;
  icono: typeof House;
}

export const itemsNav: ItemNav[] = [
  { id: "hero", etiqueta: "Inicio", icono: House },
  { id: "stack", etiqueta: "Stack", icono: Layers },
  { id: "experience", etiqueta: "Experiencia", icono: Briefcase },
];
