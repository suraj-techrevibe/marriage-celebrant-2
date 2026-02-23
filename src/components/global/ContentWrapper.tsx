import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, className = "" }: Props) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 ${className} break-words`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
