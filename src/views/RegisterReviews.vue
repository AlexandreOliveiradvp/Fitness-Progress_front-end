<template>
  <v-container fluid>
    <AccordionRegisterReviews />
    <v-row>
      <v-col class="py-8">
        <v-card>
          <v-row>
            <v-col class="py-8 px-9">
              <h4 class="sub-title-page">Avaliações Registradas</h4>
            </v-col>
          </v-row>
          <LoaderDefault v-if="loading" />
          <v-table :hover="true">
            <thead>
              <tr>
                <th class="text-left">Avalidado</th>
                <th class="text-left">Idade</th>
                <th class="text-left">Peso</th>
                <th class="text-left">Peso ideal</th>
                <th class="text-left">Percentual de Gordura</th>
                <th class="text-left">Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="review in reviews" :key="review.id">
                <td>{{ review.id_evaluated }}</td>
                <td>Idade</td>
                <td>{{ review.weight }} kg</td>
                <td>{{ review.ideal_weight }}</td>
                <td>
                  <div class="badge">{{ review.fat_percent }} %</div>
                </td>
                <td>
                  <v-btn variant="tonal" class="delete-button"
                    ><Icon icon="tabler:trash-filled" class="icon-trash"
                  /></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import AccordionRegisterReviews from "@/components/AccordionRegisterReviews.vue";
import { defineComponent, ref, onMounted } from "vue";
import LoaderDefault from "@/components/LoaderDefault.vue";
import { Icon } from "@iconify/vue";
import api from "@/api/api";
defineComponent({
  name: "RegisterReviews",
});

const reviews = ref();

onMounted(() => {
  api
    .get("/reviews")
    .then((response) => {
      reviews.value = response.data.reviews;
      console.log(reviews.value);
    })
    .catch((err) => {
      console.log(err);
    });
});

const loading = ref(false);
</script>
<style lang="scss">
.badge {
  background-color: rgb(248, 206, 67);
  width: 4.5rem;
  text-align: center;
  color: #ffffff;
  border-radius: 5px;
}
</style>
