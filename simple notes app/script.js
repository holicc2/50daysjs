const btnAdd = document.querySelector(".btn-add");
const btnDel = document.querySelector(".btn-delete");
const notes = document.getElementById("notes-list");
const input = document.getElementById("note-input");

let myNote = "";

input.addEventListener("input", (e) => {
	myNote = e.target.value;
});

function createNoteElement(text) {
	const noteItem = document.createElement("div");
	noteItem.className = "note-item";
	const p = document.createElement("p");
	p.textContent = text;
	noteItem.appendChild(p);

	const close = document.createElement("i");
	close.className = "fa-solid fa-x";
	noteItem.appendChild(close);

	return noteItem;
}

btnAdd.addEventListener("click", () => {
	const text = myNote.trim();
	if (!text) return;
	notes.appendChild(createNoteElement(text));
	input.value = "";
	myNote = "";
	input.focus();
});

notes.addEventListener("click", (e) => {
	const icon = e.target.closest(".fa-x");
	if (!icon) return;
	const item = icon.closest(".note-item");
	// start the close animation
	item.classList.add("ease");

	// remove the element once the transform transition finishes
	item.addEventListener("transitionend", (ev) => {
		if (ev.propertyName === "transform") {
			item.remove();
		}
	}, { once: true });
});


input.addEventListener("keyup", (e) => {
	if (e.key === "Enter") btnAdd.click();
});

btnDel.addEventListener("click", () => {
	notes.innerHTML = ``;
});
