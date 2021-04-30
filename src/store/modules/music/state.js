import storage from 'good-storage'
import {
    PLAY_HISTORY_KEY
} from '../../../utils/config'
import {
    playModeMap
} from '../../../utils/config'
export default {
    // 现在播放的歌曲
    currentSong: {},
    // 现在歌曲播放的时间
    currentTime: 0,
    // 歌曲是否播放
    playing: false,
    // 何种方式播放
    playMode: playModeMap.sequence.code,
    // playlist的控制
    isPlaylistShow: false,
    isPlaylistPromptShow: false,
    // player有没有展开
    isPlayerShow: false,
    // 播放列表
    playlist: [],
    // 第二个参数?
    playHistory: storage.get(PLAY_HISTORY_KEY, [])
}