interface Site {
	cookieUrl: string;
	cookieName: string;
	urlContains: string;
	redirectTo: string;
}

const sites: Site[] = [
	{
		cookieUrl: "https://www.ecolian.or.kr",
		cookieName: "sessionInfoJson",
		urlContains: "/reser/",
		redirectTo: "https://www.ecolian.or.kr/join/login.do"
	}
	// fixme: chrome.webNavigation.onBeforeNavigate event fires twice somehow. 🤷
	/*{
		cookieUrl: "https://www.geochang.go.kr",
		cookieName: "sessionInfoJson",
		urlContains: "/reser/",
		redirectTo: "https://www.geochang.go.kr/golf/join/login.do"
	}*/
];

sites.forEach(({ cookieUrl, cookieName, urlContains, redirectTo }) => {
	chrome.webNavigation.onBeforeNavigate.addListener(
		async () => {
			const cookie = await chrome.cookies.get({ url: cookieUrl, name: cookieName });
			if (cookie?.value) {
				await chrome.tabs.update({ url: redirectTo });
			}
		},
		{
			url: [
				{ urlContains }
			]
		}
	);
});
