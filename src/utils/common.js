export function getImgUrl(url, w, h) {
    if (!h) {
        h = w
    }
    // 图片url需要指定宽高
    url += `?param=${w}y${h}`
    console.log(url)
    return url
}
// 补齐序号:01,02,03 用于列表序号,时间补齐
export function pad(num, n = 2) {
    let len = num.toString().length
    while (len < n) {
        num = '0' + num
        len++
    }
    return num
}
export function formatTime(duration) {
    duration /= 1000
    duration = duration | 0
    const minutes = pad(Math.floor(duration / 60))
    const seconds = pad(Math.round(duration % 60))
    return `${minutes}:${seconds}`
}
export function isDef(v) {
    return v !== undefined && v !== null
}
export function getPageOffset(pageIndex, pageSize) {
    return (pageIndex - 1) * pageSize
}
// 懵逼 不知道干啥用的
export function shallowEqual(a, b, key) {
    if (a.length !== b.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        let tmpA = a[i]
        let tmpB = b[i]
        if (key) {
            tmpA = tmpA[key]
            tmpB = tmpB[key]
        }
        if (!Object.is(a[i], b[i])) {
            return false;
        }
    }
    return true;
}