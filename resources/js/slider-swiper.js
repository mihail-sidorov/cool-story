$(document).ready(function () {
    document.querySelectorAll(".reviews-slider-js").forEach((function (e, t) {
        e.classList.add("reviews-slider-" + t), e.parentNode.querySelector(".swiper-button-next").classList.add("reviews-slider-next-" + t), e.parentNode.querySelector(".swiper-button-prev").classList.add("reviews-slider-prev-" + t);
        var n = e.querySelectorAll(".swiper-slide").length,
            i = Math.round(n / 2 - .1);
        new Swiper(".reviews-slider-" + t, {
            navigation: {
                prevEl: ".reviews-slider-prev-" + t,
                nextEl: ".reviews-slider-next-" + t
            },
            effect: "coverflow",
            grabCursor: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            initialSlide: i,
            loop: !0,
            on: {
                slideChangeTransitionEnd: function () {
                    window.blazy && window.blazy.revalidate()
                },
                slideChange: function () {
                    window.blazy && window.blazy.revalidate();
                    var e = parseInt(($(window).width() - 400) / 300) || 1,
                        t = Array.from(this.slides),
                        n = this.activeIndex;
                    t.forEach((function (t, i) {
                        if (Math.abs(n - i) > e) t.style.opacity = 0;
                        else {
                            var s = 1 - .1 * Math.abs(n - i);
                            s < .1 && (s = .1), t.style.opacity = s
                        }
                    }))
                }
            }
        })
    }));

    ! function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/wp-content/themes/albom-deti/dist/", n(n.s = 60)
    }({
        60: function (e, t, n) {
            "use strict";
            n.r(t);
            window.isMobileDetect = n(63), isMobileDetect.any && document.body.classList.add("mobile"), n(65), $(document).on("click", ".link-disabled", (function (e) {
                e.preventDefault()
            })), $(document).on("click", ".smooth-scroll-btn", (function (e) {
                e.preventDefault();
                var t = $(this.getAttribute("href")).offset().top;
                smoothScrollTo(t)
            })), $(document).on("mousedown touchstart click mousemove touchmove", ".masked-label", (function (e) {
                e.stopPropagation()
            })), $(".btn-whatsapp-js").click((function () {
                yaCounter49857403 && yaCounter49857403.reachGoal("whatsapp_samples_button")
            }));
            isMobileDetect.any && IntersectionObserver && (window.slidersSwipeObserver = new IntersectionObserver((function (e, t) {
                e.forEach((function (e) {
                    e.isIntersecting && !e.target.classList.contains("lock-swipe-anim") && (playSwipeAnimation(e.target), e.target.classList.add("lock-swipe-anim"))
                }))
            }), {
                threshold: .8
            }), window.slidersSwipeClearObserver = new IntersectionObserver((function (e, t) {
                e.forEach((function (e) {
                    e.isIntersecting || e.target.classList.remove("lock-swipe-anim")
                }))
            }), {
                threshold: 0
            }))
        },
        63: function (e, t, n) {
            var o, i, r;
            ! function (n) {
                var s = /iPhone/i,
                    a = /iPod/i,
                    c = /iPad/i,
                    l = /\bAndroid(?:.+)Mobile\b/i,
                    d = /Android/i,
                    u = /\bAndroid(?:.+)SD4930UR\b/i,
                    f = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
                    p = /Windows Phone/i,
                    m = /\bWindows(?:.+)ARM\b/i,
                    h = /BlackBerry/i,
                    v = /BB10/i,
                    w = /Opera Mini/i,
                    y = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                    g = /Mobile(?:.+)Firefox\b/i;

                function b(e, t) {
                    return e.test(t)
                }

                function E(e) {
                    var t = e || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                        n = t.split("[FBAN");
                    void 0 !== n[1] && (t = n[0]), void 0 !== (n = t.split("Twitter"))[1] && (t = n[0]);
                    var o = {
                        apple: {
                            phone: b(s, t) && !b(p, t),
                            ipod: b(a, t),
                            tablet: !b(s, t) && b(c, t) && !b(p, t),
                            device: (b(s, t) || b(a, t) || b(c, t)) && !b(p, t)
                        },
                        amazon: {
                            phone: b(u, t),
                            tablet: !b(u, t) && b(f, t),
                            device: b(u, t) || b(f, t)
                        },
                        android: {
                            phone: !b(p, t) && b(u, t) || !b(p, t) && b(l, t),
                            tablet: !b(p, t) && !b(u, t) && !b(l, t) && (b(f, t) || b(d, t)),
                            device: !b(p, t) && (b(u, t) || b(f, t) || b(l, t) || b(d, t)) || b(/\bokhttp\b/i, t)
                        },
                        windows: {
                            phone: b(p, t),
                            tablet: b(m, t),
                            device: b(p, t) || b(m, t)
                        },
                        other: {
                            blackberry: b(h, t),
                            blackberry10: b(v, t),
                            opera: b(w, t),
                            firefox: b(g, t),
                            chrome: b(y, t),
                            device: b(h, t) || b(v, t) || b(w, t) || b(g, t) || b(y, t)
                        }
                    };
                    return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o
                }
                e.exports && "undefined" == typeof window ? e.exports = E : e.exports && "undefined" != typeof window ? (e.exports = E(), e.exports.isMobile = E) : (i = [], o = n.isMobile = E(), void 0 === (r = "function" == typeof o ? o.apply(t, i) : o) || (e.exports = r))
            }(this)
        },
        65: function (e, t) {
            ! function () {
                var e, t, n, o;

                function i(e) {
                    var t = e._util;
                    t.elements = function (e) {
                        for (var t = [], n = e.root.querySelectorAll(e.selector), o = n.length; o--; t.unshift(n[o]));
                        return t
                    }(e.options), t.count = t.elements.length, t.destroyed && (t.destroyed = !1, e.options.container && E(e.options.container, (function (e) {
                        g(e, "scroll", t.validateT)
                    })), g(window, "resize", t.saveViewportOffsetT), g(window, "resize", t.validateT), g(window, "scroll", t.validateT)), r(e)
                }

                function r(e) {
                    for (var t = e._util, n = 0; n < t.count; n++) {
                        var o = t.elements[n];
                        (s(o, e.options) || v(o, e.options.successClass)) && (e.load(o), t.elements.splice(n, 1), t.count--, n--)
                    }
                    0 === t.count && e.destroy()
                }

                function s(e, n) {
                    var i = e.getBoundingClientRect();
                    if (n.container && o) {
                        var r = e.closest(n.containerClass);
                        if (r) {
                            var s = r.getBoundingClientRect();
                            if (a(s, t)) {
                                var c = s.top - n.offset,
                                    l = s.right + n.offset,
                                    d = s.bottom + n.offset,
                                    u = s.left - n.offset;
                                return a(i, {
                                    top: c > t.top ? c : t.top,
                                    right: l < t.right ? l : t.right,
                                    bottom: d < t.bottom ? d : t.bottom,
                                    left: u > t.left ? u : t.left
                                })
                            }
                            return !1
                        }
                    }
                    return a(i, t)
                }

                function a(e, t) {
                    return e.right >= t.left && e.bottom >= t.top && e.left <= t.right && e.top <= t.bottom
                }

                function c(t, o, i) {
                    if (!v(t, i.successClass) && (o || i.loadInvisible || t.offsetWidth > 0 && t.offsetHeight > 0)) {
                        var r = p(t, e) || p(t, i.src);
                        if (r) {
                            var s = r.split(i.separator),
                                a = s[n && s.length > 1 ? 1 : 0],
                                c = p(t, i.srcset),
                                f = h(t, "img"),
                                m = t.parentNode,
                                y = m && h(m, "picture");
                            if (f || void 0 === t.src) {
                                var O = new Image,
                                    _ = function e() {
                                        i.error && i.error(t, "invalid"), w(t, i.errorClass), b(O, "error", e), b(O, "load", L)
                                    },
                                    L = function e() {
                                        f ? y || u(t, a, c) : t.style.backgroundImage = 'url("' + a + '")', l(t, i), b(O, "load", e), b(O, "error", _)
                                    };
                                y && (O = t, E(m.getElementsByTagName("source"), (function (e) {
                                    d(e, "srcset", i.srcset)
                                }))), g(O, "error", _), g(O, "load", L), u(O, a, c)
                            } else t.src = a, l(t, i)
                        } else h(t, "video") ? (E(t.getElementsByTagName("source"), (function (e) {
                            d(e, "src", i.src)
                        })), t.load(), l(t, i)) : (i.error && i.error(t, "missing"), w(t, i.errorClass))
                    }
                }

                function l(e, t) {
                    w(e, t.successClass), t.success && t.success(e), m(e, t.src), m(e, t.srcset), E(t.breakpoints, (function (t) {
                        m(e, t.src)
                    }))
                }

                function d(e, t, n) {
                    var o = p(e, n);
                    o && (f(e, t, o), m(e, n))
                }

                function u(e, t, n) {
                    n && f(e, "srcset", n), e.src = t
                }

                function f(e, t, n) {
                    e.setAttribute(t, n)
                }

                function p(e, t) {
                    return e.getAttribute(t)
                }

                function m(e, t) {
                    e.removeAttribute(t)
                }

                function h(e, t) {
                    return e.nodeName.toLowerCase() === t
                }

                function v(e, t) {
                    return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
                }

                function w(e, t) {
                    v(e, t) || (e.className += " " + t)
                }

                function y(e) {
                    t.bottom = (window.innerHeight || document.documentElement.clientHeight) + e, t.right = (window.innerWidth || document.documentElement.clientWidth) + e
                }

                function g(e, t, n) {
                    e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, n) : e.addEventListener(t, n, {
                        capture: !1,
                        passive: !0
                    })
                }

                function b(e, t, n) {
                    e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, n) : e.removeEventListener(t, n, {
                        capture: !1,
                        passive: !0
                    })
                }

                function E(e, t) {
                    if (e && t)
                        for (var n = e.length, o = 0; o < n && !1 !== t(e[o], o); o++);
                }

                function O(e, t, n) {
                    var o = 0;
                    return function () {
                        var i = +new Date;
                        i - o < t || (o = i, e.apply(n, arguments))
                    }
                }
                window.Blazy = function (s) {
                    var a = this,
                        l = a._util = {};
                    l.elements = [], l.destroyed = !0, a.options = s || {}, a.options.error = a.options.error || !1, a.options.offset = a.options.offset || 100, a.options.root = a.options.root || document, a.options.success = a.options.success || !1, a.options.selector = a.options.selector || ".b-lazy", a.options.separator = a.options.separator || "|", a.options.containerClass = a.options.container, a.options.container = !!a.options.containerClass && document.querySelectorAll(a.options.containerClass), a.options.errorClass = a.options.errorClass || "b-error", a.options.breakpoints = a.options.breakpoints || !1, a.options.loadInvisible = a.options.loadInvisible || !1, a.options.successClass = a.options.successClass || "b-loaded", a.options.validateDelay = a.options.validateDelay || 25, a.options.saveViewportOffsetDelay = a.options.saveViewportOffsetDelay || 50, a.options.srcset = a.options.srcset || "data-srcset", a.options.src = e = a.options.src || "data-src", o = Element.prototype.closest, n = window.devicePixelRatio > 1, (t = {}).top = 0 - a.options.offset, t.left = 0 - a.options.offset, a.revalidate = function () {
                        i(a)
                    }, a.load = function (e, t) {
                        var n = this.options;
                        e && void 0 === e.length ? c(e, t, n) : E(e, (function (e) {
                            c(e, t, n)
                        }))
                    }, a.destroy = function () {
                        var e = a._util;
                        a.options.container && E(a.options.container, (function (t) {
                            b(t, "scroll", e.validateT)
                        })), b(window, "scroll", e.validateT), b(window, "resize", e.validateT), b(window, "resize", e.saveViewportOffsetT), e.count = 0, e.elements.length = 0, e.destroyed = !0
                    }, l.validateT = O((function () {
                        r(a)
                    }), a.options.validateDelay, a), l.saveViewportOffsetT = O((function () {
                        y(a.options.offset)
                    }), a.options.saveViewportOffsetDelay, a), y(a.options.offset), E(a.options.breakpoints, (function (t) {
                        if (t.width >= window.screen.width) return e = t.src, !1
                    })), setTimeout((function () {
                        i(a)
                    }))
                }
            }(), window.blazy = new Blazy
        },
    });
});