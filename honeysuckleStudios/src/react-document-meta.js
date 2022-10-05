// react-document-meta
// Potential way to inclue meta key words for client side rendering react apps.

import React from "react";
import DocumentMeta from "react-document-meta";

const ReactDocMeta = () => {
  const meta = {
    title: "Honeysuckle Studios | eyelash extensions",
    description:
      "Professional eyelash extensions at a competetive rate. Honeysuckle Studios is a home studio located in West Jordan, UT. Come visit Bailey and relax in a cozy enviornment while getting your lashes done.",
    canonical: "https://honeysuckle-studios.com",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "lashes, lash extensions, eyelash extensions, affordable eyelash extensions, affordable lash extensions, classic lashes, hybrid lashes, volume lashes, lash removal, west jordan, lash services, beauty",
      },
    },
  };

  return <DocumentMeta {...meta} />;
};

export default ReactDocMeta;
