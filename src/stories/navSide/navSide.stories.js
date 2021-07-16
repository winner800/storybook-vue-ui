import NavSide from '@/components/navSide.vue'
import markdown from './notes.md'
export default {
  title: '组件库/导航/页内导航/nav-side',
  component: NavSide,
  parameters: {
    notes: { markdown }, //'some documentation here33333333',
  },
  argTypes: {
    // nav list
    navListData: {
      description: `上传凭证token<br>
        具体参数查看 https://developer.qiniu.com/kodo/manual/1208/upload-token<br>
        `,
      table: {
        type: {
          summary: 'more',
          detail: '此处有默认值（取自集成环境，方便效果展示与调试）',
        },
      },
    },
    // 距离页面顶部的高度
    navTopHeight: {
      description: `默认上传配置参数，无特别情况不需修改<br>
        具体参数查看 https://developer.qiniu.com/kodo/sdk/1283/javascript#3`,
    },
    // qnToken: {
    //   description: `上传凭证token<br>
    //   具体参数查看 https://developer.qiniu.com/kodo/manual/1208/upload-token<br>
    //   `,
    //   table: {
    //     type: {
    //       summary: 'more',
    //       detail: '此处有默认值（取自集成环境，方便效果展示与调试）',
    //     },
    //   },
    // },
    // qnConfig: {
    //   description: `默认上传配置参数，无特别情况不需修改<br>
    //   具体参数查看 https://developer.qiniu.com/kodo/sdk/1283/javascript#3`,
    // },
    // qnPutextra: {
    //   description: `上传文件的限制，但无提示`,
    // },
    // uploadFile: {
    //   description: `上传文件方法`,
    // },
    // fileList: {
    //   description: `上传的文件列表`,
    // },
    // backgroundColor: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavSide },
  template: `<nav-side 
              :navListData="navListData" 
              :topHeight="navTopHeight">
            </nav-side>`,
  data() {
    return {
      // nav list
      navListData: [
        {
          id: '1',
          title: '基础设置',
          el: '#navSide1',
          isShow: true,
        },
        {
          id: '2',
          title: '轮播图设置',
          el: '#navSide2',
          isShow: true,
        },
        {
          id: '3',
          title: '客服设置',
          el: '#navSide3',
          isShow: true,
        },
      ],
      // 距离页面顶部的高度
      navTopHeight: '50',
      // 文件上传列表 可设置默认值 回显
      // filelist: [
      //   {
      //     name: 'food.jpeg',
      //     url:
      //       'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      //   },
      // ],
    }
  },
  methods: {
    // /**
    //  * 上传成功后的回调
    //  *
    //  * @param {*} res
    //  * @param {*} file
    //  */
    // handleAvatarSuccess(res, file) {
    //   let fileTypes = ''
    //   var fileType = res.key.replace(/.[a-zA-Z0-9]+$/, (str) => {
    //     fileTypes = str.replace(/\./, '')
    //   })
    //   var filetype = ['xxx', 'pdf', 'mp4'].indexOf(fileTypes)
    // },
    // /**
    //  * 上传前的文件校验
    //  * 此处判断的逻辑为：
    //  * 类型 MP4, PDF
    //  * 文件大小为 fileSizeLimit
    //  * @param {*} file
    //  * @returns
    //  */
    // handleInputChange(file) {
    //   const fileSizeLimit = 20 // 单位MB
    //   const isMp4 = file.type === 'video/mp4'
    //   const isPdf = file.type === 'application/pdf'
    //   const imgMasSize = 1024 * 1024 * parseInt(fileSizeLimit) // 单片上传的大小
    //   let isSize = true
    //   // 文件大小限制
    //   if (file.size > imgMasSize) {
    //     this.$message({
    //       type: 'error',
    //       message: '文件大小不能超过' + fileSizeLimit + 'MB!',
    //     })
    //     isSize = false
    //   }
    //   if (!isPdf) {
    //     this.$message.error('上传文件仅支持pdf格式!')
    //   }
    //   return isPdf && isSize
    // },
  },
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'nav-side',
}

export const 使用场景 = () =>
  '<div>七牛云上传，可多文件同时上传，适合大文件多文件上传的场景。</div>'
export const 问题说明 = () =>
  '<div>demo中会上传失败，原因token不合法，在实际token合法的应用场景中正常。</div>'
export const 组件路径 = () =>
  '<div>mmp/js/modules_es6/common/components/qiniuUpload/index.js</div>'
// export const demo_code = () => `<div><qiniu-upload
// v-if=" multiUpload" :on-success=" handleAvatarSuccess" :before-upload="handleInputChange"
// accept="application/pdf" :qnToken="qnToken">
// <el-button size="small" type="primary">批量上传</el-button>
// </qiniu-upload></div>`;
