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
    async fetchList() {
      this.loading = true;
      const { itemsPerPage, page } = this.pagination;
      await this.$store.dispatch(this.dispatch, {
        search: this.search,
        limit: itemsPerPage,
        offset: page ? (page - 1) * itemsPerPage : undefined
      });

      this.loading = false;
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

  created() {
    this.fetchList();
  }
};
