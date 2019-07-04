<template>
  <li class="sidebar-item">
    <a
      class="sidebar-link has-arrow waves-effect waves-dark"
      href="javascript:void(0)"
      aria-expanded="false"
    >
      <i class="mdi mdi-receipt"></i>
      <span class="hide-menu">Forms</span>
    </a>
    <ul aria-expanded="false" class="collapse first-level">
      <li class="sidebar-item">
        <a href="/form-basic" class="sidebar-link">
          <i class="mdi mdi-note-outline"></i>
          <span class="hide-menu">Form Basic</span>
        </a>
      </li>
      <li class="sidebar-item">
        <a href="/form-wizard" class="sidebar-link">
          <i class="mdi mdi-note-plus"></i>
          <span class="hide-menu">Form Wizard</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {};
</script>