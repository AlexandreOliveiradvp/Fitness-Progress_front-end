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
        <Form
          :validation-schema="registerReviewSchema"
          v-slot="{ errors }"
          @submit="handleReview"
          :key="form"
        >
          <v-row>
            <v-col cols="12" class="pb-0">
              <p class="title-form">Dados Gerais do Avaliado:</p>
            </v-col>
            <v-col cols="3">
              <Field
                name="evaluated"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.evaluatedId"
              >
                <label>Avaliado:</label>
                <select
                  class="select-default"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.evaluated }"
                >
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
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col cols="3">
              <Field
                name="weight"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.weight"
              >
                <label>Peso:</label>
                <input
                  v-bind="field"
                  type="text"
                  class="text-default"
                  placeholder="Informe o peso"
                  :class="{ 'invalid-input': errors.weight }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col cols="3">
              <Field
                name="years"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.years"
              >
                <label>Idade:</label>
                <input
                  v-bind="field"
                  type="text"
                  class="text-default"
                  placeholder="Informe a idade"
                  :class="{ 'invalid-input': errors.years }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col cols="3">
              <Field
                name="height"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.height"
              >
                <label>Altura:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.height }"
                  placeholder="Informe a altura"
                  v-maska
                  data-maska="#.##"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="pb-0">
              <p class="title-form">Perímetros:</p>
            </v-col>
            <v-col>
              <Field
                name="perBicRelaxRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perBicRelaxRg"
              >
                <label>Biceps Dir. Relaxado:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perBicRelaxRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perBicRelaxLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perBicRelaxLf"
              >
                <label>Biceps Esq. Relaxado:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perBicRelaxLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perBicContRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perBicContRg"
              >
                <label>Biceps Dir. Contraído:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perBicContRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perBicContLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perBicContLf"
              >
                <label>Biceps Esq. Contraído:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perBicContLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perForarmRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perForarmRg"
              >
                <label>Ante-braço Direito:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perForarmRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perForarmLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perForarmLf"
              >
                <label>Ante-braço Esquerdo:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perForarmLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perThighHighRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighHighRg"
              >
                <label>Coxa Alta Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighHighRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perThighHighLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighHighLf"
              >
                <label>Coxa Média Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighHighLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perThighMidRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighMidRg"
              >
                <label>Coxa Baixa Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighMidLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perThighMidLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighMidLf"
              >
                <label>Coxa Alta Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighMidLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perThighLowRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighLowRg"
              >
                <label>Coxa Média Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighLowRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perThighLowLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perThighLowLf"
              >
                <label>Coxa Baixa Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perThighLowLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perCalfRg"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perCalfRg"
              >
                <label>Panturrilha Direita:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perCalfRg }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perCalfLf"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perCalfLf"
              >
                <label>Panturrilha Esquerda:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perCalfLf }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perAbdomem"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perAbdomem"
              >
                <label>Abdomem:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perAbdomem }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perWaist"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perWaist"
              >
                <label>Cintura:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perWaist }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perHip"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perHip"
              >
                <label>Quadril:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em centímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.perHip }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="perChest"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perChest"
              >
                <label>Tórax:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perChest }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="perShoulder"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.perShoulder"
              >
                <label>Ombro:</label>
                <input
                  type="text"
                  class="text-default"
                  v-bind="field"
                  placeholder="Medida em centímetros"
                  :class="{ 'invalid-input': errors.perShoulder }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="title-form">Dobras Cutâneas:</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="skinSubscapular"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinSubscapular"
              >
                <label>Subescapular:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinSubscapular }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="skinTriceps"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinTriceps"
              >
                <label>Triciptal:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinTriceps }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="skinChest"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinChest"
              >
                <label>Peitoral:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinChest }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="skinMidaxillary"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinMidaxillary"
              >
                <label>Axiliar Média:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinMidaxillary }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <Field
                name="skinSuprailiac"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinSuprailiac"
              >
                <label>Suprailíaca:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinSuprailiac }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="skinAbdominal"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinAbdominal"
              >
                <label>Abdominal:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinAbdominal }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
            </v-col>
            <v-col>
              <Field
                name="skinThigh"
                v-slot="{ field, errorMessage }"
                v-model="submitReview.skinThigh"
              >
                <label>Coxa:</label>
                <input
                  type="text"
                  class="text-default"
                  placeholder="Medida em milímetros"
                  v-bind="field"
                  :class="{ 'invalid-input': errors.skinThigh }"
                />
                <p class="invalid-message">{{ errorMessage }}</p>
              </Field>
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
        </Form>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import { defineComponent, onMounted, ref } from "vue";
import api from "@/api/api";
import { vMaska } from "maska";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import showToast from "@/functions/ShowToast";
defineComponent({
  name: "AccordionRegisterReview",
});

const emit = defineEmits(["reviewRegistred"]);
const evaluateds = ref();
const registerReviewSchema = yup.object({
  evaluated: yup.string().required("Campo Obrigatório"),
  weight: yup.string().required("Campo Obrigatório"),
  years: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  height: yup.string().required("Campo Obrigatório"),
  perBicRelaxRg: yup.string().required("Campo Obrigatório"),
  perBicRelaxLf: yup.string().required("Campo Obrigatório"),
  perBicContRg: yup.string().required("Campo Obrigatório"),
  perBicContLf: yup.string().required("Campo Obrigatório"),
  perForarmRg: yup.string().required("Campo Obrigatório"),
  perForarmLf: yup.string().required("Campo Obrigatório"),
  perThighHighRg: yup.string().required("Campo Obrigatório"),
  perThighHighLf: yup.string().required("Campo Obrigatório"),
  perThighMidRg: yup.string().required("Campo Obrigatório"),
  perThighMidLf: yup.string().required("Campo Obrigatório"),
  perThighLowRg: yup.string().required("Campo Obrigatório"),
  perThighLowLf: yup.string().required("Campo Obrigatório"),
  perCalfRg: yup.string().required("Campo Obrigatório"),
  perCalfLf: yup.string().required("Campo Obrigatório"),
  perAbdomem: yup.string().required("Campo Obrigatório"),
  perWaist: yup.string().required("Campo Obrigatório"),
  perHip: yup.string().required("Campo Obrigatório"),
  perChest: yup.string().required("Campo Obrigatório"),
  perShoulder: yup.string().required("Campo Obrigatório"),
  skinSubscapular: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinTriceps: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinChest: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinMidaxillary: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinSuprailiac: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinAbdominal: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
  skinThigh: yup
    .number()
    .typeError("Este campo aceita apenas números.")
    .required("Campo Obrigatório"),
});

const submitReview = ref({
  evaluatedId: undefined,
  weight: undefined,
  years: undefined,
  height: undefined,
  perBicRelaxRg: undefined,
  perBicRelaxLf: undefined,
  perBicContRg: undefined,
  perBicContLf: undefined,
  perForarmRg: undefined,
  perForarmLf: undefined,
  perThighHighRg: undefined,
  perThighHighLf: undefined,
  perThighMidRg: undefined,
  perThighMidLf: undefined,
  perThighLowRg: undefined,
  perThighLowLf: undefined,
  perCalfRg: undefined,
  perCalfLf: undefined,
  perAbdomem: undefined,
  perWaist: undefined,
  perHip: undefined,
  perChest: undefined,
  perShoulder: undefined,
  skinSubscapular: undefined,
  skinTriceps: undefined,
  skinChest: undefined,
  skinMidaxillary: undefined,
  skinSuprailiac: undefined,
  skinAbdominal: undefined,
  skinThigh: undefined,
});

const form = ref(0);

const handleReview = async (): Promise<void> => {
  const message = ref("");
  await api
    .post("/reviews", submitReview.value)
    .then(() => {
      message.value = "Avaliado registrado com sucesso!";
      showToast(2000, "success", message.value);
    })
    .catch(() => {
      message.value =
        "Falha ao registrar avaliado. Tente novamente mais tarde.";
      showToast(2000, "danger", message.value);
    });
    form.value++;
    emit("reviewRegistred");
};
onMounted(() => {
  api.get("/evaluated")
    .then((response) => {
      evaluateds.value = response.data.Evaluateds;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
