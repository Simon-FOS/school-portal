import PublicLayout from "@/components/layout/PublicLayout";

export default function Home() {
    return (
        <PublicLayout>
            <section className="container my-5">
                <h1 className="mb-3">Welcome to the School Portal</h1>
                <p className="lead">
                    A secure and reliable platform for managing student records
                    and academic results.
                </p>

                <div className="mt-4">
                    <a href="/login" className="btn btn-primary me-2">
                        Staff Login
                    </a>
                    <a href="/results/view" className="btn btn-outline-secondary">
                        Check Result
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
