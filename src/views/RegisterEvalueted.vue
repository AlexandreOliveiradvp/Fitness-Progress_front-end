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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome teste</td>
                <td>Email teste</td>
                <td>(21) 96444-8046</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
defineComponent({
  name: "RegisterEvaluated",
});
</script>
<style lang="scss"></style>
