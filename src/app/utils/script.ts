const clientId = '5c94c60c4ca5447ab76691f093ea019c';
const code = undefined;

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId: string) {
    // TODO Redirect to Spotify auth page
}

async function getAccessToken(clientId: string, code: string) {
    // TODO: Get access token for code
}

async function fetchProfile(token: string): Promise<any> {
    // TODO: Call Web API
}

function populateUI(profile: any) {
    // TODO: Update UI with profile data
}