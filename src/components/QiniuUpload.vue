<template>
  <div>
    <el-upload
      action=""
      :multiple="true"
      ref="upload"
      :file-list="fileList"
      :http-request="uploadFile"
      v-bind="$attrs"
    >
      <slot>
        <el-button size="small" type="primary">批量上传</el-button>
      </slot>
      <div class="el-upload__tip" slot="tip">
        <slot name="tip"></slot>
      </div>
    </el-upload>
  </div>
</template>

<script>
// 七牛云官方库
const qiniu = require('@/libs/qiniu/qiniu.min')

export default {
  name: 'qiniu-upload',
  inheritAttrs: true,
  data() {
    return {}
  },
  props: {
    // 上传凭证
    // 七牛JavaScript SDK API: qiniu.upload(file: blob, key: string, token: string, putExtra: object, config: object) 里的 token
    // 具体参数查看 https://developer.qiniu.com/kodo/manual/1208/upload-token
    qnToken: {
      type: String,
      default:
        'wafUz6ObOHosIQwGlAimozL5kd4v9h5c8N4J6kln:N_iXjuvk58I9hsbOR80j2k3oduc=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTYwMzE4Mjc0Mn0=',
    },
    // 七牛JavaScript SDK API: qiniu.upload(file: blob, key: string, token: string, putExtra: object, config: object) 里的 config
    // 具体参数查看 https://developer.qiniu.com/kodo/sdk/1283/javascript#3
    qnConfig: {
      type: Object,
      default() {
        return {
          useCdnDomain: true,
          disableStatisticsReport: false,
          concurrentRequestLimit: 3,
          retryCount: 6,
          region: qiniu.region.z0, //七牛上传地址参数
        }
      },
    },
    // 七牛JavaScript SDK API: qiniu.upload(file: blob, key: string, token: string, putExtra: object, config: object) 里的 putExtra
    // 具体参数查看 https://developer.qiniu.com/kodo/sdk/1283/javascript#3
    qnPutextra: {
      type: Object,
      default() {
        return {
          fname: '',
          params: {},
          mimeType: null,
          unique_names: true,
        }
      },
    },
    // 上传文件列表
    fileList: {
      type: Array,
    },
    // 上传文件大小限制 默认1024MB
    // maxSize: {
    //   type: Number,
    //   default() {
    //     return 1024 * 1024 * 1
    //   }
    // },
  },
  mounted() {
    this.$http.get('/api/user/list').then((res) => {
      console.error(res)
    })
    this.$http.post('/api/user').then((res) => {
      console.error(res)
    })
  },
  methods: {
    /**
     * 文件上传方法，使用 七牛SDK 进行上传，覆盖 el-upload 的默认上传方法
     * @param {Object} option - 包含下列属性：
     * {
     *      headers: 使用 el-upload 组件提供的 headers 属性
     *      withCredentials: 使用 el-upload 组件提供的 headers 属性
     *      file: 添加到浏览器的 file 对象
     *      data: 使用 el-upload 组件提供的 data 属性
     *      filename: 使用 el-upload 组件提供的 name 属性
     *      action: 使用 el-upload 组件提供的 action 属性
     *      onProgress: 使用 el-upload 组件提供的 onProgress 属性
     *      onSuccess: 使用 el-upload 组件提供的 onSuccess 属性
     *      onError: 使用 el-upload 组件提供的 onError 属性
     *  }
     */
    uploadFile(option) {
      // 七牛云批量上传  文件重复的服务端校验
      this.$emit('uploadFile')
      if (typeof this.$parent.$parent.checkadd_file == 'function') {
        //判断父父级是否有文件检查事件checkadd_file (最后一行有注释说明)
        this.$parent.$parent.checkadd_file(option.file).then((res) => {
          if (res) {
            this.uploading(option)
          } else {
            var arr = this.ad_url_list
            var _readyFiles = this.$refs.upload.uploadFiles
            this.$refs.upload.uploadFiles.splice(
              _readyFiles.findIndex(
                (item) =>
                  item.name === option.file.name && item.status == 'ready'
              ),
              1
            )
            _readyFiles.findIndex((item) => item.name === option.file.name), 1
          }
        })
      } else {
        this.uploading(option)
      }
    },
    /**
     * 发起一个七牛上传实例
     *
     * @param {*} option
     */
    uploading(option) {
      const fileName = this.changeFileName(option.file.name)
      const observable = qiniu.upload(
        option.file,
        fileName,
        this.qnToken,
        this.qnPutextra,
        this.qnConfig
      )
      observable.subscribe({
        next: function(res) {
          option.onProgress({ percent: res.total.percent })
        },
        error: this.uploadError,
        complete: option.onSuccess,
      })
    },
    uploadError(err) {
      // console.error('上传报错日志：\n')
      console.error(err)
      console.error(JSON.stringify(err))
      this.$message.error(JSON.stringify(err))
    },
    /**
     *修改原文件名，给文件名添加一个时间戳
     *
     * @param {*} filename
     * @returns
     */
    changeFileName(filename) {
      return filename
        .replace(/[\u4e00-\u9fa5]|\s/g, '')
        .replace(/.[a-zA-Z0-9]+$/, (match) => {
          return `-${Date.now()}${match}`
        })
    },

    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`);
    // }
  },
}
</script>
