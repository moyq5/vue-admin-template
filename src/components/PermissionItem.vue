<!-- 菜单和权限定义 -->
<template>
	<li class="list-group-item mdi" :class="perm.isMenu ? 'mdi-menu': 'mdi-all-inclusive'">
	 <span v-show="!perm.isEditMode">{{perm.name}}</span>
	 <input type="text" class="form-control" placeholder="名称" v-model="perm.name" v-show="perm.isEditMode">
	 <div style="float:right">
			<input type="text" class="form-control" placeholder="权限" v-model="perm.perm" >&nbsp;
      <input type="text" class="form-control" placeholder="地址" v-model="perm.path" >&nbsp;
      <div class="custom-control custom-checkbox mr-sm-2">
        <input
          type="checkbox"
          class="custom-control-input"
          value="true"
          :id="'customControlAutosizing' + perm.id"
          v-model="perm.isMenu" 
        >
        <label class="custom-control-label" :for="'customControlAutosizing' + perm.id">菜单</label>
      </div>&nbsp;
      <input type="text" class="form-control" placeholder="图标" v-model="perm.icon" >
      <button type="button" class="btn btn-link"><span class="far fa-plus-square"></span></button>
      <button type="button" class="btn btn-link"><span class="far fa-edit"></span></button>
      <button type="button" class="btn btn-link"><span class="far fa-trash-alt"></span></button>
    </div>
		<ul class="list-group" v-if="perm.perms && perm.perms.length > 0">
  		<PermissionItem v-for="subPerm in perm.perms" :perm="subPerm" v-bind:key="subPerm.id"/>
 		</ul>
	</li>
</template>
<script>
import PermissionItem from "./PermissionItem"
export default {
	name: "PermissionItem",
	components: {
		PermissionItem
	},
	props: {
		perm: Object
	}
};
</script>
<style scoped>
.list-group .custom-checkbox {
	display: inline;
}
.list-group .custom-checkbox .custom-control-label::before {
	top: 0px;
}
.list-group .custom-checkbox .custom-control-label::after {
	top: 0px;
}
.list-group .custom-checkbox .custom-control-label {
	font-weight: 0px;
}
.list-group input[type=text] {
	display: inline-block;
	width: 200px;
}
.list-group button {
	padding: 0px;
	padding-left:5px;
}
.list-group .list-group-item {
	border-right: 0px;
	border-left: 0px;
	border-bottom: 0px;
}
.list-group .list-group {
	clear:both;
}
.list-group .list-group .list-group-item {
	padding-right: 0px;
	padding-left: 0px;
	margin-left:15px;
}
</style>