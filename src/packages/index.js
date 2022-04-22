import './icon/font-icon.js'
import Icon from './icon/index.js'
import LoadingIcon from './loading-icon/index.js'
import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Progressfrom from './progress/index.js'
import Message from './message/index.js'
import DragList from './drag-list/index.js'
import Carousel from './carousel/index.js'
import CarouselItem from './carousel-item/index.js'
import PreviewImg from './preview-img/index.js'
import SignBoard from './sign-board/index.js'

const plugins = [
  Icon,
  LoadingIcon,
  Button,
  ButtonGroup,
  Progressfrom,
  DragList,
  Carousel,
  CarouselItem,
  SignBoard
]
const install = app => {
  plugins.forEach(plugin => app.use(plugin))
}

export default {
  install
}

export {
  Icon,
  LoadingIcon,
  Button,
  ButtonGroup,
  Progressfrom,
  Message,
  PreviewImg,
  DragList,
  Carousel,
  CarouselItem,
  SignBoard
}
