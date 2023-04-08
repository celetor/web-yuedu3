import Vue from "vue";
import {
  Button,
  Divider,
  MessageBox,
  Message,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  Tooltip,
  TableColumn,
  Popover,
  Loading,
  Input,
  Tag,
} from "element-ui";

Vue.use(Button);
Vue.use(Divider);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Input);
Vue.use(Tag);
Vue.use(Tooltip);
Vue.use(Loading.directive);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;
