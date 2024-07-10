import React from "react";

const PageHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-xl font-semibold">{title}</p>
      <p className="italic font-normal text-xs text-primary">{subtitle}</p>
    </div>
  );
};

export default PageHeading;
