document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('myTable');
    const colorPicker = document.getElementById('colorPicker');
    let clickTimer;
    let variant = "18"; 
    createTable(6, 6);
    table.addEventListener("mouseover", function(e) {
        if (e.target.tagName === "TD" && e.target.innerText == variant) {
            e.target.style.backgroundColor = getRandomColor();
        }
    });

    table.addEventListener("click", function(e) {
        if (clickTimer) clearTimeout(clickTimer);
        if (e.target.tagName === "TD" && e.target.innerText == variant) {
            clickTimer = setTimeout(function() {
                e.target.style.backgroundColor = colorPicker.value;
            }, 300);  // затримуємо на 300мс
        }
    });

    table.addEventListener("dblclick", function(e) {
        if (e.target.tagName === "TD" && e.target.innerText == variant) {
            let columnIndex = e.target.cellIndex;
            let rowIndex = e.target.parentNode.rowIndex;
            let startColoring = false;
            console.log(rowIndex);
            console.log(columnIndex);
            let mod = rowIndex % 2;
            for (let row of table.rows) {
 
                console.log(row.rowIndex);
                // Якщо ми досягли клітинки, по якій здійснили подвійний клік, почнемо фарбування
                if(row.rowIndex % 2 == mod ) {
                    startColoring = true;
                }
    
                if (startColoring) {
                    row.cells[columnIndex].style.backgroundColor = getRandomColor();
                    startColoring = false; // Переключимо на false, щоб пропустити наступну клітинку
                } 
            }
            
            if (clickTimer) clearTimeout(clickTimer);
        }
    });
    
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createTable(rows, cols) {
    let table = document.getElementById('myTable');
    let counter = 1;

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = counter++;
        }
    }
}