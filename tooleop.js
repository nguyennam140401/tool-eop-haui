// const timeWait = 30;
// const btnSubmit = findElement("button", "submit");
// const btnAnser = findElement("button", "answer");
const btnState = document.querySelector("#btn_state");
const findElement = (element, id) => {
	return Array.from(document.querySelectorAll(`${element}`)).find((item) =>
		item.getAttribute("id").includes(id)
	);
};
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

const doneVocabulary = async () => {
	const btnSubmit = findElement("button", "submit");

	document.querySelectorAll("i.daudio").forEach((item) => item?.click());
	btnSubmit?.click();
};

const doneChoose = async () => {
	const b = document.querySelector(".dvoca.active");
	b?.querySelectorAll("a.dtitle").forEach((item) => item?.click());
};

const doneFillText = async () => {
	const btnSubmit = findElement("button", "submit");
	const btnAnser = findElement("button", "answer");

	document
		.querySelectorAll("input.dinline")
		.forEach((item) => (item.value = "a"));
	btnSubmit?.click();
	btnAnser?.click();
	await sleep(1);
	btnAnser?.click();
	document
		.querySelectorAll("input.dinline")
		.forEach((item) => (item.value = item.getAttribute("placeholder")));
	await sleep(1.5);
	btnSubmit?.click();
};

const doneChooseAnser = async () => {
	const btnSubmit = findElement("button", "submit");
	const btnAnser = findElement("button", "answer");
	document
		.querySelectorAll(".ques")
		?.forEach((item) =>
			item.querySelector("div")?.querySelector("label")?.click()
		);
	btnSubmit?.click();
	btnAnser?.click();
	await sleep(1.5);
	btnAnser?.click();
	document.querySelectorAll(".ques")?.forEach((item) =>
		item
			.querySelector("div")
			?.querySelectorAll("label")
			?.forEach((i) => {
				if (!i.getAttribute("style")?.includes("black")) i?.click();
			})
	);
	await sleep(1.5);
	btnSubmit?.click();
};
const handle = async () => {
	console.log("handle....");
	await doneVocabulary();
	clearPopup();
	await doneChoose();
	clearPopup();
	await doneFillText();
	clearPopup();
	await doneChooseAnser();
	clearPopup();
};
setInterval(() => {
	handle();
}, 50000);

btnState?.addEventListener("click", () => {
	console.log("hiii");
});
const clearPopup = () => {
	document
		.querySelectorAll("button.btn-secondary")
		.forEach((item) => item.click());
	document.querySelectorAll(".dbxclo").forEach((item) => item.click());
};
