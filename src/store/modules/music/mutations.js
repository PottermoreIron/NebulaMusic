import {
    shallowEqual
} from '@/utils'
export default {
    // 改变播放的歌曲
    setCurrentSong(state, song) {
        console.log("giao 搞到mutation了")
        state.currentSong = song
    },
    // 改变歌曲播放的时间点
    setCurrentTime(state, time) {
        state.currentTime = time
    },
    // 改变播放/暂停状态
    setPlayingState(state, playing) {
        state.playing = playing
    },
    // 改变播放方式
    setPlayMode(state, mode) {
        state.playMode = mode
    },
    setPlaylistShow(state, show) {
        state.isPlaylistShow = show
    },
    // 展不展开播放器
    setPlayerShow(state, show) {
        state.isPlayerShow = show
    },
    setPlaylistPromptShow(state, show) {
        state.isPlaylistPromptShow = show
    },
    setPlaylist(state, playlist) {
        const {
            isPlaylistShow,
            playlist: oldPlaylist
        } = state
        state.playlist = playlist
        // 播放列表未显示 并且两次播放列表的不一样 则弹出提示
        if (!isPlaylistShow && !shallowEqual(oldPlaylist, playlist, 'id')) {
            state.isPlaylistPromptShow = true
            // 提醒
            setTimeout(() => {
                state.isPlaylistPromptShow = false
            }, 2000)
        }
    },
    setPlayHistory(state, history) {
        state.playHistory = history
    },
    setMenuShow(state, show) {
        state.isMenuShow = show
    },
}