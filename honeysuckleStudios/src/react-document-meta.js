// react-document-meta
// Potential way to inclue meta key words for client side rendering react apps.

import React from "react";
import DocumentMeta from "react-document-meta";

const ReactDocMeta = () => {
  const meta = {
    title: "honeysuckle studios | eyelash extensions",
    description:
      "Professional eyelash extensions by Bailey Garcia. Located in West Jordan, UT. Come relax in a cozy enviornment.",
    canonical: "https://honeysuckle-studios.com",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "eyelash extensions, lash extensions, classic lashes, hybrid lashes, volume lashes, lash removal, west jordan, lash services, beauty",
      },
    },
  };

  return <DocumentMeta {...meta} />;
};

export default ReactDocMeta;
