(()=>{"use strict";class e{constructor(e,t,n,r,a,o){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.project=a,this.complete=o}}let t=["Default project"],n=[];function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){return r(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(r(1,arguments),!a(e)&&"number"!=typeof e)return!1;var t=o(e);return!isNaN(Number(t))}function u(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function l(e,t){r(2,arguments);var n=o(e).getTime(),a=u(t);return new Date(n+a)}function d(e,t){r(2,arguments);var n=u(t);return l(e,-n)}var s=864e5;function c(e){r(1,arguments);var t=1,n=o(e),a=n.getUTCDay(),i=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function m(e){r(1,arguments);var t=o(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=c(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var l=c(u);return t.getTime()>=i.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function h(e){r(1,arguments);var t=m(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=c(n);return a}var f=6048e5,g={};function v(){return g}function w(e,t){var n,a,i,l,d,s,c,m;r(1,arguments);var h=v(),f=u(null!==(n=null!==(a=null!==(i=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t||null===(d=t.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==a?a:null===(c=h.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=o(e),w=g.getUTCDay(),p=(w<f?7:0)+w-f;return g.setUTCDate(g.getUTCDate()-p),g.setUTCHours(0,0,0,0),g}function p(e,t){var n,a,i,l,d,s,c,m;r(1,arguments);var h=o(e),f=h.getUTCFullYear(),g=v(),p=u(null!==(n=null!==(a=null!==(i=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t||null===(d=t.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==a?a:null===(c=g.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,p),y.setUTCHours(0,0,0,0);var b=w(y,t),T=new Date(0);T.setUTCFullYear(f,0,p),T.setUTCHours(0,0,0,0);var C=w(T,t);return h.getTime()>=b.getTime()?f+1:h.getTime()>=C.getTime()?f:f-1}function y(e,t){var n,a,o,i,l,d,s,c;r(1,arguments);var m=v(),h=u(null!==(n=null!==(a=null!==(o=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(l=t.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(s=m.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=p(e,t),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var y=w(g,t);return y}var b=6048e5;function T(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const C=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===t?r%100:r,t.length)},D=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):T(n+1,2)},M=function(e,t){return T(e.getUTCDate(),t.length)},S=function(e,t){return T(e.getUTCHours()%12||12,t.length)},E=function(e,t){return T(e.getUTCHours(),t.length)},k=function(e,t){return T(e.getUTCMinutes(),t.length)},N=function(e,t){return T(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),t.length)};function U(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+T(o,2)}function P(e,t){return e%60==0?(e>0?"-":"+")+T(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}const O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return C(e,t)},Y:function(e,t,n,r){var a=p(e,r),o=a>0?a:1-a;return"YY"===t?T(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):T(o,t.length)},R:function(e,t){return T(m(e),t.length)},u:function(e,t){return T(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var i=function(e,t){r(1,arguments);var n=o(e),a=w(n,t).getTime()-y(n,t).getTime();return Math.round(a/b)+1}(e,a);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):T(i,t.length)},I:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=c(t).getTime()-h(t).getTime();return Math.round(n/f)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):T(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M(e,t)},D:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),i=n-a;return Math.floor(i/s)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return T(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return T(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return T(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return S(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):k(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):N(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return P(a);case"XXXX":case"XX":return W(a);default:return W(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return P(a);case"xxxx":case"xx":return W(a);default:return W(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(a,":");default:return"GMT"+W(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(a,":");default:return"GMT"+W(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return T(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return T((r._originalDate||e).getTime(),t.length)}};var Y=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},I=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},j={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Y(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,t)).replace("{{time}}",I(o,t))}};const B=j;function L(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var q=["D","DD"],F=["YY","YYYY"];function H(e){return-1!==q.indexOf(e)}function z(e){return-1!==F.indexOf(e)}function J(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var A,G={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Z(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?V(l,(function(e){return e.test(u)})):_(l,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var s=t.slice(u.length);return{value:i,rest:s}}}function _(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function V(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const K={code:"en-US",formatDistance:function(e,t,n){var r,a=X[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:G,formatRelative:function(e,t,n,r){return R[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(A={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(A.matchPattern);if(!n)return null;var r=n[0],a=e.match(A.parsePattern);if(!a)return null;var o=A.valueCallback?A.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:Z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ne=/^'([^]*?)'?$/,re=/''/g,ae=/[a-zA-Z]/;function oe(e){var t=e.match(ne);return t?t[1].replace(re,"'"):e}Math.pow(10,8);var ie=36e5,ue={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},le=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,de=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,se=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ce(e){var t,n={},r=e.split(ue.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],ue.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ue.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ue.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function me(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function he(e,t){if(null===t)return new Date(NaN);var n=e.match(le);if(!n)return new Date(NaN);var r=!!n[4],a=fe(n[1]),o=fe(n[2])-1,i=fe(n[3]),u=fe(n[4]),l=fe(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,l):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(pe[t]||(ye(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(ye(e)?366:365)}(t,a)?(d.setUTCFullYear(t,o,Math.max(a,i)),d):new Date(NaN)}function fe(e){return e?parseInt(e):1}function ge(e){var t=e.match(de);if(!t)return NaN;var n=ve(t[1]),r=ve(t[2]),a=ve(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*ie+6e4*r+1e3*a:NaN}function ve(e){return e&&parseFloat(e.replace(",","."))||0}function we(e){if("Z"===e)return 0;var t=e.match(se);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*ie+6e4*a):NaN}var pe=[31,null,31,30,31,30,31,31,30,31,30,31];function ye(e){return e%400==0||e%4==0&&e%100!=0}function be(e){e.forEach((e=>{if(null===document.getElementById(e)){const t=document.getElementById("content"),n=document.createElement("div"),r=document.createElement("ul"),a=document.createElement("h2");a.innerHTML=e,r.id=e,r.appendChild(a),n.appendChild(r),t.appendChild(n)}}))}function Te(e,t,r=!1){if(null===document.getElementById(e)){const a=document.getElementById(t).appendChild(document.createElement("li")),o=document.createElement("input");o.type="checkbox",o.id=e,o.name=e,o.checked=r,a.appendChild(o);let i=document.createElement("p");i.innerHTML=e,o.checked&&(i.style.textDecoration="line-through"),a.appendChild(i);let u=document.createElement("button");u.classList.add("more"),u.textContent="more",a.appendChild(u),console.log(a.innerText),u.addEventListener("click",(()=>{n.forEach((e=>{console.log(e.title),i.textContent===e.title&&function(e){const t=document.getElementById("content"),n=document.createElement("div");n.appendChild(document.createElement("p")).textContent=`Title: ${e.title} \n Description: ${e.description} \n Due: ${e.dueDate} \n Priority: ${e.priority}`,n.id="popup",t.appendChild(n);const r=n.appendChild(document.createElement("button"));r.textContent="close popup",r.addEventListener("click",(()=>{n.remove()}))}(e)}))}));let l=document.createElement("button");l.classList.add("dlt"),l.textContent="X",a.appendChild(l),l.addEventListener("click",(()=>{for(let e=0;e<n.length;e++)console.log(n[e].title+"moreX"),console.log(l.parentElement.textContent),n[e].title+"moreX"===l.parentElement.textContent&&n.splice(e,1);localStorage.setItem("items",JSON.stringify(n)),console.log(JSON.parse(localStorage.getItem("items"))),console.log(n),l.parentElement.remove()})),o.addEventListener("change",(()=>{for(let t=0;t<n.length;t++)n[t].title===e&&(o.checked&&(n[t].complete=!0,localStorage.setItem("items",JSON.stringify(n)),console.log(n),console.log(JSON.parse(localStorage.getItem("items"))),i.style.textDecoration="line-through"),!1===o.checked&&(n[t].complete=!1,localStorage.setItem("items",JSON.stringify(n)),console.log(n),console.log(n[t].complete),i.style.textDecoration="none"))}))}}function Ce(e){let t=document.getElementById("project");t.innerHTML="",e.forEach((e=>{let n=document.createElement("option");n.textContent=e,n.value=e,t.appendChild(n)}))}window.onload=e=>{localStorage.getItem("projects")&&(t=JSON.parse(localStorage.getItem("projects")),be(t),Ce(t)),localStorage.getItem("items")&&(n=JSON.parse(localStorage.getItem("items")),n.forEach((e=>{Te(e.title,e.project,e.complete)})),console.log(n))},be(t),document.getElementById("newProject").addEventListener("click",(()=>{let e=prompt("Title:");t.push(e),console.log(t),localStorage.setItem("projects",JSON.stringify(t)),console.log(JSON.parse(localStorage.getItem("projects"))),be(t),Ce(t)})),document.getElementById("submit").addEventListener("click",(t=>{t.preventDefault();const a=new e;a.project=document.getElementById("project").value,a.title=document.getElementById("title").value,a.description=document.getElementById("description").value,a.dueDate=function(e,t,n){var a,l,s,c,m,h,f,g,w,p,y,b,T,C,D,M,S,E;r(2,arguments);var k=String(t),N=v(),x=null!==(a=null!==(l=null==n?void 0:n.locale)&&void 0!==l?l:N.locale)&&void 0!==a?a:K,U=u(null!==(s=null!==(c=null!==(m=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:N.firstWeekContainsDate)&&void 0!==c?c:null===(w=N.locale)||void 0===w||null===(p=w.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==s?s:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=u(null!==(y=null!==(b=null!==(T=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(D=n.locale)||void 0===D||null===(M=D.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==T?T:N.weekStartsOn)&&void 0!==b?b:null===(S=N.locale)||void 0===S||null===(E=S.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==y?y:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var W=o(e);if(!i(W))throw new RangeError("Invalid time value");var Y=L(W),I=d(W,Y),j={firstWeekContainsDate:U,weekStartsOn:P,locale:x,_originalDate:W};return k.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,x.formatLong):e})).join("").match(ee).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return oe(r);var o=O[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!z(r)||J(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!H(r)||J(r,t,String(e)),o(I,r,x.localize,j);if(a.match(ae))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(function(e,t){var n;r(1,arguments);var a=u(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,i=ce(e);if(i.date){var l=me(i.date,a);o=he(l.restDateString,l.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var d,s=o.getTime(),c=0;if(i.time&&(c=ge(i.time),isNaN(c)))return new Date(NaN);if(!i.timezone){var m=new Date(s+c),h=new Date(0);return h.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),h.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),h}return d=we(i.timezone),isNaN(d)?new Date(NaN):new Date(s+c+d)}(document.getElementById("dueDate").value),"PPPP"),a.priority=document.getElementById("priority").value,a.complete=!1,Te(a.title,a.project),n.push(a),localStorage.setItem("items",JSON.stringify(n)),console.log(localStorage),console.log(JSON.parse(localStorage.getItem("items"))),console.log(a),console.log(n),document.getElementById("form").reset()})),document.getElementById("clear").addEventListener("click",(()=>{for(let e=n.length-1;e>=0;e--)!0===n[e].complete&&(document.getElementById(n[e].title).parentElement.remove(),n.splice(e,1),localStorage.setItem("items",JSON.stringify(n)))})),document.getElementById("delete").addEventListener("click",(()=>{let e=prompt("which project do you want to delete?");for(let n=0;n<t.length;n++)t[n]===e&&(document.getElementById(t[n]).parentElement.remove(),t.splice(n,1));localStorage.setItem("projects",JSON.stringify(t)),Ce(t)})),Ce(t)})();