import "./globals.css";

export const metadata = {
  title: "Trade Zem | 1-Second Crypto Arena",
  description: "Master the 1-second market with Trade Zem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b0f19] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}