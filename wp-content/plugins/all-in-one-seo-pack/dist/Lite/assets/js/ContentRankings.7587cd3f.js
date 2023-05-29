import{a as S,d as x}from"./vuex.esm-bundler.8589b2dd.js";import{C as B}from"./index.fd0fcee8.js";import{C as R}from"./Blur.a27209d0.js";import{G as P,a as T}from"./Row.5e452de4.js";import{P as U}from"./PostsTable.0b7bdd43.js";import{_ as m,r as e,o as a,h as u,w as o,f as p,d as n,e as _,t as c,c as b,a as y}from"./_plugin-vue_export-helper.2d9794a3.js";import{C as L}from"./Index.a5b2ee90.js";import{R as q}from"./RequiredPlans.661fcd2c.js";import{L as A}from"./WpTable.8adff4c1.js";import"./default-i18n.ab92175e.js";import"./constants.e9426d11.js";import"./index.02a5ed9a.js";import"./SaveChanges.bc66cd69.js";import"./Caret.42a820e0.js";import"./PostTypes.9ab32454.js";import"./Statistic.ed0d2590.js";import"./isArrayLikeObject.c492f682.js";import"./_arrayEach.56a9f647.js";import"./_getAllKeys.b9d35dab.js";import"./_getTag.af0e2981.js";import"./_commonjsHelpers.f84db168.js";import"./vue.runtime.esm-bundler.4b666f07.js";import"./Tooltip.ae0bcccb.js";import"./ScoreButton.e74a21e9.js";import"./Table.1a0736e7.js";import"./Slide.cd756e61.js";import"./helpers.de7566d0.js";import"./RequiresUpdate.52f5acf2.js";import"./postContent.741ce73c.js";import"./cleanForSlug.1898a430.js";import"./html.14f2a8b9.js";import"./Index.1fd8fc42.js";const G={components:{CoreAlert:B,CoreBlur:R,GridColumn:P,GridRow:T,PostsTable:U},data(){return{strings:{title:this.$t.__("Content Rankings",this.$td),alert:this.$t.__("The Content Rankings report provides valuable insights into the performance of your content in search results and helps you optimize your posts for better results. This report is generated on a monthly basis, covering the past 12 months leading up to the current month. By regularly reviewing this report, you can identify trends in your post rankings and make informed decisions to improve your content's visibility and ultimately increase rankings in search results.",this.$td)},defaultPages:{rows:[],totals:{page:0,pages:0,total:0}}}},computed:{...S("search-statistics",["data"])}},N={class:"aioseo-search-statistics-content-rankings"},V={class:"aioseo-search-statistics-content-rankings__title"};function D(s,d,h,g,t,f){const r=e("core-alert"),i=e("posts-table"),l=e("grid-column"),w=e("grid-row"),C=e("core-blur");return a(),u(C,null,{default:o(()=>[p("div",N,[n(w,null,{default:o(()=>[n(l,null,{default:o(()=>{var k,$;return[n(r,{class:"description",type:"blue","show-close":""},{default:o(()=>[_(c(t.strings.alert),1)]),_:1}),p("div",V,[p("h2",null,c(t.strings.title),1)]),n(i,{posts:(($=(k=s.data)==null?void 0:k.contentRankings)==null?void 0:$.paginated)||t.defaultPages,columns:["post_title","lastUpdated","loss","drop","performance"],disableSorting:"","show-items-per-page":"","show-table-footer":""},null,8,["posts"])]}),_:1})]),_:1})])]),_:1})}const I=m(G,[["render",D]]);const E={components:{Blur:I,Cta:L,RequiredPlans:q},data(){return{strings:{ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock Search Statistics",this.$td),"Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Search Statistics is only for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Track page rankings",this.$td),feature3:this.$t.__("Track keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{...x(["isUnlicensed"])}},H={class:"aioseo-search-statistics-content-rankings"};function O(s,d,h,g,t,f){const r=e("blur"),i=e("required-plans"),l=e("cta");return a(),b("div",H,[n(r),n(l,{"cta-link":s.$links.getPricingUrl("search-statistics","search-statistics-upsell","content-rankings"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("search-statistics","content-rankings","home"),"feature-list":[t.strings.feature1,t.strings.feature2,t.strings.feature3,t.strings.feature4],"align-top":""},{"header-text":o(()=>[_(c(t.strings.ctaHeader),1)]),description:o(()=>[n(i,{"core-feature":["search-statistics","content-rankings"]}),_(" "+c(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const v=m(E,[["render",O]]),z={mixins:[A],components:{ContentRankings:v,Lite:v}},F={class:"aioseo-search-statistics-content-rankings"};function M(s,d,h,g,t,f){const r=e("content-rankings",!0),i=e("lite");return a(),b("div",F,[s.shouldShowMain("search-statistics","content-rankings")?(a(),u(r,{key:0})):y("",!0),s.shouldShowUpgrade("search-statistics","content-rankings")||s.shouldShowLite?(a(),u(i,{key:1})):y("",!0)])}const Ct=m(z,[["render",M]]);export{Ct as default};
