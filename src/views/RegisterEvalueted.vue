<template>
  <v-container>
    <AccordionRegisterEvaluated @evaluatedRegistred="evaluatedRegistred()" />
    <v-row>
      <v-col class="py-8">
        <v-card>
          <v-row>
            <v-col class="py-8 px-9">
              <h4 class="sub-title-page">Avaliados Registrados</h4>
            </v-col>
          </v-row>
          <LoaderDefault v-if="loading" />
          <v-table :hover="true">
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-left">Email</th>
                <th class="text-left">Telefone</th>
                <th class="text-left">Data de Nascimento</th>
                <th class="text-left">Sexo</th>
                <th class="text-left">Deletar</th>
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
import showToast from "@/functions/ShowToast";
import LoaderDefault from "@/components/LoaderDefault.vue";
defineComponent({
  name: "RegisterEvaluated",
});
const evaluateds = ref();
const loading = ref(false);
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
const deleteEvaluated = async (id: number) => {
  loading.value = true;
  const message = ref();
  await api
    .delete(`/evaluated/${id}`)
    .then(() => {
      message.value = "Avaliado removido com sucesso!";
      showToast(2000, "success", message.value);
    })
    .catch(() => {
      message.value = "Falha ao remover avaliado. Tente novamente mais tarde.";
      showToast(2000, "danger", message.value);
    });
  setTimeout(() => {
    loading.value = false;
    getEvaluateds();
  }, 600);
};

const evaluatedRegistred = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    getEvaluateds();
  }, 600);
};
onMounted(() => {
  getEvaluateds();
});
</script>
