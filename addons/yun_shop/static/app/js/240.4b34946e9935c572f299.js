webpackJsonp([240],{"5/bl":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("Pexp"),r=t("Tg7E"),o={mixins:[t("vsZy").a],data:function(){return{active:0,allData:{},member:{},rewards:{},recordsList:[],isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getMember(),this.getData()},methods:{getMember:function(){var e=this;$http.get("plugin.performance.frontend.bonus.getMemberInfo").then(function(n){e.member=n.data,e.fun.setWXTitle(e.member.plugin_name)})},getData:function(){var e=this;$http.post("plugin.performance.frontend.bonus.getList",{page:1}," ").then(function(n){1===n.result?(e.allData=n.data,e.rewards=e.allData.statistics,e.isLoadMore=!0,e.total_page=e.allData.list.last_page,e.total_page||(e.total_page=0),e.recordsList=e.allData.list.data):Object(r.Toast)(n.msg)},function(e){console.log(e)})},getMoreData:function(){var e=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.performance.frontend.bonus.getList",{page:this.page},"加载中").then(function(n){if(e.isLoadMore=!0,1===n.result){var t=n.data.list.data;e.recordsList=e.recordsList.concat(t)}else e.page=e.page-1,e.isLoadMore=!1},function(e){}))},initData:function(){this.recordsList=[],this.page=1,this.total_page=0,this.isLoadMore=!0},goRewardsRecordDetail:function(){this.$router.push(this.fun.getUrl("RewardsRecordDetail"))}},components:{cTitle:a.a}},i={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return e.member.nickname?a("div",{attrs:{id:"team_rewards_record"}},[a("c-title",{attrs:{hide:!1,text:e.member.plugin_name}}),e._v(" "),e.member.nickname?a("div",{staticClass:"header_box"},[a("div",{staticClass:"left"},[a("div",{staticClass:"header"},[a("img",{attrs:{src:e.member.avatar}})]),e._v(" "),a("ul",{staticClass:"name"},[a("li",[e._v(e._s(e.member.nickname))])])]),e._v(" "),a("div",{staticClass:"right"},[a("p",[e._v("￥"+e._s(e.member.amountTotal))]),e._v(" "),a("p",[e._v("奖励总额（元）")])])]):e._e(),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"list_box"},e._l(e.recordsList,function(n,t){return a("ul",{key:t,staticClass:"box"},[a("li",{staticStyle:{"border-bottom":"1px solid #eee"}},[a("span",{staticClass:"order"},[e._v("分红ID："+e._s(n.id))]),e._v(" "),a("span",{staticClass:"sum"},[e._v("+"+e._s(n.amount))])]),e._v(" "),a("li",[a("span",{staticClass:"time"},[e._v("团队业绩总额："+e._s(n.performance_total))]),e._v(" "),a("span",{staticClass:"state"},[e._v("奖励比例："+e._s(n.ratio)+"%")])]),e._v(" "),a("li",[a("span",{staticClass:"time"},[e._v("下级团队奖励金额："+e._s(n.lower_performance_total))]),e._v(" "),a("span",{staticClass:"state"},[e._v(e._s(n.created_at))])])])}),0),e._v(" "),e.recordsList.length<=0?a("div",{staticClass:"blank"},[a("img",{attrs:{src:t("u+0x")}}),e._v(" "),a("span",[e._v("还没有记录哦")])]):e._e()],1):e._e()},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"title-box"},[n("p",[this._v("奖励记录")]),this._v(" "),n("span",{staticClass:"red_line"})])}]};var d=t("VU/8")(o,i,!1,function(e){t("kam6")},"data-v-9b0db804",null);n.default=d.exports},j5t9:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n#team_rewards_record[data-v-9b0db804] {\n  padding-top: 40px;\n}\n#team_rewards_record .blank[data-v-9b0db804] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n#team_rewards_record .blank img[data-v-9b0db804] {\n      width: 6rem;\n      height: 6rem;\n}\n#team_rewards_record .blank span[data-v-9b0db804] {\n      margin-top: 15px;\n      color: #ccc;\n      font-size: 14px;\n}\n#team_rewards_record .header_box[data-v-9b0db804] {\n    background: #f15353;\n    color: #fff;\n    padding: 1.25rem 0.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#team_rewards_record .header_box .left[data-v-9b0db804] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#team_rewards_record .header_box .right[data-v-9b0db804] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#team_rewards_record .header_box .header[data-v-9b0db804] {\n      width: 3.25rem;\n      height: 3.25rem;\n      border: solid 0.125rem #fff;\n      margin-right: 0.625rem;\n      overflow: hidden;\n      border-radius: 3.75rem;\n      background: #f2f2f2;\n}\n#team_rewards_record .header_box .header img[data-v-9b0db804] {\n        width: 100%;\n}\n#team_rewards_record .header_box .name[data-v-9b0db804] {\n      text-align: left;\n}\n#team_rewards_record .header_box .name li[data-v-9b0db804]:first-child {\n        text-align: left;\n        font-size: 16px;\n        line-height: 3.2rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n#team_rewards_record .header_box .name .name_b[data-v-9b0db804] {\n        font-size: 14px;\n        line-height: 1.375rem;\n        text-align: left;\n}\n#team_rewards_record .header_box .task[data-v-9b0db804] {\n      font-size: 13px;\n      background: rgba(0, 0, 0, 0.2);\n      position: absolute;\n      right: 0.875rem;\n      padding: 0.25rem 0.625rem;\n      border-radius: 1rem;\n}\n#team_rewards_record .info_box[data-v-9b0db804] {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#team_rewards_record .info_box .left[data-v-9b0db804], #team_rewards_record .info_box .right[data-v-9b0db804] {\n      width: 50%;\n      padding: 0.625rem 0.875rem;\n}\n#team_rewards_record .info_box .left li[data-v-9b0db804], #team_rewards_record .info_box .right li[data-v-9b0db804] {\n        line-height: 1.5rem;\n        text-align: left;\n        font-size: 14px;\n}\n#team_rewards_record .info_box .left li span[data-v-9b0db804], #team_rewards_record .info_box .right li span[data-v-9b0db804] {\n          font-size: 24px;\n}\n#team_rewards_record .info_box .left li[data-v-9b0db804]:last-child, #team_rewards_record .info_box .right li[data-v-9b0db804]:last-child {\n        color: #8c8c8c;\n}\n#team_rewards_record .rew_detail[data-v-9b0db804] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 4rem;\n    padding: 0.4rem;\n    font-size: 18px;\n    background: #fff;\n}\n#team_rewards_record .today_bonus[data-v-9b0db804] {\n    margin-top: 0.625rem;\n    width: 100%;\n    height: 5.125rem;\n    background: #fff;\n    padding: 1rem 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    position: relative;\n}\n#team_rewards_record .today_bonus li.line[data-v-9b0db804] {\n      position: absolute;\n      width: 0.0625rem;\n      height: 3.25rem;\n      background: #ddd;\n      top: 1rem;\n      right: 34%;\n}\n#team_rewards_record .today_bonus li.line .careat[data-v-9b0db804] {\n        width: 0.375rem;\n        height: 0.375rem;\n        border: 0.0625rem solid #ddd;\n        border-left: 0;\n        border-bottom: 0;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        background: #fff;\n        position: absolute;\n        top: 1.4375rem;\n        right: -0.1875rem;\n}\n#team_rewards_record .today_bonus li[data-v-9b0db804] {\n      text-align: center;\n      float: left;\n}\n#team_rewards_record .today_bonus li span[data-v-9b0db804] {\n        font-size: 17px;\n        line-height: 1.625rem;\n        margin-bottom: 0.625rem;\n        display: inline-block;\n}\n#team_rewards_record .today_bonus li b[data-v-9b0db804] {\n        font-size: 11px;\n        color: #333;\n}\n#team_rewards_record .today_bonus .date[data-v-9b0db804] {\n      width: 33%;\n}\n#team_rewards_record .today_bonus .date span[data-v-9b0db804] {\n        color: #ffa800;\n}\n#team_rewards_record .today_bonus li[data-v-9b0db804]:first-child,\n    #team_rewards_record .today_bonus li[data-v-9b0db804]:nth-child(2) {\n      border-right: 0.0625rem solid #e2e2e2;\n}\n#team_rewards_record .today_bonus .mounth[data-v-9b0db804] {\n      width: 33%;\n}\n#team_rewards_record .today_bonus .mounth span[data-v-9b0db804] {\n        color: #fc6a70;\n}\n#team_rewards_record .money[data-v-9b0db804] {\n    margin-top: 0.625rem;\n    margin-bottom: 0.625rem;\n}\n#team_rewards_record .money .gongge[data-v-9b0db804] {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #fff;\n      -webkit-column-count: 3;\n         -moz-column-count: 3;\n              column-count: 3;\n      padding-bottom: 0.625rem;\n      padding-top: 0.625rem;\n}\n#team_rewards_record .money .gongge li[data-v-9b0db804] {\n        width: 50%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        text-align: center;\n        font-size: 12px;\n}\n#team_rewards_record .money .gongge li i[data-v-9b0db804] {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 0 1.75rem;\n                  flex: 0 0 1.75rem;\n          font-size: 26px;\n          color: #999;\n          display: inline-block;\n          margin-bottom: 0.375rem;\n          width: 100%;\n}\n#team_rewards_record .money .gongge li span[data-v-9b0db804] {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 0 1.4rem;\n                  flex: 0 0 1.4rem;\n          color: #333;\n          font-size: 12px;\n}\n#team_rewards_record .money .gongge li b[data-v-9b0db804] {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          color: #f15353;\n          font-size: 16px;\n}\n#team_rewards_record .title-box[data-v-9b0db804] {\n    margin-top: 0.5rem;\n    background: #fff;\n    position: relative;\n}\n#team_rewards_record .title-box p[data-v-9b0db804] {\n      line-height: 44px;\n}\n#team_rewards_record .title-box .red_line[data-v-9b0db804] {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 2px;\n      background: #f44;\n      z-index: 1;\n}\n#team_rewards_record .list_box .box[data-v-9b0db804] {\n    background: #fff;\n    padding: 0.625rem 0;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#team_rewards_record .list_box .box li[data-v-9b0db804] {\n      line-height: 1.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0 0.875rem;\n      font-size: 15px;\n}\n#team_rewards_record .list_box .box li .sum[data-v-9b0db804] {\n        color: #f15353;\n}\n#team_rewards_record .list_box .box li .time[data-v-9b0db804] {\n        font-size: 12px;\n        color: #8c8c8c;\n}\n",""])},kam6:function(e,n,t){var a=t("j5t9");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("8c4e5cc6",a,!0,{})}});