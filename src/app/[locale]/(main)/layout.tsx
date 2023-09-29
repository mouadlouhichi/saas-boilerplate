import SiteHeader from "@/shared/Header/SiteHeader";
import Footer from "@/components/Footer/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader hasBorder />
      {children}
      <Footer />
    </>
  );
}
