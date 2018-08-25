//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   length:0,
    pwd_eye:false,
    showPwd:false
  },
 
  onLoad: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3dceba',
    })
  },
  onTap:function(e){
    this.setData({
      tap:e.currentTarget.dataset.name,
      pwd_eye: false
    })
    if (e.currentTarget.dataset.name == 'username'){
      this.getPosition(this.data.length);
    }else{
      this.setData({
        styles:{},
        pwd_eye:true
      })
    }
  },
  onChange:function(e){
    var name = e.currentTarget.dataset.name;
    if(name == 'username'){
      this.data.length = e.detail.cursor;
      this.getPosition(e.detail.cursor);
    }
  },
  clickPwdEye:function(){
    this.setData({
      showPwd:!this.data.showPwd,
      tap:'password',
      styles: {}
    })
  },
  getPosition: function(length) {
    var face = parseFloat(1.5 / 36 * length);
    var nose = parseFloat(1 / 36 * length);
    var left_eye = parseFloat(1.5 / 36 * length);
    var right_eye = parseFloat(2 / 36 * length);
    var left_ear = parseFloat(1 / 36 * length);
    var right_ear = parseFloat(1 / 36 * length);
    var doe = false;
    var styles = {};
    styles.face = `left:${1 + (face > 1.5 ? 1.5 : face)}em`;
    styles.nose = `left:${0.9 + (nose > 1 ? 1 : nose)}em`;
    styles.left_eye = `left:${0.5 + (left_eye > 1.5 ? 1.5 : left_eye)}em`;
    styles.right_eye = `left:${4 + (right_eye > 2 ? 2 : right_eye)}em`;
    styles.left_ear = `left:${1.5 - (left_ear > 1 ? 1 : left_ear)}em`;
    styles.right_ear = `left:${7.5 - (right_ear > 1 ? 1 : right_ear)}em`;
    if (length >= 6) {
      doe = true;
    }
    this.setData({
      styles:styles,
      doe:doe
    })
  }
})
