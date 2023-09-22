// components/radio-button/radio-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },
    selectedIndex: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSelect(e) {
      const { index } = e.currentTarget.dataset;
      console.log(index)
      if (this.data.selectedIndex !== index) {
        // 选择
        this.setData({
          radios: this.data.radios.map((radio, i) => ({...radio, selected: i === index ? 'selected': ''})),
        })
        this.triggerEvent('change', { value: index })
      }
    }
  },
  observers: {
    list(value) {
      console.log('list change:', value)
      this.setData({
        radios: value.map((item, i) => ({ value: item, selected: i === this.data.selectedIndex ? 'selected': ''}))
      })
    },
    selectedIndex(value) {
      console.log('index change',value)
      this.setData({
        radios: this.data.list.map((item, i) => ({ value: item, selected: i === value ? 'selected': ''}))
      })
    } 
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
     
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
