import { createContext, useContext, useState, type ReactNode } from "react";

interface EditContextProps {
  isEditing: boolean;
  toggleEditing: () => void;
}

const EditContext = createContext<EditContextProps>({
  isEditing: false,
  toggleEditing: () => {}
});

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((prev) => !prev);
  return (
    <EditContext.Provider value={{ isEditing, toggleEditing }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => useContext(EditContext);