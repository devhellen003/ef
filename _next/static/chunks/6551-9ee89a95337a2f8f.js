(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6551], {
        39362: function() {},
        57262: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return f
                },
                Y: function() {
                    return h
                }
            });
            var a, r, i = n(93361),
                s = n(18940),
                o = n(66221),
                l = n(4862),
                d = n(49636);
            let u = () => {
                let {
                    address: e,
                    setImpersonatedAddress: t,
                    isImpersonated: n
                } = (0, d.useGuard)();
                return n ? (0, i.jsx)(o.z, {
                    onClick: () => t(null),
                    className: "flex items-center gap-3 border border-navy-light-2 bg-linear-gradient-16 px-4 transition-transform hover:scale-105 hover:border-navy-light-1",
                    children: (0, i.jsxs)("p", {
                        className: "text-text-3",
                        children: ["Disconnect ", (0, l.JO)(e)]
                    })
                }) : null
            };
            var c = n(46336),
                p = n(78668);

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = function(e) {
                return p.createElement("svg", m({
                    width: 139,
                    height: 48,
                    viewBox: "0 0 139 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), a || (a = p.createElement("g", {
                    clipPath: "url(#clip0_10519_17147)"
                }, p.createElement("path", {
                    d: "M39.4754 26.5357L37.9762 20.6771C37.9333 20.5048 37.7948 20.3708 37.623 20.3277L31.8318 18.8966C31.7888 18.887 31.7411 18.8822 31.6981 18.8822C31.5597 18.8679 31.4164 18.9109 31.3114 19.0162L21.5385 28.8141L20.2447 23.75C20.2017 23.5777 20.0633 23.4437 19.8914 23.4006L14.9166 22.1705L24.6847 12.3774C24.742 12.32 24.7755 12.2482 24.7993 12.1764C24.8423 12.0807 24.8566 11.9706 24.828 11.8653L23.3289 6.0067C23.2859 5.83438 23.1474 5.70036 22.9756 5.65729L17.1844 4.22614C17.0698 4.19742 16.9552 4.21657 16.855 4.26443H16.8502C16.8216 4.27879 16.7977 4.29794 16.769 4.31708C16.7452 4.33623 16.7117 4.3458 16.6926 4.36973L0.0209711 21.0744C0.0209711 21.0744 -0.00767364 21.1223 -0.0267706 21.1462C-0.131804 21.2707 -0.169998 21.4334 -0.122256 21.5913L1.49621 27.2537C1.54396 27.4164 1.66809 27.5409 1.82564 27.584L7.24918 29.1444L8.80559 34.577C8.85333 34.7397 8.97746 34.8641 9.13501 34.9072L14.5777 36.4724L16.1388 41.9289C16.1866 42.0917 16.3107 42.2161 16.4683 42.2592L22.1401 43.8914C22.183 43.9057 22.2308 43.9105 22.2737 43.9105C22.2833 43.9105 22.2928 43.9057 22.3072 43.9057C22.3072 43.9057 22.3119 43.9057 22.3167 43.9057C22.4408 43.9057 22.565 43.8579 22.6605 43.7621L39.3369 27.0431C39.3942 26.9857 39.4276 26.9139 39.4515 26.8421C39.4945 26.7463 39.5088 26.6363 39.4801 26.531L39.4754 26.5357ZM31.9989 33.0309L30.7815 28.2684L33.4789 25.5689L38.1147 26.9043L32.0037 33.0357L31.9989 33.0309ZM22.5411 42.5129L21.3237 37.7504L26.203 32.8586L30.8387 34.194L22.5411 42.5129ZM26.3032 31.3892L25.1383 27.3207L29.3253 28.3546L26.3032 31.3844V31.3892ZM29.9889 29.063L31.0584 33.2415L26.9859 32.0689L29.9889 29.0582V29.063ZM30.1274 27.5553L25.3818 26.3826L31.4785 20.2703L32.7962 24.8796L30.1274 27.5553ZM24.2025 27.56L25.5202 32.1694L20.6648 37.0372L15.9192 35.8645L24.2025 27.56ZM37.1121 21.1893L38.3295 25.9518L33.7272 24.6259L32.4095 20.0262L37.1121 21.1893ZM15.2031 35.1561L13.9857 30.3936L15.7426 28.6322L20.3784 29.9676L15.2031 35.1561ZM15.8428 27.1628L14.6779 23.0943L18.8649 24.1282L15.8428 27.158V27.1628ZM20.598 29.0199L16.5256 27.8472L19.5286 24.8366L20.598 29.0151V29.0199ZM15.0646 27.9477L13.3316 29.6852L8.58597 28.5125L13.7469 23.3384L15.0646 27.9477ZM9.60289 12.8369L10.9206 17.4463L6.0222 22.3572L1.2766 21.1845L9.60289 12.8369ZM16.8359 5.58549L18.1536 10.1948L15.5277 12.8274L10.7821 11.6547L16.8359 5.58549ZM17.3992 18.3031L16.1818 13.5453L18.8363 10.8841L23.4721 12.2147L17.3992 18.3031ZM11.7036 16.6661L10.5386 12.5976L14.7257 13.6315L11.7036 16.6613V16.6661ZM15.3893 14.3399L16.4587 18.5185L12.3911 17.3458L15.3941 14.3351L15.3893 14.3399ZM11.6081 18.1307L16.2439 19.4614L7.90326 27.8233L6.68582 23.0656L11.6081 18.1307ZM22.4695 6.51406L23.6869 11.2766L19.0845 9.95072L17.7669 5.35095L22.4695 6.51406ZM1.03789 22.1274L5.2249 23.1613L2.2028 26.1911L1.03789 22.1226V22.1274ZM2.88552 26.8804L5.88852 23.8697L6.95796 28.0483L2.89029 26.8756L2.88552 26.8804ZM9.66018 34.0552L8.34249 29.4555L13.0451 30.6186L14.2626 35.3811L9.66018 34.0552ZM15.6805 36.8074L19.8675 37.8413L16.8454 40.8711L15.6805 36.8027V36.8074ZM17.5281 41.5604L20.5311 38.5497L21.6006 42.7283L17.5281 41.5556V41.5604Z",
                    fill: "url(#paint0_linear_10519_17147)"
                }), p.createElement("path", {
                    d: "M53.7187 33.6293C52.1861 33.6293 50.8541 33.323 49.7083 32.7103C48.5672 32.0976 47.6792 31.2648 47.0538 30.2022C46.4236 29.1444 46.1133 27.9239 46.1133 26.5454C46.1133 25.1669 46.4188 23.9463 47.0299 22.8885C47.641 21.8307 48.4813 20.9931 49.5555 20.3804C50.6297 19.7678 51.8519 19.4614 53.2317 19.4614C54.6114 19.4614 55.7668 19.7582 56.8171 20.3517C57.8675 20.9452 58.6887 21.7781 59.2902 22.8454C59.8918 23.9128 60.1925 25.1812 60.1925 26.6459C60.1925 26.7655 60.1925 26.9187 60.1782 27.1006C60.1687 27.2825 60.1591 27.4404 60.14 27.5792H48.6675V25.4349H58.4404L57.1513 26.105C57.1704 25.3296 57.0081 24.6356 56.6739 24.0229C56.3397 23.4102 55.8766 22.9364 55.2942 22.6013C54.7117 22.2663 54.0194 22.0988 53.2317 22.0988C52.4439 22.0988 51.766 22.2663 51.1549 22.6013C50.5438 22.9364 50.0759 23.415 49.7513 24.0373C49.4266 24.6595 49.2595 25.3727 49.2595 26.1816V26.6985C49.2595 27.5266 49.4457 28.2589 49.8133 28.8955C50.1809 29.5321 50.7109 30.0299 51.3984 30.3793C52.0859 30.7335 52.8832 30.9106 53.795 30.9106C54.5685 30.9106 55.2655 30.7814 55.8814 30.5229C56.502 30.2644 57.0511 29.8863 57.5333 29.3837L59.2854 31.3988C58.6505 32.1216 57.8627 32.6768 56.927 33.0549C55.9912 33.433 54.9218 33.6245 53.7187 33.6245V33.6293Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M60.1641 22.3334V19.7487H69.3402V22.3334H60.1641ZM67.1774 33.6294C65.664 33.6294 64.4943 33.2369 63.6731 32.452C62.8472 31.667 62.4366 30.5182 62.4366 29.0009V16.5945H65.6353V28.8956C65.6353 29.5514 65.8072 30.0587 66.151 30.4225C66.4947 30.7863 66.9769 30.9634 67.5928 30.9634C68.2994 30.9634 68.8818 30.7719 69.3449 30.3938L70.2711 32.6961C69.8749 33.0072 69.4022 33.2369 68.8532 33.3949C68.3042 33.5481 67.7456 33.6294 67.1774 33.6294Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M79.1911 19.4663C80.3083 19.4663 81.2918 19.6817 82.1416 20.1124C82.9914 20.5432 83.6693 21.2085 84.1802 22.1036C84.6863 22.9987 84.9393 24.1474 84.9393 25.5403V33.4475H81.7167V25.9519C81.7167 24.7266 81.435 23.8171 80.8669 23.214C80.2987 22.611 79.4919 22.3094 78.4415 22.3094C77.6872 22.3094 77.014 22.4626 76.4316 22.7737C75.8491 23.0848 75.3956 23.5443 75.0805 24.157C74.7606 24.7696 74.603 25.5403 74.603 26.4688V33.4475H71.4043V14.2682H74.603V23.3911L73.9347 22.228C74.3978 21.3473 75.09 20.6677 76.0115 20.1842C76.9329 19.7008 77.9928 19.4615 79.1959 19.4615L79.1911 19.4663Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M93.7069 33.6293C92.1744 33.6293 90.8424 33.323 89.6966 32.7103C88.5555 32.0976 87.6675 31.2648 87.0421 30.2022C86.4119 29.1444 86.1016 27.9239 86.1016 26.5454C86.1016 25.1669 86.4071 23.9463 87.0182 22.8885C87.6293 21.8307 88.4696 20.9931 89.5438 20.3804C90.618 19.7678 91.8402 19.4614 93.22 19.4614C94.5997 19.4614 95.7551 19.7582 96.8054 20.3517C97.8558 20.9452 98.6769 21.7781 99.2785 22.8454C99.88 23.9128 100.181 25.1812 100.181 26.6459C100.181 26.7655 100.181 26.9187 100.166 27.1006C100.157 27.2825 100.147 27.4404 100.128 27.5792H88.6558V25.4349H98.4287L97.1396 26.105C97.1587 25.3296 96.9964 24.6356 96.6622 24.0229C96.328 23.4102 95.8649 22.9364 95.2824 22.6013C94.7 22.2663 94.0077 22.0988 93.22 22.0988C92.4322 22.0988 91.7543 22.2663 91.1432 22.6013C90.5321 22.9364 90.0642 23.415 89.7395 24.0373C89.4149 24.6595 89.2478 25.3727 89.2478 26.1816V26.6985C89.2478 27.5266 89.434 28.2589 89.8016 28.8955C90.1692 29.5321 90.6992 30.0299 91.3867 30.3793C92.0741 30.7335 92.8714 30.9106 93.7833 30.9106C94.5568 30.9106 95.2538 30.7814 95.8697 30.5229C96.4903 30.2644 97.0394 29.8863 97.5216 29.3837L99.2737 31.3988C98.6387 32.1216 97.851 32.6768 96.9152 33.0549C95.9795 33.433 94.91 33.6245 93.7069 33.6245V33.6293Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M101.618 33.4471V19.643H104.688V23.4435L104.325 22.333C104.721 21.4045 105.366 20.6913 106.259 20.2031C107.151 19.7101 108.245 19.4659 109.534 19.4659V22.5436C109.414 22.5245 109.295 22.5149 109.171 22.5053C109.052 22.4958 108.937 22.491 108.837 22.491C107.6 22.491 106.621 22.8452 105.896 23.5488C105.175 24.2572 104.812 25.3341 104.812 26.7796V33.4471H101.613H101.618Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M115.592 22.3333V19.7486H124.768V22.3333H115.592ZM117.86 33.4474V18.8966C117.86 17.4319 118.284 16.2641 119.134 15.3929C119.984 14.5218 121.202 14.0862 122.782 14.0862C123.35 14.0862 123.885 14.1484 124.396 14.2681C124.902 14.3878 125.326 14.5792 125.67 14.8377L124.768 17.2405C124.544 17.0873 124.276 16.9581 123.971 16.8528C123.66 16.7475 123.345 16.6996 123.016 16.6996C122.347 16.6996 121.837 16.8863 121.493 17.2548C121.149 17.6234 120.977 18.1738 120.977 18.8966V20.5001L121.054 21.9216V33.4474H117.855H117.86ZM128.664 17.3697C128.062 17.3697 127.57 17.1783 127.184 16.8001C126.797 16.422 126.606 15.9577 126.606 15.4025C126.606 14.8856 126.797 14.4356 127.184 14.0575C127.57 13.6794 128.062 13.4879 128.664 13.4879C129.265 13.4879 129.757 13.665 130.148 14.0192C130.535 14.3734 130.726 14.8233 130.726 15.3738C130.726 15.9242 130.535 16.3933 130.158 16.781C129.781 17.1687 129.28 17.3649 128.664 17.3649V17.3697ZM127.064 33.4474V19.6433H130.263V33.4474H127.064Z",
                    fill: "white"
                }), p.createElement("path", {
                    d: "M113.366 32.9159L112.086 30.7955C111.991 30.6424 111.824 30.5466 111.647 30.5466H111.637C111.456 30.5466 111.284 30.6519 111.193 30.8147L110.005 32.9686C109.842 33.2653 109.842 33.6243 110.005 33.9211L111.198 36.0798C111.289 36.2425 111.456 36.343 111.642 36.3478H111.647C111.828 36.3478 112 36.2521 112.091 36.0941L113.366 33.9306C113.552 33.6195 113.547 33.2318 113.366 32.9207V32.9159Z",
                    fill: "white"
                }))), r || (r = p.createElement("defs", null, p.createElement("linearGradient", {
                    id: "paint0_linear_10519_17147",
                    x1: 2.60384,
                    y1: 30.2931,
                    x2: 36.9464,
                    y2: 17.8233,
                    gradientUnits: "userSpaceOnUse"
                }, p.createElement("stop", {
                    stopColor: "#29BCFA"
                }), p.createElement("stop", {
                    offset: .43,
                    stopColor: "#6464E4"
                }), p.createElement("stop", {
                    offset: 1,
                    stopColor: "#B45AFA"
                })), p.createElement("clipPath", {
                    id: "clip0_10519_17147"
                }, p.createElement("rect", {
                    width: 139,
                    height: 48,
                    fill: "white"
                })))))
            };
            let h = ["0x2F2e1010cdcc9E28393ABa91E4315a4f18006E15", "0xcCa7A4AC10ac4ce410804ae1506F0ba4d706c225", "0xC83bb94779c5577AF1D48dF8e2A113dFf0cB127c", "0xD6401Cb685003deFa1f566E8d80cfC1c0fF403B2", "0x7Eb3f4C63614f67116F65848f5a331875A304f47", "0xc525CF7b63bc1Fd6111F27809A3BaE0611D42b62", "0xA96F2A820D3d7d5Df3C6c638d40C295a0CF255D1", "0x4507cfB4B077d5DBdDd520c701E30173d5b59Fad", "0x83a07D79E7c33cD8C8D03AE43028b067bE020668", "0xA03335791A592AFc626276D1EbE195A12A7C086e", "0x79e3B45F7d022C91bbD81c135489E1BFB08d6B15", "0xc779B9cC7CF7C070Fc779eD8ba17c45151A9894a", "0x314fEe4552111345595A91c118955F5c4a31258E", "0xA3E1b2cC2698C82C9BB38ba55bc040F6C9882B89", "0x643328fB9032Ee56b011D6871E49e3ee0105E38A", "0x4612f6997fFd8a81E0E4CFC8Cdb62796d86CB082", "0x9912F96F219337b5eFcF21B4D2e88F4Fbee93881", "0xA260d0f8070b2A85B3C00ADb1f0046f20ca85AAa"],
                f = () => {
                    let {
                        address: e,
                        setImpersonatedAddress: t
                    } = (0, d.useGuard)(), n = h.includes(e);
                    return (0, i.jsx)("header", {
                        className: "container fixed inset-x-0 top-5 z-50",
                        children: (0, i.jsxs)("div", {
                            className: "flex rounded-xl border-[1px] border-[#9f62f273] bg-[#0e0a318f] p-3 backdrop-blur-xl",
                            children: [(0, i.jsx)("div", {
                                className: "flex-1",
                                children: (0, i.jsx)(y, {})
                            }), (0, i.jsxs)("div", {
                                className: "flex gap-4",
                                children: [n && (0, i.jsx)(c.Z, {
                                    setImpersonatedAddress: t
                                }), (0, i.jsx)(u, {}), (0, i.jsx)(s.N, {
                                    hiddenIfDisconnected: !0
                                })]
                            })]
                        })
                    })
                }
        },
        24593: function(e, t, n) {
            "use strict";
            n.d(t, {
                vc: function() {
                    return z
                },
                Wv: function() {
                    return k
                },
                SH: function() {
                    return F
                },
                KC: function() {
                    return S
                }
            });
            var a = n(61762),
                r = n(90601),
                i = n(35963),
                s = n(51968),
                o = n(64097),
                l = n(7081),
                d = n(91034),
                u = n(85894),
                c = n(72177),
                p = n(84149),
                m = n(72249),
                y = n(98416),
                h = n(71886),
                f = n(52023),
                x = n(50994),
                b = n(10146),
                g = n(40230),
                T = n(33913),
                C = n(93423),
                E = n(80386),
                A = n(84099),
                v = n(6001),
                w = n(12592),
                N = n(88587),
                L = n(46464),
                I = n(63173);
            let O = Object.freeze({
                    metamask: c.P,
                    okx: p.c,
                    walletconnect: m.D,
                    rainbow: y.u,
                    argent: h.Z,
                    coinbase: f.D,
                    ledger: x.P,
                    taho: b.k,
                    trust: g.p,
                    zerion: T.B,
                    safe: C.l,
                    xdefi: E.U,
                    uniswap: A.a,
                    coin98: v.P,
                    imtoken: w.u,
                    phantom: N.b,
                    rabby: L.R,
                    bitget: I.X
                }),
                j = "https://eth-mainnet.g.alchemy.com/v2/lEMtkzQRB2sK-mLwOQAzIyZI1Tazjvq7",
                R = "https://arb-mainnet.g.alchemy.com/v2/DDf2qvfOVJZlQJx_08UoPleYrk4h2O9F",
                k = 1,
                S = [r.R.id, i.F.id, s.y.id, o.Z.id],
                z = (0, l._)({
                    chains: [r.R, i.F, s.y, o.Z],
                    connectors: (() => {
                        let e = [];
                        return e.push({
                            groupName: "Recommended",
                            wallets: ["metamask", "walletconnect", "okx", "coinbase"].map(e => O[e])
                        }), e.push({
                            groupName: "Other",
                            wallets: ["bitget", "argent", "coin98", "imtoken", "ledger", "safe", "rainbow", "taho", "trust", "uniswap", "xdefi", "zerion", "phantom", "rabby"].map(e => O[e])
                        }), (0, u.a3)(e, {
                            appName: "EtherFi",
                            projectId: "177e8361374b5e363b402eda7887c664"
                        })
                    })(),
                    ssr: !0,
                    transports: {
                        [r.R.id]: (0, d.d)(j),
                        [i.F.id]: (0, d.d)("https://eth-sepolia.g.alchemy.com/v2/lEMtkzQRB2sK-mLwOQAzIyZI1Tazjvq7"),
                        [s.y.id]: (0, d.d)(R),
                        [o.Z.id]: (0, d.d)("")
                    }
                }),
                F = (0, a.v)({
                    chain: r.R,
                    transport: (0, d.d)(j)
                });
            (0, a.v)({
                chain: s.y,
                transport: (0, d.d)(R)
            })
        },
        18940: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return c
                }
            });
            var a = n(93361),
                r = n(66221),
                i = n(4862),
                s = n(85894),
                o = n(89176),
                l = n(53424),
                d = n(89602);
            let u = e => {
                    let {
                        address: t
                    } = e, {
                        avatar: n
                    } = (0, d.Z)(), {
                        backgroundColor: r,
                        backgroundImage: s
                    } = (0, i._o)(t);
                    return (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "size-7 rounded-full bg-contain",
                        style: {
                            backgroundColor: r,
                            backgroundImage: n ? "url(".concat(n, ")") : s
                        }
                    })
                },
                c = e => {
                    let {
                        hiddenIfDisconnected: t,
                        customText: n
                    } = e, {
                        isConnected: c,
                        isReconnecting: p,
                        address: m,
                        chain: y
                    } = (0, o.m)(), h = (0, l.C)(), {
                        name: f
                    } = (0, d.Z)(), {
                        openConnectModal: x
                    } = (0, s.We)(), {
                        openAccountModal: b
                    } = (0, s.Ap)(), {
                        openChainModal: g
                    } = (0, s.iC)(), T = !h.find(e => e.id === (null == y ? void 0 : y.id));
                    return t && !c ? null : c ? T ? (0, a.jsx)(r.z, {
                        onClick: g,
                        variant: "primary",
                        size: "small",
                        className: "flex items-center gap-2",
                        children: (0, a.jsx)("p", {
                            className: "text-text-3",
                            children: "Unsupported chain"
                        })
                    }) : (0, a.jsxs)(r.z, {
                        onClick: b,
                        className: "flex items-center gap-3 border border-navy-light-2 bg-linear-gradient-16 px-4 transition-transform hover:scale-105 hover:border-navy-light-1",
                        children: [(0, a.jsx)(u, {
                            address: m,
                            ensName: f
                        }), (0, a.jsx)("p", {
                            className: "text-text-3",
                            children: f || (0, i.JO)(m)
                        })]
                    }) : (0, a.jsx)(r.z, {
                        onClick: x,
                        disabled: p,
                        variant: "primary",
                        size: "small",
                        className: "disabled:opacity-65",
                        children: p ? "Reconnecting..." : null != n ? n : "Connect your wallet"
                    })
                }
        },
        83460: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return y
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(66221),
                s = n(71027),
                o = n(85947),
                l = n(79852),
                d = n(57262),
                u = n(49636),
                c = n(43193),
                p = n(46336),
                m = e => {
                    let [t, n] = (0, r.useState)(!1), {
                        address: m,
                        isImpersonated: y,
                        setImpersonatedAddress: h
                    } = (0, u.useGuard)(), {
                        disconnect: f
                    } = (0, l.q)(), x = d.Y.includes(m);
                    (0, r.useEffect)(() => {
                        n(!0)
                    }, []);
                    let b = () => {
                        y ? h(null) : f()
                    };
                    return (0, a.jsx)(s.Vq, {
                        open: t,
                        onOpenChange: b,
                        children: (0, a.jsxs)(s.cZ, {
                            children: [(0, a.jsx)(s.a7, {
                                children: (0, a.jsxs)("div", {
                                    className: "bg-navy-medium-1",
                                    children: [(0, a.jsxs)("div", {
                                        className: "space-y-4 rounded-xl bg-[#150937] p-6",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0, a.jsx)("h2", {
                                                className: "text-18",
                                                children: "Sorry this wallet does not qualify"
                                            }), (0, a.jsxs)("button", {
                                                onClick: b,
                                                children: [(0, a.jsx)(o.Z, {}), (0, a.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "space-y-2 text-14 text-text-3",
                                            children: [(0, a.jsx)("p", {
                                                children: "This address does not meet one or more of the following requirements that must have been met before July 1st, 2024"
                                            }), (0, a.jsx)("p", {
                                                children: "Don't worry, you're still early for Season 3 that's just begun!"
                                            }), (0, a.jsxs)("p", {
                                                children: ["Code - ", e.code]
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "mb-2 mt-6 flex justify-center",
                                        children: (0, a.jsx)(c.Z, {
                                            buttonText: "View eligibility requirements"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "flex w-full justify-center",
                                        children: x && (0, a.jsx)(p.Z, {
                                            setImpersonatedAddress: h
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(s.cN, {
                                children: (0, a.jsx)(s.GG, {
                                    asChild: !0,
                                    children: (0, a.jsx)(i.z, {
                                        variant: "primary",
                                        size: "small",
                                        children: "OK"
                                    })
                                })
                            })]
                        })
                    })
                };
            let y = e => (0, a.jsxs)("main", {
                className: "grid min-h-dvh place-items-center p-16 lg:p-64",
                children: [(0, a.jsx)("h1", {
                    className: "text-center text-16 lg:text-32",
                    children: "Unfortunately, you're not eligible for this season's airdrop. But don't worry, future seasons are on the way. Stay tuned!"
                }), (0, a.jsx)(m, {
                    code: e.code
                })]
            })
        },
        32142: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return m
                },
                Z: function() {
                    return y
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(66221),
                s = n(71027),
                o = n(68668),
                l = n(77094),
                d = n(95863),
                u = n(57262);
            let c = [{
                point: 1,
                text: "To participate in the Airdrop, you will need to connect a compatible third-party digital wallet (“Wallet”). By using a Wallet, you agree that you are using the Wallet under the terms and conditions of the applicable third-party provider of such Wallet. Wallets are not associated with, maintained by, supported by or affiliated with the Organization. We accept no responsibility or liability to you in connection with your use of a Wallet, and we make no representations or warranties regarding how any specific Wallet will operate in connection with the Airdrop or be compatible to participate in the Airdrop. The private keys necessary to access the assets held in a Wallet are not held by the Organization. The Organization has no ability to help you access or recover your private keys and/or seed phrases for your Wallet. You are solely responsible for maintaining the confidentiality of your private keys and you are responsible for any transactions signed with your private keys."
            }, {
                point: 2,
                text: "You are not eligible to participate in the Airdrop if you are located in, or a resident of the United States or China or if you are a Prohibited Person (as defined below). You agree and acknowledge that you are not a Prohibited Person and you will not use a VPN or other tool to circumvent any geoblock or other restrictions that we may have implemented for Airdrop recipients. Any such circumvention, or attempted circumvention, may permanently disqualify you from participation in the Airdrop in our discretion. A “Prohibited Person” is any person or entity that is (a) the subject of any economic or trade sanctions administered or enforced by any governmental authority, including being designated on any list of prohibited or restricted parties by any governmental authority, such as the U.S. Treasury Department’s list of Specially Designated Nationals, the U.S. Department of Commerce Denied Persons List Entity List, the E.U. Consolidated List of persons and the U.K. Consolidated List of Financial Sanctions Targets, (b) located, a resident of or organized in any jurisdiction or territory that is the subject of comprehensive country-wide or regional economic sanctions or has been designated as “terrorist supporting” by the United Nations or the governmental authority of the European Union, United Kingdom or the United States, or (c) owned or controlled by such persons or entities listed in (a)-(b)."
            }, {
                point: 3,
                text: "Your eligibility to receive Airdrop tokens or participate in the Airdrop is subject to our sole discretion. You agree not to engage in any activities that are designed to obtain more Airdrop tokens than you are entitled to. You agree that you are the legal owner of the blockchain address that you use to access or participate in the Airdrop."
            }, {
                point: 4,
                text: "You agree and acknowledge that you have the sole responsibility and liability for all taxes in connection with your participation in the Airdrop and you should consult a tax advisor."
            }, {
                point: 5,
                text: "You agree and acknowledge that you are solely responsible for complying with all applicable laws of the jurisdiction you are located or participating in the Airdrop from."
            }, {
                point: 6,
                text: "You agree and acknowledge that you (a) may receive tokens for free via the Airdrop (other than applicable taxes, if any), (b) were not previously promised any tokens, and (c) took no action in anticipation of or in reliance on receiving any tokens or an Airdrop."
            }, {
                point: 7,
                subtext: "Disclaimers; Limitation of Liability",
                subPoints: [{
                    point: 7.1,
                    text: "Your participation in the Airdrop is at your own risk. You understand and agree that any Airdrop tokens are provided to you on an “AS IS” and “AS AVAILABLE” basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, the Organization, its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors (the “Organization Entities”) DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY WARRANTIES RELATING TO TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, USAGE, QUALITY, PERFORMANCE, SUITABILITY OR FITNESS OF THE AIRDROP FOR ANY PARTICULAR PURPOSE, OR AS TO THE ACCURACY, QUALITY, SEQUENCE, RELIABILITY, WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY DEFECTS THEREIN, WHETHER LATENT OR PATENT. The Organization Entities make no warranty or representation and disclaim all responsibility and liability for: (a) the completeness, accuracy, availability, timeliness, security or reliability of the Airdrop; (b) any harm to your computer system, loss of data, or other harm that results from your participation in the Airdrop; (c) the operation or compatibility with any other application or any particular system or device, including any Wallets; and (d) whether the Airdrop will be available on an uninterrupted, secure or error-free basis. Nothing contained in these Airdrop Terms constitutes, or is meant to constitute, financial, legal or other professional advice."
                }, {
                    point: 7.2,
                    text: "THE LAWS OF CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES AS SET FORTH IN SECTION 7.3 BELOW. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS."
                }, {
                    point: 7.3,
                    text: "TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL THE ORGANIZATION ENTITIES BE LIABLE (A) FOR DAMAGES OF ANY KIND, INCLUDING INDIRECT SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR PARTICIPATION IN THE AIRDROP), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THESE AIRDROP TERMS OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE AIRDROP OR THESE AIRDROP TERMS AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF THE ORGANIZATION ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE AIRDROP TERMS OR THE AIRDROP. THE ORGANIZATION ENTITIES’ TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY AWARDED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100.00). THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE."
                }]
            }, {
                point: 8,
                subtext: "Assumption of Risks",
                subPoints: [{
                    point: 8.1,
                    text: "By participating in the Airdrop, you represent that you have sufficient knowledge and experience in business and financial matters, including a sufficient understanding of blockchain technologies, cryptocurrencies and other digital assets, storage mechanisms (such as wallets), and blockchain-based software systems to be able to assess and evaluate the risks and benefits of participating in the Airdrop. You acknowledge and agree that there are risks associated with purchasing and holding cryptocurrency and using blockchain technology. These include, but are not limited to, risk of losing access to cryptocurrency due to slashing, loss of private key(s), custodial error or purchaser error, risk of mining or blockchain attacks, risk of hacking and security weaknesses, risk of unfavorable regulatory intervention in one or more jurisdictions, risk related to token taxation, risk of personal information disclosure, risk of uninsured losses, volatility risks, and unanticipated risks."
                }, {
                    point: 8.2,
                    text: "You agree and acknowledge that if you are unable to claim an Airdrop due to technical bugs, smart contract issue, gas fees, wallet incompatibility, loss of access to a wallet or the keys thereto, or for any other reason, you will have no recourse or claim against us or our affiliates and that we and our affiliates will not bear any liability."
                }, {
                    point: 8.3,
                    text: "You agree and acknowledge that claiming an Airdrop may require reliance on or an integration with third party products (e.g., a wallet or an unaffiliated network or blockchain) that we do not control. In the event that you are unable to access such products or integrations, or if they fail for any reason, and you are unable to participate in an Airdrop or claim Airdrop tokens, you will have no recourse or claim against us or our affiliates and we and our affiliates will not bear any liability. We are not responsible for any losses due to your errors, including an incorrectly constructed transaction."
                }, {
                    point: 8.4,
                    text: "You agree and acknowledge that the regulatory regime governing blockchain technologies, cryptocurrencies and other digital assets is uncertain, that new regulations or policies may materially adversely affect the potential utility or value of such cryptocurrencies and digital assets, and that there are risks of new taxation related to the purchase or sale of cryptocurrencies and other digital assets."
                }, {
                    point: 8.5,
                    text: "You agree and acknowledge that cryptocurrencies and other similar digital assets are neither (i) deposits of or guaranteed by a bank nor (ii) insured by the FDIC or by any other governmental agency."
                }]
            }, {
                point: 9,
                text: "Indemnification. By entering into these Airdrop Terms or otherwise participating in the Airdrop, you agree that you shall defend, indemnify, and hold the Organization Entities harmless from and against any and all claims, costs, damages, losses, liabilities, and expenses (including attorneys’ fees and costs) incurred by the Organization Entities arising out of or in connection with your violation or breach of any term of these Airdrop Terms or any applicable law or regulation. If you are obligated to indemnify any Organization Entity hereunder, then you agree that the Organization (or, at its discretion, the applicable Organization Entity) will have the right, in its sole discretion, to control any action or proceeding and to determine whether the Organization wishes to settle, and if so, on what terms, and you agree to fully cooperate with the Organization in the defense or settlement of such claim."
            }, {
                point: 10,
                text: "Miscellaneous. Nothing in these Airdrop Terms shall be construed to transfer any intellectual property rights from the Organization to you. These Airdrop Terms contain the entire agreement between you and the Organization regarding the Airdrop, and supersede all prior and contemporaneous understandings between the parties regarding the Airdrop. We may modify these Airdrop Terms from time to time in which case we will update the “Last Revised” date at the top of these Airdrop Terms. The updated Airdrop Terms will be effective as of the time of posting, or such later date as may be specified in the updated Airdrop Terms. Your continued access or participation in the Airdrop after the modifications have becomes effective will be deemed your acceptance of the modified Airdrop Terms. These Airdrop Terms may be assigned by the Organization but may not be assigned by you without our prior express written consent. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. If any provision of these Airdrop Terms shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Airdrop Terms and shall not affect the validity and enforceability of any remaining provisions. These Airdrop Terms are governed by the laws of the Cayman Islands, without regard to conflict of laws rules, and the proper venue for any disputes arising out of or relating to any of the same will be the courts located in the Cayman Islands."
            }, {
                point: 11,
                text: "How to Contact Us. You may contact us regarding these Airdrop Terms by e-mail at foundation@ether.fi."
            }];
            var p = n(49636);
            let m = "I agree to the EtherFi airdrop terms and conditions.";
            var y = () => {
                let [e, t] = (0, r.useState)(!1), {
                    address: n
                } = (0, p.useGuard)(), [y, h] = (0, l._)("airdropTerms2", !1, {
                    initializeWithValue: !1
                }), [f, x] = (0, l._)("airdropTermsSignature", ""), {
                    signMessageAsync: b
                } = (0, d.Q)();
                (0, r.useEffect)(() => {
                    t(!0)
                }, []), (0, r.useEffect)(() => {
                    (async () => {
                        if (f && n) {
                            let e = o.n5(m, f);
                            if (u.Y.includes(e)) {
                                h(!0);
                                return
                            }
                            e.toLowerCase() !== n.toLowerCase() && (h(!1), x(""))
                        }
                    })()
                }, [f, n, h, x]);
                let g = async () => {
                    try {
                        let e = await b({
                            message: m
                        });
                        x(e), h(!0)
                    } catch (e) {
                        console.error("Error signing message:", e)
                    }
                };
                return (0, a.jsx)(s.Vq, {
                    open: e && !y,
                    children: (0, a.jsxs)(s.cZ, {
                        className: "w-[90%] md:w-full",
                        children: [(0, a.jsx)(s.fK, {
                            children: (0, a.jsx)(s.$N, {
                                className: " text-14 md:text-20",
                                children: "Airdrop Terms and Conditions"
                            })
                        }), (0, a.jsxs)(s.a7, {
                            className: "max-h-48 rounded-lg border border-[rgba(255,255,255,0.2)] p-4",
                            children: [(0, a.jsxs)("p", {
                                className: "mb-2 text-center text-[12px] font-normal text-text-3 sm:text-14",
                                children: ["TOKEN AIRDROP TERMS ", (0, a.jsx)("br", {}), " Last Revised on March 14, 2024"]
                            }), (0, a.jsx)("p", {
                                className: "mb-2 text-justify text-[12px] font-normal text-text-3 sm:text-14",
                                children: 'Welcome to the Token Airdrop Terms (these "Airdrop Terms") for the ETHFI token airdrop (the “Airdrop”) by Ether.Fi Foundation (“Organization”, “we” or “us”). These Airdrop Terms govern your ability to participate in the Airdrop. Please read these Airdrop Terms carefully, as they include important information about your legal rights. By participating in the Airdrop or claiming Airdrop tokens, you are agreeing to these Airdrop Terms. If you do not understand or agree to these Airdrop Terms, please do not participate in the Airdrop.'
                            }), (0, a.jsx)("p", {
                                className: "text-justify text-[12px] font-normal text-text-3 sm:text-14",
                                children: "For purposes of these Airdrop Terms, “you” and “your” means you as the\n              participant in the Airdrop. If you participate in the Airdrop or otherwise claim\n              Airdrop tokens on behalf of a company or other entity then “you” includes you and that\n              entity, and you represent and warrant that (a) you are an authorized representative of\n              the entity with the authority to bind the entity to these Airdrop Terms, and (b) you\n              agree to these Airdrop Terms on the entity’s behalf."
                            }), c.map((e, t) => (0, a.jsxs)(r.Fragment, {
                                children: [e.subtext ? (0, a.jsxs)("div", {
                                    className: "my-5 flex text-justify text-[12px] font-normal text-text-3 sm:text-14",
                                    children: [(0, a.jsxs)("span", {
                                        className: "w-10",
                                        children: [e.point, "."]
                                    }), (0, a.jsx)("p", {
                                        children: e.subtext
                                    })]
                                }, t) : (0, a.jsxs)("div", {
                                    className: "my-5 flex text-justify text-[12px] font-normal text-text-3 sm:text-14",
                                    children: [(0, a.jsxs)("span", {
                                        className: "w-12 pr-2",
                                        children: [e.point, "."]
                                    }), e.text && (0, a.jsx)("p", {
                                        children: e.text
                                    })]
                                }, t), e.subPoints && e.subPoints.map(e => (0, a.jsxs)("div", {
                                    className: "my-2 flex text-justify text-[12px] font-normal text-text-3 sm:text-14",
                                    children: [(0, a.jsxs)("span", {
                                        className: "w-12 px-2",
                                        children: [e.point, "."]
                                    }), (0, a.jsx)("p", {
                                        children: e.text
                                    })]
                                }, e.point))]
                            }, t))]
                        }), (0, a.jsxs)(s.cN, {
                            children: [(0, a.jsx)(s.a7, {
                                className: "p-4 pb-6 text-center",
                                children: "By using this website, you acknowledge and agree to the Token Airdrop Terms"
                            }), (0, a.jsx)(i.z, {
                                variant: "primary",
                                size: "small",
                                className: "w-full rounded-lg border-0 border-none",
                                onClick: g,
                                children: "Agree to Terms"
                            })]
                        })]
                    })
                })
            }
        },
        43193: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(93361),
                r = n(66221),
                i = n(71027);
            let s = [{
                header: "ether.fan",
                text: "You are a holder of an ether.fan NFT"
            }, {
                header: "eETH / weETH",
                text: "You are a holder of eETH or weETH"
            }, {
                header: "DeFi rewards",
                text: "You hold a position in a participating eETH or weETH DeFi pool or vault"
            }, {
                header: "Referrals",
                text: "You referred one or more friends to ether.fi"
            }];
            var o = e => {
                var t;
                return (0, a.jsxs)(i.Vq, {
                    children: [(0, a.jsx)(i.hg, {
                        asChild: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: "inline-block text-14 text-link-blue hover:underline",
                            children: null !== (t = e.buttonText) && void 0 !== t ? t : "Eligibility criteria"
                        })
                    }), (0, a.jsxs)(i.cZ, {
                        showClose: !0,
                        children: [(0, a.jsxs)(i.fK, {
                            children: [(0, a.jsx)(i.$N, {
                                children: "Eligibility Criteria"
                            }), (0, a.jsx)(i.Be, {
                                children: "The following criteria was used to determine eligibility:"
                            })]
                        }), (0, a.jsx)(i.a7, {
                            children: s.map((e, t) => (0, a.jsx)("div", {
                                className: "w-full pb-px",
                                children: (0, a.jsxs)("div", {
                                    className: "grid h-full w-full grid-cols-[18px,auto] gap-x-2 py-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "row-span-2 h-[18px] w-[18px] self-center rounded-2xl bg-white opacity-20"
                                    }), (0, a.jsx)("h2", {
                                        className: "col-start-2 text-20 font-normal",
                                        children: e.header
                                    }), (0, a.jsx)("p", {
                                        className: "col-start-2 text-14 font-normal text-text-3",
                                        children: e.text
                                    })]
                                })
                            }, t))
                        }), (0, a.jsx)(i.cN, {
                            children: (0, a.jsx)(i.GG, {
                                asChild: !0,
                                children: (0, a.jsx)(r.z, {
                                    variant: "primary",
                                    size: "small",
                                    className: "w-full",
                                    children: "OK"
                                })
                            })
                        })]
                    })]
                })
            }
        },
        46336: function(e, t, n) {
            "use strict";
            var a = n(93361),
                r = n(75809),
                i = n(66221),
                s = n(71027),
                o = n(51911);
            t.Z = e => {
                let [t, n] = (0, r.useState)(!1), [l, d] = (0, r.useState)(!1), u = (0, r.useRef)(null);
                return (0, a.jsxs)(s.Vq, {
                    open: l,
                    onOpenChange: d,
                    children: [(0, a.jsx)(s.hg, {
                        asChild: !0,
                        children: (0, a.jsx)(i.z, {
                            variant: "white",
                            size: "small",
                            onClick: () => d(!0),
                            children: "Search for an Address"
                        })
                    }), (0, a.jsxs)(s.cZ, {
                        className: "w-[90%]",
                        showClose: !0,
                        children: [(0, a.jsxs)(s.fK, {
                            children: [(0, a.jsx)(s.$N, {
                                children: "Address eligibility"
                            }), (0, a.jsx)(s.Be, {
                                children: "Check any address for eligibility and ETHFI token amount"
                            })]
                        }), (0, a.jsx)(s.a7, {
                            children: (0, a.jsx)("div", {
                                className: "flex rounded-lg bg-gradient-to-r from-[#AF5BF9] to-[#557AE9] p-px",
                                children: (0, a.jsx)("input", {
                                    ref: u,
                                    className: " w-full rounded-lg bg-navy-medium-1 px-2 py-4 focus:outline-none",
                                    "aria-label": "Wallet Address"
                                })
                            })
                        }), (0, a.jsxs)(s.cN, {
                            children: [(0, a.jsx)(i.z, {
                                variant: "primary",
                                size: "small",
                                onClick: () => {
                                    var t;
                                    n(!1);
                                    let a = null === (t = u.current) || void 0 === t ? void 0 : t.value;
                                    a && (0, o.U)(a) ? (console.info("Address is valid"), e.setImpersonatedAddress(a), d(!1)) : n(!0)
                                },
                                children: "Search Address"
                            }), t && (0, a.jsx)("p", {
                                className: "text-center text-warning",
                                children: "Invalid address"
                            })]
                        })]
                    })]
                })
            }
        },
        49636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Guard: function() {
                    return g
                },
                useGuard: function() {
                    return T
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(51124),
                s = n(90601),
                o = n(89176),
                l = n(57262),
                d = n(24593),
                u = n(32142),
                c = n(43193),
                p = n(18940);
            let m = () => (0, a.jsxs)("main", {
                className: "container grid min-h-dvh content-center justify-center justify-items-center gap-12",
                children: [(0, a.jsxs)("div", {
                    className: "space-y-5 text-center",
                    children: [(0, a.jsxs)("h1", {
                        className: "text-balance text-32 font-semibold lg:text-56",
                        children: ["Thanks for joining us as we help people ", (0, a.jsx)("span", {
                            className: "text-text-4",
                            children: "save"
                        }), ",", " ", (0, a.jsx)("span", {
                            className: "text-text-4",
                            children: "earn"
                        }), " and ", (0, a.jsx)("span", {
                            className: "text-text-4",
                            children: "spend"
                        }), " ", "their crypto"]
                    }), (0, a.jsx)("p", {
                        className: "text-18 text-text-2 lg:text-24",
                        children: "Connect your wallet to check your eligibility to claim $ETHFI"
                    })]
                }), (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-8",
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: (0, a.jsx)(p.N, {})
                    }), (0, a.jsx)(c.Z, {})]
                })]
            });
            var y = n(66221),
                h = n(55178);

            function f() {
                return (0, a.jsxs)("main", {
                    className: "container grid min-h-dvh content-center justify-center justify-items-center gap-12",
                    children: [(0, a.jsxs)("div", {
                        className: "space-y-5 text-center",
                        children: [(0, a.jsx)("h1", {
                            className: "text-balance text-32 font-semibold lg:text-56",
                            children: "Unsupported Network"
                        }), (0, a.jsx)("p", {
                            className: "text-18 leading-7 text-text-2 lg:text-24",
                            children: "Please connect to the Ethereum or Arbitrum networks to check your eligibility."
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col items-center gap-8",
                        children: [(0, a.jsx)("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: (0, a.jsx)(x, {})
                        }), (0, a.jsx)(c.Z, {})]
                    })]
                })
            }

            function x() {
                let e = (0, r.useCallback)(() => {
                    (0, h.c)(d.vc, {
                        chainId: d.Wv
                    })
                }, []);
                return (0, a.jsx)(y.z, {
                    variant: "primary",
                    onClick: e,
                    children: "Switch to Mainnet"
                })
            }
            let b = (0, r.createContext)(null),
                g = e => {
                    var t;
                    let {
                        children: n
                    } = e, [c, p] = (0, r.useState)(null), [y, h] = (0, r.useState)(!1), {
                        isConnected: x,
                        address: g,
                        chain: T
                    } = (0, o.m)(), C = (0, i.usePathname)(), {
                        push: E
                    } = (0, i.useRouter)(), A = ["/blocked"].includes(C), v = null != c ? c : g, w = !!v, N = c ? s.R : T;
                    (0, r.useEffect)(() => {
                        x && p(null)
                    }, [x]), (0, r.useEffect)(() => {
                        c ? h(!0) : h(!1)
                    }, [c]);
                    let L = w && !d.KC.includes(null !== (t = null == N ? void 0 : N.id) && void 0 !== t ? t : 0),
                        I = !w && !A;
                    if ((0, r.useEffect)(() => {
                            I && "/" !== C && E("/")
                        }, [C, E, I]), I && "/" !== C) return null;
                    let O = n;
                    return O = I ? (0, a.jsx)(m, {}) : L ? (0, a.jsx)(f, {}) : v && N ? (0, a.jsxs)(b.Provider, {
                        value: {
                            address: null != v ? v : "0x",
                            isImpersonated: y,
                            setImpersonatedAddress: p,
                            chainId: N.id
                        },
                        children: [(0, a.jsx)(l.h, {}), n]
                    }) : null, (0, a.jsxs)(a.Fragment, {
                        children: [N && (0, a.jsxs)(b.Provider, {
                            value: {
                                address: null != v ? v : "0x",
                                isImpersonated: y,
                                setImpersonatedAddress: p,
                                chainId: N.id
                            },
                            children: [(0, a.jsx)(u.Z, {}), O]
                        }), !N && (0, a.jsx)(m, {})]
                    })
                },
                T = () => {
                    let e = (0, r.useContext)(b);
                    if (!e) throw Error("useGuard must be used within a GuardProvider");
                    return e
                }
        },
        89602: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return d
                },
                Z: function() {
                    return u
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(89176),
                s = n(94959),
                o = n(87261);
            let l = (0, r.createContext)(null),
                d = e => {
                    let {
                        children: t
                    } = e, {
                        address: n
                    } = (0, i.m)(), {
                        data: d
                    } = (0, s.F)({
                        address: n,
                        chainId: 1
                    }), {
                        data: u
                    } = (0, o.c)({
                        name: null != d ? d : void 0,
                        chainId: 1
                    }), c = (0, r.useMemo)(() => ({
                        name: d,
                        avatar: u
                    }), [u, d]);
                    return (0, a.jsx)(l.Provider, {
                        value: c,
                        children: t
                    })
                },
                u = () => {
                    let e = (0, r.useContext)(l);
                    if (!e) throw Error("useSafeENS must be used within a SafeENSProvider");
                    return e
                }
        },
        5175: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return a
                }
            });
            let a = (0, n(60695).N)()
        },
        47723: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return f
                }
            });
            var a = n(30651),
                r = n(68015);
            let i = r.z.object({
                allocations: r.z.array(r.z.string()),
                index: r.z.number(),
                proof: r.z.array(r.z.string()),
                index2: r.z.number().optional(),
                proof2: r.z.array(r.z.string()).optional(),
                index3: r.z.number().optional(),
                proof3: r.z.array(r.z.string()).optional()
            });
            r.z.object({
                claimAmountWei: r.z.string(),
                index: r.z.number(),
                proof: r.z.array(r.z.string())
            }), r.z.object({
                allocationData: i,
                hasAllocation: r.z.boolean()
            });
            let s = r.z.object({
                    dailyStreak: r.z.number(),
                    name: r.z.string(),
                    points: r.z.string()
                }),
                o = r.z.object({
                    EETHBalance: r.z.number(),
                    TotalEffectiveBalance: r.z.number(),
                    WEETHArbitrumBalance: r.z.number(),
                    WEETHBalance: r.z.number()
                }),
                l = r.z.object({
                    EffectiveBalance: r.z.number(),
                    EigenlayerPoints: r.z.number(),
                    LoyaltyPoints: r.z.number(),
                    Name: r.z.string()
                }),
                d = r.z.object({
                    Boosted: r.z.number(),
                    Legacy: r.z.number(),
                    Nextgen: r.z.number()
                }),
                u = r.z.object({
                    CbEthBalance: r.z.string(),
                    DepositBlock: r.z.number(),
                    EthBalance: r.z.string(),
                    MinimumRolloverDepositAmount: r.z.string(),
                    Points: r.z.number(),
                    REthBalance: r.z.string(),
                    SfrxEthBalance: r.z.string(),
                    TotalBalance: r.z.string(),
                    WstEthBalance: r.z.string()
                }),
                c = r.z.object({
                    Balance: r.z.number(),
                    ID: r.z.number(),
                    ImageURL: r.z.string().url(),
                    LoyaltyPoints: r.z.number(),
                    Tier: r.z.number()
                }),
                p = r.z.object({
                    Address: r.z.string(),
                    Badges: r.z.array(s),
                    BonusEigenlayerPoints: r.z.number(),
                    BonusLoyaltyPoints: r.z.number(),
                    CheckinPoints: r.z.number(),
                    CheckinStreak: r.z.number(),
                    CurrentBalances: o,
                    EigenlayerPoints: r.z.number(),
                    FinalCountdownDeposits: r.z.number(),
                    IntegrationPointSummaries: r.z.array(l).nullable(),
                    JoinBlock: r.z.number(),
                    LoyaltyPoints: r.z.number(),
                    MintedTokens: r.z.array(c).nullable(),
                    OwnedTokens: r.z.array(c).nullable(),
                    UnwrappedTokens: r.z.array(c).nullable(),
                    BurnedTokens: r.z.array(c).nullable(),
                    ReferralPoints: d,
                    WithdrawalAmount: r.z.number(),
                    userEAPSnapshot: u.optional()
                }),
                m = r.z.object({
                    success: r.z.boolean(),
                    isElligible: r.z.boolean(),
                    isValidAddress: r.z.boolean(),
                    allocationData: i.optional(),
                    snapshot: p.optional(),
                    code: r.z.number()
                });
            var y = n(5175);
            let h = e => (0, y.q)(m, "/api/wallet/".concat(e)),
                f = e => (0, a.k)({
                    queryKey: ["wallet", e],
                    queryFn: () => h(e)
                })
        },
        12867: function(e, t, n) {
            "use strict";
            n.d(t, {
                i2: function() {
                    return u
                },
                x5: function() {
                    return c
                },
                cm: function() {
                    return p
                },
                R6: function() {
                    return m
                },
                d7: function() {
                    return y
                },
                PP: function() {
                    return h
                },
                fE: function() {
                    return f
                },
                Oj: function() {
                    return g
                },
                kJ: function() {
                    return E
                },
                IK: function() {
                    return b
                },
                Ro: function() {
                    return C
                },
                iC: function() {
                    return v
                }
            });
            var a = n(65810),
                r = n(67244);
            n(53130);
            var i = n(75809),
                s = n(6378);
            let o = e => {
                let t = (0, i.useRef)(null),
                    n = e => (t.current = e, e);
                (0, i.useEffect)(() => {
                    if (!0 === e.isPendingSig && n(s.Am.loading("Please sign transaction", {
                            isLoading: !0
                        })), e.error && ((null == t ? void 0 : t.current) ? s.Am.update(t.current, {
                            render: l(e.error),
                            isLoading: !1,
                            type: "error",
                            autoClose: 3e3,
                            onClose: () => e.reset()
                        }) : n((0, s.Am)(l(e.error) || "Transaction Failed", {
                            isLoading: !1,
                            type: "error",
                            autoClose: 3e3,
                            onClose: () => e.reset()
                        }))), "pending" === e.status && e.hash && t.current) {
                        s.Am.update(t.current, {
                            render: "Transaction in Progress",
                            isLoading: !0,
                            toastId: n(e.hash)
                        });
                        return
                    }
                    if ("success" == e.status && (null == t ? void 0 : t.current) && e.hash) {
                        s.Am.update(t.current, {
                            render: "Transaction Success",
                            isLoading: !1,
                            autoClose: 5e3,
                            onClose: () => e.reset()
                        });
                        return
                    }
                }, [e]), (0, i.useEffect)(() => () => {
                    (null == t ? void 0 : t.current) && s.Am.isActive(null == t ? void 0 : t.current) && s.Am.dismiss(t.current)
                }, [])
            };

            function l(e) {
                if (e) {
                    if ("Error" === e.name) return e.message;
                    if ("shortMessage" in e) return e.shortMessage
                }
                return "Transaction Failed"
            }
            var d = n(89801);
            let u = [{
                    type: "constructor",
                    inputs: [{
                        name: "token_",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "merkleRoot_",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "endTime_",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable"
                }, {
                    type: "error",
                    inputs: [{
                        name: "target",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressEmptyCode"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressInsufficientBalance"
                }, {
                    type: "error",
                    inputs: [],
                    name: "AlreadyClaimed"
                }, {
                    type: "error",
                    inputs: [],
                    name: "ClaimWindowFinished"
                }, {
                    type: "error",
                    inputs: [],
                    name: "EndTimeInPast"
                }, {
                    type: "error",
                    inputs: [],
                    name: "FailedInnerCall"
                }, {
                    type: "error",
                    inputs: [],
                    name: "InvalidProof"
                }, {
                    type: "error",
                    inputs: [],
                    name: "NoWithdrawDuringClaim"
                }, {
                    type: "error",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableInvalidOwner"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableUnauthorizedAccount"
                }, {
                    type: "error",
                    inputs: [{
                        name: "token",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "SafeERC20FailedOperation"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Claimed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "previousOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "newOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "OwnershipTransferred"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "merkleProof",
                        internalType: "bytes32[]",
                        type: "bytes32[]"
                    }],
                    name: "claim",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "endTime",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "isClaimed",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "merkleRoot",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "token",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "newOwner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "withdraw",
                    outputs: [],
                    stateMutability: "nonpayable"
                }],
                c = {
                    1: "0x93fFf4028927f53f708534397ed349B9CD4e2F9F",
                    11155111: "0xcE6026dBD690c1E2fF875Bf59F1aafdfFefA3192"
                },
                p = [{
                    type: "constructor",
                    inputs: [{
                        name: "token_",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "merkleRoot_",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "endTime_",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable"
                }, {
                    type: "error",
                    inputs: [{
                        name: "target",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressEmptyCode"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressInsufficientBalance"
                }, {
                    type: "error",
                    inputs: [],
                    name: "AlreadyClaimed"
                }, {
                    type: "error",
                    inputs: [],
                    name: "ClaimWindowFinished"
                }, {
                    type: "error",
                    inputs: [],
                    name: "EndTimeInPast"
                }, {
                    type: "error",
                    inputs: [],
                    name: "FailedInnerCall"
                }, {
                    type: "error",
                    inputs: [],
                    name: "InvalidProof"
                }, {
                    type: "error",
                    inputs: [],
                    name: "NoWithdrawDuringClaim"
                }, {
                    type: "error",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableInvalidOwner"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableUnauthorizedAccount"
                }, {
                    type: "error",
                    inputs: [{
                        name: "token",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "SafeERC20FailedOperation"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Claimed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "previousOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "newOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "OwnershipTransferred"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "merkleProof",
                        internalType: "bytes32[]",
                        type: "bytes32[]"
                    }],
                    name: "claim",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "endTime",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "isClaimed",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "merkleRoot",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "token",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "newOwner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "withdraw",
                    outputs: [],
                    stateMutability: "nonpayable"
                }],
                m = {
                    1: "0x1baa2146E5b258a2CC516166a095DbC22CAacfe6",
                    11155111: "0xd83B953a521193f080fd467D2529faC716D9FB5C"
                },
                y = [{
                    type: "constructor",
                    inputs: [{
                        name: "token_",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "merkleRoot_",
                        internalType: "bytes32",
                        type: "bytes32"
                    }, {
                        name: "endTime_",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable"
                }, {
                    type: "error",
                    inputs: [{
                        name: "target",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressEmptyCode"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "AddressInsufficientBalance"
                }, {
                    type: "error",
                    inputs: [],
                    name: "AlreadyClaimed"
                }, {
                    type: "error",
                    inputs: [],
                    name: "ClaimWindowFinished"
                }, {
                    type: "error",
                    inputs: [],
                    name: "EndTimeInPast"
                }, {
                    type: "error",
                    inputs: [],
                    name: "FailedInnerCall"
                }, {
                    type: "error",
                    inputs: [],
                    name: "InvalidProof"
                }, {
                    type: "error",
                    inputs: [],
                    name: "NoWithdrawDuringClaim"
                }, {
                    type: "error",
                    inputs: [{
                        name: "owner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableInvalidOwner"
                }, {
                    type: "error",
                    inputs: [{
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "OwnableUnauthorizedAccount"
                }, {
                    type: "error",
                    inputs: [{
                        name: "token",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "SafeERC20FailedOperation"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address",
                        indexed: !1
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !1
                    }],
                    name: "Claimed"
                }, {
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "previousOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "newOwner",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }],
                    name: "OwnershipTransferred"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "account",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "amount",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "merkleProof",
                        internalType: "bytes32[]",
                        type: "bytes32[]"
                    }],
                    name: "claim",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "endTime",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "index",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "isClaimed",
                    outputs: [{
                        name: "",
                        internalType: "bool",
                        type: "bool"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "merkleRoot",
                    outputs: [{
                        name: "",
                        internalType: "bytes32",
                        type: "bytes32"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "token",
                    outputs: [{
                        name: "",
                        internalType: "address",
                        type: "address"
                    }],
                    stateMutability: "view"
                }, {
                    type: "function",
                    inputs: [{
                        name: "newOwner",
                        internalType: "address",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable"
                }, {
                    type: "function",
                    inputs: [],
                    name: "withdraw",
                    outputs: [],
                    stateMutability: "nonpayable"
                }],
                h = {
                    1: "0x227DD729c7Ca1Eb91c22DaC0C4B1aBaD75b8365a",
                    11155111: "0x63DF02F21E137e1CeAab400A2d96663c84CEE069"
                },
                f = (0, a.c)({
                    abi: u,
                    address: c
                }),
                x = (0, r.x)({
                    abi: u,
                    address: c
                }),
                b = () => {
                    let e = x(),
                        t = (0, d.A)({
                            hash: e.data
                        }),
                        {
                            isPending: n,
                            ...a
                        } = e;
                    return o({
                        error: e.error || t.error,
                        status: t.status,
                        isPendingSig: n,
                        hash: e.data,
                        reset: e.reset
                    }), { ...a,
                        isPendingSig: n,
                        transactionData: t
                    }
                },
                g = (0, a.c)({
                    abi: p,
                    address: m
                }),
                T = (0, r.x)({
                    abi: p,
                    address: m
                }),
                C = () => {
                    let e = T(),
                        t = (0, d.A)({
                            hash: e.data
                        }),
                        {
                            isPending: n,
                            ...a
                        } = e;
                    return o({
                        error: e.error || t.error,
                        status: t.status,
                        isPendingSig: n,
                        hash: e.data,
                        reset: e.reset
                    }), { ...a,
                        isPendingSig: n,
                        transactionData: t
                    }
                },
                E = (0, a.c)({
                    abi: y,
                    address: h
                }),
                A = (0, r.x)({
                    abi: y,
                    address: h
                }),
                v = () => {
                    let e = A(),
                        t = (0, d.A)({
                            hash: e.data
                        }),
                        {
                            isPending: n,
                            ...a
                        } = e;
                    return o({
                        error: e.error || t.error,
                        status: t.status,
                        isPendingSig: n,
                        hash: e.data,
                        reset: e.reset
                    }), { ...a,
                        isPendingSig: n,
                        transactionData: t
                    }
                }
        },
        66221: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return u
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(35552),
                s = n(21514),
                o = n(73207),
                l = n(28197);
            let d = (0, o.j)("transition-colors disabled:pointer-events-none disabled:cursor-not-allowed", {
                    variants: {
                        variant: {
                            default: "",
                            primary: "bg-logo-gradient bg-[length:200%_100%] bg-center transition-[background-position] duration-300 hover:bg-right disabled:opacity-60",
                            white: "bg-white text-navy-dark-1 hover:bg-navy-dark-1 hover:text-white",
                            green: "bg-success-stroke text-white hover:bg-success",
                            navy: "bg-navy-medium-3 text-white hover:bg-white hover:text-navy-medium-3",
                            dark: "bg-dark-gradient-3"
                        },
                        size: {
                            small: "px-4 py-2 sm:px-10 sm:py-3"
                        },
                        rounded: {
                            default: "rounded-xl",
                            none: "rounded-none"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "small",
                        rounded: "default"
                    }
                }),
                u = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: r,
                        size: o,
                        asChild: u = !1,
                        type: c,
                        isLoading: p,
                        children: m,
                        disabled: y,
                        ...h
                    } = e, f = u ? i.g7 : "button";
                    return (0, a.jsx)(f, {
                        className: (0, s.cn)(d({
                            variant: r,
                            size: o,
                            className: n
                        }), {
                            relative: p
                        }),
                        ref: t,
                        ...h,
                        ...u ? {} : {
                            type: null != c ? c : "button",
                            disabled: p || y
                        },
                        children: p ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: (0, a.jsx)(l.Z, {
                                    className: "size-6 animate-spin text-white"
                                })
                            }), (0, a.jsx)("span", {
                                className: "opacity-0",
                                children: m
                            })]
                        }) : m
                    })
                });
            u.displayName = "Button"
        },
        71027: function(e, t, n) {
            "use strict";
            n.d(t, {
                $N: function() {
                    return w
                },
                Be: function() {
                    return L
                },
                GG: function() {
                    return f
                },
                Vq: function() {
                    return m
                },
                a7: function() {
                    return E
                },
                cN: function() {
                    return A
                },
                cZ: function() {
                    return g
                },
                fK: function() {
                    return T
                },
                hg: function() {
                    return y
                }
            });
            var a = n(93361),
                r = n(75809),
                i = n(36986),
                s = n(21514),
                o = n(73207),
                l = n(58835);
            let d = (0, o.j)("fixed left-[50%] top-[50%] z-50 flex max-h-svh w-full max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col space-y-4 rounded-2xl p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", {
                    variants: {
                        variant: {
                            default: "bg-navy-medium-1",
                            platinum: "bg-tier-platinum-shine bg-blend-overlay"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                u = r.createContext(null),
                c = e => {
                    let {
                        variant: t,
                        children: n
                    } = e;
                    return (0, a.jsx)(u.Provider, {
                        value: {
                            variant: t
                        },
                        children: n
                    })
                },
                p = () => {
                    let e = r.useContext(u);
                    if (!e) throw Error("useVariantContext must be used within a VariantProvider");
                    return e
                },
                m = e => {
                    let {
                        children: t,
                        variant: n,
                        ...r
                    } = e;
                    return (0, a.jsx)(i.fC, { ...r,
                        children: (0, a.jsx)(c, {
                            variant: n,
                            children: t
                        })
                    })
                },
                y = i.xz,
                h = i.h_,
                f = i.x8,
                x = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e, o = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.Z, {}), (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    });
                    return (0, a.jsx)(i.x8, {
                        ref: t,
                        className: (0, s.cn)("absolute right-4 top-2 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-text-3", n),
                        ...r,
                        children: r.asChild ? "function" == typeof r.children ? r.children(o) : r.children : o
                    })
                });
            x.displayName = i.x8.displayName;
            let b = r.forwardRef((e, t) => {
                let {
                    className: n,
                    ...r
                } = e;
                return (0, a.jsx)(i.aV, {
                    ref: t,
                    className: (0, s.cn)("fixed inset-0 z-50 bg-navy-transparent backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...r
                })
            });
            b.displayName = i.aV.displayName;
            let g = r.forwardRef((e, t) => {
                let {
                    className: n,
                    children: r,
                    ...o
                } = e, {
                    variant: l
                } = p();
                return (0, a.jsxs)(h, {
                    children: [(0, a.jsx)(b, {}), (0, a.jsxs)(i.VY, {
                        ref: t,
                        className: (0, s.cn)(d({
                            variant: l,
                            className: n
                        })),
                        ...o,
                        children: [r, "boolean" == typeof o.showClose ? (0, a.jsx)(x, {}) : (0, a.jsx)(x, {
                            asChild: !0,
                            children: o.showClose
                        })]
                    })]
                })
            });
            g.displayName = i.VY.displayName;
            let T = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("relative space-y-3 text-center sm:text-left", t),
                    ...n
                })
            };
            T.displayName = "DialogHeader";
            let C = (0, o.j)("overflow-auto", {
                    variants: {
                        variant: {
                            default: "",
                            platinum: "text-navy-dark-1"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                E = e => {
                    let {
                        className: t,
                        ...n
                    } = e, {
                        variant: r
                    } = p();
                    return (0, a.jsx)("div", {
                        className: (0, s.cn)(C({
                            variant: r,
                            className: t
                        })),
                        ...n
                    })
                };
            E.displayName = "DialogBody";
            let A = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("flex flex-col text-14 sm:space-x-2", t),
                    ...n
                })
            };
            A.displayName = "DialogFooter";
            let v = (0, o.j)("truncate pr-6 text-20", {
                    variants: {
                        variant: {
                            default: "",
                            platinum: "text-navy-dark-1"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                w = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e, {
                        variant: o
                    } = p();
                    return (0, a.jsx)(i.Dx, {
                        ref: t,
                        className: (0, s.cn)(v({
                            variant: o,
                            className: n
                        })),
                        ...r
                    })
                });
            w.displayName = i.Dx.displayName;
            let N = (0, o.j)("text-14", {
                    variants: {
                        variant: {
                            default: "text-text-3",
                            platinum: "text-navy-dark-1"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                L = r.forwardRef((e, t) => {
                    let {
                        className: n,
                        ...r
                    } = e, {
                        variant: o
                    } = p();
                    return (0, a.jsx)(i.dk, {
                        ref: t,
                        className: (0, s.cn)(N({
                            variant: o,
                            className: n
                        })),
                        ...r
                    })
                });
            L.displayName = i.dk.displayName
        },
        21514: function(e, t, n) {
            "use strict";
            n.d(t, {
                cn: function() {
                    return i
                }
            });
            var a = n(23995);
            let r = (0, n(11668).q7)({
                extend: {
                    classGroups: {
                        "font-size": ["text-14", "text-16", "text-18", "text-20", "text-22", "text-24", "text-28", "text-32", "text-34", "text-40", "text-44", "text-48", "text-56", "text-64"],
                        "bg-image": ["bg-background-gradient", "bg-logo-gradient", "bg-logo-gradient-2", "bg-eeth-gradient", "bg-linear-gradient", "bg-linear-gradient-16", "bg-linear-gradient-stroke", "bg-tier", "bg-tier-bronze", "bg-tier-bronze-shine", "bg-tier-silver", "bg-tier-silver-shine", "bg-tier-gold", "bg-tier-gold-shine", "bg-tier-platinum-shine"],
                        shadow: ["shadow-glow", "shadow-blue"],
                        animate: ["animate-float", "animate-accordion-down", "animate-accordion-up"]
                    }
                }
            });

            function i() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return r((0, a.W)(t))
            }
        },
        4862: function(e, t, n) {
            "use strict";
            n.d(t, {
                dF: function() {
                    return l
                },
                _o: function() {
                    return s
                },
                tN: function() {
                    return c
                },
                JO: function() {
                    return i
                }
            });
            var a = n(91398);
            let r = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        n = (0, a.K)(e);
                    return "".concat(n.slice(0, t), "...").concat(n.slice(-t))
                },
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                    return e && e.length > 0 ? r(e, t) : e
                };

            function s(e) {
                if (!e) return {
                    backgroundImage: "",
                    backgroundColor: ""
                };
                let t = function(e) {
                    var t;
                    let n = null === (t = e.match(/.{1,7}/g)) || void 0 === t ? void 0 : t.splice(0, 5),
                        a = [];
                    return null == n || n.forEach(e => {
                        let t = 0;
                        for (let n = 0; n < e.length; n += 1) t = e.charCodeAt(n) + ((t << 5) - t), t &= t;
                        let n = [0, 0, 0];
                        for (let e = 0; e < 3; e += 1) {
                            let a = t >> 8 * e & 255;
                            n[e] = a
                        }
                        a.push("rgb(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ")"))
                    }), a
                }(e);
                return {
                    backgroundImage: "radial-gradient(at 66% 77%, ".concat(t[1], " 0px, transparent 50%),\n  radial-gradient(at 29% 97%, ").concat(t[2], " 0px, transparent 50%),\n  radial-gradient(at 99% 86%, ").concat(t[3], " 0px, transparent 50%),\n  radial-gradient(at 29% 88%, ").concat(t[4], " 0px, transparent 50%)"),
                    backgroundColor: t[0]
                }
            }
            var o = n(21024);
            let l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return parseFloat((0, o.d)(e, n)).toLocaleString("en", {
                        minimumFractionDigits: t
                    })
                },
                d = {
                    24: "Y",
                    21: "Z",
                    18: "E",
                    15: "P",
                    12: "T",
                    9: "B",
                    6: "M",
                    3: "K",
                    0: "",
                    "-3": "m",
                    "-6": "\xb5",
                    "-9": "n",
                    "-12": "p",
                    "-15": "f",
                    "-18": "a",
                    "-21": "z",
                    "-24": "y"
                };

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n ? parseFloat(e.toFixed(t)) : parseFloat(e.toPrecision(t))
            }

            function c(e, t, n) {
                let a = u("number" == typeof e ? e : parseFloat(e), t, n);
                if (a < 1) return a.toString();
                let r = Math.max(Math.min(3 * Math.floor((0 === a ? 0 : Math.floor(Math.log10(Math.abs(a)))) / 3), 24), -24);
                a >= 1e9 && a < 1e12 && (r = 9);
                let i = d[r.toString()] || (9 === r ? "B" : "");
                return i ? u(a / Math.pow(10, r), t, n).toString() + i : a.toString()
            }
        }
    }
]);