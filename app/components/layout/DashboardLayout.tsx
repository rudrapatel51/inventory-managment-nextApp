import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { navigationItems } from "../../data/navigation"

interface DashboardLayoutProps {
    children: React.ReactNode;
    title: string;
  }
  
  export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
    return (
      <div className="flex min-h-screen bg-base-100">
        <Sidebar items={navigationItems} />
        <div className="flex-1">
          <Header title={title} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    );
  };