import DragList from './drag-list.jsx'
import '../../theme-chalk/drag-list.scss'

DragList.install = app => app.component(DragList.name, DragList)

export default DragList