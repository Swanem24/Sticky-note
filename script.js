function createNote() {

    //  Creating class attribute
    const att = document.createAttribute("class");
    const close = document.createAttribute("id");

    // Set the value of the class attribute:
    att.value = "box-container";
    close.value = "hide" + 1;

    //  Creating a new sticky note
    //  Creating new div, h2, text area
    const div = document.createElement("DIV");
    div.setAttributeNode(att, close);
    const h2 = document.createElement("H2");
    const text = document.createTextNode("Sticky Note");
    const textarea = document.createElement("TEXTAREA");

    //  Creating close button 
    const btn = document.createElement("BUTTON");
    btn.innerText = "Close";
    btn.onclick = function() {closeNote()}
    div.appendChild(btn);
    h2.appendChild(text);
    div.appendChild(h2);
    div.appendChild(textarea);
    document.body.appendChild(div);

}

function closeNote() {
    document.getElementById('hide').style.display='none';
}
