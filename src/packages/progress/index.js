import Progress from './progress.jsx'
import '../../theme-chalk/progress.scss'

Progress.install = app => app.component(Progress.name, Progress)
export default Progress
