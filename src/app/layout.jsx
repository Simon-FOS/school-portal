import "./globals.css";
import BootstrapClient from "@/components/bootstrap/BootstrapClient";



export const metadata = {
  title: "School Portal",
  description: "School Portal for Students and Teachers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
