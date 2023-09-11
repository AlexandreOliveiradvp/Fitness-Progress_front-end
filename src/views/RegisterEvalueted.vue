<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-row class="py-2">
            <v-col>
              <h3 class="title-page">Registrar Novos Avaliados</h3>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="py-4 px-3">
          <v-row>
            <v-col>
              <v-text-field
                label="Nome do avaliado"
                hide-details="auto"
                variant="solo-filled"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email do avaliado"
                hide-details="auto"
                variant="solo-filled"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Telefone do avaliado"
                hide-details="auto"
                variant="solo-filled"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Data de nascimento"
                hide-details="auto"
                variant="solo-filled"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                label="Sexo"
                :items="['Masculino', 'Feminino']"
                variant="solo-filled"
              ></v-select>
            </v-col>
            <v-col></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                variant="tonal"
                class="float-right bg-primary button-default"
              >
                Salvar
              </v-btn>
              <v-btn variant="tonal" class="float-right me-3"> Cancelar </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="evaluated in evaluateds" :key="evaluated.id">
                <td>{{ evaluated.name }}</td>
                <td>{{ evaluated.email }}</td>
                <td>{{ evaluated.phone }}</td>
                <td>{{ evaluated.dateofbirth }}</td>
                <td>{{ evaluated.sex }}</td>
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
defineComponent({
  name: "RegisterEvaluated",
});
const evaluateds = ref();
onMounted(() => {
  api
    .get("/evaluated")
    .then((response) => {
      evaluateds.value = response.data.Evaluateds;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
