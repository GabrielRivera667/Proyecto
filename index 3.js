import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./Panel.css";

function ReporteVentas() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/ventas")
            .then((res) => res.json())
            .then((ventas) => {
                setData(ventas);
                const ctx = document.getElementById("graficaVentas").getContext("2d");
                new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: ventas.map(v => v.fecha),
                        datasets: [{
                            label: "Ventas",
                            data: ventas.map(v => v.total),
                            backgroundColor: "#4CAF50"
                        }]
                    }
                });
            });
    }, []);

    return (
        <div className="reporte-container">
            <h2>Reporte de Ventas</h2>
            <canvas id="graficaVentas" width="400" height="200"></canvas>
        </div>
    );
}

