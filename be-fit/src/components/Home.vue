<template>
  <div>
    <div class="form-login">
      <b-form>
        <b-form-group label="Email:" label-for="email">
          <b-form-input id="email" type="email"></b-form-input>
        </b-form-group>

        <b-form-group label="Senha:" label-for="senha">
          <b-form-input id="senha" type="password"></b-form-input>
        </b-form-group>

        <b-button type="submit">Entrar</b-button>
        <b-button href="#">Cadastrar</b-button>
      </b-form>
    </div>
  </div>
</template>

<style>
.form-login{
  height: 300px;
  width: 400px;
  margin-left: 75vmin;
  margin-top: 25vmin;
}
</style>
