! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.events = t() : e.events = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function o(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) o.d(n, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 2)
    }([function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isInWorker = t.windowSnapshot = t.GlobalThis = t.updateWindowSnapshotWhenInWorker = t.checkWindow = void 0;
        var n = void 0;
        t.GlobalThis = n;
        var i = void 0;
        t.windowSnapshot = i;
        var r = !1;
        t.isInWorker = r, "undefined" != typeof window ? (t.GlobalThis = n = window, t.windowSnapshot = i = window) : "undefined" != typeof self && (t.GlobalThis = n = self, t.isInWorker = r = !0);
        t.checkWindow = function(e) {
            return "object" == typeof e && null !== e && "window" in e && e === e.window
        };
        t.updateWindowSnapshotWhenInWorker = function(e) {
            return !(!r || !(0, t.checkWindow)(e)) && (t.windowSnapshot = i = e, !0)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PRODUCTION = t.BROWSER_PREFIXS = t.SDK_VERSION = t.KWAI_SESSION_ID = t.EVENT_NAME_FORMAT = t.EVENT_NAME = t.CSP_CONTENT_BLOCKED_KEY = t.PAGE_VIEW_EVENT_NAME = t.UNKNOWN_EVENT = t.PAGE_ID = t.SESSION_ID = t.KWAI_Q = t.KWAI_ANALYTICS_OBJECT = t.KWAI_CALLBACK_SOURCE = t.KWAI_CALLBACK_SESSION_KEY = t.KWAI_PIXEL_ID = t.KWAI_CALLBACK = t.KWAI_TEST_ID = void 0, t.KWAI_TEST_ID = "ks_px_test", t.KWAI_CALLBACK = "click_id", t.KWAI_PIXEL_ID = "pixel_id", t.KWAI_CALLBACK_SESSION_KEY = "kwai_adInfo", t.KWAI_CALLBACK_SOURCE = "kwai_adInfo_source", t.KWAI_ANALYTICS_OBJECT = "KwaiAnalyticsObject", t.KWAI_Q = "kwaiq", t.SESSION_ID = "sessionId", t.PAGE_ID = "pageId", t.UNKNOWN_EVENT = "UNKNOWN", t.PAGE_VIEW_EVENT_NAME = "pageView", t.CSP_CONTENT_BLOCKED_KEY = "_k_cspcb", t.EVENT_NAME = {
            pageView: "EVENT_PAGE_VIEW",
            pageLeave: "EVENT_PAGE_LEAVE",
            addPaymentInfo: "EVENT_ADD_PAYMENT_INFO",
            addToCart: "EVENT_ADD_TO_CART",
            buttonClick: "EVENT_BUTTON_CLICK",
            purchase: "EVENT_PURCHASE",
            contentView: "EVENT_CONTENT_VIEW",
            download: "EVENT_DOWNLOAD",
            formSubmit: "EVENT_FORM_SUBMIT",
            initiatedCheckout: "EVENT_INITIATED_CHECKOUT",
            contact: "EVENT_CONTACT",
            placeOrder: "EVENT_PLACE_ORDER",
            search: "EVENT_SEARCH",
            completeRegistration: "EVENT_COMPLETE_REGISTRATION",
            addToWishlist: "EVENT_ADD_TO_WISHLIST",
            subscribe: "EVENT_SUBSCRIBE",
            firstDeposit: "EVENT_FIRST_DEPOSIT",
            creditApproval: "EVENT_CREDIT_APPROVAL",
            loanApplication: "EVENT_LOAN_APPLICATION",
            loanCredit: "EVENT_LOAN_CREDIT",
            loanDisbursal: "EVENT_LOAN_DISBURSAL",
            creditCardApplication: "EVENT_CREDIT_CARD_APPLICATION",
            valueProduce: "EVENT_VALUE_PRODUCE",
            registration24hPurchase: "EVENT_REGISTRATION_24H_PURCHASE"
        }, t.EVENT_NAME_FORMAT = {
            EVENT_PAGE_VIEW: "pageView",
            EVENT_PAGE_LEAVE: "pageLeave",
            EVENT_ADD_PAYMENT_INFO: "addPaymentInfo",
            EVENT_ADD_TO_CART: "addToCart",
            EVENT_BUTTON_CLICK: "buttonClick",
            EVENT_PURCHASE: "purchase",
            EVENT_CONTENT_VIEW: "contentView",
            EVENT_DOWNLOAD: "download",
            EVENT_FORM_SUBMIT: "formSubmit",
            EVENT_INITIATED_CHECKOUT: "initiatedCheckout",
            EVENT_CONTACT: "contact",
            EVENT_PLACE_ORDER: "placeOrder",
            EVENT_SEARCH: "search",
            EVENT_SERACH: "search",
            EVENT_COMPLETE_REGISTRATION: "completeRegistration",
            EVENT_ADD_TO_WISHLIST: "addToWishlist",
            EVENT_SUBSCRIBE: "subscribe",
            EVENT_FIRST_DEPOSIT: "firstDeposit",
            EVENT_CREDIT_APPROVAL: "creditApproval",
            EVENT_LOAN_APPLICATION: "loanApplication",
            EVENT_LOAN_CREDIT: "loanCredit",
            EVENT_LOAN_DISBURSAL: "loanDisbursal",
            EVENT_CREDIT_CARD_APPLICATION: "creditCardApplication",
            EVENT_VALUE_PRODUCE: "valueProduce",
            EVENT_REGISTRATION_24H_PURCHASE: "registration24hPurchase"
        }, t.KWAI_SESSION_ID = "kwai_session_id", t.SDK_VERSION = "2.7.0", t.BROWSER_PREFIXS = ["", "webkit", "WebKit", "moz", "Moz", "ms", "MS", "o", "O"], t.PRODUCTION = !0
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EVENT_VERSION = void 0;
        var n = o(0),
            i = o(3),
            r = o(5);
        t.EVENT_VERSION = "1.1.1";
        ! function() {
            var e, t, o, a, c, s, E = null === (e = document.currentScript) || void 0 === e ? void 0 : e.src,
                _ = n.GlobalThis,
                u = (null === (t = null == E ? void 0 : E.split("lib=")[1]) || void 0 === t ? void 0 : t.split("&")[0]) || _.KwaiAnalyticsObject,
                l = null === (o = _[u]) || void 0 === o ? void 0 : o._i,
                d = (null === (a = null == E ? void 0 : E.split("sdkid=")[1]) || void 0 === a ? void 0 : a.split("&")[0]) || Object.keys(null != l ? l : {})[0],
                T = "https://s16-11187.ap4r.com/kos/s101/nlav11187/pixel/core/core.js";
            Promise.race([(c = d, s = r.apiDomainPicker.getApiDomain(), new Promise((function(e, t) {
                if (c && /^[0-9]{0,18}$/.test(String(c))) {
                    var o = new XMLHttpRequest;
                    o.open("POST", "".concat(s, "/rest/n/adintl/gray/getGrayInfo"), !0), o.setRequestHeader("content-type", "application/json"), o.onload = function() {
                        if (o.status >= 200 && o.status < 300) {
                            var n = JSON.parse(o.response);
                            n.data && Object.keys(n.data).length > 0 && n.data.grayResourceUrl ? e(n.data.grayResourceUrl) : t("not in gray")
                        } else t(o.statusText)
                    }, o.onerror = function() {
                        return t(o.statusText)
                    }, o.withCredentials = !0, r.apiDomainPicker.setRequestStartTime(+new Date), o.send(JSON.stringify({
                        type: "pixel_v2",
                        id: c
                    }))
                } else t("参数错误")
            }))), new Promise((function(e, t) {
                setTimeout((function() {
                    t("time out")
                }), 1e3)
            }))]).then((function(e) {
                (0, i.loadScript)({
                    src: e,
                    pixelId: d,
                    keyName: u,
                    backupSrc: T
                })
            })).catch((function(e) {
                (0, i.loadScript)({
                    src: "https://s1.kwai.net/kos/s101/nlav11187/pixel/core/core.js",
                    pixelId: d,
                    keyName: u,
                    backupSrc: T
                })
            }))
        }()
    }, function(e, t, o) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.loadScript = void 0;
        var i = o(0),
            r = n(o(4));
        t.loadScript = function(e) {
            var t = e.src,
                o = e.pixelId,
                n = e.keyName,
                a = e.backupSrc,
                c = i.GlobalThis,
                s = "?sdkid=".concat(o, "&lib=").concat(n),
                E = "".concat(t).concat(s),
                _ = a ? "".concat(a).concat(s) : "";
            return new Promise((function(e, t) {
                c && ("DedicatedWorkerGlobalScope" === c.constructor.name || void 0 !== c.DedicatedWorkerGlobalScope && c instanceof c.DedicatedWorkerGlobalScope) ? function e(t, o) {
                    return new Promise((function(n, i) {
                        if ("undefined" != typeof importScripts) try {
                            importScripts(t), n()
                        } catch (t) {
                            o && e(o).then(n).catch(i)
                        }
                    }))
                }(E, _).then(e).catch(t) : (0, r.default)(E, _).then(e).catch(t)
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            i = function(e, t) {
                return new Promise((function(o, r) {
                    var a;
                    if (n.windowSnapshot) {
                        var c = n.windowSnapshot.document.createElement("script");
                        c.type = "text/javascript", c.async = !0, c.src = e, c.onerror = t ? function() {
                            i(t).then(o).catch(r)
                        } : function() {
                            r()
                        }, c.onload = function() {
                            o()
                        };
                        var s = n.windowSnapshot.document.getElementsByTagName("script")[0];
                        null === (a = null == s ? void 0 : s.parentNode) || void 0 === a || a.insertBefore(c, s)
                    } else r()
                }))
            };
        t.default = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiDomainPicker = void 0;
        var n = o(6),
            i = o(1),
            r = {
                set: function(e, t, o) {
                    if (!document || !document.cookie) return !1;
                    var n = "",
                        i = [],
                        a = "",
                        c = location.host,
                        s = null;
                    if (0 != (o = o || 0)) {
                        var E = new Date;
                        E.setTime(E.getTime() + 1e3 * o), a = "; expires=" + E.toUTCString()
                    }
                    return 1 === (c = location.host).split(".").length ? document.cookie = e + "=" + t + a + "; path=/" : ((i = c.split(".")).shift(), n = "." + i.join("."), document.cookie = e + "=" + t + a + "; path=/; domain=" + n, null != (s = r.get(e)) && s == t || (n = "." + c, document.cookie = e + "=" + t + a + "; path=/; domain=" + n, s = r.get(e))), !(null == s || s != t)
                },
                get: function(e) {
                    if (!document || !document.cookie) return null;
                    for (var t = e + "=", o = document.cookie.split(";"), n = 0; n < o.length; n++) {
                        for (var i = o[n];
                            " " == i.charAt(0);) i = i.substring(1, i.length);
                        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                    }
                    return null
                },
                erase: function(e) {
                    r.set(e, "", -1)
                }
            },
            a = new function() {
                var e = this;
                this.requestStartTime = +new Date, this.getApiDomain = function() {
                    return e.isCspBlocked ? "https://api.mythad.com" : "https://ads.mythad.com"
                }, this.setRequestStartTime = function(t) {
                    e.requestStartTime = t
                }, this.getCspBlocked = function() {
                    var e = (0, n.getWorkspace)(),
                        t = null == e ? void 0 : e[i.CSP_CONTENT_BLOCKED_KEY],
                        o = r.get(i.CSP_CONTENT_BLOCKED_KEY);
                    return t || o || ""
                }, this.writeCSPBlockStatus = function(t) {
                    var o = (0, n.getWorkspace)();
                    o && (o[i.CSP_CONTENT_BLOCKED_KEY] = t), r.set(i.CSP_CONTENT_BLOCKED_KEY, t, 86400), e.isCspBlocked = !0
                }, this.cspBlockInfo = this.getCspBlocked(), this.isCspBlocked = !!this.cspBlockInfo, "undefined" != typeof document && document.addEventListener("securitypolicyviolation", (function(t) {
                    var o = +new Date - e.requestStartTime;
                    t.blockedURI.includes("https://ads.mythad.com") && e.writeCSPBlockStatus("".concat(t.blockedURI.slice(t.blockedURI.lastIndexOf("/") + 1), ",").concat(o.toString()))
                }))
            };
        t.apiDomainPicker = a
    }, function(e, t, o) {
        "use strict";
        var n = this && this.__spreadArray || function(e, t, o) {
            if (o || 2 === arguments.length)
                for (var n, i = 0, r = t.length; i < r; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getPixelIdsFromWorkspace = t.setPixelCacheIfNotInit = t.setWorkSpaceCacheIfNotInit = t.getWorkspace = t.getWorkspaceName = void 0;
        var i = o(0),
            r = o(1);
        t.getWorkspaceName = function() {
            return "object" == typeof i.GlobalThis && i.GlobalThis[r.KWAI_ANALYTICS_OBJECT] || r.KWAI_Q
        };
        t.getWorkspace = function() {
            return "object" == typeof i.GlobalThis && i.GlobalThis[(0, t.getWorkspaceName)()]
        };
        t.setWorkSpaceCacheIfNotInit = function(e, o) {
            var i = (0, t.getWorkspace)(),
                r = i._i;
            Object.entries(r).forEach((function(t) {
                !0 !== t[1]._init && i.push(n([e], o, !0))
            }))
        };
        t.setPixelCacheIfNotInit = function(e, o, n) {
            var i = (0, t.getWorkspace)()._i,
                r = i[e] || [];
            r._init || (r.push(["track", o, n]), i[e] = r)
        };
        t.getPixelIdsFromWorkspace = function() {
            var e = (0, t.getWorkspace)(),
                o = (null != e ? e : {})._i;
            return Object.keys(null != o ? o : {})
        }
    }])
}));