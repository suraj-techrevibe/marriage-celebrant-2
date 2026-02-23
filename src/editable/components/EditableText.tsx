import { useEdit } from "../context/EditContext";

interface Props {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export default function EditableText({ value, onChange, className }: Props) {
  const { isEditing } = useEdit();

  return (
    <div
      contentEditable={isEditing}
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.innerText)}
      className={`${className} ${
        isEditing ? "border border-red-400 p-1" : ""
      }`}
    >
      {value}
    </div>
  );
}