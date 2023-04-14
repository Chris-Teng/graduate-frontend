import { ref } from "vue";
import axios from "axios";

// 获取温度和报警数信息，用于图表显示
const recordData = ref();
axios.get("http://127.0.0.1:8001/record").then(res => {
  recordData.value = res.data;
});

export function getrecordData() {
  return recordData.value;
}
