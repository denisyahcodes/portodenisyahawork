import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DeniSyahWork",
  description: "Portofolio Galactic Glassmorphism oleh Deni Merdiansyah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]">
        {/* efek aurora */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/30 via-purple-700/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-700/20 via-cyan-600/10 to-transparent blur-2xl" />
        <Navbar />
        <main className="relative z-10 pt-24 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
