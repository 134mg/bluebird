(() => {
    "use strict";
    var e = {
            262: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Random = void 0, t.Random = class {
                    static chooseOne(e) {
                        return e[Math.floor(Math.random() * e.length)]
                    }
                }
            },
            745: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeHasher = void 0;
                class r {
                    static encode(e) {
                        return e.replace(/[0-9]/g, (e => r.map[e]))
                    }
                    static decode(e) {
                        const t = Object.values(r.map).join(""),
                            n = new RegExp(`[${t}]`, "g");
                        return e.replace(n, (e => Object.keys(r.map).find((t => r.map[t] === e)) || ""))
                    }
                    static encodeAndInsert(e, t, n = 1) {
                        const a = r.encode(e);
                        return `${t.slice(0,n)}${a}${t.slice(n)}`
                    }
                    static decodeAndExtract(e) {
                        const t = Object.values(r.map).join(""),
                            n = new RegExp(`[${t}]`, "g");
                        let a = "";
                        return e.replace(n, (e => {
                            const t = Object.keys(r.map).find((t => r.map[t] === e));
                            return t && (a += t), e
                        })), "" !== a ? a : null
                    }
                    static removeAllEncodedChars(e) {
                        const t = Object.values(r.map).join(""),
                            n = new RegExp(`[${t}]`, "g");
                        return e.replace(n, "")
                    }
                }
                t.UnicodeHasher = r, r.map = {
                    0: "​",
                    1: "‌",
                    2: "‍",
                    3: "⁠",
                    4: "⁡",
                    5: "⁢",
                    6: "⁣",
                    7: "⁤",
                    8: "‪",
                    9: "‬"
                }
            },
            202: (e, t, r) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UrlRebuilder = void 0;
                const n = r(262),
                    a = r(745);
                class o {
                    static randomizePhoneNumberIfNecessary(e) {
                        var t;
                        const r = null !== (t = window.phones) && void 0 !== t ? t : [];
                        if (0 === r.length) return e;
                        const a = n.Random.chooseOne(r);
                        return e.includes("phone=") ? o.withReplaceQueryParam(e, "phone", a) : e.includes("wa.me") ? `https://wa.me/${a}?${e.split("?")[1]}` : e
                    }
                    static insertAdIdInWppUrl(e, t) {
                        var r;
                        const n = null !== (r = o.getQueryParams(e).get("text")) && void 0 !== r ? r : "Olá",
                            i = t.replace(/[^0-9]/g, ""),
                            l = a.UnicodeHasher.removeAllEncodedChars(n),
                            s = a.UnicodeHasher.encodeAndInsert(i, l);
                        return o.withReplaceQueryParam(e, "text", s)
                    }
                    static getAdId(e) {
                        var t;
                        const r = null !== (t = e.get("utm_content")) && void 0 !== t ? t : "";
                        return r.includes("|") ? r.split("|")[1] : null
                    }
                    static getQueryParams(e) {
                        const t = e.split("?")[1];
                        return new URLSearchParams(t)
                    }
                    static withReplaceQueryParam(e, t, r) {
                        const n = e.split("?")[0],
                            a = e.split("?")[1],
                            o = new URLSearchParams(a);
                        return o.set(t, r), `${n}?${o.toString()}`
                    }
                    static removeSpecialCharacteres(e) {
                        return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-|]/gi, "").replace(/\s/g, "")
                    }
                }
                t.UrlRebuilder = o
            }
        },
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, r), o.exports
    }(() => {
        var e, t, n, a;
        const o = r(202);
        console.log("utms script loaded! 2.3.11");
        const i = {
            ignoreAllIframes: !!document.querySelector("[data-utmify-ignore-iframe]"),
            ignoreScriptRetry: !!document.querySelector("[data-utmify-ignore-retry]"),
            fastStart: !!document.querySelector("[data-utmify-fast-start]"),
            replacePlusSignal: !!document.querySelector("[data-utmify-plus-signal]"),
            isClickBank: !!document.querySelector("[data-utmify-is-click-bank]"),
            preventSubIds: !!document.querySelector("[data-utmify-prevent-subids]"),
            fixShopifyTheme: !!document.querySelector("[data-utmify-fix-shopify-theme]"),
            ignoreClasses: null === (n = null === (t = null === (e = document.querySelector("[data-utmify-ignore-classes]")) || void 0 === e ? void 0 : e.getAttribute("data-utmify-ignore-classes")) || void 0 === t ? void 0 : t.split(" ")) || void 0 === n ? void 0 : n.filter((e => !!e)),
            replaceLinks: null === (a = document.querySelector("[data-utmify-replace-links]")) || void 0 === a ? void 0 : a.getAttribute("data-utmify-replace-links"),
            isCartpanda: !!document.querySelector("[data-utmify-is-cartpanda]")
        };
        var l, s;
        ! function(e) {
            e.Doppus = "doppus"
        }(l || (l = {})),
        function(e) {
            e.PandaVideo = "pandavideo.com", e.YouTube = "youtube.com", e.EplayVideo = "eplay.video", e.Vimeo = "vimeo.com"
        }(s || (s = {}));
        const u = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"];
        class c {
            static addUtmParametersToUrl(e) {
                const t = c.urlWithoutParams(e),
                    r = c.paramsFromUrl(e),
                    n = c.getUtmParameters(),
                    a = new URLSearchParams;
                r.forEach(((e, t) => a.append(t, e))), n.forEach(((e, t) => a.append(t, e)));
                const o = c.urlParametersWithoutDuplicates(a),
                    l = c.simplifyParametersIfNecessary(t, o),
                    s = i.replacePlusSignal ? l.toString().split("+").join("%20") : l.toString(),
                    u = -1 === t.indexOf("?") ? "?" : "&";
                return `${t}${u}${s}`
            }
            static urlWithoutParams(e) {
                return e.split("?")[0]
            }
            static paramsFromUrl(e) {
                if (!e) return new URLSearchParams;
                const t = e instanceof URL ? e.href : e;
                if (!t.includes("?")) return new URLSearchParams;
                const r = t.split("?");
                if (r.length <= 1) return new URLSearchParams;
                const n = r[1];
                return new URLSearchParams(n)
            }
            static urlParametersWithoutDuplicates(e) {
                const t = Array.from(e.keys()),
                    r = new Map;
                t.forEach((t => {
                    const n = e.getAll(t);
                    r.set(t, n[n.length - 1])
                }));
                const n = new URLSearchParams;
                return r.forEach(((e, t) => {
                    n.append(t, e)
                })), n
            }
            static getUtmParameters() {
                const e = "hQwK21wXxR",
                    t = new URLSearchParams(window.location.search);

                function r(e) {
                    const r = t.get(e);
                    if (null != r && "null" !== r && "undefined" !== r && "" !== r) return r;
                    const n = localStorage.getItem(e);
                    if (!n) return "";
                    const a = localStorage.getItem(m(e));
                    return !a || new Date(a) < new Date ? (localStorage.removeItem(e), localStorage.removeItem(m(e)), "") : n
                }

                function n(t) {
                    return t.join(e)
                }
                const a = r("utm_term"),
                    l = r("utm_content"),
                    s = r("utm_medium"),
                    u = r("utm_campaign"),
                    c = function(e) {
                        const t = function() {
                            var e;
                            const t = localStorage.getItem("lead");
                            if (!t) return null;
                            const r = JSON.parse(t);
                            return null !== (e = null == r ? void 0 : r._id) && void 0 !== e ? e : null
                        }();
                        return t ? e.includes("jLj") ? e : `${e}jLj${t}` : e
                    }(r("utm_source")),
                    d = new URLSearchParams;
                d.set("utm_source", c), d.set("utm_campaign", u), d.set("utm_medium", s), d.set("utm_content", l), d.set("utm_term", a), i.isCartpanda && d.set("cid", Math.round(1e11 * Math.random()).toString());
                const p = [c, u, s, l, a],
                    v = n(p);
                i.isClickBank ? (d.set("aff_sub1", o.UrlRebuilder.removeSpecialCharacteres(c)), d.set("aff_sub2", o.UrlRebuilder.removeSpecialCharacteres(u).replace(/\|(?=\d{10,}$)(?!.*\|)/, "cKBk")), d.set("aff_sub3", o.UrlRebuilder.removeSpecialCharacteres(s).replace(/\|(?=\d{10,}$)(?!.*\|)/, "cKBk")), d.set("aff_sub4", o.UrlRebuilder.removeSpecialCharacteres(l).replace(/\|(?=\d{10,}$)(?!.*\|)/, "cKBk")), d.set("aff_sub5", o.UrlRebuilder.removeSpecialCharacteres(a))) : i.preventSubIds || (d.set("subid", o.UrlRebuilder.removeSpecialCharacteres(c)), d.set("sid2", o.UrlRebuilder.removeSpecialCharacteres(u)), d.set("subid2", o.UrlRebuilder.removeSpecialCharacteres(u)), d.set("subid3", o.UrlRebuilder.removeSpecialCharacteres(s)), d.set("subid4", o.UrlRebuilder.removeSpecialCharacteres(l)), d.set("subid5", o.UrlRebuilder.removeSpecialCharacteres(u)));
                const f = r("xcod"),
                    h = r("src"),
                    g = "" !== f ? f : h,
                    y = function(t, r) {
                        if (t.length <= 255) return t;
                        const a = Math.floor(18.8);

                        function o(e, t, r) {
                            function n(e) {
                                return e.substring(0, a) + "..."
                            }
                            if (!t) return n(e);
                            const o = null != r ? r : "|",
                                i = e.split(o),
                                l = i.length > 1 ? i[i.length - 1] : "";
                            return `${n(1===i.length?i[0]:i.slice(0,-1).join(o))}${o}${l}`
                        }
                        const [i, l, s, u, c] = t.split(e);
                        return n([o(i, !0, "jLj"), o(l, !0), o(s, !0), o(u, !0), o(c, !1)])
                    }(p.every((e => "" === e)) ? g : v);
                d.set("xcod", y), d.set("sck", y), null != h && "" !== h && d.set("src", h);
                const S = t.get("fbclid");
                return null != S && "" !== S && d.set("fbclid", S), (() => {
                    const e = e => null == e || "" === e,
                        t = r("utm_source"),
                        n = r("utm_medium"),
                        a = r("utm_campaign"),
                        o = r("utm_content"),
                        i = r("utm_term"),
                        l = r("xcod"),
                        s = r("src"),
                        u = d.get("fbclid");
                    return e(t) && e(n) && e(a) && e(o) && e(i) && e(l) && e(s) && e(u)
                })() && d.set("utm_source", "organic"), window.utmParams = d, d
            }
            static simplifyParametersIfNecessary(e, t) {
                if (!Object.values(l).some((t => e.includes(t)))) return t;
                const r = new URLSearchParams;
                return t.forEach(((e, t) => {
                    u.includes(t) && r.append(t, e)
                })), r
            }
        }
        window.paramsList = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term", "xcod", "src"], window.itemExpInDays = 7;
        const d = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "xcod", "sck"];

        function m(e) {
            return `${e}_exp`
        }

        function p() {
            function e(e) {
                document.querySelectorAll("a").forEach((t => {
                    var r;
                    if (!(t.href.startsWith("mailto:") || t.href.startsWith("tel:") || t.href.includes("#") || (null === (r = null == i ? void 0 : i.ignoreClasses) || void 0 === r ? void 0 : r.some((e => t.classList.contains(e)))))) {
                        if (n = t.href, ["wa.me/", "api.whatsapp.com/send", "whatsapp:", "link.dispara.ai/", "random.lailla.io/"].some((e => n.includes(e)))) {
                            const e = c.getUtmParameters(),
                                r = o.UrlRebuilder.getAdId(e);
                            return t.href = o.UrlRebuilder.randomizePhoneNumberIfNecessary(t.href), void(t.href = o.UrlRebuilder.insertAdIdInWppUrl(t.href, null != r ? r : ""))
                        }
                        var n;
                        if (e && d.every((e => t.href.includes(e)))) return;
                        t.href = c.addUtmParametersToUrl(t.href), i.replaceLinks && function(e, t) {
                            var r, n;
                            if ("true" === e.getAttribute("data-replaced-element")) return;
                            if (t && !(null === (r = e[t.property]) || void 0 === r ? void 0 : r.includes(t.value))) return;
                            const a = document.createElement(e.tagName);
                            for (const t of e.attributes) a.setAttribute(t.name, t.value);
                            a.setAttribute("data-replaced-element", "true"), a.innerHTML = e.innerHTML, null === (n = e.parentNode) || void 0 === n || n.replaceChild(a, e)
                        }(t, {
                            property: "href",
                            value: i.replaceLinks
                        })
                    }
                }))
            }

            function t(e) {
                document.querySelectorAll("form").forEach((t => {
                    var r;
                    e && d.every((e => t.action.includes(e))) || (null === (r = null == i ? void 0 : i.ignoreClasses) || void 0 === r ? void 0 : r.some((e => t.classList.contains(e)))) || (t.action = c.addUtmParametersToUrl(t.action), c.getUtmParameters().forEach(((e, r) => {
                        const n = (a = r, t.querySelector(`input[name="${a}"]`));
                        var a;
                        if (n) return void n.setAttribute("value", e);
                        const o = ((e, t) => {
                            const r = document.createElement("input");
                            return r.type = "hidden", r.name = e, r.value = t, r
                        })(r, e);
                        t.appendChild(o)
                    })))
                }))
            }! function() {
                const e = new URLSearchParams(window.location.search);
                window.paramsList.forEach((t => {
                    const r = e.get(t);
                    r && ((e, t) => {
                        localStorage.setItem(e, t);
                        const r = new Date((new Date).getTime() + 24 * window.itemExpInDays * 60 * 60 * 1e3);
                        localStorage.setItem(m(e), r.toISOString())
                    })(t, r)
                }))
            }();
            const r = function() {
                var e, t, r, n, a, o, l, s, u, c, d, m, p, v, f, h, g, y, S, w, b, U;
                const {
                    fixShopifyTheme: _
                } = i, R = null !== (t = null === (e = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === e ? void 0 : e.themeName) && void 0 !== t ? t : null === (n = null === (r = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === r ? void 0 : r.theme) || void 0 === n ? void 0 : n.schema_name, P = null !== (a = null == R ? void 0 : R.includes("Dropmeta")) && void 0 !== a && a, L = null !== (o = null == R ? void 0 : R.includes("Warehouse")) && void 0 !== o && o, E = null !== (l = null == R ? void 0 : R.includes("Classic®")) && void 0 !== l && l, A = null !== (s = null == R ? void 0 : R.includes("Tema Vision")) && void 0 !== s && s, I = null !== (u = null == R ? void 0 : R.includes("Waresabino")) && void 0 !== u && u, C = null !== (c = null == R ? void 0 : R.includes("Dawn")) && void 0 !== c && c, x = null !== (d = null == R ? void 0 : R.includes("Vortex")) && void 0 !== d && d, T = null !== (m = null == R ? void 0 : R.includes("Warepro")) && void 0 !== m && m, $ = null !== (p = null == R ? void 0 : R.includes("Wareimadigital")) && void 0 !== p && p, j = null !== (v = null == R ? void 0 : R.includes("Mercado Livre")) && void 0 !== v && v, k = null !== (f = null == R ? void 0 : R.includes("Tema Evolution®")) && void 0 !== f && f, O = null !== (h = null == R ? void 0 : R.includes("Evolution Enterprise")) && void 0 !== h && h, N = null !== (g = null == R ? void 0 : R.includes("Tema Sabino Vision")) && void 0 !== g && g, q = null !== (y = null == R ? void 0 : R.includes("Split")) && void 0 !== y && y, M = null !== (S = null == R ? void 0 : R.includes("WART")) && void 0 !== S && S, W = null !== (w = null == R ? void 0 : R.includes("Vogal")) && void 0 !== w && w, D = null !== (b = null == R ? void 0 : R.includes("Aurohra 2.0")) && void 0 !== b && b, V = null !== (U = null == R ? void 0 : R.includes("RAWART")) && void 0 !== U && U;
                return _ || P || L || E || A || I || C || x || T || $ || j || k || V || O || N || q || M || W || D
            }();
            e(),
                function() {
                    const e = window.open;
                    window.open = function(t, r, n) {
                        var a;
                        return t = c.addUtmParametersToUrl(null !== (a = null == t ? void 0 : t.toString()) && void 0 !== a ? a : ""), e(t, r || "", n || "")
                    }
                }(), r || (t(), function() {
                    const {
                        body: r
                    } = document;
                    new MutationObserver(((r, n) => {
                        const a = e => {
                            if (e.nodeType !== Node.ELEMENT_NODE) return !1;
                            const t = e;
                            return "INPUT" === t.tagName && "hidden" === (null == t ? void 0 : t.type)
                        };
                        r.some((e => Array.from(e.addedNodes).some(a))) || (e(!0), t(!0))
                    })).observe(r, {
                        subtree: !0,
                        childList: !0
                    })
                }(), i.ignoreAllIframes || document.querySelector('link[href="https://api.vturb.com.br"]') || document.querySelectorAll("iframe").forEach((e => {
                    var t;
                    Object.values(s).some((t => e.src.includes(t))) || (null === (t = null == i ? void 0 : i.ignoreClasses) || void 0 === t ? void 0 : t.some((t => e.classList.contains(t)))) || (e.src = c.addUtmParametersToUrl(e.src))
                })))
        }
        const v = () => {
            p(), i.ignoreScriptRetry || (setTimeout(p, 2e3), setTimeout(p, 3e3), setTimeout(p, 5e3), setTimeout(p, 9e3))
        };
        i.fastStart || "complete" === document.readyState ? v() : window.addEventListener("load", v)
    })()
})();