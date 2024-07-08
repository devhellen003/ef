(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        34322: function(e, l, n) {
            Promise.resolve().then(n.bind(n, 63309))
        },
        63309: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return u
                }
            });
            var a = n(93361),
                s = n(11687),
                i = n(66221),
                t = n(66492);

            function c(e) {
                let l = o(e.allocation.season1),
                    n = r(e.allocation.season1),
                    s = o(e.allocation.season2),
                    c = r(e.allocation.season2);
                return (0, a.jsx)("section", {
                    className: "container grid min-h-dvh content-center justify-center justify-items-center gap-12",
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-start justify-center gap-20 sm:flex-row",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center",
                            children: [(0, a.jsxs)("div", {
                                className: "relative flex h-20 w-20 items-center justify-center",
                                children: [(0, a.jsx)("img", {
                                    src: "/images/season-circle.png",
                                    alt: "season 1 badge",
                                    className: "absolute z-10 h-20 w-20"
                                }), (0, a.jsx)("p", {
                                    className: "z-20 ml-1 text-4xl",
                                    children: "S1"
                                })]
                            }), (0, a.jsx)("h2", {
                                className: "mb-6 mt-2 text-xl",
                                children: "Season 1"
                            }), (0, a.jsx)(t.default, {
                                href: "/season-1",
                                children: (0, a.jsx)(i.z, {
                                    variant: "primary",
                                    className: "w-52",
                                    children: l
                                })
                            }), n ? (0, a.jsxs)("p", {
                                className: "mt-6 text-center text-sm font-light text-link-blue",
                                children: ["Claim period ends", (0, a.jsx)("br", {}), n]
                            }) : null]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center",
                            children: [(0, a.jsxs)("div", {
                                className: "relative flex h-20 w-20 items-center justify-center",
                                children: [(0, a.jsx)("img", {
                                    src: "/images/season-circle.png",
                                    alt: "season 2 badge",
                                    className: "absolute z-10 h-20 w-20"
                                }), (0, a.jsx)("p", {
                                    className: "z-20 text-4xl",
                                    children: "S2"
                                })]
                            }), (0, a.jsx)("h2", {
                                className: "mb-6 mt-2 text-xl",
                                children: "Season 2"
                            }), (0, a.jsx)(t.default, {
                                href: "/season-2",
                                children: (0, a.jsx)(i.z, {
                                    variant: "primary",
                                    className: "w-52",
                                    children: s
                                })
                            }), c ? (0, a.jsxs)("p", {
                                className: "mt-6 text-center text-sm font-light text-link-blue",
                                children: ["Claim period ends", (0, a.jsx)("br", {}), c]
                            }) : null]
                        })]
                    })
                })
            }

            function o(e) {
                return e.canClaim ? "Claim your ETHFI" : "Continue"
            }

            function r(e) {
                var l, n, a, s, i, t;
                return e.canClaim ? (null === (l = e.allocation1) || void 0 === l ? void 0 : l.canClaim) && (null === (n = e.allocation1) || void 0 === n ? void 0 : n.claimWindowEnd) ? new Date(e.allocation1.claimWindowEnd).toLocaleDateString() : (null === (a = e.allocation2) || void 0 === a ? void 0 : a.canClaim) && (null === (s = e.allocation2) || void 0 === s ? void 0 : s.claimWindowEnd) ? new Date(e.allocation2.claimWindowEnd).toLocaleDateString() : (null === (i = e.allocation3) || void 0 === i ? void 0 : i.canClaim) && (null === (t = e.allocation3) || void 0 === t ? void 0 : t.claimWindowEnd) ? new Date(e.allocation3.claimWindowEnd).toLocaleDateString() : null : null
            }
            var d = n(62597),
                m = n(51124);

            function u() {
                let {
                    push: e
                } = (0, m.useRouter)(), {
                    allocation: l
                } = (0, d.useAllocation)(), n = l.season1.isEligible && l.season1.canClaim, i = l.season2.isEligible;
                return n && i ? (0, a.jsx)(c, {
                    allocation: l
                }) : n ? (e("/season-1"), null) : i ? (e("/season-2"), null) : (0, a.jsx)(s.Z, {
                    allocation: l
                })
            }
        }
    },
    function(e) {
        e.O(0, [4692, 8095, 7094, 5030, 6492, 6551, 2597, 65, 4445, 1744], function() {
            return e(e.s = 34322)
        }), _N_E = e.O()
    }
]);