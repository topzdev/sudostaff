export default {
  props: {
    header: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: true
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Object
    }
  }
};
