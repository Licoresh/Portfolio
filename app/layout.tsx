import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jolo A. Cañete | Developer Portfolio",
  description: "Portfolio of Jolo A. Cañete, an Iligan City developer building web applications, management systems, prototypes, and Roblox games.",
  openGraph: {
    title: "Jolo A. Cañete | Developer Portfolio",
    description: "Web applications, management systems, prototypes, and Roblox games by Jolo A. Cañete.",
    type: "website",
    images: [{ url: "/images/social-preview.png", width: 1200, height: 630, alt: "Jolo A. Cañete portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jolo A. Cañete | Developer Portfolio",
    description: "Web applications, management systems, prototypes, and Roblox games by Jolo A. Cañete.",
    images: ["/images/social-preview.png"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
