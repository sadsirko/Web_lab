document.getElementById("tel").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
        e.target.value = "(" + value;
    } else if (value.length <= 6) {
        e.target.value = "(" + value.slice(0, 3) + ") - " + value.slice(3);
    } else if (value.length <= 9) {
        e.target.value = "(" + value.slice(0, 3) + ") - " + value.slice(3, 6) + "-" + value.slice(6);
    } else {
        e.target.value = "(" + value.slice(0, 3) + ") - " + value.slice(3, 6) + "-" + value.slice(6, 8) + "-" + value.slice(8, 10);
    }
});

function validateForm() {
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");
    let id = document.getElementById("id");
    let faculty = document.getElementById("faculty");
    let dob = document.getElementById("birthdate");

    // очищення стилів помилки
    [name, tel, id, faculty, dob].forEach(input => input.classList.remove("error"));

    let isValid = true;

    // Перевірка ПІБ
    if (!/^[А-Яа-яЄєІіЇїҐґ]{2,13} [А-Яа-яЄєІіЇїҐґ]\.[А-Яа-яЄєІіЇїҐґ]\.$/.test(name.value)) {
        name.classList.add("error");
        isValid = false;
    }

    // Перевірка телефону
    if (!/^\(\d{3}\) - \d{3}-\d{2}-\d{2}$/.test(tel.value)) {
        tel.classList.add("error");
        isValid = false;
    }

    // Перевірка ID
    if (!/^\d{5}$/.test(id.value)) {
        id.classList.add("error");
        isValid = false;
    }

    // Перевірка факультету
    if (!/^[А-Яа-яЄєІіЇїҐґ]{2,5}$/.test(faculty.value)) {
        faculty.classList.add("error");
        isValid = false;
    }

    // Перевірка дати народження
    if (!/^\d{2}.\d{2}.\d{4}$/.test(dob.value)) {
        dob.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        output.innerHTML = `
            <strong>ПІБ:</strong> ${name.value}<br>
            <strong>Тел:</strong> ${tel.value}<br>
            <strong>ID:</strong> ${id.value}<br>
            <strong>Факультет:</strong> ${faculty.value}<br>
            <strong>Дата народження:</strong> ${dob.value}
        `;
    }
}
