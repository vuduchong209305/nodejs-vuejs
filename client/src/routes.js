import Home from './layouts/Home'
import User from './pages/User'
import AddUser from './pages/AddUser'
import Product from './pages/Product'

export default [
	{
		name : 'home',
		path : '/',
		component : Home,
	},		
	{
		name : 'user',
		path : '/user',
		component : User
	},
	{
		name : 'adduser',
		path : '/user/adduser',
		component : AddUser
	},
	{
		name : 'product',
		path : '/product',
		component : Product
	}
]