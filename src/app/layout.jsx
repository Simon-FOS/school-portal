import "./globals.css";



export const metadata = {
  title: "School Portal",
  description: "School Portal for Students and Teachers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
