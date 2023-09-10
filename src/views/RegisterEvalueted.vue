<template>
  <v-container>
    <v-card class="px-3 py-3">
      <v-row>
        <v-col>
          <h3 class="title-page">Registro de Avaliados</h3>
        </v-col>
      </v-row>
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
          <v-btn variant="tonal" class="float-right bg-primary button-default"> Salvar </v-btn>
          <v-btn variant="tonal" class="float-right me-3"> Cancelar </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";
defineComponent({
  name: "RegisterEvaluated",
});
</script>
<style lang="scss"></style>
