<template>
	<footer>
	    <article class="footerBar">
	  		<slot></slot>
		</article>
	</footer>
</template>

<style scoped>
.footerBar {
  border-top: 1px solid #ccc;
  background-color: #f0f0f0;
  height: 48px;
  position: fixed;
  z-index: 98;
  width: 100%;
  bottom: 0;
  left: 0;
}

</style>
