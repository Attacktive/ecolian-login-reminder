const enhanceCell = (td: HTMLTableCellElement) => {
	const anchor = td.querySelector("a");
	if (anchor) {
		// in case td isn't the parent
		const parent = anchor.parentElement;
		if (parent) {
			Array.from(parent.children)
				.filter(child => child !== anchor)
				.forEach(child => parent.removeChild(child));

			anchor.style["fontSize"] = "66px";
			anchor.style["width"] = "100%";
			anchor.style["height"] = "88px";
			anchor.style["lineHeight"] = "88px";
			anchor.style["margin"] = "0";
			anchor.style["padding"] = "0";
		}
	}
};

const enhanceTable = () => {
	const timeGrid = document.querySelector("tbody#time-grid,tbody#time-grid-tablet");
	if (timeGrid) {
		const trs = timeGrid.querySelectorAll("tr");
		for (const tr of trs.values()) {
			tr.style["height"] = "88px";
		}

		const tds = timeGrid.querySelectorAll("td");
		for (const td of tds.values()) {
			const textContent = td.textContent;
			const match = /(\d{1,2})\s*홀/.exec(textContent ?? "");
			if (match) {
				const holes = parseInt(match[1]);
				if (holes === 18) {
					enhanceCell(td);
				} else if (holes === 9) {
					td.remove();
				}
			}
		}
	}
};

setInterval(enhanceTable, 444);
