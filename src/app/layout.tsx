"use client";
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import AppNavbar from "@/components/AppNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications position="top-right" zIndex={10000} />
          <AppNavbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
