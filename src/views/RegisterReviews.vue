<template>
  <v-container fluid>
    <AccordionRegisterReviews @reviewRegistred="reviewRegistred"/>
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
                <th class="text-left">Data</th>
                <th class="text-left">Percentual de Gordura</th>
                <th class="text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="review in reviews" :key="review.id">
                <td>{{ review.evaluatedName }}</td>
                <td>{{ review.years }}</td>
                <td>{{ review.weight }} kg</td>
                <td>{{ review.idealWeight }}</td>
                <td>{{ review.createdAt }}</td>
                <td>
                  <div class="badge">{{ review.fatPercent }} %</div>
                </td>
                <td>
                  <v-tooltip text="Visualizar Avaliação">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        variant="tonal"
                        v-bind="props"
                        class="view-button me-2"
                        ><Icon icon="carbon:view-filled" class="icon"
                      /></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Deletar Avaliação">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        variant="tonal"
                        v-bind:="props"
                        class="delete-button"
                        ><Icon icon="tabler:trash-filled" class="icon"
                      /></v-btn>
                    </template>
                  </v-tooltip>
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
const loading = ref(false);
const getReviews = async () => {
  await api
    .get("/reviews")
    .then((response) => {
      reviews.value = response.data.reviews;
      reviews.value.forEach((element: any) => {
        element.createdAt = element.createdAt.slice(0, 10);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const reviewRegistred = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    getReviews();
  }, 600);
}

onMounted(() => {
  getReviews();
});

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
