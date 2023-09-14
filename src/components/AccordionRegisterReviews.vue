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
          <v-col cols="12" class="pb-0">
            <p class="title-form">Perímetros</p>
          </v-col>
          <v-col cols="6">
            <label>Avaliado:</label>
            <select class="select-default">
              <option value="" selected disabled>
                Selecione o aluno avaliado
              </option>
              <option
                v-for="evaluated in evaluateds"
                :key="evaluated.id"
                :value="evaluated.id"
              >
                {{ evaluated.name }}
              </option>
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
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Esq. Relaxado:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Dir. Contraído:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Biceps Esq. Contraído:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
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
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Ante-braço Esquerdo:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
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
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Média Direita:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Baixa Direita:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
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
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Média Esquerda:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Coxa Baixa Esquerda:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Panturrilha Direita:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Panturrilha Esquerda:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Cintura:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Quadril:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Tórax:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
          <v-col>
            <label>Ombro:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
            <!-- <p class="invalid-message">{{ errorMessage }}</p> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="title-form">Dobras Cutâneas</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Subescapular:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
          <v-col>
            <label>Triciptal:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
          <v-col>
            <label>Peitoral:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
          <v-col>
            <label>Axiliar Média:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label>Suprailíaca:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
          <v-col>
            <label>Abdominal:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
          <v-col>
            <label>Coxa:</label>
            <input
              type="text"
              class="text-default"
              placeholder="Informe a medida"
              v-maska
              data-maska="##.#"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              variant="tonal"
              class="float-right bg-primary button-default"
              type="submit"
            >
              Salvar
            </v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import api from "@/api/api";
import { vMaska } from "maska";
defineComponent({
  name: "AccordionRegisterReview",
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
