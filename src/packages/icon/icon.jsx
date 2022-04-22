export default {
  name: 'CqcIcon',
  props: {
    icon: {
      type: String
    }
  },
  setup(props) {
    return () => (
      <svg class="cqc-icon" aria-hidden="true">
        <use xlink:href={`#icon-${props.icon}`}></use>
      </svg>
    )
  }
}
