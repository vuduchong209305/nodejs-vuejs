<template>
    <div id="app">
        <div class="ui container">
            <app-header :title="header"></app-header>
            <br>

            <div class="ui grid">
                <div class="four wide column">
                    <app-sidebar></app-sidebar>
                </div>
                <div class="twelve wide column">
                    <router-view/>
                </div>
            </div>
            <notifications group="msg" position="bottom left"/>
            <br>
            <app-footer :title="footer"></app-footer>
        </div>
    </div>
</template>

<script>

import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'

export default {
    components : {
        'app-header' : Header,
        'app-sidebar' : Sidebar,
        'app-footer' : Footer
    },
    data () {
        return {
            header: 'Welcome to Your Vue.js App',
            footer : 'VueJS + SemanticUI'
        }
    }
}
</script>