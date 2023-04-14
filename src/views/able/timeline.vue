<script setup lang="ts">
import { markRaw } from "vue";
import { useRenderFlicker } from "@/components/ReFlicker";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getrecordData } from "./timeline";

defineOptions({
  name: "TimeLine"
});

const recordData = getrecordData();
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">人脸识别记录时间线</span>
      </div>
    </template>
    <div class="flex">
      <el-timeline class="pl-40">
        <el-timeline-item
          v-for="(record, index) in recordData"
          :key="index"
          :icon="markRaw(useRenderFlicker())"
          :timestamp="record.time"
          placement="bottom"
        >
          <div class="message">{{ record.face }}</div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<style scoped>
.message {
  width: 200px;
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  color: #fff;
  line-height: 18px;
  padding: 5px 12px 5px 12px;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  word-break: break-all;
}

.message::after {
  content: "";
  position: absolute;
  top: 8px;
  left: -10px;
  width: 0;
  height: 0;
  overflow: hidden;
  border-color: var(--el-color-primary) transparent transparent;
  border-style: solid dashed dashed;
  border-width: 10px;
}
</style>
