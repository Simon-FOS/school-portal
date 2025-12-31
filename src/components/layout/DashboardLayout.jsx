import Sidebar from "../sidebar/Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
    return (
        <div className="d-flex min-vh-100">
            <Sidebar />
            <div className="flex-grow-1 bg-light">
                <Topbar />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}
