export default {
  data() {
    return {
      loading: false,
      pagination: {
        page: 0,
        itemsPerPage: 5
      }
    };
  },
  methods: {
    fetchList() {
      const self = this;
      this.loading = true;
      const { itemsPerPage, page } = this.pagination;

      setTimeout(async () => {
        await self.$store.dispatch(self.dispatch, {
          search: self.search,
          limit: itemsPerPage,
          offset: page ? (page - 1) * itemsPerPage : undefined
        });
        console.log("Table Loaded..");
        self.loading = false;
      }, 500);
    },
    editItem(id) {
      this.$router.push(this.store + "/update/" + id);
    }
  },
  computed: {
    list() {
      return this.$store.state[this.store].list;
    }
  },
  watch: {
    pagination: {
      handler() {
        this.fetchList();
      },
      deep: true
    }
  },

  mounted() {
    this.fetchList();
  }
};
