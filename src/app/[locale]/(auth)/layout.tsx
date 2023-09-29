import SiteHeader from "@/shared/Header/SiteHeader";

interface LoginLayoutProps {
  children: React.ReactNode;
}
export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="grid gap-0 md:grid-cols-2">
      <SiteHeader type="moderated" />

      {children}
    </div>
  );
}
