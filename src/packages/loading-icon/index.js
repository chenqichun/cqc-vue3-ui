import LoadingIcon from './loading-icon.jsx'
import '../../theme-chalk/loading-icon.scss'

LoadingIcon.install = app => app.component(LoadingIcon.name, LoadingIcon)
export default LoadingIcon