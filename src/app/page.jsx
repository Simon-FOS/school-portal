import Image from "next/image";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function HomePage() {
    return (
        <PublicLayout>
            <main>
                {/* HERO SECTION */}
                <section
                    className="py-5 text-white"
                    style={{
                        backgroundImage: `
                        linear-gradient(
                            135deg,
                            rgba(var(--primary-rgb), 0.9),
                            rgba(var(--secondary-rgb), 0.9)
                        ),
                        url('/images/hero-bg.jpg')
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >

                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-md-6">
                                <h1 className="fw-bold display-5">
                                    Smart School Portal <br /> for Modern Education
                                </h1>
                                <p className="lead mt-3">
                                    Manage admissions, student records, results, and communication
                                    seamlessly — all in one secure platform.
                                </p>

                                <div className="mt-4 d-flex gap-3 flex-wrap">
                                    <Link href="/login" className="btn btn-light btn-lg fw-semibold">
                                        Staff Login
                                    </Link>
                                    <Link
                                        href="/student/login"
                                        className="btn btn-outline-light btn-lg fw-semibold"
                                    >
                                        Student Login
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-6 text-center">
                                <Image
                                    src="/images/hero-school.png"
                                    alt="School Portal Illustration"
                                    width={520}
                                    height={420}
                                    className="img-fluid"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Everything Your School Needs</h2>
                            <p className="text-muted mt-2">
                                Simple, secure, and designed for efficiency
                            </p>
                        </div>

                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body text-center p-4">
                                            <div
                                                className="mb-3 fs-1"
                                                style={{ color: "var(--primary-color)" }}
                                            >
                                                <i className={feature.icon}></i>
                                            </div>
                                            <h5 className="fw-bold">{feature.title}</h5>
                                            <p className="text-muted">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PORTAL ACCESS SECTION */}
                <section className="py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-5 rounded shadow-sm h-100 bg-white">
                                    <h4 className="fw-bold">For School Administrators & Staff</h4>
                                    <p className="text-muted mt-3">
                                        Enter results, manage student profiles, admissions, and
                                        academic records with accuracy and speed.
                                    </p>
                                    <Link
                                        href="/login"
                                        className="btn btn-primary mt-3 fw-semibold"
                                    >
                                        Access Staff Portal
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-5 rounded shadow-sm h-100 bg-white">
                                    <h4 className="fw-bold">For Students</h4>
                                    <p className="text-muted mt-3">
                                        View and print results, update profiles, and track academic
                                        progress securely from anywhere.
                                    </p>
                                    <Link
                                        href="/student/login"
                                        className="btn btn-outline-primary mt-3 fw-semibold"
                                    >
                                        Access Student Portal
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUST / CTA SECTION */}
                <section
                    className="py-5 text-white text-center"
                    style={{ backgroundColor: "var(--dark-color)" }}
                >
                    <div className="container">
                        <h2 className="fw-bold">Built for Accuracy, Security & Growth</h2>
                        <p className="mt-3 mb-4">
                            A reliable digital foundation for schools that value excellence.
                        </p>

                        <Link
                            href="/contact"
                            className="btn btn-outline-light btn-lg fw-semibold"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}

const features = [
    {
        title: "Result Management",
        description:
            "Input, compute, and generate student results with ease and precision.",
        icon: "fa-solid fa-file-lines",
    },
    {
        title: "Student Records",
        description:
            "Centralized admission data, profiles, and academic history.",
        icon: "fa-solid fa-user-graduate",
    },
    {
        title: "Secure Access",
        description:
            "Role-based authentication for staff and students.",
        icon: "fa-solid fa-shield-halved",
    },
];
