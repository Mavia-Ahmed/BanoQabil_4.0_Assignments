function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const tableBody = document.getElementById("taskTable").querySelector("tbody");
      const row = document.createElement("tr");

      // Checkbox + Text
      const textCell = document.createElement("td");
      textCell.classList.add("text");
      textCell.innerHTML = `<input type="checkbox"> <span>${taskText}</span>`;
      row.appendChild(textCell);

      // Actions
      const actionsCell = document.createElement("td");
      actionsCell.classList.add("actions");
      actionsCell.innerHTML = `
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">X</button>
      `;
      row.appendChild(actionsCell);

      tableBody.appendChild(row);
      input.value = "";
    }

    function deleteTask(btn) {
      const row = btn.closest("tr");
      row.remove();
    }

    function editTask(btn) {
      const row = btn.closest("tr");
      const span = row.querySelector("span");
      const newText = prompt("Edit task:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    }