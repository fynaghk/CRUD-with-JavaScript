var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["bookName"] = document.getElementById("bookName").value;
    formData["bookAuthor"] = document.getElementById("bookAuthor").value;
    formData["bookYear"] = document.getElementById("bookYear").value;
    formData["bookPrice"] = document.getElementById("bookPrice").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.bookName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.bookAuthor;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.bookYear;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bookPrice;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><i class="fas fa-edit"></i></a>
                       <a onClick="onDelete(this)"><i class="fas fa-trash-alt"></i></a>`;
}

function resetForm() {
    document.getElementById("bookName").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookYear").value = "";
    document.getElementById("bookPrice").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("bookName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("bookAuthor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("bookYear").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bookPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.bookName;
    selectedRow.cells[1].innerHTML = formData.bookAuthor;
    selectedRow.cells[2].innerHTML = formData.bookYear;
    selectedRow.cells[3].innerHTML = formData.bookPrice;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("bookName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
