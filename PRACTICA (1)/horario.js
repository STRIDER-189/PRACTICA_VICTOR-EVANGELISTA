
document.addEventListener("DOMContentLoaded", () => {
    fetch("horario.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(scheduleData => {
            const tbody = document.querySelector("#scheduleTable tbody");
            // Crear un objeto para almacenar clases por día
            const classesByDay = {
                "L": [],
                "M": [],
                "MI": [],
                "J": [],
                "V": [],
                "S": [],
                "D": []
            };

            // Agrupar clases por día
            scheduleData.forEach(course => {
                classesByDay[course.dia].push(course);
            });

            // Rellenar la tabla
            const hours = ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00"]; // Ejemplo de horas
            hours.forEach(hour => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <th scope="row">${hour}</th>
                    <td>${classesByDay["L"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["M"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["MI"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["J"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["V"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["S"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                    <td>${classesByDay["D"].find(c => c.hora === hour)?.nomCurso || ''}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error loading the JSON:', error));
});
