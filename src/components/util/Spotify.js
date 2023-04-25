const clientId = '0a99f0fa6a564bfea281de685791a7a6'
const redirectUri = 'http://localhost:3000/'

let accessToken

export const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async search(term) {
        const accessToken = Spotify.getAccessToken()
        try {
            const searchResults = await fetch(
                `https://api.spotify.com/v1/search?type=track&q=${term}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            if (searchResults.ok) {
                const jsonSearchResults = await searchResults.json()
                if (!jsonSearchResults.tracks) {
                    return []
                }
                return jsonSearchResults.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                    preview_url: track.preview_url
                }))
            }
        } catch (error) { console.log(error) }
    },
    async savePlayList(playListName, trackUris) {
        accessToken = Spotify.getAccessToken()
        try {
            const user = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            const jsonUser = await user.json()
            const userId = jsonUser.id

            const playList = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    method: `POST`,
                    body: JSON.stringify({ name: playListName })
                }
            })
            const jsonPlayList = await playList.json()
            const playListId = jsonPlayList.id
            const playListTracks = await fetch(`https://api.spotify.com/v1/playlists/${playListId}/tracks`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    methode: `POST`,
                    body: JSON.stringify({ uri: trackUris })
                }
            })
            return playListTracks
        } catch (error) { console.log(error) }
    }
}