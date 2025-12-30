import Link from "next/link";
export default function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "var(--school-dark)" }}
        >
            <div className="container-fluid">
                {/* Brand */}
                <Link className="navbar-brand header-brand" href="/">
                    <i className="fas fa-graduation-cap me-2"></i>
                    School Portal
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#schoolNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="schoolNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard/staff">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/results/view">
                                Results
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
