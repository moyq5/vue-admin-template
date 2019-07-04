<template>
<div class="page-breadcrumb">
  <div class="row">
    <div class="col-12 d-flex no-block align-items-center">
      <h4 class="page-title">{{title}}</h4>
      <div class="ml-auto text-right">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
          	<template v-for="item in items">
            <li class="breadcrumb-item" v-if="item.href.length > 0">
              <a :href="item.href">{{item.name}}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page" v-else-if="item.href.length == 0">{{item.name}}</li>
          	</template>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
	props: {
	  title: String,
	  items: Array,
	}
};
</script>