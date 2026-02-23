// editable/components/EditToggle.tsx
import { useEdit } from "../context/EditContext";

export default function EditToggle() {
  const { isEditing, toggleEditing } = useEdit();

  return (
    <button
      onClick={toggleEditing}
      className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 z-50"
    >
      {isEditing ? "Exit Edit" : "Edit"}
    </button>
  );
}