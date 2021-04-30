import {
    request
} from '@/utils/axios.js'
// 0:PC
export const getBanner = () => request.get('/banner?type=0')
// ?为啥加{}
export const getPersonalized = (params) => request.get(`/personalized`, {
    params
})
export const getNewSongs = () => request.get('/personalized/newsong')
export const getPersonalizedMvs = () => request.get('/personalized/mv')