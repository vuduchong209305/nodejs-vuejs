<template>
	<div>
		<router-link :to="{ name : 'adduser' }">
			<div class="ui teal labeled icon button tiny">
				<i class="add icon"></i>Create
			</div>
		</router-link>
		<div class="ui red labeled icon button tiny">
			<i class="times icon"></i>Delete
		</div>
		<div class="ui action input mini float-right">
			<input type="text" placeholder="Search...">
			<button class="ui icon button">
				<i class="search icon"></i>
			</button>
		</div>
		<table class="ui selectable celled table">
			<thead>
				<tr class="center aligned">
					<th width="5%">#</th>
					<th width="5%"><input type="checkbox" class="checkall"></th>	
					<th width="25%">Name</th>
					<th width="20%">Price</th>
					<th width="15%">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item, index in products" class="center aligned" v-if="products.length > 0">
					<td>{{ index + 1 }}</td>
					<td><input type="checkbox" name=""></td>
					<td>{{ item.name }}</td>
					<td>{{ item.price }}</td>
					<td>
						<span class="block-button">
							<button class="ui primary button mini">V</button>
							<button class="ui red button mini" v-on:click="deleteItem(item.id, index)">X</button>
						</span>
					</td>
				</tr>
				<tr v-else>
					<td colspan="7">không có dữ liệu</td>
				</tr>		
			</tbody>
		</table>
	</div>
	
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

export default {
	data() {
		return {
			products: {}
		}
	},
	created() {

		axios.get('http://localhost:3001/products', {

		}).then(res => {
			console.log(res)
		}).catch(e => {
			this.errors.push(e)
		})
		
	},
	methods: {
		deleteItem(id, index) {
			let self = this
			Vue.swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {
					Vue.swal(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
					Vue.delete(self.users, index)
				}
			})
		}
	}
}
</script>