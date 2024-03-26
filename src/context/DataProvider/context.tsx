import { createContext, useContext } from "react";

const initialValues = {}

const DataContext = createContext(initialValues);

export const useDataContext = () => useContext(DataContext);

export default DataContext;