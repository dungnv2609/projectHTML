
var mockup = "https://timeline.line.me/social-plugin-widget/share?url=http%3A%2F%2Fwww.takeshinakamura.jp%2Felection%2F&amp;buttonType=share-b&amp;lang=en&amp;type=share&amp;id=0&amp;origin=http://www.takeshinakamura.jp%2Felection%2F%23view-4&amp;title=Nakamura";

! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var a = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }
    var i = {};
    t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var i = "&?" + t + "=([^&]+)",
            n = e.match(i);
        return n && n[1]
    }
    var r = i(1),
        l = n(r),
        d = i(4),
        o = n(d),
        s = i(8),
        u = n(s),
        c = i(10),
        f = n(c),
        _ = i(11),
        h = n(_),
        m = i(12),
        p = n(m),
        k = i(13),
        b = n(k),
        g = i(14),
        w = n(g),
        I = function() {
            var e = mockup.match(/\?(.+)$/)[1],
                t = a(e, "lang");
            switch (t = t && t.toLowerCase()) {
                case "en":
                    window.lineIt.messages = f.default;
                    break;
                case "id":
                    window.lineIt.messages = h.default;
                    break;
                case "ja":
                    window.lineIt.messages = p.default;
                    break;
                case "th":
                    window.lineIt.messages = b.default;
                    break;
                case "zh_tw":
                case "zh-tw":
                case "zh_hant":
                case "zh-hant":
                    window.lineIt.messages = w.default;
                    break;
                default:
                    window.lineIt.messages = f.default
            }
            var i = a(e, "type");
            switch (i = decodeURIComponent(i.split("-")[0])) {
                case "share":
                    (new l.default).attach();
                    break;
                case "friend":
                    (new o.default).attach();
                    break;
                case "like":
                    (new u.default).attach()
            }
        },
        v = document.readyState;
    "interactive" === v || "complete" === v ? I() : document.addEventListener("DOMContentLoaded", I, !1)
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        r = i(2),
        l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        d = i(3),
        o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t
        }(d),
        s = function() {
            function e() {
                n(this, e), this.elem = {
                    wrap: document.getElementsByClassName("btnWrap")[0],
                    button: document.getElementsByClassName("t40")[0] || document.getElementsByClassName("icon")[0]
                }, this.params = this.getParsedParam(mockup.match(/\?(.+)$/)[1])
            }
            return a(e, [{
                key: "attach",
                value: function() {
                    l.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin), this.bindEvent()
                }
            }, {
                key: "getParsedParam",
                value: function(e) {
                    var t = e.match(/\&?url\=([^&]+)/),
                        i = e.match(/\&?origin\=([^&]+)/)[1],
                        n = e.match(/\&?title\=([^&]+)/),
                        a = e.match(/\&?lang\=([^&]+)/),
                        r = e.match(/\&?id\=(\d+)/),
                        l = function() {
                            return decodeURIComponent(i).match(/(https?\:\/\/[^\/]+)\/?/)[1]
                        }(),
                        d = e.match(/\&?buttonType\=([^&]+)/);
                    return t = t && t[1], n = n && n[1], n = n || "", a = a && a[1], r = r && parseInt(r[1], 10), d = d && d[1], {
                        url: t || i,
                        origin: i,
                        title: n,
                        lang: a,
                        id: r,
                        targetOrigin: l,
                        buttonType: d
                    }
                }
            }, {
                key: "bindEvent",
                value: function() {
                    var e = this;
                    this.elem.button.addEventListener("click", function() {
                        o.sendShareClickLog(e.params.buttonType, e.params.url);
                        var t = "https://timeline.line.me/social-plugin/share?url=" + e.params.url;
                        l.default.openPopup(t)
                    }, !1)
                }
            }]), e
        }();
    t.default = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(3),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t
        }(n);
    t.default = {
        addClass: function(e, t) {
            e.className.indexOf(t) == -1 && (e.className += " " + t)
        },
        removeClass: function(e, t) {
            var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(i, " ").trim()
        },
        updateButtonSize: function(e, t, i, n) {
            var a = {
                type: "resize",
                width: Math.floor(e) + 1,
                height: Math.ceil(t),
                buttonId: i
            };
            // window.parent.postMessage(JSON.stringify(a), n)
        },
        refreshButtons: function(e, t) {
            var i = {
                type: "refresh",
                buttonId: null == e ? -1 : e
            };
            // window.parent.postMessage(JSON.stringify(i), t)
        },
        convertCount: function(e) {
            return e >= 99e6 ? "99M" : e >= 1e6 ? Math.floor(e / 1e6) + "M" : e >= 1e3 ? Math.floor(e / 1e3) + "K" : e > 0 ? e : ""
        },
        enableButton: function(e) {
            e.disabled = !1
        },
        disableButton: function(e) {
            e.disabled = "disabled"
        },
        openPopup: function(e) {
            var t = 0,
                i = 0;
            void 0 !== window.screenX && window.screenX >= 0 && window.screenY >= 0 ? (t = (window.screen.availWidth - 503) / 2, i = (window.screen.availHeight - 510) / 2) : void 0 !== window.screenLeft && window.screenLeft >= 0 && window.screenTop >= 0 && (t = (window.screen.availWidth - 503) / 2, i = (window.screen.availHeight - 510) / 2), window.open(e, null, "width=503,height=510,left=" + t + ",top=" + i + ",resizable=yes,scrollbars=no,chrome=yes,centerscreen=yes")
        },
        setLoginStatus: function(e) {
            window.lineIt.login = e, a.changeLoginStatus(e)
        }
    }
}, function(e, t) {
    "use strict";

    function i(e, t) {
        _trm("send", "event", e, "share-click", t)
    }

    function n(e) {
        _trm("send", "event", "friend", "friend", e)
    }

    function a(e, t, i, n) {
        var a = "like";
        t && 1 == i && (a += "+share"), _trm("send", "event", d(t, n), a, e)
    }

    function r(e, t, i) {
        _trm("send", "event", d(t, i), "like-cancel", e)
    }

    function l(e, t) {
        _trm("send", "event", d(e, t), "friend", t)
    }

    function d(e, t) {
        var i = "like";
        return e && (i += "+share"), t && (i += "+friend"), i
    }

    function o(e) {
        _trm("set", "attributes", {
            attr0: e ? "1" : "0"
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sendShareClickLog = i, t.sendFriendClickLog = n, t.sendLikeClickLog = a, t.sendLikeCancelClickLog = r, t.sendLikeFriendClickLog = l, t.changeLoginStatus = o
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        l = i(5),
        d = n(l),
        o = i(7),
        s = n(o),
        u = i(2),
        c = n(u),
        f = i(3),
        _ = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t
        }(f),
        h = function() {
            function e() {
                a(this, e), this.elem = {
                    wrap: document.getElementsByClassName("btnWrap")[0],
                    button: document.getElementsByClassName("btn")[0],
                    buttonTextBox: document.getElementsByClassName("lang")[0],
                    article: document.getElementsByClassName("article")[0],
                    counter: document.getElementsByClassName("num")[0],
                    home: document.querySelector(".article a")
                }, this.relogin = !1, this.params = this.getParsedParam(mockup.match(/\?(.+)$/)[1]), this.addFriendService = new d.default(this.params.lineId)
            }
            return r(e, [{
                key: "attach",
                value: function() {
                    c.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin), this.bindEvent()
                }
            }, {
                key: "getParsedParam",
                value: function(e) {
                    var t = e.match(/\&?origin\=([^&]+)/)[1],
                        i = e.match(/\&?lang\=([^&]+)/),
                        n = e.match(/\&?env\=([^&]+)/),
                        a = e.match(/\&?id\=(\d+)/),
                        r = function() {
                            return decodeURIComponent(t).match(/(https?\:\/\/[^\/]+)\/?/)[1]
                        }(),
                        l = e.match(/\&?lineId\=([^&]+)/),
                        d = e.match(/\&?count\=([^&]+)/),
                        o = e.match(/\&?home\=([^&]+)/);
                    return i = i && i[1], a = a && parseInt(a[1], 10), n = n && n[1], l = l && l[1], d = d && d[1], o = o && o[1], {
                        origin: t,
                        lang: i,
                        id: a,
                        env: n,
                        targetOrigin: r,
                        lineId: l,
                        useCount: "true" == d,
                        useHome: "true" == o
                    }
                }
            }, {
                key: "bindEvent",
                value: function() {
                    var e = this;
                    this.elem.button.addEventListener("click", function() {
                        _.sendFriendClickLog(e.params.lineId), window.lineIt.login ? e.addFriend() : c.default.openPopup(s.default.LOGIN_POPUP_URL)
                    }), window.lineIt.loginSuccessCallback = function() {
                        e.relogin ? c.default.refreshButtons(null, e.params.targetOrigin) : (c.default.setLoginStatus(!0), e.addFriend(), c.default.refreshButtons(e.params.id, e.params.targetOrigin))
                    }
                }
            }, {
                key: "addFriend",
                value: function() {
                    var e = this;
                    this.disableFriendButton(), this.addFriendService.requestFriendState(function() {
                        confirm(window.lineIt.messages.lineit_addfriend_confirm_alert) ? e.addFriendService.requestAddFriend(s.default.ADD_FRIEND_SEND_TYPE.FRIEND, function() {
                            e.increaseCount(), e.updateAddFriendUI(), e.updateButtonSize(window.lineIt.friend.friendCount)
                        }, function() {
                            c.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI()
                        }, function(t) {
                            e.initAddFriendUI(), alert(t)
                        }, function() {
                            e.enableFriendButton()
                        }) : e.initAddFriendUI()
                    }, function() {
                        e.updateAddFriendUI(), alert(window.lineIt.messages.lineit_addfriend_alert_already)
                    }, function() {
                        c.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI()
                    }, function(t) {
                        e.initAddFriendUI(), t.status == s.default.FRIEND_STATUS.DELETED_OA && e.updateDeleteOAErrorUI(), alert(t.message)
                    }, function() {
                        e.enableFriendButton()
                    })
                }
            }, {
                key: "updateAddFriendUI",
                value: function() {
                    c.default.addClass(this.elem.button, "already"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_addfriend_done, this.elem.button.title = window.lineIt.messages.lineit_addfriend_tooltip_already, this.enableFriendButton()
                }
            }, {
                key: "updateAuthErrorUI",
                value: function() {
                    c.default.removeClass(this.elem.button, "already"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_login, this.elem.button.title = "", c.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin), this.enableFriendButton()
                }
            }, {
                key: "updateDeleteOAErrorUI",
                value: function() {
                    c.default.removeClass(this.elem.button, "on"), window.console.warn("This account has been deleted or an invalid LINE ID has been entered. Please check your account or LINE ID.")
                }
            }, {
                key: "initAddFriendUI",
                value: function() {
                    c.default.removeClass(this.elem.button, "already"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_addfriend, this.elem.button.title = window.lineIt.messages.lineit_addfriend_tooltip_available, this.enableFriendButton()
                }
            }, {
                key: "increaseCount",
                value: function() {
                    var e = ++window.lineIt.friend.friendCount;
                    this.elem.counter && (this.elem.counter.innerText = c.default.convertCount(e), this.elem.counter.title = e), this.params.useCount && 1 == e && (c.default.addClass(this.elem.button, "on"), c.default.addClass(this.elem.article, "count"))
                }
            }, {
                key: "enableFriendButton",
                value: function() {
                    c.default.enableButton(this.elem.button)
                }
            }, {
                key: "disableFriendButton",
                value: function() {
                    c.default.disableButton(this.elem.button)
                }
            }, {
                key: "updateButtonSize",
                value: function(e) {
                    1 == e && Number.isInteger(Math.log10(e)) && c.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin)
                }
            }]), e
        }();
    t.default = h
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        l = i(6),
        d = n(l),
        o = i(7),
        s = n(o),
        u = function() {
            function e(t) {
                a(this, e), this.lineId = t
            }
            return r(e, [{
                key: "requestFriendState",
                value: function(e, t, i, n, a) {
                    var r = this;
                    d.default.send({
                        method: "POST",
                        url: "/social-plugin-widget/api/friend/get",
                        data: {
                            lineId: this.lineId
                        },
                        success: function(l) {
                            var d = window.lineIt.messages;
                            switch (l.code) {
                                case 0:
                                    if (window.lineIt.friend = l.result, d = r.getReplaceToFriendName(window.lineIt.messages, window.lineIt.friend.friendName), l.result.invalidOa) {
                                        n(r.makeImpossibleState(s.default.FRIEND_STATUS.INVALID_OA, d.lineit_addfriend_alert_sorry));
                                        break
                                    }
                                    var o = window.lineIt.friend.userFriendStatus.contactStatus;
                                    if (o.hidden) n(r.makeImpossibleState(s.default.FRIEND_STATUS.HIDDEN, d.lineit_addfriend_alert_hide));
                                    else switch (o.status) {
                                        case s.default.FRIEND_STATUS.UNSPECIFIED:
                                        case s.default.FRIEND_STATUS.RECOMMEND:
                                        case s.default.FRIEND_STATUS.DELETED:
                                            e();
                                            break;
                                        case s.default.FRIEND_STATUS.FRIEND:
                                            t();
                                            break;
                                        case s.default.FRIEND_STATUS.FRIEND_BLOCKED:
                                            n(r.makeImpossibleState(o.status, d.lineit_addfriend_alert_block));
                                            break;
                                        case s.default.FRIEND_STATUS.DELETED_BLOCKED:
                                            n(r.makeImpossibleState(o.status, d.lineit_addfriend_alert_delete));
                                            break;
                                        default:
                                            a(), alert(d.lineit_addfriend_alert_sorry)
                                    }
                                    break;
                                case 401:
                                case 403:
                                    i();
                                    break;
                                case 954:
                                    n(r.makeImpossibleState(s.default.FRIEND_STATUS.DELETED_OA, d.lineit_addfriend_alert_sorry));
                                    break;
                                default:
                                    a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                            }
                        },
                        error: function(e) {
                            a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                        }
                    })
                }
            }, {
                key: "getReplaceToFriendName",
                value: function(e, t) {
                    for (var i in e) e.hasOwnProperty(i) && (e[i] = e[i].replace(/\{0\}/g, t));
                    return e
                }
            }, {
                key: "makeImpossibleState",
                value: function(e, t) {
                    return {
                        status: e,
                        message: t
                    }
                }
            }, {
                key: "requestAddFriend",
                value: function(e, t, i, n, a) {
                    d.default.send({
                        method: "POST",
                        url: "/social-plugin-widget/api/friend/add?caller=" + e,
                        data: {
                            mid: window.lineIt.friend.mid
                        },
                        success: function(e) {
                            var r = window.lineIt.messages;
                            switch (e.code) {
                                case 0:
                                    t();
                                    break;
                                case 401:
                                case 403:
                                    i();
                                    break;
                                case 950:
                                    n(r.lineit_addfriend_alert_block_delete);
                                    break;
                                case 951:
                                case 952:
                                case 954:
                                    n(r.lineit_addfriend_alert_sorry);
                                    break;
                                default:
                                    a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                            }
                        },
                        error: function(e) {
                            a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                        }
                    })
                }
            }]), e
        }();
    t.default = u
}, function(e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        a = function() {
            function e() {
                i(this, e)
            }
            return n(e, null, [{
                key: "send",
                value: function(e) {
                    var t = new XMLHttpRequest;
                    return t.open(e.method, e.url), t.setRequestHeader("Content-type", "application/json"), t.setRequestHeader("X-Timeline-WebVersion", "SocialPlugin/1.4.0"), t.responseType = "json", t.onreadystatechange = function() {
                        if (4 == t.readyState)
                            if (200 == t.status) {
                                var i = null;
                                try {
                                    i = JSON.parse(t.responseText)
                                } catch (e) {
                                    i = t.response
                                }
                                e.success && e.success(i)
                            } else e.error && e.error(t)
                    }, t.onerror = function(i) {
                        e.error && e.error(t, i)
                    }, t.send(JSON.stringify(e.data)), t
                }
            }]), e
        }();
    t.default = a
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        LOGIN_POPUP_URL: "/webauth/login?returnUrl=https://" + document.domain + "/social-plugin-widget/close",
        ADD_FRIEND_SEND_TYPE: {
            FRIEND: "FRIEND",
            LIKE: "LIKE"
        },
        FRIEND_STATUS: {
            FRIEND: "FRIEND",
            UNSPECIFIED: "UNSPECIFIED",
            RECOMMEND: "RECOMMEND",
            DELETED: "DELETED",
            FRIEND_BLOCKED: "FRIEND_BLOCKED",
            DELETED_BLOCKED: "DELETED_BLOCKED",
            HIDDEN: "HIDDEN",
            INVALID_OA: "INVALID_OA",
            DELETED_OA: "DELETED_OA"
        }
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        l = i(7),
        d = n(l),
        o = i(2),
        s = n(o),
        u = i(9),
        c = n(u),
        f = i(5),
        _ = n(f),
        h = i(3),
        m = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.default = e, t
        }(h),
        p = function() {
            function e() {
                a(this, e), this.elem = {
                    wrap: document.getElementsByClassName("btnWrap")[0],
                    button: document.getElementsByClassName("btn")[0],
                    counter: document.getElementsByClassName("num")[0],
                    buttonTextBox: document.getElementsByClassName("lang")[0],
                    shareCheckBox: document.getElementById("share"),
                    friendBox: document.getElementsByClassName("btnAdd")[0]
                }, this.relogin = !1, this.params = this.getParsedParam(mockup.match(/\?(.+)$/)[1]), this.likeService = new c.default, this.addFriendService = new _.default(this.params.lineId), this.friendClicked = !1
            }
            return r(e, [{
                key: "attach",
                value: function() {
                    this.validateDomain() && this.bindEvent(), s.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin)
                }
            }, {
                key: "getParsedParam",
                value: function(e) {
                    var t = e.match(/\&?origin\=([^&]+)/)[1],
                        i = e.match(/\&?lang\=([^&]+)/),
                        n = e.match(/\&?env\=([^&]+)/),
                        a = e.match(/\&?id\=(\d+)/),
                        r = function() {
                            return decodeURIComponent(t).match(/(https?\:\/\/[^\/]+)\/?/)[1]
                        }(),
                        l = e.match(/\&?url\=([^&]+)/),
                        d = e.match(/\&?includeShare\=([^&]+)/),
                        o = e.match(/\&?lineId\=([^&]+)/);
                    return i = i && i[1], a = a && parseInt(a[1], 10), n = n && n[1], l = l && l[1], d = d && d[1], o = o && o[1], {
                        origin: t,
                        lang: i,
                        id: a,
                        env: n || "REAL",
                        targetOrigin: r,
                        url: decodeURIComponent(l),
                        useShare: "true" == d,
                        lineId: o
                    }
                }
            }, {
                key: "validateDomain",
                value: function() {
                    var e = this.params.url.match(/(https?\:\/\/[^\/]+)\/?/),
                        t = e && e[1];
                    return "REAL" != this.params.env || "https://media.line.me" == this.params.targetOrigin || t === this.params.targetOrigin
                }
            }, {
                key: "bindEvent",
                value: function() {
                    var e = this;
                    this.elem.button.addEventListener("click", function() {
                        window.lineIt.login ? e.switchLikeState() : s.default.openPopup(d.default.LOGIN_POPUP_URL)
                    }), this.elem.friendBox && this.params.lineId && this.elem.friendBox.addEventListener("click", function() {
                        m.sendLikeFriendClickLog(e.params.useShare, e.params.lineId), e.friendClicked = !0, e.addFriend()
                    }), window.lineIt.loginSuccessCallback = function() {
                        e.relogin ? s.default.refreshButtons(null, e.params.targetOrigin) : (s.default.setLoginStatus(!0), e.friendClicked ? e.addFriend() : e.switchLikeState(), s.default.refreshButtons(e.params.id, e.params.targetOrigin))
                    }
                }
            }, {
                key: "switchLikeState",
                value: function() {
                    var e = this;
                    this.disableLikeButton(), window.lineIt.like.liked ? (m.sendLikeCancelClickLog(this.params.url, this.params.useShare, this.params.lineId), this.likeService.requestCancelLike(this.params.url, function() {
                        e.decreaseLikedCount(), e.updateCancelLikeUI(), e.params.useShare && (e.params.lineId ? s.default.addClass(e.elem.wrap, "shareWrap") : (s.default.removeClass(e.elem.wrap, "isDimmed"), s.default.enableButton(e.elem.shareCheckBox))), e.params.useShare && e.params.lineId && e.setFriendOptionUI(null), e.enableLikeButton(), e.updateButtonSize(window.lineIt.like.likeCount, "cancel")
                    }, function() {
                        s.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI(), e.enableLikeButton()
                    }, function() {
                        e.enableLikeButton()
                    })) : (m.sendLikeClickLog(this.params.url, this.params.useShare, this.getShareState(), this.params.lineId), this.likeService.requestLike(this.params.url, this.getShareState(), function(t) {
                        t && e.increaseLikedCount(), e.updateLikeUI(), e.params.useShare && (e.params.lineId ? s.default.removeClass(e.elem.wrap, "shareWrap") : (s.default.addClass(e.elem.wrap, "isDimmed"), s.default.disableButton(e.elem.shareCheckBox))), e.params.useShare && e.params.lineId ? e.updateFriendOptionUI() : e.enableLikeButton(), e.updateButtonSize(window.lineIt.like.likeCount, "like")
                    }, function() {
                        s.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI(), e.enableLikeButton()
                    }, function() {
                        e.enableLikeButton()
                    }))
                }
            }, {
                key: "addFriend",
                value: function() {
                    var e = this;
                    this.disableLikeButton(), window.lineIt.login ? this.addFriendService.requestFriendState(function() {
                        confirm(window.lineIt.messages.lineit_addfriend_confirm_alert) ? e.addFriendService.requestAddFriend(d.default.ADD_FRIEND_SEND_TYPE.LIKE, function() {
                            e.setFriendOptionUI("home"), e.enableLikeButton()
                        }, function() {
                            s.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI(), e.enableLikeButton()
                        }, function(t) {
                            e.enableLikeButton(), alert(t)
                        }, function() {
                            e.enableLikeButton()
                        }) : e.enableLikeButton()
                    }, function() {
                        alert(window.lineIt.messages.lineit_addfriend_alert_already), e.setFriendOptionUI("home"), e.enableLikeButton()
                    }, function() {
                        s.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI(), e.enableLikeButton()
                    }, function(t) {
                        if (t.status == d.default.FRIEND_STATUS.DELETED_OA) {
                            alert("This account has been deleted or an invalid LINE ID has been entered. Please check your account or LINE ID.");
                            window.console.warn("This account has been deleted or an invalid LINE ID has been entered. Please check your account or LINE ID.")
                        } else t.status == d.default.FRIEND_STATUS.INVALID_OA && alert(t.message);
                        e.enableLikeButton()
                    }, function() {
                        e.enableLikeButton()
                    }) : s.default.openPopup(d.default.LOGIN_POPUP_URL)
                }
            }, {
                key: "getShareState",
                value: function() {
                    return !(!this.params.useShare || !this.elem.shareCheckBox) && this.elem.shareCheckBox.checked
                }
            }, {
                key: "updateLikeUI",
                value: function() {
                    window.lineIt.like.liked = !0, s.default.addClass(this.elem.button, "like"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_like
                }
            }, {
                key: "updateCancelLikeUI",
                value: function() {
                    window.lineIt.like.liked = !1, s.default.removeClass(this.elem.button, "like"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_like
                }
            }, {
                key: "updateFriendOptionUI",
                value: function() {
                    var e = this;
                    this.addFriendService.requestFriendState(function() {
                        e.setFriendOptionUI("add"), e.enableLikeButton()
                    }, function() {
                        e.setFriendOptionUI("home"), e.enableLikeButton()
                    }, function() {
                        s.default.setLoginStatus(!1), e.relogin = !0, e.updateAuthErrorUI(), e.enableLikeButton()
                    }, function(t) {
                        if (t.status == d.default.FRIEND_STATUS.DELETED_OA) {
                            e.setFriendOptionUI("add");
                            window.console.warn("This account has been deleted or an invalid LINE ID has been entered. Please check your account or LINE ID.")
                        }
                        e.enableLikeButton()
                    }, function() {
                        e.enableLikeButton()
                    })
                }
            }, {
                key: "setFriendOptionUI",
                value: function(e) {
                    s.default.removeClass(this.elem.wrap, "homeWrap"), s.default.removeClass(this.elem.wrap, "addWrap"), "home" == e ? s.default.addClass(this.elem.wrap, "homeWrap") : "add" == e && s.default.addClass(this.elem.wrap, "addWrap")
                }
            }, {
                key: "updateAuthErrorUI",
                value: function() {
                    s.default.removeClass(this.elem.button, "like"), s.default.addClass(this.elem.wrap, "isZero"), this.elem.buttonTextBox.innerText = window.lineIt.messages.lineit_login, this.elem.counter.innerText = "", s.default.removeClass(this.elem.wrap, "shareWrap"), this.setFriendOptionUI(null), s.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin)
                }
            }, {
                key: "increaseLikedCount",
                value: function() {
                    var e = ++window.lineIt.like.likeCount;
                    this.elem.counter.innerText = s.default.convertCount(e), this.elem.button.title = e, 1 == e && s.default.removeClass(this.elem.wrap, "isZero")
                }
            }, {
                key: "decreaseLikedCount",
                value: function() {
                    var e = --window.lineIt.like.likeCount;
                    this.elem.counter.innerText = s.default.convertCount(e), this.elem.button.title = e, 0 == e && s.default.addClass(this.elem.wrap, "isZero")
                }
            }, {
                key: "enableLikeButton",
                value: function() {
                    s.default.enableButton(this.elem.button)
                }
            }, {
                key: "disableLikeButton",
                value: function() {
                    s.default.disableButton(this.elem.button)
                }
            }, {
                key: "updateButtonSize",
                value: function(e, t) {
                    "like" == t ? e >= 100 && Number.isInteger(Math.log10(e)) && s.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin) : e >= 100 && Number.isInteger(Math.log10(e + 1)) && s.default.updateButtonSize(this.elem.wrap.offsetWidth, this.elem.wrap.offsetHeight, this.params.id, this.params.targetOrigin)
                }
            }]), e
        }();
    t.default = p
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        r = i(6),
        l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r),
        d = function() {
            function e() {
                n(this, e)
            }
            return a(e, [{
                key: "requestLike",
                value: function(e, t, i, n, a) {
                    l.default.send({
                        method: "POST",
                        url: "/social-plugin-widget/api/like/create",
                        data: {
                            url: e,
                            share: t
                        },
                        success: function(e) {
                            var t = window.lineIt.messages;
                            switch (e.code) {
                                case 0:
                                    var r = !0;
                                    i(r);
                                    break;
                                case 1014:
                                    var r = !1;
                                    i(r);
                                    break;
                                case 401:
                                case 403:
                                    n();
                                    break;
                                case 1010:
                                    a(), alert(t.lineit_like_alert_error_wrongurl);
                                    break;
                                default:
                                    a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                            }
                        },
                        error: function(e) {
                            a(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                        }
                    })
                }
            }, {
                key: "requestCancelLike",
                value: function(e, t, i, n) {
                    l.default.send({
                        method: "POST",
                        url: "/social-plugin-widget/api/like/cancel",
                        data: {
                            url: e
                        },
                        success: function(e) {
                            switch (e.code) {
                                case 0:
                                    t();
                                    break;
                                case 401:
                                case 403:
                                    i();
                                    break;
                                default:
                                    n(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                            }
                        },
                        error: function(e) {
                            n(), alert("Unable to process your request due to a temporary error.\nPlease try again.")
                        }
                    })
                }
            }]), e
        }();
    t.default = d
}, function(e, t) {
    e.exports = {
        lineit_bodyclass: "global",
        lineit_like_withfriend: "Friend",
        lineit_like_withhome: "Home",
        lineit_addfriend_done: "Friended",
        lineit_like_alert_error_wrongurl: "The Like button cannot be used due to a page URL error.",
        lineit_share: "LINE it!",
        lineit_share_bubble: "Share",
        lineit_addfriend: "Add friend",
        lineit_like: "Like",
        lineit_like_withshare: "Share",
        lineit_like_tooltip: "Liking this page will share it on your Timeline.",
        lineit_addfriend_tooltip_available: "Add {0} as a friend.",
        lineit_addfriend_tooltip_already: "{0} is already your friend.",
        lineit_addfriend_tooltip_gohome: "See more posts on {0}'s Home.",
        lineit_addfriend_alert_block: "You've blocked this account.\nYou can check your Friend settings in the LINE app.",
        lineit_addfriend_alert_delete: "You've deleted this account.\nYou can friend this account again in the LINE app.",
        lineit_addfriend_alert_sorry: "This account can't be added as your friend.",
        lineit_addfriend_alert_block_delete: "You've blocked or deleted this account.\nYou can unblock or friend this account again in the LINE app.",
        lineit_addfriend_alert_hide: "You have hidden this account.\nCheck your friends settings in the LINE app.",
        lineit_login: "Login",
        lineit_addfriend_alert_already: "{0} is already your friend.",
        lineit_alert_ok: "OK",
        lineit_alert_cancel: "Cancel",
        lineit_share_tooltip: "Share this page on LINE.",
        lineit_addfriend_confirm_alert: "Add {0} as a friend on LINE?",
        lineit_addfriend_confirm_alert_add: "Add",
        lineit_addfriend_confirm_alert_cancel: "Cancel"
    }
}, function(e, t) {
    e.exports = {
        lineit_bodyclass: "id",
        lineit_like_withfriend: "Friend",
        lineit_like_withhome: "Home",
        lineit_addfriend_done: "Friended",
        lineit_like_alert_error_wrongurl: "Tombol Suka tidak bisa digunakan karena URL halaman salah.",
        lineit_share: "LINE it!",
        lineit_share_bubble: "Share",
        lineit_addfriend: "Add friend",
        lineit_like: "Like",
        lineit_like_withshare: "Share",
        lineit_like_tooltip: "Halaman ini akan dibagikan ke Timeline begitu Anda memberi tanda suka.",
        lineit_addfriend_tooltip_available: "{0} bisa ditambahkan sebagai teman.",
        lineit_addfriend_tooltip_already: "{0} sudah menjadi teman.",
        lineit_addfriend_tooltip_gohome: "Anda bisa melihat pos lainnya di Beranda {0}.",
        lineit_addfriend_alert_block: "Anda sudah memblokir akun ini.\nSilakan cek pengaturan Teman di aplikasi LINE.",
        lineit_addfriend_alert_delete: "Anda sudah menghapus akun ini.\nSilakan tambahkan kembali sebagai teman lewat aplikasi LINE.",
        lineit_addfriend_alert_sorry: "Akun yang tidak bisa ditambahkan sebagai teman.",
        lineit_addfriend_alert_block_delete: "Anda sudah memblokir atau menghapus akun ini.\nSilakan buka blokir atau tambahkan kembali sebagai teman lewat aplikasi LINE.",
        lineit_addfriend_alert_hide: "Anda sudah menyembunyikan akun ini.\nSilakan cek pengaturan Teman di aplikasi LINE.",
        lineit_login: "Login",
        lineit_addfriend_alert_already: "{0} sudah menjadi teman.",
        lineit_alert_ok: "OK",
        lineit_alert_cancel: "Batal",
        lineit_share_tooltip: "Informasi di halaman ini bisa dibagikan di LINE.",
        lineit_addfriend_confirm_alert: "Ingin menambah {0} sebagai teman ke LINE?",
        lineit_addfriend_confirm_alert_add: "Tambah",
        lineit_addfriend_confirm_alert_cancel: "Batal"
    }
}, function(e, t) {
    e.exports = {
        lineit_bodyclass: "ja",
        lineit_like_withfriend: "友だち",
        lineit_like_withhome: "ホーム",
        lineit_addfriend_done: "友だち済み",
        lineit_like_alert_error_wrongurl: "ページのURLが正しくないため、いいねボタンが使用できません。",
        lineit_share: "LINEで送る",
        lineit_share_bubble: "送る",
        lineit_addfriend: "友だち追加",
        lineit_like: "いいね",
        lineit_like_withshare: "シェア",
        lineit_like_tooltip: "いいねすると、このページをタイムラインでシェアします。",
        lineit_addfriend_tooltip_available: "{0}を友だち追加できます。",
        lineit_addfriend_tooltip_already: "{0}とは既に友だちです。",
        lineit_addfriend_tooltip_gohome: "{0}のホームで他の投稿も見ることができます。",
        lineit_addfriend_alert_block: "ブロックしているアカウントです。\nLINEアプリで友だち設定を確認してください。",
        lineit_addfriend_alert_delete: "友だちから削除したアカウントです。\nLINEアプリから友だち追加してください。",
        lineit_addfriend_alert_sorry: "友だち追加できないアカウントです。",
        lineit_addfriend_alert_block_delete: "友だちから削除したかブロックしているアカウントです。\nLINEアプリから友だち追加するかブロック解除してください。",
        lineit_addfriend_alert_hide: "非表示しているアカウントです。\nLINEアプリで友だち設定を確認してください。",
        lineit_login: "ログイン",
        lineit_addfriend_alert_already: "{0}とは既に友だちです。",
        lineit_alert_ok: "確認",
        lineit_alert_cancel: "キャンセル",
        lineit_share_tooltip: "このページの情報をLINEでシェアできます。",
        lineit_addfriend_confirm_alert: "LINEで{0}を友だちに追加しますか？",
        lineit_addfriend_confirm_alert_add: "追加",
        lineit_addfriend_confirm_alert_cancel: "キャンセル"
    }
}, function(e, t) {
    e.exports = {
        lineit_bodyclass: "th",
        lineit_like_withfriend: "เพื่อน",
        lineit_like_withhome: "หน้าหลัก",
        lineit_addfriend_done: "เพิ่มเพื่อนแล้ว",
        lineit_like_alert_error_wrongurl: "ไม่สามารถใช้ปุ่มถูกใจ เนื่องจากลิงก์ไม่ถูกต้อง",
        lineit_share: "LINE it!",
        lineit_share_bubble: "แชร์",
        lineit_addfriend: "เพิ่มเพื่อน",
        lineit_like: "ถูกใจ",
        lineit_like_withshare: "แชร์",
        lineit_like_tooltip: "เมื่อกดถูกใจ หน้านี้จะถูกแชร์บนโพสต์ของคุณ",
        lineit_addfriend_tooltip_available: "คุณสามารถเพิ่ม {0} เป็นเพื่อนได้",
        lineit_addfriend_tooltip_already: "คุณเป็นเพื่อนกับ {0} แล้ว",
        lineit_addfriend_tooltip_gohome: "คุณสามารถดูโพสต์อื่นๆ ได้ที่หน้าหลักของ {0}",
        lineit_addfriend_alert_block: "คุณบล็อคบัญชีนี้เอาไว้\nคุณสามารถตรวจสอบการตั้งค่าเพื่อนได้ที่แอพ LINE",
        lineit_addfriend_alert_delete: "คุณลบบัญชีนี้ไปแล้ว\nคุณสามารถเพิ่มบัญชีนี้เป็นเพื่อนอีกครั้งได้ที่แอพ LINE",
        lineit_addfriend_alert_sorry: "บัญชีนี้ไม่สามารถเพิ่มเพื่อนได้ในขณะนี้",
        lineit_addfriend_alert_block_delete: "คุณบล็อคหรือลบบัญชีนี้ไปแล้ว\nคุณสามารถปลดบล็อคหรือเพิ่มบัญชีนี้เป็นเพื่อนอีกครั้งได้ที่แอพ LINE",
        lineit_addfriend_alert_hide: "บัญชีนี้ถูกซ่อนเอาไว้\nโปรดตรวจสอบการตั้งค่าเพื่อนในแอพ LINE",
        lineit_login: "ล็อกอิน",
        lineit_addfriend_alert_already: "คุณเป็นเพื่อนกับ {0} แล้ว",
        lineit_alert_ok: "ตกลง",
        lineit_alert_cancel: "ยกเลิก",
        lineit_share_tooltip: "แชร์ข้อมูลบนหน้านี้ได้ทาง LINE",
        lineit_addfriend_confirm_alert: "ต้องการเพิ่ม {0} เป็นเพื่อน LINE หรือไม่",
        lineit_addfriend_confirm_alert_add: "ตกลง",
        lineit_addfriend_confirm_alert_cancel: "ยกเลิก"
    }
}, function(e, t) {
    e.exports = {
        lineit_bodyclass: "zh_TW",
        lineit_like_withfriend: "好友",
        lineit_like_withhome: "主頁",
        lineit_addfriend_done: "已加入好友",
        lineit_like_alert_error_wrongurl: "頁面網址不正確，無法使用「讚」按鍵。",
        lineit_share: "用LINE傳送",
        lineit_share_bubble: "傳送",
        lineit_addfriend: "加入好友",
        lineit_like: "讚",
        lineit_like_withshare: "分享",
        lineit_like_tooltip: "按讚後，便會自動將此頁面分享至動態消息。",
        lineit_addfriend_tooltip_available: "可將{0}加入好友。",
        lineit_addfriend_tooltip_already: "您和{0}已經是好友了。",
        lineit_addfriend_tooltip_gohome: "您可以在{0}的主頁查看其他投稿。",
        lineit_addfriend_alert_block: "您已封鎖此帳號。\n您可以至LINE應用程式的「設定」＞「好友」中確認。",
        lineit_addfriend_alert_delete: "您已刪除此帳號。\n您可以在LINE應用程式中將此帳號重新加入好友。",
        lineit_addfriend_alert_sorry: "無法將此帳號加入好友。",
        lineit_addfriend_alert_block_delete: "您已封鎖或刪除此帳號。\n您可以在LINE應用程式中將此帳號解除封鎖或重新加入好友。",
        lineit_addfriend_alert_hide: "此為目前不顯示的帳號。\n請至LINE應用程式確認好友設定",
        lineit_login: "登入",
        lineit_addfriend_alert_already: "您和{0}已經是好友了。",
        lineit_alert_ok: "確定",
        lineit_alert_cancel: "取消",
        lineit_share_tooltip: "可將此頁面的資訊分享至LINE。",
        lineit_addfriend_confirm_alert: "您要將{0}加入LINE好友嗎？",
        lineit_addfriend_confirm_alert_add: "加入",
        lineit_addfriend_confirm_alert_cancel: "取消"
    }
}]);