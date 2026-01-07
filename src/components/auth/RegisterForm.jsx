'use client';

import { set } from "mongoose";
import { useState } from "react";


export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setLoading(true);
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
        console.log("Form Data Submitted: ", formData);
    }
    return (
        <form onSubmit={handleSubmit}  >
            <h1>Register Page</h1>
            {/*firstName, lastName, email feild and submit button go here */}
            <input className="form-control mb-3 py-2 px-1" type="text" name="firstName" placeholder="First Name" required />
            <input className="form-control mb-3 py-2 px-1" type="text" name="lastName" placeholder="Last Name" required />
            <input className="form-control mb-3 py-2 px-1" type="email" name="email" placeholder="Email Address" required />
            <button className="btn btn-primary w-100 py-2" type="submit" disabled={loading}>{loading ? 'Registreing...' : 'Register'}</button>
        </form>

    );
}

