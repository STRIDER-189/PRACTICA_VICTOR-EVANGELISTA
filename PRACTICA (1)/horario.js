document.addEventListener("DOMContentLoaded", () => {
    const scheduleData = [
        {
            hour: "08:00 - 09:00",
            lunes: "",
            martes: "(35) MC510-C/D /VIRTUAL (T)",
            miercoles: "",
            jueves: "(25) BIC01-F /VIRTUAL (T)",
            viernes: "",
            sabado: "",
            domingo: ""
        },
        {
            hour: "09:00 - 10:00",
            lunes: "",
            martes: "(12) MC510-E /VIRTUAL (T)",
            miercoles: "(12) MC510-E /VIRTUAL (P)",
            jueves: "",
            viernes: "(25) BIC01-F /VIRTUAL (P)",
            sabado: "",
            domingo: ""
        },
        {
            hour: "10:00 - 11:00",
            lunes: "",
            martes: "(12) MC510-E /VIRTUAL (T)",
            miercoles: "",
            jueves: "",
            viernes: "",
            sabado: "",
            domingo: ""
        },
        // Agrega más filas aquí...
        {
            hour: "16:00 - 17:00",
            lunes: "",
            martes: "",
            miercoles: "",
            jueves: "(55) MB545-C /VIRTUAL (T)",
            viernes: "",
            sabado: "",
            domingo: ""
        },
        {
            hour: "17:00 - 18:00",
            lunes: "",
            martes: "",
            miercoles: "",
            jueves: "(55) MB545-C /VIRTUAL (P)",
            viernes: "",
            sabado: "",
            domingo: ""
        },
        {
            hour: "18:00 - 19:00",
            lunes: "",
            martes: "",
            miercoles: "",
            jueves: "",
            viernes: "",
            sabado: "",
            domingo: ""
        },
    ];

    const tbody = document.querySelector("#scheduleTable tbody");

    scheduleData.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th scope="row">${row.hour}</th>
            <td>${row.lunes}</td>
            <td class="colored">${row.martes}</td>
            <td class="colored">${row.miercoles}</td>
            <td>${row.jueves}</td>
            <td class="colored">${row.viernes}</td>
            <td>${row.sabado}</td>
            <td>${row.domingo}</td>
        `;
        tbody.appendChild(tr);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch('schedule.json')
        .then(response => response.json())
        .then(scheduleData => {
            const tbody = document.querySelector("#scheduleTable tbody");
            scheduleData.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <th scope="row">${row.hour}</th>
                    <td>${row.lunes}</td>
                    <td class="colored">${row.martes}</td>
                    <td class="colored">${row.miercoles}</td>
                    <td>${row.jueves}</td>
                    <td class="colored">${row.viernes}</td>
                    <td>${row.sabado}</td>
                    <td>${row.domingo}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
