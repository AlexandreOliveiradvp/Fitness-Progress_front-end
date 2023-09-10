<template>
  <v-app>
    <TopBar></TopBar>
    <v-main class="d-flex">
      <SideBar></SideBar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue"
import { defineComponent } from "vue";
defineComponent({
  name: "Default",
});
</script>
