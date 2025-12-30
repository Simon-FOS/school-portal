export default function Footer() {
    return (
        <footer
            className="mt-auto py-4"
            style={{ backgroundColor: "var(--school-dark)" }}
        >
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* School Info */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="text-white">School Portal</h6>
                        <p className="footer-text">
                            A reliable platform for managing student records and results.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h6 className="text-white">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/login" className="footer-text">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="/results/view" className="footer-text">
                                    View Results
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4">
                        <h6 className="text-white">Support</h6>
                        <p className="footer-text mb-1">
                            <i className="fas fa-envelope me-2"></i>
                            support@schoolportal.edu
                        </p>
                        <p className="footer-text">
                            <i className="fas fa-phone me-2"></i>
                            +234 000 000 0000
                        </p>
                    </div>
                </div>

                <hr className="border-light my-3" />

                <div className="text-center footer-text">
                    © {new Date().getFullYear()} School Portal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
