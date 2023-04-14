import { ref } from "vue";
import axios from "axios";

// 获取温度和报警数信息，用于图表显示
const tempData = ref();
axios.get("http://127.0.0.1:8001/welcome/tempdata").then(res => {
  tempData.value = res.data;
});
const alertData = ref();
axios.get("http://127.0.0.1:8001/welcome/alertdata").then(res => {
  alertData.value = res.data;
});

export function getTempData() {
  return tempData.value;
}
export function getAlertData() {
  return alertData.value;
}
