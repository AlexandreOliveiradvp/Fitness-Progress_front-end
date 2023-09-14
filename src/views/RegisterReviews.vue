<template>
  <v-container fluid>
    <AccordionRegisterReviews />
    <v-card>
      <v-row>
        <v-col class="py-8 px-9">
          <h4 class="sub-title-page">Avaliações Registradas</h4>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import AccordionRegisterReviews from "@/components/AccordionRegisterReviews.vue";
import { defineComponent } from "vue";
defineComponent({
  name: "RegisterReviews",
});
</script>
