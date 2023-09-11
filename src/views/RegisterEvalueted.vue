<template>
  <v-container>
    <AccordionRegisterEvaluated />
    <v-row>
      <v-col class="py-8">
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-left">Email</th>
                <th class="text-left">Telefone</th>
                <th class="text-left">Data de Nascimento</th>
                <th class="text-left">Sexo</th>
                <th class="text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="evaluated in evaluateds" :key="evaluated.id">
                <td>{{ evaluated.name }}</td>
                <td>{{ evaluated.email }}</td>
                <td>{{ evaluated.phone }}</td>
                <td>{{ evaluated.dateofbirth }}</td>
                <td>{{ evaluated.sex }}</td>
                <td>
                  <v-btn
                    variant="tonal"
                    class="delete-button"
                    @click="deleteEvaluated(evaluated.id)"
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
import { defineComponent, onMounted, ref } from "vue";
import api from "@/api/api";
import AccordionRegisterEvaluated from "@/components/AccordionRegisterEvaluated.vue";
import { Icon } from "@iconify/vue";
defineComponent({
  name: "RegisterEvaluated",
});
const evaluateds = ref();
const getEvaluateds = () => {
  api
    .get("/evaluated")
    .then((response) => {
      evaluateds.value = response.data.Evaluateds;
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteEvaluated = (id: number) => {
  api.delete(`/evaluated/${id}`).then(() => {});
  console.log(id);
};
onMounted(() => {
  getEvaluateds();
});
</script>
