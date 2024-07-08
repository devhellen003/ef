"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2597], {
        67704: function(l, o, n) {
            n.d(o, {
                R: function() {
                    return t
                }
            });
            var i = n(93361),
                a = n(88705),
                e = n(30933);
            let t = () => (0, i.jsxs)("main", {
                className: "container grid min-h-dvh place-content-center place-items-center gap-4",
                children: [(0, i.jsx)(a.default, {
                    src: e.default,
                    alt: "",
                    width: 100,
                    height: 100,
                    className: "animate-float"
                }), (0, i.jsx)("h1", {
                    className: "text-2 text-center text-24 font-semibold",
                    children: "Checking your ether.fi history..."
                })]
            })
        },
        11687: function(l, o, n) {
            n.d(o, {
                Z: function() {
                    return a
                }
            });
            var i = n(93361);

            function a(l) {
                return (0, i.jsxs)("section", {
                    className: "container grid min-h-dvh content-center justify-center justify-items-center gap-12",
                    children: [(0, i.jsx)("div", {
                        className: "space-y-5 text-center",
                        children: (0, i.jsxs)("h1", {
                            className: "text-balance text-32 font-semibold lg:text-56",
                            children: ["Thanks for joining us as we help people ", " ", (0, i.jsx)("span", {
                                className: "text-text-4",
                                children: "save"
                            }), ",", " ", (0, i.jsx)("span", {
                                className: "text-text-4",
                                children: "earn"
                            }), " and", " ", (0, i.jsx)("span", {
                                className: "text-text-4",
                                children: "spend"
                            }), " their crypto"]
                        })
                    }), (0, i.jsx)("div", {
                        className: "flex justify-center p-6 bg-gradient-to-r from-[#9F62F230] to-[#5FEDEB10] rounded-2xl border border-[#47427666]",
                        children: (0, i.jsx)("div", {
                            className: "bg-gradient-to-r from-[#9F62F280] to-[#5FEDEB30] rounded-2xl py-6 px-12 text-center",
                            children: "Claiming has now ended"
                        })
                    })]
                })
            }
        },
        62597: function(l, o, n) {
            n.r(o), n.d(o, {
                AllocationContext: function() {
                    return E
                },
                AllocationProvider: function() {
                    return j
                },
                useAllocation: function() {
                    return z
                }
            });
            var i = n(93361),
                a = n(75809),
                e = n(77094),
                t = n(67704),
                d = n(83460),
                r = n(11687),
                u = n(24593),
                c = n(12867),
                s = n(47723),
                v = n(24238),
                m = n(68015);
            m.z.object({
                address: m.z.string(),
                signature: m.z.string()
            });
            let p = m.z.object({
                    amount: m.z.number(),
                    index: m.z.number().optional(),
                    proof: m.z.array(m.z.string()).optional()
                }),
                x = m.z.object({
                    ineligibleCode: m.z.number().optional(),
                    chain: m.z.number(),
                    totalAllocation: m.z.number(),
                    topUp: m.z.number().optional(),
                    nft: m.z.boolean().optional(),
                    cash: m.z.boolean().optional(),
                    allocation1: p,
                    allocation2: p,
                    allocation3: p
                });
            m.z.object({
                hasAllocation: m.z.boolean(),
                chain: m.z.number(),
                totalAllocation: m.z.number(),
                topUp: m.z.number().optional(),
                nft: m.z.boolean().optional(),
                cash: m.z.boolean().optional(),
                allocation1: p,
                allocation2: p,
                allocation3: p,
                allocation4: p
            });
            var f = n(5175);
            let h = (l, o) => (0, f.q)(x, "/api/s2-allocations/".concat(l), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    address: l,
                    signature: o
                })
            });
            async function A(l, o, n) {
                let i, a;
                if (!n || n < 0) return !1;
                if (1 === l) 1 === o ? (i = c.i2, a = c.x5[1]) : 2 === o ? (i = c.cm, a = c.R6[1]) : 3 === o && (i = c.d7, a = c.PP[1]);
                else if (1 === o || 2 === o || 3 === o) return !1;
                if (!i || !a) return !1;
                try {
                    return await u.SH.readContract({
                        address: a,
                        abi: i,
                        functionName: "isClaimed",
                        args: [BigInt(n)]
                    })
                } catch (l) {
                    return console.error("Error checking if claimed", l), !1
                }
            }

            function b(l, o, n, i, a, e) {
                var t;
                let d = null !== (t = "string" == typeof l ? parseFloat(l) : l) && void 0 !== t ? t : 0;
                return {
                    amount: g(d),
                    index: null != o ? o : -1,
                    proof: null != n ? n : ["0x0"],
                    claimWindowStart: i,
                    claimWindowEnd: a,
                    canClaim: d > 0 && i < Date.now() && a > Date.now() && !e,
                    hasClaimed: e,
                    claimExpired: a < Date.now()
                }
            }

            function g(l) {
                return "number" == typeof l ? Math.floor(10 * l) / 10 : l
            }
            var C = n(49636);
            let E = (0, a.createContext)(null),
                j = l => {
                    let {
                        address: o
                    } = (0, C.useGuard)(), [n, u] = (0, e._)("airdropTermsSignature", ""), {
                        data: c,
                        isError: m,
                        s1IneligibleCode: p,
                        s2IneligibleCode: x
                    } = function(l, o) {
                        var n, i, e, t, d, r, u, c, m, p, x, f, C, E, j, z, D, y, w, N, S, F, U;
                        let {
                            data: R,
                            isError: k,
                            error: B
                        } = (0, s.O)(l), {
                            data: V,
                            isError: H,
                            error: P
                        } = (0, v.a)({
                            queryKey: ["season2Allocations", l, o],
                            queryFn: () => h(l, o),
                            enabled: !!l && "" !== o
                        }), [J, T] = (0, a.useState)(!1), [M, Z] = (0, a.useState)(!1), [_, I] = (0, a.useState)(!1), [G, L] = (0, a.useState)(!1), [O, Q] = (0, a.useState)(!1), [q, K] = (0, a.useState)(!1), [X, W] = (0, a.useState)(!1);
                        if ((0, a.useEffect)(() => {
                                let l = async () => {
                                    var l, o, n, i, a, e;
                                    let t = [A(1, 1, null === (l = R.allocationData) || void 0 === l ? void 0 : l.index), A(1, 2, null === (o = R.allocationData) || void 0 === o ? void 0 : o.index2), A(1, 3, null === (n = R.allocationData) || void 0 === n ? void 0 : n.index3), A(2, 1, null == V ? void 0 : null === (i = V.allocation1) || void 0 === i ? void 0 : i.index), A(2, 2, null == V ? void 0 : null === (a = V.allocation2) || void 0 === a ? void 0 : a.index), A(2, 3, null == V ? void 0 : null === (e = V.allocation3) || void 0 === e ? void 0 : e.index)],
                                        [d, r, u, c, s, v] = await Promise.all(t);
                                    T(d), Z(r), I(u), L(c), Q(s), K(v), W(!0)
                                };
                                X || (!R || R.code) && (!V || V.ineligibleCode) || l()
                            }, [R, V, X]), k || H) return {
                            data: null,
                            isError: !0
                        };
                        if (!R || !V || !X) return {
                            data: null,
                            isError: !1
                        };
                        let Y = null,
                            $ = null,
                            ll = null,
                            lo = 0;
                        R.code || (Y = b(null === (n = R.allocationData) || void 0 === n ? void 0 : n.allocations[0], null === (i = R.allocationData) || void 0 === i ? void 0 : i.index, null === (e = R.allocationData) || void 0 === e ? void 0 : e.proof, 171072e7, 1718522387e3, J), $ = b(null === (t = R.allocationData) || void 0 === t ? void 0 : t.allocations[1], null === (d = R.allocationData) || void 0 === d ? void 0 : d.index2, null === (r = R.allocationData) || void 0 === r ? void 0 : r.proof2, 1713281267e3, 1721057267e3, M), ll = b(null === (u = R.allocationData) || void 0 === u ? void 0 : u.allocations[2], null === (c = R.allocationData) || void 0 === c ? void 0 : c.index3, null === (m = R.allocationData) || void 0 === m ? void 0 : m.proof3, 1718571107e3, 1726347107e3, _), lo = null !== (x = null === (p = R.allocationData) || void 0 === p ? void 0 : p.allocations.reduce((l, o) => l + parseFloat(o), 0)) && void 0 !== x ? x : 0);
                        let ln = null,
                            li = null,
                            la = null,
                            le = 0;
                        return V.ineligibleCode || (ln = b(null == V ? void 0 : null === (f = V.allocation1) || void 0 === f ? void 0 : f.amount, null == V ? void 0 : null === (C = V.allocation1) || void 0 === C ? void 0 : C.index, null == V ? void 0 : null === (E = V.allocation1) || void 0 === E ? void 0 : E.proof, 17207424e5, 17285184e5, G), li = b(null == V ? void 0 : null === (j = V.allocation2) || void 0 === j ? void 0 : j.amount, null == V ? void 0 : null === (z = V.allocation2) || void 0 === z ? void 0 : z.index, null == V ? void 0 : null === (D = V.allocation2) || void 0 === D ? void 0 : D.proof, 17240256e5, 17318016e5, O), la = b(null == V ? void 0 : null === (y = V.allocation3) || void 0 === y ? void 0 : y.amount, null == V ? void 0 : null === (w = V.allocation3) || void 0 === w ? void 0 : w.index, null == V ? void 0 : null === (N = V.allocation3) || void 0 === N ? void 0 : N.proof, 1726704e6, 173448e7, q)), le = (null !== (S = null == ln ? void 0 : ln.amount) && void 0 !== S ? S : 0) + (null !== (F = null == li ? void 0 : li.amount) && void 0 !== F ? F : 0) + (null !== (U = null == la ? void 0 : la.amount) && void 0 !== U ? U : 0), {
                            data: {
                                isValidAddress: R.isValidAddress,
                                season1: {
                                    total: lo,
                                    isEligible: R.isElligible,
                                    canClaim: !!((null == Y ? void 0 : Y.canClaim) || (null == $ ? void 0 : $.canClaim) || (null == ll ? void 0 : ll.canClaim)),
                                    hasClaimed: !!(lo && (!(null == Y ? void 0 : Y.amount) || (null == Y ? void 0 : Y.hasClaimed)) && (!(null == $ ? void 0 : $.amount) || (null == $ ? void 0 : $.hasClaimed)) && (!(null == ll ? void 0 : ll.amount) || (null == ll ? void 0 : ll.hasClaimed))),
                                    claimsExpired: !!(lo && (!(null == Y ? void 0 : Y.amount) || (null == Y ? void 0 : Y.claimExpired)) && (!(null == $ ? void 0 : $.amount) || (null == $ ? void 0 : $.claimExpired)) && (!(null == ll ? void 0 : ll.amount) || (null == ll ? void 0 : ll.claimExpired))),
                                    allocation1: Y,
                                    allocation2: $,
                                    allocation3: ll
                                },
                                season2: {
                                    total: g(le),
                                    topUp: g(V.topUp),
                                    nft: V.nft,
                                    cash: V.cash,
                                    isEligible: !!le,
                                    canClaim: !!((null == ln ? void 0 : ln.canClaim) || (null == li ? void 0 : li.canClaim) || (null == la ? void 0 : la.canClaim)),
                                    hasClaimed: !!(le && (!(null == ln ? void 0 : ln.amount) || (null == ln ? void 0 : ln.hasClaimed)) && (!(null == li ? void 0 : li.amount) || (null == li ? void 0 : li.hasClaimed)) && (!(null == la ? void 0 : la.amount) || (null == la ? void 0 : la.hasClaimed))),
                                    claimsExpired: !!(le && (!(null == ln ? void 0 : ln.amount) || (null == ln ? void 0 : ln.claimExpired)) && (!(null == li ? void 0 : li.amount) || (null == li ? void 0 : li.claimExpired)) && (!(null == la ? void 0 : la.amount) || (null == la ? void 0 : la.claimExpired))),
                                    allocation1: ln,
                                    allocation2: li,
                                    allocation3: la
                                }
                            },
                            isError: !1,
                            s1IneligibleCode: R.code,
                            s2IneligibleCode: V.ineligibleCode
                        }
                    }(o, n);
                    return m ? (0, i.jsx)(d.B, {
                        code: 50
                    }) : c ? c.season1.canClaim || c.season2.isEligible ? (0, i.jsx)(E.Provider, {
                        value: {
                            allocation: c
                        },
                        children: l.children
                    }) : c.season2.claimsExpired ? (0, i.jsx)(r.Z, {
                        allocation: c
                    }) : (0, i.jsx)(d.B, {
                        code: null != x ? x : 55
                    }) : (0, i.jsx)(t.R, {})
                },
                z = () => {
                    let l = (0, a.useContext)(E);
                    if (!l) throw Error("useAllocation must be used within a AllocationProvider");
                    return l
                }
        },
        30933: function(l, o, n) {
            n.r(o), o.default = {
                src: "/_next/static/media/diamond-fs8.b63e9966.png",
                height: 344,
                width: 372,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEVMaXEiHFJtJkxVUZpfZLE2VpVmZr4+RnQ6RHClftWgfNPklf29UXCvAAAAC3RSTlMADgluv5v3g3/9/AjD0GUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicJcjHEQAwDAJBhIKD+u/XI8znmAUAEhr3+s+rfGrRHSY5VwJmCgCbPg6LAHL7f+eRAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 7
            }
        }
    }
]);