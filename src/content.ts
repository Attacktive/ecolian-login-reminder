const injectStyles = () => {
	const style = document.createElement("style");
	style.textContent = `
		div#pc > div.reservation-list > div.list-table > table > tbody > tr {
			height: 88px !important;
		}

		a.time-list.bnh-btn {
			font-size: 66px !important;
			width: 100% !important;
			height: 88px !important;
			line-height: 88px !important;
			margin: 0 !important;
			padding: 0 !important;
		}
	`;

	document.head.appendChild(style);
};

const enhanceTable = () => {
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

injectStyles();

setInterval(enhanceTable, 444);
