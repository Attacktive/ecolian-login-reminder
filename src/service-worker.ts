// fixme: chrome.webNavigation.onBeforeNavigate event fires twice somehow. 🤷
chrome.webNavigation.onBeforeNavigate.addListener(
	async () => {
		const cookie = await chrome.cookies.get({ url: "https://www.geochang.go.kr", name: "refresh-token" });
		if (!cookie?.value) {
			await chrome.tabs.update({ url: "https://www.geochang.go.kr/golf/member/login" });
		}
	},
	{
		url: [
			{ urlContains: "/golf/reservation/reservation" }
		]
	}
);
