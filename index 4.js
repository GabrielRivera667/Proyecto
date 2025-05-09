import React from "react";
import "./bitacora.css";

const BitacoraRetrospectiva = () => {
  return (
    <div className="bitacora-container">
      <h1>Bitácora de Retrospectiva – Proyecto Web (Unidad 4)</h1>

      <section>
        <h2>1. Modificaciones Sugeridas</h2>
        <ul>
          <li>Se integró una evidencia visual de los sprints en Trello en español.</li>
          <li>Se incorporaron roles de PO, SM y Desarrollador en encabezados y evidencia.</li>
          <li>Se eliminó duplicidad de contenido sobre React.</li>
          <li>Se actualizó la portada con la información correcta.</li>
          <li>Se agregó el enlace al repositorio en GitHub.</li>
          <li>Se redactó una bitácora organizada.</li>
        </ul>
      </section>

      <section>
        <h2>2. Backlog y Cambios</h2>
        <h3>Backlog</h3>
        <table className="bitacora-table">
          <thead>
            <tr>
              <th>Historia</th>
              <th>Prioridad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Autenticación con JWT</td><td>Alta</td><td>Implementado</td></tr>
            <tr><td>Gestión de inventario</td><td>Alta</td><td>Implementado</td></tr>
            <tr><td>Pasarela de pagos</td><td>Alta</td><td>Implementado</td></tr>
            <tr><td>Soporte por chat</td><td>Media</td><td>Implementado</td></tr>
            <tr><td>Panel de reportes</td><td>Media</td><td>En progreso</td></tr>
            <tr><td>Manual del usuario</td><td>Baja</td><td>Implementado</td></tr>
          </tbody>
        </table>

        <h3>Cambios</h3>
        <table className="bitacora-table">
          <thead>
            <tr>
              <th>Cambio</th>
              <th>Responsable</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Actualización del tablero Trello</td><td>Gabriel</td><td>Implementado</td></tr>
            <tr><td>Reestructuración del documento</td><td></td><td>Implementado</td></tr>
            <tr><td>Integración del repositorio</td><td>Gabriel</td><td>Implementado</td></tr>
            <tr><td>Redacción de bitácora</td><td></td><td>Implementado</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>3. Roles</h2>
        <table className="bitacora-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Actividades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gabriel Martínez Pérez</td>
              <td>Desarrollador</td>
              <td>Codificación React, GitHub, documentación técnica</td>
            </tr>
            <tr>
              <td></td>
              <td>Scrum Master</td>
              <td>Gestión de sprints, coordinación, revisión de entregas</td>
            </tr>
            <tr>
              <td></td>
              <td>Product Owner</td>
              <td>Definición de requerimientos y validación de entregables</td>
            </tr>
          </tbody>
        </table>
      </section>


    </div>
  );
};

