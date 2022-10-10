import React, { ReactComponentElement } from "react";

interface IconBUttonProps {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
}

const IconButton = ({ icon: Icon, label }: IconBUttonProps) => {
  return (
    <button className="flex items-center hover:text-white space-x-2">
      <Icon className="icon" />
      <span>{label}</span>
    </button>
  );
};

export default IconButton;
