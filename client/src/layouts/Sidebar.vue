<template>
	<div class="ui vertical green item inverted menu ">
		<router-link :to="{ name : 'home' }" class="item active">Home</router-link>
		<router-link :to="{ name : 'user' }" class="item">Users</router-link>
		<router-link :to="{ name : 'product' }" class="item">Product</router-link>
	</div>
</template>