const cookieUrl = "https://www.ecolian.or.kr";
const cookieName = "sessionInfoJson";
const urlContains = "/reser/";
const redirectTo = "https://www.ecolian.or.kr/join/login.do";

chrome.webNavigation.onBeforeNavigate.addListener(
	() => {
		chrome.cookies.get({ url: cookieUrl, name: cookieName })
			.then(cookie => {
				if (!cookie?.value) {
					chrome.tabs.update({ url: redirectTo });
				}
			});
	},
	{
		url: [
			{ urlContains }
		]
	}
);
