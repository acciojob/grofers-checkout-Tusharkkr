const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll('.price');
    let sum = 0;

    for (let t of prices) {
        sum += Number(t.innerText);
    }

    const table = document.querySelector("table");

    // remove old total row if exists
    let oldRow = document.getElementById("total");
    if (oldRow) oldRow.remove();

    // create new row
    let tr = document.createElement("tr");
    tr.id = "total";

    let td = document.createElement("td");
    td.colSpan = 2;
    td.innerText = `Total Price : Rs ${sum}`;
    td.style.fontWeight = "bold";
    td.style.textAlign = "center";

    tr.appendChild(td);
    table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
