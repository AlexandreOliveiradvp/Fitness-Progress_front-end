<template>
  <div class="side-bar" :class="{ 'collapse-sidebar': sideBarCollapse }">
    <div class="action" @click="sideBarCollapse = !sideBarCollapse">
      <Icon icon="ic:round-play-arrow" :rotate="2" class="icon-collapse" />
    </div>
    <div class="menu-list">
      <ul>
        <li class="px-3 title-list" @click="registerCollapse = !registerCollapse">
          <div>
            <Icon icon="ion:create" class="me-2 mt-1" />
          </div>
          <div>Cadastro</div>
        </li>
        <div v-if="registerCollapse">
          <li class="px-3">
            <div>
              <Icon icon="icon-park-solid:sporting" class="me-2 mt-1" />
            </div>
            <div>Avaliados</div>
          </li>
          <li class="px-3">
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
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";

const sideBarCollapse = ref(false);
const registerCollapse = ref(false)


defineComponent({
  name: "SideBar",
});
</script>
<style lang="scss">
.side-bar {
  width: 165px;
  height: calc(100vh - 64px);
  background-color: var(--lilac-bg-side-bar);
  background-image: linear-gradient(
    0deg,
    var(--lilac-base) 5%,
    var(--lilac-bg-side-bar) 50%
  );
  transition-duration: 300ms;
  .action {
    position: relative;
    top: 48%;
    left: 150px;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: var(--lilac-base);
    text-align: center;
    padding-top: 3px;
    cursor: pointer;
    &:hover {
      background-color: var(--lilac-base-hover);
    }
    .icon-collapse {
      color: #ffffff;
      font-size: 1.2rem;
      transition-duration: 300ms;
    }
  }
  .menu-list {
    width: 100%;
    height: 80%;
    padding-top: 0.7rem;
    .title-list {
      color: #ffffff;
      background-color: rgb(90, 20, 204);
      padding: 0.5rem 0 0.5rem 0;
      cursor: pointer;
      display: flex;
      div {
        height: 100%;
      }
    }
    ul {
      li:not(.title-list) {
        background-color: rgb(110, 35, 230);
        padding: 0.3rem 0 0.3rem 0;
        color: #ffffff;
        display: flex;
      }
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
