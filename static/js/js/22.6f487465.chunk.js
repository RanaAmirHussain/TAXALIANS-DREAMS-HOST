(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        "+f1A": function(e, t, n) {
            "use strict";
            n.d(t, "m", function() {
                return s
            }), n.d(t, "s", function() {
                return d
            }), n.d(t, "j", function() {
                return l
            }), n.d(t, "a", function() {
                return f
            }), n.d(t, "p", function() {
                return b
            }), n.d(t, "q", function() {
                return O
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "e", function() {
                return j
            }), n.d(t, "f", function() {
                return _
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "i", function() {
                return C
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "b", function() {
                return I
            }), n.d(t, "r", function() {
                return T
            }), n.d(t, "k", function() {
                return y
            }), n.d(t, "g", function() {
                return S
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("QtlZ"),
                o = n("NFvl"),
                u = n("LVcX"),
                s = function getSession() {
                    if (!i.a || !i.a.getState) return {};
                    var e = Object(i.b)().session;
                    return void 0 === e ? {} : e
                },
                d = function getVisitorTimezone(e) {
                    return Object(o.a)(["session", "context", "timezone"], e)
                },
                l = function getIntegrationCookiesFromStore(e) {
                    return Object(o.a)(["session", "integrationCookies"], e)
                },
                f = function() {
                    var e = Object(c.a)(a.a.mark(function _callee(e, t) {
                        return a.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", Object(u.a)(null, ["session", "auth", "socket", "".concat(t)], e));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    }));
                    return function getAuthForSocketConnection(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function getSessionId(e) {
                    return Object(u.a)(void 0, ["session", "id"], e)
                },
                O = function getSiteVisits(e) {
                    return Object(u.a)(0, ["session", "visitInformation", "total"], e)
                },
                p = function getSessionContext(e) {
                    return Object(u.a)({}, ["session", "context"], e)
                },
                v = function getGdprConsentStatus(e) {
                    return Object(u.a)({}, ["session", "gdpr"], e)
                },
                E = function getSessionGeoInfo(e) {
                    return Object(u.a)({}, ["session", "geo"], e)
                },
                g = function getEndUser(e) {
                    return Object(u.a)({}, ["session", "endUser"], e)
                },
                j = function getEndUserId(e) {
                    return Object(u.a)(0, ["session", "endUser", "id"], e)
                },
                _ = function getEndUserType(e) {
                    return Object(u.a)("LEAD", ["session", "endUser", "type"], e)
                },
                h = function getEndUserEmail(e) {
                    return Object(u.a)("", ["session", "endUser", "email"], e)
                },
                C = function getInstanceId(e) {
                    return Object(u.a)("", ["session", "instanceId"], e)
                },
                m = function getPageHref(e) {
                    return Object(u.a)("", ["session", "context", "page", "href"], e)
                },
                I = function getCampaignRefreshToken(e) {
                    return Object(u.a)("", ["session", "campaignRefreshToken"], e)
                },
                T = function getUserAgent(e) {
                    return Object(u.a)("", ["session", "context", "userAgent"], e)
                },
                y = function getLeadId(e) {
                    return Object(u.a)(null, ["session", "endUser", "leadId"], e)
                },
                S = function getExternalId(e) {
                    return Object(u.a)(null, ["session", "externalId"], e)
                }
        },
        "+oIK": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return j
            }), n.d(t, "b", function() {
                return _
            });
            var r = n("nfbA"),
                a = n("LeJ0"),
                c = n("QtlZ"),
                i = n("Hvhg"),
                o = n("SFoa"),
                u = n("PCkZ"),
                s = n("+f1A"),
                d = n("awwx"),
                l = n("LVcX"),
                f = n("hm8b"),
                b = n("i9gz"),
                O = n("MFhO"),
                p = n("PjZB"),
                v = n("0lfv"),
                E = {
                    widgetVersion: 2,
                    widgetRelease: "LOCAL" !== a.a.ENV ? "___RELEASE_ID" : "local"
                },
                g = function hydrateContextAttributesForMessage() {
                    var e, t = Object(c.b)();
                    return Object(r.a)(Object(r.a)({
                        locale: Object(o.f)()
                    }, function attachCampaignAttributesForMessage() {
                        var e = {},
                            t = Object(c.b)().campaigns,
                            n = void 0 === t ? {} : t,
                            r = n.activeCampaign,
                            a = void 0 === r ? {} : r,
                            i = n.campaignEvalId;
                        return a.id && (e.campaignId = a.id, e.relatedCampaignId = a.id, e.isExpandable = !0), i && (e.targetingEvalUUID = i), e
                    }()), {}, {
                        integrations: Object(u.b)(),
                        siteVisits: Object(s.q)(t),
                        sentOfflineHours: !(null === (e = t.view) || void 0 === e ? void 0 : e.matchedHours)
                    })
                },
                j = function createMessage(e) {
                    var t = e.message,
                        n = void 0 === t ? "" : t,
                        a = e.activeConversation,
                        o = e.attributes,
                        u = void 0 === o ? {} : o,
                        s = e.isMetaMessage,
                        j = void 0 !== s && s,
                        _ = e.authorId,
                        h = e.status,
                        m = e.attachments,
                        I = void 0 === m ? [] : m,
                        T = e.preMessages,
                        y = void 0 === T ? [] : T,
                        S = e.inboxId,
                        R = e.type,
                        A = void 0 === R ? p.e.CHAT : R,
                        N = e.contentType,
                        x = void 0 === N ? p.c.CHAT : N,
                        w = e.isEndUserMessage,
                        M = void 0 === w || w,
                        L = Object(c.b)(),
                        k = Object(l.a)({
                            context: {}
                        }, ["session"], L),
                        H = Object(l.a)(p.b.LEAD, ["session", "endUser", "type"], L),
                        D = Object(l.a)(null, ["campaigns", "activeCampaign"], L),
                        U = Object(l.a)({}, ["embed", "configuration"], L).profileMode,
                        G = void 0 !== U && U,
                        V = Object(i.d)(L, "messageAttributes", {}),
                        F = C(S),
                        P = Object(f.a)(y) || Object(b.a)(y) ? function _applyPremessagesForMessage(e, t) {
                            var n = Object(c.b)(),
                                r = Object(l.a)({}, ["embed", "configuration"], n),
                                a = r.profileMode,
                                i = void 0 !== a && a,
                                o = r.team,
                                u = r.theme,
                                s = void 0 === u ? {} : u,
                                f = Object(d.b)(n),
                                b = Object(l.a)(null, ["attributes", "campaignDisplayType"], t) === O.a.WELCOME_MESSAGE,
                                p = Object(l.a)("", ["attributes", "message"], t),
                                v = Object(l.a)(null, ["attributes", "senderId"], t),
                                E = [];
                            if (e) return E;
                            if (i && f && E.push({
                                    body: s.welcomeMessage,
                                    sender: o.find(function(e) {
                                        return e.id === f
                                    })
                                }), b) {
                                var g = f || v;
                                E.push({
                                    body: p,
                                    sender: o.find(function(e) {
                                        return e.id === g
                                    })
                                })
                            }
                            return E
                        }(a, D) : y,
                        B = g(),
                        W = M ? Object(v.v)() : void 0;
                    return {
                        attachments: I,
                        conversationId: a,
                        body: n,
                        type: A,
                        status: h,
                        contentType: x,
                        authorId: _,
                        authorType: H,
                        inboxId: F,
                        attributes: Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({}, u), {}, {
                            widgetGuid: W,
                            isMetaMessage: j,
                            generatedAt: Date.now().valueOf(),
                            autoAssigneeId: Object(d.b)(L),
                            profileMode: G,
                            preMessages: P,
                            isFirstMessage: !a
                        }, E), B), V),
                        context: {
                            userAgent: k.context.userAgent,
                            timezone: k.context.timezone,
                            locale: k.context.locale,
                            page: k.context.page
                        }
                    }
                },
                _ = function createPreMessagesForCampaign(e) {
                    var t = e.body,
                        n = e.attributes,
                        r = (n = void 0 === n ? {} : n).title,
                        a = void 0 === r ? null : r,
                        c = n.senderId,
                        i = void 0 === c ? null : c,
                        o = n.noSenderId,
                        u = void 0 !== o && o,
                        s = n.automaticSender,
                        d = void 0 !== s && s,
                        l = n.campaignDisplayType,
                        f = (void 0 === l ? null : l) === O.a.WELCOME_MESSAGE,
                        b = h(i, u, d),
                        p = [];
                    return a && !f && p.push({
                        id: Object(v.v)(),
                        body: a,
                        sender: b
                    }), t && p.push({
                        id: Object(v.v)(),
                        body: t,
                        sender: b
                    }), p
                },
                h = function getSender(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (t) return null;
                    var r = Object(l.a)({}, ["embed", "configuration"], Object(c.b)()),
                        a = r.autoAssigneeId,
                        i = r.team,
                        o = Object(c.b)().session.assignedAgentId,
                        u = a || o;
                    return n && u ? i.find(function(e) {
                        return e.id === u
                    }) : i.find(function(t) {
                        return t.id === e
                    })
                },
                C = function resolveInboxIdForMessage(e) {
                    var t = Object(c.b)(),
                        n = Object(i.d)(t, "inboxId"),
                        r = Object(i.l)(t);
                    if (!Object(f.a)(r)) return r;
                    if (!Object(f.a)(e)) return e;
                    var a = Object(l.a)(null, ["conversations", "activeConversation"], t),
                        o = Object(l.a)(null, ["conversations", "conversations", a, "conversation"], t);
                    if (!Object(f.a)(o)) return o.inboxId;
                    var u = Object(l.a)(null, ["campaigns", "activeCampaign", "inboxId"], t);
                    return Object(f.a)(u) ? n : u
                }
        },
        "1tbh": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mssF"),
                a = n("0lfv"),
                c = function sendMessageRoundTripMetric(e) {
                    var t = e.message,
                        n = e.timedOut,
                        c = void 0 !== n && n,
                        i = t.attributes,
                        o = void 0 === i ? {} : i;
                    if (o.generatedAt) {
                        var u = {
                                isTimeout: c,
                                isFirstMessage: o.isFirstMessage,
                                widgetGuid: o.widgetGuid,
                                messageId: t.id,
                                conversationId: t.conversationId
                            },
                            s = Date.now() - o.generatedAt,
                            d = o.isFirstMessage ? "conversationRoundTripTime" : "messageRoundTripTime";
                        c ? Object(a.w)(["Round-trip timed out for message ".concat(t.id)]) : Object(a.n)({
                            data: ["Round-trip time for message ".concat(t.id, " completed in ").concat(s)]
                        });
                        try {
                            Object(r.e)({
                                name: d,
                                value: s,
                                context: u
                            })
                        } catch (l) {
                            Object(a.f)(l)
                        }
                    }
                }
        },
        "2XY6": function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return i
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "d", function() {
                return l
            });
            var r = n("sxX9"),
                a = n("i9gz"),
                c = n("ADGC"),
                i = function shouldWidgetIconDisplay(e) {
                    var t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = e.view,
                        u = void 0 === o ? {} : o,
                        s = e.conversations,
                        d = void 0 === s ? {} : s,
                        l = e.embed,
                        f = void 0 === l ? {} : l,
                        b = e.campaigns,
                        O = void 0 === b ? {} : b,
                        p = u.forceHideIcon,
                        v = i || u.matchedTargeting,
                        E = d.hasForcedConversation,
                        g = !Object(c.a)(),
                        j = E && g,
                        _ = !!(null === O || void 0 === O ? void 0 : null === (t = O.activeCampaign) || void 0 === t ? void 0 : t.id) || !!d.activeConversation,
                        h = !Object(a.a)(d.conversations),
                        C = !!(null === f || void 0 === f ? void 0 : null === (n = f.configuration) || void 0 === n ? void 0 : null === (r = n.gates) || void 0 === r ? void 0 : r.show_chat_existing_conversations);
                    return !p && (!(!C || !h) || !(!g && u.chatOpen) && (v || j || _))
                },
                o = function widgetIconVisible(e) {
                    return function controllerOpen(e) {
                        var t = e.view;
                        return (void 0 === t ? {} : t).controllerOpen
                    }(e) && i(e)
                },
                u = function isChatOpen(e) {
                    var t = e.view;
                    return (void 0 === t ? {} : t).chatOpen
                },
                s = function getIsInitComplete(e) {
                    var t = e.view;
                    return !!(void 0 === t ? {} : t).initComplete
                },
                d = function chatHeaderType(e) {
                    var t = e.view,
                        n = void 0 === t ? {} : t,
                        a = e.campaigns,
                        c = void 0 === a ? {} : a,
                        i = e.conversations,
                        o = void 0 === i ? {} : i,
                        u = e.session;
                    return (void 0 === u ? {} : u).gdpr.hasConsent ? n.isChatTakeover ? r.b.CHAT_TAKEOVER : o.activeConversation ? r.b.CONVERSATION : c.activeCampaign.id ? r.b.WELCOME_MESSAGE : r.b.GREETING : r.b.GDPR
                },
                l = function isFastLaneCampaign(e) {
                    return e.view.isChatTakeover
                }
        },
        "6KaP": function(e, t, n) {
            "use strict";
            var r = n("hhh8"),
                a = n("uIJS"),
                c = n("LvsC"),
                i = n("qytN"),
                o = n("7jL2"),
                u = n("QtlZ"),
                s = n("SFoa"),
                d = n("+f1A"),
                l = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(o.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(o.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(i.a)(this, t)
                }
            }
            var f = 5e3,
                b = new(function(e) {
                    Object(c.a)(LogsEventBuffer, e);
                    var t = _createSuper2(LogsEventBuffer);

                    function LogsEventBuffer() {
                        var e;
                        return Object(a.a)(this, LogsEventBuffer), (e = t.call(this, f)).createLogPayload = function(e) {
                            return {
                                application: "widget",
                                orgId: Object(s.h)(),
                                endUserId: Object(d.e)(Object(u.b)()),
                                userAgent: navigator.userAgent,
                                logEvents: e
                            }
                        }, e._publishBuffer = function() {
                            e._events.length && (Object(r.b)(e.createLogPayload(e._events)), e._resetBuffer())
                        }, e
                    }
                    return LogsEventBuffer
                }(l.a));
            n.d(t, "a", function() {
                return O
            });
            var O = function logInternally(e) {
                var t = e.message,
                    n = e.level,
                    a = void 0 === n ? r.a.INFO : n;
                b.push({
                    timestamp: Date.now(),
                    level: a,
                    message: t
                })
            }
        },
        CYoe: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "d", function() {
                return u
            });
            var r = n("Cpup"),
                a = function receiveMarkedTime(e, t) {
                    return Object(r.a)({
                        type: "RECEIVE_MARKED_TIME",
                        payload: {
                            name: e,
                            time: t
                        }
                    })
                },
                c = function deleteMarkedTime(e) {
                    return Object(r.a)({
                        type: "DELETE_MARKED_TIME",
                        payload: {
                            name: e
                        }
                    })
                },
                i = function setHasSentImpression() {
                    return Object(r.a)({
                        type: "SET_HAS_SENT_IMPRESSION"
                    })
                },
                o = function receiveInitTimestamp(e) {
                    return Object(r.a)({
                        type: "RECEIVE_INIT_TIMESTAMP",
                        payload: e
                    })
                },
                u = function receiveServerResponseSize(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SERVER_RESPONSE_SIZE",
                        payload: e
                    })
                }
        },
        OA1u: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "a", function() {
                return u
            });
            var r = n("Cpup"),
                a = function setShouldSkipCampaigns(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_SKIP_CAMPAIGNS",
                        payload: e
                    })
                },
                c = function setShouldSkipWidgetTargeting(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_SKIP_WIDGET_TARGETING",
                        payload: e
                    })
                },
                i = function setShouldForceShowWidget(e) {
                    return Object(r.a)({
                        type: "SET_SHOULD_FORCE_SHOW_WIDGET",
                        payload: e
                    })
                },
                o = function updateOnlineStatus(e) {
                    return Object(r.a)({
                        type: "UPDATE_ONLINE_STATUS",
                        payload: e
                    })
                },
                u = function setHasExitIntent() {
                    return Object(r.a)({
                        type: "SET_HAS_EXIT_INTENT"
                    })
                }
        },
        "X9/c": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return b
            }), n.d(t, "d", function() {
                return O
            }), n.d(t, "b", function() {
                return p
            });
            var r, a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("QtlZ"),
                u = n("7oh4"),
                s = n("vTYT"),
                d = n("7oto");
            ! function(e) {
                e.SHOW = "show", e.HIDE = "hide", e.NONE = "none"
            }(r || (r = {}));
            var l = function setControllerDimensions() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    Object(d.a)({
                        topic: "set-frame-dimensions",
                        message: {
                            height: "".concat(e, "px"),
                            name: "controller",
                            width: "".concat(t, "px")
                        }
                    })
                },
                f = function setControllerHeight() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.NONE;
                    Object(d.a)({
                        topic: "set-frame-height",
                        message: {
                            height: "".concat(e, "px"),
                            name: "controller",
                            max: !1,
                            intent: t
                        }
                    })
                },
                b = function() {
                    var e = Object(i.a)(c.a.mark(function _callee() {
                        var e;
                        return c.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(d.a)({
                                        topic: "get-frame-height",
                                        message: {
                                            name: "controller"
                                        }
                                    });
                                case 2:
                                    if (!(e = t.sent) || "0px" !== e.data) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    Object(d.a)({
                                        topic: "hide-frame-from-screen-reader",
                                        message: {
                                            name: s.c.CONTROLLER
                                        }
                                    }), f(0, r.HIDE);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function hideWidgetController() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2() {
                        var e;
                        return c.a.wrap(function _callee2$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(d.a)({
                                        topic: "get-frame-height",
                                        message: {
                                            name: "controller"
                                        }
                                    });
                                case 2:
                                    if (!(e = t.sent) || "0px" === e.data) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    Object(d.a)({
                                        topic: "show-frame-to-screen-reader",
                                        message: {
                                            name: s.c.CONTROLLER
                                        }
                                    }), f(u.a, r.SHOW);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2)
                    }));
                    return function showWidgetController() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function resetControllerSize() {
                    Object(o.b)().view.canResizeController && (f(u.a), function setControllerWidth() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        Object(d.a)({
                            topic: "set-frame-width",
                            message: {
                                width: "".concat(e, "px"),
                                name: "controller"
                            }
                        })
                    }(u.b))
                }
        },
        YA8z: function(e, t, n) {
            "use strict";
            var r = n("zygl"),
                a = n("UXSh"),
                c = n("iL91"),
                i = n("BHzW"),
                o = n("9udt"),
                u = n("6iwg"),
                s = n("7Dgk"),
                d = n("uzby"),
                l = n("r/xD"),
                f = n("7oto"),
                b = n("Cpup"),
                O = {
                    sentryConfig: l.b
                },
                p = Object(b.b)(O, {
                    RECEIVE_SENTRY_CONFIG: function receiveSentryConfig(e) {
                        var t = e.action;
                        e.draft.sentryConfig = t.payload, Object(f.a)({
                            topic: "set-value-on-host-window",
                            message: {
                                key: "drift_sentry_config",
                                value: t.payload
                            }
                        })
                    }
                }),
                v = n("CYoe"),
                E = function handleReceiveMarkedtime(e) {
                    var t = e.action;
                    e.draft.timeByName[t.payload.name] = t.payload.time
                },
                g = {
                    RECEIVE_MARKED_TIME: E,
                    RECEIVE_MESSAGE_SENT: function handleReceiveMessageSent(e) {
                        var t, n, r = e.action,
                            a = e.draft;
                        if (null === (n = ((null === (t = r.payload) || void 0 === t ? void 0 : t.message) || {}).attributes) || void 0 === n ? void 0 : n.relatedCampaignId) return E({
                            action: Object(v.c)("meeting_scheduler_rtt", Date.now()),
                            draft: a
                        })
                    },
                    DELETE_MARKED_TIME: function handleDeleteMarkedtime(e) {
                        var t = e.action;
                        delete e.draft.timeByName[t.payload.name]
                    },
                    RECEIVE_INIT_TIMESTAMP: function receiveInitTimestampHandler(e) {
                        var t = e.action;
                        e.draft.initTimestamp = t.payload
                    },
                    RECEIVE_SERVER_RESPONSE_SIZE: function receiveServerResponseSizeHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = t.payload.size;
                        n.loadCostInBytes += r
                    }
                },
                j = Object(b.b)({
                    loadCostInBytes: 0,
                    initTimestamp: null,
                    timeByName: {}
                }, g),
                _ = n("mj2O"),
                h = n.n(_),
                C = n("7SM1"),
                m = n("mssF"),
                I = n("QtlZ"),
                T = n("SsZN"),
                y = n("K7i0"),
                S = n("xwTo"),
                R = n("PCkZ"),
                A = n("LVcX"),
                N = n("U3QC"),
                x = n("icD7"),
                w = n("z5yO"),
                M = n("4HYP"),
                L = n("76KI"),
                k = n("nfbA"),
                H = n("mfas"),
                D = {
                    IDENTIFY_LEAD: function identifyLeadHandler(e) {
                        var t = e.action;
                        e.draft.endUser.email = t.payload
                    },
                    RECEIVE_GEO: function receiveGeoHandler(e) {
                        var t = e.action;
                        e.draft.geo = t.payload
                    },
                    RECEIVE_ACCESS_TOKEN: function receiveAccessTokenHandler(e) {
                        var t = e.action;
                        e.draft.auth.accessToken = t.payload.accessToken
                    },
                    RECEIVE_CHAT_SOCKET_AUTH: function receiveChatSocketAuthHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.auth.socket = Object(k.a)(Object(k.a)({}, n.auth.socket), {}, {
                            chat: t.payload
                        })
                    },
                    RECEIVE_PRESENCE_SOCKET_AUTH: function receivePresenceSocketAuthHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.auth.socket = Object(k.a)(Object(k.a)({}, n.auth.socket), {}, {
                            visitor_presence: t.payload
                        })
                    },
                    RECEIVE_SOCKET: function receiveSocketHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cluster"], t);
                        r && (n.sockets[r] = {
                            channels: {}
                        })
                    },
                    RECEIVE_CHANNEL: function receiveChannelHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cluster"], t);
                        r && (n.sockets[r].channels[t.payload.key] = t.payload.channel)
                    },
                    RECEIVE_END_USER: function receiveEndUserHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = !!t.payload.assignedAgentId;
                        n.endUser = Object(k.a)(Object(k.a)({}, n.endUser), t.payload.endUser), n.isOutbound = r, r && (n.assignedAgentId = t.payload.assignedAgentId)
                    },
                    RECEIVE_EXTERNAL_ID: function receiveExternalIdHandler(e) {
                        var t = e.action;
                        e.draft.externalId = t.payload
                    },
                    UPDATE_INSTANCE_ID: function updateInstanceIdHandler(e) {
                        var t = e.action;
                        e.draft.instanceId = t.payload
                    },
                    RECEIVE_EXTERNAL_EMAIL: function receiveExternalEmailHandler(e) {
                        var t = e.action;
                        e.draft.endUser.externalEmail = t.payload
                    },
                    RECEIVE_EXTERNAL_JWT: function receiveExternalJwtHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.endUser.userJwt = t.payload, n.endUser.waitForUserJwt = !1
                    },
                    WAIT_FOR_EXTERNAL_JWT: function waitForExternalJwtHandler(e) {
                        e.action;
                        e.draft.endUser.waitForUserJwt = !0
                    },
                    RECEIVE_GDPR: function receiveGDPRHandler(e) {
                        var t, n = e.action,
                            r = e.draft;
                        r.gdpr = Object(k.a)(Object(k.a)({}, r.gdpr), null !== (t = null === n || void 0 === n ? void 0 : n.payload) && void 0 !== t ? t : {})
                    },
                    DECLINED_GDPR: function declinedGDPRHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.gdpr = Object(k.a)(Object(k.a)({}, n.gdpr), {}, {
                            declinedConsent: t.payload
                        })
                    },
                    RECEIVE_CONTEXT: function receiveContextHandler(e) {
                        var t = e.action;
                        e.draft.context = t.payload
                    },
                    RECEIVE_SESSION: function receiveSessionHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.id = t.payload.session.sessionId, n.sessionStarted = t.payload.session.sessionStarted, n.campaignRefreshToken = t.payload.session.campaignRefreshToken, n.instanceId = t.payload.session.instanceId
                    },
                    RECEIVE_COOKIE_DOMAIN: function receiveCookieDomainHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(A.a)(null, ["payload", "cookieDomain"], t);
                        n.cookieDomain = r
                    },
                    RECEIVE_VISIT_INFO: function receiveVisitInformation(e) {
                        var t = e.action;
                        e.draft.visitInformation = t.payload
                    },
                    RECEIVE_INTEGRATION_COOKIES: function receiveIntegrationCookies(e) {
                        var t = e.action;
                        e.draft.integrationCookies = t.payload
                    },
                    RECEIVE_EXTERNAL_IDENTITY: function receiveExternalIdentityHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = Object(H.a)(["_meta"], t.payload);
                        n.externalIdentity = Object(k.a)(Object(k.a)({}, n.externalIdentity), r)
                    }
                },
                U = Object(b.b)({
                    geo: null,
                    auth: {},
                    sockets: {},
                    endUser: {},
                    isOutbound: !1,
                    gdpr: {
                        needsConsent: !0,
                        hasConsent: !1,
                        declinedConsent: !1,
                        dismissedConsent: !1
                    },
                    externalId: null,
                    instanceId: null,
                    id: null,
                    sessionStarted: null,
                    campaignRefreshToken: null,
                    cookieDomain: "",
                    context: {
                        page: {},
                        timezone: "",
                        userAgent: "",
                        locale: ""
                    },
                    externalIdentity: {
                        externalId: null,
                        attributes: {},
                        options: {}
                    },
                    integrationCookies: {},
                    visitInformation: {}
                }, D),
                G = {
                    SET_HAS_EXIT_INTENT: function setHasExitIntentHandler(e) {
                        e.draft.hasExitIntent = !0
                    },
                    UPDATE_ONLINE_STATUS: function updateOnlineStatusHandler(e) {
                        var t = e.action;
                        e.draft.isOnline = t.payload
                    },
                    SET_SHOULD_SKIP_CAMPAIGNS: function setShouldSkipCampaignsHandler(e) {
                        var t = e.action;
                        e.draft.skipCampaigns = t.payload
                    },
                    SET_SHOULD_FORCE_SHOW_WIDGET: function setShouldForceShowWidgetHandler(e) {
                        var t = e.action;
                        e.draft.forceShowWidget = t.payload
                    },
                    SET_SHOULD_SKIP_WIDGET_TARGETING: function setShouldSkipWidgetTargetingHandler(e) {
                        var t = e.action;
                        e.draft.skipWidgetTargeting = t.payload
                    }
                },
                V = Object(b.b)({
                    skipCampaigns: !1,
                    skipWidgetTargeting: !1,
                    forceShowWidget: !1,
                    isOnline: !1,
                    hasExitIntent: !1
                }, G),
                F = n("vjCh"),
                P = n("0HCW"),
                B = n("qixE"),
                W = n("TDUE"),
                J = n("qwiD"),
                X = n("X9/c"),
                z = n("Jg5f"),
                K = n("iJtH"),
                Y = n("ADGC"),
                $ = n("MFhO"),
                Z = n("t8ds"),
                Q = n("g6eD"),
                q = n("2XY6"),
                ee = function hasActiveConversation(e) {
                    return !!e.conversations.activeConversation
                },
                te = function() {
                    var e = Object(C.a)(h.a.mark(function _callee() {
                        var e;
                        return h.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = Object(I.b)(), !ee(e) && !Object(P.h)(e)) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, Object(B.e)();
                                case 5:
                                    if (!t.sent) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return t.next = 10, Object(F.j)();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function showFallbackChatContentIfNeeded() {
                        return e.apply(this, arguments)
                    }
                }(),
                ne = function checkAndToggleController(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = Object(q.e)(e, n);
                    t && a ? (r && I.a.dispatch(Object(Q.k)()), Object(X.d)()) : (r && I.a.dispatch(Object(Q.j)()), Object(X.a)())
                },
                re = n("hm8b"),
                ae = {
                    INIT_COMPLETE: function toggleInitCompleteHandler(e) {
                        var t = e.action;
                        e.draft.initComplete = t.payload.initComplete
                    },
                    SET_CLOSE_CHAT_REDIRECT_URL: function setCloseChatRedirectUrl(e) {
                        var t = e.action;
                        e.draft.closeChatRedirectUrl = t.payload
                    },
                    OPEN_CHAT: function chatOpenHandler(e) {
                        e.draft.chatOpen = !0
                    },
                    CLOSE_CHAT: function chatClosedHandler(e) {
                        e.draft.chatOpen = !1
                    },
                    TOGGLE_CAN_RESIZE_CONTROLLER: function toggleCanResizeControllerHandler(e) {
                        var t = e.action;
                        e.draft.canResizeController = t.payload
                    },
                    TOGGLE_CHAT_TAKEOVER: function toggleChatTakeoverHandler(e) {
                        var t = e.action,
                            n = e.draft;
                        n.isChatTakeover = !!t.payload, t.payload && (n.conversationHistoryOpen = !1)
                    },
                    TOGGLE_CONVERSATION_HISTORY: function toggleConversationHistoryHandler(e) {
                        var t = e.action;
                        e.draft.conversationHistoryOpen = t.payload.conversationHistoryOpen
                    },
                    TOGGLE_WIDGET_TARGETING_MATCHED: function toggleWidgetTargetingCompleteHandler(e) {
                        var t = e.action,
                            n = e.draft,
                            r = t.payload,
                            a = r.matchedHours,
                            c = r.matchedTargeting;
                        Object(re.a)(a) || (n.matchedHours = a), Object(re.a)(c) || (n.matchedTargeting = c)
                    },
                    AUTO_SCROLL_CHAT_TO_BOTTOM: function autoScrollChatToBottomHandler(e) {
                        var t = e.action;
                        e.draft.shouldAutoScrollChatToBottom = t.payload
                    },
                    FORCE_HIDE_ICON: function forceHideIconHandler(e) {
                        var t = e.action;
                        e.draft.forceHideIcon = t.payload
                    },
                    SHOW_CONTROLLER: function controllerShowHandler(e) {
                        e.draft.controllerOpen = !0
                    },
                    HIDE_CONTROLLER: function controllerHideHandler(e) {
                        e.draft.controllerOpen = !1
                    }
                },
                ce = Object(b.b)({
                    canResizeController: !0,
                    chatOpen: !1,
                    controllerOpen: !0,
                    closeChatRedirectUrl: null,
                    conversationHistoryOpen: !1,
                    initComplete: !1,
                    isChatTakeover: !1,
                    matchedHours: !1,
                    matchedTargeting: !1
                }, ae),
                ie = n("9OUN"),
                oe = n("Obtf");
            n.d(t, "b", function() {
                return se
            }), n.d(t, "a", function() {
                return de
            });
            var ue = Object(ie.c)({
                    view: ce,
                    embed: u.a,
                    metrics: j,
                    session: U,
                    targeting: V,
                    conversations: i.a,
                    campaigns: a.a,
                    identity: s.a,
                    impressions: d.a,
                    logging: p
                }),
                se = function rootReducer(e, t) {
                    return "REPLACE_STATE" === t.type && (e = t.payload.currentState), ue(e, t)
                },
                de = Object(oe.a)(function onToggleChatEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CHAT"), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(h.a.mark(function _callee2(e) {
                            var t, n;
                            return h.a.wrap(function _callee2$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (t = e.payload, n = !t.displayGreeting && !t.isChatTakeover && !t.isDriftLink, Object(T.d)(t.chatOpen), t.hasOwnProperty("isChatTakeover") && I.a.dispatch(Object(Q.h)(t.isChatTakeover)), Object(Y.a)() || Z.a.set(K.b, t.chatOpen), !t.chatOpen) {
                                            r.next = 14;
                                            break
                                        }
                                        if (Object(X.b)(), !n) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.next = 10, te();
                                    case 10:
                                        I.a.dispatch(Object(Q.g)()), I.a.dispatch(Object(Q.k)()), r.next = 16;
                                        break;
                                    case 14:
                                        I.a.dispatch(Object(Q.f)()), I.a.dispatch(Object(J.p)({
                                            declinedConsent: !1,
                                            dismissedConsent: t.gdprDismissed
                                        }));
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee2)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function onToggleControllerEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CONTROLLER"), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(h.a.mark(function _callee3(e) {
                            var t, n;
                            return h.a.wrap(function _callee3$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        t = e.payload, n = Object(I.b)(), ne(n, t.controllerOpen, n.view.matchedTargeting, !0);
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee3)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function onToggleWidgetMatchedTargeting(e) {
                    return e.pipe(Object(b.c)("TOGGLE_WIDGET_TARGETING_MATCHED"), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(h.a.mark(function _callee4(e) {
                            var t, n;
                            return h.a.wrap(function _callee4$(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        t = e.payload, n = Object(I.b)(), ne(n, n.view.controllerOpen, t.matchedTargeting, !1);
                                    case 3:
                                    case "end":
                                        return r.stop()
                                }
                            }, _callee4)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, function onCloseChatCompleteCampaignEpic(e) {
                    return e.pipe(Object(b.c)("TOGGLE_CHAT"), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(w.a)(function(e) {
                        return !e.payload.chatOpen
                    }), Object(z.a)(function() {
                        return function activeCampaign(e) {
                            return e.campaigns.activeCampaign
                        }(Object(I.b)())
                    }), Object(w.a)(function(e) {
                        return !!e
                    }), Object(w.a)(function(e) {
                        return Object(A.a)(null, ["attributes", "campaignDisplayType"], e) === $.a.WELCOME_MESSAGE
                    }), Object(N.a)(function(e) {
                        var t = Object(A.a)(null, ["id"], e),
                            n = Object(A.a)(null, ["attributes", "playbookId"], e);
                        Object(F.l)(t, n), Object(W.c)(n)
                    }), Object(x.a)())
                }, c.c, c.b, o.a, function pushToChannelEpic(e, t) {
                    return e.pipe(Object(b.c)("PUSH_TO_CHANNEL"), Object(N.a)(function(e) {
                        var n = e.meta,
                            r = e.payload,
                            a = n || {},
                            c = a.clusterName,
                            i = a.channelName,
                            o = a.eventName;
                        if (o && c && i) {
                            var u = Object(A.a)(null, ["session", "sockets", c, "channels", i], t.value);
                            u && u.push(o, r)
                        }
                    }), Object(x.a)())
                }, function updateEndUserEmailEpic(e, t) {
                    return e.pipe(Object(b.c)("IDENTIFY_LEAD"), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(N.a)(function() {
                        var e = Object(C.a)(h.a.mark(function _callee(e) {
                            var t;
                            return h.a.wrap(function _callee$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t = e.payload.email, n.next = 3, Object(R.c)({
                                            email: t
                                        });
                                    case 3:
                                        Object(T.h)({
                                            email: t
                                        });
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()), Object(x.a)())
                }, o.b, c.a, r.a, function refetchMessagesForActiveConversationOnChannelRejoin(e, t) {
                    return e.pipe(Object(b.c)("REJOIN_CHANNEL"), Object(w.a)(function() {
                        return Object(L.a)("messages_refetch")
                    }), Object(w.a)(function() {
                        return "controller" === I.a.name
                    }), Object(w.a)(function(e) {
                        var t = e.payload,
                            n = t.channel,
                            r = t.shouldRefetchMessagesForActiveConversation;
                        return "user" === n && r
                    }), Object(M.a)(Object(C.a)(h.a.mark(function _callee2() {
                        var e, n, r, a;
                        return h.a.wrap(function _callee2$(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return n = Object(S.a)(t.value), c.next = 3, Object(m.d)({
                                        conversationId: n,
                                        limit: 50,
                                        from: void 0
                                    });
                                case 3:
                                    return r = c.sent, a = null === r || void 0 === r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : e.data, c.abrupt("return", Object(y.k)({
                                        conversationId: n,
                                        messages: a
                                    }));
                                case 6:
                                case "end":
                                    return c.stop()
                            }
                        }, _callee2)
                    }))))
                })
        },
        awwx: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return u
            });
            var r = n("QtlZ"),
                a = n("NFvl"),
                c = n("LVcX"),
                i = function getTargetingPath(e, t) {
                    return t = t || Object(r.b)(), Object(a.a)(e, t.targeting)
                },
                o = function resolveAutoAssigneeId(e) {
                    var t = e.session.assignedAgentId,
                        n = Object(c.a)({}, ["embed", "configuration"], e).autoAssigneeId,
                        r = Object(c.a)(null, ["campaigns", "activeCampaign"], e),
                        a = Object(c.a)(!1, ["attributes", "automaticSender"], r);
                    return n || (t || (a ? Object(c.a)(void 0, ["attributes", "senderId"], r) : void 0))
                },
                u = function shouldSkipWidgetTargeting(e) {
                    return Object(a.a)(["targeting", "skipWidgetTargeting"], e)
                }
        },
        da4L: function(e, t, n) {
            "use strict";
            n.d(t, "o", function() {
                return j
            }), n.d(t, "f", function() {
                return _
            }), n.d(t, "p", function() {
                return h
            }), n.d(t, "q", function() {
                return C
            }), n.d(t, "c", function() {
                return I
            }), n.d(t, "g", function() {
                return T
            }), n.d(t, "i", function() {
                return y
            }), n.d(t, "l", function() {
                return S
            }), n.d(t, "m", function() {
                return R
            }), n.d(t, "a", function() {
                return A
            }), n.d(t, "d", function() {
                return N
            }), n.d(t, "h", function() {
                return x
            }), n.d(t, "k", function() {
                return M
            }), n.d(t, "j", function() {
                return k
            }), n.d(t, "r", function() {
                return D
            }), n.d(t, "b", function() {
                return U
            }), n.d(t, "e", function() {
                return G
            }), n.d(t, "n", function() {
                return V
            });
            var r = n("nfbA"),
                a = n("fsHk"),
                c = n("8lq6"),
                i = n("oQJ1"),
                o = n("dMPp"),
                u = n("yzXs"),
                s = n("YsSj"),
                d = n("DboL"),
                l = n("RhEL"),
                f = n("CDfd"),
                b = n("hm8b"),
                O = n("LVcX"),
                p = n("Jstd"),
                v = n("Ry6R"),
                E = n("PjZB"),
                g = n("0lfv"),
                j = Object(c.a)([Object(i.a)(Object(o.a)("createdAt"))]),
                _ = function isDirectAgentMessage(e) {
                    var t = w([e]),
                        n = N(e, "liveViewInitiated"),
                        r = "CREATE_CONVERSATION" === A(e, "newMessagePostSource");
                    return t && (n || r)
                },
                h = function shouldReceiveMessage(e) {
                    var t = e.contentType === E.c.CHAT && (!!e.body.length || !!e.attributes.appointmentInfo || !!e.attributes.startInteraction),
                        n = e.contentType === E.c.EMAIL_CAPTURE_CARD,
                        r = e.attachments && e.attachments.length > 0,
                        a = M(e) || L(e),
                        c = e.contentType === E.c.SMS_NUMBER_REQUESTED || e.contentType === E.c.SMS_NUMBER_SUCCESS,
                        i = t || n || r || a || c;
                    return w([e]) && !i && Object(g.n)({
                        data: ["enduser did not receive message. id: ".concat(e.id, ", attributes: ").concat(JSON.stringify(e.attributes))],
                        internal: !0
                    }), i
                },
                C = Object(u.a)(Object(s.a)(function(e) {
                    return !!e.body || !N(e, "startInteraction")
                }), Object(s.a)(h), j, d.a),
                m = function shouldGroupMessages(e, t) {
                    return y(e) && y(t) || Object(l.a)(e.authorType, t.authorType) && Object(l.a)(e.authorId, t.authorId) && a.a.isTimeBefore(t.attributes.generatedAt || t.createdAt, a.a.addTime(e.attributes.generatedAt || e.createdAt, 2, "hour"))
                },
                I = function groupMessages(e) {
                    return Object(f.a)(m, e)
                },
                T = function isEmptyMessage(e) {
                    return !e || !e.replace(/<\/?p[^>]*>/g, "").trim()
                },
                y = function isMeetingScheduleMessage(e) {
                    var t = e.attributes,
                        n = t.offerSchedule,
                        r = t.presentSchedule,
                        a = t.scheduleMeetingFlow,
                        c = t.appointmentInfo;
                    return !Object(b.a)(n) || !Object(b.a)(r) || !Object(b.a)(a) || !Object(b.a)(c)
                },
                S = function isSMSNumberRequest(e) {
                    return e.contentType === E.c.SMS_NUMBER_REQUESTED
                },
                R = function isSMSNumberSuccess(e) {
                    return e.contentType === E.c.SMS_NUMBER_SUCCESS
                },
                A = function getMessageAttribute(e, t) {
                    return Object(O.a)(null, ["attributes", t], e)
                },
                N = function hasMessageAttribute(e, t) {
                    return !!A(e, t)
                },
                x = function isEndUserMessage(e) {
                    return !!e && (e.authorType === E.b.LEAD || e.authorType === E.b.END_USER)
                },
                w = Object(p.a)(function(e) {
                    return e.authorType === E.b.USER && !N(e, "isBot")
                }),
                M = function isRateConversationCTAMessage(e) {
                    return "BOT_CONVERSATION_RATING" === e.contentType && e.authorType === E.b.USER && N(e, "ratingPrompt")
                },
                L = function isConversationRatingMessage(e) {
                    return "BOT_CONVERSATION_RATING" === e.contentType && N(e, "conversationRating")
                },
                k = function isPermaCloseMessage(e) {
                    return N(e, "permacloseMessage")
                },
                H = function truncateMessageText(e) {
                    return Object(v.a)(100, e)[0].trim()
                },
                D = function truncateMessagePreview(e, t) {
                    var n = A(e, "preview");
                    if (n && n.length > t) {
                        var a = H(n);
                        return Object(r.a)(Object(r.a)({}, e), {}, {
                            attributes: Object(r.a)(Object(r.a)({}, e.attributes), {}, {
                                preview: "".concat(a, "...")
                            })
                        })
                    }
                    return e
                },
                U = function getMessagePreviewText(e) {
                    return "BOT_CONVERSATION_RATING" === e.contentType ? H(A(e, "ratingPrompt").ratingPromptMessage) : A(e, "preview")
                },
                G = function isButtonsOnlyMessage(e) {
                    return !!e && !x(e) && !!A(e, "isButtonOnly") && !Object(g.m)(A(e, "buttons"))
                },
                V = function messageContainsButtons(e) {
                    return !!e && !x(e) && !Object(g.m)(A(e, "buttons"))
                }
        },
        g6eD: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return a
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "h", function() {
                return i
            }), n.d(t, "g", function() {
                return o
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "j", function() {
                return s
            }), n.d(t, "k", function() {
                return d
            }), n.d(t, "l", function() {
                return l
            }), n.d(t, "m", function() {
                return f
            }), n.d(t, "n", function() {
                return b
            }), n.d(t, "c", function() {
                return O
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return v
            }), n.d(t, "d", function() {
                return E
            });
            var r = n("Cpup"),
                a = function toggleChat(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CHAT",
                        payload: e
                    })
                },
                c = function toggleController(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CONTROLLER",
                        payload: e
                    })
                },
                i = function toggleChatTakeover(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CHAT_TAKEOVER",
                        payload: e
                    })
                },
                o = function toggleChatOpen() {
                    return Object(r.a)({
                        type: "OPEN_CHAT"
                    })
                },
                u = function toggleChatClosed() {
                    return Object(r.a)({
                        type: "CLOSE_CHAT"
                    })
                },
                s = function toggleControllerClosed() {
                    return Object(r.a)({
                        type: "HIDE_CONTROLLER"
                    })
                },
                d = function toggleControllerOpen() {
                    return Object(r.a)({
                        type: "SHOW_CONTROLLER"
                    })
                },
                l = function toggleConversationHistory(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CONVERSATION_HISTORY",
                        payload: e
                    })
                },
                f = function toggleInitComplete(e) {
                    return Object(r.a)({
                        type: "INIT_COMPLETE",
                        payload: e
                    })
                },
                b = function toggleMatchedWidgetTargeting(e) {
                    return Object(r.a)({
                        type: "TOGGLE_WIDGET_TARGETING_MATCHED",
                        payload: e
                    })
                },
                O = function setCloseChatRedirectUrl(e) {
                    return Object(r.a)({
                        type: "SET_CLOSE_CHAT_REDIRECT_URL",
                        payload: e
                    })
                },
                p = function autoScrollChatToBottom(e) {
                    return Object(r.a)({
                        type: "AUTO_SCROLL_CHAT_TO_BOTTOM",
                        payload: e
                    })
                },
                v = function forceHideIcon(e) {
                    return Object(r.a)({
                        type: "FORCE_HIDE_ICON",
                        payload: e
                    })
                },
                E = function toggleCanResizeController(e) {
                    return Object(r.a)({
                        type: "TOGGLE_CAN_RESIZE_CONTROLLER",
                        payload: e
                    })
                }
        },
        jbOz: function(e, t, n) {
            "use strict";
            var r = n("nfbA"),
                a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("uIJS"),
                u = n("LvsC"),
                s = n("qytN"),
                d = n("7jL2"),
                l = n("vEWT"),
                f = n("QtlZ"),
                b = n("vYqp"),
                O = n("hm8b"),
                p = n("LVcX"),
                v = n("YvIt"),
                E = n("ADGC"),
                g = n("0lfv"),
                j = n("Nlet"),
                _ = n("7BJg"),
                h = n("t8ds");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(d.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(d.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(s.a)(this, t)
                }
            }
            var C = 100,
                m = 2e3,
                I = Object(b.a)(O.a),
                T = function(e) {
                    Object(u.a)(UsageMetricEventBuffer, e);
                    var t = _createSuper2(UsageMetricEventBuffer);

                    function UsageMetricEventBuffer() {
                        var e;
                        return Object(o.a)(this, UsageMetricEventBuffer), (e = t.call(this, m))._publishBuffer = Object(i.a)(c.a.mark(function _callee() {
                            var t;
                            return c.a.wrap(function _callee$(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e._events.length || Promise.reject(void 0), n.prev = 1, n.next = 4, e._hydrateEvents();
                                    case 4:
                                        return t = n.sent, n.next = 7, Object(l.b)(t);
                                    case 7:
                                        e._resetBuffer(), n.next = 14;
                                        break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(1), e._events.length >= C && e._resetBuffer(), Object(g.w)(["Failed to send bulk metrics", n.t0]);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }, _callee, null, [
                                [1, 10]
                            ])
                        })), e._hydrateEvents = Object(i.a)(c.a.mark(function _callee2() {
                            var t, n, a, i, o, u, s, d, l, b;
                            return c.a.wrap(function _callee2$(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return c.next = 2, h.b.get(v.b);
                                    case 2:
                                        if (c.t0 = c.sent, c.t0) {
                                            c.next = 5;
                                            break
                                        }
                                        c.t0 = {};
                                    case 5:
                                        return t = c.t0, n = t.data, a = Object(f.b)(), i = a.session, o = a.embed, u = a.metrics, s = Object(p.a)("", ["geo", "country"], i), d = Object(j.b)(), l = u.loadCostInBytes, b = e._events.map(function(e) {
                                            var t = I(Object(r.a)(Object(r.a)({}, e.attributes), {}, {
                                                isMobile: Object(E.a)()
                                            }));
                                            return "loaded" === e.eventName && (t.loadSizeInBytes = l), I({
                                                eventName: "[V2] - ".concat(e.eventName),
                                                orgId: o.orgId,
                                                embedId: o.id,
                                                sessionId: n,
                                                instanceId: i.instanceId,
                                                attributes: t
                                            })
                                        }), c.abrupt("return", {
                                            id: Object(g.v)(),
                                            events: b,
                                            timestamp: Date.now(),
                                            context: {
                                                country: s,
                                                locale: d.locale,
                                                timezone: d.timezone,
                                                url: d.url
                                            }
                                        });
                                    case 13:
                                    case "end":
                                        return c.stop()
                                }
                            }, _callee2)
                        })), e
                    }
                    return UsageMetricEventBuffer
                }(_.a);
            t.a = new T
        },
        "pu/X": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = {
                MESSAGE: {
                    TIMEOUT: "Sending message timed out",
                    SEND_FAILURE: "Failed to send message",
                    FETCH_MESSAGE_OR_ACTIVE_CONVO: "Failed to fetch messages or active conversation",
                    FETCH_MESSAGES: "Failed to fetch messages"
                },
                EVENT_SEND: {
                    PAGE: "Failed to send page event"
                },
                LOG: {
                    SEND_FAILURE: "Failed to send logs"
                }
            }
        },
        pvgo: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return j
            }), n.d(t, "a", function() {
                return _
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "c", function() {
                return C
            });
            var r = n("nfbA"),
                a = n("mj2O"),
                c = n.n(a),
                i = n("7SM1"),
                o = n("vEWT"),
                u = n("QtlZ"),
                s = n("Hvhg"),
                d = n("+f1A"),
                l = n("ws1h"),
                f = n("2XY6"),
                b = n("NFvl"),
                O = n("SWQ0"),
                p = n("0lfv"),
                v = n("wNJw"),
                E = n("4c+F"),
                g = n("CYoe"),
                j = function stashLoadRequestResponseSize(e) {
                    if (!Object(u.b)().view.initComplete) {
                        var t = Object(E.b)(e);
                        u.a.dispatch(Object(g.d)({
                            size: t
                        }))
                    }
                },
                _ = function fireWidgetInitEvent(e, t) {
                    var n = Object(u.b)(),
                        r = Object(s.e)(n),
                        a = Object(d.p)(n),
                        c = Object(d.n)(n),
                        i = {
                            eventName: "[V2] - init",
                            embedId: r,
                            sessionId: a,
                            instanceId: t,
                            context: {
                                url: Object(b.a)(["page", "url"], c),
                                hostname: Object(b.a)(["page", "hostname"], c),
                                timezone: c.timezone,
                                userAgent: c.userAgent
                            }
                        };
                    e && (i.context.timeToInit = Date.now() - parseInt(e)), u.a.dispatch(Object(g.b)(Date.now())), Object(o.c)(i).catch(function(e) {
                        Object(p.n)({
                            type: "warn",
                            data: ["Failed to send init event", e]
                        })
                    })
                },
                h = function() {
                    var e = Object(i.a)(c.a.mark(function _callee() {
                        var e;
                        return c.a.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, C();
                                case 2:
                                    e = t.sent, Object(v.a)(O.b.READY, e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee)
                    }));
                    return function fireWidgetReadyEvent() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(i.a)(c.a.mark(function _callee2() {
                        var e, t;
                        return c.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return e = Object(u.b)(), n.t0 = Object(f.f)(e), n.next = 4, Object(l.b)();
                                case 4:
                                    return n.t1 = n.sent, n.next = 7, Object(l.a)();
                                case 7:
                                    return n.t2 = n.sent, n.t3 = Object(f.c)(e), n.t4 = Object(f.c)(e), t = {
                                        widgetVisible: n.t0,
                                        teamAvailability: n.t1,
                                        isOnline: n.t2,
                                        chatOpen: n.t3,
                                        sidebarOpen: n.t4
                                    }, n.abrupt("return", Object(r.a)({
                                        data: Object(r.a)({}, t)
                                    }, t));
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2)
                    }));
                    return function getWidgetReadyPayload() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        qwiD: function(e, t, n) {
            "use strict";
            n.d(t, "q", function() {
                return a
            }), n.d(t, "r", function() {
                return c
            }), n.d(t, "v", function() {
                return i
            }), n.d(t, "i", function() {
                return o
            }), n.d(t, "f", function() {
                return u
            }), n.d(t, "h", function() {
                return s
            }), n.d(t, "s", function() {
                return d
            }), n.d(t, "u", function() {
                return l
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "w", function() {
                return b
            }), n.d(t, "k", function() {
                return O
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "o", function() {
                return E
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "y", function() {
                return j
            }), n.d(t, "m", function() {
                return _
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "p", function() {
                return m
            }), n.d(t, "c", function() {
                return I
            }), n.d(t, "t", function() {
                return T
            }), n.d(t, "x", function() {
                return y
            }), n.d(t, "j", function() {
                return S
            }), n.d(t, "e", function() {
                return R
            });
            var r = n("Cpup"),
                a = function receiveGeo(e) {
                    return Object(r.a)({
                        type: "RECEIVE_GEO",
                        payload: e
                    })
                },
                c = function receiveIntegrationCookies(e) {
                    return Object(r.a)({
                        type: "RECEIVE_INTEGRATION_COOKIES",
                        payload: e
                    })
                },
                i = function receiveVisitInformation(e) {
                    return Object(r.a)({
                        type: "RECEIVE_VISIT_INFO",
                        payload: e
                    })
                },
                o = function receiveContext(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CONTEXT",
                        payload: e
                    })
                },
                u = function receiveAccessToken(e) {
                    return Object(r.a)({
                        type: "RECEIVE_ACCESS_TOKEN",
                        payload: e
                    })
                },
                s = function receiveChatSocketAuth(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CHAT_SOCKET_AUTH",
                        payload: e
                    })
                },
                d = function receivePresenceSocketAuth(e) {
                    return Object(r.a)({
                        type: "RECEIVE_PRESENCE_SOCKET_AUTH",
                        payload: e
                    })
                },
                l = function receiveSocket(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SOCKET",
                        payload: e
                    })
                },
                f = function receiveChannel(e) {
                    return Object(r.a)({
                        type: "RECEIVE_CHANNEL",
                        payload: e
                    })
                },
                b = function rejoinChannel(e) {
                    return Object(r.a)({
                        type: "REJOIN_CHANNEL",
                        payload: e
                    })
                },
                O = function receiveEndUser(e) {
                    return Object(r.a)({
                        type: "RECEIVE_END_USER",
                        payload: e
                    })
                },
                p = function receiveExternalIdentity(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_IDENTITY",
                        payload: e
                    })
                },
                v = function receiveExternalEmail(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_EMAIL",
                        payload: e
                    })
                },
                E = function receiveExternalJwt(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_JWT",
                        payload: e
                    })
                },
                g = function clearExternalJwt() {
                    return E(null)
                },
                j = function waitForExternalJwt() {
                    return Object(r.a)({
                        type: "WAIT_FOR_EXTERNAL_JWT"
                    })
                },
                _ = function receiveExternalId(e) {
                    return Object(r.a)({
                        type: "RECEIVE_EXTERNAL_ID",
                        payload: e
                    })
                },
                h = function identifyLead(e) {
                    return Object(r.a)({
                        type: "IDENTIFY_LEAD",
                        payload: e
                    })
                },
                C = function clearExternalId() {
                    return _(null)
                },
                m = function receiveGDPR(e) {
                    return Object(r.a)({
                        type: "RECEIVE_GDPR",
                        payload: e
                    })
                },
                I = function declinedGDPR(e) {
                    return Object(r.a)({
                        type: "DECLINED_GDPR",
                        payload: e
                    })
                },
                T = function receiveSession(e) {
                    return Object(r.a)({
                        type: "RECEIVE_SESSION",
                        payload: e
                    })
                },
                y = function updateInstanceId(e) {
                    return Object(r.a)({
                        type: "UPDATE_INSTANCE_ID",
                        payload: e
                    })
                },
                S = function receiveCookieDomain(e) {
                    return Object(r.a)({
                        type: "RECEIVE_COOKIE_DOMAIN",
                        payload: e
                    })
                },
                R = function pushToChannel(e, t, n, a) {
                    return Object(r.a)({
                        type: "PUSH_TO_CHANNEL",
                        meta: {
                            clusterName: e,
                            channelName: t,
                            eventName: n
                        },
                        payload: a
                    })
                }
        },
        r0JT: function(e, t, n) {
            "use strict";
            var r = n("uIJS"),
                a = n("LvsC"),
                c = n("qytN"),
                i = n("7jL2"),
                o = n("vEWT"),
                u = n("0lfv"),
                s = n("7BJg");

            function _createSuper2(e) {
                return function() {
                    var t, n = Object(i.a)(e);
                    if (function isNativeReflectConstruct() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = Object(i.a)(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return Object(c.a)(this, t)
                }
            }
            var d = 5e3,
                l = function(e) {
                    Object(a.a)(MetricEventBuffer, e);
                    var t = _createSuper2(MetricEventBuffer);

                    function MetricEventBuffer() {
                        var e;
                        return Object(r.a)(this, MetricEventBuffer), (e = t.call(this, d))._publishBuffer = function() {
                            e._events.length && (Object(o.a)(e._events).catch(function(e) {
                                Object(u.n)({
                                    type: "warn",
                                    data: ["Bulk Metrics Failure"]
                                })
                            }), e._resetBuffer())
                        }, e
                    }
                    return MetricEventBuffer
                }(s.a);
            t.a = new l
        },
        ws1h: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return O
            }), n.d(t, "b", function() {
                return p
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("SHZQ"),
                o = n("QtlZ"),
                u = n("Hvhg"),
                s = n("OA1u"),
                d = n("LVcX"),
                l = n("0lfv"),
                f = n("moLG"),
                b = Object(f.a)(Object(c.a)(a.a.mark(function _callee() {
                    var e, t, n;
                    return a.a.wrap(function _callee$(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return e = Object(u.e)(Object(o.b)()), r.next = 3, Object(i.c)(e);
                            case 3:
                                return t = r.sent, n = t.data, r.abrupt("return", n);
                            case 6:
                            case "end":
                                return r.stop()
                        }
                    }, _callee)
                })), 5e3),
                O = function() {
                    var e = Object(c.a)(a.a.mark(function _callee2() {
                        var e, t;
                        return a.a.wrap(function _callee2$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, n.next = 3, b();
                                case 3:
                                    return e = n.sent, t = Object(d.a)(!1, ["driftOnline"], e), o.a.dispatch(Object(s.e)(t)), n.abrupt("return", t);
                                case 9:
                                    return n.prev = 9, n.t0 = n.catch(0), Object(l.w)(["Failed to fetch online status -  ".concat(n.t0.message), n.t0]), n.abrupt("return", !1);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee2, null, [
                            [0, 9]
                        ])
                    }));
                    return function getIsOnline() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = Object(c.a)(a.a.mark(function _callee3() {
                        var e, t, n, r;
                        return a.a.wrap(function _callee3$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, a.next = 3, b();
                                case 3:
                                    return e = a.sent, t = e.availableTeams || [], n = Object(d.a)([], ["configuration", "teams"], Object(o.b)().embed), r = {}, n.forEach(function(e) {
                                        var n = t.includes(e.id);
                                        r[e.id] = {
                                            isOnline: n
                                        }
                                    }), a.abrupt("return", r);
                                case 11:
                                    return a.prev = 11, a.t0 = a.catch(0), Object(l.w)(["Failed to fetch team availability", a.t0]), a.abrupt("return", {});
                                case 15:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee3, null, [
                            [0, 11]
                        ])
                    }));
                    return function getTeamAvailability() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        z8Kx: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return C
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "c", function() {
                return I
            }), n.d(t, "b", function() {
                return T
            });
            var r = n("mj2O"),
                a = n.n(r),
                c = n("7SM1"),
                i = n("QtlZ"),
                o = n("qwiD"),
                u = n("LVcX"),
                s = n("LelF"),
                d = n("8saY"),
                l = n("VYE+"),
                f = n("qeWU"),
                b = function getExternalId() {
                    var e = Object(i.b)().session;
                    return Object(u.a)(null, ["externalId"], e)
                },
                O = function() {
                    var e = Object(c.a)(a.a.mark(function _callee() {
                        var e, t;
                        return a.a.wrap(function _callee$(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, Object(l.d)(s.f);
                                case 2:
                                    return e = n.sent, n.next = 5, Object(l.d)(s.e);
                                case 5:
                                    if (t = n.sent, !e) {
                                        n.next = 9;
                                        break
                                    }
                                    return Object(l.g)(s.e, e), n.abrupt("return", e);
                                case 9:
                                    return n.abrupt("return", t || null);
                                case 10:
                                case "end":
                                    return n.stop()
                            }
                        }, _callee)
                    }));
                    return function getExternalIdFromCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function setExternalIdCookie(e) {
                    Object(l.g)(s.e, e)
                },
                v = function() {
                    var e = Object(c.a)(a.a.mark(function _callee2() {
                        return a.a.wrap(function _callee2$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i.a.dispatch(o.a()), e.next = 3, Object(l.a)(s.e);
                                case 3:
                                    if (!Object(l.c)()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, Object(l.a)(s.e, {
                                        domain: ""
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee2)
                    }));
                    return function clearExternalId() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function getUserJwt() {
                    var e = Object(i.b)().session;
                    return Object(u.a)(void 0, ["endUser", "userJwt"], e)
                },
                g = function() {
                    var e = Object(c.a)(a.a.mark(function _callee3() {
                        var e;
                        return a.a.wrap(function _callee3$(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(l.d)(s.g);
                                case 2:
                                    if (!(e = t.sent)) {
                                        t.next = 10;
                                        break
                                    }
                                    if (!Object(f.b)(e)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7, j();
                                case 7:
                                    t.next = 10;
                                    break;
                                case 9:
                                    return t.abrupt("return", e);
                                case 10:
                                    return t.abrupt("return", void 0);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee3)
                    }));
                    return function getUserJwtFromCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(c.a)(a.a.mark(function _callee4() {
                        return a.a.wrap(function _callee4$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(l.a)(s.g);
                                case 2:
                                    if (!Object(l.c)()) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, Object(l.a)(s.g, {
                                        domain: ""
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee4)
                    }));
                    return function clearUserJwtCookie() {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function setUserJwtCookie(e) {
                    Object(l.h)(s.g, e)
                },
                h = function() {
                    var e = Object(c.a)(a.a.mark(function _callee5() {
                        return a.a.wrap(function _callee5$(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i.a.dispatch(o.b()), e.next = 3, j();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee5)
                    }));
                    return function clearUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function getExternalEmail() {
                    var e = Object(i.b)().session;
                    return Object(u.a)("", ["endUser", "externalEmail"], e)
                },
                m = function() {
                    var e = Object(c.a)(a.a.mark(function _callee6() {
                        var e, t, n, r, c;
                        return a.a.wrap(function _callee6$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(b() && !E())) {
                                        a.next = 7;
                                        break
                                    }
                                    return e = b(), a.next = 5, g();
                                case 5:
                                    t = a.sent, Object(f.c)(t, e) ? v() : t && h();
                                case 7:
                                    if (n = null, r = null, a.t0 = E(), a.t0) {
                                        a.next = 14;
                                        break
                                    }
                                    return a.next = 13, g();
                                case 13:
                                    a.t0 = a.sent;
                                case 14:
                                    if ((c = a.t0) && !Object(f.b)(c) && (r = c), !r) {
                                        a.next = 21;
                                        break
                                    }
                                    _(r), n = Object(f.a)(r), a.next = 28;
                                    break;
                                case 21:
                                    if (a.t1 = b(), a.t1) {
                                        a.next = 26;
                                        break
                                    }
                                    return a.next = 25, O();
                                case 25:
                                    a.t1 = a.sent;
                                case 26:
                                    (n = a.t1) && (p(n), h());
                                case 28:
                                    return a.abrupt("return", {
                                        externalId: n,
                                        userJwt: r
                                    });
                                case 29:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee6)
                    }));
                    return function resolveExternalIdAndUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = Object(c.a)(a.a.mark(function _callee7() {
                        var e, t, n, r, c, o, s;
                        return a.a.wrap(function _callee7$(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!T()) {
                                        a.next = 10;
                                        break
                                    }
                                    return e = Object(i.b)(), t = e.session, n = void 0 === t ? {} : t, r = Object(u.a)(!1, ["endUser", "waitForUserJwt"], n), a.next = 6, m();
                                case 6:
                                    return c = a.sent, o = c.externalId, s = c.userJwt, a.abrupt("return", r && !s && !!o);
                                case 10:
                                    return a.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return a.stop()
                            }
                        }, _callee7)
                    }));
                    return function isWaitingForUserJwt() {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function isSignedIdentityRequired(e) {
                    var t = Object(i.b)().embed,
                        n = void 0 === t ? {} : t;
                    return e || (e = Object(u.a)(d.c.DISABLED, ["configuration", "theme", "signedIdentityRequiredStatus"], n)), e === d.c.REQUIRED
                }
        },
        "zX3+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return b
            });
            var r = n("mssF"),
                a = n("QtlZ"),
                c = n("+/Je"),
                i = n("SsZN"),
                o = n("bYXQ"),
                u = n("pu/X"),
                s = n("1tbh"),
                d = n("LVcX"),
                l = n("DboL"),
                f = n("0lfv"),
                b = function sendMessage(e) {
                    var t = Object(a.b)().conversations,
                        n = void 0 === t ? {} : t,
                        r = Object(d.a)(c.a, ["activeConversation"], n),
                        i = Object(o.e)(r);
                    return i ? O(e) : Object(o.d)(e.conversationId) || !e.conversationId ? v(e) : i || Object(o.a)(e) ? p(e) : p(e, !1)
                },
                O = function sendMessageForPreRenderedConversation(e) {
                    var t = Object(a.b)().conversations,
                        n = void 0 === t ? {} : t,
                        i = Object(d.a)([], ["messages", c.b], n),
                        o = Object(l.a)(i).slice(0, -1);
                    return Object(r.c)(o, e).then(function(e) {
                        return g(e.data, !1), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                p = function sendMessageForExistingConversation(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return Object(r.a)(e).then(function(e) {
                        return g(e.data, t), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                v = function sendMessageForNewConversation(e) {
                    return Object(r.b)(e).then(function(e) {
                        return g(e.data, !1), e
                    }).catch(function(t) {
                        E(e, t)
                    })
                },
                E = function onMessageFailed(e, t) {
                    var n = Object(d.a)(null, ["response", "status"], t),
                        r = Object(d.a)(null, ["code"], t);
                    return r && "ECONNABORTED" === r ? (Object(s.a)({
                        message: e,
                        timedOut: !0
                    }), Object(f.f)(new Error(u.a.MESSAGE.TIMEOUT), t, !0)) : n && 403 === n ? void 0 : Object(f.n)({
                        type: "error",
                        data: [u.a.MESSAGE.SEND_FAILURE, t],
                        internal: !0
                    })
                },
                g = function onMessageSent(e, t) {
                    t || Object(i.g)(e), Object(i.l)(e)
                }
        }
    }
]);