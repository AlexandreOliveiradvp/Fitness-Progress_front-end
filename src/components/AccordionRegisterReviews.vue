<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-row class="py-2">
          <v-col>
            <h3 class="title-page">Registrar Novas Avaliações</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="py-4 px-3">
        <v-row>
          <v-col cols="6">
            <label>Avaliado:</label>
                <select class="select-default"
                >
                  <option value="" selected disabled>Selecione o aluno avaliado</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Biceps Dir. Relaxado:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Esq. Relaxado:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Dir. Contraído:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Esq. Contraído:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Ante-braço Direito:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Ante-braço Esquerdo:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Coxa Alta Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Média Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Baixa Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Coxa Alta Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Média Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Baixa Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Informe a medida"
                />
                <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
defineComponent({
  name: "AccordionRegisterReview",
});
</script>
