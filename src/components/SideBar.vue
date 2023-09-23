<template>
  <div class="side-bar" :class="{ 'collapse-sidebar': sideBarCollapse }">
    <div class="action" @click="sideBarCollapse = !sideBarCollapse">
      <Icon icon="ic:round-play-arrow" :rotate="2" class="icon-collapse" />
    </div>
    <div class="menu-list">
      <ul>
        <li class="title-menu px-3"><strong>Menu</strong></li>
        <li class="px-3" @click="router.push({ path: '/dashboard' })">
          <div><Icon icon="ri:dashboard-fill" class="me-2 mt-1" /></div>
          <div>Dashboard</div>
        </li>
        <li
          class="px-3 title-list"
          :class="{ 'bg-active': registerCollapse }"
          @click="registerCollapse = !registerCollapse"
        >
          <div>
            <Icon icon="ion:create" class="me-2 mt-1" />
          </div>
          <div>Cadastro</div>
          <div>
            <Icon
              icon="ion:chevron-down"
              class="ms-8 mt-1 start-rotate"
              :class="{ 'collapse-rotate': registerCollapse }"
            />
          </div>
        </li>
        <div
          :class="{ 'd-block-height': registerCollapse }"
          class="container-expanded"
        >
          <li
            class="px-5"
            v-if="registerCollapse"
            @click="router.push({ path: '/register-evaluated' })"
          >
            <div>
              <Icon icon="icon-park-solid:sporting" class="me-2 mt-1" />
            </div>
            <div>Avaliados</div>
          </li>
          <li
            class="px-5"
            v-if="registerCollapse"
            @click="router.push({ path: '/register-reviews' })"
          >
            <div>
              <Icon icon="icon-park-solid:doc-fail" class="me-2 mt-1" />
            </div>
            <div>Avaliações</div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter, useRoute } from "vue-router";

const sideBarCollapse = ref(false);
const registerCollapse = ref(false);
const router = useRouter();
const route = useRoute();

watch(
  () => route.name,
  (newValue) => {
    console.log(newValue)
    if (newValue == "EvaluatedPage" || newValue == "ReviewsPage") {
      registerCollapse.value = true;
    } else {
      registerCollapse.value = false;
    }
  }
);

defineComponent({
  name: "SideBar",
});
</script>
<style lang="scss">
.side-bar {
  width: 165px;
  height: 100%;
  background-color: var(--blue-bg-side-bar);
  background-image: linear-gradient(
    0deg,
    var(--blue-base) 5%,
    var(--blue-bg-side-bar) 50%
  );
  transition-duration: 200ms;
  .action {
    position: relative;
    top: 48%;
    left: 150px;
    width: 22px;
    height: 22px;
    border-radius: 22px;
    background-color: var(--blue-base);
    text-align: center;
    padding-top: 2px;
    cursor: pointer;
    &:hover {
      background-color: var(--blue-base-hover);
    }
    .icon-collapse {
      color: #ffffff;
      font-size: 1.2rem;
      transition-duration: 200ms;
    }
  }
  .menu-list {
    width: 100%;
    height: 80%;
    padding-top: 0.7rem;
    margin-top: -1.7rem;
    .title-list {
      color: #ffffff;
      padding: 0.5rem 0 0.5rem 0;
      cursor: pointer;
      display: flex;
      user-select: none;
      &:hover {
        background-color: rgb(98, 55, 255);
      }
      div {
        height: 100%;
      }
    }
    .bg-active {
      background-color: rgb(89, 48, 235);
    }
    ul {
      li:not(.title-list) {
        padding: 0.3rem 0 0.3rem 0;
        color: #ffffff;
        display: flex;
        cursor: pointer;
        user-select: none;
        &:hover:not(.title-menu) {
          background-color: rgb(98, 55, 255);
        }
      }
      .title-menu {
        cursor: default !important;
      }
    }
    .container-expanded {
      background-color: rgb(89, 48, 235);
      height: 0px;
      transition: height 130ms;
    }
    .d-block-height {
      height: 73px;
    }
    .start-rotate {
      transition: 130ms;
    }
    .collapse-rotate {
      rotate: 180deg;
      transition: 130ms;
    }
  }
}
.collapse-sidebar {
  margin-left: -170px;
  .action {
    left: 162px;
    .icon-collapse {
      rotate: 180deg;
      margin-left: 5px;
    }
  }
}
</style>
