import "@/styles/dashboard.css";
import Link from "next/link";

export const metadata = {
    title: "Dashboard - School Portal",
    description: "Dashboard layout for the School Portal",
};
export default function DashboardLayout({ children }) {
    return (
        <>
            <header className="school-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="user-avatar">JS</div>
                            <div>
                                <h5 className="mb-0">John Smith</h5>
                                <small className="opacity-75">Grade 8 - Student ID: #STU2024001</small>
                            </div>
                        </div>

                        <div className="header-user">
                            <span className="d-none d-md-inline">john.smith@school.edu</span>
                            <div className="dropdown">
                                <button className="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li><Link className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>My Profile</Link></li>
                                    <li><Link className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</Link></li>
                                    <li><Link className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {children}
        </>)
}