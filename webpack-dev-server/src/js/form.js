import '../css/style.css'
import textFunction from './text'
textFunction()
if (module.hot) {
    module.hot.accept('./text.js', function () {
        console.log("Recargado en caliente")
        textFunction()
    })
}