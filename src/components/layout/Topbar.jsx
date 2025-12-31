"use client";

import { usePathname } from "next/navigation";

export default function Topbar() {
    const pathname = usePathname();
    const role = pathname.split("/")[1];

    return (
        <header className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold mb-0 text-capitalize">
                {role} Dashboard
            </h6>

            <div className="d-flex align-items-center gap-3">
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user-circle fs-4"></i>
            </div>
        </header>
    );
}
