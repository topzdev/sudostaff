import dayjs from "dayjs";
import types from "@/store/types";

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    dayjs,
    async fetchList() {
      this.loading = true;
      await this.$store.dispatch(this.config.store.list);
      this.loading = false;
    },
    async deleteItem(id) {
      const self = this;
      this.$store.commit("modal/" + types.SET_MESSAGE_MODAL, {
        title: self.config.title,
        show: true,
        message: `Are you sure to delete the item?`,
        isQuestion: true,
        async yesFunction() {
          self.loading = true;
          await self.$store.dispatch(self.config.store.delete, id);
          self.loading = false;
        }
      });
    },
    async viewItem(id) {
      console.log("View Mode", id, this.config.store.current);
      this.loading = true;
      await this.$store.dispatch(this.config.store.current, id);
      this.$store.commit(this.config.modal, true);
      this.loading = false;
    }
  },

  computed: {
    list() {
      return this.$store.state[this.config.store.name].list;
    }
  },

  async mounted() {
    await this.fetchList();
  }
};
