export default {
  data() {
    return {
      queryParams: {},
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
        console.log("Params", self.queryParams);
        await self.$store.dispatch(self.dispatch, {
          search: self.search,
          limit: itemsPerPage,
          offset: page ? (page - 1) * itemsPerPage : undefined,
          ...self.queryParams
        });
        console.log("Table Loaded..");
        self.loading = false;
      }, 500);

      console.log(this.list);
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

  async fetch() {
    this.fetchList();
  }
};
