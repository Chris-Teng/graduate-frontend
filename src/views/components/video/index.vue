<script setup lang="ts">
import { onMounted } from "vue";

defineOptions({
  name: "Video"
});

onMounted(() => {});
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 实时监控 </span>
      </div>
    </template>
    <video id="videoElement" />
  </el-card>
</template>

<style scoped>
#mse {
  flex: auto;
}
</style>
