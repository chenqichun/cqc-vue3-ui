
export default {
  name: 'CqcButtonGroup',
  setup(_, { slots }) {
    return () => (
      <div class="cqc-button-group">
        {slots.default && slots.default()}
      </div>
    )
  }
}