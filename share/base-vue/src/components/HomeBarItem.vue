<template>
  <a :class="mycls" v-link="{path: path, activeClass: 'active', replace: true}">
    <span v-text="label"></span>
  </a>
</template>

<script>
export default {
  props: {
    path: '',
    mycls: '',
    label: ''
  }
}
</script>
<style scoped>
.footerBar a {
  width: 25%;
  float: left;
  height: 42px;
  padding-top: 7px;
  color: #666;
  font-size: 11px;
  text-align: center;
  text-decoration: none;
}

.footerBar a.cur, .footerBar a:hover {
	color:#f03f3f;
	font-size: 12px;
}

</style>
