// config 파일은 최상위에 두어야 알아서 찾는다.
// 그리고 여기 수정하면 서버를 껐다가 다시 켜줘야한다. 핫리로드가 아니라서 

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
}