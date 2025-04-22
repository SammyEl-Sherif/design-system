'use strict';

var tslib = require('tslib');
var React = require('react');
var clsx = require('clsx');

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var styles$a = {"pad-25":"Box-module_pad-25__SWW-J","pad-l-25":"Box-module_pad-l-25__Xq-rY","pad-r-25":"Box-module_pad-r-25__abotq","pad-t-25":"Box-module_pad-t-25__H9YvG","pad-b-25":"Box-module_pad-b-25__jYNir","mar-25":"Box-module_mar-25__rBlkf","mar-l-25":"Box-module_mar-l-25__8goCO","mar-r-25":"Box-module_mar-r-25__0QEBU","mar-t-25":"Box-module_mar-t-25__xqCG3","mar-b-25":"Box-module_mar-b-25__OMvnn","pad-50":"Box-module_pad-50__k29Pp","pad-l-50":"Box-module_pad-l-50__VoF6b","pad-r-50":"Box-module_pad-r-50__7RsUZ","pad-t-50":"Box-module_pad-t-50__OpBTv","pad-b-50":"Box-module_pad-b-50__-NQDP","mar-50":"Box-module_mar-50__JFwJ-","mar-l-50":"Box-module_mar-l-50__epMie","mar-r-50":"Box-module_mar-r-50__a0SF-","mar-t-50":"Box-module_mar-t-50__7D28-","mar-b-50":"Box-module_mar-b-50__VRFIb","pad-75":"Box-module_pad-75__5Hw5m","pad-l-75":"Box-module_pad-l-75__r-vj5","pad-r-75":"Box-module_pad-r-75__gvuhT","pad-t-75":"Box-module_pad-t-75__vuCou","pad-b-75":"Box-module_pad-b-75__9qymd","mar-75":"Box-module_mar-75__pzkV8","mar-l-75":"Box-module_mar-l-75__UpvRL","mar-r-75":"Box-module_mar-r-75__wO-BI","mar-t-75":"Box-module_mar-t-75__agm2m","mar-b-75":"Box-module_mar-b-75__HEBSK","pad-100":"Box-module_pad-100__2-NVL","pad-l-100":"Box-module_pad-l-100__U7l0I","pad-r-100":"Box-module_pad-r-100__Tiufy","pad-t-100":"Box-module_pad-t-100__t9867","pad-b-100":"Box-module_pad-b-100__W92oR","mar-100":"Box-module_mar-100__1tqh0","mar-l-100":"Box-module_mar-l-100__r7kK8","mar-r-100":"Box-module_mar-r-100__ilcUs","mar-t-100":"Box-module_mar-t-100__0WEJz","mar-b-100":"Box-module_mar-b-100__qLXJU","pad-125":"Box-module_pad-125__cxkzR","pad-l-125":"Box-module_pad-l-125__u3udI","pad-r-125":"Box-module_pad-r-125__5FzyX","pad-t-125":"Box-module_pad-t-125__wcI0i","pad-b-125":"Box-module_pad-b-125__tx-dn","mar-125":"Box-module_mar-125__VWEi1","mar-l-125":"Box-module_mar-l-125__w6cd6","mar-r-125":"Box-module_mar-r-125__sxAWS","mar-t-125":"Box-module_mar-t-125__zYB1X","mar-b-125":"Box-module_mar-b-125__-a7c5","pad-150":"Box-module_pad-150__LGw62","pad-l-150":"Box-module_pad-l-150__BPylV","pad-r-150":"Box-module_pad-r-150__WgskH","pad-t-150":"Box-module_pad-t-150__rj1CX","pad-b-150":"Box-module_pad-b-150__DN90v","mar-150":"Box-module_mar-150__-bem4","mar-l-150":"Box-module_mar-l-150__Vel52","mar-r-150":"Box-module_mar-r-150__ClmdS","mar-t-150":"Box-module_mar-t-150__xi1ec","mar-b-150":"Box-module_mar-b-150__eJ9Pn","pad-200":"Box-module_pad-200__LqSHy","pad-l-200":"Box-module_pad-l-200__dITjk","pad-r-200":"Box-module_pad-r-200__182Bh","pad-t-200":"Box-module_pad-t-200__SED97","pad-b-200":"Box-module_pad-b-200__HRG0R","mar-200":"Box-module_mar-200__OVMTM","mar-l-200":"Box-module_mar-l-200__e-s6p","mar-r-200":"Box-module_mar-r-200__Ellww","mar-t-200":"Box-module_mar-t-200__d1dCD","mar-b-200":"Box-module_mar-b-200__2DI0M","pad-250":"Box-module_pad-250__uC-Yp","pad-l-250":"Box-module_pad-l-250__7p4I1","pad-r-250":"Box-module_pad-r-250__rhnyu","pad-t-250":"Box-module_pad-t-250__BGPiW","pad-b-250":"Box-module_pad-b-250__fv6ns","mar-250":"Box-module_mar-250__I54A8","mar-l-250":"Box-module_mar-l-250__NTyPe","mar-r-250":"Box-module_mar-r-250__j146t","mar-t-250":"Box-module_mar-t-250__0EC3B","mar-b-250":"Box-module_mar-b-250__IUsPk","pad-300":"Box-module_pad-300__jJHjg","pad-l-300":"Box-module_pad-l-300__O0tvp","pad-r-300":"Box-module_pad-r-300__z8EPW","pad-t-300":"Box-module_pad-t-300__0p9Qr","pad-b-300":"Box-module_pad-b-300__pNF6W","mar-300":"Box-module_mar-300__Z3IQ7","mar-l-300":"Box-module_mar-l-300__VEf8m","mar-r-300":"Box-module_mar-r-300__wPiBE","mar-t-300":"Box-module_mar-t-300__hUoeX","mar-b-300":"Box-module_mar-b-300__Lksss","pad-400":"Box-module_pad-400__jrJU-","pad-l-400":"Box-module_pad-l-400__b1xAM","pad-r-400":"Box-module_pad-r-400__ifBbd","pad-t-400":"Box-module_pad-t-400__iC8W0","pad-b-400":"Box-module_pad-b-400__N6tb1","mar-400":"Box-module_mar-400__oII6D","mar-l-400":"Box-module_mar-l-400__LOSa-","mar-r-400":"Box-module_mar-r-400__kyYFv","mar-t-400":"Box-module_mar-t-400__5lWeK","mar-b-400":"Box-module_mar-b-400__G4VYw","pad-500":"Box-module_pad-500__8d850","pad-l-500":"Box-module_pad-l-500__8A90c","pad-r-500":"Box-module_pad-r-500__rrqtA","pad-t-500":"Box-module_pad-t-500__FfTHC","pad-b-500":"Box-module_pad-b-500__i1woh","mar-500":"Box-module_mar-500__sSHRa","mar-l-500":"Box-module_mar-l-500__yIsPS","mar-r-500":"Box-module_mar-r-500__YteLH","mar-t-500":"Box-module_mar-t-500__MW7ia","mar-b-500":"Box-module_mar-b-500__Z45dd","pad-600":"Box-module_pad-600__-ieig","pad-l-600":"Box-module_pad-l-600__PoUtj","pad-r-600":"Box-module_pad-r-600__Dh-yt","pad-t-600":"Box-module_pad-t-600__Kz77A","pad-b-600":"Box-module_pad-b-600__A4fXl","mar-600":"Box-module_mar-600__IKVJj","mar-l-600":"Box-module_mar-l-600__iGZPp","mar-r-600":"Box-module_mar-r-600__rX36M","mar-t-600":"Box-module_mar-t-600__QiySw","mar-b-600":"Box-module_mar-b-600__VXpRr","pad-700":"Box-module_pad-700__NP7y9","pad-l-700":"Box-module_pad-l-700__Vpa6p","pad-r-700":"Box-module_pad-r-700__3fO-x","pad-t-700":"Box-module_pad-t-700__TlGR2","pad-b-700":"Box-module_pad-b-700__2NWQT","mar-700":"Box-module_mar-700__xgnE6","mar-l-700":"Box-module_mar-l-700__gWozL","mar-r-700":"Box-module_mar-r-700__CH5q0","mar-t-700":"Box-module_mar-t-700__nP48U","mar-b-700":"Box-module_mar-b-700__raKaN","pad-800":"Box-module_pad-800__A3gWp","pad-l-800":"Box-module_pad-l-800__r1R0i","pad-r-800":"Box-module_pad-r-800__8aEnb","pad-t-800":"Box-module_pad-t-800__MvHdd","pad-b-800":"Box-module_pad-b-800__ZjZwo","mar-800":"Box-module_mar-800__3j4-x","mar-l-800":"Box-module_mar-l-800__qz5lc","mar-r-800":"Box-module_mar-r-800__qo9xL","mar-t-800":"Box-module_mar-t-800__NfCDe","mar-b-800":"Box-module_mar-b-800__6sTw4","pad-900":"Box-module_pad-900__ag5HU","pad-l-900":"Box-module_pad-l-900__yb-hH","pad-r-900":"Box-module_pad-r-900__jzYv-","pad-t-900":"Box-module_pad-t-900__b7cSF","pad-b-900":"Box-module_pad-b-900__QG4x3","mar-900":"Box-module_mar-900__9YkH7","mar-l-900":"Box-module_mar-l-900__wpTdc","mar-r-900":"Box-module_mar-r-900__L734P","mar-t-900":"Box-module_mar-t-900__e2WLH","mar-b-900":"Box-module_mar-b-900__2iWbA","color-neutral-100":"Box-module_color-neutral-100__D-JN-","bgc-neutral-100":"Box-module_bgc-neutral-100__XXe8L","bdc-neutral-100":"Box-module_bdc-neutral-100__2vxZf","color-neutral-200":"Box-module_color-neutral-200__gFwlO","bgc-neutral-200":"Box-module_bgc-neutral-200__k3xQ4","bdc-neutral-200":"Box-module_bdc-neutral-200__lTdjZ","color-neutral-400":"Box-module_color-neutral-400__bFVDb","bgc-neutral-400":"Box-module_bgc-neutral-400__F0Oqb","bdc-neutral-400":"Box-module_bdc-neutral-400__pmEeN","color-neutral-600":"Box-module_color-neutral-600__dS3bX","bgc-neutral-600":"Box-module_bgc-neutral-600__IbsUL","bdc-neutral-600":"Box-module_bdc-neutral-600__QCF87","color-neutral-800":"Box-module_color-neutral-800__G0Vdy","bgc-neutral-800":"Box-module_bgc-neutral-800__2c6X-","bdc-neutral-800":"Box-module_bdc-neutral-800__JyBZC","color-neutral-black":"Box-module_color-neutral-black__MWA3e","bgc-neutral-black":"Box-module_bgc-neutral-black__D05LV","bdc-neutral-black":"Box-module_bdc-neutral-black__NJVhH","color-neutral-white":"Box-module_color-neutral-white__tlqgn","bgc-neutral-white":"Box-module_bgc-neutral-white__SeXir","bdc-neutral-white":"Box-module_bdc-neutral-white__hVsXn","color-urgent-600":"Box-module_color-urgent-600__ggklJ","bgc-urgent-600":"Box-module_bgc-urgent-600__2rnrL","bdc-urgent-600":"Box-module_bdc-urgent-600__MI5-p","color-urgent-900":"Box-module_color-urgent-900__0gv2c","bgc-urgent-900":"Box-module_bgc-urgent-900__1ZA8f","bdc-urgent-900":"Box-module_bdc-urgent-900__9-c5d","color-moderate-900":"Box-module_color-moderate-900__6CEq9","bgc-moderate-900":"Box-module_bgc-moderate-900__ridYt","bdc-moderate-900":"Box-module_bdc-moderate-900__NUGnA","color-passive-800":"Box-module_color-passive-800__4TUUj","bgc-passive-800":"Box-module_bgc-passive-800__q80fU","bdc-passive-800":"Box-module_bdc-passive-800__T7G8E","color-active-800":"Box-module_color-active-800__Dcaq0","bgc-active-800":"Box-module_bgc-active-800__rALFn","bdc-active-800":"Box-module_bdc-active-800__i1yOU","pad-md-25":"Box-module_pad-md-25__rjSVY","pad-l-md-25":"Box-module_pad-l-md-25__3WYLI","pad-r-md-25":"Box-module_pad-r-md-25__Fm8Vp","pad-t-md-25":"Box-module_pad-t-md-25__efY9Q","pad-b-md-25":"Box-module_pad-b-md-25__0h3pQ","mar-md-25":"Box-module_mar-md-25__-HuTx","mar-l-md-25":"Box-module_mar-l-md-25__4Fesp","mar-r-md-25":"Box-module_mar-r-md-25__AT8WK","mar-t-md-25":"Box-module_mar-t-md-25__wpp09","mar-b-md-25":"Box-module_mar-b-md-25__eNS53","pad-md-50":"Box-module_pad-md-50__kSSR1","pad-l-md-50":"Box-module_pad-l-md-50__TUP7b","pad-r-md-50":"Box-module_pad-r-md-50__8upCq","pad-t-md-50":"Box-module_pad-t-md-50__g-E05","pad-b-md-50":"Box-module_pad-b-md-50__G7akf","mar-md-50":"Box-module_mar-md-50__1mb8-","mar-l-md-50":"Box-module_mar-l-md-50__G5xpH","mar-r-md-50":"Box-module_mar-r-md-50__7yh1X","mar-t-md-50":"Box-module_mar-t-md-50__MJ1Dz","mar-b-md-50":"Box-module_mar-b-md-50__-70SJ","pad-md-75":"Box-module_pad-md-75__fGdHO","pad-l-md-75":"Box-module_pad-l-md-75__Xu2mn","pad-r-md-75":"Box-module_pad-r-md-75__J4WMy","pad-t-md-75":"Box-module_pad-t-md-75__xAfNc","pad-b-md-75":"Box-module_pad-b-md-75__ZscEa","mar-md-75":"Box-module_mar-md-75__wDRTJ","mar-l-md-75":"Box-module_mar-l-md-75__Loqkn","mar-r-md-75":"Box-module_mar-r-md-75__V6NJK","mar-t-md-75":"Box-module_mar-t-md-75__N8V-e","mar-b-md-75":"Box-module_mar-b-md-75__uycCh","pad-md-100":"Box-module_pad-md-100__CD4Gb","pad-l-md-100":"Box-module_pad-l-md-100__zuc1-","pad-r-md-100":"Box-module_pad-r-md-100__Cficy","pad-t-md-100":"Box-module_pad-t-md-100__Q3dnh","pad-b-md-100":"Box-module_pad-b-md-100__3HIr2","mar-md-100":"Box-module_mar-md-100__K15WL","mar-l-md-100":"Box-module_mar-l-md-100__L7Efa","mar-r-md-100":"Box-module_mar-r-md-100__SyVwb","mar-t-md-100":"Box-module_mar-t-md-100__LCBUC","mar-b-md-100":"Box-module_mar-b-md-100__XBq5c","pad-md-125":"Box-module_pad-md-125__U3Rua","pad-l-md-125":"Box-module_pad-l-md-125__DfpkY","pad-r-md-125":"Box-module_pad-r-md-125__7po-N","pad-t-md-125":"Box-module_pad-t-md-125__hSLoC","pad-b-md-125":"Box-module_pad-b-md-125__UkbDQ","mar-md-125":"Box-module_mar-md-125__FfHi8","mar-l-md-125":"Box-module_mar-l-md-125__tixYl","mar-r-md-125":"Box-module_mar-r-md-125__oZFvS","mar-t-md-125":"Box-module_mar-t-md-125__1FgYJ","mar-b-md-125":"Box-module_mar-b-md-125__nmRz5","pad-md-150":"Box-module_pad-md-150__ZiSSa","pad-l-md-150":"Box-module_pad-l-md-150__ehMOp","pad-r-md-150":"Box-module_pad-r-md-150__AW-P5","pad-t-md-150":"Box-module_pad-t-md-150__S24AJ","pad-b-md-150":"Box-module_pad-b-md-150__zS46o","mar-md-150":"Box-module_mar-md-150__MAxjA","mar-l-md-150":"Box-module_mar-l-md-150__suMM5","mar-r-md-150":"Box-module_mar-r-md-150__cF4Zf","mar-t-md-150":"Box-module_mar-t-md-150__HHo-G","mar-b-md-150":"Box-module_mar-b-md-150__0wjEu","pad-md-200":"Box-module_pad-md-200__WvH9U","pad-l-md-200":"Box-module_pad-l-md-200__WepHY","pad-r-md-200":"Box-module_pad-r-md-200__jG-ts","pad-t-md-200":"Box-module_pad-t-md-200__mDTYL","pad-b-md-200":"Box-module_pad-b-md-200__kF6Fx","mar-md-200":"Box-module_mar-md-200__Z31KB","mar-l-md-200":"Box-module_mar-l-md-200__jeQBI","mar-r-md-200":"Box-module_mar-r-md-200__ZVDon","mar-t-md-200":"Box-module_mar-t-md-200__8hs5D","mar-b-md-200":"Box-module_mar-b-md-200__hN2ws","pad-md-250":"Box-module_pad-md-250__b2l66","pad-l-md-250":"Box-module_pad-l-md-250__ewgDN","pad-r-md-250":"Box-module_pad-r-md-250__y8m12","pad-t-md-250":"Box-module_pad-t-md-250__p-Rv5","pad-b-md-250":"Box-module_pad-b-md-250__Q-z5F","mar-md-250":"Box-module_mar-md-250__nbaaR","mar-l-md-250":"Box-module_mar-l-md-250__n8Y0P","mar-r-md-250":"Box-module_mar-r-md-250__NpcSm","mar-t-md-250":"Box-module_mar-t-md-250__fG4K8","mar-b-md-250":"Box-module_mar-b-md-250__gk3-g","pad-md-300":"Box-module_pad-md-300__fC3Lb","pad-l-md-300":"Box-module_pad-l-md-300__gdVPU","pad-r-md-300":"Box-module_pad-r-md-300__u1qKW","pad-t-md-300":"Box-module_pad-t-md-300__reVs7","pad-b-md-300":"Box-module_pad-b-md-300__ZPItG","mar-md-300":"Box-module_mar-md-300__dSqY5","mar-l-md-300":"Box-module_mar-l-md-300__YR4m3","mar-r-md-300":"Box-module_mar-r-md-300__xIQnX","mar-t-md-300":"Box-module_mar-t-md-300__HRdPH","mar-b-md-300":"Box-module_mar-b-md-300__2MWz5","pad-md-400":"Box-module_pad-md-400__DO7K1","pad-l-md-400":"Box-module_pad-l-md-400__s9Lgx","pad-r-md-400":"Box-module_pad-r-md-400__2pLXU","pad-t-md-400":"Box-module_pad-t-md-400__0pyOp","pad-b-md-400":"Box-module_pad-b-md-400__VOq5y","mar-md-400":"Box-module_mar-md-400__5hEKr","mar-l-md-400":"Box-module_mar-l-md-400__UB5SY","mar-r-md-400":"Box-module_mar-r-md-400__5Hhol","mar-t-md-400":"Box-module_mar-t-md-400__C8be-","mar-b-md-400":"Box-module_mar-b-md-400__DfNhS","pad-md-500":"Box-module_pad-md-500__xAsKQ","pad-l-md-500":"Box-module_pad-l-md-500__dQXlc","pad-r-md-500":"Box-module_pad-r-md-500__Veqg8","pad-t-md-500":"Box-module_pad-t-md-500__vjvcU","pad-b-md-500":"Box-module_pad-b-md-500__2-NI-","mar-md-500":"Box-module_mar-md-500__3KQye","mar-l-md-500":"Box-module_mar-l-md-500__AeoiY","mar-r-md-500":"Box-module_mar-r-md-500__3NM-7","mar-t-md-500":"Box-module_mar-t-md-500__jg6mn","mar-b-md-500":"Box-module_mar-b-md-500__NPqO1","pad-md-600":"Box-module_pad-md-600__1lTs3","pad-l-md-600":"Box-module_pad-l-md-600__Mw3or","pad-r-md-600":"Box-module_pad-r-md-600__DlbwC","pad-t-md-600":"Box-module_pad-t-md-600__1iTlC","pad-b-md-600":"Box-module_pad-b-md-600__yDmHf","mar-md-600":"Box-module_mar-md-600__H16-Z","mar-l-md-600":"Box-module_mar-l-md-600__zEPnV","mar-r-md-600":"Box-module_mar-r-md-600__MK7fN","mar-t-md-600":"Box-module_mar-t-md-600__mgZy-","mar-b-md-600":"Box-module_mar-b-md-600__TkvOt","pad-md-700":"Box-module_pad-md-700__DBR18","pad-l-md-700":"Box-module_pad-l-md-700__GoOcV","pad-r-md-700":"Box-module_pad-r-md-700__WYdtu","pad-t-md-700":"Box-module_pad-t-md-700__BfsO7","pad-b-md-700":"Box-module_pad-b-md-700__o4OwX","mar-md-700":"Box-module_mar-md-700__Pvd0y","mar-l-md-700":"Box-module_mar-l-md-700__NU14a","mar-r-md-700":"Box-module_mar-r-md-700__QG6vW","mar-t-md-700":"Box-module_mar-t-md-700__D29Qi","mar-b-md-700":"Box-module_mar-b-md-700__u1a2N","pad-md-800":"Box-module_pad-md-800__ulB-3","pad-l-md-800":"Box-module_pad-l-md-800__yy7lT","pad-r-md-800":"Box-module_pad-r-md-800__lSPjv","pad-t-md-800":"Box-module_pad-t-md-800__SrS1r","pad-b-md-800":"Box-module_pad-b-md-800__AmUrM","mar-md-800":"Box-module_mar-md-800__SyQ25","mar-l-md-800":"Box-module_mar-l-md-800__Zxle7","mar-r-md-800":"Box-module_mar-r-md-800__BHhC6","mar-t-md-800":"Box-module_mar-t-md-800__Us5Nx","mar-b-md-800":"Box-module_mar-b-md-800__ZHjqd","pad-md-900":"Box-module_pad-md-900__tZJ-Z","pad-l-md-900":"Box-module_pad-l-md-900__6nUgS","pad-r-md-900":"Box-module_pad-r-md-900__Z6zj5","pad-t-md-900":"Box-module_pad-t-md-900__BSSg7","pad-b-md-900":"Box-module_pad-b-md-900__WNI2K","mar-md-900":"Box-module_mar-md-900__02D4i","mar-l-md-900":"Box-module_mar-l-md-900__u0vns","mar-r-md-900":"Box-module_mar-r-md-900__3zP52","mar-t-md-900":"Box-module_mar-t-md-900__z-wTt","mar-b-md-900":"Box-module_mar-b-md-900__BrhAm","color-md-neutral-100":"Box-module_color-md-neutral-100__OQvG6","bgc-md-neutral-100":"Box-module_bgc-md-neutral-100__HcI7-","bdc-md-neutral-100":"Box-module_bdc-md-neutral-100__2S4w4","color-md-neutral-200":"Box-module_color-md-neutral-200__K30Zf","bgc-md-neutral-200":"Box-module_bgc-md-neutral-200__Oq8Ga","bdc-md-neutral-200":"Box-module_bdc-md-neutral-200__Kz-5C","color-md-neutral-400":"Box-module_color-md-neutral-400__IeIa2","bgc-md-neutral-400":"Box-module_bgc-md-neutral-400__TDcGl","bdc-md-neutral-400":"Box-module_bdc-md-neutral-400__vAZjI","color-md-neutral-600":"Box-module_color-md-neutral-600__sJ7qz","bgc-md-neutral-600":"Box-module_bgc-md-neutral-600__LSCV5","bdc-md-neutral-600":"Box-module_bdc-md-neutral-600__I1hsQ","color-md-neutral-800":"Box-module_color-md-neutral-800__ImcA4","bgc-md-neutral-800":"Box-module_bgc-md-neutral-800__Q6EbN","bdc-md-neutral-800":"Box-module_bdc-md-neutral-800__5h5Kp","color-md-neutral-black":"Box-module_color-md-neutral-black__FuoIU","bgc-md-neutral-black":"Box-module_bgc-md-neutral-black__nfcSw","bdc-md-neutral-black":"Box-module_bdc-md-neutral-black__pzGpt","color-md-neutral-white":"Box-module_color-md-neutral-white__eI6fS","bgc-md-neutral-white":"Box-module_bgc-md-neutral-white__VaDpg","bdc-md-neutral-white":"Box-module_bdc-md-neutral-white__iXyzs","color-md-urgent-600":"Box-module_color-md-urgent-600__LNx5l","bgc-md-urgent-600":"Box-module_bgc-md-urgent-600__U-TrS","bdc-md-urgent-600":"Box-module_bdc-md-urgent-600__r-vl-","color-md-urgent-900":"Box-module_color-md-urgent-900__322dY","bgc-md-urgent-900":"Box-module_bgc-md-urgent-900__v8pLL","bdc-md-urgent-900":"Box-module_bdc-md-urgent-900__2Lt3A","color-md-moderate-900":"Box-module_color-md-moderate-900__JAIAj","bgc-md-moderate-900":"Box-module_bgc-md-moderate-900__yK5JF","bdc-md-moderate-900":"Box-module_bdc-md-moderate-900__UkyBP","color-md-passive-800":"Box-module_color-md-passive-800__LP9-J","bgc-md-passive-800":"Box-module_bgc-md-passive-800__oBf-r","bdc-md-passive-800":"Box-module_bdc-md-passive-800__XeZ4o","color-md-active-800":"Box-module_color-md-active-800__JKPjD","bgc-md-active-800":"Box-module_bgc-md-active-800__br2AS","bdc-md-active-800":"Box-module_bdc-md-active-800__Jh2iY","pad-lg-25":"Box-module_pad-lg-25__RjQIa","pad-l-lg-25":"Box-module_pad-l-lg-25__3TEvs","pad-r-lg-25":"Box-module_pad-r-lg-25__GGAyW","pad-t-lg-25":"Box-module_pad-t-lg-25__tEwtZ","pad-b-lg-25":"Box-module_pad-b-lg-25__vJUKv","mar-lg-25":"Box-module_mar-lg-25__1jEV7","mar-l-lg-25":"Box-module_mar-l-lg-25__xSTrV","mar-r-lg-25":"Box-module_mar-r-lg-25__0L8-f","mar-t-lg-25":"Box-module_mar-t-lg-25__TRMP1","mar-b-lg-25":"Box-module_mar-b-lg-25__CXXn7","pad-lg-50":"Box-module_pad-lg-50__b3ioH","pad-l-lg-50":"Box-module_pad-l-lg-50__CWbcv","pad-r-lg-50":"Box-module_pad-r-lg-50__A12Cm","pad-t-lg-50":"Box-module_pad-t-lg-50__FN-I1","pad-b-lg-50":"Box-module_pad-b-lg-50__nKgci","mar-lg-50":"Box-module_mar-lg-50__4Zde7","mar-l-lg-50":"Box-module_mar-l-lg-50__W-vF-","mar-r-lg-50":"Box-module_mar-r-lg-50__ZvKWS","mar-t-lg-50":"Box-module_mar-t-lg-50__YyH-C","mar-b-lg-50":"Box-module_mar-b-lg-50__etqWg","pad-lg-75":"Box-module_pad-lg-75__ejKi6","pad-l-lg-75":"Box-module_pad-l-lg-75__E5ggL","pad-r-lg-75":"Box-module_pad-r-lg-75__RJsdV","pad-t-lg-75":"Box-module_pad-t-lg-75__e93nZ","pad-b-lg-75":"Box-module_pad-b-lg-75__HAxo8","mar-lg-75":"Box-module_mar-lg-75__lNVik","mar-l-lg-75":"Box-module_mar-l-lg-75__rdaYQ","mar-r-lg-75":"Box-module_mar-r-lg-75__RkQOH","mar-t-lg-75":"Box-module_mar-t-lg-75__NVTpr","mar-b-lg-75":"Box-module_mar-b-lg-75__167JT","pad-lg-100":"Box-module_pad-lg-100__Jlfwb","pad-l-lg-100":"Box-module_pad-l-lg-100__-fC-T","pad-r-lg-100":"Box-module_pad-r-lg-100__2MA56","pad-t-lg-100":"Box-module_pad-t-lg-100__f-d29","pad-b-lg-100":"Box-module_pad-b-lg-100__HU32J","mar-lg-100":"Box-module_mar-lg-100__RWOSh","mar-l-lg-100":"Box-module_mar-l-lg-100__ViRad","mar-r-lg-100":"Box-module_mar-r-lg-100__qfd2m","mar-t-lg-100":"Box-module_mar-t-lg-100__8J4uf","mar-b-lg-100":"Box-module_mar-b-lg-100__PVWUV","pad-lg-125":"Box-module_pad-lg-125__-3MAZ","pad-l-lg-125":"Box-module_pad-l-lg-125__LPwHR","pad-r-lg-125":"Box-module_pad-r-lg-125__JFdHA","pad-t-lg-125":"Box-module_pad-t-lg-125__zo-B6","pad-b-lg-125":"Box-module_pad-b-lg-125__inh5B","mar-lg-125":"Box-module_mar-lg-125__Q4Iyq","mar-l-lg-125":"Box-module_mar-l-lg-125__NFMhL","mar-r-lg-125":"Box-module_mar-r-lg-125__WPZay","mar-t-lg-125":"Box-module_mar-t-lg-125__SUI3o","mar-b-lg-125":"Box-module_mar-b-lg-125__rkZqg","pad-lg-150":"Box-module_pad-lg-150__TJwyW","pad-l-lg-150":"Box-module_pad-l-lg-150__TAn-g","pad-r-lg-150":"Box-module_pad-r-lg-150__D-eeU","pad-t-lg-150":"Box-module_pad-t-lg-150__AtNex","pad-b-lg-150":"Box-module_pad-b-lg-150__aSEKP","mar-lg-150":"Box-module_mar-lg-150__n4uat","mar-l-lg-150":"Box-module_mar-l-lg-150__3LOn5","mar-r-lg-150":"Box-module_mar-r-lg-150__Gi628","mar-t-lg-150":"Box-module_mar-t-lg-150__8RFdR","mar-b-lg-150":"Box-module_mar-b-lg-150__EmZZt","pad-lg-200":"Box-module_pad-lg-200__Kxlzl","pad-l-lg-200":"Box-module_pad-l-lg-200__NpypF","pad-r-lg-200":"Box-module_pad-r-lg-200__4JkEk","pad-t-lg-200":"Box-module_pad-t-lg-200__B3hFk","pad-b-lg-200":"Box-module_pad-b-lg-200__7-R0m","mar-lg-200":"Box-module_mar-lg-200__WcGcN","mar-l-lg-200":"Box-module_mar-l-lg-200__hlI7P","mar-r-lg-200":"Box-module_mar-r-lg-200__XgyF3","mar-t-lg-200":"Box-module_mar-t-lg-200__XbAA2","mar-b-lg-200":"Box-module_mar-b-lg-200__ue2KE","pad-lg-250":"Box-module_pad-lg-250__a-Gom","pad-l-lg-250":"Box-module_pad-l-lg-250__IEx8z","pad-r-lg-250":"Box-module_pad-r-lg-250__pgrhW","pad-t-lg-250":"Box-module_pad-t-lg-250__TnUAo","pad-b-lg-250":"Box-module_pad-b-lg-250__CO1Kr","mar-lg-250":"Box-module_mar-lg-250__6ceHX","mar-l-lg-250":"Box-module_mar-l-lg-250__F7CjM","mar-r-lg-250":"Box-module_mar-r-lg-250__TANV6","mar-t-lg-250":"Box-module_mar-t-lg-250__M19YZ","mar-b-lg-250":"Box-module_mar-b-lg-250__-ZoRR","pad-lg-300":"Box-module_pad-lg-300__GhyY7","pad-l-lg-300":"Box-module_pad-l-lg-300__IBQ-S","pad-r-lg-300":"Box-module_pad-r-lg-300__AOXm9","pad-t-lg-300":"Box-module_pad-t-lg-300__T3iaa","pad-b-lg-300":"Box-module_pad-b-lg-300__dL5Bo","mar-lg-300":"Box-module_mar-lg-300__i6Bf7","mar-l-lg-300":"Box-module_mar-l-lg-300__maHKn","mar-r-lg-300":"Box-module_mar-r-lg-300__uTdNd","mar-t-lg-300":"Box-module_mar-t-lg-300__1SNel","mar-b-lg-300":"Box-module_mar-b-lg-300__XStJA","pad-lg-400":"Box-module_pad-lg-400__2QesQ","pad-l-lg-400":"Box-module_pad-l-lg-400__ZqK0e","pad-r-lg-400":"Box-module_pad-r-lg-400__ZxLgv","pad-t-lg-400":"Box-module_pad-t-lg-400__jWB8d","pad-b-lg-400":"Box-module_pad-b-lg-400__8U0zy","mar-lg-400":"Box-module_mar-lg-400__1nLEa","mar-l-lg-400":"Box-module_mar-l-lg-400__-fi6d","mar-r-lg-400":"Box-module_mar-r-lg-400__0lRVA","mar-t-lg-400":"Box-module_mar-t-lg-400__q6hwC","mar-b-lg-400":"Box-module_mar-b-lg-400__rP37A","pad-lg-500":"Box-module_pad-lg-500__Qrl7G","pad-l-lg-500":"Box-module_pad-l-lg-500__feRBC","pad-r-lg-500":"Box-module_pad-r-lg-500__DnXHP","pad-t-lg-500":"Box-module_pad-t-lg-500__oSf2l","pad-b-lg-500":"Box-module_pad-b-lg-500__0acXZ","mar-lg-500":"Box-module_mar-lg-500__lrlU9","mar-l-lg-500":"Box-module_mar-l-lg-500__dvMqU","mar-r-lg-500":"Box-module_mar-r-lg-500__0-YPQ","mar-t-lg-500":"Box-module_mar-t-lg-500__pT4-9","mar-b-lg-500":"Box-module_mar-b-lg-500__NFcWh","pad-lg-600":"Box-module_pad-lg-600__RrEeT","pad-l-lg-600":"Box-module_pad-l-lg-600__ChbB4","pad-r-lg-600":"Box-module_pad-r-lg-600__mT2q7","pad-t-lg-600":"Box-module_pad-t-lg-600__wrVM-","pad-b-lg-600":"Box-module_pad-b-lg-600__29gJj","mar-lg-600":"Box-module_mar-lg-600__Q7WqL","mar-l-lg-600":"Box-module_mar-l-lg-600__FBjHW","mar-r-lg-600":"Box-module_mar-r-lg-600__zyQVR","mar-t-lg-600":"Box-module_mar-t-lg-600__nvr9B","mar-b-lg-600":"Box-module_mar-b-lg-600__YY3uK","pad-lg-700":"Box-module_pad-lg-700__NCvMj","pad-l-lg-700":"Box-module_pad-l-lg-700__vCy50","pad-r-lg-700":"Box-module_pad-r-lg-700__iGz7l","pad-t-lg-700":"Box-module_pad-t-lg-700__EoR5J","pad-b-lg-700":"Box-module_pad-b-lg-700__7qpO8","mar-lg-700":"Box-module_mar-lg-700__-0NUw","mar-l-lg-700":"Box-module_mar-l-lg-700__AkLxM","mar-r-lg-700":"Box-module_mar-r-lg-700__qWBUQ","mar-t-lg-700":"Box-module_mar-t-lg-700__svQ8a","mar-b-lg-700":"Box-module_mar-b-lg-700__ZMHk-","pad-lg-800":"Box-module_pad-lg-800__-qax9","pad-l-lg-800":"Box-module_pad-l-lg-800__Nmu9L","pad-r-lg-800":"Box-module_pad-r-lg-800__ypyKa","pad-t-lg-800":"Box-module_pad-t-lg-800__Ry0Vs","pad-b-lg-800":"Box-module_pad-b-lg-800__4IT-q","mar-lg-800":"Box-module_mar-lg-800__aW-Th","mar-l-lg-800":"Box-module_mar-l-lg-800__M-87i","mar-r-lg-800":"Box-module_mar-r-lg-800__OMPGC","mar-t-lg-800":"Box-module_mar-t-lg-800__PPKAF","mar-b-lg-800":"Box-module_mar-b-lg-800__rar8o","pad-lg-900":"Box-module_pad-lg-900__7ATfN","pad-l-lg-900":"Box-module_pad-l-lg-900__8imHE","pad-r-lg-900":"Box-module_pad-r-lg-900__e9qrR","pad-t-lg-900":"Box-module_pad-t-lg-900__93A4g","pad-b-lg-900":"Box-module_pad-b-lg-900__4lMkQ","mar-lg-900":"Box-module_mar-lg-900__ab5lB","mar-l-lg-900":"Box-module_mar-l-lg-900__QemIg","mar-r-lg-900":"Box-module_mar-r-lg-900__I-fD-","mar-t-lg-900":"Box-module_mar-t-lg-900__LKUwM","mar-b-lg-900":"Box-module_mar-b-lg-900__vnSL2","color-lg-neutral-100":"Box-module_color-lg-neutral-100__T1eMa","bgc-lg-neutral-100":"Box-module_bgc-lg-neutral-100__tOBzF","bdc-lg-neutral-100":"Box-module_bdc-lg-neutral-100__yjTbJ","color-lg-neutral-200":"Box-module_color-lg-neutral-200__ayOw7","bgc-lg-neutral-200":"Box-module_bgc-lg-neutral-200__nxxwb","bdc-lg-neutral-200":"Box-module_bdc-lg-neutral-200__Yh3Ci","color-lg-neutral-400":"Box-module_color-lg-neutral-400__4R90W","bgc-lg-neutral-400":"Box-module_bgc-lg-neutral-400__WMQdL","bdc-lg-neutral-400":"Box-module_bdc-lg-neutral-400__spSr0","color-lg-neutral-600":"Box-module_color-lg-neutral-600__4zLAi","bgc-lg-neutral-600":"Box-module_bgc-lg-neutral-600__SxiyI","bdc-lg-neutral-600":"Box-module_bdc-lg-neutral-600__Fr0rl","color-lg-neutral-800":"Box-module_color-lg-neutral-800__ecXKG","bgc-lg-neutral-800":"Box-module_bgc-lg-neutral-800__ydTRF","bdc-lg-neutral-800":"Box-module_bdc-lg-neutral-800__DuMcJ","color-lg-neutral-black":"Box-module_color-lg-neutral-black__RXvfq","bgc-lg-neutral-black":"Box-module_bgc-lg-neutral-black__rAZS2","bdc-lg-neutral-black":"Box-module_bdc-lg-neutral-black__AA7db","color-lg-neutral-white":"Box-module_color-lg-neutral-white__9oUDt","bgc-lg-neutral-white":"Box-module_bgc-lg-neutral-white__dZxte","bdc-lg-neutral-white":"Box-module_bdc-lg-neutral-white__mnJN-","color-lg-urgent-600":"Box-module_color-lg-urgent-600__ighw-","bgc-lg-urgent-600":"Box-module_bgc-lg-urgent-600__5EYwN","bdc-lg-urgent-600":"Box-module_bdc-lg-urgent-600__80YEP","color-lg-urgent-900":"Box-module_color-lg-urgent-900__FlTjx","bgc-lg-urgent-900":"Box-module_bgc-lg-urgent-900__--4mH","bdc-lg-urgent-900":"Box-module_bdc-lg-urgent-900__1IBgo","color-lg-moderate-900":"Box-module_color-lg-moderate-900__hSuCX","bgc-lg-moderate-900":"Box-module_bgc-lg-moderate-900__WLFha","bdc-lg-moderate-900":"Box-module_bdc-lg-moderate-900__GG-zc","color-lg-passive-800":"Box-module_color-lg-passive-800__U4eTG","bgc-lg-passive-800":"Box-module_bgc-lg-passive-800__JwBSL","bdc-lg-passive-800":"Box-module_bdc-lg-passive-800__5iLJv","color-lg-active-800":"Box-module_color-lg-active-800__NGJ3r","bgc-lg-active-800":"Box-module_bgc-lg-active-800__wHydX","bdc-lg-active-800":"Box-module_bdc-lg-active-800__36Ath","pad-sm-25":"Box-module_pad-sm-25__8NGtM","pad-l-sm-25":"Box-module_pad-l-sm-25__YnJbu","pad-r-sm-25":"Box-module_pad-r-sm-25__ymVHz","pad-t-sm-25":"Box-module_pad-t-sm-25__aI6Xz","pad-b-sm-25":"Box-module_pad-b-sm-25__-uWt8","mar-sm-25":"Box-module_mar-sm-25__LOfXc","mar-l-sm-25":"Box-module_mar-l-sm-25__0bOsb","mar-r-sm-25":"Box-module_mar-r-sm-25__7hrDC","mar-t-sm-25":"Box-module_mar-t-sm-25__Ya0PV","mar-b-sm-25":"Box-module_mar-b-sm-25__I53ay","pad-sm-50":"Box-module_pad-sm-50__Q-ufo","pad-l-sm-50":"Box-module_pad-l-sm-50__NydjQ","pad-r-sm-50":"Box-module_pad-r-sm-50__83b1Z","pad-t-sm-50":"Box-module_pad-t-sm-50__ZR9ks","pad-b-sm-50":"Box-module_pad-b-sm-50__2iIjo","mar-sm-50":"Box-module_mar-sm-50__VvNXI","mar-l-sm-50":"Box-module_mar-l-sm-50__Vwoel","mar-r-sm-50":"Box-module_mar-r-sm-50__LTyB4","mar-t-sm-50":"Box-module_mar-t-sm-50__JkeZq","mar-b-sm-50":"Box-module_mar-b-sm-50__y47wo","pad-sm-75":"Box-module_pad-sm-75__u8zWE","pad-l-sm-75":"Box-module_pad-l-sm-75__4EQR-","pad-r-sm-75":"Box-module_pad-r-sm-75__fiWDS","pad-t-sm-75":"Box-module_pad-t-sm-75__6WLMl","pad-b-sm-75":"Box-module_pad-b-sm-75__PvKDa","mar-sm-75":"Box-module_mar-sm-75__0Tgtc","mar-l-sm-75":"Box-module_mar-l-sm-75__8XC-e","mar-r-sm-75":"Box-module_mar-r-sm-75__m4J2j","mar-t-sm-75":"Box-module_mar-t-sm-75__aVkp7","mar-b-sm-75":"Box-module_mar-b-sm-75__ESF-J","pad-sm-100":"Box-module_pad-sm-100__LPvoD","pad-l-sm-100":"Box-module_pad-l-sm-100__s-z16","pad-r-sm-100":"Box-module_pad-r-sm-100__ZCmfn","pad-t-sm-100":"Box-module_pad-t-sm-100__NiR39","pad-b-sm-100":"Box-module_pad-b-sm-100__mT8UA","mar-sm-100":"Box-module_mar-sm-100__A-zAP","mar-l-sm-100":"Box-module_mar-l-sm-100__WFGTP","mar-r-sm-100":"Box-module_mar-r-sm-100__6x-UW","mar-t-sm-100":"Box-module_mar-t-sm-100__-q6ne","mar-b-sm-100":"Box-module_mar-b-sm-100__wdUXk","pad-sm-125":"Box-module_pad-sm-125__-xoyS","pad-l-sm-125":"Box-module_pad-l-sm-125__Y2c2q","pad-r-sm-125":"Box-module_pad-r-sm-125__Qgz-O","pad-t-sm-125":"Box-module_pad-t-sm-125__IbufI","pad-b-sm-125":"Box-module_pad-b-sm-125__TQHdW","mar-sm-125":"Box-module_mar-sm-125__WJilS","mar-l-sm-125":"Box-module_mar-l-sm-125__3X7Ec","mar-r-sm-125":"Box-module_mar-r-sm-125__xh9z9","mar-t-sm-125":"Box-module_mar-t-sm-125__1z-ET","mar-b-sm-125":"Box-module_mar-b-sm-125__wrIR1","pad-sm-150":"Box-module_pad-sm-150__4uk7L","pad-l-sm-150":"Box-module_pad-l-sm-150__zWIEb","pad-r-sm-150":"Box-module_pad-r-sm-150__hTc5p","pad-t-sm-150":"Box-module_pad-t-sm-150__KVgmb","pad-b-sm-150":"Box-module_pad-b-sm-150__9Gwk9","mar-sm-150":"Box-module_mar-sm-150__wzLMi","mar-l-sm-150":"Box-module_mar-l-sm-150__PEB-5","mar-r-sm-150":"Box-module_mar-r-sm-150__S36Rn","mar-t-sm-150":"Box-module_mar-t-sm-150__ypRfh","mar-b-sm-150":"Box-module_mar-b-sm-150__oJKCQ","pad-sm-200":"Box-module_pad-sm-200__RK1Yy","pad-l-sm-200":"Box-module_pad-l-sm-200__t6sYZ","pad-r-sm-200":"Box-module_pad-r-sm-200__4-nr-","pad-t-sm-200":"Box-module_pad-t-sm-200__uiPsj","pad-b-sm-200":"Box-module_pad-b-sm-200__1B9Ie","mar-sm-200":"Box-module_mar-sm-200__K1xnv","mar-l-sm-200":"Box-module_mar-l-sm-200__SENYG","mar-r-sm-200":"Box-module_mar-r-sm-200__77NUU","mar-t-sm-200":"Box-module_mar-t-sm-200__YHWAc","mar-b-sm-200":"Box-module_mar-b-sm-200__gANcN","pad-sm-250":"Box-module_pad-sm-250__v62RM","pad-l-sm-250":"Box-module_pad-l-sm-250__-8F74","pad-r-sm-250":"Box-module_pad-r-sm-250__VQ8K-","pad-t-sm-250":"Box-module_pad-t-sm-250__hi00h","pad-b-sm-250":"Box-module_pad-b-sm-250__aRcx3","mar-sm-250":"Box-module_mar-sm-250__tJ0jw","mar-l-sm-250":"Box-module_mar-l-sm-250__TrqkQ","mar-r-sm-250":"Box-module_mar-r-sm-250__pMiLc","mar-t-sm-250":"Box-module_mar-t-sm-250__2wrsO","mar-b-sm-250":"Box-module_mar-b-sm-250__ltvw9","pad-sm-300":"Box-module_pad-sm-300__VYAh8","pad-l-sm-300":"Box-module_pad-l-sm-300__tP6LW","pad-r-sm-300":"Box-module_pad-r-sm-300__-1Ilq","pad-t-sm-300":"Box-module_pad-t-sm-300__ehVj4","pad-b-sm-300":"Box-module_pad-b-sm-300__T4T-o","mar-sm-300":"Box-module_mar-sm-300__m0Q7f","mar-l-sm-300":"Box-module_mar-l-sm-300__odTHA","mar-r-sm-300":"Box-module_mar-r-sm-300__udUxW","mar-t-sm-300":"Box-module_mar-t-sm-300__mt64F","mar-b-sm-300":"Box-module_mar-b-sm-300__aK9nL","pad-sm-400":"Box-module_pad-sm-400__4GWHS","pad-l-sm-400":"Box-module_pad-l-sm-400__tC4oh","pad-r-sm-400":"Box-module_pad-r-sm-400__iYpPs","pad-t-sm-400":"Box-module_pad-t-sm-400__ePGwo","pad-b-sm-400":"Box-module_pad-b-sm-400__dOFWY","mar-sm-400":"Box-module_mar-sm-400__uNWtz","mar-l-sm-400":"Box-module_mar-l-sm-400__SQ28o","mar-r-sm-400":"Box-module_mar-r-sm-400__Esotc","mar-t-sm-400":"Box-module_mar-t-sm-400__dvofL","mar-b-sm-400":"Box-module_mar-b-sm-400__T739w","pad-sm-500":"Box-module_pad-sm-500__XxE5X","pad-l-sm-500":"Box-module_pad-l-sm-500__iuwGK","pad-r-sm-500":"Box-module_pad-r-sm-500__C63bI","pad-t-sm-500":"Box-module_pad-t-sm-500__Mnmnf","pad-b-sm-500":"Box-module_pad-b-sm-500__WRlez","mar-sm-500":"Box-module_mar-sm-500__2P9yU","mar-l-sm-500":"Box-module_mar-l-sm-500__DVD4k","mar-r-sm-500":"Box-module_mar-r-sm-500__z6cGY","mar-t-sm-500":"Box-module_mar-t-sm-500__kVSs6","mar-b-sm-500":"Box-module_mar-b-sm-500__2uY9X","pad-sm-600":"Box-module_pad-sm-600__8XOpq","pad-l-sm-600":"Box-module_pad-l-sm-600__MbAql","pad-r-sm-600":"Box-module_pad-r-sm-600__tR-J3","pad-t-sm-600":"Box-module_pad-t-sm-600__TB6Vf","pad-b-sm-600":"Box-module_pad-b-sm-600__ruD4b","mar-sm-600":"Box-module_mar-sm-600__LYA5B","mar-l-sm-600":"Box-module_mar-l-sm-600__ijccf","mar-r-sm-600":"Box-module_mar-r-sm-600__t9Ba6","mar-t-sm-600":"Box-module_mar-t-sm-600__VemJS","mar-b-sm-600":"Box-module_mar-b-sm-600__2XMlq","pad-sm-700":"Box-module_pad-sm-700__mGz-A","pad-l-sm-700":"Box-module_pad-l-sm-700__S1prR","pad-r-sm-700":"Box-module_pad-r-sm-700__Cofu1","pad-t-sm-700":"Box-module_pad-t-sm-700__XKfi0","pad-b-sm-700":"Box-module_pad-b-sm-700__3XhHD","mar-sm-700":"Box-module_mar-sm-700__WnI4t","mar-l-sm-700":"Box-module_mar-l-sm-700__C-soZ","mar-r-sm-700":"Box-module_mar-r-sm-700__Plyj-","mar-t-sm-700":"Box-module_mar-t-sm-700__X1APe","mar-b-sm-700":"Box-module_mar-b-sm-700__6Kt4F","pad-sm-800":"Box-module_pad-sm-800__ei3AZ","pad-l-sm-800":"Box-module_pad-l-sm-800__idgz4","pad-r-sm-800":"Box-module_pad-r-sm-800__AmxXG","pad-t-sm-800":"Box-module_pad-t-sm-800__-uaCu","pad-b-sm-800":"Box-module_pad-b-sm-800__-zm03","mar-sm-800":"Box-module_mar-sm-800__oWLjW","mar-l-sm-800":"Box-module_mar-l-sm-800__Ldt2E","mar-r-sm-800":"Box-module_mar-r-sm-800__9K3Nt","mar-t-sm-800":"Box-module_mar-t-sm-800__PmqYv","mar-b-sm-800":"Box-module_mar-b-sm-800__BpPwi","pad-sm-900":"Box-module_pad-sm-900__Ak7pk","pad-l-sm-900":"Box-module_pad-l-sm-900__nxxoV","pad-r-sm-900":"Box-module_pad-r-sm-900__no85G","pad-t-sm-900":"Box-module_pad-t-sm-900__nOXAp","pad-b-sm-900":"Box-module_pad-b-sm-900__tm9Td","mar-sm-900":"Box-module_mar-sm-900__yNHcT","mar-l-sm-900":"Box-module_mar-l-sm-900__oXFwM","mar-r-sm-900":"Box-module_mar-r-sm-900__VYzsF","mar-t-sm-900":"Box-module_mar-t-sm-900__bgMQ4","mar-b-sm-900":"Box-module_mar-b-sm-900__zcZHe","color-sm-neutral-100":"Box-module_color-sm-neutral-100__FiZii","bgc-sm-neutral-100":"Box-module_bgc-sm-neutral-100__0Q-lV","bdc-sm-neutral-100":"Box-module_bdc-sm-neutral-100__FARNn","color-sm-neutral-200":"Box-module_color-sm-neutral-200__iJJmq","bgc-sm-neutral-200":"Box-module_bgc-sm-neutral-200__nrStg","bdc-sm-neutral-200":"Box-module_bdc-sm-neutral-200__XQpTi","color-sm-neutral-400":"Box-module_color-sm-neutral-400__n2je-","bgc-sm-neutral-400":"Box-module_bgc-sm-neutral-400__3LP-X","bdc-sm-neutral-400":"Box-module_bdc-sm-neutral-400__9tDpb","color-sm-neutral-600":"Box-module_color-sm-neutral-600__W-Un1","bgc-sm-neutral-600":"Box-module_bgc-sm-neutral-600__HGadW","bdc-sm-neutral-600":"Box-module_bdc-sm-neutral-600__-D1oj","color-sm-neutral-800":"Box-module_color-sm-neutral-800__DSzZ2","bgc-sm-neutral-800":"Box-module_bgc-sm-neutral-800__sXosM","bdc-sm-neutral-800":"Box-module_bdc-sm-neutral-800__BpPJa","color-sm-neutral-black":"Box-module_color-sm-neutral-black__4rZEp","bgc-sm-neutral-black":"Box-module_bgc-sm-neutral-black__cksp1","bdc-sm-neutral-black":"Box-module_bdc-sm-neutral-black__pqE-3","color-sm-neutral-white":"Box-module_color-sm-neutral-white__jQDk6","bgc-sm-neutral-white":"Box-module_bgc-sm-neutral-white__9hW6v","bdc-sm-neutral-white":"Box-module_bdc-sm-neutral-white__p6BhL","color-sm-urgent-600":"Box-module_color-sm-urgent-600__0m2DW","bgc-sm-urgent-600":"Box-module_bgc-sm-urgent-600__QOoce","bdc-sm-urgent-600":"Box-module_bdc-sm-urgent-600__XvF86","color-sm-urgent-900":"Box-module_color-sm-urgent-900__vkGOR","bgc-sm-urgent-900":"Box-module_bgc-sm-urgent-900__YbDPH","bdc-sm-urgent-900":"Box-module_bdc-sm-urgent-900__9Mgl9","color-sm-moderate-900":"Box-module_color-sm-moderate-900__3Z9FI","bgc-sm-moderate-900":"Box-module_bgc-sm-moderate-900__sM0oZ","bdc-sm-moderate-900":"Box-module_bdc-sm-moderate-900__PT8Fh","color-sm-passive-800":"Box-module_color-sm-passive-800__4h2k3","bgc-sm-passive-800":"Box-module_bgc-sm-passive-800__XdxDB","bdc-sm-passive-800":"Box-module_bdc-sm-passive-800__RwWBh","color-sm-active-800":"Box-module_color-sm-active-800__6zPvw","bgc-sm-active-800":"Box-module_bgc-sm-active-800__8myc0","bdc-sm-active-800":"Box-module_bdc-sm-active-800__YqUUp"};

function getPropClasses(value, prefix) {
  // if passed a single value
  if (typeof value === 'number' || typeof value === 'string') {
    return styles$a[`${prefix}-${value}`];
  }
  // otherwise return a class for each breakpoint
  if (value && typeof value === 'object') {
    return [styles$a[`${prefix}-sm-${value.sm}`], styles$a[`${prefix}-md-${value.md}`], styles$a[`${prefix}-lg-${value.lg}`]];
  }
  return undefined;
}
const Box = /*#__PURE__*/React.forwardRef(function Box(props, ref) {
  const {
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      color,
      borderColor,
      backgroundColor,
      children
    } = props,
    rest = tslib.__rest(props, ["margin", "marginX", "marginY", "marginTop", "marginRight", "marginLeft", "marginBottom", "padding", "paddingX", "paddingY", "paddingTop", "paddingRight", "paddingLeft", "paddingBottom", "color", "borderColor", "backgroundColor", "children"]);
  const Tag = rest.as || 'div';
  const pt = paddingTop || paddingY;
  const pb = paddingBottom || paddingY;
  const pl = paddingLeft || paddingX;
  const pr = paddingRight || paddingX;
  const mt = marginTop || marginY;
  const mb = marginBottom || marginY;
  const ml = marginLeft || marginX;
  const mr = marginRight || marginX;
  const propClassNames = [];
  // IF the prop exists add the corresponding classNames
  padding && propClassNames.push(getPropClasses(padding, 'pad'));
  pt && propClassNames.push(getPropClasses(pt, 'pad-t'));
  pb && propClassNames.push(getPropClasses(pb, 'pad-b'));
  pl && propClassNames.push(getPropClasses(pl, 'pad-l'));
  pr && propClassNames.push(getPropClasses(pr, 'pad-r'));
  margin && propClassNames.push(getPropClasses(margin, 'mar'));
  mt && propClassNames.push(getPropClasses(mt, 'pad-t'));
  mb && propClassNames.push(getPropClasses(mb, 'pad-b'));
  ml && propClassNames.push(getPropClasses(ml, 'pad-l'));
  mr && propClassNames.push(getPropClasses(mr, 'pad-r'));
  color && propClassNames.push(getPropClasses(color, 'color'));
  backgroundColor && propClassNames.push(getPropClasses(backgroundColor, 'bgc'));
  borderColor && propClassNames.push(getPropClasses(borderColor, 'bdc'));
  const className = clsx(rest.className, ...propClassNames);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    ref: ref,
    className: className
  }), children);
});

var styles$9 = {"font":"Text-module_font__N5ad3","emphasis":"Text-module_emphasis__IuSbF","headline-display":"Text-module_headline-display__G3iBR","headline-lg":"Text-module_headline-lg__vK4xi","headline-md":"Text-module_headline-md__tliLs","headline-sm":"Text-module_headline-sm__mXLAn","body-lg":"Text-module_body-lg__HANkB","body-md":"Text-module_body-md__2DmSH","body-sm":"Text-module_body-sm__KjtQT","body-xs":"Text-module_body-xs__Ln7Ww","body-lg-paragraph":"Text-module_body-lg-paragraph__vQRYg","body-md-paragraph":"Text-module_body-md-paragraph__Yi-Wf","body-sm-paragraph":"Text-module_body-sm-paragraph__rbU1D","body-xs-paragraph":"Text-module_body-xs-paragraph__5CzEK","button-md":"Text-module_button-md__Xo9hM","lg-emphasis":"Text-module_lg-emphasis__ikZ1l","lg-headline-display":"Text-module_lg-headline-display__9ZOAS","lg-headline-lg":"Text-module_lg-headline-lg__KOaOm","lg-headline-md":"Text-module_lg-headline-md__c1VCZ","lg-headline-sm":"Text-module_lg-headline-sm__uzlzD","lg-body-lg":"Text-module_lg-body-lg__TjXpR","lg-body-md":"Text-module_lg-body-md__neysN","lg-body-sm":"Text-module_lg-body-sm__UlM-z","lg-body-xs":"Text-module_lg-body-xs__t8fGw","lg-body-lg-paragraph":"Text-module_lg-body-lg-paragraph__DAenG","lg-body-md-paragraph":"Text-module_lg-body-md-paragraph__Sk27P","lg-body-sm-paragraph":"Text-module_lg-body-sm-paragraph__czUL-","lg-body-xs-paragraph":"Text-module_lg-body-xs-paragraph__5Bkp9","lg-button-md":"Text-module_lg-button-md__h3dRu","md-emphasis":"Text-module_md-emphasis__Jf5Ej","md-headline-display":"Text-module_md-headline-display__d4jJZ","md-headline-lg":"Text-module_md-headline-lg__u1CI-","md-headline-md":"Text-module_md-headline-md__rkExD","md-headline-sm":"Text-module_md-headline-sm__XmbD3","md-body-lg":"Text-module_md-body-lg__GBmJn","md-body-md":"Text-module_md-body-md__V5XTI","md-body-sm":"Text-module_md-body-sm__ieoT0","md-body-xs":"Text-module_md-body-xs__BpV1o","md-body-lg-paragraph":"Text-module_md-body-lg-paragraph__U30v1","md-body-md-paragraph":"Text-module_md-body-md-paragraph__rpG1j","md-body-sm-paragraph":"Text-module_md-body-sm-paragraph__pQUch","md-body-xs-paragraph":"Text-module_md-body-xs-paragraph__0fa3z","md-button-md":"Text-module_md-button-md__1epM5","sm-emphasis":"Text-module_sm-emphasis__i-iQX","sm-headline-display":"Text-module_sm-headline-display__ApZcv","sm-headline-lg":"Text-module_sm-headline-lg__AfHig","sm-headline-md":"Text-module_sm-headline-md__Gb4id","sm-headline-sm":"Text-module_sm-headline-sm__pDBhB","sm-body-lg":"Text-module_sm-body-lg__m07-D","sm-body-md":"Text-module_sm-body-md__x7Rk8","sm-body-sm":"Text-module_sm-body-sm__1bEzo","sm-body-xs":"Text-module_sm-body-xs__r1lCk","sm-body-lg-paragraph":"Text-module_sm-body-lg-paragraph__H-gP1","sm-body-md-paragraph":"Text-module_sm-body-md-paragraph__e-bCQ","sm-body-sm-paragraph":"Text-module_sm-body-sm-paragraph__bzSRL","sm-body-xs-paragraph":"Text-module_sm-body-xs-paragraph__QLLsu","sm-button-md":"Text-module_sm-button-md__5xHus"};

function getParsedClassNames(value, prefix = '') {
  const variant = value.split('-emphasis')[0];
  const variantClassName = styles$9[`${prefix}${variant}`];
  const emphasisClassName = value.includes('emphasis') ? styles$9[`${prefix}emphasis`] : undefined;
  return [variantClassName, emphasisClassName];
}
function getVariantClasses$2(value) {
  if (typeof value == 'undefined') {
    return '';
  }
  if (typeof value === 'string') {
    return getParsedClassNames(value);
  }
  if (value && typeof value === 'object') {
    return [value.sm && getParsedClassNames(value.sm, 'sm-'), value.md && getParsedClassNames(value.md, 'md-'), value.lg && getParsedClassNames(value.lg, 'lg-')];
  }
  return undefined;
}
const Text = /*#__PURE__*/React.forwardRef(function Text(_a, ref) {
  var {
      as,
      children,
      variant,
      emphasis = false
    } = _a,
    rest = tslib.__rest(_a, ["as", "children", "variant", "emphasis"]);
  const component = as || 'span';
  const className = clsx(rest.className, getVariantClasses$2(variant), {
    [styles$9.font]: variant,
    [styles$9.emphasis]: emphasis
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    as: component,
    ref: ref
  }, rest, {
    className: className
  }), children);
});

function mapBreakpointValues(breakpoints, callback) {
  if (typeof breakpoints !== 'object') {
    return callback(breakpoints);
  }
  const {
    sm,
    md,
    lg
  } = breakpoints;
  if (sm === md && md === lg) {
    return callback(sm);
  }
  return Object.entries(breakpoints).reduce((breakpoints, [breakpoint, value]) => {
    breakpoints[breakpoint] = callback(value);
    return breakpoints;
  }, {});
}

var styles$8 = {"button":"Button-module_button__18Bed","brand-primary":"Button-module_brand-primary__cSFNJ","brand-secondary":"Button-module_brand-secondary__HaR0L","default-primary":"Button-module_default-primary__PG3CI","default-secondary":"Button-module_default-secondary__u4JSQ","brand-primary-md":"Button-module_brand-primary-md__T9eLv","brand-secondary-md":"Button-module_brand-secondary-md__NxjfP","default-primary-md":"Button-module_default-primary-md__48--T","default-secondary-md":"Button-module_default-secondary-md__cRC2M","brand-primary-lg":"Button-module_brand-primary-lg__s6KrN","brand-secondary-lg":"Button-module_brand-secondary-lg__QoZH9","default-primary-lg":"Button-module_default-primary-lg__x7rvm","default-secondary-lg":"Button-module_default-secondary-lg__ABWcr","brand-primary-sm":"Button-module_brand-primary-sm__5jl0t","brand-secondary-sm":"Button-module_brand-secondary-sm__RHauW","default-primary-sm":"Button-module_default-primary-sm__Rh2kR","default-secondary-sm":"Button-module_default-secondary-sm__47An1"};

function getVariantClasses$1(value) {
  if (typeof value === 'string') {
    return styles$8[`${value}`];
  }
  if (value && typeof value === 'object') {
    return [value.sm && styles$8[`${value.sm}-sm`], value.md && styles$8[`${value.md}-md`], value.lg && styles$8[`${value.lg}-lg`]];
  }
  return undefined;
}
const Button = /*#__PURE__*/React.forwardRef(function Button(_a, ref) {
  var {
      as,
      children,
      variant = 'brand-primary'
    } = _a,
    rest = tslib.__rest(_a, ["as", "children", "variant"]);
  const asComponent = as || 'button';
  const className = clsx(rest.className, styles$8.button, styles$8.inheritfont, getVariantClasses$1(variant));
  const backgroundColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-200';
    switch (variant) {
      case 'default-primary':
        return 'neutral-black';
      case 'default-secondary':
        return 'neutral-white';
      case 'brand-primary':
        return 'active-800';
      case 'brand-secondary':
        return 'neutral-white';
      default:
        return 'neutral-black';
    }
  });
  const borderColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-200';
    switch (variant) {
      case 'brand-secondary':
        return 'active-800';
      case 'default-primary':
      case 'default-secondary':
      case 'brand-primary':
      default:
        return 'neutral-black';
    }
  });
  const textColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-400';
    switch (variant) {
      case 'default-primary':
        return 'neutral-white';
      case 'default-secondary':
        return 'neutral-black';
      case 'brand-primary':
        return 'neutral-white';
      case 'brand-secondary':
        return 'neutral-black';
      default:
        return 'neutral-white';
    }
  });
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: asComponent,
    className: className,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: textColor,
    paddingX: 200,
    variant: "button-md-emphasis",
    ref: ref
  }, rest), children);
});

let id = 0;
const useCustomId = () => {
  const [uniqueId] = React.useState(() => ++id);
  return uniqueId.toString();
};
const useWdgsId = id => {
  const autoId = useCustomId();
  return `wds-${autoId}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractProps = props => {
  const {
      className,
      style,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    } = props,
    rest = tslib.__rest(props, ["className", "style", "margin", "marginX", "marginY", "marginTop", "marginRight", "marginBottom", "marginLeft"]);
  return [{
    className,
    style,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }, rest];
};

var styles$7 = {"input":"InputField-module_input__y6Hs-"};

var styles$6 = {"field":"FieldWrapper-module_field__lKjKw","multi":"FieldWrapper-module_multi__bzHeq","has-icon":"FieldWrapper-module_has-icon__acSBx","focused":"FieldWrapper-module_focused__wr2vV","error-focused":"FieldWrapper-module_error-focused__JatYy"};

const getStateColors = ({
  disabled,
  hasError,
  isFieldFocused
}) => {
  let background = 'neutral-white';
  let border = 'neutral-600';
  let text = 'neutral-600';
  if (disabled) {
    background = 'neutral-100';
    border = 'neutral-200';
  } else if (hasError) {
    border = 'urgent-600';
  } else if (isFieldFocused) {
    border = 'active-800';
    text = 'active-800';
  }
  return {
    border,
    text,
    background
  };
};

var styles$5 = {"multiline":"Icon-module_multiline__ZIlfn"};

const Icon$2 = ({
  multiline,
  icon
}) => {
  return /*#__PURE__*/React.createElement(Box, {
    marginRight: 200,
    marginTop: multiline ? 200 : undefined,
    className: clsx({
      [styles$5.multiline]: multiline
    })
  }, icon);
};

const FieldWrapper = _a => {
  var {
      hasError = false,
      disabled,
      isFieldFocused = false,
      multiline = false,
      children,
      icon
    } = _a,
    rest = tslib.__rest(_a, ["hasError", "disabled", "isFieldFocused", "multiline", "children", "icon"]);
  const fielldClassName = clsx(styles$6.field, rest.className, {
    [styles$6.focused]: isFieldFocused && !hasError,
    [styles$6['error-focused']]: isFieldFocused && hasError,
    [styles$6['has-icon']]: Boolean(icon),
    [styles$6.multi]: multiline
  });
  const colors = getStateColors({
    hasError,
    disabled,
    isFieldFocused
  });
  return /*#__PURE__*/React.createElement(Box, _extends({}, rest, {
    borderColor: colors.border,
    backgroundColor: colors.background,
    className: fielldClassName
  }), children, icon && /*#__PURE__*/React.createElement(Icon$2, {
    icon: icon,
    multiline: multiline
  }));
};

var styles$4 = {"floating-text":"FloatingText-module_floating-text__rgbQC","single-line":"FloatingText-module_single-line__Mr-hj","multiline":"FloatingText-module_multiline__e1nC-","stay-afloat":"FloatingText-module_stay-afloat__yYqlz","error":"FloatingText-module_error__HZ1cA","has-icon":"FloatingText-module_has-icon__oPA8T","optional":"FloatingText-module_optional__Rk3HT","left":"FloatingText-module_left__l7o0A","center":"FloatingText-module_center__u973p"};

const FloatingText = ({
  hasError = false,
  disabled,
  isFieldFocused,
  hasIcon = false,
  multiline = false,
  stayAfloat = false,
  floatAlign = 'left',
  children,
  isOptional = false,
  htmlFor
}) => {
  const floatingClasses = clsx(styles$4['floating-text'], multiline ? styles$4.multiline : styles$4['single-line'], {
    [styles$4['stay-afloat']]: stayAfloat,
    [styles$4.error]: hasError
  });
  const labelClasses = clsx(floatingClasses, styles$4[floatAlign]);
  const optionalClasses = clsx(floatingClasses, styles$4.optional, {
    [styles$4['has-icon']]: hasIcon
  });
  const colors = getStateColors({
    hasError,
    disabled,
    isFieldFocused
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    as: "label",
    htmlFor: htmlFor,
    id: `${htmlFor}-label`,
    variant: "body-md",
    paddingX: 50,
    className: labelClasses,
    color: colors.text
  }, children), isOptional && /*#__PURE__*/React.createElement(Text, {
    as: "label",
    htmlFor: htmlFor,
    "aria-hidden": true,
    variant: "body-md",
    color: colors.text,
    paddingX: 50,
    className: optionalClasses
  }, "Optional"));
};

var styles$3 = {"visually-hidden":"VisuallyHidden-module_visually-hidden__BdV2B"};

const VisuallyHidden = /*#__PURE__*/React.forwardRef(function VisuallyHidden(_a, ref) {
  var {
      as,
      children
    } = _a,
    rest = tslib.__rest(_a, ["as", "children"]);
  const asComponent = as || 'span';
  const className = clsx(rest.className, styles$3['visually-hidden']);
  return /*#__PURE__*/React.createElement(Box, _extends({
    as: asComponent
  }, rest, {
    className: className,
    ref: ref
  }), children);
});

var styles$2 = {"field-error":"FieldError-module_field-error__-rtI3","error-icon":"FieldError-module_error-icon__ni3Ze"};

var styles$1 = {"icon-variant-sm":"Icon-module_icon-variant-sm__rOOaA","icon-md-variant-sm":"Icon-module_icon-md-variant-sm__M7Z2p","icon-lg-variant-sm":"Icon-module_icon-lg-variant-sm__zWmbE","icon-sm-variant-sm":"Icon-module_icon-sm-variant-sm__d-IJD","icon-variant-md":"Icon-module_icon-variant-md__h8Nio","icon-md-variant-md":"Icon-module_icon-md-variant-md__axwNo","icon-lg-variant-md":"Icon-module_icon-lg-variant-md__HrXHR","icon-sm-variant-md":"Icon-module_icon-sm-variant-md__bsM2N","icon-variant-lg":"Icon-module_icon-variant-lg__EFKJP","icon-md-variant-lg":"Icon-module_icon-md-variant-lg__xa88r","icon-lg-variant-lg":"Icon-module_icon-lg-variant-lg__ac0VK","icon-sm-variant-lg":"Icon-module_icon-sm-variant-lg__wBkyC","icon":"Icon-module_icon__z3y9t"};

const IconVariantContext = /*#__PURE__*/React.createContext({});
function useIconVariantContext(variantPropValue) {
  const {
    variantOverride,
    variantProvider
  } = React.useContext(IconVariantContext);
  return variantOverride !== null && variantOverride !== void 0 ? variantOverride : variantPropValue;
}

function getVariantClasses(value) {
  if (typeof value === 'string') {
    return styles$1[`icon-variant-${value}`];
  }
  if (value && typeof value === 'object') {
    return [value.sm && styles$1[`icon-sm-variant-${value.sm}`], value.md && styles$1[`icon-md-variant-${value.md}`], value.lg && styles$1[`icon-lg-variant-${value.lg}`]];
  }
  return undefined;
}
const IconTemplate = /*#__PURE__*/React.forwardRef(function IconTemplate(_a, ref) {
  var _b;
  var {
      Icon,
      title,
      variant: variantPropValue
    } = _a,
    rest = tslib.__rest(_a, ["Icon", "title", "variant"]);
  const variant = (_b = useIconVariantContext(variantPropValue)) !== null && _b !== void 0 ? _b : 'md';
  const titleId = useWdgsId();
  const className = clsx(rest.className, styles$1.icon, getVariantClasses(variant));
  return /*#__PURE__*/React.createElement(Box, _extends({
    titleId: title ? titleId : undefined,
    title: title
  }, rest, {
    className: className,
    as: Icon,
    ref: ref,
    "aria-hidden": title ? false : true
  }));
});

const Icon$1 = /*#__PURE__*/React.forwardRef(function Icon(_a, ref) {
  var {
      title,
      titleId
    } = _a,
    props = tslib.__rest(_a, ["title", "titleId"]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "#c8102e",
    viewBox: "0 0 256 256",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
  }));
});
const IconCritical = /*#__PURE__*/React.forwardRef(function IconCritical(props, ref) {
  return /*#__PURE__*/React.createElement(IconTemplate, _extends({}, props, {
    Icon: Icon$1,
    ref: ref
  }));
});

const FieldError = /*#__PURE__*/React.forwardRef(function FieldError(_a, ref) {
  var {
      as,
      children
    } = _a,
    rest = tslib.__rest(_a, ["as", "children"]);
  const className = clsx(rest.className, styles$2['field-error']);
  const asComponent = as || 'div';
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: asComponent
  }, rest, {
    color: "urgent-600",
    className: className,
    ref: ref,
    variant: "body-sm"
  }), /*#__PURE__*/React.createElement(IconCritical, {
    className: styles$2['error-icon'],
    variant: "md",
    "aria-hidden": "true",
    marginRight: 50
  }), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Error:"), children);
});

const HelperText = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(Text, {
    as: "div",
    variant: "body-sm",
    color: "neutral-600",
    marginTop: 50
  }, children);
};

const InputField = /*#__PURE__*/React.forwardRef(function InputField(_a, ref) {
  var {
      label,
      icon,
      errorText,
      helperText
    } = _a,
    rest = tslib.__rest(_a, ["label", "icon", "errorText", "helperText"]);
  const id = useWdgsId();
  const [isFocused, setIsFocused] = React.useState(false);
  const onFocus = event => {
    setIsFocused(true);
    if (rest.onFocus) {
      rest.onFocus(event);
    }
  };
  const onBlur = event => {
    setIsFocused(false);
    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };
  const [containerStyleProps, inputProps] = extractProps(rest);
  const hasError = Boolean(rest['aria-invalid']) || rest['aria-invalid'] === undefined && Boolean(errorText);
  return /*#__PURE__*/React.createElement(Box, containerStyleProps, /*#__PURE__*/React.createElement(FieldWrapper, {
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    icon: icon
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    className: styles$7.input,
    placeholder: " "
  }, inputProps, {
    id: id,
    ref: ref,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-labelledby": `${id}-label`,
    "aria-invalid": hasError
  })), /*#__PURE__*/React.createElement(FloatingText, {
    htmlFor: id,
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    hasIcon: Boolean(icon),
    isOptional: !rest.required
  }, label)), hasError && errorText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-error-text`
  }, /*#__PURE__*/React.createElement(FieldError, {
    marginTop: 75
  }, errorText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")), helperText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-helper-text`
  }, /*#__PURE__*/React.createElement(HelperText, null, helperText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")));
});

var styles = {"select":"Select-module_select__U4LyF","placeholder":"Select-module_placeholder__tYT40","icon":"Select-module_icon__RH27W","icon-arrow":"Select-module_icon-arrow__lVdM6"};

const Icon = /*#__PURE__*/React.forwardRef(function Icon(_a, ref) {
  var {
      title,
      titleId
    } = _a,
    props = tslib.__rest(_a, ["title", "titleId"]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 256 256",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32"
  }));
});
const IconArrowDown = /*#__PURE__*/React.forwardRef(function IconArrowDown(props, ref) {
  return /*#__PURE__*/React.createElement(IconTemplate, _extends({}, props, {
    Icon: Icon,
    ref: ref
  }));
});

const Select = /*#__PURE__*/React.forwardRef(function Select(_a, ref) {
  var {
      label,
      placeholder,
      errorText,
      helperText,
      children
    } = _a,
    rest = tslib.__rest(_a, ["label", "placeholder", "errorText", "helperText", "children"]);
  const id = useWdgsId();
  const [isFocused, setIsFocused] = React.useState(false);
  const onFocus = event => {
    setIsFocused(true);
    if (rest.onFocus) {
      rest.onFocus(event);
    }
  };
  const onBlur = event => {
    setIsFocused(false);
    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };
  const [containerStyleProps, selectProps] = extractProps(rest);
  const hasError = Boolean(rest['aria-invalid']) || rest['aria-invalid'] === undefined && Boolean(errorText);
  return /*#__PURE__*/React.createElement(Box, containerStyleProps, /*#__PURE__*/React.createElement(FieldWrapper, {
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled
  }, /*#__PURE__*/React.createElement(Text, _extends({
    as: "select"
  }, selectProps, {
    ref: ref,
    id: id,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-labelledby": `${id}-label`,
    "aria-invalid": hasError,
    variant: 'body-md',
    color: rest.disabled ? 'neutral-600' : 'neutral-black',
    paddingY: 125,
    paddingLeft: 200,
    className: styles.select
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    className: styles.placeholder,
    value: ""
  }, placeholder), children), /*#__PURE__*/React.createElement(FloatingText, {
    htmlFor: id,
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    isOptional: !rest.required,
    stayAfloat: true
  }, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: styles.icon
  }, /*#__PURE__*/React.createElement(IconArrowDown, {
    className: isFocused ? styles['icon-arrow'] : undefined,
    color: rest.disabled ? 'neutral-400' : 'active-800',
    variant: "lg"
  }))), hasError && errorText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-error-text`
  }, /*#__PURE__*/React.createElement(FieldError, {
    marginTop: 75
  }, errorText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")), helperText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-helper-text`
  }, /*#__PURE__*/React.createElement(HelperText, null, helperText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")));
});

exports.Box = Box;
exports.Button = Button;
exports.FieldError = FieldError;
exports.FieldWrapper = FieldWrapper;
exports.FloatingText = FloatingText;
exports.HelperText = HelperText;
exports.IconArrowDown = IconArrowDown;
exports.IconCritical = IconCritical;
exports.IconTemplate = IconTemplate;
exports.InputField = InputField;
exports.Select = Select;
exports.Text = Text;
exports.VisuallyHidden = VisuallyHidden;
//# sourceMappingURL=lib.cjs.map
