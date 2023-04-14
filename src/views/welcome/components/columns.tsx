import { ref } from "vue";
import axios from "axios";

const statusData = ref();
axios.get("http://127.0.0.1:8001/welcome/Status").then(res => {
  statusData.value = res.data;
});

export function useColumns() {
  const columnsA = [
    {
      labelRenderer: () => <div class="flex items-center">消防状态</div>,
      value: statusData.value.onFire ? "火灾危险🧯" : "未着火✅"
    },
    {
      labelRenderer: () => <div class="flex items-center">是否有人</div>,
      value: statusData.value.isThereSomeone ? "有人在家👦" : "无人值守中👀"
    }
  ];
  const columnsB = [
    {
      labelRenderer: () => <div class="flex items-center">湿度💧</div>,
      value: statusData.value.humidity + " RH"
    }
  ];

  const columnsC = [
    {
      labelRenderer: () => <div class="flex items-center">温度🌡</div>,
      value: statusData.value.temperature + " °"
    }
  ];

  return {
    columnsA,
    columnsB,
    columnsC
  };
}
