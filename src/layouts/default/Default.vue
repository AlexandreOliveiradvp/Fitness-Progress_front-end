<template>
  <v-app>
    <v-main>
      <TopBar></TopBar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from "@/components/TopBar.vue";
import { defineComponent } from "vue";
defineComponent({
  name: "Default",
});
</script>
