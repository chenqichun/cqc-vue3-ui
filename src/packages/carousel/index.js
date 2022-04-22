import Carousel from './carousel.vue'
import '../../theme-chalk/carousel.scss'

Carousel.install = app => app.component(Carousel.name, Carousel)
export default Carousel