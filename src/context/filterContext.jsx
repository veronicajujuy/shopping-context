import { createContext, useState } from "react";

// 1- Crear el contexto:
// (este es el contexto que tengo que consumir)
export const FiltersContext = createContext();

// 2 - Crear el Provider para proveer el contexto:
// (este es el que nos provee el acceso al contexto)
// el provider debe proveer un valor inicial que es el que se va a compartir con todo lo que esta dentro de la aplicacion
// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "all",
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
