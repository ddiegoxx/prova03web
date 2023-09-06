const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let i = 0;

    const tarefa = frm.inTarefa.value;

    resp.innerHTML +=` ${tarefa} <br>`;

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
})