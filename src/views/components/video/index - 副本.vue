<script setup lang="ts">
import { onMounted } from "vue";
import Player from "xgplayer/dist/simple_player";
import volume from "xgplayer/es/controls/volume";
import { deviceDetection } from "@pureadmin/utils";
import screenShot from "xgplayer/es/controls/screenShot";
import playbackRate from "xgplayer/es/controls/playbackRate";

defineOptions({
  name: "Video"
});

onMounted(() => {
  new Player({
    id: "mse",
    // 默认静音
    volume: 0,
    autoplay: true,
    screenShot: true,
    url: "http://192.168.3.90:8081/Video",
    poster:
      "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    fluid: deviceDetection(),
    controlPlugins: [volume, playbackRate, screenShot],
    //传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2]
  });
});
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium"> 实时监控 </span>
      </div>
    </template>
    <div id="mse" />
  </el-card>
</template>

<style scoped>
#mse {
  flex: auto;
}
</style>
