(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6606], {
        88022: function() {},
        75715: function() {},
        16562: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__Open_Sans_0993c4', '__Open_Sans_Fallback_0993c4'",
                    fontStyle: "normal"
                },
                className: "__className_0993c4"
            }
        },
        80277: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return o
                }
            });
            var a = i(61012),
                r = "#1A1B1F",
                s = {
                    blue: {
                        accentColor: "#3898FF",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#4BD166",
                        accentColorForeground: r
                    },
                    orange: {
                        accentColor: "#FF983D",
                        accentColorForeground: r
                    },
                    pink: {
                        accentColor: "#FF7AB8",
                        accentColorForeground: r
                    },
                    purple: {
                        accentColor: "#7A70FF",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FF6257",
                        accentColorForeground: "#FFF"
                    }
                },
                n = s.blue,
                o = function() {
                    let {
                        accentColor: t = n.accentColor,
                        accentColorForeground: e = n.accentColorForeground,
                        ...i
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return { ...(0, a.w)(i),
                        colors: {
                            accentColor: t,
                            accentColorForeground: e,
                            actionButtonBorder: "rgba(255, 255, 255, 0.04)",
                            actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
                            actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
                            closeButton: "rgba(224, 232, 255, 0.6)",
                            closeButtonBackground: "rgba(255, 255, 255, 0.08)",
                            connectButtonBackground: r,
                            connectButtonBackgroundError: "#FF494A",
                            connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
                            connectButtonText: "#FFF",
                            connectButtonTextError: "#FFF",
                            connectionIndicator: "#30E000",
                            downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
                            downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
                            error: "#FF494A",
                            generalBorder: "rgba(255, 255, 255, 0.08)",
                            generalBorderDim: "rgba(255, 255, 255, 0.04)",
                            menuItemBackground: "rgba(224, 232, 255, 0.1)",
                            modalBackdrop: "rgba(0, 0, 0, 0.5)",
                            modalBackground: "#1A1B1F",
                            modalBorder: "rgba(255, 255, 255, 0.08)",
                            modalText: "#FFF",
                            modalTextDim: "rgba(224, 232, 255, 0.3)",
                            modalTextSecondary: "rgba(255, 255, 255, 0.6)",
                            profileAction: "rgba(224, 232, 255, 0.1)",
                            profileActionHover: "rgba(224, 232, 255, 0.2)",
                            profileForeground: "rgba(224, 232, 255, 0.05)",
                            selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
                            standby: "#FFD641"
                        },
                        shadows: {
                            connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                            profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                            selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                            selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                            walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                        }
                    }
                };
            o.accentColors = s
        },
        27732: function(t, e, i) {
            "use strict";
            i.d(e, {
                S: function() {
                    return G
                }
            });
            var a, r, s, n, o, l, u, h, c, d, p, f, _, g, y, m, b, w, F, k, q, A, M = i(19773),
                C = i(50025),
                O = i(95822),
                D = i(1078);

            function S(t, e) {
                var i = (0, D.J)(t, e, "update");
                return function(t, e) {
                    if (e.set) {
                        if (!e.get) throw TypeError("attempted to read set only private field");
                        return "__destrWrapper" in e || (e.__destrWrapper = {
                            set value(v) {
                                e.set.call(t, v)
                            },
                            get value() {
                                return e.get.call(t)
                            }
                        }), e.__destrWrapper
                    }
                    if (!e.writable) throw TypeError("attempted to set read only private field");
                    return e
                }(t, i)
            }
            var B = i(25598),
                P = i(5869),
                Q = i(77578),
                x = i(25123),
                E = i(87248),
                T = i(43603),
                W = (a = new WeakMap, r = new WeakMap, s = new WeakMap, n = new WeakMap, o = new WeakMap, l = new WeakMap, u = new WeakMap, h = new WeakMap, c = new WeakSet, d = new WeakSet, class extends T.F {
                    get meta() {
                        return this.options.meta
                    }
                    optionalRemove() {
                        (0, M._)(this, l).length || "idle" !== this.state.fetchStatus || (0, M._)(this, s).remove(this)
                    }
                    setData(t, e) {
                        let i = (0, B.oE)(this.state.data, t, this.options);
                        return (0, P._)(this, d, R).call(this, {
                            data: i,
                            type: "success",
                            dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                            manual: null == e ? void 0 : e.manual
                        }), i
                    }
                    setState(t, e) {
                        (0, P._)(this, d, R).call(this, {
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        var e;
                        let i = (0, M._)(this, n);
                        return null === (e = (0, M._)(this, o)) || void 0 === e || e.cancel(t), i ? i.then(B.ZT).catch(B.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState((0, M._)(this, a))
                    }
                    isActive() {
                        return (0, M._)(this, l).some(t => !1 !== t.options.enabled)
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return this.state.isInvalidated || void 0 === this.state.data || (0, M._)(this, l).some(t => t.getCurrentResult().isStale)
                    }
                    isStaleByTime() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, B.Kp)(this.state.dataUpdatedAt, t)
                    }
                    onFocus() {
                        var t;
                        let e = (0, M._)(this, l).find(t => t.shouldFetchOnWindowFocus());
                        null == e || e.refetch({
                            cancelRefetch: !1
                        }), null === (t = (0, M._)(this, o)) || void 0 === t || t.continue()
                    }
                    onOnline() {
                        var t;
                        let e = (0, M._)(this, l).find(t => t.shouldFetchOnReconnect());
                        null == e || e.refetch({
                            cancelRefetch: !1
                        }), null === (t = (0, M._)(this, o)) || void 0 === t || t.continue()
                    }
                    addObserver(t) {
                        (0, M._)(this, l).includes(t) || ((0, M._)(this, l).push(t), this.clearGcTimeout(), (0, M._)(this, s).notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        (0, M._)(this, l).includes(t) && ((0, O._)(this, l, (0, M._)(this, l).filter(e => e !== t)), (0, M._)(this, l).length || ((0, M._)(this, o) && ((0, M._)(this, h) ? (0, M._)(this, o).cancel({
                            revert: !0
                        }) : (0, M._)(this, o).cancelRetry()), this.scheduleGc()), (0, M._)(this, s).notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return (0, M._)(this, l).length
                    }
                    invalidate() {
                        this.state.isInvalidated || (0, P._)(this, d, R).call(this, {
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        var i, a, u, p;
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && (null == e ? void 0 : e.cancelRefetch)) this.cancel({
                                silent: !0
                            });
                            else if ((0, M._)(this, n)) return null === (u = (0, M._)(this, o)) || void 0 === u || u.continueRetry(), (0, M._)(this, n)
                        }
                        if (t && (0, P._)(this, c, K).call(this, t), !this.options.queryFn) {
                            let t = (0, M._)(this, l).find(t => t.options.queryFn);
                            t && (0, P._)(this, c, K).call(this, t.options)
                        }
                        let f = new AbortController,
                            _ = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            },
                            g = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => ((0, O._)(this, h, !0), f.signal)
                                })
                            };
                        g(_);
                        let y = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: () => this.options.queryFn && this.options.queryFn !== B.CN ? ((0, O._)(this, h, !1), this.options.persister) ? this.options.persister(this.options.queryFn, _, this) : this.options.queryFn(_) : Promise.reject(Error("Missing queryFn: '".concat(this.options.queryHash, "'")))
                        };
                        g(y), null === (i = this.options.behavior) || void 0 === i || i.onFetch(y, this), (0, O._)(this, r, this.state), ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null === (a = y.fetchOptions) || void 0 === a ? void 0 : a.meta)) && (0, P._)(this, d, R).call(this, {
                            type: "fetch",
                            meta: null === (p = y.fetchOptions) || void 0 === p ? void 0 : p.meta
                        });
                        let m = t => {
                            if ((0, E.DV)(t) && t.silent || (0, P._)(this, d, R).call(this, {
                                    type: "error",
                                    error: t
                                }), !(0, E.DV)(t)) {
                                var e, i, a, r;
                                null === (e = (i = (0, M._)(this, s).config).onError) || void 0 === e || e.call(i, t, this), null === (a = (r = (0, M._)(this, s).config).onSettled) || void 0 === a || a.call(r, this.state.data, t, this)
                            }
                            this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return (0, O._)(this, o, (0, E.Mz)({
                            fn: y.fetchFn,
                            abort: f.abort.bind(f),
                            onSuccess: t => {
                                var e, i, a, r;
                                if (void 0 === t) {
                                    m(Error("".concat(this.queryHash, " data is undefined")));
                                    return
                                }
                                this.setData(t), null === (e = (i = (0, M._)(this, s).config).onSuccess) || void 0 === e || e.call(i, t, this), null === (a = (r = (0, M._)(this, s).config).onSettled) || void 0 === a || a.call(r, t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: m,
                            onFail: (t, e) => {
                                (0, P._)(this, d, R).call(this, {
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                (0, P._)(this, d, R).call(this, {
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                (0, P._)(this, d, R).call(this, {
                                    type: "continue"
                                })
                            },
                            retry: y.options.retry,
                            retryDelay: y.options.retryDelay,
                            networkMode: y.options.networkMode
                        })), (0, O._)(this, n, (0, M._)(this, o).promise), (0, M._)(this, n)
                    }
                    constructor(t) {
                        super(), (0, Q._)(this, c), (0, Q._)(this, d), (0, C._)(this, a, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, r, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, s, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, n, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, o, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, l, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, u, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, h, {
                            writable: !0,
                            value: void 0
                        }), (0, O._)(this, h, !1), (0, O._)(this, u, t.defaultOptions), (0, P._)(this, c, K).call(this, t.options), (0, O._)(this, l, []), (0, O._)(this, s, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, (0, O._)(this, a, t.state || function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                i = void 0 !== e,
                                a = i ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: i ? null != a ? a : Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: i ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options)), this.state = (0, M._)(this, a), this.scheduleGc()
                    }
                });

            function K(t) {
                this.options = { ...(0, M._)(this, u),
                    ...t
                }, this.updateGcTime(this.options.gcTime)
            }

            function R(t) {
                this.state = (e => {
                    var i, a;
                    switch (t.type) {
                        case "failed":
                            return { ...e,
                                fetchFailureCount: t.failureCount,
                                fetchFailureReason: t.error
                            };
                        case "pause":
                            return { ...e,
                                fetchStatus: "paused"
                            };
                        case "continue":
                            return { ...e,
                                fetchStatus: "fetching"
                            };
                        case "fetch":
                            return { ...e,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null !== (i = t.meta) && void 0 !== i ? i : null,
                                fetchStatus: (0, E.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                ...void 0 === e.data && {
                                    error: null,
                                    status: "pending"
                                }
                            };
                        case "success":
                            return { ...e,
                                data: t.data,
                                dataUpdateCount: e.dataUpdateCount + 1,
                                dataUpdatedAt: null !== (a = t.dataUpdatedAt) && void 0 !== a ? a : Date.now(),
                                error: null,
                                isInvalidated: !1,
                                status: "success",
                                ...!t.manual && {
                                    fetchStatus: "idle",
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null
                                }
                            };
                        case "error":
                            let s = t.error;
                            if ((0, E.DV)(s) && s.revert && (0, M._)(this, r)) return { ...(0, M._)(this, r),
                                fetchStatus: "idle"
                            };
                            return { ...e,
                                error: s,
                                errorUpdateCount: e.errorUpdateCount + 1,
                                errorUpdatedAt: Date.now(),
                                fetchFailureCount: e.fetchFailureCount + 1,
                                fetchFailureReason: s,
                                fetchStatus: "idle",
                                status: "error"
                            };
                        case "invalidate":
                            return { ...e,
                                isInvalidated: !0
                            };
                        case "setState":
                            return { ...e,
                                ...t.state
                            }
                    }
                })(this.state), x.V.batch(() => {
                    (0, M._)(this, l).forEach(t => {
                        t.onQueryUpdate()
                    }), (0, M._)(this, s).notify({
                        query: this,
                        type: "updated",
                        action: t
                    })
                })
            }
            var V = i(48701),
                H = (p = new WeakMap, class extends V.l {
                    build(t, e, i) {
                        var a;
                        let r = e.queryKey,
                            s = null !== (a = e.queryHash) && void 0 !== a ? a : (0, B.Rm)(r, e),
                            n = this.get(s);
                        return n || (n = new W({
                            cache: this,
                            queryKey: r,
                            queryHash: s,
                            options: t.defaultQueryOptions(e),
                            state: i,
                            defaultOptions: t.getQueryDefaults(r)
                        }), this.add(n)), n
                    }
                    add(t) {
                        (0, M._)(this, p).has(t.queryHash) || ((0, M._)(this, p).set(t.queryHash, t), this.notify({
                            type: "added",
                            query: t
                        }))
                    }
                    remove(t) {
                        let e = (0, M._)(this, p).get(t.queryHash);
                        e && (t.destroy(), e === t && (0, M._)(this, p).delete(t.queryHash), this.notify({
                            type: "removed",
                            query: t
                        }))
                    }
                    clear() {
                        x.V.batch(() => {
                            this.getAll().forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    get(t) {
                        return (0, M._)(this, p).get(t)
                    }
                    getAll() {
                        return [...(0, M._)(this, p).values()]
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return this.getAll().find(t => (0, B._x)(e, t))
                    }
                    findAll() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.getAll();
                        return Object.keys(t).length > 0 ? e.filter(e => (0, B._x)(t, e)) : e
                    }
                    notify(t) {
                        x.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    onFocus() {
                        x.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        x.V.batch(() => {
                            this.getAll().forEach(t => {
                                t.onOnline()
                            })
                        })
                    }
                    constructor(t = {}) {
                        super(), (0, C._)(this, p, {
                            writable: !0,
                            value: void 0
                        }), this.config = t, (0, O._)(this, p, new Map)
                    }
                }),
                U = i(20517),
                I = (f = new WeakMap, _ = new WeakMap, g = new WeakMap, class extends V.l {
                    build(t, e, i) {
                        let a = new U.m({
                            mutationCache: this,
                            mutationId: ++S(this, _).value,
                            options: t.defaultMutationOptions(e),
                            state: i
                        });
                        return this.add(a), a
                    }
                    add(t) {
                        (0, M._)(this, f).push(t), this.notify({
                            type: "added",
                            mutation: t
                        })
                    }
                    remove(t) {
                        (0, O._)(this, f, (0, M._)(this, f).filter(e => e !== t)), this.notify({
                            type: "removed",
                            mutation: t
                        })
                    }
                    clear() {
                        x.V.batch(() => {
                            (0, M._)(this, f).forEach(t => {
                                this.remove(t)
                            })
                        })
                    }
                    getAll() {
                        return (0, M._)(this, f)
                    }
                    find(t) {
                        let e = {
                            exact: !0,
                            ...t
                        };
                        return (0, M._)(this, f).find(t => (0, B.X7)(e, t))
                    }
                    findAll() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, M._)(this, f).filter(e => (0, B.X7)(t, e))
                    }
                    notify(t) {
                        x.V.batch(() => {
                            this.listeners.forEach(e => {
                                e(t)
                            })
                        })
                    }
                    resumePausedMutations() {
                        var t;
                        return (0, O._)(this, g, (null !== (t = (0, M._)(this, g)) && void 0 !== t ? t : Promise.resolve()).then(() => {
                            let t = (0, M._)(this, f).filter(t => t.state.isPaused);
                            return x.V.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(B.ZT)), Promise.resolve()))
                        }).then(() => {
                            (0, O._)(this, g, void 0)
                        })), (0, M._)(this, g)
                    }
                    constructor(t = {}) {
                        super(), (0, C._)(this, f, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, _, {
                            writable: !0,
                            value: void 0
                        }), (0, C._)(this, g, {
                            writable: !0,
                            value: void 0
                        }), this.config = t, (0, O._)(this, f, []), (0, O._)(this, _, 0)
                    }
                }),
                j = i(98238),
                Z = i(81894);

            function N(t, e) {
                let {
                    pages: i,
                    pageParams: a
                } = e, r = i.length - 1;
                return t.getNextPageParam(i[r], i, a[r], a)
            }
            var G = (y = new WeakMap, m = new WeakMap, b = new WeakMap, w = new WeakMap, F = new WeakMap, k = new WeakMap, q = new WeakMap, A = new WeakMap, class {
                mount() {
                    S(this, k).value++, 1 === (0, M._)(this, k) && ((0, O._)(this, q, j.j.subscribe(() => {
                        j.j.isFocused() && (this.resumePausedMutations(), (0, M._)(this, y).onFocus())
                    })), (0, O._)(this, A, Z.N.subscribe(t => {
                        t && (this.resumePausedMutations(), (0, M._)(this, y).onOnline())
                    })))
                }
                unmount() {
                    var t, e;
                    S(this, k).value--, 0 === (0, M._)(this, k) && (null === (t = (0, M._)(this, q)) || void 0 === t || t.call(this), (0, O._)(this, q, void 0), null === (e = (0, M._)(this, A)) || void 0 === e || e.call(this), (0, O._)(this, A, void 0))
                }
                isFetching(t) {
                    return (0, M._)(this, y).findAll({ ...t,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(t) {
                    return (0, M._)(this, m).findAll({ ...t,
                        status: "pending"
                    }).length
                }
                getQueryData(t) {
                    var e;
                    let i = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return null === (e = (0, M._)(this, y).get(i.queryHash)) || void 0 === e ? void 0 : e.state.data
                }
                ensureQueryData(t) {
                    let e = this.getQueryData(t.queryKey);
                    return void 0 !== e ? Promise.resolve(e) : this.fetchQuery(t)
                }
                getQueriesData(t) {
                    return this.getQueryCache().findAll(t).map(t => {
                        let {
                            queryKey: e,
                            state: i
                        } = t;
                        return [e, i.data]
                    })
                }
                setQueryData(t, e, i) {
                    let a = this.defaultQueryOptions({
                            queryKey: t
                        }),
                        r = (0, M._)(this, y).get(a.queryHash),
                        s = null == r ? void 0 : r.state.data,
                        n = (0, B.SE)(e, s);
                    if (void 0 !== n) return (0, M._)(this, y).build(this, a).setData(n, { ...i,
                        manual: !0
                    })
                }
                setQueriesData(t, e, i) {
                    return x.V.batch(() => this.getQueryCache().findAll(t).map(t => {
                        let {
                            queryKey: a
                        } = t;
                        return [a, this.setQueryData(a, e, i)]
                    }))
                }
                getQueryState(t) {
                    var e;
                    let i = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return null === (e = (0, M._)(this, y).get(i.queryHash)) || void 0 === e ? void 0 : e.state
                }
                removeQueries(t) {
                    let e = (0, M._)(this, y);
                    x.V.batch(() => {
                        e.findAll(t).forEach(t => {
                            e.remove(t)
                        })
                    })
                }
                resetQueries(t, e) {
                    let i = (0, M._)(this, y),
                        a = {
                            type: "active",
                            ...t
                        };
                    return x.V.batch(() => (i.findAll(t).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(a, e)))
                }
                cancelQueries() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = {
                            revert: !0,
                            ...e
                        };
                    return Promise.all(x.V.batch(() => (0, M._)(this, y).findAll(t).map(t => t.cancel(i)))).then(B.ZT).catch(B.ZT)
                }
                invalidateQueries() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return x.V.batch(() => {
                        var i, a;
                        if ((0, M._)(this, y).findAll(t).forEach(t => {
                                t.invalidate()
                            }), "none" === t.refetchType) return Promise.resolve();
                        let r = { ...t,
                            type: null !== (a = null !== (i = t.refetchType) && void 0 !== i ? i : t.type) && void 0 !== a ? a : "active"
                        };
                        return this.refetchQueries(r, e)
                    })
                }
                refetchQueries() {
                    var t;
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 ? arguments[1] : void 0,
                        a = { ...i,
                            cancelRefetch: null === (t = null == i ? void 0 : i.cancelRefetch) || void 0 === t || t
                        };
                    return Promise.all(x.V.batch(() => (0, M._)(this, y).findAll(e).filter(t => !t.isDisabled()).map(t => {
                        let e = t.fetch(void 0, a);
                        return a.throwOnError || (e = e.catch(B.ZT)), "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    }))).then(B.ZT)
                }
                fetchQuery(t) {
                    let e = this.defaultQueryOptions(t);
                    void 0 === e.retry && (e.retry = !1);
                    let i = (0, M._)(this, y).build(this, e);
                    return i.isStaleByTime(e.staleTime) ? i.fetch(e) : Promise.resolve(i.state.data)
                }
                prefetchQuery(t) {
                    return this.fetchQuery(t).then(B.ZT).catch(B.ZT)
                }
                fetchInfiniteQuery(t) {
                    var e;
                    return t.behavior = (e = t.pages, {
                        onFetch: (t, i) => {
                            let a = async () => {
                                var i, a, r, s, n, o;
                                let l;
                                let u = t.options,
                                    h = null === (r = t.fetchOptions) || void 0 === r ? void 0 : null === (a = r.meta) || void 0 === a ? void 0 : null === (i = a.fetchMore) || void 0 === i ? void 0 : i.direction,
                                    c = (null === (s = t.state.data) || void 0 === s ? void 0 : s.pages) || [],
                                    d = (null === (n = t.state.data) || void 0 === n ? void 0 : n.pageParams) || [],
                                    p = !1,
                                    f = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (t.signal.aborted ? p = !0 : t.signal.addEventListener("abort", () => {
                                                p = !0
                                            }), t.signal)
                                        })
                                    },
                                    _ = t.options.queryFn && t.options.queryFn !== B.CN ? t.options.queryFn : () => Promise.reject(Error("Missing queryFn: '".concat(t.options.queryHash, "'"))),
                                    g = async (e, i, a) => {
                                        if (p) return Promise.reject();
                                        if (null == i && e.pages.length) return Promise.resolve(e);
                                        let r = {
                                            queryKey: t.queryKey,
                                            pageParam: i,
                                            direction: a ? "backward" : "forward",
                                            meta: t.options.meta
                                        };
                                        f(r);
                                        let s = await _(r),
                                            {
                                                maxPages: n
                                            } = t.options,
                                            o = a ? B.Ht : B.VX;
                                        return {
                                            pages: o(e.pages, s, n),
                                            pageParams: o(e.pageParams, i, n)
                                        }
                                    };
                                if (h && c.length) {
                                    let t = "backward" === h,
                                        e = {
                                            pages: c,
                                            pageParams: d
                                        },
                                        i = (t ? function(t, e) {
                                            var i;
                                            let {
                                                pages: a,
                                                pageParams: r
                                            } = e;
                                            return null === (i = t.getPreviousPageParam) || void 0 === i ? void 0 : i.call(t, a[0], a, r[0], r)
                                        } : N)(u, e);
                                    l = await g(e, i, t)
                                } else {
                                    l = await g({
                                        pages: [],
                                        pageParams: []
                                    }, null !== (o = d[0]) && void 0 !== o ? o : u.initialPageParam);
                                    let t = null != e ? e : c.length;
                                    for (let e = 1; e < t; e++) {
                                        let t = N(u, l);
                                        l = await g(l, t)
                                    }
                                }
                                return l
                            };
                            t.options.persister ? t.fetchFn = () => {
                                var e, r;
                                return null === (e = (r = t.options).persister) || void 0 === e ? void 0 : e.call(r, a, {
                                    queryKey: t.queryKey,
                                    meta: t.options.meta,
                                    signal: t.signal
                                }, i)
                            } : t.fetchFn = a
                        }
                    }), this.fetchQuery(t)
                }
                prefetchInfiniteQuery(t) {
                    return this.fetchInfiniteQuery(t).then(B.ZT).catch(B.ZT)
                }
                resumePausedMutations() {
                    return Z.N.isOnline() ? (0, M._)(this, m).resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return (0, M._)(this, y)
                }
                getMutationCache() {
                    return (0, M._)(this, m)
                }
                getDefaultOptions() {
                    return (0, M._)(this, b)
                }
                setDefaultOptions(t) {
                    (0, O._)(this, b, t)
                }
                setQueryDefaults(t, e) {
                    (0, M._)(this, w).set((0, B.Ym)(t), {
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    let e = [...(0, M._)(this, w).values()],
                        i = {};
                    return e.forEach(e => {
                        (0, B.to)(t, e.queryKey) && (i = { ...i,
                            ...e.defaultOptions
                        })
                    }), i
                }
                setMutationDefaults(t, e) {
                    (0, M._)(this, F).set((0, B.Ym)(t), {
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    let e = [...(0, M._)(this, F).values()],
                        i = {};
                    return e.forEach(e => {
                        (0, B.to)(t, e.mutationKey) && (i = { ...i,
                            ...e.defaultOptions
                        })
                    }), i
                }
                defaultQueryOptions(t) {
                    if (t._defaulted) return t;
                    let e = { ...(0, M._)(this, b).queries,
                        ...this.getQueryDefaults(t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return e.queryHash || (e.queryHash = (0, B.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.throwOnError && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), !0 !== e.enabled && e.queryFn === B.CN && (e.enabled = !1), e
                }
                defaultMutationOptions(t) {
                    return (null == t ? void 0 : t._defaulted) ? t : { ...(0, M._)(this, b).mutations,
                        ...(null == t ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    (0, M._)(this, y).clear(), (0, M._)(this, m).clear()
                }
                constructor(t = {}) {
                    (0, C._)(this, y, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, m, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, b, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, w, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, F, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, k, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, q, {
                        writable: !0,
                        value: void 0
                    }), (0, C._)(this, A, {
                        writable: !0,
                        value: void 0
                    }), (0, O._)(this, y, t.queryCache || new H), (0, O._)(this, m, t.mutationCache || new I), (0, O._)(this, b, t.defaultOptions || {}), (0, O._)(this, w, new Map), (0, O._)(this, F, new Map), (0, O._)(this, k, 0)
                }
            })
        },
        56322: function(t, e, i) {
            "use strict";
            i.d(e, {
                c: function() {
                    return n
                }
            });
            var a = i(75809),
                r = () => {
                    window.va || (window.va = function() {
                        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        (window.vaq = window.vaq || []).push(e)
                    })
                };

            function s() {
                return "development" === (window.vam || "production")
            }

            function n(t) {
                return (0, a.useEffect)(() => {
                    ! function() {
                        var t;
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            debug: !0
                        };
                        (function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                            if ("auto" === t) {
                                window.vam = "production";
                                return
                            }
                            window.vam = t
                        })(e.mode), r(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                        let i = e.scriptSrc || (s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js");
                        if (document.head.querySelector('script[src*="'.concat(i, '"]'))) return;
                        let a = document.createElement("script");
                        a.src = i, a.defer = !0, a.dataset.sdkn = "@vercel/analytics" + (e.framework ? "/".concat(e.framework) : ""), a.dataset.sdkv = "1.3.1", e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"), e.endpoint && (a.dataset.endpoint = e.endpoint), e.dsn && (a.dataset.dsn = e.dsn), a.onerror = () => {
                            let t = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                            console.log("[Vercel Web Analytics] Failed to load script from ".concat(i, ". ").concat(t))
                        }, s() && !1 === e.debug && (a.dataset.debug = "false"), document.head.appendChild(a)
                    }({
                        framework: t.framework || "react",
                        ...void 0 !== t.route && {
                            disableAutoTrack: !0
                        },
                        ...t
                    })
                }, []), (0, a.useEffect)(() => {
                    t.route && t.path && function(t) {
                        var e;
                        let {
                            route: i,
                            path: a
                        } = t;
                        null == (e = window.va) || e.call(window, "pageview", {
                            route: i,
                            path: a
                        })
                    }({
                        route: t.route,
                        path: t.path
                    })
                }, [t.route, t.path]), null
            }
        }
    }
]);