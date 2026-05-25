const remove9HoleEntries = () => {
	const timeGrid = document.querySelector("div#pc > div.reservation-list > div.list-table > table > tbody");
	if (timeGrid) {
		const tds = timeGrid.querySelectorAll("td");
		for (const td of tds.values()) {
			const match = /(\d{1,2})\s*홀/.exec(td.textContent ?? "");
			if (!match) {
				continue;
			}

			const holes = parseInt(match[1]);
			if (holes === 9) {
				td.remove();
			}
		}
	}
};

setInterval(remove9HoleEntries, 444);
