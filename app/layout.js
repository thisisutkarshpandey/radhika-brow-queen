import "./globals.css";

export const metadata = {
  title: "Radhika the Brow Queen | Threading & Beauty in Southwest Edmonton",
  description:
    "Precise eyebrow threading, waxing, facials, haircuts and styling from a welcoming private home studio in Southwest Edmonton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
