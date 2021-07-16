<template>
  <div class="zq-breadcrumb">
    <div class="zq-breadcrumb-nav">
      <span> 当前位置：</span>
      <span
        v-for='(item,index) in breadcrumb'
        :key='item.title'
      >
        <a
          v-if='item.path'
          :href="item.path"
          :target="item.isTarget? '_blank': ''"
        >
          {{item.title}}
          <i class='el-icon-arrow-right'></i>

        </a>
        <span v-else>{{item.title}} <i
            class='el-icon-arrow-right'
            v-if='index < breadcrumb.length-1'
          ></i></span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'breadcrumb',
  inject: ['breadcrumb'],
  data () {
    return {};
  },
  methods: {},
}

</script>
<style >
.zq-breadcrumb {
  height: 48px;
  padding-left: 20px;
  font-size: 12px;
  background-color: #fff;
  box-shadow: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
</style>