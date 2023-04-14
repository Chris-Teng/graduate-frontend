import { $t } from "@/plugins/i18n";
import { able } from "@/router/enums";

export default {
  path: "/able",
  redirect: "/able/timeline",
  meta: {
    icon: "ubuntuFill",
    title: $t("menus.hsAble"),
    rank: able
  },
  children: [
    {
      path: "/able/timeline",
      name: "TimeLine",
      component: () => import("@/views/able/timeline.vue"),
      meta: {
        title: $t("menus.hsTimeline")
      }
    }
  ]
} as RouteConfigsTable;
