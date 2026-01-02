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
        <div className="col-lg-2 col-md-3 school-sidebar">
            <ul className="nav flex-column gap-2">
                {menuItems.map((item) => (
                    <li key={item.path} className="nav-item " >
                        <Link
                            href={item.path}
                            className={`nav-link ${pathname === item.path ? "active" : ""
                                }`}
                        >
                            <i className={`fa-solid  ${item.icon} nav-icon`}></i>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}