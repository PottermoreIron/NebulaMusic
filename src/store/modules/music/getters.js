import {
    playModeMap
} from '@/utils/config'
import {
    isDef
} from "@/utils/common"
export const currentIndex = (state) => {
    const {
        currentSong,
        playlist
    } = state
    return playlist.findIndex(({
        id
    }) => id === currentSong.id)
}
// 下一首
export const nextSong = (state, getters) => {
    const {
        playlist,
        playMode
    } = state
    const nextSongMap = {
        [playModeMap.sequence.code]: getSequenceNextIndex,
        [playModeMap.loop.code]: getLoopNextIndex,
        [playModeMap.random.code]: getRandomNextIndex
    }
    const getNextSong = nextSongMap[playMode]
    const index = getNextSong()
    return playlist[index]
    // 顺序播放
    function getSequenceNextIndex() {
        let nextIndex = getters.currentIndex + 1
        if (nextIndex > playlist.length - 1) {
            nextIndex = 0
        }
        return nextIndex
    }
    // 循环播放
    function getLoopNextIndex() {
        return getters.currentIndex
    }
    // 随机播放
    function getRandomNextIndex() {
        return getRandomIndex(playlist, getters.currentIndex)
    }
}
// 上一首
export const prevSong = (state, getters) => {
    const {
        playlist,
        playMode
    } = state
    const prevSongMap = {
        [playModeMap.sequence.code]: getSequencePrevIndex,
        [playModeMap.loop.code]: getLoopPrevIndex,
        [playModeMap.random.code]: getRandomPrevIndex
    }
    const getPrevSong = prevSongMap[playMode]
    const index = getPrevSong()
    return playlist[index]
    // 顺序播放
    function getSequencePrevIndex() {
        let prevIndex = getters.currentIndex - 1
        if (prevIndex < 0) {
            prevIndex = playlist.length - 1
        }
        return prevIndex
    }
    // 循环播放
    function getLoopPrevIndex() {
        return getters.currentIndex
    }
    // 随机播放
    function getRandomPrevIndex() {
        return getRandomIndex(playlist, getters.currentIndex)
    }
}
// 是否有歌曲播放
export const hasCurrentSong = (state) => {
    return isDef(state.currentSong.id)
}

function getRandomIndex(playlist, currentIndex) {
    if (playlist.length === 1) {
        return currentIndex
    }
    let index = Math.round(Math.random() * (playlist.length - 1))
    // 防止还是同一首歌
    if (index === currentIndex) {
        index = getRandomIndex(playlist, currentIndex)
    }
    return index
}