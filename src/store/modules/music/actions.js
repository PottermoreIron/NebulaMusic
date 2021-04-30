import storage from 'good-storage'
import {
    PLAY_HISTORY_KEY,

} from "@/utils/config"
import {
    getSongImg
} from "@/utils/business"
export default {
    // {commit,state}是解构了context
    async startSong({
        commit,
        state
    }, rawSong) {
        console.log("提交了action")
        const song = Object.assign({}, rawSong)
        if (!song.img) {
            if (song.albumId) {
                song.img = await getSongImg(song.id, song.albumId)
            }
        }
        commit('setCurrentSong', song)
        commit('setPlayingState', true)
        const {
            playHistory
        } = state
        const playHistoryCopy = playHistory.slice()
        const findedIndex = playHistoryCopy.findIndex(({
            id
        }) => song.id === id)
        if (findedIndex !== -1) {
            // 删除旧那一项, 插入到最前面
            playHistoryCopy.splice(findedIndex, 1)
        }
        playHistoryCopy.unshift(song)
        commit('setPlayHistory', playHistoryCopy)
        storage.set(PLAY_HISTORY_KEY, playHistoryCopy)
    },
    clearCurrentSong({
        commit
    }) {
        commit('setCurrentSong', {})
        commit('setPlayingState', false)
        commit('setCurrentTime', 0)
    },
    clearPlaylist({
        commit,
        dispatch
    }) {
        commit('setPlaylist', [])
        dispatch('clearCurrentSong')
    },
    clearHistory({
        commit
    }) {
        const history = []
        commit('setPlayHistory', history)
        storage.set(PLAY_HISTORY_KEY, history)
    },
    addToPlaylist({
        commit,
        state
    }, song) {
        const {
            playlist
        } = state
        const copy = playlist.slice()
        if (!copy.find(({
                id
            }) => id === song.id)) {
            copy.unshift(song)
            commit('setPlaylist', copy)
        }
    }
}