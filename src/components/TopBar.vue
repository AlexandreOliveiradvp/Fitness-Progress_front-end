<template>
  <v-app-bar :elevation="2" class="top-bar">
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="pt-4"
          ><img
            src="src/assets/logo-fp.svg"
            alt="logo Fp"
            class="logo-fp"
            @click="router.push({ path: '/dashboard' })"
        /></v-col>
        <v-col cols="6" class="pt-3 text-end">
          <button class="bg-secondary btn-theme" @click="setTheme()">
            <Icon icon="akar-icons:moon-fill" v-if="theme == 'light'" />
            <Icon icon="bi:sun-fill" v-if="theme == 'dark'" />
          </button>
          <v-menu>
            <template v-slot:activator="{ props }">
              <div class="circle float-right" v-bind="props">
                <Icon icon="mingcute:user-2-fill" class="user-icon" />
              </div>
            </template>
            <v-list>
              <div class="w-100 bg-primary py-2 px-3">Olá usuário!</div>
              <v-list-item
                ><v-list-item-title>Perfil</v-list-item-title></v-list-item
              >
              <v-list-item
                ><v-list-item-title>Sair</v-list-item-title></v-list-item
              >
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
defineComponent({
  name: "TopBar",
});

const router = useRouter();
const theme = ref("light");

const setTheme = () => {
  theme.value == "light" ? (theme.value = "dark") : (theme.value = "light");
};
</script>
<style lang="scss">
.top-bar {
  .circle {
    width: 45px;
    height: 45px;
    border: 2px solid var(--blue-base);
    border-radius: 45px;
    text-align: center;
    padding-top: 4px;
    cursor: pointer;
    &:hover {
      border-color: var(--blue-base-hover);
      .user-icon {
        color: var(--blue-base-hover);
      }
    }
    .user-icon {
      color: var(--blue-base);
      font-size: 2rem;
    }
  }
  .logo-fp {
    width: 140px;
    cursor: pointer;
  }
  .btn-theme {
    height: 2.3rem;
    width: 2.3rem;
    text-align: center;
    border-radius: 2rem;
    padding-top: 5px;
    margin: 0.3rem 1.5rem 0 0;
    background-color: var();
    &:hover {
      background-color: var(--green-base-hover) !important;
    }
  }
}
.v-list {
  padding: 0 !important;
}
.v-list-item {
  cursor: pointer;
  &:hover {
    background-color: #e2dff5;
  }
}
</style>
