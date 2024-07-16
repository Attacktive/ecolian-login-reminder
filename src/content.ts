const highlight = () => {
	const timeGrid = document.querySelector("tbody#time-grid");
	if (timeGrid) {
		const tds = timeGrid.querySelectorAll("td");
		for (const td of tds.values()) {
			const textContent = td.textContent;
			if (textContent?.includes("18홀")) {
				td.style["backgroundColor"] = "#ffdddd";

				const anchor = td.querySelector("a");
				if (anchor) {
					anchor.style["fontWeight"] = "666";
				}
			}
		}
	}
};

setInterval(highlight, 444);
