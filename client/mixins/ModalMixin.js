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
    async close() {
      await this.showModal(false);
      this.$store.commit(this.storeName + "/SET_CURRENT", null);
      this.$refs.form.reset();
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
      return this.$store.state[this.storeName].current;
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
