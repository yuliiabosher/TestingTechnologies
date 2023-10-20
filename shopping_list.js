function press() {
  let item = document.getElementById("shoppingItem").value;
  if (item != "" && item != null) {
    let node = document.createElement("div");
    node.setAttribute("class", "input-group mt-3 mb-3");
    let subNode = document.createElement("div");
    subNode.setAttribute("class", "input-group-prepend");
    let subSubNode = document.createElement("div");
    subSubNode.setAttribute("class", "input-group-text");
    let subSubSubNode = document.createElement("input");
    subSubSubNode.setAttribute("type", "checkbox");
    subSubSubNode.setAttribute("aria-label", "Checkbox for the shopping item");
    let secondSubNode = document.createElement("span");
    secondSubNode.setAttribute("class", "input-group-text");
    secondSubNode.textContent = item;
    let thirdSubNode = document.createElement("div");
    thirdSubNode.setAttribute("class", "input-group-append");
    let deleteNode = document.createElement("input");
    deleteNode.setAttribute("class", "btn btn-outline-danger");
    deleteNode.setAttribute("type", "submit");
    deleteNode.setAttribute("value", "x");
    deleteNode.setAttribute("aria-label", "Delete the shopping item");
    deleteNode.setAttribute("onclick", "deleteNode(this)");
    deleteNode.setAttribute("data-cy", "deleteButton");
    node.appendChild(subNode);
    document.getElementById("colAppend").appendChild(node);
    subNode.appendChild(subSubNode);
    subSubNode.appendChild(subSubSubNode);
    node.appendChild(secondSubNode);
    node.appendChild(thirdSubNode);
    thirdSubNode.appendChild(deleteNode);
    document.getElementById("shoppingItem").value = null;
  }
}

function deleteNode(element) {
  element.parentNode.parentNode.parentNode.removeChild(
    element.parentNode.parentNode
  );
}
