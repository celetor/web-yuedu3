<!-- 根据设置进行正文样式渲染 -->
<script>
import config from "../plugins/config";
export default {
  name: "pcontent",
  data() {
    return {};
  },
  props: ["carray"],
  render() {
    const { fontFamily, fontSize, readLine, readPara } = this;
    let style = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      "line-height": readLine,
      margin: readPara
    };
    if (this.show) {
      return (
        <div>
          {this.carray.map(a => {
            return <p style={style} domPropsInnerHTML={a} />;
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
      return config.fonts[this.$store.state.config.font]["fontFamily"];
    },
    fontSize() {
      return this.$store.state.config.fontSize + "px";
    },
    readLine() {
      return this.$store.state.config.readLine + "em";
    },
    readPara() {
      return this.$store.state.config.readPara + "em auto";
    }
  },
  watch: {
    fontSize() {
      let that = this;
      that.$store.commit("setShowContent", false);
      this.$nextTick(() => {
        that.$store.commit("setShowContent", true);
      });
    },
    readLine() {
      let that = this;
      that.$store.commit("setShowContent", false);
      this.$nextTick(() => {
        that.$store.commit("setShowContent", true);
      });
    },
    readPara() {
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
