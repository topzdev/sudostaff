export default {
  data() {
    return {
      valid: false,
      loading: false,
      fallback: "",
      allow: false
    };
  },
  methods: {
    back() {
      if (this.fallback) return this.$router.push(this.fallback);
      this.$router.back();
    },
    restrictPage(condition) {
      if (condition) {
        this.allow = false;
        return this.back();
      } else {
        this.allow = true;
      }
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
