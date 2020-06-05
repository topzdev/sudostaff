import { mapMutations } from "vuex";

export default {
  data() {
    return {
      valid: false,
      loading: false
    };
  },
  methods: {
    ...mapMutations({
      showModal(commit, show) {
        commit(`modal/show${this.capitalize}`, show);
      }
    }),
    close() {
      this.$store.commit(this.modalName + "/SET_CURRENT", null);
      this.$refs.form.reset();
      this.showModal(false);
    },
    setData() {
      if (!this.current) return;
      this[this.dataName] = JSON.parse(JSON.stringify(this.current));
    }
  },

  computed: {
    capitalize() {
      return this.modalName.charAt(0).toUpperCase() + this.modalName.slice(1);
    },

    current() {
      return this.$store.state[this.modalName].current;
    },

    isEdit() {
      return this.current ? true : false;
    }
  },
  watch: {
    current() {
      this.setData();
    }
  },

  mounted() {
    this.setData();
  }
};
