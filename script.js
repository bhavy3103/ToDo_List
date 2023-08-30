function getanupdate() {
    console.log("Updating List...")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();

}
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        // itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        // itemJsonArray.push([tit, desc]);
        // localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    // populate the table
    let tablebody = document.getElementById('tablebody');
    let str = '';
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr> 
        `;

    });
    tablebody.innerHTML = str;
};
add = document.getElementById("add");
add.addEventListener("click", getanupdate);
update();

function deleted(itemindex) {
    console.log("delete", itemindex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    // delete itemindex element from the array
    itemJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}

function clearstr() {
    if (confirm("Do you realy want to clear ?"));
    console.log("Clearing the storage...");
    localStorage.clear();
    update();
}