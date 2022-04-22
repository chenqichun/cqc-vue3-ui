import Icon from '../icon'
export default {
  name: 'CqcLoadingIcon',
  components: {
    Icon
  },
  setup() {
    return () => <Icon icon="loading" class="cqc-loading-icon" />
  }
}