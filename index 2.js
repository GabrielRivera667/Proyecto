import { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("https://api.example.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            localStorage.setItem("token", data.token);
            alert("Inicio de sesión exitoso");
        } catch (error) {
            console.error("Error en la autenticación", error);
        }
    };

    return (
        <div className="login-container">
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Iniciar Sesión</button>
        </div>
    );
}

