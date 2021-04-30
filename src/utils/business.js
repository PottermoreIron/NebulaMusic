import {
    isDef
} from "./common"
import {
    getAlbum
} from "@/api/album"

function getSongUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
// 找artists里的name,有多个的话以'/'连接
export function getArtistsText(artists) {
    return (artists || []).map(({
        name
    }) => name).join('/')
}
export function createSong(song) {
    // 解构song对象
    const {
        id,
        name,
        artists,
        img,
        duration,
        albumId,
        albumName,
        mvId,
        ...other
    } = song
    return {
        id,
        name,
        artists,
        img,
        duration,
        albumId,
        albumName,
        mvId,
        url: getSongUrl(song.id),
        artistsText: getArtistsText(artists),
        durationSecond: duration / 1000
    }
}
export async function getSongImg(id, albumId) {
    if (!isDef(albumId)) {
        throw new TypeError('Need the id of album')
    }
    const {
        songs
    } = await getAlbum(albumId)
    // {id:songId}没懂
    const {
        al: {
            picUrl
        }
    } = songs.find(({
        id: songId
    }) => songId === id) || {}
    return picUrl
}