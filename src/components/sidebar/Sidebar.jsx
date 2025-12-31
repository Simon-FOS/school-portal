"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarConfig } from "./SidebarConfig";

export default function Sidebar() {
    const pathname = usePathname();

    // Determine role from URL: /student, /staff, /admin
    const role = pathname.split("/")[2] || "student";

    const menuItems = sidebarConfig[role] || [];

    return (
        <aside
            className="sidebar text-white p-3"
            style={{ backgroundColor: "var(--dark-color)" }}
        >
            <div className="mb-4 text-center">
                <h5 className="fw-bold mb-0">School Portal</h5>
                <small className="text-muted text-capitalize">{role} Panel</small>
            </div>

            <ul className="nav flex-column gap-2">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={item.path}
                            className={`nav-link d-flex align-items-center gap-2 text-white ${pathname === item.path ? "active" : ""
                                }`}
                        >
                            <i className={`fa-solid ${item.icon}`}></i>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
