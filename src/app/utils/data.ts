export async function fetchProfile(token: string): Promise<UserProfile> {
    const result = await fetch("https://spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}