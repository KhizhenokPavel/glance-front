<script setup lang="ts">

import {ref} from "vue";
import LoadingSite from "@/components/LoadingSite/LoadingSite.vue";
import BaseHeader from "@/components/headers/BaseHeader/BaseHeader.vue";
import {LoginModel} from "@/models/LoginModel";

const START_ANIMATION_TIME = 1500;

let showLoadingPage = ref(true);

function hideLoadingPage() {
	showLoadingPage.value = false;
}

setTimeout(hideLoadingPage, START_ANIMATION_TIME);


let login = ref('');
let password = ref('');

function submitForm() {
  let model = new LoginModel;
  console.log(model.login(login.value, password.value));
}
</script>

<template>
  <input type="text" name="login" v-model="login"/>
  <input type="text" name="password" v-model="password"/>
  <button type="submit" @click="submitForm">asdasasd</button>
<!--	<LoadingSite :show="showLoadingPage"/>-->
<!--	<BaseHeader/>-->
<!--	<main class="main__container">-->
<!--		<RouterView/>-->
<!--	</main>-->
</template>

<style scoped lang="scss">
@import "@/assets/mixins.scss";

.main__container {
	padding-top: 202px;
	padding-bottom: 94px;
	min-height: 100vh;

	@include adaptive {
		padding-top: 88px;
		padding-bottom: 40px;
	}
}
</style>
