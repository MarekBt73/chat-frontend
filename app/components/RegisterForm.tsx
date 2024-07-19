import React, { useState } from "react";
import { registerUser } from "../api/api"; // Upewnij się, że ścieżka jest poprawna

const RegisterForm = () => {
    const [email, setEmail] = useState < string > ("");
    const [password, setPassword] = useState < string > ("");
    const [error, setError] = useState < string | null > (null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await registerUser(email, password);
            console.log("Registered successfully:", userData);
            // Obsługa przekierowania po rejestracji
        } catch (err: any) {
            setError(err.response?.data?.detail || "Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit">Register</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default RegisterForm;
