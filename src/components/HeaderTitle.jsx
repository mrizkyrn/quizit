import React from "react";
import PropTypes from "prop-types";

const HeaderTitle = ({ children, sizeLevel, style }) => {
   const sizes = {
      h1: "2rem", // You can define your own size mappings here
      h2: "1.5rem",
      h3: "1.25rem",
      h4: "1rem",
      h5: "0.875rem",
      h6: "0.75rem",
   };

   const fontSize = sizes[sizeLevel] || "1rem"; // Default to 1rem (medium) if sizeLevel is not specified

   return <div style={{ fontSize, fontWeight: "500", ...style }}>{children}</div>;
};

HeaderTitle.propTypes = {
   children: PropTypes.node.isRequired, // Content to be displayed inside the title
   sizeLevel: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]), // Size level of the title
   style: PropTypes.object, // Custom styles as an object
};

export default HeaderTitle;
