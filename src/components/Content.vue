<script>
import config from "../plugins/config";
export default {
  name: "pcontent",
  data() {
    return {};
  },
  props: ["carray"],
  render() {
    const { fontFamily, fontSize } = this;
    let style = fontFamily;
    style.fontSize = fontSize;
    if (this.show) {
      return (
        <div>
          {this.carray.map(a => {
            return <p style={style} domPropsInnerHTML={this.proxyImage(a)} />;
          })}
        </div>
      );
    } else {
      return <div />;
    }
  },
  computed: {
    show() {
      return this.$store.state.showContent;
    },
    fontFamily() {
      return config.fonts[this.$store.state.config.font];
    },
    fontSize() {
      return this.$store.state.config.fontSize + "px";
    }
  },
  methods: {
    proxyImage(content) {
      let imgPattern = /<img[^>]*src="([^"]*(?:"[^>]+\})?)"[^>]*>/;
      if (!imgPattern.test(content)) {
        return content;
      }
      let src = content.match(imgPattern)[1];
      if (/^data:/.test(src)) {
        return content;
      }
      return '<img src="' + "../../image?path=" + encodeURI(src) + "&url=" + encodeURI(sessionStorage.getItem("bookUrl"))
 + '">';
    }
  },
  watch: {
    fontSize() {
      let that = this;
      that.$store.commit("setShowContent", false);
      this.$nextTick(() => {
        that.$store.commit("setShowContent", true);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
p {
  display: block;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
