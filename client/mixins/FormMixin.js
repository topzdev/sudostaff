export default {
  data() {
    return {
      valid: false,
      loading: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  props: {
    actions: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    }
  }
};
