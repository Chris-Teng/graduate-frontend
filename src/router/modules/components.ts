import { $t } from "@/plugins/i18n";
import { components } from "@/router/enums";
const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/components",
  redirect: "/components/video",
  meta: {
    icon: "menu",
    title: $t("menus.hscomponents"),
    rank: components
  },
  children: [
    {
      path: "/components/video",
      name: "Video",
      component: IFrame,
      meta: {
        title: $t("menus.hsvideo"),
        frameSrc: "http://192.168.3.43:8081/Video",
        frameLoading: false
      }
    }
  ]
} as RouteConfigsTable;
