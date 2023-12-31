<template>
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
        <Form
          @submit="handleEvaluated()"
          :validation-schema="evaluatedSchema"
          v-slot="{ errors }"
        >
          <v-row>
            <v-col>
              <Field
                name="name"
                v-slot="{ field, errorMessage }"
                v-model="evaluatedInfo.name"
              >
                <label>Nome:</label>
                <input
                  type="text"
                  v-bind="field"
                  class="text-default"
                  placeholder="Nome do avaliado"
                  :class="{ 'invalid-input': errors.name }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="email"
                v-slot="{ field, errorMessage }"
                v-model="evaluatedInfo.email"
              >
                <label>Email:</label>
                <input
                  type="text"
                  v-bind="field"
                  class="text-default"
                  placeholder="Email do avaliado"
                  :class="{ 'invalid-input': errors.email }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="phone"
                v-slot="{ field, errorMessage }"
                v-model="evaluatedInfo.phone"
              >
                <label>Telefone do avaliado:</label>
                <input
                  type="text"
                  v-bind="field"
                  class="text-default"
                  placeholder="Telefone do avaliado"
                  :class="{ 'invalid-input': errors.phone }"
                  v-maska
                  data-maska="(##)#####-####"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="dateofbirth"
                v-slot="{ field, errorMessage }"
                v-model="evaluatedInfo.dateofbirth"
              >
                <label>Data de Nascimento:</label>
                <input
                  type="text"
                  v-bind="field"
                  class="text-default"
                  placeholder="Nascimento do avaliado"
                  :class="{ 'invalid-input': errors.dateofbirth }"
                  v-maska
                  data-maska="##/##/####"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="sex"
                v-slot="{ field, errorMessage }"
                v-model="evaluatedInfo.sex"
              >
                <label>Sexo:</label>
                <select class="select-default"
                v-bind="field"
                :class="{ 'invalid-input': errors.sex }"
                >
                  <option value="" selected disabled>Selecione o sexo</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col> </v-col>
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
        </Form>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import api from "@/api/api";
import showToast from "@/functions/ShowToast";
import { vMaska } from "maska"

defineComponent({
  name: "AccordionRegisterEvaluated",
});

const emit = defineEmits(["evaluatedRegistred"]);
const regex = /^[0-9]$/;

const evaluatedSchema = yup.object({
  name: yup.string().required("Este campo é obrigatório"),
  email: yup
    .string()
    .required("Este campo é obrigatório")
    .email("Digite um email válido."),
  phone: yup
    .string()
    .required("Este campo é obrigatório")
    .matches(
      regex,
      "Este campo aceita apenas números."
    ),
  dateofbirth: yup
    .string()
    .required("Este campo é obrigatório")
    .matches(regex, "Este campo aceita apenas números."),
  sex: yup.string().required("Este campo é obrigatório"),
});

const evaluatedInfo = ref({
  name: undefined,
  email: undefined,
  phone: undefined,
  dateofbirth: undefined,
  sex: undefined,
});

const message = ref();

const handleEvaluated = () => {
  api
    .post("/evaluated", evaluatedInfo.value)
    .then(() => {
      message.value = "Avaliado registrado com sucesso!";
      showToast(2000, "success", message.value);
      emit("evaluatedRegistred");
    })
    .catch(() => {
      message.value =
        "Falha ao registrar avaliado. Tente novamente mais tarde.";
      showToast(2000, "danger", message.value);
    });
  setTimeout(() => {
    evaluatedInfo.value.name = undefined;
    evaluatedInfo.value.email = undefined;
    evaluatedInfo.value.phone = undefined;
    evaluatedInfo.value.dateofbirth = undefined;
    evaluatedInfo.value.sex = undefined;
  }, 600);
};
</script>
