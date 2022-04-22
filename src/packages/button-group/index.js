import ButtonGroup from './button-group.jsx'
import '../../theme-chalk/button-group.scss'

ButtonGroup.install = app => app.component(ButtonGroup.name, ButtonGroup)
export default ButtonGroup
