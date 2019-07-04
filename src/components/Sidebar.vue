<template>
  <aside class="left-sidebar" data-sidebarbg="skin5">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
      <!-- Sidebar navigation-->
      <nav class="sidebar-nav">
        <ul id="sidebarnav" class="p-t-30">
				  <li class="sidebar-item" v-for="(menu, index) in menus" :index="index" :key="menu.id" :class="{'selected': menu.isActive}">
				    <a
				      class="sidebar-link waves-effect waves-dark"
				      aria-expanded="false"
				      :class="[{'has-arrow': menu.items.length > 0},{'active': menu.isActive}]"
				      :href="menu.items.length > 0 ? 'javascript:void(0)': menu.href "
				    >
				      <i class="mdi" :class="menu.icon"></i>
				      <span class="hide-menu">{{menu.text}}</span>
				    </a>
				    <ul aria-expanded="false" class="collapse first-level" v-if="menu.items.length > 0"  :class="{'in': menu.isActive}">
				      <li class="sidebar-item" v-for="item in menu.items" :key="item.id" :class="{'active': item.isActive}">
				        <a class="sidebar-link" :href="item.href">
				          <i class="mdi" :class="item.icon"></i>
				          <span class="hide-menu">{{item.text}}</span>
				        </a>
				      </li>
				    </ul>
				  </li>
				</ul>
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
</template>

<script>
import Vue from "vue";
import $ from 'jquery'
import Bootstrap from 'bootstrap'
import PerfectScrollbar from 'perfect-scrollbar'
import '../dist/js/waves.js'

var menus = [
		{	
			id:99999,
			href: "#/permission.html",
			icon: "mdi-chart-bar",
			text: "权限定义",
			items: []
		},
		{	
			id:0,
			href: "#/charts.html",
			icon: "mdi-chart-bar",
			text: "Charts",
			items: []
		},
		{	
			id:1,
			href: "#/widgets.html",
			icon: "mdi-chart-bubble",
			text: "Widgets",
			items: []
		},
		{	
			id:2,
			href: "#/tables.html",
			icon: "mdi-border-inside",
			text: "Tables",
			items: []
		},
		{	
			id:3,
			href: "#/grid.html",
			icon: "mdi-blur-linear",
			text: "Full Width",
			items: []
		},
		{
			id:4,
			href: "javascript:void(0)",
			icon: "mdi-receipt",
			text: "Forms",
			items: [
				{id:5, href: "#/form-basic.html", icon: "mdi-note-outline", text: "Form Basic"},
				{id:6, href: "#/form-wizard.html", icon: "mdi-note-plus", text: "Form Wizard"}
				]
		},
		{	
			id:7,
			href: "#/pages-buttons.html",
			icon: "mdi-relative-scale",
			text: "Buttons",
			items: []
		},
		{
			id:8,
			href: "javascript:void(0)",
			icon: "mdi-face",
			text: "Icons",
			items: [
				{id:9, href: "#/icon-material.html", icon: "mdi-emoticon", text: "Material Icons"},
				{id:10, href: "#/icon-fontawesome.html", icon: "mdi-emoticon-cool", text: "Font Awesome Icons"}
				]
		},
		{	
			id:11,
			href: "#/pages-elements.html",
			icon: "mdi-pencil",
			text: "Elements",
			items: []
		},
		{
			id:12,
			href: "javascript:void(0)",
			icon: "mdi-move-resize-variant",
			text: "Addons",
			items: [
				{id:13, href: "#/index2.html", icon: "mdi-view-dashboard", text: "Dashboard-2"},
				{id:14, href: "#/pages-gallery.html", icon: "mdi-multiplication-box", text: "Gallery"},
				{id:15, href: "#/pages-calendar.html", icon: "mdi-calendar-check", text: "Calendar"},
				{id:16, href: "#/pages-invoice.html", icon: "mdi-bulletin-board", text: "Invoice"},
				{id:17, href: "#/pages-chat.html", icon: "mdi-message-outline", text: "Chat Option"}
				]
		},
		{
			id:18,
			href: "javascript:void(0)",
			icon: "mdi-account-key",
			text: "Authentication",
			items: [
				{id:19, href: "#authentication-login.html", icon: "mdi-all-inclusive", text: "Login"},
				{id:20, href: "#authentication-register.html", icon: "mdi-all-inclusive", text: "Register"}
				]
		},
		{
			id:21,
			href: "javascript:void(0)",
			icon: "mdi-alert",
			text: "Errors",
			items: [
				{id:22, href: "#/error-403.html", icon: "mdi-alert-octagon", text: "Error 403"},
				{id:23, href: "#/error-404.html", icon: "mdi-alert-octagon", text: "Error 404"},
				{id:24, href: "#/error-405.html", icon: "mdi-alert-octagon", text: "Error 405"},
				{id:25, href: "#/error-500.html", icon: "mdi-alert-octagon", text: "Error 500"}
				]
		}
	]
	
var refresh = function(url) {
	if (url && url.indexOf("javascript") != -1) {
		return;
	}
	for (let i in menus) {
		let menu = menus[i];
		menu.isActive = url.indexOf(menu.href) != -1;
		for (let j in menu.items) {
			let item = menu.items[j];
			if (url.indexOf(item.href) != -1) {
				menu.isActive = true;
				item.isActive = true;
			} else {
				item.isActive = false;
			}
		}
	}
	menus = menus.concat([]);
}	

refresh(window.location.href);
	
export default {
	data: function () {
		 return {
				menus: menus
		}
	}
}



$(document).on('click', '#sidebarnav a', function (e) {

		if ($(this).hasClass("active")) {
			$(this).next("ul").removeClass("in");
    	$(this).removeClass("active");
		} else if ($(this).next("ul").length > 0) {
			$(".in").prev("a").removeClass("active");
    	$(".in").removeClass("in");
			$(this).next("ul").addClass("in");
    	$(this).addClass("active");
		}
		
		refresh($(this).attr("href"));
		
})
$(document).on('click', '#sidebarnav >li >a.has-arrow', function (e) {
    e.preventDefault();
});

</script>