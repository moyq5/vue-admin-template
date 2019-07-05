<!-- 菜单和权限定义 -->
<template>
<div class="page-wrapper">
  <ComBreadcrumb title="权限定义" :items="breads"/>
  <div class="container-fluid">
  	<div class="row">
  		<div class="col-md-12">
  		<ul class="list-group">
  			<PermissionItem v-for="perm in perms" :perms="perms" :perm="perm" v-bind:key="perm.id"/>
  		</ul>
  		</div>
  	</div>
  </div>
  <Footer/>
</div>
</template>
<script>
import Footer from "./ComFooter"
import ComBreadcrumb from "./ComBreadcrumb"
import PermissionItem from "./PermissionItem"
var breads = [{href: "#/", name: "主页"}, {href: "", name: "权限定义"}];

var perms = [
	{
		id: 0,
		name: "名称new",
		perm: "权限值new",
		path: "权限路径new",
		isMenu: true,			// 是否为菜单
		icon: "图标new",
		perms: [
			{
				id: 1,
				name: "名称new2",
				perm: "权限值new2",
				path: "权限路径new2",
				isMenu: false,			// 是否为菜单
				icon: "图标new2",
				perms: [],
				isEditMode: true // 是否为编辑状态
			}
		],
		isEditMode: false // 是否为编辑状态
	},
	{
		id: 3,
		name: "名称new",
		perm: "权限值new",
		path: "权限路径new",
		isMenu: true,			// 是否为菜单
		icon: "图标new",
		perms: [
			{
				id: 4,
				name: "名称new2",
				perm: "权限值new2",
				path: "权限路径new2",
				isMenu: false,			// 是否为菜单
				icon: "图标new2",
				perms: [
					{
						id: 6,
						name: "名称new2",
						perm: "权限值new2",
						path: "权限路径new2",
						isMenu: false,			// 是否为菜单
						icon: "图标new2",
						perms: [],
						isEditMode: false // 是否为编辑状态
					},
					{
						id: 7,
						name: "名称new2",
						perm: "权限值new2",
						path: "权限路径new2",
						isMenu: false,			// 是否为菜单
						icon: "图标new2",
						perms: [],
						isEditMode: true // 是否为编辑状态
					}
				],
				isEditMode: true // 是否为编辑状态
			},
			{
				id: 5,
				name: "名称new2",
				perm: "权限值new2",
				path: "权限路径new2",
				isMenu: false,			// 是否为菜单
				icon: "图标new2",
				perms: [],
				isEditMode: true // 是否为编辑状态
			}
		],
		isEditMode: false // 是否为编辑状态
	}
];

export default {
	components: {
		Footer,
		ComBreadcrumb,
		PermissionItem
	},
	data: function(){
		return {
			breads,
			perms
		}
	}
};
</script>