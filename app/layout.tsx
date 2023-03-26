import "./globals.css";

export const metadata = {
  title: "May F2F ba?!?",
  description:
    "A simple web calendar app to help you decide if you should go to the school or not.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
