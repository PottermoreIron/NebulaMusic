export function isFullScreen() {
    return document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen
}
export function requestFullScreen(e) {
    const docEle = e;
    if (docEle.requestFullscreen) {
        docEle.requestFullscreen();
    } else if (docEle.msRequestFullscreen) {
        docEle.msRequestFullscreen();
    } else if (docEle.mozRequestFullScreen) {
        docEle.mozRequestFullScreen();
    } else if (docEle.webkitRequestFullScreen) {
        docEle.webkitRequestFullScreen();
    }
}
export function existFullScreen() {
    const doc = window.parent.document;

    if (doc.exitFullscreen) {
        doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
    } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
    } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen()
    }
}