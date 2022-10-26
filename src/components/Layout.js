import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Layout({ title, children }) {
  const pageTitle = `${title} | Learning`;

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preload" as="image" href="/assets/photo-profile.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
      </Helmet>
      <main>{children}</main>
    </HelmetProvider>
  );
}
