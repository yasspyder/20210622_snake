var i1 = {
    name: "Silver Ring ",
    imgSrc: "20210622_img/01_silverring.jpg",
    price: 7000
};

var i2 = {
    name: "Golden Ring ",
    imgSrc: "20210622_img/02_goldenring.jpg",
    price: 22000
};

var i3 = {
    name: "Platina Ring ",
    imgSrc: "20210622_img/03_platinaring.jpg",
    price: 355000
};


var itemsArray = [i1, i2, i3];

var sum = 0;

function init() {
    var catalog = document.querySelector(".catalog");

    var i, item;
    for (i = 0; i < itemsArray.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "div_item");
        item.appendChild(document.createTextNode(itemsArray[i].name));
        item.style.position = "relative";
        item.style.border = "0.5px solid gray";

        itemImg = document.createElement("img");
        itemImg.src = itemsArray[i].imgSrc;
        itemImg.style.display = "block";
        itemImg.style.height = "120px";
        itemImg.style.width = "160px";

        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(itemsArray[i].price + "\u20bd"));

        itemBtn = document.createElement("button");
        itemBtn.style.position = "absolute";
        itemBtn.style.right = "0";
        itemBtn.style.bottom = "0";
        itemBtn.textContent = "buy";
        itemBtn.setAttribute("id", "btn_" + i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);
        catalog.appendChild(item);
    }
}

function addItem(event) {
    var button = event.target; //Кнопка, на которую кликнули
    var mas = button.id.split("_");
    var id = mas[1]; //индекс элемента массива, на который кликнули по кнопке "Купить"
    var selectedItem = itemsArray[id]; // выбранный товар из массива
    var selectedItems = document.getElementsByClassName("selected_items")[0]; //basket
    var tr = selectedItems.insertRow(); //создает строку в таблице
    var td = tr.insertCell();
    td.style.textAlign = "center";
    td.style.width = "100px";
    td.appendChild(document.createTextNode("     " + selectedItem.price + "\u20bd"))

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum + "\u20bd";
}
window.onload = init;