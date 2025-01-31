"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [412],
  {
    95954: function (e, t, n) {
      var r, a, i, o, s, l, u, d, c, f, g, h, m, p, v;
      n.d(t, {
        Jq: function () {
          return d;
        },
        Os: function () {
          return i;
        },
        PX: function () {
          return s;
        },
        uU: function () {
          return o;
        },
      }),
        ((c = r || (r = {})).Default = "default"),
        (c.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((f = i || (i = {})).Next = "next"),
        (f.Variant = "variant"),
        (f.Continue = "continue"),
        ((g = o || (o = {})).Unknown = "unknown"),
        (g.User = "user"),
        (g.Assistant = "assistant"),
        (g.System = "system"),
        (g.Critic = "critic"),
        (g.Tool = "tool"),
        ((h = s || (s = {})).Text = "text"),
        (h.MultimodalText = "multimodal_text"),
        (h.TetherBrowsingCode = "tether_browsing_code"),
        (h.Code = "code"),
        (h.ExecutionOutput = "execution_output"),
        (h.SystemError = "system_error"),
        (h.SystemMessage = "system_message"),
        (h.TetherBrowsingDisplay = "tether_browsing_display"),
        (h.TetherQuote = "tether_quote"),
        ((m = l || (l = {})).Search = "search"),
        (m.Click = "click"),
        (m.OpenUrl = "open_url"),
        (m.Quote = "quote"),
        (m.QuoteFull = "quote_full"),
        (m.Back = "back"),
        (m.Scroll = "scroll"),
        ((p = u || (u = {})).Running = "running"),
        (p.Finished = "finished"),
        ((v = d || (d = {})).Root = "root"),
        (v.System = "system"),
        (v.Prompt = "prompt"),
        (v.Completion = "completion");
    },
    20476: function (e, t, n) {
      var r = n(39324),
        a = n(4337),
        i = n(35250),
        o = n(32004),
        s = n(94968),
        l = n(78931),
        u = n(21389);
      function d() {
        var e = (0, a._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, a._)(["bg-blue-200 text-blue-700"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.Z.span(d()),
        g = (0, u.Z)(f)(c());
      t.ZP = function () {
        var e = (0, l.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, l.WY)();
        return (null == e ? void 0 : e.structure) === "workspace"
          ? (0, i.jsx)(g, {
              children: (0, i.jsx)(o.Z, (0, r._)({}, h.businessPlanName)),
            })
          : (null == e ? void 0 : e.structure) === "personal" && t
          ? (0, i.jsx)(f, { children: "Plus" })
          : null;
      };
      var h = (0, s.vU)({
        businessPlanName: {
          id: "badge.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
      });
    },
    14412: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return eu;
          },
        });
      var r = n(22830),
        a = n(35250),
        i = n(87758),
        o = n(70079),
        s = n(88798),
        l = n(21739),
        u = n(32542),
        d = n(6948),
        c = n(31621),
        f = n(46020),
        g = n(54118),
        h = n(78931),
        m = n(61888),
        p = n(20476),
        v = n(89368),
        x = n(39324),
        b = n(71209),
        y = n(94968),
        j = n(70671),
        w = n(32004),
        C = n(62509),
        _ = n(50795),
        k = n(82081),
        M = n(97747),
        T = (0, y.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        N = "2023-04-25",
        P = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(N);
      function I(e) {
        var t = e.onClose,
          n = (0, j.Z)(),
          r = (0, o.useCallback)(
            function () {
              d.m.setItem(P, !0), t();
            },
            [t]
          );
        return (
          (0, o.useEffect)(function () {
            _.o.logEvent(k.a.ageConfirmationModal, { content: N });
          }, []),
          (0, a.jsx)(v.Z, {
            isOpen: !0,
            onClose: m.noop,
            type: "success",
            title: n.formatMessage(T.welcomeBack),
            primaryButton: (0, a.jsx)(M.ZP.Button, {
              title: n.formatMessage(T.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(M.ZP.Button, {
              title: n.formatMessage(T.logoutButton),
              color: "light",
              onClick: function () {
                _.o.logEvent(k.a.clickLogOut, { eventSource: "mouse" }),
                  (0, C.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(S, {}),
          })
        );
      }
      var S = function () {
          var e = (0, j.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    w.Z,
                    (0, x._)({}, T.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    w.Z,
                    (0, b._)((0, x._)({}, T.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(T.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(T.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        Z = n(7614),
        E = n(4337),
        F = n(21389),
        D = n(67273);
      function R() {
        var e = (0, E._)(["flex gap-4 mt-6"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = (0, E._)(["prose dark:prose-invert"]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, E._)(["mb-4"]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function B(e) {
        var t = e.pages,
          n = e.onSubmit,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1];
        return (0, a.jsx)(q, {
          children: t.map(function (e, t) {
            return s === t
              ? (0, a.jsx)(e, { onChangePage: l, onSubmit: n })
              : null;
          }),
        });
      }
      function U(e) {
        var t = e.onBack,
          n = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(O, {
          children: [
            t &&
              (0, a.jsx)(D.z, {
                as: "button",
                color: "neutral",
                onClick: t,
                children: "Back",
              }),
            n &&
              (0, a.jsx)(D.z, {
                as: "button",
                onClick: n,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(D.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var O = F.Z.div(R()),
        q = F.Z.div(L()),
        z = F.Z.h4(A()),
        H = "oai/apps/hasSeenOnboarding",
        W = "chat",
        V = function (e) {
          var t = (0, o.useCallback)(
              function () {
                d.m.setItem(
                  "".concat(H, "/").concat(e),
                  new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                );
              },
              [e]
            ),
            n = (0, r._)((0, o.useState)(null), 2),
            a = n[0],
            i = n[1];
          (0, o.useEffect)(
            function () {
              var t = d.m.getItem("".concat(H, "/").concat(e));
              i(!!t && t);
            },
            [e]
          );
          var s = (0, o.useCallback)(
            function () {
              return a ? new Date(!0 === a ? "2022-12-14" : a) : a;
            },
            [a]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: t, getHasSeenOnboardingDate: s };
            },
            [s, t]
          );
        };
      function Q(e) {
        var t = e.onClose,
          n = V(W).setHasSeenOnboarding,
          r = (0, o.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(B, { pages: [G, $, Y], onSubmit: r });
      }
      var G = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(w.Z, (0, x._)({}, J.page0Subtitle)),
              }),
              (0, a.jsxs)(Z.I, {
                children: [
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(w.Z, (0, x._)({}, J.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(w.Z, (0, x._)({}, J.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(U, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        $ = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(w.Z, (0, x._)({}, J.page1Subtitle)),
              }),
              (0, a.jsxs)(Z.I, {
                children: [
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(w.Z, (0, x._)({}, J.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(w.Z, (0, x._)({}, J.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(U, {
                onBack: function () {
                  return t(0);
                },
                onNext: function () {
                  return t(2);
                },
              }),
            ],
          });
        },
        Y = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(w.Z, (0, x._)({}, J.page2Subtitle)),
              }),
              (0, a.jsxs)(Z.I, {
                children: [
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(w.Z, (0, x._)({}, J.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      w.Z,
                      (0, b._)((0, x._)({}, J.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(U, {
                onBack: function () {
                  return t(1);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        J = (0, y.vU)({
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        K = n(52696),
        X = "workspace";
      function ee(e) {
        var t = e.onClose,
          n = V(X).setHasSeenOnboarding,
          r = (0, o.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(B, { pages: [et, en], onSubmit: r });
      }
      var et = function (e) {
          var t = e.onChangePage,
            n = (0, K.Ix)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(
                  w.Z,
                  (0, b._)((0, x._)({}, er.page0Subtitle), {
                    values: { workspaceName: n },
                  })
                ),
              }),
              (0, a.jsxs)(Z.I, {
                children: [
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83C\uDFE2",
                    children: (0, a.jsx)(
                      w.Z,
                      (0, x._)({}, er.page0Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(
                      w.Z,
                      (0, x._)({}, er.page0Disclaimer2)
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(U, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        en = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(w.Z, (0, x._)({}, er.page1Subtitle)),
              }),
              (0, a.jsxs)(Z.I, {
                children: [
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDED1",
                    children: (0, a.jsx)(
                      w.Z,
                      (0, x._)({}, er.page1Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(Z.Z, {
                    icon: "\uD83D\uDD12",
                    children: (0, a.jsx)(
                      w.Z,
                      (0, b._)((0, x._)({}, er.page1Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://openai.com/policies/api-data-usage-policies",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(U, {
                onBack: function () {
                  return t(0);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        er = (0, y.vU)({
          page0Subtitle: {
            id: "WorkspaceOnboarding.page0Subtitle",
            defaultMessage: "Welcome to the {workspaceName} workspace",
            description:
              "Subtitle for the first page of the business onboarding flow",
          },
          page0Disclaimer1: {
            id: "WorkspaceOnboarding.page0Disclaimer1",
            defaultMessage:
              "This workspace is private, only select members and roles can use it.",
            description:
              "First disclaimer for the first page of the business onboarding flow",
          },
          page0Disclaimer2: {
            id: "WorkspaceOnboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description:
              "Second disclaimer for the first page of the business onboarding flow",
          },
          page1Subtitle: {
            id: "WorkspaceOnboarding.page1Subtitle",
            defaultMessage: "Data management",
            description:
              "Subtitle for the second page of the business onboarding flow",
          },
          page1Disclaimer1: {
            id: "WorkspaceOnboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations in this workspace are opted out of training and not available to other users.",
            description:
              "First disclaimer for the second page of the business onboarding flow",
          },
          page1Disclaimer2: {
            id: "WorkspaceOnboarding.page1Disclaimer2",
            defaultMessage:
              "Chats are securely stored for 30 days for <link>Trust and Safety Protocols</link>.",
            description:
              "Second disclaimer for the second page of the business onboarding flow",
          },
        }),
        ea = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(v.Z, {
            isOpen: !0,
            onClose: m.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(Q, { onClose: t }),
          });
        },
        ei = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(v.Z, {
            isOpen: !0,
            onClose: m.noop,
            type: "success",
            primaryButton: void 0,
            title: (0, a.jsxs)("span", {
              children: ["ChatGPT ", (0, a.jsx)(p.ZP, {})],
            }),
            children: (0, a.jsx)(ee, { onClose: t }),
          });
        };
      function eo(e) {
        var t,
          n,
          i = e.userCountry,
          s = (0, r._)((0, o.useState)(0), 2),
          l = s[0],
          u = s[1],
          c = V(W).getHasSeenOnboardingDate,
          f = V(X).getHasSeenOnboardingDate,
          g = (0, h.ec)(h.F_.isBusinessWorkspace),
          m =
            ((t = (0, h.hz)()),
            (n = !!d.m.getItem(P)),
            0 === t.size ? "loading" : "IT" !== i || n ? "hide" : "show"),
          p = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: I,
                  getModalState: function () {
                    return m;
                  },
                },
                {
                  Modal: ea,
                  getModalState: function () {
                    if (g) return "hide";
                    var e = c();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: ei,
                  getModalState: function () {
                    if (!g) return "hide";
                    var e = f();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [c, f, g, m]
          );
        (0, o.useEffect)(
          function () {
            p[l] &&
              "hide" === p[l].getModalState() &&
              u(
                p.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [l, p]
        );
        var v = p[l];
        if (!v) return null;
        var x = v.getModalState();
        if ("loading" === x) return null;
        "hide" === x &&
          u(function (e) {
            return e + 1;
          });
        var b = p[l].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            u(function (e) {
              return e + 1;
            });
          },
        });
      }
      var es = n(40058),
        el = n(15610);
      function eu(e) {
        var t = e.urlThreadId,
          n = e.clientThreadId,
          m = e.isUserInCanPayGroup,
          p = e.serviceStatus,
          v = e.serviceAnnouncement,
          x = e.userCountry,
          b = (0, r._)(
            (0, o.useState)(function () {
              return void 0 !== t ? t : void 0 !== n ? n : (0, c.OX)();
            }),
            2
          ),
          y = b[0],
          j = b[1];
        void 0 !== t && y !== t && j(t),
          void 0 !== t || (0, c.Zz)(y) || j((0, c.OX)());
        var w = (0, h.$T)(),
          C = (0, h.WY)(),
          _ = (0, h.ec)(h.F_.workspaceId),
          k = (0, l.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, o.useEffect)(
          function () {
            void 0 !== m && k("isUserInCanPayGroup", m);
          },
          [k, m]
        ),
          (0, o.useEffect)(
            function () {
              (null == p ? void 0 : p.type) &&
                !1 === C &&
                s.m.warning(p.message, { hasCloseButton: !0, duration: 5 });
            },
            [C, null == p ? void 0 : p.message, null == p ? void 0 : p.type]
          );
        var M = (0, c.GR)(y),
          T = (0, o.useRef)(!1);
        (0, o.useEffect)(
          function () {
            if (!w) {
              var e = C ? v.paid : v.public;
              if (
                (null == e ? void 0 : e.type) &&
                (null == e ? void 0 : e.message) &&
                !T.current
              ) {
                T.current = !0;
                var t = e.message,
                  n = { hasCloseButton: !0, duration: 15 };
                switch (e.type) {
                  case "danger":
                    s.m.danger(t, n);
                    break;
                  case "info":
                    s.m.info(t, n);
                    break;
                  case "warning":
                    s.m.warning(t, n);
                }
              }
            }
          },
          [v, w, C]
        );
        var N = (0, f.tN)(function (e) {
          return e.activeModals.has(f.B.TempBrowseToast);
        });
        return (0, a.jsx)(u.XA.Provider, {
          value: M,
          children: (0, a.jsxs)(u.gB.Provider, {
            value: !1,
            children: [
              (0, a.jsx)(eo, { userCountry: x }, _),
              (0, a.jsx)(es.Z, { clientThreadId: y, setClientThreadId: j }),
              (0, a.jsxs)(i.zt, {
                children: [
                  (0, a.jsxs)(i.fC, {
                    className:
                      "grid w-[390px] max-w-sm grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-white p-[15px] shadow-xs [grid-template-areas:_'title_action'_'description_action'] radix-state-closed:animate-hide radix-state-open:animate-slideIn dark:bg-gray-950",
                    open: N,
                    children: [
                      (0, a.jsxs)(i.Dx, {
                        className:
                          "text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]",
                        children: [
                          "We've temporarily disabled the Browse with Bing ",
                          (0, el.V)("beta"),
                          " feature",
                        ],
                      }),
                      (0, a.jsxs)(i.dk, {
                        className:
                          "text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]",
                        children: [
                          "Read the",
                          " ",
                          (0, a.jsx)("a", {
                            href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "cursor-pointer underline",
                            children: "Help Center article",
                          }),
                          ".",
                        ],
                      }),
                      (0, a.jsx)(i.aU, {
                        altText: "Dismiss notification",
                        asChild: !0,
                        children: (0, a.jsx)(D.z, {
                          color: "neutral",
                          size: "small",
                          onClick: function () {
                            f.vm.closeModal(f.B.TempBrowseToast),
                              d.m.setItem(g.DN, "true");
                          },
                          children: "Dismiss",
                        }),
                      }),
                      (0, a.jsx)(i.x8, {}),
                    ],
                  }),
                  (0, a.jsx)(i.l_, {
                    className:
                      "z-100 fixed bottom-0 right-0 m-0 flex  max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    40058: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return sR;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        d,
        c,
        f,
        g,
        h,
        m,
        p,
        v,
        x,
        b = n(39324),
        y = n(70216),
        j = n(22830),
        w = n(35250),
        C = n(13995),
        _ = n(60554),
        k = n(70079),
        M = n(1454),
        T = n(32004),
        N = n(94968),
        P = n(99486),
        I = n(31621),
        S = n(78103),
        Z = n(10301),
        E = (0, S.ZP)(
          (0, Z.n)(function () {
            return { aborters: {} };
          })
        ),
        F = E.setState,
        D = {
          addAborter: function (e, t) {
            F(function (n) {
              null != n.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (n.aborters[e] = t);
            });
          },
          abortAndRemoveById: function (e) {
            F(function (t) {
              var n = t.aborters[e];
              null != n && (n.abort(), delete t.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            F(function (t) {
              delete t.aborters[e];
            });
          },
          reset: function () {
            F(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            F(function (e) {
              Object.keys(e.aborters).forEach(function (t) {
                e.aborters[t].abort(), delete e.aborters[t];
              });
            });
          },
        },
        R = n(46020),
        L = n(78931),
        A = n(32542),
        B = n(33669);
      function U(e, t, n) {
        var r = (0, I.XL)(e),
          a = r.title,
          i = r.titleSource,
          o = (0, j._)((0, k.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = null != a ? a : t,
          d = (0, k.useRef)(u);
        return (
          (0, k.useEffect)(
            function () {
              return (
                n && i === I._L.Generated && u !== d.current && l(!0),
                function () {
                  d.current = u;
                }
              );
            },
            [n, u, i]
          ),
          { isTypingEffect: s, resolvedTitle: u }
        );
      }
      var O = n(51217),
        q = n(19012);
      function z(e) {
        var t = e.text,
          n = (0, q.Z)(),
          r = (0, j._)((0, k.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, j._)((0, k.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (0, k.useMemo)(
            function () {
              return new H().humanTypingDelaysQuertyDistance(t);
            },
            [t]
          );
        return (
          (0, k.useEffect)(
            function () {
              t &&
                a &&
                (i(!0),
                u.forEach(function (e, t) {
                  setTimeout(function () {
                    n() && (l(t), t === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, n, a, t]
          ),
          (0, w.jsxs)(w.Fragment, {
            children: [t.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var H = (function () {
          function e() {
            (0, O._)(this, e);
          }
          var t = e.prototype;
          return (
            (t.qwertyDistance = function (e, t) {
              var n,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, j._)(
                  null !== (n = a[e.toLowerCase()]) && void 0 !== n
                    ? n
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                l = (0, j._)(
                  null !== (r = a[t.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - l[0]) + Math.abs(s - l[1]);
            }),
            (t.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(t, Math.floor(n / 2))
                      : 1 === s
                      ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                      : this.getRandomInt(t, n);
                } else o = this.getRandomInt(t, n);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (t.getRandomInt = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            e
          );
        })(),
        W = n(4337),
        V = n(19841),
        Q = n(72201),
        G = n(26430),
        $ = n(84913),
        Y = n(44043),
        J = n(82187),
        K = n(69262),
        X = n(70737),
        ee = n(97296),
        et = n(91530),
        en = n.n(et),
        er = n(70671),
        ea = n(21389),
        ei = n(50795),
        eo = n(82081),
        es = n(32877),
        el = n(21817),
        eu = n(67273),
        ed = n(88327),
        ec = n(6013),
        ef = n(6948),
        eg = n(21722),
        eh = n(71209),
        em = n(39889),
        ep = n(26003),
        ev = n(13002),
        ex = n(62509),
        eb = n(43477),
        ey = (0, k.createContext)(),
        ej = function (e) {
          return (0, S.oR)((0, k.useContext)(ey), e);
        },
        ew = n(68993),
        eC = n(5268),
        e_ = n(63031),
        ek = k.memo(function (e) {
          var t,
            n = e.message,
            r = e.isCollapsed,
            a =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eS),
            o = r && i.length > 0,
            s = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(eP).length > 0;
          return (0, w.jsxs)(w.Fragment, {
            children: [
              o &&
                (0, w.jsx)(eM, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, t) {
                    return (0,
                    w.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(t));
                  }),
                }),
              s &&
                (0, w.jsx)(eM, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, w.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, w.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, w.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, w.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(eP).map(function (e, t) {
                  return (0,
                  w.jsx)("div", { className: "empty:hidden", children: (0, w.jsx)(eI, { jupyterMessage: e }) }, t);
                }),
            ],
          });
        });
      function eM(e) {
        var t = e.label,
          n = e.output;
        return (0, w.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, w.jsx)("div", { className: "mb-1 text-gray-400", children: t }),
            (0, w.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, w.jsx)("pre", {
                className: "shrink-0",
                children: n,
              }),
            }),
          ],
        });
      }
      var eT = Math.log(151) / Math.log(1.5);
      function eN(e) {
        var t = e.fileId,
          n = (0, j._)((0, k.useState)(""), 2),
          r = n[0],
          a = n[1];
        return (
          (0, eC.a)({
            queryKey: ["getFileDownloadLink", t],
            queryFn: function () {
              return P.ZP.getFileDownloadLink(t).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    a(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, t) {
              var n = t.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(n > eT) &&
                "error" !== t.state.status &&
                100 * Math.pow(1.5, n)
              );
            },
          }),
          (0, w.jsxs)(w.Fragment, {
            children: [" ", r && (0, w.jsx)("img", { src: r }), " "],
          })
        );
      }
      function eP(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, e_.$H)(e.image_url + ""))
        );
      }
      function eI(e) {
        var t = e.jupyterMessage;
        if ((0, k.useContext)(A.gB))
          return (0, w.jsxs)("div", {
            className:
              "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
            children: [
              (0, w.jsx)(ed.ZP, { icon: M.LFN, size: "medium" }),
              (0, w.jsx)(T.Z, (0, b._)({}, eZ.imageNotSupported)),
            ],
          });
        if (null != t.image_payload)
          return (0, w.jsx)("img", {
            src: "data:image/png;base64,".concat(t.image_payload),
          });
        if (null != t.image_url) {
          var n = (0, e_.Iy)(t.image_url);
          return (0, w.jsx)(eN, { fileId: n });
        }
        return null;
      }
      function eS(e) {
        return "stream" === e.message_type;
      }
      var eZ = (0, N.vU)({
        imageNotSupported: {
          id: "CodeExecutionOutputMessage.imageNotSupported",
          defaultMessage: "Image output is not supported in a shared chat",
          description:
            "Message shown when an image is output in a shared thread",
        },
      });
      function eE(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, n, r, a;
            return (
              (null ==
              (r =
                null === (t = e.message.metadata) || void 0 === t
                  ? void 0
                  : t.aggregate_result)
                ? void 0
                : null === (n = r.messages) || void 0 === n
                ? void 0
                : n.some(eP)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eF = function (e) {
          var t = e.children,
            n = e.color,
            r = void 0 === n ? "yellow" : n,
            a = e.icon;
          return (0, w.jsxs)("div", {
            className: (0, V.Z)(
              "mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0",
              {
                "bg-yellow-300 text-[#756B5C]": "yellow" === r,
                "bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100":
                  "gray" === r,
              }
            ),
            children: [
              null != a &&
                (0, w.jsx)(ed.ZP, {
                  icon: a,
                  size: "small",
                  className: "mt-1 flex-shrink-0",
                }),
              t,
            ],
          });
        },
        eD = n(97747),
        eR = n(89368),
        eL = n(1821),
        eA = n(81949),
        eB = n(40803),
        eU = n(54118),
        eO = n(20476),
        eq = n(16920),
        ez = n(95954),
        eH = n(52787),
        eW = n(77370),
        eV = n(6038),
        eQ = n(54655);
      function eG() {
        var e = (0, W._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        var e = (0, W._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eY(e) {
        var t = e.clientThreadId,
          n = e.messageForRating,
          r = e.variantIds,
          a = e.conversationTurnMountTime,
          i = function (e) {
            var i,
              l,
              u = I.tQ.getTree(t),
              d = r[0] || "",
              c = (null == u ? void 0 : u.getConversationTurns(d)) || [],
              f = c[c.length - 1],
              g = (null == f ? void 0 : f.messages) || [],
              h = g[g.length - 1],
              m =
                (null == h
                  ? void 0
                  : null === (i = h.message) || void 0 === i
                  ? void 0
                  : i.id) || "",
              p = r[1] || "",
              v = (null == u ? void 0 : u.getConversationTurns(p)) || [],
              x = v[v.length - 1],
              y = (null == x ? void 0 : x.messages) || [],
              j = y[y.length - 1],
              w =
                (null == j
                  ? void 0
                  : null === (l = j.message) || void 0 === l
                  ? void 0
                  : l.id) || "";
            P.ZP.submitMessageComparisonFeedback({
              feedback_version: "inline_regen_feedback:a:1.0",
              original_message_id: m,
              new_message_id: w,
              rating: "none",
              conversation_id: I.tQ.getServerThreadId(t),
              text: "",
              tags: [],
              completion_comparison_rating: e,
              new_completion_placement: "not-applicable",
              feedback_start_time: a,
              compare_step_start_time: a,
              new_completion_load_start_time: o,
              new_completion_load_end_time: s,
              frontend_submission_time: Date.now(),
              timezone_offset_min: new Date().getTimezoneOffset(),
            }),
              I.tQ.updateTree(t, function (t) {
                t.updateNode(n.nodeId, {
                  metadata: {
                    $set: (0, eh._)((0, b._)({}, t.getMetadata(n.nodeId)), {
                      inlineComparisonRating: e,
                    }),
                  },
                });
              }),
              I.tQ.updateTree(t, function (e) {
                e.updateNode(h.nodeId, {
                  metadata: {
                    $set: (0, eh._)((0, b._)({}, e.getMetadata(h.nodeId)), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
              });
          },
          o = (0, j._)(
            (0, k.useState)(function () {
              return null != n.message.create_time
                ? 1e3 * n.message.create_time
                : Date.now();
            }),
            1
          )[0],
          s = (0, j._)(
            (0, k.useState)(function () {
              return Date.now();
            }),
            1
          )[0];
        return (0, w.jsxs)(eK, {
          children: [
            (0, w.jsx)("div", {
              className: (0, V.Z)("mr-4"),
              children: "Was this response better or worse?",
            }),
            (0, w.jsxs)(eJ, {
              onClick: function () {
                return i("new");
              },
              title: "This response was better than the previous response",
              children: [
                (0, w.jsx)(ed.ZP, { icon: M.fmn, className: (0, V.Z)("mr-1") }),
                "Better",
              ],
            }),
            (0, w.jsxs)(eJ, {
              onClick: function () {
                return i("original");
              },
              title: "This response was worse than the previous response",
              children: [
                (0, w.jsx)(ed.ZP, { icon: M.oLd, className: (0, V.Z)("mr-1") }),
                "Worse",
              ],
            }),
            (0, w.jsxs)(eJ, {
              onClick: function () {
                return i("same");
              },
              title: "This response was the same in quality",
              children: [
                (0, w.jsx)(ed.ZP, {
                  icon: eQ.Ny3,
                  className: (0, V.Z)(
                    "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                  ),
                }),
                "Same",
              ],
            }),
            (0, w.jsx)(eJ, {
              onClick: function () {
                I.tQ.updateTree(t, function (e) {
                  e.updateNode(n.nodeId, {
                    metadata: {
                      $set: (0, eh._)((0, b._)({}, e.getMetadata(n.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                });
              },
              title: "Skip this comparison",
              children: (0, w.jsx)(ed.ZP, { icon: M.q5L, size: "medium" }),
            }),
          ],
        });
      }
      var eJ = ea.Z.button(eG()),
        eK = ea.Z.div(e$()),
        eX = n(28512),
        e0 = n(47635),
        e1 = n(52738);
      function e2() {
        var e = (0, W._)(["flex flex-col items-start"]);
        return (
          (e2 = function () {
            return e;
          }),
          e
        );
      }
      function e3() {
        var e = (0, W._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (e3 = function () {
            return e;
          }),
          e
        );
      }
      function e5() {
        var e = (0, W._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (e5 = function () {
            return e;
          }),
          e
        );
      }
      var e4 = k.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, j._)((0, k.useState)(void 0 !== s && s), 2),
            d = u[0],
            c = u[1],
            f = (0, k.useCallback)(
              function () {
                c(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          w.jsxs)(e8, { children: [(0, w.jsxs)(e6, { $complete: n, children: [(0, w.jsx)("div", { children: t }), !n && (0, w.jsx)(eL.Z, { className: (0, V.Z)("shrink-0", null != o ? "ml-1" : "ml-12") }), null != o && (0, w.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: f, children: [null != a && null != r && (0, w.jsx)("div", { className: "text-xs text-gray-600", children: d ? a : r }), !d && i, (0, w.jsx)(ed.ZP, { icon: d ? M.rH8 : M.bTu })] })] }), d && o] });
        }),
        e8 = ea.Z.div(e2()),
        e6 = ea.Z.div(e3(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        e7 = ea.Z.div(e5()),
        e9 = (0, N.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          startingFileSearch: {
            id: "browsingMessage.startingFileSearch",
            defaultMessage: "Searching files...",
            description: "Status message when searching files is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          finishedFileSearch: {
            id: "browsingMessage.finishedFileSearch",
            defaultMessage: "Finished searching files",
            description: "Status message when searching files is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgressWeb: {
            id: "browsingMessage.command.search.inProgress.web",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchInProgressFiles: {
            id: "browsingMessage.command.search.inProgress.files",
            defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files is in progress",
          },
          searchFinishedWeb: {
            id: "browsingMessage.command.search.finished.web",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchFinishedFiles: {
            id: "browsingMessage.command.search.finished.files",
            defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking on a link...",
            description: "Browsing command to click on a link is in progress",
          },
          openFileInProgress: {
            id: "browsingMessage.command.openFile.inProgress",
            defaultMessage: "Opening a file...",
            description: "Browsing command to click into a file is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          openFileFinished: {
            id: "browsingMessage.command.openFile.finished",
            defaultMessage: "Opened a file",
            description: "Browsing command to click into a file finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          openFileFinishedWithLink: {
            id: "browsingMessage.command.openFile.finishedWithLink",
            defaultMessage: "Opened:",
            description:
              "Browsing command to click into a file finished. The file that was opened will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          openFileError: {
            id: "browsingMessage.command.openFile.error",
            defaultMessage: "Opening file failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back to last page",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling down",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
        }),
        te = k.memo(function (e) {
          var t,
            n = e.messages,
            r = e.isComplete,
            a = e.isRetrieval,
            i = (0, L.hz)(),
            o = n.map(function (e) {
              return e.message;
            }),
            s = o
              .map(function (e, t) {
                if (
                  e.author.role !== ez.uU.Tool ||
                  (t > 0 && tc(e) && tc(o[t - 1]))
                )
                  return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var n = e.metadata;
                if (!n) return null;
                var r = n.command,
                  a = n.status;
                return r
                  ? {
                      type: r,
                      status: a,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            l = s.map(function (e, t) {
              return (0, w.jsx)(tt, { command: e, isRetrieval: a }, t);
            });
          r
            ? (l.push((0, w.jsx)(tu, { isRetrieval: a }, "finished")),
              (t = (0, w.jsx)(tu, { isRetrieval: a, compact: !0 })))
            : 0 === l.length
            ? (l.push((0, w.jsx)(tl, { isRetrieval: a }, "waiting")),
              (t = (0, w.jsx)(tl, { isRetrieval: a, compact: !0 })))
            : "finished" === s[s.length - 1].status &&
              l.push(
                (0, w.jsx)(
                  td,
                  {
                    icon: M.Wqx,
                    children: (0, w.jsx)(T.Z, (0, b._)({}, e9.thinking)),
                  },
                  "thinking"
                )
              ),
            t ||
              (t = (0, w.jsx)(tt, {
                command: s[s.length - 1],
                isRetrieval: a,
                compact: !0,
              }));
          var u =
            i.has(es.UG) && !r
              ? (function (e) {
                  var t,
                    n = e.reverse().find(function (e) {
                      return e.author.role === ez.uU.Assistant;
                    });
                  if (!n) return null;
                  for (
                    var r = (0, eH.RR)(n), a = /^#\s*(.*)/gm, i = [];
                    null !== (t = a.exec(r));

                  )
                    i.push(t[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(o)
              : null;
          return (0,
          w.jsxs)(e4, { isComplete: r, results: (0, w.jsx)(e7, { className: "text-xs", children: l }), children: [null != u && (0, w.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: u }), t] });
        });
      function tt(e) {
        var t = e.command,
          n = e.isRetrieval,
          r = e.compact;
        if (t.didError) return (0, w.jsx)(ts, { commandType: t.type });
        switch (t.type) {
          case "search":
            var a,
              i,
              o,
              s,
              l =
                "browser_one_box" === t.message.author.name
                  ? null === (a = t.message.metadata) || void 0 === a
                    ? void 0
                    : null === (i = a._cite_metadata) || void 0 === i
                    ? void 0
                    : i.original_query
                  : null === (o = t.message.metadata) || void 0 === o
                  ? void 0
                  : null === (s = o.args) || void 0 === s
                  ? void 0
                  : s[0];
            if (null == l) return null;
            return (0, w.jsx)(tn, {
              searchQuery: l,
              isComplete: "finished" === t.status,
              isRetrieval: n,
              compact: r,
            });
          case "click":
          case "open_url":
            var u,
              d,
              c =
                null === (u = t.message.metadata) || void 0 === u
                  ? void 0
                  : null === (d = u._cite_metadata) || void 0 === d
                  ? void 0
                  : d.metadata_list[0];
            return (0, w.jsx)(tr, {
              isRetrieval: n,
              citationMetadata: c,
              compact: r,
            });
          case "quote":
          case "quote_full":
            return (0, w.jsx)(ta, { compact: r });
          case "back":
            return (0, w.jsx)(ti, { compact: r });
          case "scroll":
            return (0, w.jsx)(to, { compact: r });
          default:
            return null;
        }
      }
      function tn(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          r = e.isRetrieval,
          a = e.compact,
          i = function (e) {
            var n = P.ZP.getBingLink({ query: t });
            return (0, w.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          },
          o = r ? e9.searchInProgressFiles : e9.searchInProgressWeb,
          s = r ? e9.searchFinishedFiles : e9.searchFinishedWeb;
        return (0, w.jsx)(td, {
          icon: M.jRj,
          compact: a,
          children: n
            ? (0, w.jsx)(
                T.Z,
                (0, eh._)((0, b._)({}, s), {
                  values: {
                    bold: function (e) {
                      return (0, w.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: t,
                  },
                })
              )
            : (0, w.jsx)(
                T.Z,
                (0, eh._)((0, b._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, w.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: t,
                  },
                })
              ),
        });
      }
      function tr(e) {
        var t = e.isRetrieval,
          n = e.citationMetadata,
          r = e.compact,
          a = t ? e9.openFileInProgress : e9.clickInProgress,
          i = t ? e9.openFileFinished : e9.clickFinished,
          o = t ? e9.openFileFinishedWithLink : e9.clickFinishedWithLink;
        return (0, w.jsx)(td, {
          icon: t ? M.NOg : M.PS6,
          compact: r,
          children: n
            ? !0 === r
              ? (0, w.jsx)(T.Z, (0, b._)({}, i))
              : (0, w.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, w.jsx)(T.Z, (0, b._)({}, o)),
                    (0, w.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, w.jsx)(e1.Op, {
                        citationMetadata: n,
                        onClick: function () {
                          if (void 0 === n.type || "webpage" === n.type) {
                            var e;
                            eq.m.logEvent(
                              "chatgpt_browsing_click_link",
                              n.url,
                              {
                                domain:
                                  null !==
                                    (e = e0.get(new URL(n.url).hostname)) &&
                                  void 0 !== e
                                    ? e
                                    : "",
                              }
                            );
                          }
                        },
                      }),
                    }),
                  ],
                })
            : (0, w.jsx)(T.Z, (0, b._)({}, a)),
        });
      }
      function ta(e) {
        var t = e.compact;
        return (0, w.jsx)(td, {
          icon: M.SnF,
          compact: t,
          children: (0, w.jsx)(T.Z, (0, b._)({}, e9.quote)),
        });
      }
      function ti(e) {
        var t = e.compact;
        return (0, w.jsx)(td, {
          icon: M.cww,
          compact: t,
          children: (0, w.jsx)(T.Z, (0, b._)({}, e9.back)),
        });
      }
      function to(e) {
        var t = e.compact;
        return (0, w.jsx)(td, {
          icon: M.nlg,
          compact: t,
          children: (0, w.jsx)(T.Z, (0, b._)({}, e9.scroll)),
        });
      }
      function ts(e) {
        var t,
          n = e.commandType,
          r = e.compact;
        switch (n) {
          case "search":
            t = e9.searchError;
            break;
          case "click":
          case "open_url":
            t = e9.clickError;
            break;
          case "quote":
          case "quote_full":
            t = e9.quoteError;
            break;
          case "back":
            t = e9.backError;
            break;
          case "scroll":
            t = e9.scrollError;
            break;
          default:
            return null;
        }
        return (0, w.jsx)(td, {
          icon: M.bcx,
          compact: r,
          children: (0, w.jsx)(T.Z, (0, b._)({}, t)),
        });
      }
      function tl(e) {
        var t = e.isRetrieval,
          n = e.compact,
          r = t ? e9.startingFileSearch : e9.startingBrowsing;
        return (0, w.jsx)(td, {
          icon: M.jRj,
          compact: n,
          children: (0, w.jsx)(T.Z, (0, b._)({}, r)),
        });
      }
      function tu(e) {
        var t = e.isRetrieval,
          n = e.compact,
          r = t ? e9.finishedFileSearch : e9.finishedBrowsing;
        return (0, w.jsx)(td, {
          icon: M._rq,
          compact: n,
          children: (0, w.jsx)(T.Z, (0, b._)({}, r)),
        });
      }
      function td(e) {
        var t = e.children,
          n = e.icon,
          r = e.compact;
        return (0, w.jsxs)("div", {
          className: (0, V.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, w.jsx)(ed.ZP, { icon: n, className: "shrink-0" }),
            (0, w.jsx)("div", { children: t }),
          ],
        });
      }
      function tc(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full"
        );
      }
      var tf = n(77997),
        tg = n(67576),
        th = {},
        tm = {};
      function tp(e) {
        var t = e.message,
          n = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, tf.F)().theme;
        (0, k.useEffect)(
          function () {
            th[t.message.id] ||
              (ei.o.logEvent(eo.a.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: a,
              }),
              (th[t.message.id] = !0));
          },
          [t, a]
        );
        var o = (0, k.useCallback)(
            function () {
              tm[t.message.id] ||
                (ei.o.logEvent(eo.a.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: a,
                }),
                (tm[t.message.id] = !0));
            },
            [t, a]
          ),
          s = (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, w.jsx)(tg.Z, {
                  clientThreadId: r,
                  messageId: t.message.id,
                  className: (0, V.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var t = function (e, t) {
                      return "```".concat(t, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return t(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var n = e.message.content.parts;
                      if (1 !== n.length || "string" != typeof n[0])
                        throw Error("Unexpected parts for code message");
                      return t(n[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              n &&
                (0, w.jsx)("div", {
                  className: "self-stretch",
                  children: (0, w.jsx)(ek, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, w.jsx)(e4, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: s,
          onExpand: o,
          children: a ? "Finished working" : "Working...",
        });
      }
      var tv = n(31541);
      function tx(e) {
        var t = e.messages,
          n = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          o = (0, k.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, eH.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t]
          );
        return (0, w.jsx)(tv.Cf, {
          clientThreadId: n,
          parts: o,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var tb = n(66570),
        ty = n(45635),
        tj = n(8844),
        tw = n(22121),
        tC = n(88798);
      function t_() {
        return (t_ = (0, eg._)(function (e) {
          var t;
          return (0, em.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return tk.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, n.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (t = n.sent())
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, tj.Z)(),
                        author: { role: ez.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: ez.PX.Text,
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              t
                            ),
                          ],
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function tk() {
        return (tk = (0, eg._)(function (e) {
          var t, n, r, a;
          function i(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, em.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                var s;
                if (
                  ((t = { "content-type": "application/json" }),
                  (s = [i(e.headers), i(t)].flat()),
                  new Set(s).size !== s.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys"
                  );
                return (
                  (n = e.url),
                  e.qs_params.length > 0 &&
                    (n = n + "?" + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(n, {
                      method: e.method,
                      headers: (0, b._)({}, t, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, o.sent().text()];
              case 2:
                if (((a = o.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(a)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, tj.Z)(),
                        author: {
                          role: ez.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: ez.PX.Text, parts: [a] },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function tM(e) {
        return !!tT(e.domain);
      }
      function tT(e) {
        return /^localhost:\d+$/.test(e)
          ? "http://".concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function tN() {
        return (tN = (0, eg._)(function (e) {
          var t, n, r, a, i, o;
          return (0, em.__generator)(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  s.trys.push([0, 3, , 4]),
                  [4, fetch(e + "/.well-known/ai-plugin.json")]
                );
              case 1:
                return [4, s.sent().json()];
              case 2:
                return (n = s.sent()), [3, 4];
              case 3:
                return (
                  s.sent(),
                  tC.m.danger(
                    "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
                  ),
                  [2]
                );
              case 4:
                if (
                  null ==
                  (r =
                    null == n
                      ? void 0
                      : null === (t = n.api) || void 0 === t
                      ? void 0
                      : t.url)
                )
                  return (
                    tC.m.danger(
                      "Localhost manifest is missing OpenAPI spec URL."
                    ),
                    [2]
                  );
                if (
                  "pathname" ===
                  (a = (function (e) {
                    try {
                      return new URL(e), "full url";
                    } catch (t) {
                      if (e.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = e + r;
                else if ("neither" === a)
                  return (
                    tC.m.danger(
                      "Localhost manifest OpenAPI spec URL is not a valid URL or path."
                    ),
                    [2]
                  );
                s.label = 5;
              case 5:
                return s.trys.push([5, 8, , 9]), [4, fetch(r)];
              case 6:
                return [4, s.sent().text()];
              case 7:
                return (i = s.sent()), [3, 9];
              case 8:
                return (
                  s.sent(),
                  tC.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  o = tw.ZP.parse(i);
                } catch (e) {}
                try {
                  o = JSON.parse(i);
                } catch (e) {}
                if (null == o)
                  return (
                    tC.m.danger(
                      "Failed to parse localhost OpenAPI spec as JSON or YAML."
                    ),
                    [2]
                  );
                s.label = 10;
              case 10:
                return (
                  s.trys.push([10, 12, , 13]),
                  [
                    4,
                    P.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: n,
                      openapiSpec: o,
                    }),
                  ]
                );
              case 11:
                return [2, s.sent()];
              case 12:
                return (
                  s.sent(),
                  tC.m.danger(
                    "Failed to create or update localhost plugin at ".concat(e)
                  ),
                  [3, 13]
                );
              case 13:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function tP(e) {
        return (0, eH.qi)(e) && !(0, eH.oH)(e);
      }
      function tI() {
        var e = (0, W._)(["grid gap-4\n", ""]);
        return (
          (tI = function () {
            return e;
          }),
          e
        );
      }
      var tS = (0, N.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function tZ(e) {
        var t,
          n,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          o = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var s = !1,
          l = c.SQUARE;
        if ("text" === i.content.content_type)
          try {
            var u = (function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o = a.value,
                      s = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(s + o),
                        isComplete: "" === o,
                      };
                    } catch (e) {}
                  }
                } catch (e) {
                  (n = !0), (r = e);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (n) throw r;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = u.result,
              f = u.isComplete;
            (t = d),
              (s = f),
              (null == t ? void 0 : t.image_shape) != null &&
                (l = t.image_shape);
          } catch (e) {}
        var g = !1;
        if (null != o) {
          if ("text" === o.content.content_type) {
            try {
              n = JSON.parse(o.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, w.jsx)(tF, { imageUrls: n.images, gridItemShape: l });
          }
          g = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, w.jsx)(tE, {
              numItems:
                null !== (r = null == t ? void 0 : t.n) && void 0 !== r
                  ? r
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: l,
              isPromptListComplete: null != s && s,
              showErrorState: g || tP(i),
            })
          : null;
      }
      function tE(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            o = [],
            s = 0;
          s < t;
          s++
        ) {
          var l = n[s],
            u = s < n.length - 1 || a || i;
          o.push(
            (0, w.jsx)(
              tD,
              {
                className: (0, V.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, w.jsx)(eB.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, w.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, w.jsx)("div", {
                          className: (0, V.Z)("pt-4", !u && "result-streaming"),
                          children: (0, w.jsx)("span", { children: l }),
                        }),
                      u &&
                        !i &&
                        (0, w.jsx)(eL.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, w.jsx)(ed.ZP, {
                          icon: M.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              s
            )
          );
        }
        return (0, w.jsx)(tL, { $numItems: t, children: o });
      }
      function tF(e) {
        var t = e.imageUrls,
          n = e.gridItemShape,
          r = t.map(function (e, t) {
            return (0, w.jsx)(tR, { imageUrl: e, shape: n }, t);
          });
        return (0, w.jsx)(tL, { $numItems: r.length, children: r });
      }
      function tD(e) {
        var t = e.children,
          n = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, w.jsxs)("div", {
          className: (0, V.Z)(
            "relative overflow-hidden rounded",
            r,
            n === c.WIDE && "aspect-[7/4]",
            n === c.SQUARE && "aspect-square max-w-[400px]",
            n === c.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, w.jsx)("div", {
              className: (0, V.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            t,
          ],
        });
      }
      function tR(e) {
        var t = e.imageUrl,
          n = e.shape,
          r = (0, er.Z)();
        return (0, w.jsx)(tD, {
          shape: n,
          children: (0, w.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, w.jsx)("img", {
              src: t,
              alt: r.formatMessage(tS.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var tL = ea.Z.div(tI(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function tA() {
        var e = (0, W._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tB() {
        var e = (0, W._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      var tU = ea.Z.div(tA());
      function tO() {
        return (0, w.jsx)(tU, {
          children: (0, w.jsx)(ed.ZP, {
            icon: M.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function tq() {
        return (0, w.jsx)(tU, {
          children: (0, w.jsx)(ed.ZP, { icon: M.V7f, className: "h-3 w-3" }),
        });
      }
      var tz = ea.Z.div(tB());
      function tH() {
        return (0, w.jsxs)(tz, {
          children: [
            (0, w.jsx)(ed.ZP, {
              icon: M.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, w.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function tW() {
        return (0, w.jsxs)(tz, {
          children: [
            (0, w.jsx)(ed.ZP, { icon: M.V7f, className: "h-3 w-3" }),
            (0, w.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var tV = n(28531),
        tQ = k.memo(function (e) {
          var t,
            n = e.messages,
            r = (0, j._)(n, 2),
            a = r[0],
            i = r[1],
            o = (0, tV.v)(),
            s = (0, eH.fj)(a.message.recipient),
            l = o.find(function (e) {
              return e.namespace === (null == s ? void 0 : s.pluginNamespace);
            }),
            u = null == l ? void 0 : l.manifest.name_for_human,
            d = tP(a.message),
            c = null != u ? (0, w.jsx)("b", { children: u }) : "unknown plugin",
            f =
              null != i
                ? (0, w.jsxs)("div", { children: ["Used ", c] })
                : d
                ? (0, w.jsxs)("div", { children: ["Tried to use ", c] })
                : (0, w.jsxs)("div", { children: ["Using ", c, "..."] });
          return (
            l &&
              (tM(l)
                ? (t = (0, w.jsx)(tW, {}))
                : "approved" !== l.status && (t = (0, w.jsx)(tH, {}))),
            (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(e4, {
                  isComplete: null != i || d,
                  results: (0, w.jsx)(tG, {
                    pluginName: null != u ? u : "unknown plugin",
                    pluginMessage: a,
                    toolMessage: i,
                  }),
                  children: (0, w.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [f, t],
                  }),
                }),
                null != l &&
                  (0, w.jsx)(tZ, {
                    plugin: l,
                    pluginMessage: a.message,
                    toolMessage: null == i ? void 0 : i.message,
                  }),
              ],
            })
          );
        });
      function tG(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eH.RR)(n.message),
          i = r ? (0, eH.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, w.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, w.jsx)(t$, {
              title: "Request to ".concat(t),
              infoTooltip: n.message.recipient,
              children: a,
            }),
            null != i &&
              (0, w.jsx)(t$, {
                title: o ? "Error" : "Response from ".concat(t),
                infoTooltip: n.message.recipient,
                children: (0, w.jsx)("span", {
                  className: (0, V.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function t$(e) {
        var t = e.title,
          n = e.infoTooltip,
          r = e.children;
        return (0, w.jsx)(tb.$, {
          title: (0, w.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, w.jsx)(ty.u, {
                  label: n,
                  children: (0, w.jsx)(ed.ZP, {
                    icon: M.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var tY = n(63857),
        tJ = n(42569);
      function tK() {
        var e = (0, W._)([""]);
        return (
          (tK = function () {
            return e;
          }),
          e
        );
      }
      function tX() {
        var e = (0, W._)(["flex flex-grow flex-col gap-3"]);
        return (
          (tX = function () {
            return e;
          }),
          e
        );
      }
      function t0() {
        var e = (0, W._)(["flex p-4 gap-4 ", "\n  ", ""]);
        return (
          (t0 = function () {
            return e;
          }),
          e
        );
      }
      function t1() {
        var e = (0, W._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (t1 = function () {
            return e;
          }),
          e
        );
      }
      function t2() {
        var e = (0, W._)(["p-1 ", ""]);
        return (
          (t2 = function () {
            return e;
          }),
          e
        );
      }
      function t3() {
        var e = (0, W._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t5() {
        var e = (0, W._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (t5 = function () {
            return e;
          }),
          e
        );
      }
      var t4 = ["#7989FF"];
      ((a = f || (f = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin"),
        (a[(a.RetrievalBrowsing = 6)] = "RetrievalBrowsing");
      var t8 = "#19c37d",
        t6 = "openai",
        t7 = "#1a7f64",
        t9 = k.memo(function (e) {
          var t,
            n,
            r,
            a = e.turnIndex,
            i = e.conversationLeafId,
            o = e.isFinalTurn,
            s = e.clientThreadId,
            l = e.onChangeItemInView,
            u = e.onChangeRating,
            d = e.onRequestMoreCompletions,
            c = e.onDeleteNode,
            g = e.onRequestCompletion,
            h = e.onUpdateNode,
            m = e.activeRequests,
            p = e.showInlineEmbeddedDisplay,
            v = void 0 !== p && p,
            x = e.currentModelId,
            b = e.initiallyHighlightedMessageId,
            y = e.avatarColor,
            C = (0, k.useContext)(A.gB),
            _ = (0, L.ec)(L.F_.isBusinessWorkspace),
            T = (0, I.GD)(s, a, i),
            N = T.role,
            P = T.messages,
            S = T.variantIds,
            Z = (0, B.x_)(),
            E = (0, j._)((0, k.useState)(!1), 2),
            F = E[0],
            D = E[1],
            U = (0, k.useMemo)(
              function () {
                return S.findIndex(function (e) {
                  return e === P[0].nodeId;
                });
              },
              [S, P]
            ),
            O = N !== ez.uU.User,
            q = (0, k.useContext)(A.QL).historyDisabled,
            z = (0, L.hz)().has(es.FZ),
            H = (0, eU.Fl)(),
            W = H.isBrowsingAvailable,
            Q = H.isPluginsAvailable,
            G = H.isCodeInterpreterAvailable,
            $ = (0, R.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            Y = P.some(function (e) {
              return e.message.content.content_type === ez.PX.MultimodalText;
            }),
            J = W || Q || G,
            K = (0, k.useRef)(null);
          (0, k.useEffect)(
            function () {
              var e;
              null != b &&
                T.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(b) &&
                (null === (e = K.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [b]
          );
          var X = P[P.length - 1],
            ee = X.rating,
            et = (0, L.hz)(),
            en = (0, tV.v)(),
            er = (0, k.useMemo)(
              function () {
                return (
                  (O &&
                    (null == P ? void 0 : P[0]) != null &&
                    (0, eH.Rc)(P[0].message)) ||
                  x
                );
              },
              [O, P, x]
            ),
            ea = (0, k.useCallback)(
              function () {
                if (1 === P.length) {
                  var e =
                    N === ez.uU.User ? eo.a.editPrompt : eo.a.editCompletion;
                  ei.o.logEvent(e, {
                    id: P[0].message.id,
                    threadId: I.tQ.getServerThreadId(s),
                  }),
                    D(!0);
                }
              },
              [P, N, s]
            ),
            el = (0, k.useCallback)(function () {
              D(!1);
            }, []),
            eu = (0, k.useCallback)(
              function () {
                var e = P.reduce(function (e, t) {
                  return t.err ||
                    t.message.author.role !== ez.uU.Assistant ||
                    "all" !== t.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eH.RR)(t.message);
                }, "");
                navigator.clipboard.writeText(e),
                  ei.o.logEvent(eo.a.copyToClipboard, {
                    threadId: I.tQ.getServerThreadId(s),
                    id: P[0].message.id,
                    eventSource: "mouse",
                    model: er,
                  }),
                  eq.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [er, P, s]
            ),
            ec = (0, k.useCallback)(
              function (e) {
                u(X.nodeId, X.message.id, e);
              },
              [X, u]
            ),
            ef = (0, j._)(
              (0, k.useState)(function () {
                return Date.now();
              }),
              1
            )[0],
            eg = (0, k.useMemo)(
              function () {
                return eW.Cv.getRequestIdFromConversationTurn(T);
              },
              [T]
            ),
            eh = (0, k.useMemo)(
              function () {
                return m.has(eg);
              },
              [m, eg]
            ),
            em = (0, k.useMemo)(
              function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, a = P[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (t) throw n;
                  }
                }
                return !1;
              },
              [P]
            ),
            ep = (0, k.useMemo)(
              function () {
                if (O) {
                  var e,
                    t,
                    n = I.tQ.getTree(s),
                    r =
                      null === (e = n.getParentPromptNode(P[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (t = n.getNode(r).message.metadata) ||
                      void 0 === t
                        ? void 0
                        : t.model_slug);
                  if (er && a && er !== a)
                    return tJ.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [er, O, P, s]
            ),
            ev = (0, k.useMemo)(
              function () {
                if (!J) return { avatarIcon: t6, avatarColor: t8 };
                if (eh && P.length > 0) {
                  var e = P[P.length - 1],
                    t = (0, eH.rH)(e.message);
                  switch (t) {
                    case eH.Cs.Text:
                      if ((0, eH.RR)(e.message).length > 0 || P.length > 1)
                        return { avatarIcon: "text", avatarColor: t7 };
                      break;
                    case eH.Cs.Browsing:
                    case eH.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: t7 };
                    case eH.Cs.Code:
                    case eH.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: t7 };
                    case eH.Cs.Plugin:
                    case eH.Cs.PluginTool:
                      var n = (0, eH.fj)(
                          t === eH.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name
                        ),
                        r = en.find(function (e) {
                          return (
                            e.namespace ===
                            (null == n ? void 0 : n.pluginNamespace)
                          );
                        });
                      if (r) return { avatarPlugin: r };
                      return { avatarIcon: "plugin", avatarColor: t7 };
                  }
                }
                return { avatarIcon: t6, avatarColor: t8 };
              },
              [J, eh, P, en]
            ),
            ex = ev.avatarIcon,
            eb = ev.avatarColor,
            ey = ev.avatarPlugin,
            ej = (0, k.useCallback)(
              function (e, t, n, r) {
                I.tQ.updateTree(s, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(t, n, i, ez.Jq.Prompt, void 0, r);
                });
              },
              [s]
            ),
            ew = (0, k.useMemo)(
              function () {
                var e = [];
                return (
                  P.forEach(function (t, n) {
                    var r = (0, eH.rH)(t.message),
                      a = null == P ? void 0 : P[n - 1],
                      i =
                        null != a &&
                        ((0, eH.lD)(a.message) || (0, eH.qs)(t.message)),
                      o = r === eH.Cs.Text && (0, eH.RR)(t.message);
                    if (r === eH.Cs.Browsing || r === eH.Cs.BrowseTool) {
                      var s = e[e.length - 1];
                      (null == s ? void 0 : s.type) === f.Browsing
                        ? s.messages.push(t)
                        : e.push({ type: f.Browsing, messages: [t] });
                    } else if (
                      r === eH.Cs.RetrievalBrowsing ||
                      r === eH.Cs.RetrievalBrowsingTool
                    ) {
                      var l = e[e.length - 1];
                      (null == l ? void 0 : l.type) === f.RetrievalBrowsing
                        ? l.messages.push(t)
                        : e.push({ type: f.RetrievalBrowsing, messages: [t] });
                    } else if (r === eH.Cs.Plugin || r === eH.Cs.PluginTool) {
                      var u = e[e.length - 1];
                      r === eH.Cs.PluginTool &&
                      (null == u ? void 0 : u.type) === f.Plugin
                        ? u.messages.push(t)
                        : e.push({ type: f.Plugin, messages: [t] });
                    } else if (r === eH.Cs.Code)
                      e.push({ type: f.Code, message: t });
                    else if (r === eH.Cs.CodeExecutionOutput)
                      e.push({ type: f.CodeExecutionOutput, message: t });
                    else if (i && null != o) {
                      var d = e.pop();
                      (null == d ? void 0 : d.type) === f.MultiText
                        ? (d.messages.push(t), e.push(d))
                        : (null == d ? void 0 : d.type) === f.Text &&
                          e.push({
                            type: f.MultiText,
                            messages: [d.message, t],
                          });
                    } else e.push({ type: f.Text, message: t });
                  }),
                  e.map(function (t, n) {
                    var r,
                      a = n === e.length - 1;
                    switch (t.type) {
                      case f.Text:
                        return (0,
                        w.jsx)(tv.ZP, { className: "min-h-[20px]", message: t.message, isEditing: F, format: O, isCompletionInProgress: a && eh, onCreateEditNode: ej, clientThreadId: s, onUpdateNode: h, onDeleteNode: c, onChangeItemInView: l, onRequestCompletion: g, onExitEdit: el, disabled: 0 !== m.size, isCompletion: O, onRequestMoreCompletions: d, isResponseToPluginMessage: (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.type) === f.Plugin }, t.message.nodeId);
                      case f.MultiText:
                        return (0,
                        w.jsx)(tx, { clientThreadId: s, messages: t.messages, isCompletionInProgress: a && eh, isCompletion: O, onRequestMoreCompletions: d }, n);
                      case f.Browsing:
                      case f.RetrievalBrowsing:
                        var i = t.messages[t.messages.length - 1];
                        return (0,
                        w.jsx)(te, { messages: t.messages, isComplete: !o || !a || 0 === m.size || tP(i.message), isRetrieval: t.type === f.RetrievalBrowsing }, t.messages[0].nodeId);
                      case f.Code:
                        var u,
                          p,
                          v = e[n + 1],
                          x =
                            v && v.type === f.CodeExecutionOutput
                              ? v.message
                              : void 0;
                        return (0,
                        w.jsx)(tp, { clientThreadId: s, message: t.message, outputMessage: x, isComplete: !o || !a || 0 === m.size || ((null == (p = null === (u = null == x ? void 0 : x.message.metadata) || void 0 === u ? void 0 : u.aggregate_result) ? void 0 : p.status) !== void 0 && (null == p ? void 0 : p.status) !== "running") || tP(t.message.message) }, t.message.nodeId);
                      case f.CodeExecutionOutput:
                        return (0,
                        w.jsx)(ek, { message: t.message, isCollapsed: !1 }, t.message.nodeId);
                      case f.Plugin:
                        return (0,
                        w.jsx)(tQ, { messages: t.messages }, t.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [P, F, O, eh, ej, s, h, c, l, g, el, m.size, d, o]
            ),
            eC = (0, I.r7)(s),
            e_ =
              et.has(es.st) &&
              !_ &&
              !C &&
              !eC &&
              !q &&
              Z &&
              O &&
              !eh &&
              !v &&
              !F &&
              1 === U &&
              o &&
              !X.inlineComparisonRating &&
              !ee &&
              2 === S.length &&
              Date.now() -
                (null !== (r = X.message.create_time) && void 0 !== r ? r : 0) *
                  1e3 <
                6e5,
            eM = O && !v && !C && !eC,
            eT = !C && !v && !F,
            eN = !O && !v && !C && !Y && 1 === P.length && !F,
            eP = function (e) {
              l(S[e]),
                ei.o.logEvent(eo.a.changeNode, { intent: "toggle_between" });
            };
          if (T.role === ez.uU.Unknown || T.role === ez.uU.System) return null;
          var eI = eN
              ? (0, w.jsx)(na, {
                  $isMessageRedesign: z,
                  onClick: ea,
                  className: (0, V.Z)(
                    !z && Z && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, w.jsx)(ed.ZP, { icon: M.vPQ }),
                })
              : null,
            eS =
              O && !v
                ? (0, w.jsx)(eX.Z, {
                    onCopy: eu,
                    className: (0, V.Z)(
                      "rounded-md p-1",
                      z
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            eZ =
              eM && !_
                ? (0, w.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== ee &&
                        !q &&
                        (0, w.jsx)(
                          na,
                          {
                            $isMessageRedesign: z,
                            onClick: function () {
                              return ec("thumbsUp");
                            },
                            disabled: "thumbsUp" === ee,
                            className: (0, V.Z)(
                              "thumbsUp" === ee &&
                                (z
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, w.jsx)(ed.ZP, { icon: M.fmn }),
                          },
                          "thumbsUp:".concat(X.nodeId)
                        ),
                      "thumbsUp" !== ee &&
                        !q &&
                        (0, w.jsx)(
                          na,
                          {
                            $isMessageRedesign: z,
                            onClick: function () {
                              return ec("thumbsDown");
                            },
                            disabled: "thumbsDown" === ee,
                            className: (0, V.Z)(
                              "thumbsDown" === ee &&
                                (z
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, w.jsx)(ed.ZP, { icon: M.oLd }),
                          },
                          "thumbsDown:".concat(X.nodeId)
                        ),
                    ],
                  })
                : null,
            eE = e_
              ? (0, w.jsx)(eY, {
                  clientThreadId: s,
                  messageForRating: X,
                  variantIds: S,
                  conversationTurnMountTime: ef,
                })
              : null,
            eF = eT && S.length > 1,
            eD = function () {
              return (0, w.jsxs)("div", {
                className: "flex gap-1",
                children: [eZ, eI, eS],
              });
            },
            eR =
              null === (n = P[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            eL = null != eR;
          return (0,
          w.jsxs)(ne, { className: (0, V.Z)("group", "w-full text-gray-800 dark:text-gray-100", z ? (0, V.Z)("sm:rounded-2xl", O ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600") : (0, V.Z)(!v && "border-b border-black/10 dark:border-gray-900/50", O ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")), ref: K, children: [ep && (0, w.jsx)(no, { children: ep }), (0, w.jsxs)(nn, { $isStaticSharedThread: C, $isDesktopNavCollapsed: $, $isMessageRedesign: z, className: (0, V.Z)(v ? "ml-5" : "m-auto"), children: [(0, w.jsxs)(nr, { children: [(0, w.jsx)("div", { className: z ? "" : "w-[30px]", children: O ? (ey ? (0, w.jsx)(eV.Ph, { plugin: ey, notice: em || void 0 }) : (0, w.jsx)(eV.k$, { background: null != y ? y : eb, iconName: ex, notice: em || void 0 })) : eL || v ? (0, w.jsx)(eV.k$, { background: t4[(null !== (t = null == eR ? void 0 : eR.charCodeAt(0)) && void 0 !== t ? t : 0) % t4.length], iconName: "user" }) : (0, w.jsx)(eV.zf, { notice: em || void 0 }) }), !z && eT && Z && (0, w.jsx)(tY.Z, { currentPage: U, onChangeIndex: eP, length: S.length, className: (0, V.Z)("invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible", S.length > 1 ? "visible" : "!invisible") })] }), (0, w.jsxs)("div", { className: (0, V.Z)("relative", z ? "min-w-0 grow" : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"), children: [z && (0, w.jsx)("div", { className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400", children: O ? "ChatGPT" : eL ? "User" : "You" }), (0, w.jsx)(nt, { children: ew }), z ? (!Z || eF || null != eE) && !v && (0, w.jsxs)("div", { className: "mt-2 flex flex-col gap-4", children: [(0, w.jsxs)("div", { className: "flex gap-2 text-gray-400", children: [eF && (0, w.jsx)(tY.Z, { currentPage: U, onChangeIndex: eP, length: S.length, className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700" }), !Z && eD()] }), eE] }) : (0, w.jsxs)(w.Fragment, { children: [eN && Z && (0, w.jsx)(ni, { $hidden: 0 !== m.size, children: eI }), (eM || eT) && (0, w.jsxs)("div", { className: "flex justify-between lg:block", children: [!Z && eT && (0, w.jsx)(tY.Z, { currentPage: U, onChangeIndex: eP, length: S.length, className: (0, V.Z)("self-center pt-2", S.length > 1 ? "visible" : "!invisible") }), eN && !Z && (0, w.jsx)(ni, { $hidden: eh, children: eI }), eM && (0, w.jsxs)(ni, { $hidden: eh, children: [eS, eZ] }), e_ && eE] })] })] }), z && Z && !F && !v && (!C || O) && (0, w.jsx)("div", { className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900", children: eD() })] })] });
        }),
        ne = ea.Z.div(tK()),
        nt = ea.Z.div(tX()),
        nn = ea.Z.div(
          t0(),
          function (e) {
            return e.$isMessageRedesign
              ? "relative"
              : e.$isDesktopNavCollapsed
              ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
              : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
          },
          function (e) {
            return e.$isStaticSharedThread ? "pl-0 pr-4" : "";
          }
        ),
        nr = ea.Z.div(t1()),
        na = ea.Z.button(t2(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        ni = ea.Z.div(t3(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        no = ea.Z.div(t5()),
        ns = n(75318);
      function nl() {
        var e = (0, W._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (nl = function () {
            return e;
          }),
          e
        );
      }
      function nu() {
        var e = (0, W._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (nu = function () {
            return e;
          }),
          e
        );
      }
      function nd() {
        var e = (0, W._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (nd = function () {
            return e;
          }),
          e
        );
      }
      function nc() {
        var e = (0, W._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (nc = function () {
            return e;
          }),
          e
        );
      }
      function nf() {
        var e = (0, W._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (nf = function () {
            return e;
          }),
          e
        );
      }
      function ng() {
        var e = (0, W._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (ng = function () {
            return e;
          }),
          e
        );
      }
      function nh() {
        var e = (0, W._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (nh = function () {
            return e;
          }),
          e
        );
      }
      function nm() {
        var e = (0, W._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (nm = function () {
            return e;
          }),
          e
        );
      }
      function np() {
        var e = (0, W._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (np = function () {
            return e;
          }),
          e
        );
      }
      var nv = ea.Z.div(nl()),
        nx = ea.Z.h1(nu()),
        nb = ea.Z.div(nd()),
        ny = ea.Z.div(nc()),
        nj = ea.Z.h2(nf()),
        nw = ea.Z.ul(ng()),
        nC = ea.Z.li(nh());
      ea.Z.li(nm());
      var n_ = ea.Z.button(np());
      function nk(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          r = (0, k.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, w.jsxs)(n_, { onClick: r, children: ['"', t, '" →'] });
      }
      function nM(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef;
        return (0, w.jsxs)(nv, {
          children: [
            (0, w.jsxs)(nx, { children: ["ChatGPT", (0, w.jsx)(eO.ZP, {})] }),
            (0, w.jsxs)(nb, {
              children: [
                (0, w.jsxs)(ny, {
                  children: [
                    (0, w.jsxs)(nj, {
                      children: [
                        (0, w.jsx)(ed.ZP, { icon: M.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, w.jsxs)(nw, {
                      children: [
                        (0, w.jsx)(nk, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, w.jsx)(nk, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, w.jsx)(nk, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(ny, {
                  children: [
                    (0, w.jsxs)(nj, {
                      children: [
                        (0, w.jsx)(ed.ZP, { icon: ns.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, w.jsxs)(nw, {
                      children: [
                        (0, w.jsx)(nC, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, w.jsx)(nC, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, w.jsx)(nC, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, w.jsxs)(ny, {
                  children: [
                    (0, w.jsxs)(nj, {
                      children: [
                        (0, w.jsx)(ed.ZP, { icon: M.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, w.jsxs)(nw, {
                      children: [
                        (0, w.jsx)(nC, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, w.jsx)(nC, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, w.jsx)(nC, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var nT = n(32148),
        nN = n(33554),
        nP = n(59837),
        nI = n(62853),
        nS = n(91809),
        nZ = function (e) {
          var t = e.children,
            n = e.contentClassName,
            r = e.content,
            a = e.side,
            i = e.sideOffset,
            o = (0, j._)((0, k.useState)(void 0), 2),
            s = o[0],
            l = o[1],
            u = function () {
              l(!0);
            },
            d = function () {
              l(void 0);
            };
          return (0, w.jsxs)(ec.fC, {
            open: s,
            onOpenChange: function (e) {
              l(!0 === e || void 0);
            },
            children: [
              (0, w.jsx)(ec.xz, {
                asChild: !0,
                onMouseEnter: u,
                onMouseLeave: d,
                children: t,
              }),
              (0, w.jsx)(ec.h_, {
                children: (0, w.jsx)(ec.VY, {
                  onMouseEnter: u,
                  onMouseLeave: d,
                  side: a,
                  sideOffset: i,
                  collisionPadding: 16,
                  className: n,
                  onOpenAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  onCloseAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  children: r,
                }),
              }),
            ],
          });
        },
        nE = n(15610),
        nF = n(98076),
        nD = n(16592);
      function nR(e) {
        var t = e.onModelChange,
          n = e.currentModel,
          r = (0, nF.BT)(),
          a = (0, nD.ZP)(),
          i = (0, k.useCallback)(
            function (e) {
              r !== e && (t(e), ei.o.logEvent(eo.a.toggleModel, { model: e }));
            },
            [r, t]
          );
        return (0, w.jsx)(nE.Z, {
          value: null == n ? void 0 : n.id,
          onChange: i,
          items: a,
        });
      }
      var nL = n(20485),
        nA = n(26563),
        nB = n(98359),
        nU = n(57526),
        nO = n(99581);
      function nq() {
        var e = (0, W._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nz() {
        var e = (0, W._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (nz = function () {
            return e;
          }),
          e
        );
      }
      function nH() {
        var e = (0, W._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (nH = function () {
            return e;
          }),
          e
        );
      }
      function nW() {
        var e = (0, W._)(["flex items-center gap-2 truncate"]);
        return (
          (nW = function () {
            return e;
          }),
          e
        );
      }
      function nV() {
        var e = (0, W._)(["h-6 w-6 shrink-0"]);
        return (
          (nV = function () {
            return e;
          }),
          e
        );
      }
      function nQ() {
        var e = (0, W._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (nQ = function () {
            return e;
          }),
          e
        );
      }
      function nG() {
        var e = (0, W._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (nG = function () {
            return e;
          }),
          e
        );
      }
      var n$ = ["confidential", "alpha", "plus"];
      function nY(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, y._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, k.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(t);
              } else r(e);
            },
            [r, a]
          );
        return (0, w.jsx)(nA.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, w.jsx)(
              nJ,
              (0, b._)(
                {
                  ref: s,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var nJ = (0, k.forwardRef)(function (e, t) {
        var n = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          d = e.header,
          c = e.onOpen,
          f = e.onClose,
          g = e.theme,
          h = (0, k.useRef)(null),
          m = (0, k.useRef)(null),
          p = (0, B.oc)();
        (0, k.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var v = l
          ? u ||
            (0, w.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, w.jsx)(eL.Z, {}),
            })
          : (0, w.jsxs)(w.Fragment, {
              children: [
                d,
                (0, w.jsxs)(nA.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, w.jsx)(
                        nK,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: g,
                          children: function (t) {
                            var n = t.selected,
                              r = t.active;
                            return (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsxs)(n9, {
                                  children: [
                                    e.imageUrl &&
                                      (0, w.jsx)(re, {
                                        children: (0, w.jsx)(nS.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, w.jsxs)("span", {
                                      className: (0, V.Z)(
                                        n && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return n3(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, w.jsx)(n0, { theme: g, selected: n })
                                  : n &&
                                    (0, w.jsx)(nX, {
                                      theme: g,
                                      icon: "mini" === g ? ed.HQ : M.UgA,
                                    }),
                                e.disabled &&
                                  (0, w.jsx)(nX, {
                                    theme: g,
                                    icon: nU.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, nO.createPortal)(
                                    (0, w.jsx)(n2, {
                                      option: e,
                                      dropdownRef: m,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        t
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, t) {
                          return (0, w.jsx)(
                            nK,
                            {
                              value: e.id,
                              theme: g,
                              children: function () {
                                return (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, w.jsx)(nX, { theme: g, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        w.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, w.jsxs)(nA.R.Button, { ref: h, onClick: a ? f : c, className: (0, V.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === g ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== g && (0, w.jsx)(nA.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, w.jsx)("span", { className: "inline-flex w-full truncate", children: (0, w.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, w.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, w.jsx)(ed.ZP, { icon: M.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, w.jsx)(nB.u, { show: a, as: k.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, w.jsx)(n4, { ref: m, children: v }) })] });
      });
      function nK(e) {
        var t = e.value,
          n = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, w.jsx)(nA.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, V.Z)(
              "mini" === a ? n6 : n7,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: r,
        });
      }
      function nX(e) {
        var t = e.icon,
          n = e.className,
          r = e.theme;
        return (0, w.jsx)("mini" === r ? rt : rn, {
          children: (0, w.jsx)(ed.ZP, {
            icon: t,
            className: (0, V.Z)("h-5 w-5", n),
            "aria-hidden": "true",
          }),
        });
      }
      function n0(e) {
        var t = e.selected,
          n = e.disabled;
        return "mini" === e.theme
          ? (0, w.jsxs)(rt, {
              children: [
                (0, w.jsx)(ed.ZP, {
                  icon: t ? ed.HQ : ed.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: t ? 2.5 : 2,
                }),
                !t &&
                  (0, w.jsx)(ed.ZP, {
                    icon: ed.nQ,
                    className: (0, V.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !n && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, w.jsx)(rn, {
              children: (0, w.jsx)("div", {
                className: (0, V.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  t
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, w.jsx)(ed.ZP, {
                  icon: M.UgA,
                  className: (0, V.Z)(
                    "h-3 w-3 transition-opacity",
                    t && "opacity-100",
                    !t && "opacity-0",
                    !t && !n && "group-hover:opacity-50"
                  ),
                  strokeWidth: t ? 2.5 : 2,
                }),
              }),
            });
      }
      function n1(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, w.jsxs)("div", {
          className: (0, V.Z)("mini" === n ? n6 : n7, "cursor-auto"),
          children: [
            (0, w.jsxs)(n9, {
              children: [
                (0, w.jsx)(re, {
                  children: (0, w.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, w.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, w.jsx)(n0, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function n2(e) {
        var t = e.option,
          n = e.dropdownRef,
          r = (0, j._)((0, k.useState)(), 2),
          a = r[0],
          i = r[1];
        return ((0, k.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [n]
        ),
        a)
          ? (0, w.jsxs)(n8, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, w.jsx)(ed.ZP, {
                    icon: nU.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, w.jsx)(nS.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70,
                  }),
                (0, w.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return n3(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, w.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var n3 = function (e) {
          return (
            n$.includes(e) &&
            (0, w.jsx)(
              "span",
              {
                className: (0, V.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        n5 = ea.Z.div(nq()),
        n4 = (0, ea.Z)(n5)(nz()),
        n8 = (0, ea.Z)(n5)(nH()),
        n6 =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        n7 =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        n9 = ea.Z.span(nW()),
        re = ea.Z.span(nV()),
        rt = ea.Z.span(nQ()),
        rn = ea.Z.span(nG()),
        rr = n(14444),
        ra = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        ri = "oai/enabledPluginIds",
        ro = (0, S.ZP)(function () {
          var e = Array.from(new Set(ef.m.getItem(ri)));
          return { enabledPluginIds: new Set(e.splice(0, 3)) };
        });
      function rs() {
        var e = (0, rr.C)().installedPlugins,
          t = ro().enabledPluginIds;
        return (0, k.useMemo)(
          function () {
            return e.filter(function (e) {
              return t.has(e.id);
            });
          },
          [t, e]
        );
      }
      function rl(e) {
        e.length > 3 ||
          ro.setState(function () {
            return ef.m.setItem(ri, e), { enabledPluginIds: new Set(e) };
          });
      }
      function ru(e) {
        ro.setState(function (t) {
          if (t.enabledPluginIds.size >= 3) return t;
          var n = (0, eA._)(t.enabledPluginIds).concat([e]);
          return ef.m.setItem(ri, n), { enabledPluginIds: new Set(n) };
        });
      }
      function rd() {
        var e = (0, W._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (rd = function () {
            return e;
          }),
          e
        );
      }
      var rc = k.forwardRef(function (e, t) {
          var n = e.name,
            r = e.placeholder,
            a = e.type,
            i = e.displayName,
            o = e.onChange,
            s = e.onBlur,
            l = e.value,
            u = e.saveOnBlur,
            d = e.icon,
            c = e.onInputIconClick,
            f = e.className,
            g = e.autoComplete,
            h = e.autoFocus,
            m = e.onPressEnter,
            p = (0, j._)((0, k.useState)(l), 2),
            v = p[0],
            x = p[1],
            y = (0, k.useCallback)(
              function (e) {
                null == s || s(e), u && x(e.target.value);
              },
              [s, u]
            ),
            C = (0, k.useCallback)(
              function (e) {
                null == o || o(e), u && x(e.target.value);
              },
              [o, u]
            ),
            _ = (0, k.useCallback)(
              function (e) {
                "Enter" === e.key && m && (e.preventDefault(), m());
              },
              [m]
            );
          (0, k.useEffect)(
            function () {
              x(l);
            },
            [l]
          );
          var M = (0, b._)({}, u ? {} : { value: l }, u ? { value: v } : {});
          return (0,
          w.jsxs)("div", { className: (0, V.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", f), children: [(0, w.jsx)("label", { htmlFor: n, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: i }), (0, w.jsxs)("div", { className: (0, V.Z)(i && "mt-1", "relative"), children: [(0, w.jsx)("input", (0, b._)({ ref: t, type: a, name: n, id: n, className: (0, V.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", d && "pr-6"), placeholder: r, onBlur: y, onChange: C, onKeyDown: _, autoComplete: g, autoFocus: h }, M)), d && (0, w.jsx)(rf, { onClick: c, children: (0, w.jsx)(ed.ZP, { icon: d }) })] })] });
        }),
        rf = ea.Z.button(rd()),
        rg = n(7614),
        rh = n(74686);
      function rm(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, C.NL)(),
          i = (0, rh.D)(P.ZP.updatePluginUserSettings.bind(P.ZP), {
            onSuccess: function (e) {
              rp(e, a, ["installedAip"]), rv(e, a, ["approvedAip"]), t(e);
            },
            onError: n,
            onSettled: r,
          }).mutate;
        return (0, k.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i]
        );
      }
      function rp(e, t, n) {
        t.setQueryData(n, function (t) {
          var n = (0, eA._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return (
            -1 !== r ? (n[r] = e) : n.push(e), { count: n.length, items: n }
          );
        });
      }
      function rv(e, t, n) {
        t.setQueriesData(n, function (t) {
          var n = (0, eA._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return -1 !== r && (n[r] = e), { count: n.length, items: n };
        });
      }
      function rx(e, t) {
        return rb.apply(this, arguments);
      }
      function rb() {
        return (rb = (0, eg._)(function (e, t) {
          var n, r;
          return (0, em.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (n = ""
                    .concat(window.location.origin, "/aip/")
                    .concat(e.id, "/oauth/callback")),
                  [4, P.ZP.pluginOauthRedirect(e.id, n, t)]
                );
              case 1:
                return (
                  (r = a.sent()), (window.location.href = r.redirect_uri), [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      function ry(e) {
        var t = e.manifest.auth;
        if ("oauth" !== t.type || !e.oauth_client_id) return null;
        var n = new URLSearchParams({
          response_type: "code",
          client_id: e.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(e.id, "/oauth/callback"),
          scope: t.scope,
        });
        return (
          t.client_url.includes("slack.com") &&
            (n.delete("scope"), n.append("user_scope", t.scope)),
          "".concat(t.client_url, "?").concat(n)
        );
      }
      function rj() {
        var e,
          t = (0, j._)((0, k.useState)(!1), 2),
          n = t[0],
          r = t[1];
        return {
          fetchManifestAndSpec: (0, k.useCallback)(
            ((e = (0, eg._)(function (e) {
              var t, n, a, i, o, s, l, u, d;
              return (0, em.__generator)(this, function (c) {
                switch (c.label) {
                  case 0:
                    (t = e.domain),
                      (n = e.manifestAccessToken),
                      (a = e.onSuccess),
                      (i = e.onError),
                      (o = tT(t)),
                      (c.label = 1);
                  case 1:
                    if ((c.trys.push([1, 10, 11, 12]), r(!0), !(null != o)))
                      return [3, 3];
                    return [
                      4,
                      (function (e) {
                        return tN.apply(this, arguments);
                      })(o),
                    ];
                  case 2:
                    if (void 0 === (s = c.sent())) return [2];
                    return (
                      a({
                        domain: o,
                        scrapeManifestResponse: {
                          plugin: s.plugin,
                          manifest_validation_info: s.manifest_validation_info,
                        },
                        apiValidationInfo: s.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      P.ZP.scrapePluginManifest({
                        domain: t,
                        manifestAccessToken: n,
                      }),
                    ];
                  case 4:
                    if (!(l = c.sent()).plugin) return [3, 8];
                    c.label = 5;
                  case 5:
                    return (
                      c.trys.push([5, 7, , 8]),
                      [4, P.ZP.getPluginApi({ id: l.plugin.id })]
                    );
                  case 6:
                    return (u = c.sent().api_validation_info), [3, 8];
                  case 7:
                    return c.sent(), [3, 8];
                  case 8:
                    a({
                      domain: t,
                      scrapeManifestResponse: l,
                      apiValidationInfo: u,
                      manifestAccessToken: n,
                    }),
                      (c.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (d = c.sent()), i(null != o ? d : void 0), [3, 12];
                  case 11:
                    return r(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (t) {
              return e.apply(this, arguments);
            }),
            []
          ),
          isLoading: n,
        };
      }
      function rw(e) {
        var t = e.plugin,
          n = t.manifest.name_for_human;
        return (0, w.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, w.jsx)(nS.Z, {
              url: t.manifest.logo_url,
              name: n,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, w.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, w.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: n,
                }),
                (0, w.jsx)("div", {
                  className: "text-sm",
                  children: t.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
      function rC() {
        var e = (0, W._)(["mt-4 flex flex-col gap-4"]);
        return (
          (rC = function () {
            return e;
          }),
          e
        );
      }
      function r_() {
        var e = (0, W._)(["text-sm text-red-500"]);
        return (
          (r_ = function () {
            return e;
          }),
          e
        );
      }
      var rk = ea.Z.div(rC()),
        rM = ea.Z.div(r_());
      function rT(e) {
        var t = e.manifestValidationInfo,
          n = (0, y._)(e, ["manifestValidationInfo"]),
          r = t.manifest_dict,
          a = t.warnings,
          i = t.errors;
        return (0, w.jsx)(
          rI,
          (0, b._)({ name: "manifest", content: r, warnings: a, errors: i }, n)
        );
      }
      function rN(e) {
        var t = e.apiValidationInfo,
          n = (0, y._)(e, ["apiValidationInfo"]),
          r = t.openapi_spec_dict,
          a = t.warnings,
          i = t.errors;
        return (0, w.jsx)(
          rI,
          (0, b._)(
            { name: "OpenAPI spec", content: r, warnings: a, errors: i },
            n
          )
        );
      }
      function rP(e) {
        var t = e.apiValidationInfo,
          n = (0, y._)(e, ["apiValidationInfo"]),
          r = t.api_typescript;
        return r
          ? (0, w.jsx)(
              rS,
              (0, b._)({ text: "Prompt for ChatGPT", content: r }, n)
            )
          : null;
      }
      function rI(e) {
        var t = e.name,
          n = e.content,
          r = e.warnings,
          a = e.errors,
          i = (0, y._)(e, ["name", "content", "warnings", "errors"]),
          o = r && r.length > 0,
          s = a && a.length > 0,
          l = "Validated ".concat(t),
          u = (0, w.jsx)(ed.ZP, { icon: M.UgA, className: "text-green-500" });
        return (
          s
            ? ((l = "Errors in ".concat(t)),
              (u = (0, w.jsx)(ed.ZP, {
                icon: M.q5L,
                className: "text-red-500",
              })))
            : o &&
              ((l = "Warnings in ".concat(t)),
              (u = (0, w.jsx)(ed.ZP, {
                icon: M.bcx,
                className: "text-yellow-500",
              }))),
          (0, w.jsx)(
            rS,
            (0, b._)(
              { icon: u, text: l, content: n, warnings: r, errors: a },
              i
            )
          )
        );
      }
      function rS(e) {
        var t = e.icon,
          n = e.text,
          r = e.content,
          a = e.warnings,
          i = e.errors,
          o = e.expanded,
          s = e.onChangeExpanded,
          l = (0, j._)((0, k.useState)(!1), 2),
          u = l[0],
          d = l[1],
          c = null != o ? o : u,
          f = (0, k.useCallback)(
            function () {
              s
                ? s(!c)
                : d(function (e) {
                    return !e;
                  });
            },
            [c, s]
          );
        return (0, w.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, w.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                t && (0, w.jsx)("div", { children: t }),
                (0, w.jsx)("div", { children: n }),
                (0, w.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: f,
                  children: (0, w.jsx)(ed.ZP, { icon: c ? M.rH8 : M.bTu }),
                }),
              ],
            }),
            c &&
              (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      i &&
                        i.map(function (e, t) {
                          return (0,
                          w.jsx)("div", { className: "text-red-500", children: e }, t);
                        }),
                      a &&
                        a.map(function (e, t) {
                          return (0,
                          w.jsx)("div", { className: "text-yellow-500", children: e }, t);
                        }),
                    ],
                  }),
                  r &&
                    (0, w.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
      function rZ(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, j._)((0, k.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)(), 2),
          l = s[0],
          u = s[1],
          d = (0, j._)((0, k.useState)(!1), 2),
          c = d[0],
          f = d[1],
          g = (0, k.useCallback)(function (e) {
            o(e);
          }, []),
          h = (0, k.useCallback)(function () {
            f(!0);
          }, []);
        return c && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, w.jsx)(rL, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, w.jsx)(rR, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, w.jsx)(rD, {
              loadManifestResult: i,
              onRefetch: g,
              onSubmitAuthInfo: u,
              onReadyToInstall: h,
              onInstallLocalhost: n,
              onClose: r,
            })
          : (0, w.jsx)(rE, { onFetch: g, onClose: r });
      }
      function rE(e) {
        var t = e.onFetch,
          n = e.onClose,
          r = (0, ex.kP)().session,
          a = (0, j._)((0, k.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)("bearer"), 2),
          l = s[0],
          u = s[1],
          d = (0, j._)((0, k.useState)(), 2),
          c = d[0],
          f = d[1],
          g = (0, k.useRef)(null),
          h = (0, k.useRef)(null),
          m = rj(),
          p = m.fetchManifestAndSpec,
          v = m.isLoading;
        (0, k.useEffect)(function () {
          var e;
          null === (e = g.current) || void 0 === e || e.focus();
        }, []);
        var x = (0, k.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          b = (0, k.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          y = (0, k.useCallback)(
            (0, eg._)(function () {
              var e, n, r;
              return (0, em.__generator)(this, function (a) {
                return (r =
                  null === (e = g.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (n = h.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
                      onError: function (e) {
                        return f(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (f("Please provide a domain."), [2]);
              });
            }),
            [p, t, l, i]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: y,
            loading: v,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, w.jsxs)(rk, {
            children: [
              (0, w.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, w.jsxs)(rg.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, w.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, w.jsx)(rc, {
                ref: g,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: y,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, ex.yl)(r.user) &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: x,
                      children: [
                        (0, w.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, w.jsx)(ed.ZP, { icon: i ? M.rH8 : M.bTu }),
                      ],
                    }),
                    i &&
                      (0, w.jsxs)(w.Fragment, {
                        children: [
                          (0, w.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, w.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, w.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, w.jsx)(rF, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: b,
                                  }),
                                  (0, w.jsx)(rF, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: b,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, w.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, w.jsx)("div", { children: "Access token" }),
                              (0, w.jsx)(rc, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: y,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              c && (0, w.jsx)(rM, { children: c }),
            ],
          }),
        });
      }
      function rF(e) {
        var t = e.label,
          n = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, w.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, w.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function rD(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = t.domain,
          l = t.manifestAccessToken,
          u = t.scrapeManifestResponse,
          d = t.apiValidationInfo,
          c = u.plugin,
          f = u.manifest_validation_info,
          g = (0, j._)((0, k.useState)(), 2),
          h = g[0],
          m = g[1],
          p = (0, j._)((0, k.useState)(!1), 2),
          v = p[0],
          x = p[1],
          b = (0, k.useRef)(null),
          y = (0, k.useRef)(null),
          _ = (0, k.useRef)(null),
          M = rj(),
          T = M.fetchManifestAndSpec,
          N = M.isLoading,
          I = (0, C.NL)(),
          S = c && tM(c),
          Z = (null == c ? void 0 : c.manifest.auth.type) === "service_http",
          E = (null == c ? void 0 : c.manifest.auth.type) === "oauth",
          F =
            (f.errors && f.errors.length > 0) ||
            ((null == d ? void 0 : d.errors) &&
              (null == d ? void 0 : d.errors.length) > 0),
          D = (0, k.useCallback)(
            (0, eg._)(function () {
              var e, t, u, d, f;
              return (0, em.__generator)(this, function (g) {
                switch (g.label) {
                  case 0:
                    if (!F) return [3, 1];
                    return (
                      T({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: n,
                        onError: function (e) {
                          return m(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!S) return [3, 2];
                    return rp(c, I, ["installedAip"]), i(c), [3, 15];
                  case 2:
                    if (!Z) return [3, 8];
                    if (
                      !(null === (e = b.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        m("Please provide your service access token."), [2]
                      );
                    g.label = 3;
                  case 3:
                    return (
                      g.trys.push([3, 5, 6, 7]),
                      x(!0),
                      [
                        4,
                        P.ZP.setPluginServiceHttpToken({
                          id: c.id,
                          serviceAccessToken: b.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(g.sent().verification_tokens), [3, 7];
                  case 5:
                    return g.sent(), m("Error setting access token."), [3, 7];
                  case 6:
                    return x(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!E) return [3, 14];
                    if (
                      ((d =
                        null === (t = y.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (f =
                        null === (u = _.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !d || !f)
                    )
                      return m("Please provide your OAuth credentials."), [2];
                    g.label = 9;
                  case 9:
                    return (
                      g.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        P.ZP.setPluginOAuthClientCredentials({
                          id: c.id,
                          clientId: y.current.value,
                          clientSecret: _.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(g.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      g.sent(), m("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return x(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    c ? a(c) : o(), (g.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [Z, E, c, s, l, F, S, I, T, n, r, a, i, o]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: F
              ? "Refetch manifest"
              : S
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: D,
            loading: v || N,
          }),
          secondaryButton:
            (F || Z || E) &&
            (0, w.jsx)(eD.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, w.jsxs)(rk, {
            children: [
              (0, w.jsx)(rT, { manifestValidationInfo: f }),
              d && (0, w.jsx)(rN, { apiValidationInfo: d }),
              c && (0, w.jsx)(rw, { plugin: c }),
              Z &&
                !F &&
                (0, w.jsxs)("div", {
                  children: [
                    (0, w.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, w.jsx)("div", {
                      className: "mt-2",
                      children: (0, w.jsx)(rc, {
                        ref: b,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              E &&
                !F &&
                (0, w.jsxs)("div", {
                  children: [
                    (0, w.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, w.jsx)("div", {
                      className: "mt-2",
                      children: (0, w.jsx)(rc, {
                        ref: y,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                    (0, w.jsx)("div", {
                      className: "mt-2",
                      children: (0, w.jsx)(rc, {
                        ref: _,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: D,
                      }),
                    }),
                  ],
                }),
              h && (0, w.jsx)(rM, { children: h }),
            ],
          }),
        });
      }
      function rR(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, j._)((0, k.useState)(), 2),
          s = o[0],
          l = o[1],
          u = (0, j._)((0, k.useState)(!1), 2),
          d = u[0],
          c = u[1],
          f = (0, k.useCallback)(
            (0, eg._)(function () {
              var e, i;
              return (0, em.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      c(!0),
                      [
                        4,
                        P.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return c(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, r, a]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: f,
            loading: d,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, w.jsxs)(rk, {
            children: [
              (0, w.jsx)(rw, { plugin: t }),
              (0, w.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, w.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, w.jsx)(rM, { children: s }),
            ],
          }),
        });
      }
      function rL(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          r = e.onClose,
          a = (0, k.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, w.jsx)(rk, {
            children: (0, w.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, w.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "up to 15 developers",
                }),
                ". Once ",
                "you're",
                " ready to make your plugin available to everyone, you can",
                " ",
                (0, w.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "submit your plugin for review",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function rA(e) {
        var t = e.onConfirm,
          n = e.onClose;
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, w.jsx)(rk, {
            children: (0, w.jsx)(rg.I, {
              children: (0, w.jsx)(rg.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function rB(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, j._)((0, k.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)(t), 2),
          l = s[0],
          u = s[1],
          d = (0, k.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, w.jsx)(rO, { plugin: l, onInstall: n, onClose: r })
            : (0, w.jsx)(rA, { onConfirm: d, onClose: r })
          : (0, w.jsx)(rU, { onLoad: u, onClose: r });
      }
      function rU(e) {
        var t = e.onLoad,
          n = e.onClose,
          r = (0, k.useRef)(null),
          a = (0, j._)((0, k.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)(), 2),
          l = s[0],
          u = s[1];
        (0, k.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var d = (0, k.useCallback)(
          (0, eg._)(function () {
            var e, n, a;
            return (0, em.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if (tT(n))
                    return (
                      u(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, P.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? t(a) : u("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), u("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, o, u]
        );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: d,
            loading: i,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, w.jsxs)(rk, {
            children: [
              (0, w.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, w.jsx)(rc, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: d,
              }),
              l && (0, w.jsx)(rM, { children: l }),
            ],
          }),
        });
      }
      function rO(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, j._)((0, k.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)(!1), 2),
          l = s[0],
          u = s[1],
          d = (0, k.useRef)(null),
          c = rm({
            onSuccess: function (e) {
              n(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          f = (0, L.hz)(),
          g = t.manifest.name_for_human,
          h = "user_http" === t.manifest.auth.type,
          m = "oauth" === t.manifest.auth.type,
          p = (0, k.useCallback)(
            (0, eg._)(function () {
              var e, n;
              return (0, em.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!m) return [3, 1];
                    if (f.has("new_plugin_oauth_endpoint")) return rx(t), [2];
                    return (
                      (e = ry(t))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(g, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!h) return [3, 7];
                    if (
                      !(null === (n = d.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        P.ZP.setPluginUserHttpToken({
                          id: t.id,
                          userAccessToken: d.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), c(t.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), c(t.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [f, t, g, m, h, c]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: m ? "Log in with ".concat(g) : "Install plugin",
            color: "primary",
            onClick: p,
            loading: l,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, w.jsxs)(rk, {
            children: [
              (0, w.jsx)(rw, { plugin: t }),
              h &&
                (0, w.jsxs)("div", {
                  children: [
                    (0, w.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, w.jsx)("div", {
                      className: "mt-2",
                      children: (0, w.jsx)(rc, {
                        ref: d,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: p,
                      }),
                    }),
                  ],
                }),
              m &&
                (0, w.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, w.jsx)("span", {
                      className: "font-medium",
                      children: g,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, w.jsx)(rM, { children: i }),
            ],
          }),
        });
      }
      var rq = n(96237),
        rz = n(89678),
        rH = n.n(rz),
        rW = n(12155);
      function rV() {
        var e,
          t,
          n = (0, _.useRouter)(),
          r = (0, ex.kP)().session,
          a =
            (null == r
              ? void 0
              : null === (e = r.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          i = !!(null == r
            ? void 0
            : null === (t = r.user) || void 0 === t
            ? void 0
            : t.mfa),
          o = (0, j._)((0, k.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, k.useCallback)(
            (0, eg._)(function () {
              var e;
              return (0, em.__generator)(this, function (t) {
                if (
                  ((e = new URL(n.asPath, window.location.origin).toString()),
                  !a)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!r) throw Error("No session found, cannot enable MFA");
                if ("mocked" === r.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                  );
                return (
                  (0, rW.signIn)(
                    r.authProvider,
                    { callbackUrl: e },
                    (0, b._)(
                      { prompt: "login" },
                      r.authProvider === ex.Ho.OpenAI
                        ? {
                            login_hint: (0, ex.W_)({
                              oai_enforce_mfa: !0,
                              idp: "openai",
                            }),
                          }
                        : { oai_enforce_mfa: "true" }
                    )
                  ),
                  [2]
                );
              });
            }),
            [n.asPath, r, a]
          ),
          d = (0, k.useCallback)(
            (0, eg._)(function () {
              var e;
              return (0, em.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!a)
                      throw Error(
                        "Only username/password users can disable MFA"
                      );
                    if (!r) throw Error("No session found, cannot enable MFA");
                    if ("mocked" === r.authProvider)
                      throw Error(
                        "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                      );
                    return l(!0), [4, P.ZP.deleteMfa()];
                  case 1:
                    return (
                      t.sent(),
                      [
                        4,
                        (0, rW.signOut)({
                          redirect: !1,
                          callbackUrl: "/auth/login?next=".concat(
                            encodeURIComponent(n.asPath)
                          ),
                        }),
                      ]
                    );
                  case 2:
                    return (e = t.sent()), l(!1), n.push(e.url), [2];
                }
              });
            }),
            [a, n, r]
          );
        return {
          setupMfa: u,
          isUsernamePassword: a,
          isLoggedInWithMfa: i,
          removeMfa: d,
          isLoading: s,
        };
      }
      var rQ = n(35101);
      ((i = g || (g = {}))[(i.All = 0)] = "All"),
        (i[(i.Installed = 1)] = "Installed"),
        ((o = h || (h = {})).New = "newly_added"),
        (o.Popular = "most_popular");
      var rG = [
        { id: h.Popular, title: "Popular" },
        { id: h.New, title: "New" },
        { id: g.All, title: "All" },
        { id: g.Installed, title: "Installed" },
      ];
      function r$(e) {
        var t = e.page,
          n = e.numPages,
          r = e.goToPage,
          a = t > 0,
          i = t < n - 1,
          o = (0, k.useCallback)(
            function () {
              r(Math.max(t - 1, 0));
            },
            [t, r]
          ),
          s = (0, k.useCallback)(
            function () {
              r(Math.min(t + 1, n - 1));
            },
            [t, n, r]
          ),
          l = [],
          u = !0,
          d = !1,
          c = void 0;
        try {
          for (
            var f,
              g = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  r = Math.max(0, t - n + 1);
                if (0 === r) return rY(0, t);
                var a = rY(0, e),
                  i = rY(e + 1, t);
                if (r < i.length - 1)
                  i.splice(Math.floor((i.length - r) / 2), r, -1);
                else if (r < a.length - 1)
                  a.splice(Math.floor((a.length - r) / 2), r, -1);
                else {
                  var o = Math.min(i.length - 3, r),
                    s = r - o + 1;
                  i.splice(Math.floor((i.length - o) / 2), o, -1),
                    a.splice(Math.floor((a.length - s) / 2), s, -2);
                }
                return (0, eA._)(a).concat([e], (0, eA._)(i));
              })(t, n)[Symbol.iterator]();
            !(u = (f = g.next()).done);
            u = !0
          )
            !(function () {
              var e = f.value;
              e < 0
                ? l.push(
                    (0, w.jsx)(
                      "div",
                      {
                        role: "button",
                        className: "flex h-5 w-5 items-center justify-center",
                        children: "…",
                      },
                      "ellipsis-".concat(e)
                    )
                  )
                : l.push(
                    (0, w.jsx)(
                      ae,
                      {
                        role: "button",
                        className: (0, V.Z)(
                          "flex h-5 w-5 items-center justify-center",
                          e === t &&
                            "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                        ),
                        onClick: function () {
                          return r(e);
                        },
                        children: e + 1,
                      },
                      e
                    )
                  );
            })();
        } catch (e) {
          (d = !0), (c = e);
        } finally {
          try {
            u || null == g.return || g.return();
          } finally {
            if (d) throw c;
          }
        }
        return (0, w.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, w.jsxs)(ae, {
              role: "button",
              className: (0, V.Z)("flex items-center", !a && "opacity-50"),
              onClick: o,
              $disabled: !a,
              children: [(0, w.jsx)(ed.ZP, { icon: M.YFh }), "Prev"],
            }),
            l,
            (0, w.jsxs)(ae, {
              role: "button",
              className: (0, V.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: ["Next", (0, w.jsx)(ed.ZP, { icon: M.Tfp })],
            }),
          ],
        });
      }
      function rY(e, t) {
        return Array.from({ length: t - e }, function (t, n) {
          return n + e;
        });
      }
      function rJ(e) {
        var t = e.onClose,
          n = rV().setupMfa;
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, w.jsx)(rk, {
            children: (0, w.jsx)(rg.I, {
              children: (0, w.jsx)(rg.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function rK() {
        var e = (0, W._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (rK = function () {
            return e;
          }),
          e
        );
      }
      function rX() {
        var e = (0, W._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (rX = function () {
            return e;
          }),
          e
        );
      }
      var r0 =
          ((m = {}),
          (0, rq._)(m, B._G.Mobile, 8),
          (0, rq._)(m, B._G.Small, 4),
          (0, rq._)(m, B._G.Medium, 4),
          (0, rq._)(m, B._G.Large, 6),
          (0, rq._)(m, B._G.XLarge, 8),
          m),
        r1 = (0, N.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.searchPlaceholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.noSearchResults",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.noSearchResultsHint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
          installUnverifiedPlugin: {
            id: "PluginStoreModal.installUnverifiedPlugin",
            defaultMessage: "Install an unverified plugin",
            description: "Link to dialog to install an unverified plugin",
          },
          developPlugin: {
            id: "PluginStoreModal.developPlugin",
            defaultMessage: "Develop your own plugin",
            description: "Link to dialog to develop your own plugin",
          },
          aboutPlugins: {
            id: "PluginStoreModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Link to learn more about plugins",
          },
        }),
        r2 = h.Popular;
      function r3(e) {
        var t,
          n,
          r,
          a = e.onInstallWithAuthRequired,
          i = e.onClickInstallDeveloper,
          o = e.onClickDevelop,
          s = e.onClickAbout,
          l = e.onClose,
          u = (0, er.Z)(),
          d = (0, L.hz)(),
          c = (0, j._)((0, k.useState)(r2), 2),
          f = c[0],
          h = c[1],
          m = (0, j._)((0, k.useState)(""), 2),
          p = m[0],
          v = m[1],
          x = (0, j._)((0, k.useState)(""), 2),
          y = x[0],
          C = x[1],
          _ = ((n = (t = (0, rr.C)()).isLoading),
          (r = t.installedPlugins),
          {
            availableFilters: (0, k.useMemo)(
              function () {
                return rG.filter(function (e) {
                  return e.id !== g.Installed || r.length > 0;
                });
              },
              [r]
            ),
            isLoading: n,
          }).availableFilters;
        (0, k.useEffect)(
          function () {
            _.some(function (e) {
              return e.id === f;
            }) || h(r2);
          },
          [f, _]
        );
        var N = (0, k.useCallback)(
          rH()(function (e) {
            C(e);
          }, 300),
          []
        );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: l,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: "Plugin store",
          closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: l }),
          children: (0, w.jsxs)(rk, {
            children: [
              _.length > 1 &&
                (0, w.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    _.map(function (e) {
                      return (0, w.jsx)(
                        r4,
                        {
                          selected: f === e.id,
                          onClick: function () {
                            h(e.id);
                          },
                          children: e.title,
                        },
                        e.id
                      );
                    }),
                    (0, w.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, w.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                          children: (0, w.jsx)(ed.ZP, {
                            icon: M.jRj,
                            className:
                              "h-5 w-5 text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, w.jsx)(rc, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: u.formatMessage(r1.searchPlaceholder),
                          value: p,
                          onChange: function (e) {
                            v(e.target.value), h(g.All), N(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, w.jsx)(r5, {
                filter: f,
                query: y,
                onInstallWithAuthRequired: a,
                children: (0, w.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    d.has("tools3_dev") &&
                      (0, w.jsxs)(w.Fragment, {
                        children: [
                          (0, w.jsx)(ae, {
                            onClick: i,
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, r1.installUnverifiedPlugin)
                            ),
                          }),
                          (0, w.jsx)(at, {}),
                          (0, w.jsx)(ae, {
                            onClick: o,
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, r1.developPlugin)
                            ),
                          }),
                          (0, w.jsx)(at, {}),
                        ],
                      }),
                    (0, w.jsx)(ae, {
                      onClick: s,
                      children: (0, w.jsx)(T.Z, (0, b._)({}, r1.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function r5(e) {
        var t = e.filter,
          n = e.query,
          r = e.onInstallWithAuthRequired,
          a = e.children,
          i = r0[(0, B.dQ)()],
          o = (0, j._)((0, k.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (function (e) {
            var t = e.filter,
              n = e.query,
              r = e.page,
              a = e.pageSize,
              i = (0, rQ.Z)({
                category: (function (e) {
                  if (e !== g.All && e !== g.Installed) return e;
                })(t),
                search: n,
                offset: a * r,
                limit: a,
              }),
              o = i.data,
              s = i.isLoading,
              l = (0, rr.C)(),
              u = l.installedPlugins,
              d = l.isLoading,
              c = (0, k.useMemo)(
                function () {
                  return "" !== n
                    ? u
                        .map(function (e) {
                          return {
                            plugin: e,
                            score: (function (e, t) {
                              var n = t.toLowerCase(),
                                r = n.trim().split(/\s+/),
                                a =
                                  e.manifest.description_for_human.toLowerCase(),
                                i = e.manifest.name_for_human.toLowerCase(),
                                o = 0;
                              if (i === n || e.domain.toLowerCase() === n)
                                return 1e3;
                              if (i.startsWith(n)) return 500;
                              if (i.includes(n)) return 100;
                              var s = !0,
                                l = !1,
                                u = void 0;
                              try {
                                for (
                                  var d, c = r[Symbol.iterator]();
                                  !(s = (d = c.next()).done);
                                  s = !0
                                ) {
                                  var f = d.value;
                                  if (i.startsWith(f)) o += 50;
                                  else if (i.includes(f)) o += 10;
                                  else {
                                    if (!a.includes(f)) return 0;
                                    o += 1;
                                  }
                                }
                              } catch (e) {
                                (l = !0), (u = e);
                              } finally {
                                try {
                                  s || null == c.return || c.return();
                                } finally {
                                  if (l) throw u;
                                }
                              }
                              return o;
                            })(e, n),
                          };
                        })
                        .filter(function (e) {
                          return e.score > 0;
                        })
                        .sort(function (e, t) {
                          return t.score - e.score;
                        })
                        .map(function (e) {
                          return e.plugin;
                        })
                    : u.sort(function (e, t) {
                        return e.manifest.name_for_human.localeCompare(
                          t.manifest.name_for_human
                        );
                      });
                },
                [u, n]
              );
            if (t === g.Installed) {
              var f,
                h,
                m,
                p,
                v,
                x,
                b =
                  ((h = (f = { page: r, items: c, pageSize: a }).page),
                  (m = f.items),
                  (p = f.pageSize),
                  (v = Math.ceil(m.length / p)),
                  (x = h * p),
                  { pagesTotal: v, pageItems: m.slice(x, x + p) });
              return {
                isLoading: d,
                items: b.pageItems,
                pagesTotal: b.pagesTotal,
              };
            }
            var y = null != o ? o : { count: void 0, items: void 0 },
              j = y.count;
            return {
              isLoading: s,
              items: y.items,
              pagesTotal: void 0 !== j ? Math.ceil(j / a) : void 0,
            };
          })({ pageSize: i, filter: t, query: n, page: s }),
          d = u.isLoading,
          c = u.items,
          f = u.pagesTotal;
        (0, k.useEffect)(
          function () {
            l(0);
          },
          [t, n]
        );
        var h = (0, j._)((0, k.useState)(!1), 2),
          m = h[0],
          p = h[1];
        return m
          ? (0, w.jsx)(rJ, {
              onClose: function () {
                p(!1);
              },
            })
          : (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(r8, {
                  plugins: null != c ? c : [],
                  numSkeletons: i,
                  query: n,
                  isLoading: d,
                  onInstallWithAuthRequired: r,
                  onRequestMfa: function () {
                    return p(!0);
                  },
                }),
                (0, w.jsxs)("div", {
                  className:
                    "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                  children: [
                    (0, w.jsx)("div", {
                      className:
                        "flex flex-1 justify-start max-lg:justify-center",
                      children:
                        void 0 !== f &&
                        f > 1 &&
                        (0, w.jsx)(r$, { page: s, numPages: f, goToPage: l }),
                    }),
                    a,
                  ],
                }),
              ],
            });
      }
      function r4(e) {
        var t = e.selected,
          n = e.onClick,
          r = e.children;
        return (0, w.jsx)(eu.z, {
          color: t ? "light" : "neutral",
          className: (0, V.Z)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50"
          ),
          onClick: n,
          children: r,
        });
      }
      function r8(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = e.query;
        if (0 === t.length && !r && o)
          return (0, w.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, w.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, w.jsx)(
                  T.Z,
                  (0, eh._)((0, b._)({}, r1.noSearchResultsTitle), {
                    values: { query: o },
                  })
                ),
              }),
              (0, w.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, w.jsx)(T.Z, (0, b._)({}, r1.noSearchResultsHint)),
              }),
            ],
          });
        var s = r
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, w.jsx)(r7, {}, t);
              })
          : t.map(function (e) {
              return (0,
              w.jsx)(r6, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, w.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: s,
        });
      }
      function r6(e) {
        var t,
          n,
          r,
          a,
          i,
          o,
          s,
          l,
          u = e.plugin,
          d = e.onInstallWithAuthRequired,
          c = e.onRequestMfa,
          f = (0, j._)((0, k.useState)(!1), 2),
          g = f[0],
          h = f[1],
          m = (0, j._)((0, k.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = rm({
            onSuccess: function (e) {
              ru(e.id);
            },
            onError: function (e) {
              console.error(e),
                tC.m.danger(
                  "Error installing ".concat(u.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              h(!1);
            },
          }),
          b =
            ((n = (t = {
              onSuccess: function () {},
              onError: function (e) {
                console.error(e),
                  tC.m.danger(
                    "Error uninstalling ".concat(u.manifest.name_for_human, ".")
                  );
              },
              onSettled: function () {
                v(!1);
              },
            }).onSuccess),
            (r = t.onError),
            (a = t.onSettled),
            (i = (0, C.NL)()),
            (o = (0, rh.D)(P.ZP.updatePluginUserSettings.bind(P.ZP), {
              onSuccess: function (e) {
                (function (e, t, n) {
                  t.setQueryData(n, function (t) {
                    var n = (0, eA._)((null == t ? void 0 : t.items) || []),
                      r = n.findIndex(function (t) {
                        return t.id === e.id;
                      });
                    return (
                      -1 !== r && n.splice(r, 1), { count: n.length, items: n }
                    );
                  });
                })(e, i, ["installedAip"]),
                  rv(e, i, ["approvedAip"]),
                  n(e);
              },
              onError: r,
              onSettled: a,
            }).mutate),
            (0, k.useCallback)(
              function (e) {
                o({ pluginId: e, isInstalled: !1 });
              },
              [o]
            )),
          y = (0, ex.kP)().session,
          _ = (0, L.hz)(),
          T = rV().isUsernamePassword,
          N = (0, k.useCallback)(
            function () {
              var e,
                t = u.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == y
                  ? void 0
                  : null === (e = y.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                _.has(es.i) &&
                T
              ) {
                c();
                return;
              }
              if ("oauth" === t) {
                if (_.has("new_plugin_oauth_endpoint")) {
                  rx(u);
                  return;
                }
                var n = ry(u);
                n
                  ? (window.location.href = n)
                  : tC.m.danger(
                      "Missing plugin configuration for ".concat(
                        u.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === t ? d(u) : (h(!0), x(u.id));
            },
            [u, x, d, c, T, y, _]
          ),
          I = (0, k.useCallback)(
            function () {
              v(!0), b(u.id);
            },
            [u, b]
          );
        return (
          (l =
            g || p
              ? (0, w.jsxs)(eu.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    g ? "Installing" : "Uninstalling",
                    (0, w.jsx)(eL.Z, {}),
                  ],
                })
              : (
                  null === (s = u.user_settings) || void 0 === s
                    ? void 0
                    : s.is_installed
                )
              ? (0, w.jsxs)(eu.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: I,
                  children: ["Uninstall", (0, w.jsx)(ed.ZP, { icon: M.$Rx })],
                })
              : (0, w.jsxs)(eu.z, {
                  onClick: N,
                  children: ["Install", (0, w.jsx)(ed.ZP, { icon: M.wzc })],
                })),
          (0, w.jsx)(r9, {
            logo: (0, w.jsx)(nS.Z, {
              url: u.manifest.logo_url,
              name: u.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: tM(u)
              ? (0, w.jsx)(tq, {})
              : "approved" !== u.status
              ? (0, w.jsx)(tO, {})
              : void 0,
            title: (0, w.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: u.manifest.name_for_human,
            }),
            button: l,
            description: u.manifest.description_for_human,
          })
        );
      }
      function r7() {
        return (0, w.jsx)(r9, {
          logo: (0, w.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, w.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, w.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, w.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, w.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, w.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, w.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function r9(e) {
        var t = e.logo,
          n = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, w.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, w.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, w.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, w.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    n
                      ? (0, w.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, w.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      var ae = ea.Z.button(rK(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        at = ea.Z.div(rX());
      function an(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          r = e.onClose;
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, w.jsx)(eD.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, w.jsx)(rk, {
            children: (0, w.jsxs)(rg.I, {
              children: [
                (0, w.jsx)(rg.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, w.jsx)(rg.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation, Custom Instructions, and the country or state you're in to the plugin.",
                }),
                (0, w.jsx)(rg.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var ar = "oai/apps/hasSeenPluginsDisclaimer";
      function aa(e) {
        var t = e.onInstall,
          n = e.onClose,
          r = (0, j._)((0, k.useState)(!!ef.m.getItem(ar)), 2),
          a = r[0],
          i = r[1],
          o = (0, j._)((0, k.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, j._)((0, k.useState)(!1), 2),
          d = u[0],
          c = u[1],
          f = (0, j._)((0, k.useState)(), 2),
          g = f[0],
          h = f[1],
          m = (0, j._)((0, k.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, k.useCallback)(function () {
            i(!0), l(!1), ef.m.setItem(ar, !0);
          }, []),
          b = (0, k.useCallback)(function (e) {
            h(e), c(!0);
          }, []),
          y = (0, k.useCallback)(function () {
            c(!0);
          }, []),
          C = (0, k.useCallback)(function () {
            v(!0);
          }, []),
          _ = (0, k.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, k.useCallback)(
            function (e) {
              ru(e.id), n(), t(e);
            },
            [t, n]
          ),
          T = (0, k.useCallback)(
            function () {
              h(void 0), c(!1), n();
            },
            [n]
          ),
          N = (0, k.useCallback)(
            function () {
              v(!1), n();
            },
            [n]
          );
        return !a || s
          ? (0, w.jsx)(an, { allowClose: !a, onConfirm: x, onClose: n })
          : d
          ? (0, w.jsx)(rB, { plugin: g, onInstall: M, onClose: T })
          : p
          ? (0, w.jsx)(rZ, {
              onClickInstall: b,
              onInstallLocalhost: M,
              onClose: N,
            })
          : (0, w.jsx)(r3, {
              onInstallWithAuthRequired: b,
              onClickInstallDeveloper: y,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: n,
            });
      }
      function ai() {
        var e = (0, W._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (ai = function () {
            return e;
          }),
          e
        );
      }
      function ao(e) {
        var t,
          n = e.theme,
          r = void 0 === n ? "default" : n,
          a = (0, j._)((0, k.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, j._)((0, k.useState)(!1), 2),
          l = s[0],
          u = s[1],
          d = (0, _.useRouter)(),
          c = (0, rr.C)(),
          f = c.installedPlugins,
          g = c.isLoading,
          h = rs(),
          m = (0, k.useRef)(null);
        (0, k.useEffect)(
          function () {
            if (!g) {
              var e = d.query,
                t = e.loginAip,
                n = e.loginSuccess,
                r = (0, y._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  i,
                  o = f.find(function (e) {
                    return e.id === t;
                  });
                o && "true" === n
                  ? (ru(d.query.loginAip),
                    null === (a = m.current) || void 0 === a || a.open())
                  : tC.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == o ? void 0 : o.manifest.name_for_human) &&
                          void 0 !== i
                          ? i
                          : "plugin",
                        "."
                      )
                    ),
                  d.replace({ pathname: d.pathname, query: r });
              }
            }
          },
          [d, f, g]
        );
        var p = (0, k.useCallback)(function () {
            var e;
            null === (e = m.current) || void 0 === e || e.open();
          }, []),
          v = (0, k.useCallback)(function () {
            o(!1);
          }, []),
          x = (0, j._)((0, k.useState)(h), 2),
          b = x[0],
          C = x[1],
          T = (0, k.useCallback)(
            function (e) {
              if (e.length > 3)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !h.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = ra[Symbol.iterator]();
                    !(n = (i = o.next()).done);
                    n = !0
                  ) {
                    var s = (function () {
                      var e = i.value,
                        n = h.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var r = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            tC.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, nL._)(s)) return s.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                rl(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          N = (0, k.useCallback)(function (e) {
            var t;
            null === (t = m.current) || void 0 === t || t.close(),
              "store" === e && o(!0);
          }, []),
          P = (0, k.useCallback)(
            function () {
              C(h),
                eq.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          I = (0, k.useCallback)(
            function () {
              var e = b.filter(function (e) {
                  return !h.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = h.filter(function (e) {
                  return !b.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = t[Symbol.iterator]();
                  !(n = (i = o.next()).done);
                  n = !0
                ) {
                  var s = i.value;
                  eq.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (r) throw a;
                }
              }
              var l = !0,
                u = !1,
                d = void 0;
              try {
                for (
                  var c, f = e[Symbol.iterator]();
                  !(l = (c = f.next()).done);
                  l = !0
                ) {
                  var g = c.value;
                  eq.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: g.id,
                  });
                }
              } catch (e) {
                (u = !0), (d = e);
              } finally {
                try {
                  l || null == f.return || f.return();
                } finally {
                  if (u) throw d;
                }
              }
            },
            [h, b]
          ),
          S = f.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: tM(e)
                ? (0, w.jsx)(tq, {})
                : "approved" !== e.status
                ? (0, w.jsx)(tO, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          Z = S.filter(function (e) {
            return h.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          E = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var F = h.map(function (e, t) {
            return (0,
            w.jsx)(nS.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          E = (0, w.jsx)("div", { className: "flex gap-2", children: F });
        }
        var D = [{ id: "store", label: "Plugin store", icon: M.Rgz }];
        f.length > 3 &&
          (t = (0, w.jsxs)(as, {
            className: (0, V.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", 3, " Enabled"],
          }));
        var R = (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(as, { children: "Loading..." }),
            (0, w.jsx)(n1, { showCheckbox: !0, theme: r }),
            (0, w.jsx)(n1, { showCheckbox: !0, theme: r }),
            (0, w.jsx)(n1, { showCheckbox: !0, theme: r }),
            (0, w.jsx)(n1, { showCheckbox: !0, theme: r }),
            (0, w.jsx)(n1, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(nY, {
              name: "Plugins",
              selectedOptions: Z,
              selectedLabel: E,
              options: S,
              actions: D,
              onChange: T,
              onAction: N,
              onOpen: P,
              onClose: I,
              dropdownRef: m,
              isLoading: g,
              loadingState: R,
              header: t,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, w.jsx)(aa, { onInstall: p, onClose: v }),
          ],
        });
      }
      var as = ea.Z.div(ai()),
        al = n(20525);
      function au(e) {
        var t = e.children,
          n = e.sidebarOpen,
          r = e.onClose;
        return (0, w.jsx)(nB.u.Root, {
          show: n,
          as: k.Fragment,
          children: (0, w.jsxs)(al.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, w.jsx)("div", { className: "fixed inset-0" }),
              (0, w.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, w.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, w.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, w.jsx)(nB.u.Child, {
                      as: k.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, w.jsx)(al.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, w.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: t,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function ad() {
        var e = (0, W._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900",
        ]);
        return (
          (ad = function () {
            return e;
          }),
          e
        );
      }
      function ac() {
        var e = (0, W._)(["whitespace-pre-wrap text-sm"]);
        return (
          (ac = function () {
            return e;
          }),
          e
        );
      }
      function af() {
        var e = (0, W._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200",
        ]);
        return (
          (af = function () {
            return e;
          }),
          e
        );
      }
      function ag(e) {
        var t = e.children,
          n = e.title,
          r = e.icon,
          a = e.isOpen,
          i = e.slideOver,
          o = e.onClose,
          s = (0, w.jsxs)(av, {
            children: [
              (0, w.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, w.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, w.jsx)(ed.ZP, { icon: r }), n],
                  }),
                  (0, w.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, w.jsxs)("button", {
                      type: "button",
                      className:
                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: o,
                      children: [
                        (0, w.jsx)("span", {
                          className: "sr-only",
                          children: "Close sidebar",
                        }),
                        (0, w.jsx)(ed.ZP, {
                          icon: M.q5L,
                          size: "medium",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t,
            ],
          });
        return i
          ? (0, w.jsx)(au, { sidebarOpen: a, onClose: o, children: s })
          : a
          ? s
          : null;
      }
      function ah(e) {
        var t = e.clientThreadId,
          n = e.isOpen,
          r = e.slideOver,
          a = e.onClose,
          i = I.tQ.getThreadCurrentLeafId(t),
          o = (0, I.u9)(t, i),
          s = (0, j._)((0, k.useState)(), 2),
          l = s[0],
          u = s[1],
          d = (0, L.hz)(),
          c = (0, k.useCallback)(function () {
            u(void 0);
          }, []),
          f = (0, k.useCallback)(
            function () {
              var e = I.tQ.getTree(t);
              navigator.clipboard.writeText(e.getTextFromThread(i));
            },
            [i, t]
          );
        if (!d.has("debug")) return null;
        var g = o.map(function (e, t) {
          var n = e.author,
            r = n.role,
            a = n.name;
          return (0, w.jsxs)(
            ab,
            {
              role: "button",
              onClick: function () {
                return u(t);
              },
              children: [
                (0, w.jsxs)("div", {
                  className: "text-xs font-medium uppercase text-gray-400",
                  children: [
                    r,
                    a && a !== r && " (".concat(a, ")"),
                    " -> ",
                    (0, eH.Ej)(e),
                  ],
                }),
                (0, w.jsx)("div", { children: (0, eH.RR)(e) }),
              ],
            },
            e.id
          );
        });
        return (0, w.jsxs)(ag, {
          icon: M.cDN,
          title: "Debug",
          isOpen: n,
          slideOver: r,
          onClose: a,
          children: [
            (0, w.jsxs)("div", {
              className:
                "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
              children: [
                (0, w.jsx)(ap, { clientThreadId: t, messages: o }),
                (0, w.jsx)("div", {
                  children: (0, w.jsx)(eX.Z, {
                    onCopy: f,
                    buttonText: "Copy text",
                  }),
                }),
              ],
            }),
            (0, w.jsx)(ax, { children: g }),
            void 0 !== l &&
              (0, w.jsx)(
                eR.Z,
                {
                  isOpen: !0,
                  onClose: c,
                  type: "success",
                  children: (0, w.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(o[l], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(l)
              ),
          ],
        });
      }
      function am(e, t) {
        var n = JSON.stringify(t) + "\n",
          r = new Blob([n], { type: "application/json" }),
          a = URL.createObjectURL(r),
          i = document.createElement("a");
        (i.href = a),
          (i.download = "messages-".concat(
            I.tQ.getServerThreadId(e),
            ".jsonl"
          )),
          i.click(),
          URL.revokeObjectURL(a);
      }
      function ap(e) {
        var t = e.clientThreadId,
          n = e.messages,
          r = (0, k.useCallback)(
            function () {
              am(t, n);
            },
            [t, n]
          );
        return (0, w.jsxs)(eu.z, {
          onClick: r,
          color: "dark",
          size: "small",
          children: [
            (0, w.jsx)(ed.ZP, { icon: M._hL }),
            "Download raw conversation",
          ],
        });
      }
      var av = ea.Z.div(ad()),
        ax = ea.Z.pre(ac()),
        ab = ea.Z.div(af()),
        ay = n(86273);
      function aj() {
        var e = (0, W._)(["translateY(", ")"]);
        return (
          (aj = function () {
            return e;
          }),
          e
        );
      }
      function aw(e) {
        var t,
          n = e.currentModelId,
          r = (0, L.hz)(),
          a = (0, tJ.fm)(),
          i = (0, tJ.B9)(),
          o = void 0 !== n ? i.get(n) : void 0,
          s = (0, eU.Fl)().isPluginsAvailable,
          l = (0, tJ.iu)();
        return r.has("model_switcher") && l.size > 1 && o
          ? (0, w.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, w.jsx)(nR, { currentModel: o, onModelChange: a }),
                s &&
                  (null == o
                    ? void 0
                    : null === (t = o.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, w.jsx)(ao, { theme: "mini" }),
              ],
            })
          : null;
      }
      var aC = [0, 50],
        a_ = function (e) {
          var t,
            n,
            r,
            a = e.currentModelConfig,
            i = e.clientThreadId,
            o = e.icon,
            s = (0, k.useContext)(A.gB),
            l = (0, R.tN)(R.bM.isThreadHeaderVisible),
            u = (0, nN.c)(0),
            d = (0, k.useRef)(null),
            c = (0, k.useRef)(null),
            f = (0, j._)((0, eB.useAtTop)(), 1)[0],
            g = (0, j._)((0, eB.useAnimating)(), 1)[0],
            h = null == c.current || null == d.current || c.current > d.current,
            m = (0, k.useCallback)(
              function (e) {
                var t = e.scrollTop;
                if (null == d.current || d.current === t) {
                  d.current = t;
                  return;
                }
                (c.current = d.current),
                  (d.current = t),
                  c.current > d.current
                    ? (R.vm.showThreadHeader(),
                      u.set(
                        Math.max(
                          aC[0],
                          u.get() - Math.abs(c.current - d.current)
                        )
                      ))
                    : u.set(
                        Math.min(
                          aC[1],
                          u.get() + Math.abs(c.current - d.current)
                        )
                      );
              },
              [u]
            ),
            p = (0, nP.H)(u, aC, ["0%", "-100%"]),
            v = (0, nI.Y)(aj(), p);
          (0, k.useEffect)(function () {
            R.vm.showThreadHeader();
          }, []),
            (0, eB.useObserveScrollPosition)(s ? void 0 : m);
          var x = l && (f || g || h),
            b = (0, I.Qi)(i),
            y = (0, L.hz)().has(es.b5),
            C = (0, I.Ro)(i);
          void 0 === C && (C = a);
          var M = C.tags
              .filter(function (e) {
                return n$.includes(e);
              })
              .map(function (e) {
                return n3(e);
              }),
            T = (0, tV.v)();
          if (T.length > 0) {
            var N = T.map(function (e, t) {
              return (0,
              w.jsx)(nS.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
            });
            r = (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)("div", { children: "Enabled plugins:" }),
                N,
              ],
            });
          }
          var P = (0, _.useRouter)(),
            S =
              s &&
              (null === (t = P.query) || void 0 === t
                ? void 0
                : null === (n = t.shareParams) || void 0 === n
                ? void 0
                : n[1]) === "moderate",
            Z = (0, R.tN)(function (e) {
              return e.activeModals.has(R.B.DownloadMessages);
            }),
            E = I.tQ.getThreadCurrentLeafId(i),
            F = (0, I.u9)(i, E),
            D = (0, k.useCallback)(
              function () {
                y && am(i, F);
              },
              [i, y, F]
            );
          return (0, w.jsxs)(w.Fragment, {
            children: [
              y &&
                (0, w.jsx)(eR.Z, {
                  type: "success",
                  isOpen: Z,
                  onClose: function () {
                    R.vm.closeModal(R.B.DownloadMessages);
                  },
                  closeButton: (0, w.jsx)(eD.ZP.CloseButton, {
                    onClose: function () {
                      R.vm.closeModal(R.B.DownloadMessages);
                    },
                  }),
                  primaryButton: (0, w.jsx)(eD.ZP.Button, {
                    onClick: D,
                    children: "Download",
                  }),
                  title: "Download chat debug info",
                  secondaryButton: (0, w.jsx)(eD.ZP.Button, {
                    onClick: function () {
                      R.vm.closeModal(R.B.DownloadMessages);
                    },
                    children: "Cancel",
                  }),
                }),
              (0, w.jsx)(ee.E.header, {
                animate: x
                  ? void 0
                  : {
                      top: x ? 0 : "-50px",
                      transition: { duration: 0.2, ease: "easeIn" },
                    },
                style: {
                  boxShadow: !f && x ? "0px 4px 24px 0px #0000000D" : void 0,
                  transform: x ? v : void 0,
                },
                className: "sticky top-0 z-[9] w-full",
                children: (0, w.jsxs)("div", {
                  className:
                    "relative z-20 flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                  onClick: function (e) {
                    y &&
                      !s &&
                      3 === e.detail &&
                      R.vm.openModal(R.B.DownloadMessages);
                  },
                  children: [
                    s &&
                      (0, w.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, w.jsx)("span", { children: "Shared Chat" }),
                          (0, w.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                        ],
                      }),
                    !s && void 0 !== o && (0, w.jsx)(ed.ZP, { icon: o }),
                    (0, w.jsxs)("span", { children: ["Model: ", a.title] }),
                    M,
                    r
                      ? (0, w.jsxs)("div", {
                          className: "flex items-center justify-center gap-1",
                          children: [
                            (0, w.jsx)("span", {
                              className: "px-1",
                              children: "•",
                            }),
                            r,
                          ],
                        })
                      : null,
                    S &&
                      (0, w.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, w.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          (0, w.jsx)("strong", { children: "MODERATION VIEW" }),
                        ],
                      }),
                    !s &&
                      null != b &&
                      (0, w.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, w.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          (0, w.jsx)(ak, { clientThreadId: i }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        ak = function (e) {
          var t = e.clientThreadId,
            n = (0, I.hW)(t),
            r = (0, I.Qi)(t),
            a = (0, k.useMemo)(
              function () {
                if (null == r) return null;
                var e = r.aboutUserMessage,
                  t = r.aboutModelMessage,
                  n = r.fallback;
                return null != e && null != t
                  ? (0, w.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        null !== e &&
                          "" !== e &&
                          (0, w.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, w.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, ay.sY.aboutYouHelpText)
                                ),
                              }),
                              (0, w.jsx)("div", {
                                className:
                                  "flex flex-row gap-1 rounded border border-gray-200 bg-gray-50 px-4 py-3 text-gray-400 dark:bg-gray-800",
                                children: e,
                              }),
                            ],
                          }),
                        null !== t &&
                          "" !== t &&
                          (0, w.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, w.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, ay.sY.modelHelpText)
                                ),
                              }),
                              (0, w.jsx)("div", {
                                className:
                                  "flex flex-row gap-1 rounded border border-gray-200 bg-gray-50 px-4 py-3 text-gray-400 dark:bg-gray-800",
                                children: t,
                              }),
                            ],
                          }),
                      ],
                    })
                  : null != n
                  ? n
                  : null;
              },
              [r]
            );
          return null === r
            ? null
            : (0, w.jsxs)(w.Fragment, {
                children: [
                  n
                    ? (0, w.jsx)(T.Z, (0, b._)({}, aM.chatPreferencesMismatch))
                    : (0, w.jsx)(T.Z, (0, b._)({}, aM.chatPreferencesCurrent)),
                  (0, w.jsx)(nZ, {
                    contentClassName:
                      "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                    side: "bottom",
                    sideOffset: 8,
                    content: (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)("div", {
                          className: "mb-5",
                          children: (0, w.jsx)(eF, {
                            children: n
                              ? (0, w.jsx)(
                                  T.Z,
                                  (0, b._)(
                                    {},
                                    aM.chatPreferencesMismatchWarning
                                  )
                                )
                              : (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, aM.chatPreferencesNote)
                                ),
                          }),
                        }),
                        a,
                      ],
                    }),
                    children: (0, w.jsxs)("div", {
                      className: "cursor-pointer pt-0.5",
                      children: [
                        (0, w.jsx)(ed.HV, {
                          className:
                            "ml-0.5 mt-0.5 h-4 w-4 flex-shrink-0 text-gray-600 dark:text-gray-200 sm:mb-0.5 sm:mt-0 sm:h-5 sm:w-5",
                        }),
                        (0, w.jsx)(nT.T, {
                          children: (0, w.jsx)(
                            T.Z,
                            (0, b._)({}, aM.chatPreferencesInfoLabel)
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              });
        },
        aM = (0, N.vU)({
          chatPreferencesCurrent: {
            id: "ThreadSettings.chatPreferencesCurrent",
            defaultMessage: "Custom instructions: On",
            description:
              "Label in the thread header for Custom instructions that are up to date",
          },
          chatPreferencesMismatch: {
            id: "ThreadSettings.chatPreferencesMismatch",
            defaultMessage: "Custom instructions: Previous version",
            description:
              "Label in the thread header for Custom instructions that are up to not matching the user's current preferences",
          },
          chatPreferencesInfoLabel: {
            id: "ThreadSettings.chatPreferencesInfoLabel",
            defaultMessage: "Custom instructions details",
            description: "Label for the Custom instructions info icon",
          },
          chatPreferencesMismatchWarning: {
            id: "ThreadSettings.chatPreferencesMismatchWarning",
            defaultMessage:
              "Note: your current Custom Instructions will not be reflected in this chat.",
            description:
              "Label in the popover for Custom Instructions when there is a mismatch between the Custom Instructions used to start the thread and the Custom Instructions currently enabled",
          },
          chatPreferencesNote: {
            id: "ThreadSettings.chatPreferencesNote",
            defaultMessage:
              "Note: Custom Instructions can only be changed at the start of a chat",
            description: "Label in the popover for Custom Instructions",
          },
        });
      function aT() {
        var e = (0, W._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (aT = function () {
            return e;
          }),
          e
        );
      }
      function aN() {
        var e = (0, W._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (aN = function () {
            return e;
          }),
          e
        );
      }
      function aP() {
        var e = (0, W._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (aP = function () {
            return e;
          }),
          e
        );
      }
      function aI() {
        var e = (0, W._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (aI = function () {
            return e;
          }),
          e
        );
      }
      function aS() {
        var e = (0, W._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (aS = function () {
            return e;
          }),
          e
        );
      }
      var aZ = (0, N.vU)({
        codeInterpreterSupportDisclaimer: {
          id: "sharedConversation.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharedConversation.userContextCustomProfileDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds.",
          description:
            "Disclaimer about our lack of support for custom profiles with shared links",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function aE(e) {
        var t = e.clientThreadId,
          n = (0, I.qA)(t),
          r = (0, I.je)(t),
          a = (0, I.qN)(function (e) {
            return I.iN.getThreadCreateTime(t, e);
          }),
          i = (0, I.JI)(t),
          o = (0, k.useMemo)(
            function () {
              return eE(i);
            },
            [i]
          ),
          s = (0, I.aS)(t);
        return (0, w.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
          children: [
            (0, w.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: n,
            }),
            (null != r || null != a) &&
              (0, w.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, w.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, w.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, w.jsx)(N.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, w.jsx)(aF, {
              shouldShowCodeInterpreterDisclaimer: o,
              shouldShowUserContextCustomProfileDisclaimer: s,
            }),
          ],
        });
      }
      var aF = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          n = e.shouldShowUserContextCustomProfileDisclaimer;
        return t && n
          ? (0, w.jsx)("div", {
              className: "mt-4",
              children: (0, w.jsx)(eF, {
                icon: M.H33,
                children: (0, w.jsx)(
                  T.Z,
                  (0, b._)(
                    {},
                    aZ.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              }),
            })
          : (0, w.jsxs)(w.Fragment, {
              children: [
                t &&
                  (0, w.jsx)("div", {
                    className: "mt-4",
                    children: (0, w.jsx)(eF, {
                      icon: M.H33,
                      color: "gray",
                      children: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, aZ.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  }),
                n &&
                  (0, w.jsx)("div", {
                    className: "mt-4",
                    children: (0, w.jsx)(eF, {
                      icon: M.H33,
                      color: "gray",
                      children: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, aZ.userContextCustomProfileDisclaimer)
                      ),
                    }),
                  }),
              ],
            });
      };
      function aD(e) {
        var t,
          n = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          o = e.onDeleteNode,
          s = e.onRequestCompletion,
          l = e.clientThreadId,
          u = e.conversationLeafId,
          d = e.isNewThread,
          c = e.activeRequests,
          f = e.currentThreadModel,
          g = e.inlineEmbeddedDisplay,
          h = e.initiallyHighlightedMessageId,
          m = e.promptTextareaRef,
          p = (0, k.useContext)(A.gB),
          v = (0, eB.useScrollToBottom)(),
          x = (0, j._)((0, eB.useSticky)(), 1)[0],
          b = (0, L.hz)(),
          y = (0, eU.Fl)().isBetaFeaturesUiEnabled,
          C = (0, I.Kt)(l),
          _ = (0, L.$T)(),
          T = (0, tJ.iu)(),
          N = (0, tJ.ZL)(),
          P = (0, tJ.Xy)(f, l),
          S = (0, R.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          Z = b.has("model_switcher") && T.size > 1,
          E = d && !_ && Z,
          F = (0, j._)((0, k.useState)(!1), 2),
          D = F[0],
          B = F[1],
          U = (0, nD.Ri)(P.id),
          O = (0, I.U0)(l, u);
        (0, k.useEffect)(
          function () {
            if (C) {
              var e = setTimeout(function () {
                B(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            B(!1);
          },
          [C]
        );
        var q = b.has(es.FZ),
          z =
            !y && P.tags.includes(tJ.S.GPT_4)
              ? "black"
              : null !== (t = null == U ? void 0 : U.backgroundColor) &&
                void 0 !== t
              ? t
              : void 0,
          H = (0, eA._)(Array(O).keys()).map(function (e) {
            return (0,
            w.jsx)(t9, { isFinalTurn: e === O - 1, turnIndex: e, clientThreadId: l, conversationLeafId: u, onChangeItemInView: n, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: o, onRequestCompletion: s, onUpdateNode: a, activeRequests: c, currentModelId: P.id, showInlineEmbeddedDisplay: g, initiallyHighlightedMessageId: h, avatarColor: z }, e);
          });
        return (0, w.jsxs)(w.Fragment, {
          children: [
            E &&
              (0, w.jsxs)(aB, {
                children: [
                  (0, w.jsx)(aw, { currentModelId: P.id }),
                  (0, w.jsxs)(aU, {
                    children: ["ChatGPT", (0, w.jsx)(eO.ZP, {})],
                  }),
                ],
              }),
            (0, w.jsxs)(aR, {
              children: [
                d && !_ && !N && !Z && (0, w.jsx)(nM, { promptTextareaRef: m }),
                D && (0, w.jsx)(eL.Z, { className: "mt-4 self-center" }),
                !d &&
                  (p || (!_ && Z)) &&
                  !g &&
                  (0, w.jsx)(a_, {
                    icon: y ? (null == U ? void 0 : U.icon) : void 0,
                    currentModelConfig: P,
                    clientThreadId: l,
                  }),
                q
                  ? H.length > 0 &&
                    (0, w.jsx)("div", {
                      className: (0, V.Z)(
                        "flex flex-col items-center",
                        S ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, w.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          p && !g && (0, w.jsx)(aE, { clientThreadId: l }),
                          H,
                        ],
                      }),
                    })
                  : (0, w.jsxs)(w.Fragment, {
                      children: [
                        p &&
                          !g &&
                          (0, w.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, w.jsx)(aE, { clientThreadId: l }),
                          }),
                        H,
                      ],
                    }),
                !E && !g && (0, w.jsx)(aL, {}),
              ],
            }),
            !x &&
              !g &&
              (0, w.jsx)(aA, {
                onClick: v,
                children: (0, w.jsx)(ed.ZP, { icon: M.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var aR = ea.Z.div(aT()),
        aL = ea.Z.div(aN()),
        aA = ea.Z.button(aP()),
        aB = ea.Z.div(aI()),
        aU = ea.Z.h1(aS());
      function aO() {
        var e = (0, W._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (aO = function () {
            return e;
          }),
          e
        );
      }
      function aq() {
        var e = (0, W._)(["grow flex-1 overflow-hidden"]);
        return (
          (aq = function () {
            return e;
          }),
          e
        );
      }
      function az() {
        var e = (0, W._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (az = function () {
            return e;
          }),
          e
        );
      }
      function aH() {
        var e = (0, W._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (aH = function () {
            return e;
          }),
          e
        );
      }
      function aW() {
        var e = (0, W._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (aW = function () {
            return e;
          }),
          e
        );
      }
      function aV() {
        var e = (0, W._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (aV = function () {
            return e;
          }),
          e
        );
      }
      function aQ() {
        var e = (0, W._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (aQ = function () {
            return e;
          }),
          e
        );
      }
      var aG = (0, N.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Chat",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        existingShareDescription: {
          id: "sharingModal.exisitingDescription",
          defaultMessage:
            "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
          description:
            "Description in sharing modal when viewing an existing link",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
        confirmDeleteLink: {
          id: "sharingModal.confirmDeleteLink",
          defaultMessage: "Are you sure you want to delete the share link?",
          description: "Confirmation message when deleting share link",
        },
        codeInterpreterSupportDisclaimer: {
          id: "sharingModal.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view Code Interpreter images or download files.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharingModal.userContextCustomProfileDisclaimer",
          defaultMessage:
            "Your Custom Instructions won’t be shared with viewers.",
          description:
            "Disclaimer about our policy to not copy over custom profile data which could have PII",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharingModal.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view images, download files, or custom profiles.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function a$(e) {
        var t = e.serverThreadId,
          n = e.activeRequests,
          r = (0, I.oq)(t),
          a = (0, j._)(
            (0, k.useState)(function () {
              return (0, eb.Z)(function (e, t) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          i = 0 === n.size && "root" !== r,
          o = (0, k.useRef)(!1);
        return (
          (0, k.useEffect)(
            function () {
              if (i && !o.current) {
                o.current = !0;
                var e = I.tQ.getThreadCurrentLeafId(t),
                  n = I.tQ.getTree(t).getMessageId(e);
                P.ZP.createShareLink({
                  current_node_id: n,
                  conversation_id: t,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    a.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof ew.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (tC.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        R.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, w.jsx)(ey.Provider, {
            value: a,
            children: (0, w.jsx)(aK, (0, b._)({}, e)),
          })
        );
      }
      function aY(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var aJ =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function aK(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.serverThreadId,
          s = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!K ||
              window.confirm(d.formatMessage(aG.confirmCloseWithChanges))) &&
              R.vm.closeSharingModal();
          },
          d = (0, er.Z)(),
          c = (0, k.useRef)(null),
          f = (0, j._)((0, k.useState)(!1), 2),
          g = f[0],
          h = f[1],
          m = (0, j._)((0, k.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, j._)((0, k.useState)(!1), 2),
          y = x[0],
          C = x[1],
          _ = (0, k.useContext)(ey),
          S = ej(function (e) {
            return e.title;
          }),
          Z = ej(function (e) {
            return e.shareLinkId;
          }),
          E = ej(function (e) {
            return e.shareLinkUrl;
          }),
          F = ej(function (e) {
            return e.isAnonymous;
          }),
          D = ej(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          L = ej(function (e) {
            return e.currentNodeId;
          }),
          B = ej(function (e) {
            return e.isPublic;
          }),
          U =
            ej(function (e) {
              return e.linkAlreadyExisted;
            }) && B,
          O = ej(function (e) {
            return e.linkError;
          }),
          q = ej(function (e) {
            return e.moderationState;
          }),
          z = null != q && aY(q),
          H = (0, k.useRef)(),
          W = (0, k.useRef)();
        (0, k.useEffect)(
          function () {
            U && ((H.current = S), (W.current = F));
          },
          [U]
        );
        var Q = (0, ex.kP)().session,
          G = (0, I.JI)(o, L),
          $ = (0, k.useMemo)(
            function () {
              return eE(G);
            },
            [G]
          ),
          Y = (0, I.aS)(o),
          J =
            ((t = (0, eg._)(function (e, t) {
              var n, r, a, i, o, s, l;
              return (0, em.__generator)(this, function (u) {
                switch (u.label) {
                  case 0:
                    v(!0),
                      (r = (n = _.getState()).highlightedMessageId),
                      (a = n.title),
                      (i = n.isDeleted),
                      (o = n.isAnonymous);
                    try {
                      navigator.clipboard.writeText(t);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        tC.m.warning("Failed to copy link to clipboard"),
                        v(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        P.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 2:
                    if (aY((s = u.sent().moderation_state)))
                      return _.setState({ moderationState: s }), [2];
                    return (
                      _.setState({ isPublic: !0, moderationState: s }),
                      C(!0),
                      setTimeout(function () {
                        R.vm.closeSharingModal(),
                          tC.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ew.Q0 &&
                        "string" == typeof l.message &&
                        _.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return v(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          K = U && (S !== H.current || F !== W.current),
          X = (0, w.jsxs)(eD.ZP.Button, {
            onClick: function () {
              return J(Z, E);
            },
            color: "primary",
            disabled: p || y || null == Z || null == E || null != O || z,
            children: [
              y
                ? (0, w.jsx)(ed.ZP, { icon: M.LSm })
                : p
                ? (0, w.jsx)(eL.Z, {})
                : (0, w.jsx)(ed.ZP, { icon: M.XKb }),
              y
                ? "Copied!"
                : p
                ? "Copying..."
                : K
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          ee = (0, k.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                _.setState({
                  title:
                    null === (t = c.current) || void 0 === t ? void 0 : t.value,
                }),
                h(!1);
            },
            [_]
          ),
          et = (0, k.useCallback)(
            function (e) {
              "Enter" === e.key && ee();
            },
            [ee]
          ),
          ea =
            ((n = (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      P.ZP.deleteShareLink({
                        share_id: _.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          tC.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          R.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          ei =
            ((r = (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return (
                  _.setState({ isAnonymous: !0 }),
                  I.qN.setState(function (e) {
                    e.threads[o].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          eo =
            ((a = (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return (
                  _.setState({ isAnonymous: !1 }),
                  I.qN.setState(function (e) {
                    var t;
                    e.threads[o].initialThreadData.authorName =
                      null == Q
                        ? void 0
                        : null === (t = Q.user) || void 0 === t
                        ? void 0
                        : t.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          es = (0, w.jsxs)(a3, {
            $active: g,
            children: [
              (0, w.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== S
                    ? g
                      ? (0, w.jsx)(a4, {
                          ref: c,
                          type: "text",
                          defaultValue: null != S ? S : "",
                          autoFocus: !0,
                          onKeyDown: et,
                          onBlur: ee,
                        })
                      : (0, w.jsxs)(a5, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            S,
                            g || null == S || U
                              ? null
                              : (0, w.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, w.jsx)(ed.ZP, {
                                    icon: M.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, w.jsx)("div", { className: "h-6" }),
                  (0, w.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !F &&
                        (0, w.jsxs)("span", {
                          children: [
                            null == Q
                              ? void 0
                              : null === (i = Q.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, w.jsx)(N.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, w.jsx)(a8, {
                children: (0, w.jsxs)(ec.fC, {
                  children: [
                    (0, w.jsx)(ec.xz, {
                      asChild: !0,
                      children: (0, w.jsx)(eu.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, w.jsx)(ev.JEI, {}),
                      }),
                    }),
                    (0, w.jsx)(ec.h_, {
                      children: (0, w.jsxs)(ec.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          F &&
                            (0, w.jsx)(eu.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eo,
                              children: (0, w.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, w.jsx)(ed.ZP, {
                                    icon: M.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, w.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !F &&
                            (0, w.jsx)(eu.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ei,
                              children: (0, w.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, w.jsx)(ed.ZP, {
                                    icon: M.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, w.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          U &&
                            (0, w.jsx)(eu.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ea,
                              children: (0, w.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, w.jsx)(ed.ZP, {
                                    icon: M.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, w.jsx)("div", {
                                    children: "Delete Link",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          el = O;
        return (
          null == el &&
            ((null == q ? void 0 : q.has_been_auto_blocked) ||
              (null == q ? void 0 : q.has_been_auto_moderated) ||
              (null == q ? void 0 : q.has_been_blocked)) &&
            (el = (0, w.jsx)(T.Z, (0, b._)({}, aG.moderationBlocked))),
          (0, w.jsxs)(eR.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: d.formatMessage(aG.sharingModalTitle),
            closeButton: (0, w.jsx)(eD.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != el &&
                (0, w.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: el,
                }),
              (0, w.jsx)("div", {
                className: (0, V.Z)("w-full"),
                children: (0, w.jsx)("p", {
                  className: (0, V.Z)("mb-6 text-gray-500"),
                  children: U
                    ? (0, w.jsx)(
                        T.Z,
                        (0, eh._)((0, b._)({}, aG.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, w.jsx)("a", {
                                href: E,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, w.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      d.formatMessage(aG.confirmDeleteLink)
                                    ) && ea();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, w.jsx)(T.Z, (0, b._)({}, aG.sharingModalDescription)),
                }),
              }),
              (0, w.jsx)(aX, {
                shouldShowCodeInterpreterDisclaimer: $,
                shouldShowUserContextCustomProfileDisclaimer: Y,
              }),
              (0, w.jsx)(a2, {
                children: (0, w.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, w.jsx)(a0, {
                    children: (0, w.jsxs)(a1, {
                      children: [
                        (0, w.jsx)(ep.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != L
                              ? (0, w.jsx)(A.gB.Provider, {
                                  value: !0,
                                  children: (0, w.jsx)(aD, {
                                    onChangeItemInView: en(),
                                    onRequestMoreCompletions: en(),
                                    onUpdateNode: en(),
                                    onChangeRating: en(),
                                    onDeleteNode: en(),
                                    onRequestCompletion: en(),
                                    clientThreadId: o,
                                    conversationLeafId: L,
                                    activeRequests: s,
                                    currentThreadModel: l,
                                    inlineEmbeddedDisplay: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: D,
                                  }),
                                })
                              : (0, w.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, w.jsx)(eL.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        es,
                      ],
                    }),
                  }),
                }),
              }),
              (0, w.jsx)(eD.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: X,
                secondaryButton: (0, w.jsx)("div", {
                  children: (0, w.jsxs)("a", {
                    href: aJ,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      d.formatMessage(aG.sharingModalMoreInfo),
                      (0, w.jsx)(ed.ZP, { icon: M.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var aX = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            n = e.shouldShowUserContextCustomProfileDisclaimer;
          return t && n
            ? (0, w.jsx)(eF, {
                icon: M.H33,
                children: (0, w.jsx)(
                  T.Z,
                  (0, b._)(
                    {},
                    aG.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              })
            : (0, w.jsxs)(w.Fragment, {
                children: [
                  t &&
                    (0, w.jsx)(eF, {
                      icon: M.H33,
                      children: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, aG.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  n &&
                    (0, w.jsxs)("p", {
                      className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                      children: [
                        (0, w.jsx)(ed.ZP, {
                          icon: M.H33,
                          size: "small",
                          className: "mt-1 flex-shrink-0",
                        }),
                        (0, w.jsx)(
                          T.Z,
                          (0, b._)({}, aG.userContextCustomProfileDisclaimer)
                        ),
                      ],
                    }),
                ],
              });
        },
        a0 = ea.Z.main(aO()),
        a1 = ea.Z.div(aq()),
        a2 = ea.Z.div(az()),
        a3 = ea.Z.div(aH(), function (e) {
          return e.$active, "";
        }),
        a5 = ea.Z.div(aW()),
        a4 = ea.Z.input(aV()),
        a8 = ea.Z.div(aQ());
      function a6() {
        var e = (0, W._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (a6 = function () {
            return e;
          }),
          e
        );
      }
      var a7 = (0, N.vU)({
          learnMore: {
            id: "sharedConversationAnnouncement.learnMore",
            defaultMessage: "Learn more",
            description: "Link text to shared links help page",
          },
          shareConversations: {
            id: "sharedConversationAnnouncement.shareConversations",
            defaultMessage: "Share a link to this chat",
            description:
              "Text displayed in tooltip announcing shared conversations",
          },
          new: {
            id: "sharedConversationAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        a9 = "oai/apps/announcement/sharedConversations";
      function ie(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ef.m.setItem(a9, e), o(e);
          },
          r = (0, B.w$)(),
          a = (0, j._)(
            (0, k.useState)(function () {
              var e = ef.m.getItem(a9);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, k.useRef)(null),
          l = (0, er.Z)();
        return (0, w.jsxs)(ec.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, w.jsx)(ec.xz, { asChild: !0, ref: s, children: t }),
            (0, w.jsx)(ec.h_, {
              children: (0, w.jsxs)(ec.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = s.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, w.jsxs)("div", {
                    children: [
                      (0, w.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, w.jsx)(it, {
                            children: (0, w.jsx)(T.Z, (0, b._)({}, a7.new)),
                          }),
                          (0, w.jsx)("div", {
                            className: "font-medium",
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, a7.shareConversations)
                            ),
                          }),
                          (0, w.jsx)(ec.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, w.jsx)(ed.ZP, { icon: M.q5L }),
                          }),
                        ],
                      }),
                      (0, w.jsxs)("a", {
                        href: aJ,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(a7.learnMore),
                          (0, w.jsx)(ed.ZP, { icon: M.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.jsx)(ec.Eh, {
                    asChild: !0,
                    children: (0, w.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var it = ea.Z.span(a6()),
        ir = n(44009),
        ia = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        ii = "conversationHistory";
      function io() {
        var e,
          t = (0, L.hz)().has(es.Ud),
          n = (0, L.$T)(),
          r = (0, ex.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = !t && !!a && !n,
          o = (0, ir.N)({
            queryKey: [ii],
            queryFn: function (e) {
              var t = e.pageParam;
              return P.ZP.getConversations(
                t || 0,
                28,
                null == r ? void 0 : r.accessToken
              );
            },
            getNextPageParam: function (e) {
              var t = e.offset + e.limit;
              return t < e.total ? t : void 0;
            },
            enabled: i,
          }),
          s = o.data,
          l = o.fetchNextPage,
          u = o.hasNextPage,
          d = o.isInitialLoading,
          c = o.isFetchingNextPage,
          f = o.isError,
          g = (0, k.useMemo)(
            function () {
              return null !==
                (e =
                  null == s
                    ? void 0
                    : s.pages.flatMap(function (e) {
                        return e.items;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [s]
          );
        return {
          data: s,
          conversations: g,
          fetchNextPage: l,
          hasNextPage: u,
          isLoading: d,
          isFetchingNextPage: c,
          isError: i && f,
        };
      }
      function is() {
        var e = (0, C.NL)();
        return (0, k.useCallback)(
          function () {
            e.invalidateQueries([ii]);
          },
          [e]
        );
      }
      function il() {
        var e = (0, W._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (il = function () {
            return e;
          }),
          e
        );
      }
      function iu() {
        var e = (0, W._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (iu = function () {
            return e;
          }),
          e
        );
      }
      function id() {
        var e = (0, W._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }
      function ic() {
        var e = (0, W._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (ic = function () {
            return e;
          }),
          e
        );
      }
      function ig() {
        var e = (0, W._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (ig = function () {
            return e;
          }),
          e
        );
      }
      function ih() {
        var e = (0, W._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      function im() {
        var e = (0, W._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      function ip() {
        var e = (0, W._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (ip = function () {
            return e;
          }),
          e
        );
      }
      function iv() {
        var e = (0, W._)(["p-1 hover:text-white"]);
        return (
          (iv = function () {
            return e;
          }),
          e
        );
      }
      var ix = (0, N.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        ib = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function iy(e) {
        var t,
          n,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          o = (0, er.Z)(),
          s = (0, j._)((0, k.useState)(!1), 2),
          l = s[0],
          u = s[1],
          d = (0, j._)((0, k.useState)(0), 2),
          c = d[0],
          f = d[1],
          g = (0, el.Z)(),
          h = io(),
          m = h.conversations,
          p = h.hasNextPage,
          v = h.fetchNextPage,
          x = h.isLoading,
          y = h.isFetchingNextPage,
          C = h.isError,
          _ = (0, L.hz)().has(es.DY),
          M = (0, k.useRef)(null),
          N = (0, k.useCallback)(
            function (e) {
              var t;
              _ &&
                !x &&
                null != e &&
                (null === (t = M.current) || void 0 === t || t.disconnect(),
                (M.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && p && v();
                })),
                M.current.observe(e));
            },
            [_, x, p, v]
          );
        (0, k.useEffect)(function () {
          return function () {
            var e;
            null === (e = M.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var P = is();
        (0, k.useEffect)(function () {
          ef.m.removeItem(ia);
        }, []);
        var I =
          ((t = (0, k.useRef)()),
          (n = (0, k.useRef)()),
          ((0, k.useEffect)(
            function () {
              (t.current = n.current), (n.current = m);
            },
            [m]
          ),
          m === n.current)
            ? t.current
            : n.current);
        (0, k.useEffect)(
          function () {
            g(function () {
              f(c + 1);
            }, (0, G.Z)((0, $.Z)(), Date.now()) + 1e3);
          },
          [c, g]
        );
        var S = 0 === m.length,
          Z = (0, k.useMemo)(
            function () {
              return m.reduce(
                function (e, t) {
                  var n,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (n = t.update_time) && void 0 !== n
                            ? n
                            : t.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, Q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(t);
                  else if (i <= 1) e.recent.yesterday.items.push(t);
                  else if (i <= 7) e.recent.lastSeven.items.push(t);
                  else if (i <= 30) e.recent.lastThirty.items.push(t);
                  else if ((0, K.Z)(a)) {
                    var s = (0, J.Z)(a),
                      l = (0, Y.Z)(a),
                      u = "".concat(s, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(t)
                      : (e.dynamicMonths[u] = {
                          label: o.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var d = (0, J.Z)(a),
                      c = "".concat(d, "-");
                    e.dynamicYears[c]
                      ? e.dynamicYears[c].items.push(t)
                      : (e.dynamicYears[c] = {
                          label: o.formatDate(a, { year: "numeric" }),
                          items: [t],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ix.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ix.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ix.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ix.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [c, m]
          );
        return (0, w.jsxs)(ij, {
          $centered: x || (C && S),
          children: [
            S && x && (0, w.jsx)(eL.Z, { className: "m-auto" }),
            S &&
              C &&
              (0, w.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, w.jsx)(T.Z, (0, b._)({}, ix.unableToLoadHistory)),
                  !l &&
                    (0, w.jsx)("div", {
                      className: "mt-1",
                      children: (0, w.jsx)(eu.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), P();
                        },
                        children: (0, w.jsx)(T.Z, (0, b._)({}, ix.retryButton)),
                      }),
                    }),
                ],
              }),
            !x &&
              (0, w.jsx)("div", {
                children: (0, w.jsx)(X.M, {
                  initial: !1,
                  children: [Z.recent, Z.dynamicMonths, Z.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, w.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, j._)(e, 2),
                              n = t[0],
                              o = t[1],
                              s = o.items,
                              l = o.label;
                            if ("today" !== n && !s.length) return null;
                            var u = !!s.find(function (e) {
                              var t;
                              return (
                                m.length > 0 &&
                                e.id ===
                                  (null === (t = m[0]) || void 0 === t
                                    ? void 0
                                    : t.id)
                              );
                            });
                            return (0, w.jsxs)(
                              ee.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(n),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  s.length > 0 &&
                                    (0, w.jsx)(ee.E.div, {
                                      className: (0, V.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, w.jsx)(iT, { children: l }),
                                    }),
                                  (0, w.jsx)("ol", {
                                    children: s.map(function (e, t) {
                                      var n = r === e.id,
                                        o =
                                          null == I
                                            ? void 0
                                            : I.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      w.jsx)(ee.E.li, { className: (0, V.Z)("relative", u && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !o }, variants: ib, initial: "initial", animate: "animate", exit: "exit", children: (0, w.jsx)(iw, { id: e.id, title: e.title, active: n, onNewThread: a, setActiveRequests: i, forwardRef: p && m[m.length - 5 - 1].id === e.id ? N : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        "category-".concat(t)
                      );
                    }
                  ),
                }),
              }),
            _
              ? y &&
                (0, w.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, w.jsx)(eL.Z, {}),
                })
              : (0, w.jsx)(w.Fragment, {
                  children:
                    p &&
                    (0, w.jsx)(eu.z, {
                      as: "button",
                      onClick: function () {
                        return v();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: y,
                      children: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ix.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var ij = ea.Z.div(il(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function iw(e) {
        var t = e.id,
          n = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          o = e.setActiveRequests,
          s = (0, B.w$)(),
          l = (0, _.useRouter)(),
          u = (0, j._)((0, k.useState)(!1), 2),
          d = u[0],
          c = u[1],
          f = (0, k.useRef)(null),
          g = (0, j._)((0, k.useState)(!1), 2),
          h = g[0],
          m = g[1],
          p = (0, L.hz)(),
          v = (0, L.ec)(L.F_.isBusinessWorkspace),
          x = (0, I.cj)(t),
          b = p.has(es.RJ) && r && !x && !v,
          y = is(),
          C = (0, k.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                c(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = f.current.value;
                P.ZP.patchConversation(t, { title: i }),
                  I.tQ.setTitle(t, i, I._L.User),
                  ei.o.logEvent(eo.a.renameThread, { threadId: t, content: i }),
                  y();
              }
            },
            [t, y, n]
          ),
          T = (0, k.useCallback)(
            function (e) {
              "Enter" === e.key && C();
            },
            [C]
          ),
          N = (0, k.useCallback)(
            function () {
              P.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                y();
              }),
                a();
            },
            [t, a, y]
          ),
          S = (0, k.useCallback)(
            function (e) {
              D.abortAllAndReset(),
                o(new Set()),
                e.preventDefault(),
                ei.o.logEvent(eo.a.loadThread, { threadId: t }),
                l.push("/c/".concat(t), void 0, { shallow: !0 });
            },
            [t, l, o]
          ),
          Z = U(t, n, r),
          E = Z.resolvedTitle,
          F = Z.isTypingEffect;
        if (d)
          return (0, w.jsxs)(i_, {
            $active: r,
            children: [
              (0, w.jsx)(ed.ZP, { icon: M.IC0, className: "flex-shrink-0" }),
              (0, w.jsx)(ik, {
                ref: f,
                type: "text",
                defaultValue: null != E ? E : "",
                autoFocus: !0,
                onKeyDown: T,
                className: "mr-0",
                onBlur: C,
              }),
              (0, w.jsxs)(iP, {
                $active: !0,
                children: [
                  (0, w.jsx)(iI, {
                    onClick: C,
                    children: (0, w.jsx)(ed.ZP, { icon: M.UgA }),
                  }),
                  (0, w.jsx)(iI, {
                    onClick: function (e) {
                      e.preventDefault(), c(!1);
                    },
                    children: (0, w.jsx)(ed.ZP, { icon: M.q5L }),
                  }),
                ],
              }),
            ],
          });
        var A = F && r && s;
        return (0, w.jsxs)(iC, {
          onClick: r ? en() : S,
          $active: r,
          $sharing: b,
          className: (0, V.Z)("group", A && "animate-flash"),
          ref: i,
          children: [
            (0, w.jsx)(ed.ZP, { icon: h ? M.Ybf : M.IC0 }),
            (0, w.jsxs)(iM, {
              children: [
                A
                  ? (0, w.jsx)(z, { text: null != E ? E : "" })
                  : h
                  ? 'Delete "'.concat(E, '"?')
                  : E,
                (!F || !r) && (0, w.jsx)(iN, { $active: r }),
              ],
            }),
            h &&
              (0, w.jsxs)(iP, {
                $active: !0,
                children: [
                  (0, w.jsx)(iI, {
                    onClick: N,
                    children: (0, w.jsx)(ed.ZP, { icon: M.UgA }),
                  }),
                  (0, w.jsx)(iI, {
                    onClick: function () {
                      m(!1);
                    },
                    children: (0, w.jsx)(ed.ZP, { icon: M.q5L }),
                  }),
                ],
              }),
            r &&
              !h &&
              (0, w.jsxs)(iP, {
                $active: r,
                children: [
                  (0, w.jsx)(iI, {
                    onClick: function (e) {
                      e.preventDefault(), c(!0);
                    },
                    children: (0, w.jsx)(ed.ZP, { icon: M.Nte }),
                  }),
                  b &&
                    (0, w.jsx)(ie, {
                      children: (0, w.jsx)(iI, {
                        onClick: function (e) {
                          e.preventDefault(), R.vm.openSharingModal(t);
                        },
                        children: (0, w.jsx)(ed.ZP, { icon: M.A8q }),
                      }),
                    }),
                  (0, w.jsx)(iI, {
                    onClick: function () {
                      return m(!0);
                    },
                    children: (0, w.jsx)(ed.ZP, { icon: M.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var iC = ea.Z.a(
          iu(),
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && n ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && !n ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        i_ = ea.Z.div(id(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        ik = ea.Z.input(ic()),
        iM = ea.Z.div(ig()),
        iT = ea.Z.h3(ih()),
        iN = ea.Z.div(im(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        iP = ea.Z.div(ip(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        iI = ea.Z.button(iv()),
        iS = n(21739),
        iZ = n(25260),
        iE = n(44544),
        iF = n(19579),
        iD = n.n(iF),
        iR = n(88809),
        iL = n(52696);
      function iA(e) {
        var t = e.workspace,
          n = (0, ex.kP)().session,
          r = (0, L.ec)(function (e) {
            return e.currentWorkspace;
          }),
          a = (null == r ? void 0 : r.id) === t.id,
          i = (0, j._)((0, k.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return (
                  s(!0),
                  "workspace" === t.structure
                    ? (0, iE.setCookie)(L.Yl, t.id)
                    : (0, iE.setCookie)(L.Yl, ""),
                  L.w_.setCurrentWorkspace(t),
                  (0, iR.I)(),
                  (window.location.href = "/"),
                  [2]
                );
              });
            }),
            [t]
          ),
          u = (0, iL.Ix)(t),
          d = (0, iL.qH)(t),
          c = (0, w.jsx)("div", {
            className: "flex items-center justify-center",
            children: (0, w.jsx)(eV.B0, {}),
          });
        if ("personal" === t.structure) {
          if (!(null == n ? void 0 : n.user)) return null;
          c = (0, w.jsx)("div", {
            className: "flex items-center justify-center",
            children: (0, w.jsx)(iD(), {
              alt: "Profile",
              src: n.user.picture,
              width: 32,
              height: 32,
              className: "flex items-center justify-center rounded-sm",
            }),
          });
        }
        return (0, w.jsxs)(a ? "div" : "button", {
          onClick: a ? en() : l,
          className: (0, V.Z)({
            "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800":
              !0,
            "bg-gray-50 dark:bg-gray-800": a,
          }),
          children: [
            (0, w.jsxs)("div", {
              className: "flex w-full gap-4",
              children: [
                c,
                (0, w.jsxs)("div", {
                  className:
                    "flex w-full flex-1 flex-col items-start justify-start",
                  children: [
                    (0, w.jsx)("div", {
                      className: "inline align-top font-medium",
                      children: u,
                    }),
                    (0, w.jsx)("div", {
                      className: "text-sm text-gray-500",
                      children: d,
                    }),
                  ],
                }),
              ],
            }),
            (0, w.jsxs)("div", {
              className: "flex h-full items-center p-1",
              children: [
                a && !o && (0, w.jsx)(ed.ZP, { icon: iZ.Z, size: "medium" }),
                o && (0, w.jsx)(eL.Z, {}),
              ],
            }),
          ],
        });
      }
      function iB(e) {
        var t = e.data.map(function (e) {
          return (0, w.jsx)(iA, { workspace: e }, e.id);
        });
        return (0, w.jsx)("div", {
          className: "flex w-full flex-col gap-2",
          children: t,
        });
      }
      function iU() {
        var e = (0, R.EV)(R.B.WorkspaceSwitcher),
          t = (0, iL._O)(),
          n = (0, er.Z)(),
          r = (0, k.useCallback)(function () {
            R.vm.closeModal(R.B.WorkspaceSwitcher);
          }, []);
        return 0 === t.length
          ? null
          : (0, w.jsx)(eR.Z, {
              onClose: r,
              closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: r }),
              type: "success",
              isOpen: e,
              size: "normal",
              title: n.formatMessage(iO.workspaceSwitcherTitle),
              children: (0, w.jsx)("div", {
                className: "flex w-full items-center justify-between",
                children: (0, w.jsx)(iB, { data: t }),
              }),
            });
      }
      var iO = (0, N.vU)({
          workspaceSwitcherTitle: {
            id: "workspaceSwitcher.title",
            defaultMessage: "Choose Account",
            description: "title for account switcher modal",
          },
        }),
        iq = n(56115),
        iz = n(75641),
        iH = n(92720),
        iW = n(55629);
      function iV(e) {
        var t = e.accept,
          n = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = e.className,
          o = e.text,
          s = e.multiple,
          l = (0, k.useRef)(null),
          u = (0, k.useCallback)(function () {
            var e;
            null === (e = l.current) || void 0 === e || e.click();
          }, []),
          d = (0, k.useCallback)(
            function (e) {
              var t = e.target.files;
              t && t.length > 0 && (n(Array.from(t)), (e.target.value = ""));
            },
            [n]
          );
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(eu.z, {
              onClick: u,
              disabled: a || r,
              color: "none",
              className: i,
              children: (0, w.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  r
                    ? (0, w.jsx)(eL.Z, { className: "h-4 w-4" })
                    : (0, w.jsx)(ed.ZP, { icon: M.OvN, size: "small" }),
                  o && (0, w.jsx)("span", { children: o }),
                ],
              }),
            }),
            (0, w.jsx)("input", {
              type: "file",
              accept: t,
              ref: l,
              className: "hidden",
              onChange: d,
              multiple: void 0 !== s && s,
            }),
          ],
        });
      }
      var iQ = n(73610),
        iG = [
          "application/pdf",
          "text/plain",
          "text/markdown",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/csv",
        ],
        i$ = (0, N.vU)({
          myFiles: {
            id: "filesModal.myFiles",
            defaultMessage: "My Files",
            description: "Title for the files modal",
          },
          noFilesFound: {
            id: "filesModal.noFilesFound",
            defaultMessage: "No files found.",
            description: "Message displayed when no files are found",
          },
          uploadFile: {
            id: "filesModal.uploadFile",
            defaultMessage: "Upload File",
            description: "Label for the upload file button",
          },
          fileDownloadFailed: {
            id: "filesModal.fileDownloadFailed",
            defaultMessage: "File download failed. Please try again.",
            description: "Error message when file download fails",
          },
          fileDeleteFailed: {
            id: "filesModal.fileDeleteFailed",
            defaultMessage: "File delete failed. Please try again.",
            description: "Error message when file delete fails",
          },
          fileUploadFailed: {
            id: "filesModal.fileUploadFailed",
            defaultMessage: "File upload failed. Please try again.",
            description: "Error message when file upload fails",
          },
          fileUploaded: {
            id: "filesModal.fileUploaded",
            defaultMessage: "Uploaded file",
            description: "Success message when file is uploaded",
          },
          fileDeleted: {
            id: "filesModal.fileDeleted",
            defaultMessage: "File deleted",
            description: "Success message when file is deleted",
          },
          allFilesDeleted: {
            id: "filesModal.allFilesDeleted",
            defaultMessage: "All files deleted",
            description: "Success message when all files are deleted",
          },
          allFilesDeleteFailed: {
            id: "filesModal.allFilesDeletedFailed",
            defaultMessage: "All files delete failed. Please try again.",
            description: "Error message when all files delete fails",
          },
          confirmDeleteAll: {
            id: "filesModal.confirmDeleteAll",
            defaultMessage: "Are you sure you want to delete all files?",
            description: "Confirmation message for deleting all files",
          },
          downloadAll: {
            id: "filesModal.downloadAll",
            defaultMessage: "Download All",
            description: "Label for the download all button",
          },
          deleteAll: {
            id: "filesModal.deleteAll",
            defaultMessage: "Delete All",
            description: "Label for the delete all button",
          },
          name: {
            id: "filesModal.name",
            defaultMessage: "Name",
            description: "Label for the name column",
          },
          date: {
            id: "filesModal.date",
            defaultMessage: "Date",
            description: "Label for the date column",
          },
          size: {
            id: "filesModal.size",
            defaultMessage: "Size",
            description: "Label for the size column",
          },
          successfullyEmbeddedFileTooltip: {
            id: "filesModal.successfullyEmbeddedFileTooltip",
            defaultMessage: "Successfully processed file for searching",
            description: "Tooltip for the successfully embedded file icon",
          },
          failedToEmbedFileTooltip: {
            id: "filesModal.failedToEmbedFileTooltip",
            defaultMessage:
              "Failed to process file for searching,\nplease try deleting and re-uploading",
            description: "Tooltip for the failed to embed file icon",
          },
          embeddingFileTooltip: {
            id: "filesModal.embeddingFileTooltip",
            defaultMessage: "Processing file for searching...",
            description: "Tooltip for the embedding file icon",
          },
          deleteHistoryModalCancel: {
            id: "filesModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Label for the cancel button",
          },
          confirmDownloadAll: {
            id: "filesModal.confirmDownloadAll",
            defaultMessage: "Are you sure you want to download all files?",
            description: "Confirmation message for downloading all files",
          },
          confirmCancelDownloadAll: {
            id: "filesModal.confirmCancelDownloadAll",
            defaultMessage: "Cancel Download All",
            description:
              "Label for the cancel download all button in the confirmation modal",
          },
          tooManyFilesWithSameName: {
            id: "filesModal.tooManyFilesWithSameName",
            defaultMessage:
              "Too many files with the same name. Please rename your file.",
            description: "Error message when too many files have the same name",
          },
          tooManyFilesUploadedAtOnce: {
            id: "filesModal.tooManyFilesUploadedAtOnce",
            defaultMessage:
              "You can only upload up to {maxFiles} files at a time.",
            description:
              "Error message when too many files are uploaded at once",
          },
          totalFileSizeExceedsLimit: {
            id: "filesModal.totalFileSizeExceedsLimit",
            defaultMessage:
              "The total size of the files exceeds the limit of {maxSize}.",
            description:
              "Error message when the total file size exceeds the limit",
          },
          filesModalDescription: {
            id: "filesModal.filesModalDescription",
            defaultMessage:
              "Files can be used with the My Files Browsing model. {totalUploadedSize} / {maxFileSize} of storage used.",
            description: "Description for the files modal",
          },
        });
      ((s = p || (p = {})).Uploading = "uploading"), (s.Deleting = "deleting");
      var iY = function (e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3,
            r = 1,
            a = e,
            i = e.lastIndexOf("."),
            o = i >= 0 ? e.slice(0, i) : e,
            s = i >= 0 ? e.slice(i) : "";
          t.find(function (e) {
            return e.name === a;
          }) && r <= n;

        )
          (a = "".concat(o, " (").concat(r, ")").concat(s)), r++;
        if (r > n) throw Error();
        return a;
      };
      function iJ(e) {
        var t = e.label,
          n = e.children;
        return (0, w.jsx)(ty.u, {
          side: "top",
          size: "xsmall",
          sideOffset: 4,
          label: t,
          children: n,
        });
      }
      function iK(e) {
        var t = e.file,
          n = e.refetch,
          r = e.handleFileDelete,
          a = e.handleFileDeleteFailed,
          i = e.session,
          o = e.downloadedFiles,
          s = e.setDownloadedFiles,
          l = (0, k.useMemo)(
            function () {
              return (0, iq.Z)(new Date(t.ready_time), "MMM d, yyyy");
            },
            [t.ready_time]
          ),
          u = (0, k.useMemo)(
            function () {
              var e;
              return (e = t.size) < 1048576
                ? "".concat((e / 1024).toFixed(0), " KB")
                : "".concat((e / 1048576).toFixed(1), " MB");
            },
            [t.size]
          ),
          d = (0, er.Z)(),
          c = (0, e_.O6)(),
          f = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, c(t.id, t.name)];
                  case 1:
                    return e.sent() && s((0, eA._)(o).concat([t.id])), [2];
                }
              });
            }),
            [t, o, s, c]
          ),
          g = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!i) return [2];
                    r(t), (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 4, , 5]),
                      [4, P.ZP.deleteFileFromFileService(t.id, i.accessToken)]
                    );
                  case 2:
                    return (
                      e.sent(),
                      tC.m.success(d.formatMessage(i$.fileDeleted)),
                      [4, n()]
                    );
                  case 3:
                    return e.sent(), [3, 5];
                  case 4:
                    return (
                      e.sent(),
                      a(t),
                      tC.m.danger(d.formatMessage(i$.fileDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [r, a, i, t, n, d]
          );
        return (0, w.jsxs)(iW.Z.Row, {
          disabled: t.state === p.Uploading,
          children: [
            (0, w.jsx)(iW.Z.Cell, {
              children: (0, w.jsxs)("div", {
                className: "inline-flex max-w-full gap-2 align-top",
                children: [
                  t.retrieval_index_status === iz.Xf.Success
                    ? (0, w.jsx)(iJ, {
                        label: d.formatMessage(
                          i$.successfullyEmbeddedFileTooltip
                        ),
                        children: (0, w.jsx)(ed.ZP, {
                          icon: M._rq,
                          size: "xsmall",
                          className: "mt-1.5 flex-shrink-0 text-green-600",
                        }),
                      })
                    : t.retrieval_index_status === iz.Xf.Failed
                    ? (0, w.jsx)(iJ, {
                        label: d.formatMessage(i$.failedToEmbedFileTooltip),
                        children: (0, w.jsx)(ed.ZP, {
                          icon: M.$Rx,
                          size: "xsmall",
                          className: "mt-1.5 flex-shrink-0 text-red-500",
                        }),
                      })
                    : (0, w.jsx)(iJ, {
                        label: d.formatMessage(i$.embeddingFileTooltip),
                        children: (0, w.jsx)(eL.Z, {
                          className:
                            "mt-1 flex-shrink-0 text-gray-500 dark:text-gray-100",
                        }),
                      }),
                  (0, w.jsx)("button", {
                    className: (0, V.Z)(
                      o.includes(t.id)
                        ? "text-[#800080]"
                        : "hover:text-gray-900 dark:hover:text-gray-100",
                      "truncate whitespace-normal break-words text-left focus:outline-none"
                    ),
                    onClick: f,
                    children: (0, w.jsx)("span", { children: t.name }),
                  }),
                ],
              }),
            }),
            (0, w.jsx)(iW.Z.Cell, {
              className: "align-top",
              children: t.state !== p.Uploading && l,
            }),
            (0, w.jsx)(iW.Z.Cell, {
              className: "align-top",
              children: t.state !== p.Uploading && u,
            }),
            (0, w.jsx)(iW.Z.Cell, {
              textAlign: "right",
              className: "align-top",
              children: (0, w.jsx)("div", {
                className: "flex justify-end space-x-2",
                children:
                  t.state !== p.Uploading &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: f,
                        children: (0, w.jsx)(ed.ZP, {
                          icon: M._hL,
                          size: "small",
                        }),
                      }),
                      (0, w.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: g,
                        children: (0, w.jsx)(ed.ZP, {
                          icon: M.Ybf,
                          size: "small",
                        }),
                      }),
                    ],
                  }),
              }),
            }),
          ],
        });
      }
      function iX() {
        var e,
          t,
          n,
          r,
          a,
          i = (0, er.Z)(),
          o = (0, iQ.W)(),
          s = o.data,
          l = o.isLoading,
          u = o.refetch,
          d = (0, j._)((0, k.useState)([]), 2),
          c = d[0],
          f = d[1],
          g = (0, k.useRef)([]),
          h = (0, j._)((0, k.useState)([]), 2),
          m = h[0],
          v = h[1],
          x = (0, el.Z)(),
          y = (0, ex.kP)().session,
          C = (0, k.useMemo)(
            function () {
              return null !== (a = null == s ? void 0 : s.files) && void 0 !== a
                ? a
                : [];
            },
            [s]
          ),
          _ = (0, j._)((0, k.useState)([]), 2),
          N = _[0],
          I = _[1],
          S = (0, j._)((0, k.useState)(!1), 2),
          Z = S[0],
          E = S[1],
          F = (0, j._)((0, k.useState)(!1), 2),
          D = F[0],
          L = F[1],
          A = (0, e_.qS)(),
          B = (0, k.useCallback)(
            function () {
              R.vm.closeFilesModal(), c.length > 0 && u();
            },
            [u, c]
          ),
          U = (0, rh.D)({
            mutationFn: function (e) {
              return P.ZP.uploadFileUsingFileService(
                e,
                iz.Ei.MyFiles,
                y.accessToken
              );
            },
            onMutate:
              ((e = (0, eg._)(function (e) {
                return (0, em.__generator)(this, function (t) {
                  return [2, e];
                });
              })),
              function (t) {
                return e.apply(this, arguments);
              }),
            onSuccess:
              ((t = (0, eg._)(function (e) {
                return (0, em.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, u()];
                    case 1:
                      return (
                        t.sent(),
                        tC.m.success(i.formatMessage(i$.fileUploaded)),
                        g.current.push(e.file_id),
                        v((0, eA._)(g.current)),
                        [2]
                      );
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onError: function (e, t) {
              f(function (e) {
                return e.filter(function (e) {
                  return e.name !== t.name;
                });
              }),
                tC.m.danger(i.formatMessage(i$.fileUploadFailed));
            },
          }),
          O = (0, k.useCallback)(
            ((n = (0, eg._)(function (e) {
              var t;
              return (0, em.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!y) return [2];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 6, , 7]),
                      [4, P.ZP.getFileInfo(e, y.accessToken)]
                    );
                  case 2:
                    if (
                      !(
                        (t = n.sent()).retrieval_index_status ===
                          iz.Xf.Success ||
                        t.retrieval_index_status === iz.Xf.Failed
                      )
                    )
                      return [3, 4];
                    return (
                      (g.current = g.current.filter(function (t) {
                        return t !== e;
                      })),
                      [4, u()]
                    );
                  case 3:
                    return n.sent(), [3, 5];
                  case 4:
                    x(function () {
                      return O(e);
                    }, 500),
                      (n.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return (
                      n.sent(),
                      (g.current = g.current.filter(function (t) {
                        return t !== e;
                      })),
                      [3, 7]
                    );
                  case 7:
                    return [2];
                }
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [u, y, x]
          );
        (0, k.useEffect)(
          function () {
            g.current.length > 0 && O(g.current[g.current.length - 1]);
          },
          [m, O]
        );
        var q = (0, k.useCallback)(
            (0, eg._)(function () {
              var e;
              return (0, em.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!y) return [2];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        A(
                          (e = C.filter(function (e) {
                            return e.use_case === iz.Ei.MyFiles;
                          })),
                          30
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      I(
                        (0, eA._)(N).concat(
                          (0, eA._)(
                            e.map(function (e) {
                              return e.id;
                            })
                          )
                        )
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      t.sent(),
                      tC.m.danger(i.formatMessage(i$.fileDownloadFailed)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [y, C, i, N, I, A]
          ),
          z = (0, k.useCallback)(
            (0, eg._)(function () {
              var e;
              return (0, em.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      ((e = C.map(function (e) {
                        return (0,
                        eh._)((0, b._)({}, e), { state: p.Deleting });
                      })),
                      !y)
                    )
                      return [2];
                    f((0, eA._)(c).concat((0, eA._)(e))), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 4, , 5]),
                      [
                        4,
                        Promise.all(
                          e
                            .filter(function (e) {
                              return e.use_case === iz.Ei.MyFiles;
                            })
                            .map(function (e) {
                              return P.ZP.deleteFileFromFileService(
                                e.id,
                                y.accessToken
                              );
                            })
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      tC.m.success(i.formatMessage(i$.allFilesDeleted)),
                      [4, u()]
                    );
                  case 3:
                    return t.sent(), [3, 5];
                  case 4:
                    return (
                      t.sent(),
                      f([]),
                      tC.m.danger(i.formatMessage(i$.allFilesDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [C, c, y, i, u]
          ),
          H = (0, k.useCallback)(function () {
            E(!0);
          }, []),
          W = (0, k.useCallback)(function () {
            L(!0);
          }, []),
          V = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return E(!1), z(), [2];
              });
            }),
            [z]
          ),
          Q = (0, k.useCallback)(function () {
            E(!1);
          }, []),
          G = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return L(!1), q(), [2];
              });
            }),
            [q]
          ),
          $ = (0, k.useCallback)(function () {
            L(!1);
          }, []),
          Y = (0, k.useCallback)(function (e, t) {
            return e.findIndex(function (e) {
              return e.name === t.name && e.state !== p.Uploading;
            });
          }, []),
          J = (0, k.useCallback)(function (e) {
            var t = (0, eh._)((0, b._)({}, e), { state: p.Deleting });
            f(function (e) {
              return (0, eA._)(e).concat([t]);
            });
          }, []),
          K = (0, k.useCallback)(function (e) {
            f(function (t) {
              return t.filter(function (t) {
                return t.name !== e.name;
              });
            });
          }, []),
          X = (0, k.useMemo)(
            function () {
              return (0, eA._)(C)
                .concat((0, eA._)(c))
                .filter(function (e, t, n) {
                  if (e.use_case !== iz.Ei.MyFiles) return !1;
                  e.retrieval_index_status === iz.Xf.Success ||
                    e.retrieval_index_status === iz.Xf.Failed ||
                    g.current.includes(e.id) ||
                    (g.current.push(e.id), v((0, eA._)(g.current)));
                  var r = Y(n, e);
                  return e.state === p.Uploading && -1 !== r
                    ? (f(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name || t.state !== p.Uploading;
                        });
                      }),
                      !1)
                    : e.state === p.Deleting &&
                      -1 ===
                        n.findIndex(function (t) {
                          return t.name === e.name && t.state !== p.Deleting;
                        })
                    ? (f(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name;
                        });
                      }),
                      !1)
                    : -1 ===
                      n.findIndex(function (t) {
                        return t.name === e.name && t.state === p.Deleting;
                      });
                })
                .sort(function (e, t) {
                  return (
                    new Date(t.ready_time).getTime() -
                    new Date(e.ready_time).getTime()
                  );
                });
            },
            [C, Y, c]
          ),
          ee = (0, k.useMemo)(
            function () {
              return X.reduce(function (e, t) {
                return e + (t.size || 0);
              }, 0);
            },
            [X]
          ),
          et = (0, k.useMemo)(
            function () {
              return ee / 1073741824;
            },
            [ee]
          ),
          en = (0, k.useCallback)(
            ((r = (0, eg._)(function (e) {
              var t, n, r, a, o, s, l, u, d, c;
              return (0, em.__generator)(this, function (g) {
                if (e.length > 10)
                  return (
                    tC.m.warning(
                      i.formatMessage(i$.tooManyFilesUploadedAtOnce, {
                        maxFiles: 10,
                      })
                    ),
                    [2]
                  );
                (t = ee), (n = !0), (r = !1), (a = void 0);
                try {
                  for (
                    o = e[Symbol.iterator]();
                    !(n = (s = o.next()).done);
                    n = !0
                  ) {
                    if (((l = s.value), (t += l.size) > 2147483648)) {
                      tC.m.warning(
                        i.formatMessage(i$.totalFileSizeExceedsLimit, {
                          maxSize: "".concat(2, "GB"),
                        })
                      );
                      break;
                    }
                    if (
                      ((u = l.name),
                      C.filter(function (e) {
                        return e.use_case === iz.Ei.MyFiles;
                      }).find(function (e) {
                        return e.name === u;
                      }))
                    )
                      try {
                        u = iY(u, C);
                      } catch (e) {
                        tC.m.warning(
                          i.formatMessage(i$.tooManyFilesWithSameName)
                        );
                        break;
                      }
                    (d = {
                      id: "",
                      name: u,
                      ready_time: new Date().toISOString(),
                      use_case: iz.Ei.MyFiles,
                      size: l.size,
                      state: p.Uploading,
                    }),
                      f(function (e) {
                        return (0, eA._)(e).concat([d]);
                      }),
                      (c = new File([l], u, { type: l.type })),
                      U.mutate(c);
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                return [2];
              });
            })),
            function (e) {
              return r.apply(this, arguments);
            }),
            [C, i, U, ee]
          );
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(eR.Z, {
              isOpen: !0,
              onClose: B,
              size: "custom",
              className: "max-w-5xl",
              type: "success",
              title: i.formatMessage(i$.myFiles),
              closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: B }),
              children: [
                l
                  ? (0, w.jsx)("div", {
                      className: "flex h-64 items-center justify-center",
                      children: (0, w.jsx)(eL.Z, {
                        className: "text-gray-500",
                      }),
                    })
                  : X.length > 0
                  ? (0, w.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, w.jsx)("div", {
                          className:
                            "mb-2 text-xs text-gray-600 dark:text-gray-300",
                          children: (0, w.jsx)(
                            T.Z,
                            (0, eh._)((0, b._)({}, i$.filesModalDescription), {
                              values: {
                                totalUploadedSize: (0, w.jsx)("span", {
                                  className: "font-bold",
                                  children: "".concat(
                                    Number(et).toPrecision(2),
                                    "GB"
                                  ),
                                }),
                                maxFileSize: "".concat(2, "GB"),
                              },
                            })
                          ),
                        }),
                        (0, w.jsxs)(iW.Z.Root, {
                          className: "max-h-[28rem]",
                          fixed: !0,
                          size: "compact",
                          children: [
                            (0, w.jsxs)(iW.Z.Header, {
                              children: [
                                (0, w.jsx)(iW.Z.HeaderCell, {
                                  className:
                                    "max-w-8/12 w-8/12 dark:bg-gray-900",
                                  children: i.formatMessage(i$.name),
                                }),
                                (0, w.jsx)(iW.Z.HeaderCell, {
                                  children: i.formatMessage(i$.date),
                                }),
                                (0, w.jsx)(iW.Z.HeaderCell, {
                                  children: i.formatMessage(i$.size),
                                }),
                                (0, w.jsx)(iW.Z.HeaderCell, {
                                  textAlign: "right",
                                  children: (0, w.jsxs)(iH.Z.Root, {
                                    children: [
                                      (0, w.jsx)(iH.Z.Trigger, {
                                        children: (0, w.jsx)(ed.ZP, {
                                          icon: M.K9M,
                                        }),
                                      }),
                                      (0, w.jsx)(iH.Z.Portal, {
                                        children: (0, w.jsxs)(iH.Z.Content, {
                                          children: [
                                            (0, w.jsxs)(iH.Z.Item, {
                                              onClick: W,
                                              className: "flex gap-2",
                                              children: [
                                                (0, w.jsx)(ed.ZP, {
                                                  icon: M._hL,
                                                  size: "small",
                                                }),
                                                (0, w.jsx)("span", {
                                                  children: i.formatMessage(
                                                    i$.downloadAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, w.jsxs)(iH.Z.Item, {
                                              onClick: H,
                                              className: "flex gap-2",
                                              children: [
                                                (0, w.jsx)(ed.ZP, {
                                                  icon: M.Ybf,
                                                  size: "small",
                                                }),
                                                (0, w.jsx)("span", {
                                                  children: i.formatMessage(
                                                    i$.deleteAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, w.jsx)(iW.Z.Body, {
                              children: X.map(function (e, t) {
                                return (0,
                                w.jsx)(iK, { file: e, refetch: u, handleFileDelete: J, handleFileDeleteFailed: K, session: y, downloadedFiles: N, setDownloadedFiles: I }, t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, w.jsx)(T.Z, (0, b._)({}, i$.noFilesFound)),
                (0, w.jsx)(iV, {
                  accept: iG.join(","),
                  onFilePicked: en,
                  loading: U.isLoading,
                  disabled: U.isLoading,
                  className:
                    "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
                  text: i.formatMessage(i$.uploadFile),
                  multiple: !0,
                }),
              ],
            }),
            (0, w.jsx)(eR.Z, {
              isOpen: Z,
              onClose: function () {
                return E(!1);
              },
              type: "danger",
              title: i.formatMessage(i$.confirmDeleteAll),
              primaryButton: (0, w.jsx)(eD.ZP.Button, {
                title: i.formatMessage(i$.deleteAll),
                color: "danger",
                onClick: V,
              }),
              secondaryButton: (0, w.jsx)(eD.ZP.Button, {
                title: i.formatMessage(i$.deleteHistoryModalCancel),
                color: "neutral",
                onClick: Q,
              }),
            }),
            (0, w.jsx)(eR.Z, {
              isOpen: D,
              onClose: function () {
                return L(!1);
              },
              type: "success",
              title: i.formatMessage(i$.confirmDownloadAll),
              primaryButton: (0, w.jsx)(eD.ZP.Button, {
                title: i.formatMessage(i$.downloadAll),
                color: "primary",
                onClick: G,
              }),
              secondaryButton: (0, w.jsx)(eD.ZP.Button, {
                title: i.formatMessage(i$.confirmCancelDownloadAll),
                color: "neutral",
                onClick: $,
              }),
            }),
          ],
        });
      }
      var i0 = n(65374),
        i1 = n(10580),
        i2 = (0, S.ZP)(function () {
          return { isOpen: !1 };
        }),
        i3 = {
          close: function () {
            i2.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            i2.setState({ isOpen: e });
          },
        };
      function i5(e) {
        var t = e.slideOver,
          n = (0, j._)((0, k.useState)(), 2),
          r = n[0],
          a = n[1],
          i = (0, j._)((0, k.useState)(!1), 2),
          o = i[0],
          s = i[1],
          l = (0, j._)((0, k.useState)(!1), 2),
          u = l[0],
          d = l[1],
          c = (0, j._)((0, k.useState)(!1), 2),
          f = c[0],
          g = c[1],
          h = (0, ex.kP)().session,
          m = (0, L.hz)(),
          p =
            ((null == h ? void 0 : h.user) != null && (0, ex.yl)(h.user)) ||
            m.has(es.YI),
          v = (0, C.NL)(),
          x = i2(function (e) {
            return e.isOpen;
          }),
          b = rs(),
          y = rj().fetchManifestAndSpec,
          _ = (0, k.useMemo)(
            function () {
              return p ? b[0] : b.find(tM);
            },
            [b, p]
          ),
          T = (0, k.useCallback)(
            (0, eg._)(function () {
              return (0, em.__generator)(this, function (e) {
                return (
                  _ &&
                    (a(void 0),
                    y({
                      domain: _.domain,
                      onSuccess: function (e) {
                        a({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            rv(e.scrapeManifestResponse.plugin, v, [
                              "installedAip",
                            ]);
                      },
                      onError: function (e) {
                        tC.m.danger(
                          (null == e ? void 0 : e.message) ||
                            "Error refreshing plugin."
                        );
                      },
                    })),
                  [2]
                );
              });
            }),
            [_, v, y]
          );
        return ((0, k.useEffect)(
          function () {
            x && T();
          },
          [x, T]
        ),
        m.has(es.Wk))
          ? (0, w.jsx)(ag, {
              icon: M.V7f,
              title: "Plugin devtools",
              isOpen: x,
              slideOver: t,
              onClose: i3.close,
              children: (0, w.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != _
                    ? (0, w.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, w.jsx)("div", {
                            children: (0, w.jsx)(eu.z, {
                              size: "small",
                              color: "neutral",
                              onClick: T,
                              children: "Refresh plugin",
                            }),
                          }),
                          r
                            ? (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsx)(rw, { plugin: _ }),
                                  (0, w.jsxs)("div", {
                                    children: ["Plugin id: ", _.id],
                                  }),
                                  (0, w.jsx)(rT, {
                                    manifestValidationInfo:
                                      r.manifestValidationInfo,
                                    expanded: o,
                                    onChangeExpanded: s,
                                  }),
                                  null != r.apiValidationInfo &&
                                    (0, w.jsxs)(w.Fragment, {
                                      children: [
                                        (0, w.jsx)(rN, {
                                          apiValidationInfo:
                                            r.apiValidationInfo,
                                          expanded: u,
                                          onChangeExpanded: d,
                                        }),
                                        (0, w.jsx)(rP, {
                                          apiValidationInfo:
                                            r.apiValidationInfo,
                                          expanded: f,
                                          onChangeExpanded: g,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, w.jsx)("div", {
                                className: "self-center",
                                children: (0, w.jsx)(eL.Z, {}),
                              }),
                        ],
                      })
                    : (0, w.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: [
                          "Please enable a localhost plugin",
                          " ",
                          p && " (or any plugin if you're a plugin reviewer) ",
                          "to use devtools.",
                        ],
                      }),
              }),
            })
          : null;
      }
      var i4 = n(56817),
        i8 = n(47428),
        i6 = ["sharedConversations"],
        i7 = (0, N.vU)({
          name: {
            id: "sharedConversationModal.name",
            defaultMessage: "Name",
            description: "Table column header",
          },
          dateShared: {
            id: "sharedConversationModal.dateShared",
            defaultMessage: "Date shared",
            description: "Table column header",
          },
          loading: {
            id: "sharedConversationModal.loading",
            defaultMessage: "Loading...",
            description: "Loading message",
          },
          somethingWentWrong: {
            id: "sharedConversationModal.somethingWentWrong",
            defaultMessage: "Something went wrong...",
            description: "Error message",
          },
          retry: {
            id: "sharedConversationModal.retry",
            defaultMessage: "Retry",
            description: "Retry button text",
          },
          noSharedConversations: {
            id: "sharedConversationModal.noSharedConversations",
            defaultMessage: "You have no shared links.",
            description: "No shared links message",
          },
          title: {
            id: "sharedConversationModal.title",
            defaultMessage: "Shared Links",
            description: "Shared links modal title",
          },
          goToOriginConversation: {
            id: "sharedConversationModal.goToOriginConversation",
            defaultMessage: "View source chat",
            description: "Label for conversation icon",
          },
          deleteSharedLink: {
            id: "sharedConversationModal.deleteSharedLink",
            defaultMessage: "Delete shared link",
            description: "Label for delete shared link icon",
          },
          deleteSharedLinkFailed: {
            id: "sharedConversationModal.deleteSharedLinkFailed",
            defaultMessage: "Deleting shared link failed",
            description: "Toaster message when deleting share link fails",
          },
          deleteAllSharedLinks: {
            id: "sharedConversationModal.deleteSharedAllConversations",
            defaultMessage: "Delete all shared links",
            description: "Menu item for deleting all shared links",
          },
          deleteAllSharedLinksConfirm: {
            id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
            defaultMessage:
              "Are you sure you want to delete all your shared links?",
            description: "Confirmation message for deleting share links",
          },
          deleteAllSharedLinksFailed: {
            id: "sharedConversationModal.deleteSharedAllConversationsFailed",
            defaultMessage: "Deleting shared links failed",
            description: "Toaster message when deleting all share links fails",
          },
        });
      function i9() {
        var e = (0, C.NL)(),
          t = (0, er.Z)(),
          n = (0, rh.D)({
            mutationFn: function () {
              return P.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries(i6);
            },
            onError: function () {
              tC.m.danger(t.formatMessage(i7.deleteAllSharedLinksFailed));
            },
          }).mutate;
        return (0, w.jsxs)(i8.fC, {
          children: [
            (0, w.jsx)(i8.xz, {
              asChild: !0,
              children: (0, w.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, w.jsx)(ed.ZP, { icon: M.K9M }),
              }),
            }),
            (0, w.jsx)(i8.Uv, {
              children: (0, w.jsx)(i8.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, w.jsx)(i8.ck, {
                  onClick: function () {
                    window.confirm(
                      t.formatMessage(i7.deleteAllSharedLinksConfirm)
                    ) && n();
                  },
                  className:
                    "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                  children: (0, w.jsx)(
                    T.Z,
                    (0, b._)({}, i7.deleteAllSharedLinks)
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function oe() {
        return P.ZP.getSharedConversations();
      }
      function ot(e) {
        var t,
          n = e.sharedConversation,
          r = (0, er.Z)(),
          a = (0, C.NL)(),
          i = (0, rh.D)({
            mutationFn:
              ((t = (0, eg._)(function (e) {
                var t;
                return (0, em.__generator)(this, function (n) {
                  return (
                    (t = e.sharedConversationId),
                    [2, P.ZP.deleteShareLink({ share_id: t })]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSettled: function () {
              a.invalidateQueries(i6);
            },
            onError: function () {
              tC.m.danger(r.formatMessage(i7.deleteSharedLinkFailed));
            },
          }),
          o = i.mutate,
          s = i.isLoading;
        return (0, w.jsxs)(iW.Z.Row, {
          disabled: s,
          children: [
            (0, w.jsx)(iW.Z.Cell, {
              children: (0, w.jsxs)("a", {
                href: "/share/".concat(n.id),
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, w.jsx)(ed.ZP, {
                    icon: M.XKb,
                    className: "flex-shrink-0",
                  }),
                  n.title,
                ],
              }),
            }),
            (0, w.jsx)(iW.Z.Cell, {
              children:
                null != n.create_time
                  ? (0, w.jsx)(N.Ji, {
                      value: n.create_time,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })
                  : null,
            }),
            (0, w.jsx)(iW.Z.Cell, {
              children: (0, w.jsxs)(iW.Z.Actions, {
                children: [
                  (0, w.jsx)(ty.u, {
                    label: r.formatMessage(i7.goToOriginConversation),
                    sideOffset: 4,
                    side: "top",
                    children: (0, w.jsx)("a", {
                      href: "/c/".concat(n.conversation_id),
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": r.formatMessage(i7.goToOriginConversation),
                      className:
                        "cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, w.jsx)(ed.ZP, { icon: M.IC0 }),
                    }),
                  }),
                  (0, w.jsx)(ty.u, {
                    label: r.formatMessage(i7.deleteSharedLink),
                    sideOffset: 4,
                    side: "top",
                    children: (0, w.jsx)("button", {
                      onClick: function () {
                        o({ sharedConversationId: n.id });
                      },
                      "aria-label": r.formatMessage(i7.deleteSharedLink),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, w.jsx)(ed.ZP, { icon: M.Ybf }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function on(e) {
        var t,
          n = e.onClose,
          r = (0, eC.a)({
            queryKey: i6,
            queryFn: oe,
            refetchOnMount: "always",
          }),
          a = r.data,
          i = r.isLoading,
          o = r.isError,
          s = r.refetch,
          l = (0, er.Z)();
        return (
          (t = i
            ? (0, w.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, w.jsx)(T.Z, (0, b._)({}, i7.loading)),
              })
            : o
            ? (0, w.jsxs)("div", {
                children: [
                  (0, w.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, i7.somethingWentWrong)
                    ),
                  }),
                  (0, w.jsx)("div", {
                    children: (0, w.jsx)(eu.z, {
                      color: "neutral",
                      onClick: function () {
                        s();
                      },
                      children: (0, w.jsx)(T.Z, (0, b._)({}, i7.retry)),
                    }),
                  }),
                ],
              })
            : 0 === a.total
            ? (0, w.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, w.jsx)(
                  T.Z,
                  (0, b._)({}, i7.noSharedConversations)
                ),
              })
            : (0, w.jsxs)(iW.Z.Root, {
                className: "max-h-[28rem]",
                size: "compact",
                children: [
                  (0, w.jsxs)(iW.Z.Header, {
                    children: [
                      (0, w.jsx)(iW.Z.HeaderCell, {
                        children: (0, w.jsx)(T.Z, (0, b._)({}, i7.name)),
                      }),
                      (0, w.jsx)(iW.Z.HeaderCell, {
                        children: (0, w.jsx)(T.Z, (0, b._)({}, i7.dateShared)),
                      }),
                      (0, w.jsx)(iW.Z.HeaderCell, {
                        textAlign: "right",
                        children: (0, w.jsx)(i9, {}),
                      }),
                    ],
                  }),
                  (0, w.jsx)(iW.Z.Body, {
                    children: a.items.map(function (e) {
                      return (0, w.jsx)(ot, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, w.jsx)(eR.Z, {
            isOpen: !0,
            onClose: n,
            size: "custom",
            className: "max-w-5xl",
            type: "success",
            title: l.formatMessage(i7.title),
            closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: n }),
            children: t,
          })
        );
      }
      var or = n(50921);
      function oa() {
        var e = (0, W._)(["block text-sm font-medium mb-1"]);
        return (
          (oa = function () {
            return e;
          }),
          e
        );
      }
      function oi(e) {
        var t,
          n,
          r,
          a = e.onClose,
          i = e.onToggleHistoryDisabled,
          o = e.onDeleteHistory,
          s = (0, er.Z)(),
          l =
            ((t = io().conversations),
            (0, k.useMemo)(
              function () {
                return t.length > 0;
              },
              [t]
            )),
          u = (0, B.w$)(),
          d = (0, j._)((0, k.useState)(!1), 2),
          c = d[0],
          f = d[1],
          g = (0, j._)((0, k.useState)(!1), 2),
          h = g[0],
          m = g[1],
          p = (0, j._)((0, k.useState)(!1), 2),
          x = p[0],
          y = p[1],
          C = (0, j._)((0, k.useState)(!1), 2),
          _ = C[0],
          M = C[1],
          N = (0, j._)((0, k.useState)(v.General), 2),
          P = N[0],
          I = N[1],
          S = (0, k.useContext)(A.QL),
          Z = S.historyDisabled,
          E = S.toggleHistoryDisabled,
          F = i2(function (e) {
            return e.isOpen;
          }),
          D = (0, L.hz)(),
          R = (0, L.ec)(L.F_.isBusinessWorkspace),
          U = !R && D.has(es.RJ),
          O = (0, ex.kP)().session,
          q = (0, eU.Fl)(),
          z = q.isBetaFeaturesUiEnabled,
          H = q.isPluginsAvailable,
          W = q.isBrowsingAvailable,
          Q = q.isCodeInterpreterAvailable,
          G = (0, k.useCallback)(function () {
            f(!1);
          }, []),
          $ = (0, k.useCallback)(function () {
            m(!1);
          }, []),
          Y = (0, k.useCallback)(function () {
            y(!1);
          }, []),
          J = (0, k.useCallback)(function () {
            f(!0);
          }, []),
          K = (0, k.useCallback)(function () {
            m(!0);
          }, []),
          X = (0, k.useCallback)(function () {
            y(!0);
          }, []),
          ee = (0, k.useCallback)(
            function () {
              null == i || i(), E();
            },
            [i, E]
          ),
          et = rV(),
          en = et.setupMfa,
          ea = et.isUsernamePassword,
          ei = et.removeMfa;
        return c
          ? (0, w.jsx)(oc, { onClose: G })
          : h
          ? (0, w.jsx)(od, { onClose: $, onDeleteHistory: o })
          : x
          ? (0, w.jsx)(om, { onClose: Y })
          : _
          ? (0, w.jsx)(on, {
              onClose: function () {
                M(!1);
              },
            })
          : (0, w.jsx)(eR.Z, {
              isOpen: !0,
              onClose: a,
              size: "custom",
              className: "md:max-w-[680px]",
              type: "success",
              title: s.formatMessage(ov.settings),
              closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: a }),
              children: (0, w.jsxs)(i0.fC, {
                className: "flex flex-col gap-6 md:flex-row",
                defaultValue: P,
                orientation: u ? "vertical" : void 0,
                onValueChange: function (e) {
                  I(e);
                },
                children: [
                  (0, w.jsxs)(i0.aV, {
                    className: (0, V.Z)(
                      "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                      u
                        ? "flex-col"
                        : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
                    ),
                    children: [
                      (0, w.jsx)(of, {
                        value: v.General,
                        icon: ev.oq2,
                        label: (0, w.jsx)(T.Z, (0, b._)({}, ov.generalTab)),
                      }),
                      z &&
                        (W || H || Q) &&
                        (0, w.jsx)(of, {
                          value: v.BetaFeatures,
                          icon: ev.rTN,
                          label: (0, w.jsx)(T.Z, (0, b._)({}, ov.betaTab)),
                        }),
                      (0, w.jsx)(of, {
                        value: v.DataControls,
                        icon: ev.tQn,
                        label: (0, w.jsx)(
                          T.Z,
                          (0, b._)({}, ov.dataControlsTab)
                        ),
                      }),
                    ],
                  }),
                  (0, w.jsxs)(og, {
                    value: v.General,
                    children: [
                      (0, w.jsx)(oh, { children: (0, w.jsx)(ou, {}) }),
                      !R &&
                        D.has("tools3_dev") &&
                        (0, w.jsx)(oh, {
                          children: (0, w.jsx)(os, {
                            label: s.formatMessage(ov.openPluginDevtools),
                            enabled: F,
                            onChange: i3.setIsOpen,
                          }),
                        }),
                      (0, w.jsx)(oh, {
                        children: (0, w.jsx)(ol, {
                          color: "danger",
                          disabled: !l,
                          label: s.formatMessage(ov.clearChatLabel),
                          buttonLabel: s.formatMessage(ov.clearChatButton),
                          onClick: K,
                        }),
                      }),
                    ],
                  }),
                  (0, w.jsx)(og, {
                    value: v.BetaFeatures,
                    children: (0, w.jsx)(oo, {}),
                  }),
                  (0, w.jsxs)(og, {
                    value: v.DataControls,
                    children: [
                      !R &&
                        (0, w.jsx)(oh, {
                          children: (0, w.jsx)(os, {
                            label: s.formatMessage(ov.chatHistoryToggleLabel),
                            enabled: !Z,
                            onChange: ee,
                            description: (0, w.jsx)(
                              T.Z,
                              (0, eh._)(
                                (0, b._)({}, ov.chatHistoryDescription),
                                {
                                  values: {
                                    link: function (e) {
                                      return (0, w.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893 ",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: e,
                                      });
                                    },
                                  },
                                }
                              )
                            ),
                          }),
                        }),
                      U &&
                        (0, w.jsx)(oh, {
                          children: (0, w.jsx)(ol, {
                            label: s.formatMessage(ov.sharedConversations),
                            buttonLabel: s.formatMessage(
                              ov.sharedConversationsButton
                            ),
                            onClick: function () {
                              M(!0);
                            },
                          }),
                        }),
                      (0, w.jsx)(oh, {
                        children: (0, w.jsx)(ol, {
                          label: s.formatMessage(ov.exportData),
                          buttonLabel: s.formatMessage(ov.exportButton),
                          onClick: J,
                        }),
                      }),
                      (0, w.jsx)(oh, {
                        children: (0, w.jsx)(ol, {
                          label: s.formatMessage(ov.deleteAccount),
                          buttonLabel: s.formatMessage(ov.deleteAccountButton),
                          color: "danger",
                          onClick: X,
                        }),
                      }),
                      D.has(es.i) &&
                        !(null == O
                          ? void 0
                          : null === (n = O.user) || void 0 === n
                          ? void 0
                          : n.mfa) &&
                        ea &&
                        (0, w.jsx)(oh, {
                          children: (0, w.jsx)(ol, {
                            label: s.formatMessage(ov.enable2fa),
                            buttonLabel: s.formatMessage(ov.enable),
                            onClick: en,
                          }),
                        }),
                      (null == O
                        ? void 0
                        : null === (r = O.user) || void 0 === r
                        ? void 0
                        : r.mfa) &&
                        ea &&
                        (0, w.jsx)(oh, {
                          children: (0, w.jsx)(ol, {
                            label: s.formatMessage(ov.disable2fa),
                            buttonLabel: s.formatMessage(ov.disable),
                            onClick: ei,
                            color: "danger",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function oo() {
        var e,
          t = (0, er.Z)(),
          n = (0, ex.kP)().session,
          r = (0, eU.N2)(),
          a = (0, eU.Fl)(),
          i = a.isBrowsingAvailable,
          o = a.isBrowsingEnabled,
          s = a.isChatPreferencesAvailable,
          l = a.isChatPreferencesEnabled,
          u = a.isPluginsAvailable,
          d = a.isPluginsEnabled,
          c = a.isCodeInterpreterAvailable,
          f = a.isCodeInterpreterEnabled,
          g = (0, rh.D)({
            mutationFn: function (t) {
              var r = t.feature,
                a = t.enabled;
              return P.ZP.setUserSettingsBetaFeature(
                null !== (e = null == n ? void 0 : n.accessToken) &&
                  void 0 !== e
                  ? e
                  : "",
                r,
                a
              );
            },
            onSettled: r,
            onError: function () {
              tC.m.danger(t.formatMessage(ov.betaSettingsUpdateFailed));
            },
          }),
          h = g.isLoading,
          m = g.variables,
          p = g.mutate,
          v = h && (null == m ? void 0 : m.feature) === eU.tr.BROWSING,
          x = h && (null == m ? void 0 : m.feature) === eU.tr.CHAT_PREFERENCES,
          y = h && (null == m ? void 0 : m.feature) === eU.tr.CODE_INTERPRETER,
          j = h && (null == m ? void 0 : m.feature) === eU.tr.PLUGINS;
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(oh, {
              children: (0, w.jsx)("p", {
                children: (0, w.jsx)(T.Z, (0, b._)({}, ov.betaIntro)),
              }),
            }),
            i &&
              (0, w.jsx)(oh, {
                children: (0, w.jsx)(os, {
                  label: t.formatMessage(ov.betaBrowsingToggleLabel),
                  disabled: v,
                  enabled: v ? (null == m ? void 0 : m.enabled) : o,
                  onChange: function (e) {
                    p({ feature: eU.tr.BROWSING, enabled: e });
                  },
                  description: (0, w.jsx)(
                    T.Z,
                    (0, b._)({}, ov.betaBrowsingToggleDescription)
                  ),
                }),
              }),
            s &&
              (0, w.jsx)(oh, {
                children: (0, w.jsx)(os, {
                  label: t.formatMessage(ov.betaChatPreferencesToggleLabel),
                  disabled: x,
                  enabled: x ? (null == m ? void 0 : m.enabled) : l,
                  onChange: function (e) {
                    p({ feature: eU.tr.CHAT_PREFERENCES, enabled: e });
                  },
                  description: (0, w.jsx)(
                    T.Z,
                    (0, b._)({}, ov.betaChatPreferencesToggleDescription)
                  ),
                }),
              }),
            u &&
              (0, w.jsx)(oh, {
                children: (0, w.jsx)(os, {
                  label: t.formatMessage(ov.betaPluginToggleLabel),
                  disabled: j,
                  enabled: j ? (null == m ? void 0 : m.enabled) : d,
                  onChange: function (e) {
                    p({ feature: eU.tr.PLUGINS, enabled: e });
                  },
                  description: (0, w.jsx)(
                    T.Z,
                    (0, b._)({}, ov.betaPluginToggleDescription)
                  ),
                }),
              }),
            c &&
              (0, w.jsx)(oh, {
                children: (0, w.jsx)(os, {
                  label: t.formatMessage(ov.betaCodeInterpreterToggleLabel),
                  disabled: y,
                  enabled: y ? (null == m ? void 0 : m.enabled) : f,
                  onChange: function (e) {
                    p({ feature: eU.tr.CODE_INTERPRETER, enabled: e });
                  },
                  description: (0, w.jsx)(
                    T.Z,
                    (0, b._)({}, ov.betaCodeInterpreterToggleDescription)
                  ),
                }),
              }),
          ],
        });
      }
      function os(e) {
        var t = e.label,
          n = e.disabled,
          r = e.enabled,
          a = e.onChange,
          i = e.description;
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, w.jsx)("div", { children: t }),
                (0, w.jsx)(or.Z, {
                  disabled: n,
                  enabled: r,
                  onChange: a,
                  label: t,
                }),
              ],
            }),
            null != i &&
              (0, w.jsx)("div", {
                className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                children: i,
              }),
          ],
        });
      }
      function ol(e) {
        var t = e.color,
          n = e.disabled,
          r = e.label,
          a = e.buttonLabel,
          i = e.onClick;
        return (0, w.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, w.jsx)("div", { children: r }),
            (0, w.jsx)(eu.z, {
              color: void 0 === t ? "neutral" : t,
              disabled: !!n,
              onClick: i,
              children: a,
            }),
          ],
        });
      }
      function ou() {
        var e = (0, tf.F)(),
          t = e.theme,
          n = e.setTheme;
        return (0, w.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, w.jsx)("div", {
              children: (0, w.jsx)(T.Z, (0, b._)({}, ov.theme)),
            }),
            (0, w.jsxs)(i1.Z.Root, {
              value: t,
              onValueChange: function (e) {
                return n(e);
              },
              children: [
                (0, w.jsxs)(i1.Z.Trigger, {
                  children: [
                    (0, w.jsx)(i1.Z.Value, {}),
                    (0, w.jsx)(i1.Z.Icon, {}),
                  ],
                }),
                (0, w.jsx)(i1.Z.Portal, {
                  children: (0, w.jsxs)(i1.Z.Content, {
                    children: [
                      (0, w.jsx)(i1.Z.Item, {
                        value: "system",
                        children: (0, w.jsx)(T.Z, (0, b._)({}, ov.system)),
                      }),
                      (0, w.jsx)(i1.Z.Item, {
                        value: "dark",
                        children: (0, w.jsx)(T.Z, (0, b._)({}, ov.dark)),
                      }),
                      (0, w.jsx)(i1.Z.Item, {
                        value: "light",
                        children: (0, w.jsx)(T.Z, (0, b._)({}, ov.light)),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function od(e) {
        var t = e.onClose,
          n = e.onDeleteHistory,
          r = (0, er.Z)();
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: r.formatMessage(ov.deleteHistoryModalTitle),
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: r.formatMessage(ov.deleteHistoryModalConfirm),
            color: "primary",
            onClick: function () {
              n(), t();
            },
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: r.formatMessage(ov.deleteHistoryModalCancel),
            color: "neutral",
            onClick: t,
          }),
        });
      }
      function oc(e) {
        var t = e.onClose,
          n = (0, er.Z)(),
          r = (0, ex.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, k.useCallback)(
            function () {
              try {
                P.ZP.submitDataExport(a).then(function () {
                  tC.m.success(n.formatMessage(ov.dataExportRequested)), t();
                });
              } catch (e) {
                tC.m.warning(n.formatMessage(ov.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, n, t]
          );
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: n.formatMessage(ov.dataExportModalTitle),
          primaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: n.formatMessage(ov.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, w.jsx)(eD.ZP.Button, {
            title: n.formatMessage(ov.dataExportModalCancel),
            color: "neutral",
            onClick: t,
          }),
          children: (0, w.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, w.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.dataExportModalDescription1)
                    ),
                  }),
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.dataExportModalDescription2)
                    ),
                  }),
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.dataExportModalDescription3)
                    ),
                  }),
                ],
              }),
              (0, w.jsx)("div", {
                children: (0, w.jsx)(
                  T.Z,
                  (0, b._)({}, ov.dataExportModalDescription4)
                ),
              }),
            ],
          }),
        });
      }
      function of(e) {
        var t = e.value,
          n = e.icon,
          r = e.label,
          a = (0, B.w$)();
        return (0, w.jsxs)(i0.xz, {
          className: (0, V.Z)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !a }
          ),
          value: t,
          children: [
            (0, w.jsx)(ed.ZP, {
              icon: n,
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, w.jsx)("div", { children: r }),
          ],
        });
      }
      function og(e) {
        var t = e.value,
          n = e.children;
        return (0, w.jsx)(i0.VY, {
          className: "w-full md:min-h-[300px]",
          value: t,
          children: (0, w.jsx)("div", {
            className:
              "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
            children: n,
          }),
        });
      }
      function oh(e) {
        var t = e.children;
        return (0, w.jsx)("div", {
          className:
            "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
          children: t,
        });
      }
      function om(e) {
        var t,
          n = e.onClose,
          r = (0, er.Z)(),
          a = (0, ex.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          o =
            null == a
              ? void 0
              : null === (t = a.user) || void 0 === t
              ? void 0
              : t.email,
          s = (0, j._)((0, k.useState)(""), 2),
          l = s[0],
          u = s[1],
          d = (0, j._)((0, k.useState)(""), 2),
          c = d[0],
          f = d[1],
          g = (0, k.useCallback)(
            function () {
              var e,
                t =
                  null == a
                    ? void 0
                    : null === (e = a.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === t || Date.now() / 1e3 - t < 600;
            },
            [a]
          ),
          h = (0, k.useCallback)(
            function () {
              try {
                g()
                  ? P.ZP.deactivateAccount(i).then(function () {
                      (0, ex.w7)();
                    })
                  : tC.m.warning(
                      r.formatMessage(ov.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 }
                    );
              } catch (e) {
                tC.m.warning(r.formatMessage(ov.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [i, r, g]
          ),
          m = (0, k.useCallback)(function () {
            (0, ex.w7)();
          }, []),
          p = "DELETE" === c && (void 0 === o || l === o),
          v = (0, j._)(
            (0, k.useState)(function () {
              return g();
            }),
            1
          )[0],
          x = (0, L.e2)();
        return (0, w.jsx)(eR.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: r.formatMessage(ov.deleteAccountTitle),
          closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: n }),
          children: (0, w.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, w.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.deleteAccountWarning)
                    ),
                  }),
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.reuseEmailPhoneWarning)
                    ),
                  }),
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.dataRemovalWarning)
                    ),
                  }),
                  (0, w.jsx)("li", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, ov.apiAccessDeletionWarning)
                    ),
                  }),
                  (null == x ? void 0 : x.purchase_origin_platform) ===
                    i4._4.MOBILE_IOS &&
                    (0, w.jsx)("li", {
                      children: (0, w.jsx)(
                        T.Z,
                        (0, b._)({}, ov.iapSubscriptionWarning)
                      ),
                    }),
                ],
              }),
              v
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      void 0 !== o
                        ? (0, w.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, w.jsx)(op, {
                                children: (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, ov.typeEmailLabel)
                                ),
                              }),
                              (0, w.jsx)(rc, {
                                value: l,
                                placeholder: o,
                                name: "email",
                                onChange: function (e) {
                                  u(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, w.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, w.jsx)(op, {
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, ov.typeDeleteInputLabel)
                            ),
                          }),
                          (0, w.jsx)(rc, {
                            value: c,
                            onChange: function (e) {
                              f(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, w.jsx)(eu.z, {
                        color: p ? "danger" : "disabled",
                        onClick: h,
                        disabled: !p,
                        className: "w-full",
                        children: p
                          ? (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsx)(ed.ZP, { icon: M.BJv }),
                                " ",
                                (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, ov.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsx)(ed.ZP, { icon: M.UIZ }),
                                " ",
                                (0, w.jsx)(
                                  T.Z,
                                  (0, b._)({}, ov.lockedButtonLabel)
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, w.jsx)(
                          T.Z,
                          (0, b._)({}, ov.recentLoginMessage)
                        ),
                      }),
                      (0, w.jsx)(eu.z, {
                        color: "primary",
                        onClick: m,
                        className: "w-full",
                        children: (0, w.jsx)(
                          T.Z,
                          (0, b._)({}, ov.refreshLoginButtonLabel)
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      ((l = v || (v = {})).General = "General"),
        (l.BetaFeatures = "BetaFeatures"),
        (l.DataControls = "DataControls");
      var op = ea.Z.label(oa()),
        ov = (0, N.vU)({
          settings: {
            id: "settingsModal.settings",
            defaultMessage: "Settings",
            description: "Title for the settings modal",
          },
          theme: {
            id: "settingsModal.theme",
            defaultMessage: "Theme",
            description: "Label for the theme setting",
          },
          system: {
            id: "settingsModal.system",
            defaultMessage: "System",
            description: "Option for the system theme",
          },
          dark: {
            id: "settingsModal.dark",
            defaultMessage: "Dark",
            description: "Option for the dark theme",
          },
          light: {
            id: "settingsModal.light",
            defaultMessage: "Light",
            description: "Option for the light theme",
          },
          sharedConversations: {
            id: "settingsModal.sharedConversations",
            defaultMessage: "Shared links",
            description: "Label for the shared chat/link button",
          },
          sharedConversationsButton: {
            id: "settingsModal.sharedConversationsButton",
            defaultMessage: "Manage",
            description: "Manage shared links/conversations button",
          },
          exportData: {
            id: "settingsModal.exportData",
            defaultMessage: "Export data",
            description: "Label for the export data button",
          },
          exportButton: {
            id: "settingsModal.exportButton",
            defaultMessage: "Export",
            description: "Export data button",
          },
          deleteAccount: {
            id: "settingsModal.deleteAccount",
            defaultMessage: "Delete account",
            description: "Label for the delete account button",
          },
          deleteAccountButton: {
            id: "settingsModal.deleteButton",
            defaultMessage: "Delete",
            description: "Delete account button",
          },
          openPluginDevtools: {
            id: "settingsModal.openPluginDevtools",
            defaultMessage: "Open plugin devtools",
            description: "Label for the open plugin devtools setting",
          },
          enable2fa: {
            id: "settingsModal.enable2fa",
            defaultMessage: "Enable two-factor authentication",
            description: "Label for the enable 2FA button",
          },
          enable: {
            id: "settingsModal.enable",
            defaultMessage: "Enable",
            description: "Enable 2FA button",
          },
          disable: {
            id: "settingsModal.disable",
            defaultMessage: "Disable",
            description: "Disable 2FA button",
          },
          disable2fa: {
            id: "settingsModal.disable2fa",
            defaultMessage: "Disable two factor authentication",
            description: "Label for the mfa remove button.",
          },
          chatHistoryDescription: {
            id: "settingsModal.chatHistoryDescription",
            defaultMessage:
              "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
            description: "Description for the chat history setting",
          },
          deleteHistoryModalTitle: {
            id: "settingsModal.deleteHistoryModalTitle",
            defaultMessage: "Clear your conversation history - are you sure?",
            description: "Title for the delete history modal",
          },
          deleteHistoryModalConfirm: {
            id: "settingsModal.deleteHistoryModalConfirm",
            defaultMessage: "Confirm deletion",
            description: "Confirm button for the delete history modal",
          },
          deleteHistoryModalCancel: {
            id: "settingsModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the delete history modal",
          },
          dataExportRequested: {
            id: "settingsModal.dataExportRequested",
            defaultMessage:
              "Successfully exported data. You should receive an email shortly with your data.",
            description: "Message shown when a data export request is received",
          },
          dataExportFailed: {
            id: "settingsModal.dataExportFailed",
            defaultMessage:
              "We were unable to process your export at this time. Please try again later.",
            description: "Message shown when a data export request fails",
          },
          dataExportModalTitle: {
            id: "settingsModal.dataExportModalTitle",
            defaultMessage: "Request data export - are you sure?",
            description: "Title for the data export modal",
          },
          dataExportModalConfirm: {
            id: "settingsModal.dataExportModalConfirm",
            defaultMessage: "Confirm export",
            description: "Confirm button for the data export modal",
          },
          dataExportModalCancel: {
            id: "settingsModal.dataExportModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the data export modal",
          },
          dataExportModalDescription1: {
            id: "settingsModal.dataExportModalDescription1",
            defaultMessage:
              "Your account details and conversations will be included in the export.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription2: {
            id: "settingsModal.dataExportModalDescription2",
            defaultMessage:
              "The data will be sent to your registered email in a downloadable file.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription3: {
            id: "settingsModal.dataExportModalDescription3",
            defaultMessage:
              "Processing may take some time. You'll be notified when it's ready.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription4: {
            id: "settingsModal.dataExportModalDescription4",
            defaultMessage: 'To proceed, click "Confirm export" below.',
            description: "Description for the data export modal",
          },
          deleteAccountSessionTooOld: {
            id: "settingsModal.deleteAccountSessionTooOld",
            defaultMessage:
              "Your login session is too old. Please log in again before deleting your account.",
            description:
              "Message shown when the user's login session is too old to delete their account.",
          },
          deleteAccountFailed: {
            id: "settingsModal.deleteAccountFailed",
            defaultMessage: "Failed to delete account. Please try again later.",
            description:
              "Message shown when there's an error deleting the user's account.",
          },
          deleteAccountTitle: {
            id: "settingsModal.deleteAccountTitle",
            defaultMessage: "Delete account - are you sure?",
            description: "Title for the delete account confirmation modal.",
          },
          deleteAccountWarning: {
            id: "settingsModal.deleteAccountWarning",
            defaultMessage:
              "Deleting your account is permanent and cannot be undone.",
            description:
              "Warning message about account deletion being permanent.",
          },
          reuseEmailPhoneWarning: {
            id: "settingsModal.reuseEmailPhoneWarning",
            defaultMessage:
              "For security reasons, you cannot reuse the same email or phone number for a new account.",
            description:
              "Warning message about not being able to reuse email or phone number for a new account.",
          },
          dataRemovalWarning: {
            id: "settingsModal.dataRemovalWarning",
            defaultMessage:
              "All your data, including profile, conversations, and API usage, will be removed.",
            description:
              "Warning message about data removal after account deletion.",
          },
          apiAccessDeletionWarning: {
            id: "settingsModal.apiAccessDeletionWarning",
            defaultMessage:
              "If you've been using ChatGPT with the API, this access will also be deleted.",
            description: "Warning message about API access being deleted.",
          },
          iapSubscriptionWarning: {
            id: "settingsModal.iapSubscriptionWarning",
            defaultMessage:
              "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
            description:
              "Warning message about cancelling in-app subscriptions.",
          },
          typeEmailLabel: {
            id: "settingsModal.typeEmailLabel",
            defaultMessage: "Please type your account email.",
            description:
              "Label for email input field when deleting an account.",
          },
          typeDeleteInputLabel: {
            id: "settingsModal.typeDeleteInputLabel",
            defaultMessage:
              'To proceed, type "DELETE" in the input field below.',
            description:
              "Label for DELETE input field when deleting an account.",
          },
          lockedButtonLabel: {
            id: "settingsModal.lockedButtonLabel",
            defaultMessage: "Locked",
            description:
              "Label for the locked button when deleting an account.",
          },
          deleteAccountButtonLabel: {
            id: "settingsModal.deleteAccountButtonLabel",
            defaultMessage: "Permanently delete my account",
            description: "Label for the button to confirm account deletion.",
          },
          recentLoginMessage: {
            id: "settingsModal.recentLoginMessage",
            defaultMessage:
              "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
            description:
              "Message shown when the user needs to log in again to delete their account.",
          },
          refreshLoginButtonLabel: {
            id: "settingsModal.refreshLoginButtonLabel",
            defaultMessage: "Refresh login",
            description: "Label for the button to refresh login.",
          },
          chatHistoryToggleLabel: {
            id: "settingsModal.chatHistoryToggleLabel",
            defaultMessage: "Chat history & training",
            description: "Label for the chat history toggle.",
          },
          dataControlsTab: {
            id: "settingsModal.dataControls",
            defaultMessage: "Data controls",
            description: "Label for the data controls tab",
          },
          betaIntro: {
            id: "settingsModal.betaIntro",
            defaultMessage:
              "As a Plus user, enjoy early access to experimental new features, which may change during development.",
            description: "Introduction for the beta features tab",
          },
          betaSettingsUpdateFailed: {
            id: "settingsModal.betaSettingsUpdateFailed",
            defaultMessage: "Failed to update your beta setting",
            description:
              "Message shown when there's an error updating beta settings",
          },
          betaPluginToggleLabel: {
            id: "settingsModal.betaPluginToggleLabel",
            defaultMessage: "Plugins",
            description: "Label for the Plugins beta toggle.",
          },
          betaPluginToggleDescription: {
            id: "settingsModal.betaPluginToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
            description: "Description for the Plugins beta toggle.",
          },
          betaBrowsingToggleLabel: {
            id: "settingsModal.betaBrowsingToggleLabel",
            defaultMessage: "Browse with Bing",
            description: "Label for the Browse with Bing beta toggle.",
          },
          betaBrowsingToggleDescription: {
            id: "settingsModal.betaBrowsingToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
            description: "Description for the Browsing beta toggle.",
          },
          betaChatPreferencesToggleLabel: {
            id: "settingsModal.betaChatPreferencesToggleLabel",
            defaultMessage: "Custom instructions",
            description: "Label for the Custom instructions toggle.",
          },
          betaChatPreferencesToggleDescription: {
            id: "settingsModal.betaChatPreferencesToggleDescription",
            defaultMessage:
              "Try a new feature that lets you share anything you'd like ChatGPT to consider across its responses.",
            description: "Description for the Custom instructions toggle.",
          },
          betaCodeInterpreterToggleLabel: {
            id: "settingsModal.betaCodeInterpreterToggleLabel",
            defaultMessage: "Code interpreter",
            description: "Label for the Code interpreter beta toggle.",
          },
          betaCodeInterpreterToggleDescription: {
            id: "settingsModal.betaCodeInterpreterToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows how to write and execute python code, and can work with file uploads. Try asking for help with data analysis, image conversions, or editing a code file. Note: files will not persist beyond a single session.",
            description: "Description for the Code interpreter beta toggle.",
          },
          generalTab: {
            id: "settingsModal.generalTab",
            defaultMessage: "General",
            description: "Label for the general tab",
          },
          betaTab: {
            id: "settingsModal.betaTab",
            defaultMessage: "Beta features",
            description: "Label for the Beta Features tab",
          },
          clearChatLabel: {
            id: "settingsModal.clearChatLabel",
            defaultMessage: "Clear all chats",
            description: "Label for the clear chat button",
          },
          clearChatButton: {
            id: "settingsModal.clearChatButton",
            defaultMessage: "Clear",
            description: "Clear chat button",
          },
        }),
        ox = { showAccountPaymentModal: !1 },
        ob = (0, S.ZP)()(function (e) {
          return (0, eh._)((0, b._)({}, ox), {
            setShowAccountPaymentModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : en();
              e({ showAccountPaymentModal: t }), n && n();
            },
          });
        }),
        oy = n(13090),
        oj = n(80691),
        ow = n(15329),
        oC = n(7813),
        o_ = n(70788);
      function ok() {
        var e = (0, W._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (ok = function () {
            return e;
          }),
          e
        );
      }
      var oM = (0, N.vU)({
          title: {
            id: "customInstructionsAnnouncement.title",
            defaultMessage: "Set your Custom instructions",
            description:
              "Text displayed in tooltip announcing custom instructions",
          },
          new: {
            id: "customInstructionsAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        oT = "oai/apps/announcement/customInstructions";
      function oN(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ef.m.setItem(oT, e), o(e);
          },
          r = (0, B.w$)(),
          a = (0, j._)(
            (0, k.useState)(function () {
              var e = ef.m.getItem(oT);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, oj.Z)(),
          l = (0, k.useRef)(null);
        return (0, w.jsxs)(ec.fC, {
          open: s && r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, w.jsx)(ec.xz, { asChild: !0, ref: l, children: t }),
            (0, w.jsx)(ec.h_, {
              children: (0, w.jsxs)(ec.VY, {
                side: "right",
                sideOffset: 16,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = l.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, w.jsx)("div", {
                    children: (0, w.jsxs)("div", {
                      className: "mb-0.5 flex items-center gap-2",
                      children: [
                        (0, w.jsx)(oP, {
                          children: (0, w.jsx)(T.Z, (0, b._)({}, oM.new)),
                        }),
                        (0, w.jsx)("div", {
                          className: "font-medium",
                          children: (0, w.jsx)(T.Z, (0, b._)({}, oM.title)),
                        }),
                        (0, w.jsx)(ec.x8, {
                          className:
                            "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                          children: (0, w.jsx)(ed.ZP, { icon: M.q5L }),
                        }),
                      ],
                    }),
                  }),
                  (0, w.jsx)(ec.Eh, {
                    asChild: !0,
                    children: (0, w.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var oP = ea.Z.span(ok());
      function oI(e) {
        var t = e.children;
        return (0, w.jsx)(nB.u, {
          as: k.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: t,
        });
      }
      function oS() {
        var e = (0, L.WY)();
        (0, L.hz)();
        var t = (0, L.ec)(L.F_.hasMultipleWorkspaces),
          n = (0, k.useCallback)(function () {
            ei.o.logEvent(eo.a.clickSidebarAccountPortalMenuItem),
              R.vm.openModal(R.B.AccountPortal);
          }, []),
          r = (0, oj.Z)();
        return (0, w.jsxs)(w.Fragment, {
          children: [
            t && (0, w.jsx)(ow.R, {}),
            !0 === e &&
              (0, w.jsxs)(ow.ZP, {
                onClick: n,
                children: [
                  (0, w.jsx)(ed.ZP, { icon: M.fzv }),
                  (0, w.jsx)(T.Z, (0, b._)({}, oZ.myPlan)),
                ],
              }),
            r &&
              (0, w.jsxs)(ow.ZP, {
                onClick: function () {
                  return R.vm.openModal(R.B.UserContext);
                },
                children: [
                  (0, w.jsx)(ed.wP, { className: "h-4 w-4" }),
                  (0, w.jsx)(T.Z, (0, b._)({}, oZ.chatPreferences)),
                ],
              }),
            !1,
          ],
        });
      }
      var oZ = (0, N.vU)({
          myPlan: {
            id: "popoverNavigation.myPlan",
            defaultMessage: "My plan",
            description: "My plan menu item",
          },
          chatPreferences: {
            id: "popoverNavigation.chatPreferences",
            defaultMessage: "Custom instructions",
            description: "Custom instructions menu item",
          },
          myFiles: {
            id: "popoverNavigation.myFiles",
            defaultMessage: "My files",
            description: "Files menu item",
          },
        }),
        oE = n(57101),
        oF = n(9181),
        oD = n.n(oF);
      function oR() {
        var e = (0, L.ec)(L.F_.hasMultipleWorkspaces);
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)(oL, {
              href: "/admin",
              children: [
                (0, w.jsx)(ed.ZP, { icon: oE.Z }),
                (0, w.jsx)(T.Z, (0, b._)({}, oA.myWorkspaceSettings)),
              ],
            }),
            e && (0, w.jsx)(ow.R, {}),
          ],
        });
      }
      function oL(e) {
        var t = e.href,
          n = e.children;
        return (0, w.jsx)(oC.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, w.jsx)(oD(), {
              href: t,
              children: (0, w.jsx)(ow.ZB, {
                $as: "span",
                className: (0, V.Z)(
                  r ? "bg-gray-700" : "cursor-pointer hover:bg-gray-700"
                ),
                children: n,
              }),
            });
          },
        });
      }
      var oA = (0, N.vU)({
        myWorkspaceSettings: {
          id: "workspacePopoverNavigation.myWorkspaceSettings",
          defaultMessage: "Workspace settings",
          description: "Workspace settings menu item",
        },
      });
      function oB(e) {
        var t = e.onClickSettings;
        return (0, w.jsxs)(oC.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, w.jsx)(oH, {}),
            (0, w.jsx)(oI, {
              children: (0, w.jsx)(oC.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                children: (0, w.jsx)(oz, { onClickSettings: t }),
              }),
            }),
          ],
        });
      }
      function oU() {
        var e = (0, ex.kP)().session,
          t = null == e ? void 0 : e.user,
          n = (0, iL.Ix)();
        return t
          ? (0, w.jsx)(w.Fragment, {
              children: (0, w.jsx)(ow.ZP, {
                onClick: function () {
                  R.vm.openModal(R.B.WorkspaceSwitcher);
                },
                children: (0, w.jsxs)("div", {
                  className: "flex w-full flex-col gap-2",
                  children: [
                    (0, w.jsx)(eV.zf, {
                      className: "h-10 w-10",
                      iconSize: "medium",
                    }),
                    (0, w.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-between gap-2",
                      children: [
                        (0, w.jsxs)("div", {
                          className: "flex flex-col items-start gap-1",
                          children: [
                            (0, w.jsx)("div", {
                              className: "text-base text-white",
                              children: n,
                            }),
                            (0, w.jsx)("div", {
                              className: "text-sm text-gray-500",
                              children: null == t ? void 0 : t.email,
                            }),
                          ],
                        }),
                        (0, w.jsx)("div", {
                          children: (0, w.jsx)(ed.ZP, {
                            icon: o_.Z,
                            size: "small",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var oO = "oai/apps/hasSeenUserSurvey6_23";
      function oq() {
        var e = (0, er.Z)(),
          t = (0, B.w$)(),
          n = (0, j._)((0, k.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = ef.m.getItem(oO);
        return r || i
          ? null
          : (0, w.jsx)("div", {
              className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
              children: (0, w.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                children: [
                  (0, w.jsxs)("div", {
                    className: "flex w-full items-start",
                    children: [
                      (0, w.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, w.jsx)("div", {
                            className: "font-bold",
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, oV.surveyTitle)
                            ),
                          }),
                          (0, w.jsx)("div", {
                            children: (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, oV.surveyDescription)
                            ),
                          }),
                        ],
                      }),
                      (0, w.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          a(!0), ef.m.setItem(oO, !0);
                        },
                        "aria-label": e.formatMessage(oV.surveyDismiss),
                        children: (0, w.jsx)(ed.QF, {
                          width: t ? "20px" : "24px",
                          height: t ? "20px" : "24px",
                        }),
                      }),
                    ],
                  }),
                  (0, w.jsxs)("a", {
                    href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                    target: "_blank",
                    className:
                      "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                    rel: "noreferrer",
                    onClick: function () {
                      ef.m.setItem(oO, !0), a(!0);
                    },
                    children: [
                      (0, w.jsx)(ed.ZP, { size: "small", icon: M.AlO }),
                      (0, w.jsx)(T.Z, (0, b._)({}, oV.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function oz(e) {
        var t = e.onClickSettings,
          n = (0, L.WY)(),
          r = (0, L.ec)(L.F_.isBusinessWorkspace),
          a = (0, L.hz)().has(es.G_),
          i = (0, L.ec)(L.F_.hasMultipleWorkspaces);
        return (0, w.jsxs)("nav", {
          children: [
            a && (0, w.jsx)(oq, {}),
            i && (0, w.jsx)(oU, {}),
            r ? (0, w.jsx)(oR, {}) : (0, w.jsx)(oS, {}),
            (0, w.jsxs)(ow.ZP, {
              as: "a",
              href: "https://help.openai.com/en/collections/3742473-chatgpt",
              target: "_blank",
              onClick: function () {
                ei.o.logEvent(eo.a.clickFaqLink);
              },
              children: [
                (0, w.jsx)(ed.ZP, { icon: M.AlO }),
                (0, w.jsx)(T.Z, (0, b._)({}, oV.helpAndFaq)),
              ],
            }),
            (0, w.jsxs)(ow.ZP, {
              onClick: t,
              children: [
                (0, w.jsx)(ed.ZP, { icon: M.nbt }),
                n
                  ? (0, w.jsx)(T.Z, (0, b._)({}, oV.settingsPlus))
                  : (0, w.jsx)(T.Z, (0, b._)({}, oV.settings)),
              ],
            }),
            (0, w.jsx)(ow.R, {}),
            (0, w.jsxs)(ow.ZP, {
              onClick: function () {
                ei.o.logEvent(eo.a.clickLogOut, { eventSource: "mouse" }),
                  (0, ex.w7)();
              },
              children: [
                (0, w.jsx)(ed.ZP, { icon: M.xqh }),
                (0, w.jsx)(T.Z, (0, b._)({}, oV.logOut)),
              ],
            }),
          ],
        });
      }
      function oH() {
        var e = (0, ex.kP)().session;
        return (null == e ? void 0 : e.user) ? (0, w.jsx)(oW, {}) : null;
      }
      function oW() {
        var e = (0, iL.Ix)();
        return (0, w.jsx)(oN, {
          children: (0, w.jsxs)(oC.v.Button, {
            className:
              "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
            children: [
              (0, w.jsx)("div", {
                className: "flex-shrink-0",
                children: (0, w.jsx)(eV.zf, { iconSize: "redesign" }),
              }),
              (0, w.jsx)("div", {
                className:
                  "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                children: e,
              }),
              (0, w.jsx)(ed.ZP, {
                icon: M.K9M,
                size: "small",
                className: "flex-shrink-0 text-gray-500",
              }),
            ],
          }),
        });
      }
      var oV = (0, N.vU)({
        helpAndFaq: {
          id: "navigation.helpAndFaq",
          defaultMessage: "Help & FAQ",
          description: "Help & FAQ menu item",
        },
        settings: {
          id: "navigation.settings",
          defaultMessage: "Settings",
          description: "Settings menu item",
        },
        settingsPlus: {
          id: "navigation.settingsPlus",
          defaultMessage: "Settings & Beta",
          description: "Settings menu item for Plus users",
        },
        logOut: {
          id: "navigation.logOut",
          defaultMessage: "Log out",
          description: "Log out menu item",
        },
        takeSurveyButton: {
          id: "navigation.survey.takeSurveyButton",
          defaultMessage: "Take survey",
          description: "Survey offer call to action",
        },
        surveyDismiss: {
          id: "navigation.surveyDismiss",
          defaultMessage: "Dismiss survey",
          description: "Survey offer dismiss button",
        },
        surveyDescription: {
          id: "navigation.surveyDescription",
          defaultMessage: "Shape the future of ChatGPT.",
          description: "Survey offer description",
        },
        surveyTitle: {
          id: "navigation.surveyTitle",
          defaultMessage: "We’d love to hear from you!",
          description: "Survey offer title",
        },
      });
      function oQ() {
        var e = (0, W._)([
          "flex-col flex-1 transition-opacity duration-500\n  ",
          "\n  ",
          "",
        ]);
        return (
          (oQ = function () {
            return e;
          }),
          e
        );
      }
      function oG(e) {
        var t = e.onDeleteHistory,
          n = e.onNewThread,
          r = e.children,
          a = (0, er.Z)(),
          i = (0, L.hz)(),
          o = i.has(es.Ue),
          s = (0, L.WY)(),
          l = (0, L.$T)(),
          u = (0, oj.Z)(),
          d = (0, L.ec)(L.F_.isBusinessWorkspace),
          c = (0, iS.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          f = ob(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          g = (0, k.useCallback)(
            function () {
              f(!0, function () {
                ei.o.logEvent(eo.a.clickSidebarAccountPaymentMenuItem);
              });
            },
            [f]
          ),
          h = (0, k.useRef)(null),
          m = (0, j._)((0, k.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, k.useContext)(A.QL),
          y = x.historyDisabled,
          C = x.toggleHistoryDisabled,
          _ = x.getModifiedSettings,
          N = x.unsetModifiedSettings,
          P = _(),
          I = (0, j._)((0, k.useState)(P), 2),
          S = I[0],
          Z = I[1],
          E = (0, k.useCallback)(function () {
            Z(!0);
          }, []),
          F = (0, k.useCallback)(
            function () {
              Z(!1), N();
            },
            [N]
          ),
          D = (0, k.useCallback)(
            function () {
              n(), C();
            },
            [n, C]
          ),
          B = (0, ay.Xu)(y).data,
          U = (0, k.useMemo)(
            function () {
              var e = !1;
              return (
                null != B &&
                  ("" !== B.aboutModelMessage || "" !== B.aboutUserMessage) &&
                  (e = !0),
                (0, w.jsxs)("div", {
                  className: (0, V.Z)(
                    "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                    y ? "visible max-h-72" : "invisible max-h-0"
                  ),
                  children: [
                    (0, w.jsxs)("div", {
                      className: "bg-gray-900 px-4 py-3",
                      children: [
                        (0, w.jsx)("div", {
                          className: "p-1 text-sm text-gray-100",
                          children: (0, w.jsx)(
                            T.Z,
                            (0, b._)({}, oY.chatHistoryOff)
                          ),
                        }),
                        (0, w.jsx)("div", {
                          className: "p-1 text-xs text-gray-500",
                          children: (0, w.jsx)(
                            T.Z,
                            (0, eh._)(
                              (0, b._)(
                                {},
                                e
                                  ? oY.chatHistoryOffWithChatPrefsDescription
                                  : oY.chatHistoryOffDescription
                              ),
                              {
                                values: {
                                  learnMore: (0, w.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: (0, w.jsx)(
                                      T.Z,
                                      (0, b._)({}, oY.learnMore)
                                    ),
                                  }),
                                  b: function (e) {
                                    return (0, w.jsx)("strong", {
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        }),
                        (0, w.jsxs)(eu.z, {
                          className: "mt-4 w-full",
                          onClick: D,
                          color: "primary",
                          size: "medium",
                          children: [
                            (0, w.jsx)(ed.ZP, { icon: M.$IY }),
                            (0, w.jsx)(T.Z, (0, b._)({}, oY.enableChatHistory)),
                          ],
                        }),
                      ],
                    }),
                    (0, w.jsx)("div", {
                      className:
                        "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                    }),
                  ],
                })
              );
            },
            [B, y, D]
          );
        (0, k.useEffect)(
          function () {
            var e;
            h.current &&
              v(
                (e = h.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
          },
          [r]
        );
        var O = !(0, L.WY)() && !i.has("disable_upgrade_ui"),
          q = (0, L.KQ)(),
          z = (0, R.tN)(function (e) {
            return e.isFilesModalOpen;
          });
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, w.jsx)(nT.f, {
                  asChild: !0,
                  children: (0, w.jsx)("h2", {
                    children: (0, w.jsx)(
                      T.Z,
                      (0, b._)({}, oY.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, w.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2",
                  "aria-label": a.formatMessage(oY.chatHistoryLabel),
                  children: [
                    (0, w.jsxs)("div", {
                      className: "mb-1 flex flex-row gap-2",
                      children: [
                        (0, w.jsxs)(oy.MP, {
                          onClick: n,
                          children: [
                            (0, w.jsx)(ed.ZP, { icon: y ? M.Bw1 : M.OvN }),
                            (0, w.jsx)(
                              T.Z,
                              (0, b._)({}, y ? oY.clearChat : oY.newChat)
                            ),
                          ],
                        }),
                        o && (0, w.jsx)(oy.H, {}),
                      ],
                    }),
                    U,
                    (0, w.jsx)(o$, {
                      ref: h,
                      $offsetScrollbar: p,
                      $disableScroll: y,
                      children: r,
                    }),
                    (0, w.jsxs)("div", {
                      className: "border-t border-white/20 pt-2 empty:hidden",
                      children: [
                        !l &&
                          !1 === s &&
                          c &&
                          !d &&
                          (0, w.jsx)(ow.Vq, {
                            onClick: g,
                            className: "rounded-md",
                            children: (0, w.jsxs)("span", {
                              className: "flex w-full flex-row justify-between",
                              children: [
                                (0, w.jsxs)("span", {
                                  className:
                                    "gold-new-button flex items-center gap-3",
                                  children: [
                                    (0, w.jsx)(ed.ZP, { icon: M.fzv }),
                                    q
                                      ? (0, w.jsx)(
                                          T.Z,
                                          (0, b._)({}, oY.renewPlus)
                                        )
                                      : (0, w.jsx)(
                                          T.Z,
                                          (0, b._)({}, oY.upgradeToPlus)
                                        ),
                                  ],
                                }),
                                O &&
                                  !q &&
                                  (0, w.jsx)("span", {
                                    className:
                                      "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                    children: (0, w.jsx)(
                                      T.Z,
                                      (0, b._)({}, oY.newLabel)
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        (0, w.jsx)(oB, { onClickSettings: E }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            S &&
              (0, w.jsx)(oi, {
                onClose: F,
                onToggleHistoryDisabled: n,
                onDeleteHistory: t,
              }),
            i.has("files_list_ui") && z && (0, w.jsx)(iX, {}),
            u && (0, w.jsx)(ay.wm, {}),
            (0, w.jsx)(iU, {}),
          ],
        });
      }
      var o$ = ea.Z.div(
          oQ(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        ),
        oY = (0, N.vU)({
          upgradeToPlus: {
            id: "NavigationContent.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "NavigationContent.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          chatHistoryLabel: {
            id: "NavigationContent.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "NavigationContent.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "NavigationContent.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          chatHistoryOffWithChatPrefsDescription: {
            id: "navigation.chatHistoryOffWithChatPrefsDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. Your Custom Instructions will also be disabled. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "NavigationContent.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "NavigationContent.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newLabel: {
            id: "NavigationContent.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
          clearChat: {
            id: "NavigationContent.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
          newChat: {
            id: "NavigationContent.newChat",
            defaultMessage: "New chat",
            description: "New chat button label",
          },
        }),
        oJ = n(82277),
        oK = n(6128),
        oX = n(73413),
        o0 = n.n(oX),
        o1 = n(11253),
        o2 = n.n(o1),
        o3 = n(82534),
        o5 = n(44675),
        o4 = "/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((u = x || (x = {})).Idle = "idle"),
        (u.Loading = "loading"),
        (u.ScriptLoaded = "script_loaded"),
        (u.Ready = "ready"),
        (u.Done = "done"),
        (u.Error = "error"),
        (u.Failed = "failed"),
        (u.CAPTCHA = "captcha");
      var o8 = new ((function () {
          function e() {
            (0, O._)(this, e), (this.status = x.Idle);
            var t,
              n = this;
            this.getEnforcementToken =
              ((t = (0, eg._)(function (e) {
                var t;
                return (0, em.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, n._getArkosePromise()];
                    case 1:
                      return (
                        (t = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            n.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              n.setOnError(function (i) {
                                if (e) {
                                  var o, s, l, u, d;
                                  o3.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = o5.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (u =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== u
                                        ? u
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (d =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== d
                                        ? d
                                        : "Unknown Arkose error"
                                    ),
                                    n._showUserError();
                                } else t.reset(), n.getEnforcementToken(!0).then(r, a);
                              }),
                              n.setOnFailed(function () {
                                var e;
                                o3.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = o5.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  n._showUserError();
                              }),
                              t.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              });
          }
          var t = e.prototype;
          return (
            (t._getArkosePromise = function (e) {
              var t = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (n, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      t.setStatus(x.Loading);
                    var a = document.createElement("script");
                    (a.src = o4),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", x.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        n(e),
                          t.setStatus(x.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              t.onCompleted(e);
                            },
                            onError: function (e) {
                              t.onError(e);
                            },
                            onFailed: function (e) {
                              t.onFailed(e);
                            },
                            onShown: function (e) {
                              t.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (o) {
                      if ("load" === o.type && t.status !== x.Ready)
                        t._startReadyTimeout(), t.setStatus(x.ScriptLoaded);
                      else if ("error" === o.type) {
                        if ((t.setStatus(x.Error), e)) {
                          var s;
                          o3.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (s = o5.env.APP_RELEASE) && void 0 !== s
                                ? s
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            t._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (t.arkoseInstancePromise = void 0),
                            t._getArkosePromise(!0).then(n, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (t._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === x.ScriptLoaded) {
                  var t;
                  o3.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (t = o5.env.APP_RELEASE) && void 0 !== t
                        ? t
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (t._showUserError = function () {
              tC.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (t.gatherData = function () {
              return this._getArkosePromise();
            }),
            (t.setStatus = function (e) {
              this.status = e;
            }),
            (t.onCompleted = function (e) {
              var t;
              null === (t = this._onCompleted) ||
                void 0 === t ||
                t.call(this, e);
            }),
            (t.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (t.onError = function (e) {
              var t;
              null === (t = this._onError) || void 0 === t || t.call(this, e);
            }),
            (t.setOnError = function (e) {
              this._onError = e;
            }),
            (t.onFailed = function (e) {
              var t;
              null === (t = this._onFailed) || void 0 === t || t.call(this, e);
            }),
            (t.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (t.onShown = function (e) {
              var t;
              null === (t = this._onShown) || void 0 === t || t.call(this, e);
            }),
            (t.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        o6 = n(16600),
        o7 = n(2827);
      function o9(e) {
        var t = e.id,
          n = e.label,
          r = e.disabled;
        return (0, w.jsxs)("div", {
          className: "form-check",
          children: [
            (0, w.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: t,
            }),
            (0, w.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: t,
              children: n,
            }),
          ],
        });
      }
      function se() {
        var e = (0, W._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function st() {
        var e = (0, W._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (st = function () {
            return e;
          }),
          e
        );
      }
      function sn() {
        var e = (0, W._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (sn = function () {
            return e;
          }),
          e
        );
      }
      function sr() {
        var e = (0, W._)([""]);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      var sa = (0, N.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared chat",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function si(e) {
        var t,
          n,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              (0, eH.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function so(e) {
        var t,
          n,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          o = e.handleSubmitFeedback,
          s = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          d = e.activeRequests,
          c = e.currentModelId,
          f = e.onChangeItemInView,
          g = e.onRequestMoreCompletions,
          h = e.onDeleteNode,
          m = e.onRequestCompletion,
          p = e.onUpdateNode,
          v = (0, er.Z)(),
          x = I.tQ.getTree(u),
          y = (0, I.XK)(u);
        (0, k.useEffect)(
          function () {
            "report" === a && ex.pg.forceEnableSession();
          },
          [a]
        );
        var C = (0, k.useRef)(0.5 > Math.random() ? "left" : "right"),
          _ = null == x ? void 0 : x.getConversationTurns(r || "root"),
          N = _.length - 1,
          S = _[_.length - 1],
          Z = (0, L.hz)().has(es.FZ),
          E = (0, j._)((0, k.useState)("critique"), 2),
          F = E[0],
          D = E[1],
          R = (0, B.w$)(),
          A = (0, L.hz)().has(es.Pt) && si(S, !0) && R,
          U = (0, k.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: I.tQ.getServerThreadId(u),
                rating: a,
                model: c,
              };
            },
            [r, u, a, c]
          ),
          O =
            null == _
              ? void 0
              : _[(null == _ ? void 0 : _.length) - 1].variantIds,
          q = null == O ? void 0 : O[(null == O ? void 0 : O.length) - 1],
          z = (n = (t = null == x ? void 0 : x.getConversationTurns(q))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          H = null == x ? void 0 : x.getConversationTurns(z),
          W = (0, k.useMemo)(
            function () {
              var e =
                null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1];
              return "thumbsDown" === a && A && si(e) && si(S);
            },
            [a, A, H, S]
          ),
          Q = (0, k.useRef)(Date.now()),
          G = (0, k.useRef)(-1),
          $ = (0, k.useRef)(Date.now()),
          Y = (0, k.useRef)(Date.now());
        (0, k.useEffect)(
          function () {
            "compare" === F
              ? ((G.current = Date.now()),
                ei.o.logEvent(eo.a.displayedComparisonUIV0, U))
              : "critique" === F &&
                "thumbsDown" === a &&
                ei.o.logEvent(eo.a.displayedThumbsDownFeedbackForm, U);
          },
          [F]
        );
        var J = _.length - 2,
          K = H.length - 1,
          X = H[H.length - 1],
          ee = (0, k.useMemo)(
            function () {
              return X && eW.Cv.getRequestIdFromConversationTurn(X);
            },
            [X]
          ),
          et = (0, k.useMemo)(
            function () {
              return d.has(ee);
            },
            [d, ee]
          );
        (0, k.useMemo)(
          function () {
            et || (Y.current = Date.now());
          },
          [et]
        );
        var ea = S.messages,
          el = ea[ea.length - 1],
          eu = el.message.id,
          ed = el.nodeId,
          ec = x.getLeafFromNode(ed),
          ef = X.messages,
          eg = ef[ef.length - 1],
          em = eg.message.id,
          ep = eg.nodeId,
          ev = x.getLeafFromNode(ep),
          eb =
            "critique" === F
              ? "report" === a
                ? v.formatMessage(sa.provideReportModalTitle)
                : v.formatMessage(sa.provideAdditionalFeedback)
              : v.formatMessage(sa.pickBestAnswer),
          ey = (0, k.useRef)([]),
          ej = (0, k.useRef)(""),
          ew = (0, k.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ey.current = (0, eA._)(t || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ej.current =
                  (null == t ? void 0 : t["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, k.useCallback)(
            function () {
              ew(),
                o(ej.current, ey.current),
                "thumbsDown" === a &&
                  ei.o.logEvent(eo.a.submitThumbsDownFeedbackForm, U),
                W ? D("compare") : i();
            },
            [ew, o, a, W, U, i]
          ),
          e_ = (0, k.useCallback)(
            function (e, t) {
              var n = I.tQ.getServerThreadId(u);
              if (null != n) {
                var r = I.tQ.getThreadCurrentLeafId(u);
                P.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    tC.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    tC.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [u, i]
          ),
          ek = (0, k.useCallback)(
            function () {
              ew(),
                ey.current.push("moderation-reject"),
                e_(ej.current, ey.current);
            },
            [e_, ew]
          ),
          eM = (0, k.useCallback)(
            function () {
              ew(),
                ey.current.push("moderation-accept"),
                e_(ej.current, ey.current);
            },
            [e_, ew]
          ),
          eT =
            "moderate" === a
              ? (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)(eD.ZP.Button, {
                      title: v.formatMessage(sa.submitRejectModeration),
                      color: "danger",
                      onClick: ek,
                    }),
                    (0, w.jsx)(eD.ZP.Button, {
                      title: v.formatMessage(sa.submitAcceptModeration),
                      color: "primary",
                      onClick: eM,
                    }),
                  ],
                })
              : "critique" === F
              ? (0, w.jsx)(eD.ZP.Button, {
                  title: v.formatMessage(
                    "report" === a ? sa.submitReport : sa.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eN = "left" === C.current,
          eP = eN ? "new" : "original",
          eI = eN ? "original" : "new",
          eS = eN
            ? v.formatMessage(sa.newAnswer)
            : v.formatMessage(sa.originalAnswer),
          eZ = eN
            ? v.formatMessage(sa.originalAnswer)
            : v.formatMessage(sa.newAnswer),
          eE = eN
            ? v.formatMessage(sa.newAnswerBetter)
            : v.formatMessage(sa.originalAnswerBetter),
          eF = eN
            ? v.formatMessage(sa.originalAnswerBetter)
            : v.formatMessage(sa.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eB = (0, k.useCallback)(
            function (e) {
              var t = "left" === e ? eP : "right" === e ? eI : "same";
              if (
                (ei.o.logEvent(
                  eo.a.submittedComparisonUIV0,
                  Object.assign({}, U, { choice: t })
                ),
                eL)
              ) {
                var n = I.tQ.getTree(u),
                  r = n.getMetadata(ed);
                n.updateNode(ed, {
                  metadata: {
                    $set: (0, eh._)((0, b._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var o = n.getMetadata(ep);
                n.updateNode(ep, {
                  metadata: {
                    $set: (0, eh._)((0, b._)({}, o), {
                      inlineComparisonRating: t,
                    }),
                  },
                }),
                  s(
                    eu,
                    em,
                    a,
                    t,
                    C.current,
                    Q.current,
                    G.current,
                    $.current,
                    Y.current,
                    ej.current,
                    ey.current
                  );
              }
              I.tQ.setThreadCurrentLeafId(u, e === C.current ? ev.id : ec.id),
                i();
            },
            [eP, eI, U, eL, u, ev.id, ec.id, i, ed, ep, s, eu, em, a]
          ),
          eU = !et && null != Y.current && W,
          eO = (0, k.useCallback)(
            function () {
              i(),
                "critique" === F
                  ? ei.o.logEvent(
                      eo.a.skippedThumbsDownFeedbackForm,
                      Object.assign({}, U)
                    )
                  : "compare" === F &&
                    ei.o.logEvent(
                      eo.a.skippedComparisonUIV0,
                      Object.assign({}, U)
                    );
            },
            [i, U, F]
          ),
          eq = (0, j._)((0, k.useState)([]), 2),
          ez = eq[0],
          eH = eq[1];
        return (
          (0, k.useEffect)(function () {
            "moderate" === a &&
              P.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                eH(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, w.jsxs)(
            eR.Z,
            {
              isOpen: !0,
              onClose: eO,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === F
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === F ? ("thumbsUp" === a ? M.fmn : M.oLd) : void 0,
              title: eb,
              closeButton: (0, w.jsx)(eD.ZP.CloseButton, { onClose: eO }),
              children: [
                "critique" === F &&
                  (0, w.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, w.jsx)(o7.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? v.formatMessage(sa.thumbsUpPlaceholder)
                            : "report" === a
                            ? v.formatMessage(
                                sa.reportContentExplanationPlaceholder
                              )
                            : v.formatMessage(sa.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, w.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, w.jsx)(o9, {
                              id: "feedback-harmful",
                              label: v.formatMessage(sa.harmfulUnsafe),
                            }),
                            (0, w.jsx)(o9, {
                              id: "feedback-false",
                              label: v.formatMessage(sa.notTrue),
                            }),
                            (0, w.jsx)(o9, {
                              id: "feedback-not-helpful",
                              label: v.formatMessage(sa.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eL &&
                        (0, w.jsx)(w.Fragment, {
                          children: (0, w.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)(o9, {
                                      id: "feedback-dont-like-this",
                                      label: v.formatMessage(sa.dontLikeThis),
                                    }),
                                    (0, w.jsx)(o9, {
                                      id: "feedback-false",
                                      label: v.formatMessage(sa.notTrue),
                                    }),
                                    (0, w.jsx)(o9, {
                                      id: "feedback-not-helpful",
                                      label: v.formatMessage(sa.notHelpful),
                                    }),
                                    (0, w.jsx)(o9, {
                                      id: "feedback-harmful-offensive",
                                      label: v.formatMessage(
                                        sa.harmfulOffensive
                                      ),
                                    }),
                                    (0, w.jsx)(o9, {
                                      id: "feedback-sexual-abuse",
                                      label: v.formatMessage(sa.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    ez.map(function (e) {
                                      var t = (0, j._)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (0,
                                      w.jsx)(o9, { id: "feedback-" + n, label: r }, n);
                                    }),
                                    (0, w.jsx)(o9, {
                                      id: "feedback-copyright",
                                      label: v.formatMessage(
                                        sa.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, w.jsx)(o9, {
                                id: "feedback-content-other",
                                label: v.formatMessage(sa.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === F &&
                  H &&
                  void 0 !== y &&
                  (0, w.jsxs)("div", {
                    className: (0, V.Z)("w-full"),
                    children: [
                      (0, w.jsx)("p", {
                        className: (0, V.Z)("mb-7 mt-3"),
                        children: (0, w.jsx)(
                          T.Z,
                          (0, b._)({}, sa.continueWithChosenAnswer)
                        ),
                      }),
                      (0, w.jsx)(su, {
                        className: Z ? "rounded-2xl" : "rounded-md",
                        children: (0, w.jsx)(sd, {
                          children: (0, w.jsx)(t9, {
                            currentModelId: c,
                            turnIndex: J,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: f,
                            onChangeRating: en(),
                            onRequestMoreCompletions: g,
                            onDeleteNode: h,
                            onRequestCompletion: m,
                            onUpdateNode: p,
                            activeRequests: d,
                            showInlineEmbeddedDisplay: !0,
                          }),
                        }),
                      }),
                      (0, w.jsxs)("div", {
                        className: (0, V.Z)(),
                        children: [
                          (0, w.jsxs)("div", {
                            className: (0, V.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, w.jsx)("div", {
                                children: (0, w.jsx)("p", {
                                  className: (0, V.Z)("font-semibold"),
                                  children: eS,
                                }),
                              }),
                              (0, w.jsx)("div", {
                                children: (0, w.jsx)("p", {
                                  className: (0, V.Z)("font-semibold"),
                                  children: eZ,
                                }),
                              }),
                            ],
                          }),
                          (0, w.jsxs)("div", {
                            className: (0, V.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, w.jsxs)(sl, {
                                children: [
                                  (0, w.jsx)(sd, {
                                    children: (0, w.jsx)(t9, {
                                      currentModelId: c,
                                      turnIndex: eN ? K : N,
                                      conversationLeafId: eN ? ep : ed,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: f,
                                      onChangeRating: en(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: g,
                                      onRequestCompletion: m,
                                      onUpdateNode: p,
                                      activeRequests: d,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, w.jsx)(ss, {
                                    children: (0, w.jsx)(eD.ZP.Button, {
                                      disabled: !eU,
                                      title: eE,
                                      onClick: function () {
                                        return eB("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, w.jsxs)(sl, {
                                children: [
                                  (0, w.jsx)(sd, {
                                    children: (0, w.jsx)(t9, {
                                      currentModelId: c,
                                      turnIndex: eN ? N : K,
                                      conversationLeafId: eN ? ed : ep,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: f,
                                      onChangeRating: en(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: g,
                                      onRequestCompletion: m,
                                      onUpdateNode: p,
                                      activeRequests: d,
                                      showInlineEmbeddedDisplay: !0,
                                    }),
                                  }),
                                  (0, w.jsx)(ss, {
                                    children: (0, w.jsx)(eD.ZP.Button, {
                                      disabled: !eU,
                                      title: eF,
                                      onClick: function () {
                                        return eB("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, w.jsx)("div", {
                            className: (0, V.Z)("grid w-full"),
                            children: (0, w.jsxs)("div", {
                              className: (0, V.Z)("mb-2 text-right"),
                              children: [
                                (0, w.jsx)(eD.ZP.Button, {
                                  disabled: !eU,
                                  title: v.formatMessage(
                                    sa.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eB("same");
                                  },
                                  className: (0, V.Z)("mr-2"),
                                }),
                                (0, w.jsx)(eD.ZP.Button, {
                                  title: v.formatMessage(sa.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, w.jsx)(eD.ZP.Actions, { primaryButton: eT }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var ss = ea.Z.div(se()),
        sl = ea.Z.div(st()),
        su = ea.Z.div(sn()),
        sd = ea.Z.div(sr()),
        sc = n(50744);
      function sf() {
        var e,
          t,
          n,
          r,
          a,
          i,
          o =
            ((t = (e = rV()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = rs()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (t || !n) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                rl(
                  a
                    .filter(function (e) {
                      return (
                        "none" === e.manifest.auth.type ||
                        "service_http" === e.manifest.auth.type
                      );
                    })
                    .map(function (e) {
                      return e.id;
                    })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          d = (0, k.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, w.jsx)(eR.Z, {
              isOpen: !0,
              onClose: d,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, w.jsx)(eD.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, w.jsx)(eD.ZP.Button, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, w.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  w.jsx)("div", { className: "w-full", children: (0, w.jsx)(rw, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var sg = n(96175),
        sh = n(19350),
        sm = n(51061);
      function sp(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = (0, j._)((0, k.useState)(!1), 2),
          a = r[0],
          i = r[1],
          o = (0, _.useRouter)(),
          s = (0, k.useCallback)(
            function () {
              ei.o.logEvent(eo.a.closeAccountPaymentModal), n();
            },
            [n]
          ),
          l = (0, k.useCallback)(
            (0, eg._)(function () {
              var e;
              return (0, em.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    i(!0),
                      ei.o.logEvent(eo.a.clickAccountCustomerPortal),
                      (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, P.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), o.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      tC.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return i(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [o, i]
          ),
          u = (0, k.useCallback)(function () {
            ei.o.logEvent(eo.a.clickAccountPaymentGetHelp);
          }, []),
          d = (0, k.useCallback)(function () {
            ei.o.logEvent(eo.a.clickAccountManageIos);
          }, []),
          c = (0, L.e2)(),
          f = (0, L.YD)();
        return (0, w.jsxs)(sg.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, w.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, w.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, w.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: s,
                  children: (0, w.jsx)(M.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, w.jsx)("div", {
              className: "grid",
              children: (0, w.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, w.jsx)(sh.Oi, {
                  rowElements: [
                    (0, w.jsx)(
                      sh.Cu,
                      {
                        text: sm.S.plus.name,
                        children: (0, w.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: sm.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, w.jsx)(
                      sh.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: sm.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, w.jsx)(
                      sh.G,
                      { text: sm.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, w.jsx)(
                      sh.G,
                      { text: sm.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, w.jsx)(
                      sh.G,
                      { className: "sm:pb-1", text: sm.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == c ? void 0 : c.purchase_origin_platform) ===
                      i4._4.MOBILE_IOS &&
                      (0, w.jsx)(
                        oD(),
                        {
                          href: i4.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, w.jsx)(sh.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: sm.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!c ||
                      c.purchase_origin_platform === i4._4.WEBAPP ||
                      c.purchase_origin_platform === i4._4.GRANTED) &&
                      f &&
                      (0, w.jsx)(
                        sh.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: a,
                          text: sm.S.manageSubscriptionWeb.callToAction,
                          onClick: l,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, w.jsx)(
                      oD(),
                      {
                        href: i4.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, w.jsx)(
                          sh.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: sm.S.getHelp.callToAction,
                            onClick: u,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var sv = n(93683),
        sx = n(43019),
        sb = n(92160),
        sy = n(23111),
        sj = n(65642),
        sw = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function sC(e) {
        return s_.apply(this, arguments);
      }
      function s_() {
        return (s_ = (0, eg._)(function (e) {
          var t, n;
          return (0, em.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = (0, j._)(e.queryKey, 2))[0],
                  (n = t[1]),
                  [
                    4,
                    P.ZP.getThreadInterpreterState(n).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          tC.m.warning(
                            "This code interpreter (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.",
                            { hasCloseButton: !0, duration: 0 }
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, r.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var sk = n(55344),
        sM = n.n(sk)()(
          function () {
            return Promise.resolve().then(n.bind(n, 40803));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [40803];
              },
            },
            ssr: !1,
          }
        );
      function sT(e) {
        var t = e.children;
        return (0, w.jsx)(sM, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function sN() {
        var e = (0, W._)(["grow flex-1 overflow-hidden"]);
        return (
          (sN = function () {
            return e;
          }),
          e
        );
      }
      function sP() {
        var e = (0, W._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (sP = function () {
            return e;
          }),
          e
        );
      }
      var sI = (0, N.vU)({
        contentPolicyViolation: {
          id: "thread.modal.restrictedTerms.title",
          defaultMessage: "This prompt may violate our content policy.",
          description: "Title for the restricted terms modal",
        },
        acknowledge: {
          id: "thread.modal.common.acknowledge",
          defaultMessage: "Acknowledge",
          description: "Acknowledge button text",
        },
        doNotShareSensitive: {
          id: "thread.modal.onboarding.title",
          defaultMessage:
            "Do not share sensitive materials with this application",
          description: "Title for the onboarding warning modal",
        },
        freeResearchPreview: {
          id: "thread.chatgptFreeResearchPreview-july20-23",
          defaultMessage:
            "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT July 20 Version</link>",
          description: "Free Research Preview disclaimer",
        },
        mayProduceInaccurateInformation: {
          id: "thread.chatgptMayProduceInaccurateInformation-july20-23",
          defaultMessage:
            "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT July 20 Version</link>",
          description:
            "ChatGPT disclaimer for producing inaccurate information",
        },
        somethingWentWrong: {
          id: "thread.modal.unrecoverableError.title",
          defaultMessage: "Something went wrong",
          description: "Title for the UnrecoverableErrorModal",
        },
        tryAgainLater: {
          id: "thread.modal.unrecoverableError.description",
          defaultMessage:
            "We're sorry, but something went wrong. Please try again later.",
          description: "Description for the UnrecoverableErrorModal",
        },
        resetThread: {
          id: "thread.modal.unrecoverableError.resetThread",
          defaultMessage: "Reset thread",
          description: "Reset thread button text",
        },
        reportModalThankYouTitle: {
          id: "thread.modal.reportModalThankYou.title",
          defaultMessage: "Thank you for your report!",
          description: "Title for the post-report thank-you modal",
        },
        reportModalThankYouDescription: {
          id: "thread.modal.reportModalThankYou.description",
          defaultMessage: "Thank you for your report.",
          description: "Description for the post-report thank-you modal",
        },
        reportModalThankYouDismiss: {
          id: "thread.modal.reportModalThankYou.dismissButton",
          defaultMessage: "Close",
          description: "Close button for the post-report thank-you modal",
        },
        sharedConversationContinueConversation: {
          id: "thread.sharedConversation.continue",
          defaultMessage: "Continue this conversation",
          description:
            "Button for shared links to allow user to continue conversation in their own history",
        },
        sharedConversationReportConversation: {
          id: "thread.sharedConversation.report",
          defaultMessage: "Report conversation",
          description:
            "Button for shared links to report chat for legal, safety, or other reasons",
        },
        sharedConversationModerateConversation: {
          id: "thread.sharedConversation.moderate",
          defaultMessage: "Moderate conversation",
          description:
            "Button for shared links to moderate a chat for legal, safety, or other reasons",
        },
        reportSharedConversation: {
          id: "thread.reportSharedConversation",
          defaultMessage: "Report content",
          description: "Report shared chat footer link text",
        },
        termsOfUse: {
          id: "thread.termsOfUse",
          defaultMessage: "Terms of use",
          description: "Terms of use footer link text",
        },
        privacyPolicy: {
          id: "thread.privacyPolicy",
          defaultMessage: "Privacy policy",
          description: "Privacy policy footer link text",
        },
      });
      function sS(e) {
        var t = e.onClickReportSharedConversation;
        return (0, w.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, w.jsx)("button", {
              onClick: function () {
                t();
              },
              children: (0, w.jsx)(
                T.Z,
                (0, b._)({}, sI.reportSharedConversation)
              ),
            }),
            (0, w.jsx)("span", { children: "|" }),
            (0, w.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, w.jsx)(T.Z, (0, b._)({}, sI.termsOfUse)),
            }),
            (0, w.jsx)("span", { children: "|" }),
            (0, w.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, w.jsx)(T.Z, (0, b._)({}, sI.privacyPolicy)),
            }),
          ],
        });
      }
      var sZ = function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            d,
            c,
            f,
            g,
            h,
            m,
            p,
            v,
            x,
            y,
            C,
            N,
            S,
            Z,
            F,
            U,
            O,
            q,
            z,
            H,
            W,
            Q,
            G,
            $,
            Y,
            J,
            K,
            X,
            ee,
            et = e.initialThreadData,
            ea = e.clientThreadId,
            el = e.activeRequests,
            ed = e.setActiveRequests,
            ec = e.handleResetThread,
            ep = e.initiallyHighlightedMessageId,
            ev = e.continueConversationUrl,
            eb = (0, k.useContext)(A.gB),
            ey = (0, er.Z)(),
            ej = (0, L.hz)(),
            ew = (0, eU.Fl)().isPluginsAvailable,
            e_ = (0, B.w$)(),
            ek = ej.has(es.Pt) && e_,
            eM = (0, k.useContext)(A.QL).historyDisabled,
            eT = (0, _.useRouter)(),
            eN =
              eb &&
              (null === (Q = eT.query) || void 0 === Q
                ? void 0
                : null === (G = Q.shareParams) || void 0 === G
                ? void 0
                : G[1]) === "moderate",
            eP = (0, I.U0)(ea),
            eI = (0, I.Kt)(ea),
            eS = (0, I.oq)(ea),
            eZ = (0, I.je)(ea),
            eE = (0, j._)((0, k.useState)(!1), 2),
            eF = eE[0],
            eL = eE[1],
            eA = (0, j._)((0, k.useState)(!1), 2),
            eB = eA[0],
            eO = eA[1],
            eV = (0, j._)((0, k.useState)(), 2),
            eQ = eV[0],
            eG = eV[1],
            e$ = (0, j._)((0, k.useState)(!1), 2),
            eY = e$[0],
            eJ = e$[1],
            eK = (0, j._)((0, k.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, j._)((0, k.useState)(), 2),
            e2 = e1[0],
            e3 = e1[1],
            e5 = (0, j._)((0, k.useState)(), 2),
            e4 = e5[0],
            e8 = e5[1],
            e6 = (0, k.useRef)(null),
            e7 = (0, L.WY)(),
            e9 = (0, iS.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            te = ej.has(es.FZ),
            tt = (0, j._)((0, k.useState)(!1), 2),
            tn = tt[0],
            tr = tt[1],
            ta =
              ((o = (i = {
                exempt: !1,
                onRestrictedTermFound: (0, k.useCallback)(
                  function (e) {
                    tr(!0),
                      ei.o.logEvent(eo.a.promptUsedRestrictedWords, {
                        threadId: I.tQ.getServerThreadId(ea),
                        content: e,
                      });
                  },
                  [ea]
                ),
              }).exempt),
              (s = i.onRestrictedTermFound),
              (u = (l = (0, j._)((0, k.useState)(!1), 2))[0]),
              (d = l[1]),
              {
                hasRestrictedTerms: u,
                checkRestrictedTerms: (0, k.useCallback)(
                  function (e) {
                    var t;
                    return (sw.some(function (n) {
                      var r = n.exec(e);
                      return r && (t = r[0]), r;
                    }),
                    !o && t)
                      ? (d(!0), null == s || s(t), !0)
                      : (d(!1), !1);
                  },
                  [o, s]
                ),
              }),
            ti = ta.hasRestrictedTerms,
            to = ta.checkRestrictedTerms,
            ts = (0, j._)((0, k.useState)(!0), 2),
            tl = ts[0],
            tu = ts[1],
            td = (0, j._)((0, k.useState)(!1), 2),
            tc = td[0],
            tf = td[1],
            tg = (0, tJ.iu)(),
            th = rs(),
            tm = (0, tJ.Gg)(tg, !0),
            tp =
              null !== (ee = (0, tJ.Bv)(et.lastModelUsed, ea)) && void 0 !== ee
                ? ee
                : tm,
            tv = (0, tJ.B9)(),
            tx = void 0 !== tp ? tv.get(tp) : void 0,
            tb = is(),
            ty = (0, k.useCallback)(
              function () {
                tb(), ei.o.logEvent(eo.a.newThread);
              },
              [tb]
            ),
            tj = I.tQ.getTitle(ea),
            tw = (0, j._)((0, k.useState)(), 2),
            tC = tw[0],
            tk = tw[1],
            tM = (0, k.useCallback)(
              function (e, t) {
                var n = null != t ? t : "";
                eM ||
                  "" === n ||
                  P.ZP.generateTitle(n, e, tp)
                    .then(function (e) {
                      var r = e.title;
                      I.tQ.setTitle(n, r, I._L.Generated),
                        tb(),
                        ei.o.logEvent(eo.a.renameThread, {
                          threadId: t,
                          content: r,
                          model: tp,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eM, tp, tb]
            ),
            tT = (0, k.useCallback)(
              function (e, t, n) {
                var r = (0, L.N$)().has(es.uj);
                eM ||
                  !r ||
                  void 0 === n ||
                  (0, eH.lD)(n) ||
                  (0, eH.JD)(n) ||
                  P.ZP.generateSuggestions(e, t, tp)
                    .then(function (e) {
                      tk({ messageId: t, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eM, tp]
            ),
            tN = (0, I.Uy)(ea),
            tP =
              ((c =
                ew &&
                (null == tx
                  ? void 0
                  : null === ($ = tx.enabledTools) || void 0 === $
                  ? void 0
                  : $.includes("tools3"))
                  ? th.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (g = (f = (0, L.hz)()).has(es.PL)),
              (h = (0, k.useId)()),
              (m = (0, nF.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (p = (0, nF.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (v = (0, k.useContext)(A.QL).historyDisabled),
              (x = (0, tJ.B9)()),
              (y = (0, k.useRef)(0)),
              (C = (0, k.useRef)({})),
              (N = (0, k.useRef)(void 0)),
              (0, k.useEffect)(function () {
                return function () {
                  var e;
                  return null === (e = N.current) || void 0 === e
                    ? void 0
                    : e.call(N);
                };
              }, []),
              (S = (0, k.useCallback)(
                function (e, t, n, r) {
                  var a,
                    i,
                    o,
                    s,
                    l,
                    u = r.eventSource,
                    d = function () {
                      eq.m.logEvent(
                        "chatgpt_focus_after_blur_during_completion",
                        null,
                        {
                          completion_duration_ms: "".concat(o - E),
                          blur_time_ms: "".concat(s - E),
                          refocus_time_ms: "".concat(l - E),
                        }
                      );
                    },
                    c = function () {
                      if (void 0 === s) {
                        s = Date.now();
                        var e = function () {
                            window.removeEventListener("focus", t),
                              (N.current = void 0);
                          },
                          t = function () {
                            (l = Date.now()), void 0 !== o && d(), e();
                          };
                        window.addEventListener("focus", t), (N.current = e);
                      }
                    },
                    h = function () {
                      window.removeEventListener("blur", c),
                        setTimeout(function () {
                          D.removeAborterById(n),
                            ed(function (e) {
                              var t = new Set(e);
                              return t.delete(n), t;
                            }),
                            delete C.current[n],
                            I.tQ.releaseThread(ea);
                        }, 0);
                    },
                    v = I.tQ.getTree(ea),
                    y = n,
                    j = v.getParentId(y),
                    w = t === ez.Os.Continue,
                    _ = !0,
                    k = !1,
                    M = v.getMessage(y),
                    T = new Set(),
                    P = v.getIsBlockedFromNode(j),
                    S = !1,
                    Z = !1,
                    E = Date.now();
                  window.addEventListener("blur", c);
                  var R = rH()(
                    function () {
                      P ||
                        S ||
                        I.tQ.updateTree(ea, function (e) {
                          e.updateNodeMessage(y, M);
                        });
                    },
                    50,
                    { leading: !0, maxWait: 50 }
                  );
                  return (
                    (a = (0, eg._)(function (r) {
                      var a,
                        c,
                        j,
                        N,
                        L,
                        A,
                        B,
                        U,
                        O,
                        q,
                        z,
                        H,
                        W,
                        V,
                        Q,
                        G,
                        $,
                        Y,
                        J,
                        K,
                        X,
                        ee,
                        et,
                        en,
                        er,
                        es,
                        el,
                        eu,
                        ed;
                      return (0, em.__generator)(this, function (ec) {
                        switch (ec.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (c =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                I.tQ.updateTree(ea, function (e) {
                                  e.updateNode(y, {
                                    message: { $set: M },
                                    metadata: {
                                      $set: {
                                        err: c,
                                        errType: "danger",
                                        errCode: ((0, sy.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                h(),
                                (0, sy.T)(a) &&
                                  (null == a ? void 0 : a.code) === nF.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (m(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    p();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((j = r.isCompletion),
                                (N = r.messageId),
                                (L = r.conversationId),
                                (A = r.flagged),
                                (B = r.blocked),
                                (A || B) &&
                                  ((Z = !0),
                                  B && ((S = !0), j || (P = !0)),
                                  I.tQ.updateTree(ea, function (e) {
                                    var t = e.messageIdToNodeId(N);
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eh._)(
                                          (0, b._)({}, B ? o6.sK : o6.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                  ei.o.logEvent(
                                    j
                                      ? B
                                        ? eo.a.completionBlockedByModeration
                                        : eo.a.completionFlaggedByModeration
                                      : B
                                      ? eo.a.promptBlockedByModeration
                                      : eo.a.promptFlaggedByModeration,
                                    { threadId: L, id: N }
                                  ))),
                              "message" === r.type)
                            ) {
                              if (
                                ((U = r.message),
                                (O = r.conversationId),
                                _ && v.isFirstCompletion)
                              ) {
                                if (
                                  (null == U ? void 0 : U.author.role) ===
                                  ez.uU.System
                                )
                                  return v.appendSystemMessageToRoot(U), [2];
                                if (
                                  (null == U ? void 0 : U.author.role) ===
                                  ez.uU.User
                                )
                                  return [2];
                              }
                              _
                                ? ((z =
                                    (null ===
                                      (q = I.qN.getState().threads[ea]) ||
                                    void 0 === q
                                      ? void 0
                                      : q.continuingFromSharedConversationId) !=
                                    null),
                                  I.tQ.removeContinuingFromSharedConversationId(
                                    ea
                                  ),
                                  (_ = !1),
                                  (k = v.isFirstCompletion || z),
                                  (null == U ? void 0 : U.id) && T.add(n),
                                  void 0 !== O &&
                                    ((i = O),
                                    (0, I.Zz)(ea) &&
                                      I.tQ.setServerIdForNewThread(ea, O)),
                                  I.tQ.updateTree(ea, function (e) {
                                    e.updateNodeMessage(y, U);
                                  }),
                                  k && ty(O),
                                  (H = {
                                    id: n,
                                    threadId: O,
                                    completionType: t,
                                    eventSource: u,
                                    model: e,
                                  }),
                                  t === ez.Os.Next &&
                                    (($ =
                                      null == (G = I.qN.getState().threads[O])
                                        ? void 0
                                        : null === (W = G.conversationTurns) ||
                                          void 0 === W
                                        ? void 0
                                        : W.length),
                                    (J =
                                      null ===
                                        (Q = (Y =
                                          null == G
                                            ? void 0
                                            : null ===
                                                (V = G.conversationTurns) ||
                                              void 0 === V
                                            ? void 0
                                            : V.filter(function (e) {
                                                return e.role == ez.uU.User;
                                              }))[Y.length - 1]) || void 0 === Q
                                        ? void 0
                                        : Q.messages[0].message).content
                                      .content_type == ez.PX.Text &&
                                      ((K = J.content.parts.join("").length),
                                      (ee =
                                        null !== (X = Y.length) && void 0 !== X
                                          ? X
                                          : 0),
                                      (H.countConversationTurns = $),
                                      (H.countUserSubmittedMessages = ee),
                                      (H.countLastUserPromptTextMessageLength =
                                        K))),
                                  ei.o.logEvent(eo.a.generateCompletion, H),
                                  D.addAborter(n, C.current[n]))
                                : w ||
                                  U.id === v.getMessageId(y) ||
                                  (T.add(U.id),
                                  R.flush(),
                                  I.tQ.updateTree(ea, function (e) {
                                    e.addNode(U.id, U, y, ez.Jq.Completion);
                                  }),
                                  (y = U.id),
                                  I.tQ.setThreadCurrentLeafId(ea, y)),
                                (M = U);
                            }
                            if (
                              (R(),
                              "done" !== r.type ||
                                (P ||
                                  S ||
                                  (R.flush(),
                                  Z ||
                                    ((et = v.getMessageId(y)),
                                    k && tM(et, i),
                                    tT(i, et, M))),
                                I.tQ.updateTree(ea, function (e) {
                                  e.updateNode(y, {
                                    metadata: {
                                      $set: (0, eh._)(
                                        (0, b._)({}, v.getMetadata(y)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                h(),
                                void 0 !== s &&
                                  ((o = Date.now()),
                                  eq.m.logEvent(
                                    "chatgpt_blur_during_completion",
                                    null,
                                    {
                                      completion_duration_ms: "".concat(o - E),
                                      blur_time_ms: "".concat(s - E),
                                    }
                                  ),
                                  void 0 !== l && d()),
                                !f.has("tools3_dev")) ||
                                ((er =
                                  null === (en = x.get(e)) || void 0 === en
                                    ? void 0
                                    : en.tags.includes(tJ.S.GPT_4)),
                                g && er && o8.gatherData(),
                                !(es = (function (e) {
                                  var t,
                                    n,
                                    r,
                                    a,
                                    i =
                                      null !==
                                        (a =
                                          null === (t = e.metadata) ||
                                          void 0 === t
                                            ? void 0
                                            : null === (n = t.invoked_plugin) ||
                                              void 0 === n
                                            ? void 0
                                            : n.http_api_call_data) &&
                                      void 0 !== a
                                        ? a
                                        : null === (r = e.metadata) ||
                                          void 0 === r
                                        ? void 0
                                        : r.http_api_call_data;
                                  if (void 0 !== i) {
                                    if (e.author.role !== ez.uU.Assistant) {
                                      console.error(
                                        "Refusing to make localhost plugin HTTP call from non-assistant message",
                                        e
                                      );
                                      return;
                                    }
                                    if (
                                      "object" != typeof i ||
                                      "string" != typeof i.namespace ||
                                      0 === i.namespace.length ||
                                      "string" != typeof i.function_name ||
                                      0 === i.function_name.length ||
                                      "string" != typeof i.parent_message_id ||
                                      0 === i.parent_message_id.length ||
                                      "string" != typeof i.url ||
                                      0 === i.url.length ||
                                      "string" != typeof i.method ||
                                      ![
                                        "get",
                                        "post",
                                        "put",
                                        "delete",
                                        "patch",
                                      ].includes(i.method) ||
                                      !Array.isArray(i.qs_params) ||
                                      i.qs_params.some(function (e) {
                                        return (
                                          !Array.isArray(e) ||
                                          2 !== e.length ||
                                          "string" != typeof e[0] ||
                                          "string" != typeof e[1]
                                        );
                                      }) ||
                                      "object" != typeof i.headers ||
                                      Object.keys(i.headers).some(function (e) {
                                        return "string" != typeof e;
                                      }) ||
                                      Object.values(i.headers).some(function (
                                        e
                                      ) {
                                        return "string" != typeof e;
                                      }) ||
                                      !(
                                        null === i.body ||
                                        ("object" == typeof i.body &&
                                          Object.keys(i.body).every(function (
                                            e
                                          ) {
                                            return "string" == typeof e;
                                          }))
                                      ) ||
                                      "string" != typeof i.api_function_type ||
                                      !["kwargs", "chat"].includes(
                                        i.api_function_type
                                      )
                                    ) {
                                      console.error(
                                        "Refusing to make localhost plugin HTTP call with invalid metadata",
                                        e
                                      );
                                      return;
                                    }
                                    if (!/^https?:\/\/localhost:/.test(i.url)) {
                                      console.error(
                                        "Refusing to make localhost plugin HTTP call with non-localhost URL",
                                        e
                                      );
                                      return;
                                    }
                                    return i;
                                  }
                                })(M))))
                            )
                              return [3, 4];
                            return [
                              4,
                              (function (e) {
                                return t_.apply(this, arguments);
                              })(es),
                            ];
                          case 1:
                            if (
                              ((el = ec.sent()),
                              (eu = y),
                              I.tQ.updateTree(ea, function (e) {
                                var t = !0,
                                  n = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = el[Symbol.iterator]();
                                    !(t = (a = i.next()).done);
                                    t = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, eu, ez.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (eu = o.id);
                                  }
                                } catch (e) {
                                  (n = !0), (r = e);
                                } finally {
                                  try {
                                    t || null == i.return || i.return();
                                  } finally {
                                    if (n) throw r;
                                  }
                                }
                              }),
                              I.tQ.setThreadCurrentLeafId(ea, eu),
                              !(g && er))
                            )
                              return [3, 3];
                            return [4, o8.getEnforcementToken()];
                          case 2:
                            (ed = ec.sent()), (ec.label = 3);
                          case 3:
                            F({
                              model: e,
                              completionType: ez.Os.Next,
                              parentNodeId: eu,
                              metadata: {},
                              arkoseToken: null != ed ? ed : null,
                            }),
                              (ec.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [ty, tM, ed, ea]
              )),
              (F = (0, k.useCallback)(
                ((Z = (0, eg._)(function (e) {
                  var t, n, r, a, i, o, s, l, u, d, f, g, m, p, x, b, j;
                  return (0, em.__generator)(this, function (w) {
                    switch (w.label) {
                      case 0:
                        return (
                          (t = e.model),
                          (n = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (o = void 0 === (i = e.focusOnNewCompletion) || i),
                          (s = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = I.tQ.getTree(ea)),
                          I.tQ.retainThread(ea),
                          (d = ""
                            .concat(eW.Vh)
                            .concat(h, "-")
                            .concat(y.current++)),
                          ed(function (e) {
                            var t = new Set(e);
                            return t.add(d), t;
                          }),
                          I.tQ.updateTree(ea, function (e) {
                            e.addNode(d, "", r, ez.Jq.Completion);
                          }),
                          o && I.tQ.setThreadCurrentLeafId(ea, d),
                          (g = []),
                          (m = u.getNode(r)),
                          n === ez.Os.Next || n === ez.Os.Variant
                            ? ((f =
                                (null ===
                                  (p = (x = u.getNode(m.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || x.id),
                              g.push(m.message))
                            : (f = m.message.id),
                          void 0 === (b = I.tQ.getServerThreadId(ea)) &&
                            (0, I.Zz)(ea) &&
                            I.tQ.updateInitialThreadDataForNewThread(ea, t, c),
                          [
                            4,
                            P.ZP.publicApiCompletionStream(
                              {
                                model: t,
                                completionType: n,
                                threadId: b,
                                continueFromSharedConversationId: tN,
                                historyDisabled: v,
                                parentMessageId: f,
                                messages: g,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: c,
                                completionMetadata: s,
                              },
                              S(t, n, d, a)
                            ),
                          ]
                        );
                      case 1:
                        return (j = w.sent()), (C.current[d] = j), [2];
                    }
                  });
                })),
                function (e) {
                  return Z.apply(this, arguments);
                }),
                [ea, h, ed, tN, v, c, S]
              ))),
            tI = (0, k.useCallback)(
              function () {
                if (eS) {
                  var e = I.tQ.getTree(ea).getBranchFromLeaf(eS);
                  e.forEach(function (e) {
                    D.abortAndRemoveById(e.id);
                  }),
                    ed(function (t) {
                      var n = new Set(t);
                      return (
                        e.forEach(function (e) {
                          n.delete(e.id);
                        }),
                        n
                      );
                    });
                }
              },
              [eS, ed, ea]
            ),
            tS =
              null === (Y = tv.get(tp)) || void 0 === Y
                ? void 0
                : Y.tags.includes(tJ.S.GPT_4),
            tZ = ej.has(es.PL);
          (0, k.useEffect)(
            function () {
              tZ && tS && o8.gatherData();
            },
            [tZ, tS]
          );
          var tE = (0, k.useCallback)(
              ((U = (0, eg._)(function (e, t, n, r) {
                var a,
                  i,
                  o,
                  s,
                  l,
                  u,
                  d,
                  c,
                  f = arguments;
                return (0, em.__generator)(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (
                        ((a = !(f.length > 4) || void 0 === f[4] || f[4]),
                        (i = f.length > 5 ? f[5] : void 0),
                        (o = f.length > 6 ? f[6] : void 0),
                        r && tI(),
                        (l = I.tQ.getTree(ea)),
                        e !== ez.Os.Continue && to(l.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((u = i ? tm : tp),
                        (d =
                          null === (s = tv.get(u)) || void 0 === s
                            ? void 0
                            : s.tags.includes(tJ.S.GPT_4)),
                        !(tZ && d))
                      )
                        return [3, 2];
                      return [4, o8.getEnforcementToken()];
                    case 1:
                      (c = g.sent()), (g.label = 2);
                    case 2:
                      return (
                        tP({
                          model: u,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: a,
                          completionMetadata: o,
                          arkoseToken: null != c ? c : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, r) {
                return U.apply(this, arguments);
              }),
              [ea, to, tm, tp, tv, tZ, tP, tI]
            ),
            tF = (0, k.useCallback)(
              function (e, t, n, r) {
                I.tQ.updateTree(ea, function (a) {
                  a.addNode(e, n, t, ez.Jq.Prompt, void 0, r);
                });
              },
              [ea]
            ),
            tD = (0, k.useCallback)(
              function (e, t, n) {
                var r = t.content,
                  a = t.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                tF(e, eS, r, a.length > 0 ? { attachments: a } : {}),
                  tE(ez.Os.Next, e, n, !0, void 0, void 0, i);
              },
              [eS, tF, tE]
            ),
            tR = (0, I.nh)(ea, eS),
            tL = (0, k.useMemo)(
              function () {
                var e,
                  t,
                  n = tR.type === ez.Jq.Prompt,
                  r =
                    (null === (e = tR.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (t = tR.metadata) || void 0 === t
                      ? void 0
                      : t.errCode) !== o6.Dd;
                return !!(n || r) && 0 === el.size;
              },
              [el.size, tR]
            ),
            tA = (0, nF.Y8)(function (e) {
              return e.isoDate;
            }),
            tB = (0, k.useMemo)(
              function () {
                var e,
                  t =
                    (null === (e = tR.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === nF.uU;
                return tL && t && null != tA && "" !== tA;
              },
              [
                null === (J = tR.metadata) || void 0 === J ? void 0 : J.errCode,
                tL,
                tA,
              ]
            ),
            tU = (0, k.useCallback)(
              function (e, t) {
                var n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = I.tQ.getTree(ea).getParentPromptNode(e).id;
                tE(ez.Os.Variant, i, t, !1, n, a, { variantPurpose: r });
              },
              [tE, ea]
            ),
            tO = (0, k.useCallback)(
              function (e) {
                ei.o.logEvent(eo.a.continueCompletion),
                  tE(ez.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [tE]
            ),
            tq = (0, k.useCallback)(
              function (e) {
                var t = I.tQ.getTree(ea).getLeafFromNode(e);
                I.tQ.setThreadCurrentLeafId(ea, t.id);
              },
              [ea]
            ),
            tz = (0, k.useCallback)(
              function (e, t) {
                I.tQ.updateTree(ea, function (n) {
                  n.updateNodeText(e, t);
                });
              },
              [ea]
            ),
            tH = (0, k.useCallback)(
              function (e, t, n) {
                var r = I.tQ.getServerThreadId(ea);
                if (
                  (ei.o.logEvent(eo.a.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: tp,
                  }),
                  void 0 !== r &&
                    P.ZP.submitMessageFeedback({
                      message_id: t,
                      conversation_id: r,
                      rating: n,
                    }),
                  e3(e),
                  e8(t),
                  e0(n),
                  I.tQ.updateTree(ea, function (t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                      metadata: {
                        $set: (0, eh._)((0, b._)({}, r), { rating: n }),
                      },
                    });
                  }),
                  "thumbsDown" === n && ek)
                ) {
                  var a = I.tQ.getTree(ea).getConversationTurns(e || "root");
                  si(a[a.length - 1]) &&
                    tU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [ea, tp, ek, tU]
            ),
            tW = (0, k.useCallback)(
              function (e, t) {
                if (eX && null != e2 && "" !== e2 && (e || t.length > 0)) {
                  var n = I.tQ.getServerThreadId(ea);
                  ei.o.logEvent(eo.a.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tp,
                    rating: eX,
                    tags: t,
                  }),
                    ea &&
                      e4 &&
                      P.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: n,
                        rating: eX,
                        text: e,
                        tags: t,
                      });
                }
              },
              [eX, e2, ea, e4, tp]
            ),
            tV = (0, k.useCallback)(
              function (e, t) {
                if (eF && null != eQ && "" !== eQ) {
                  var n = I.tQ.getServerThreadId(ea);
                  ei.o.logEvent(eo.a.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tp,
                    rating: eX,
                    tags: t,
                  }),
                    P.ZP.submitSharedConversationReportFeedback({
                      message_id: eQ,
                      shared_conversation_id: n,
                      text: e,
                      tags: t,
                    }),
                    eO(!0);
                }
              },
              [eX, eF, eQ, ea, e4, tp]
            ),
            tQ = (0, k.useCallback)(
              ((O = (0, eg._)(function (e, t, n, r, a, i, o, s, l, u, d) {
                return (0, em.__generator)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return [
                        4,
                        P.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: n,
                          conversation_id: I.tQ.getServerThreadId(ea),
                          text: u,
                          tags: d.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return c.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, o, s, l, u, d) {
                return O.apply(this, arguments);
              }),
              [ea]
            ),
            tG = (0, k.useCallback)(
              function (e, t) {
                var n = I.tQ.getTree(ea).getConversationTurns(e),
                  r =
                    null == n
                      ? void 0
                      : n[(null == n ? void 0 : n.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                tU(
                  e,
                  a
                    ? (0, eh._)((0, b._)({}, t), {
                        intent: "comparison_implicit",
                      })
                    : t,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [tU, ea]
            ),
            t$ = (0, k.useCallback)(
              function (e) {
                I.tQ.updateTree(ea, function (t) {
                  t.deleteNode(e);
                });
              },
              [ea]
            ),
            tY = (0, k.useCallback)(function () {
              R.vm.closeModal(R.B.AccountPortal);
            }, []),
            tK = ob(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            tX = tK.showAccountPaymentModal,
            t0 = tK.setShowAccountPaymentModal,
            t1 = (0, k.useCallback)(
              function () {
                t0(!1);
              },
              [t0]
            ),
            t2 = (0, k.useCallback)(
              function (e, t) {
                var n = I.tQ.getTree(ea);
                if (n.isFirstCompletion && !eM) {
                  var r,
                    a = n.getParent(t);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== o6.Dd &&
                    setTimeout(function () {
                      tM(a.message.id);
                    }, 500);
                }
                D.abortAndRemoveById(t),
                  el.has(t) &&
                    (I.tQ.updateTree(ea, function (e) {
                      e.updateNodeMessageMetadata(t, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    ed(function (e) {
                      var n = new Set(e);
                      return n.delete(t), n;
                    }));
              },
              [tM, eM, el, ed, ea]
            ),
            t3 = (0, k.useCallback)(function () {
              tf(!0);
            }, []);
          (0, k.useEffect)(
            function () {
              var e = o2().subscribe("AbortCompletion", t2),
                t = o2().subscribe("UnrecoverableError", t3);
              return function () {
                o2().unsubscribe(e), o2().unsubscribe(t);
              };
            },
            [t2, t3]
          );
          var t5 = (0, I.Hk)(ea),
            t4 = eP >= 2,
            t8 = (0, I.Zz)(ea) && !t4,
            t6 = (0, k.useCallback)(function () {
              tu(!0), ef.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t7 = (0, k.useCallback)(function () {
              tr(!1);
            }, []),
            t9 = (0, I.lA)(ea, eS),
            ne = (0, I.dz)(ea, eS),
            nt = E(function (e) {
              return null != e.aborters[t5];
            }),
            nn = (0, k.useRef)(null),
            nr = (0, k.useMemo)(
              function () {
                return !nt && !t9 && ne;
              },
              [t9, ne, nt]
            ),
            na = (0, R.tN)(function (e) {
              return e.activeModals.has(R.B.AccountPortal);
            }),
            ni = (0, sj.Z)(),
            no = (0, I.XK)(ea),
            ns = (0, R.tN)(function (e) {
              return e.sharingModalThreadId === no;
            });
          (z = (q = { clientThreadId: ea, currentModelId: tp }).clientThreadId),
            (H = q.currentModelId),
            (t = (0, nD.i0)(H, nD.dN.CODE_INTERPRETER)),
            (n = (0, k.useContext)(A.gB)),
            (r = (0, ex.kP)().session),
            (a = I.tQ.getServerThreadId(z)),
            (0, eC.a)({
              queryKey: ["interpreterState", a],
              queryFn: sC,
              enabled: !!(t && a && !n && (null == r ? void 0 : r.accessToken)),
              cacheTime: 0,
            });
          var nl = (0, I.r7)(ea);
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsxs)(o0(), {
                children: [
                  null != tj && (0, w.jsx)("title", { children: tj }),
                  eb &&
                    (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, w.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, w.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != tj ? tj : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, w.jsx)(
                          "meta",
                          {
                            property: "og:decription",
                            content:
                              "Shared " +
                              (null != eZ ? "by ".concat(eZ, " ") : "") +
                              "via ChatGPT",
                          },
                          "og:description"
                        ),
                        (0, w.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png",
                          },
                          "og:image"
                        ),
                      ],
                    }),
                ],
              }),
              ej.has(es.i) ? (0, w.jsx)(sf, {}) : null,
              !tl &&
                (0, w.jsx)(
                  eR.Z,
                  {
                    isOpen: !0,
                    onClose: t6,
                    icon: oK.Z,
                    title: ey.formatMessage(sI.doNotShareSensitive),
                    primaryButton: (0, w.jsx)(eD.ZP.Button, {
                      onClick: t6,
                      title: ey.formatMessage(sI.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ti &&
                tn &&
                (0, w.jsx)(
                  eR.Z,
                  {
                    isOpen: !0,
                    onClose: t7,
                    icon: M.U0j,
                    title: ey.formatMessage(sI.contentPolicyViolation),
                    primaryButton: (0, w.jsx)(eD.ZP.Button, {
                      onClick: t7,
                      title: ey.formatMessage(sI.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              ns &&
                null != no &&
                (0, w.jsx)(a$, {
                  serverThreadId: no,
                  activeRequests: el,
                  currentThreadModel: et.lastModelUsed,
                }),
              null != eX &&
                (0, w.jsx)(so, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: tW,
                  onHandleChangeFeedbackComparisonRating: tQ,
                  currentModelId: tp,
                  feedbackTextareaRef: e6,
                  clientThreadId: ea,
                  activeRequests: el,
                  onChangeItemInView: tq,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tz,
                  onChangeRating: tH,
                  onDeleteNode: t$,
                  onRequestCompletion: tE,
                }),
              eF &&
                (0, w.jsx)(so, {
                  ratingModalNodeId: eQ,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eL(!1);
                  },
                  handleSubmitFeedback: tV,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tp,
                  feedbackTextareaRef: e6,
                  clientThreadId: ea,
                  activeRequests: el,
                  onChangeItemInView: tq,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tz,
                  onChangeRating: tH,
                  onDeleteNode: t$,
                  onRequestCompletion: tE,
                }),
              eB &&
                (0, w.jsx)(eR.Z, {
                  onClose: function () {
                    return eO(!1);
                  },
                  isOpen: !0,
                  icon: oK.Z,
                  title: ey.formatMessage(sI.reportModalThankYouTitle),
                  description: ey.formatMessage(
                    sI.reportModalThankYouDescription
                  ),
                  primaryButton: (0, w.jsx)(eD.ZP.Button, {
                    onClick: function () {
                      return eO(!1);
                    },
                    title: ey.formatMessage(sI.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eY &&
                (0, w.jsx)(so, {
                  ratingModalNodeId: eS,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eJ(!1);
                  },
                  handleSubmitFeedback: en(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tp,
                  feedbackTextareaRef: e6,
                  clientThreadId: ea,
                  activeRequests: el,
                  onChangeItemInView: tq,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tz,
                  onChangeRating: tH,
                  onDeleteNode: t$,
                  onRequestCompletion: tE,
                }),
              (0, w.jsx)(sb.Z, {}),
              (0, w.jsx)(sE, {
                children:
                  !eI &&
                  (t8 || t4) &&
                  ((W = (0, w.jsx)(
                    aD,
                    {
                      onChangeItemInView: tq,
                      onRequestMoreCompletions: tU,
                      onUpdateNode: tz,
                      onChangeRating: tH,
                      onDeleteNode: t$,
                      onRequestCompletion: tE,
                      isNewThread: t8,
                      clientThreadId: ea,
                      activeRequests: el,
                      currentThreadModel: et.lastModelUsed,
                      initiallyHighlightedMessageId: ep,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: nn,
                    },
                    ea
                  )),
                  eb
                    ? (0, w.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: W,
                      })
                    : (0, w.jsx)(sT, { children: W })),
              }),
              (0, w.jsxs)(sF, {
                children: [
                  e7 &&
                    t8 &&
                    (null == tx ? void 0 : tx.tags.includes(tJ.S.GPT_4)) &&
                    (0, w.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: ni.textareaDisclaimer,
                    }),
                  !tB &&
                    !eb &&
                    (0, w.jsx)(sc.Z, {
                      children: (0, w.jsx)(
                        sx.ZP,
                        {
                          clientThreadId: ea,
                          onRequestMoreCompletions: tG,
                          onCreateNewCompletion: tD,
                          onAbortCompletion: t2,
                          onContinueGenerating: tO,
                          currentModelId: tp,
                          isCompletionInProgress: el.has(t5),
                          className: (0, V.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            te
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: tL,
                          canContinue: nr,
                          suggestions:
                            void 0 !== tC &&
                            (null == tC ? void 0 : tC.messageId) ===
                              (null ===
                                (K = I.tQ.getTree(ea).getLastValidNode(eS)) ||
                              void 0 === K
                                ? void 0
                                : null === (X = K.message) || void 0 === X
                                ? void 0
                                : X.id)
                              ? null == tC
                                ? void 0
                                : tC.suggestions
                              : void 0,
                          disabled: !tg.size,
                          canPause: nt,
                          isInteractableSharedThread: nl,
                          ref: nn,
                        },
                        ea
                      ),
                    }),
                  eb &&
                    (0, w.jsx)(w.Fragment, {
                      children: (0, w.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, w.jsx)(eu.z, {
                            as: "link",
                            to: ev,
                            children: ey.formatMessage(
                              sI.sharedConversationContinueConversation
                            ),
                          }),
                          eN &&
                            (0, w.jsx)(eu.z, {
                              onClick: function () {
                                eJ(!0);
                              },
                              children: ey.formatMessage(
                                sI.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, w.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: eb
                      ? (0, w.jsx)(sS, {
                          onClickReportSharedConversation: function () {
                            eG(eS), eL(!0);
                          },
                        })
                      : e7
                      ? (0, w.jsx)("span", {
                          children: (0, w.jsx)(
                            T.Z,
                            (0, eh._)(
                              (0, b._)({}, sI.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, w.jsx)("a", {
                                      href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: "underline",
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        })
                      : (0, w.jsx)("span", {
                          children: (0, w.jsx)(
                            T.Z,
                            (0, eh._)((0, b._)({}, sI.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, w.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                  }),
                ],
              }),
              e9 && (0, w.jsx)(sv.Z, { isOpen: tX, onClose: t1 }),
              void 0 !== e7 &&
                e7 &&
                (0, w.jsx)(sp, { isOpen: na, onClose: tY }),
              tc &&
                (0, w.jsx)(
                  eR.Z,
                  {
                    onClose: en(),
                    isOpen: !0,
                    icon: oK.Z,
                    title: ey.formatMessage(sI.somethingWentWrong),
                    description: ey.formatMessage(sI.tryAgainLater),
                    primaryButton: (0, w.jsx)(eD.ZP.Button, {
                      onClick: function () {
                        ec(), tf(!1);
                      },
                      title: ey.formatMessage(sI.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        sE = ea.Z.div(sN()),
        sF = ea.Z.div(sP());
      function sD(e) {
        var t,
          n = e.clientThreadId,
          r = null !== (t = I.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
          a = U(n, r, !0),
          i = a.resolvedTitle,
          o = a.isTypingEffect,
          s = (0, k.useContext)(A.QL),
          l = s.historyDisabled,
          u = s.toggleHistoryDisabled;
        return (0, w.jsx)(w.Fragment, {
          children: l
            ? (0, w.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, w.jsx)(ed.ZP, { icon: M.$IY }),
                  (0, w.jsx)(T.Z, (0, b._)({}, sL.enableChatHistory)),
                ],
              })
            : o && null != i
            ? (0, w.jsx)(z, { text: i })
            : null != i
            ? i
            : (0, w.jsx)(T.Z, (0, b._)({}, sL.newChat)),
        });
      }
      var sR =
          ((d = function (e) {
            var t = e.clientThreadId,
              n = e.setClientThreadId,
              r = (0, y._)(e, ["clientThreadId", "setClientThreadId"]),
              a = (0, k.useContext)(A.gB),
              i = (0, I.UL)(t),
              o = r.setActiveRequests,
              s = (0, I.XK)(t),
              l = (0, _.useRouter)(),
              u = (0, L.hz)(),
              d = (0, k.useContext)(A.QL).historyDisabled,
              c = (0, tJ.Xy)(i.lastModelUsed, t),
              f = (0, C.NL)();
            (0, k.useEffect)(
              function () {
                return (
                  I.tQ.retainThread(t),
                  function () {
                    setTimeout(function () {
                      f.invalidateQueries(["conversation", t]);
                    }, 0),
                      I.tQ.releaseThread(t);
                  }
                );
              },
              [t, f]
            ),
              (0, k.useEffect)(
                function () {
                  R.vm.closeSharingModal();
                },
                [t, s]
              );
            var g = (0, k.useCallback)(
                function () {
                  n((0, I.OX)()),
                    c.tags.includes(tJ.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(c.id));
                },
                [n, c.tags, c.id, l]
              ),
              h = (0, R.tN)(function (e) {
                return e.activeSidebar;
              }),
              m = (0, B.w$)();
            (0, k.useEffect)(
              function () {
                return function () {
                  D.abortAllAndReset(), o(new Set());
                };
              },
              [o, t]
            );
            var p = is(),
              v = (0, k.useCallback)(
                function () {
                  P.ZP.deleteConversations().then(function () {
                    p();
                  }),
                    g(),
                    "/" !== l.asPath && l.replace({ pathname: "/" });
                },
                [g, p, l]
              );
            return (0, w.jsxs)(oJ.Z, {
              showNavigation: !a,
              renderTitle: (0, w.jsx)(sD, { clientThreadId: t }),
              renderMobileHeaderRightContent: (0, w.jsx)(oy.js, {
                onClick: g,
                children: (0, w.jsx)(ed.ZP, {
                  icon: d ? M.Bw1 : M.OvN,
                  size: "medium",
                }),
              }),
              renderSidebar: (0, w.jsx)(oG, {
                onDeleteHistory: v,
                onNewThread: g,
                children: (0, w.jsx)(iy, {
                  activeId: d ? void 0 : s,
                  onNewThread: g,
                  setActiveRequests: o,
                }),
              }),
              children: [
                (0, w.jsx)(
                  sZ,
                  (0, b._)(
                    {
                      initialThreadData: i,
                      clientThreadId: t,
                      handleResetThread: g,
                    },
                    r
                  ),
                  t
                ),
                (0, w.jsxs)(oJ.Z.Sidebars, {
                  children: [
                    u.has("debug") &&
                      "debug" === h &&
                      (0, w.jsx)(ah, {
                        clientThreadId: t,
                        slideOver: !m,
                        onClose: function () {
                          return R.vm.toggleActiveSidebar("debug");
                        },
                        isOpen: !0,
                      }),
                    u.has("tools3_dev") && (0, w.jsx)(i5, { slideOver: !m }),
                  ],
                }),
              ],
            });
          }),
          function (e) {
            var t = e.clientThreadId;
            (0, I.ax)(t);
            var n = (0, I.UL)(t),
              r = (0, j._)((0, k.useState)(new Set()), 2),
              a = r[0],
              i = r[1];
            return (
              (0, k.useEffect)(
                function () {
                  R.vm.setActiveSidebar(!1), D.reset(), i(new Set());
                },
                [n.threadId]
              ),
              (0, w.jsx)(
                d,
                (0, b._)({}, e, { activeRequests: a, setActiveRequests: i })
              )
            );
          }),
        sL = (0, N.vU)({
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "New chat",
            description: "New chat header title",
          },
        });
    },
    66570: function (e, t, n) {
      n.d(t, {
        $: function () {
          return b;
        },
        Z: function () {
          return x;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(70079),
        o = n(21389),
        s = n(32877),
        l = n(78931),
        u = n(28512);
      function d() {
        var e = (0, r._)(["bg-black rounded-md"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
          "",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["p-4 overflow-y-auto"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, r._)(["", ""]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var h = o.Z.div(d()),
        m = o.Z.div(c(), function (e) {
          return e.$isMessageRedesign && "dark:bg-gray-900";
        }),
        p = o.Z.div(f()),
        v = o.Z.code(g(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function x(e) {
        var t = e.children,
          n = e.className,
          r = e.language,
          o = e.content,
          s = (0, i.useCallback)(
            function () {
              navigator.clipboard.writeText(o);
            },
            [o]
          );
        return (0, a.jsx)(b, {
          title: r,
          headerDecoration: (0, a.jsx)(u.Z, {
            buttonText: "Copy code",
            onCopy: s,
          }),
          className: "mb-4",
          codeClassName: n,
          children: t,
        });
      }
      function b(e) {
        var t = e.children,
          n = e.title,
          r = e.headerDecoration,
          i = e.shouldWrapCode,
          o = e.className,
          u = e.codeClassName,
          d = (0, l.hz)().has(s.FZ);
        return (0, a.jsxs)(h, {
          className: o,
          children: [
            (0, a.jsxs)(m, {
              $isMessageRedesign: d,
              children: [n && (0, a.jsx)("span", { children: n }), r],
            }),
            (0, a.jsx)(p, {
              children: (0, a.jsx)(v, {
                $shouldWrap: void 0 !== i && i,
                className: u,
                children: t,
              }),
            }),
          ],
        });
      }
    },
    28512: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        o = n(70079),
        s = n(1454),
        l = n(21389),
        u = n(19012),
        d = n(88327);
      function c() {
        var e = (0, a._)(["flex ml-auto gap-2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        var t = e.buttonText,
          n = e.onCopy,
          a = e.className,
          l = (0, r._)((0, o.useState)(!1), 2),
          c = l[0],
          f = l[1],
          h = (0, u.Z)(),
          m = (0, o.useCallback)(
            function () {
              n(),
                f(!0),
                setTimeout(function () {
                  h() && f(!1);
                }, 2e3);
            },
            [h, n]
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !c &&
              (0, i.jsxs)(g, {
                onClick: m,
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: s.j4u }), t],
              }),
            c &&
              (0, i.jsxs)(g, {
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: s.UgA }), t && "Copied!"],
              }),
          ],
        });
      }
      var g = l.Z.button(c());
    },
    1568: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(35250);
      function a(e) {
        var t,
          n = e.url,
          a = e.size,
          i = void 0 === a ? 16 : a,
          o = e.className;
        try {
          t = new URL(n);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, r.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
          alt: "Favicon",
          width: i,
          height: i,
          className: o,
        });
      }
    },
    78018: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(22830),
        a = n(35250),
        i = n(39217),
        o = n(19841),
        s = n(70079),
        l = n(1454),
        u = n(70671),
        d = n(94968),
        c = n(45635),
        f = n(88327);
      function g(e) {
        var t = e.percentage,
          n = e.className,
          r = 2 * Math.PI * 45;
        return (0, a.jsxs)("svg", {
          width: "120",
          height: "120",
          viewBox: "0 0 120 120",
          className: n,
          children: [
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 stroke-gray-200 transition-[stroke-dashoffset] duration-1000 ease-in-out",
              strokeWidth: "20",
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",
              stroke: "currentColor",
              strokeWidth: "20",
              strokeDashoffset: r - (t / 100) * r,
              strokeDasharray: "".concat(r, " ").concat(r),
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
          ],
        });
      }
      function h(e) {
        return e instanceof File;
      }
      function m(e) {
        var t,
          n,
          d,
          m,
          v = e.onRemoveFileClick,
          x = e.file,
          b = e.loadingPercentage,
          y = e.onDownloadClick,
          j = (0, u.Z)(),
          w = null != y,
          C = h(x) ? x.name : x,
          _ = !!h(x) && x.type.startsWith("image/"),
          k =
            ((t = h(x) ? x : null),
            (d = (n = (0, r._)((0, s.useState)(void 0), 2))[0]),
            (m = n[1]),
            (0, s.useEffect)(
              function () {
                if (t && t.type.startsWith("image/")) {
                  var e = new FileReader();
                  e.addEventListener("load", function () {
                    var t = e.result;
                    m("string" == typeof t ? t : void 0);
                  }),
                    e.readAsDataURL(t);
                } else m(void 0);
              },
              [t]
            ),
            d);
        return (0, a.jsxs)("div", {
          className: "group relative inline-block text-xs text-gray-900",
          children: [
            (0, a.jsx)(w ? "button" : "span", {
              className: "flex items-stretch justify-center",
              onClick: function () {
                return w && (null == y ? void 0 : y());
              },
              children:
                _ && null != k
                  ? (0, a.jsx)("span", {
                      className: (0, o.Z)(
                        "box-border h-10 w-10 rounded-md border border-black/5 bg-cover bg-center dark:border-white/20",
                        w && "group-hover:bg-black"
                      ),
                      style: {
                        backgroundImage:
                          void 0 !== k ? "url(".concat(k, ")") : "none",
                      },
                      children:
                        w &&
                        (0, a.jsx)(f.ZP, {
                          icon: l._hL,
                          className: (0, o.Z)(
                            "h-5 w-5",
                            "hidden group-hover:block"
                          ),
                        }),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("span", {
                          className: (0, o.Z)(
                            "rounded-l-md bg-gray-500 px-2 py-2 text-white transition-colors dark:bg-gray-500",
                            w && "group-hover:bg-black"
                          ),
                          children: [
                            (0, a.jsx)(f.ZP, {
                              icon: i.Z,
                              className: (0, o.Z)(
                                "h-5 w-5",
                                w && "group-hover:hidden"
                              ),
                            }),
                            w &&
                              (0, a.jsx)(f.ZP, {
                                icon: l._hL,
                                className: (0, o.Z)(
                                  "h-5 w-5",
                                  "hidden group-hover:block"
                                ),
                              }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "flex max-w-xs items-center truncate rounded-r-md bg-gray-50 px-3 py-2 font-medium",
                          children: (0, a.jsx)("span", {
                            className: "truncate",
                            children: C,
                          }),
                        }),
                      ],
                    }),
            }),
            void 0 !== b &&
              b < 100 &&
              (0, a.jsx)("div", {
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-white p-0.5 text-blue-700 dark:border-gray-700",
                children: (0, a.jsx)(g, {
                  percentage: b,
                  className: "h-4 w-4",
                }),
              }),
            null != v &&
              (0, a.jsx)("button", {
                onClick: v,
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-gray-500 p-0.5 text-white transition-colors hover:bg-black hover:opacity-100 group-hover:opacity-100 md:opacity-0",
                children: (0, a.jsx)(c.u, {
                  label: j.formatMessage(p.removeFile),
                  side: "top",
                  sideOffset: 4,
                  children: (0, a.jsx)(f.ZP, { icon: l.q5L }),
                }),
              }),
          ],
        });
      }
      var p = (0, d.vU)({
        removeFile: {
          id: "FileTile.removeFile",
          defaultMessage: "Remove file",
          description: "Tooltip label for removing a file from the textarea",
        },
      });
    },
    43019: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return eC;
        },
        go: function () {
          return eN;
        },
      });
      var r,
        a,
        i,
        o,
        s = n(39324),
        l = n(71209),
        u = n(22830),
        d = n(4337),
        c = n(35250),
        f = n(19841),
        g = n(70079),
        h = n(76483),
        m = n(97739),
        p = n(2827),
        v = n(1454),
        x = n(70671),
        b = n(32004),
        y = n(94968),
        j = n(21389),
        w = n(50795),
        C = n(82081),
        _ = n(16920),
        k = n(75641),
        M = n(95954),
        T = n(31621),
        N = n(46020),
        P = n(54118),
        I = n(32542),
        S = n(33669),
        Z = n(67273),
        E = n(45635),
        F = n(47428),
        D = n(27009),
        R = n(88327),
        L = n(73610);
      function A(e) {
        var t = e.disabled,
          n = e.getInputProps,
          r = e.openFileDialog,
          a = e.attachmentsType,
          i = e.onSelectRecentFile,
          o = (0, x.Z)(),
          l = a === k.Cd.Retrieval,
          u = (0, c.jsx)(Z.z, {
            onClick: l
              ? void 0
              : function (e) {
                  e.preventDefault(), r();
                },
            disabled: t,
            color: "none",
            className:
              "rounded-full bg-gray-500 p-0 text-white outline-none hover:bg-black",
            "aria-label": o.formatMessage(U.uploadFile),
            children: (0, c.jsx)(R.ZP, { icon: v.OvN, size: "small" }),
          }),
          d = (0, c.jsx)("input", (0, s._)({}, n({ className: "hidden" })));
        return l
          ? (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsxs)(F.fC, {
                  children: [
                    (0, c.jsx)(F.xz, { disabled: t, asChild: !0, children: u }),
                    (0, c.jsx)(F.Uv, {
                      children: (0, c.jsx)(B, {
                        openFileDialog: r,
                        onSelectRecentFile: i,
                      }),
                    }),
                  ],
                }),
                d,
              ],
            })
          : (0, c.jsxs)(E.u, {
              label: o.formatMessage(U.uploadFile),
              side: "top",
              sideOffset: 4,
              children: [u, d],
            });
      }
      function B(e) {
        var t,
          n = e.openFileDialog,
          r = e.onSelectRecentFile,
          a = (0, L.W)().data,
          i = (
            null !== (t = null == a ? void 0 : a.files) && void 0 !== t ? t : []
          )
            .filter(function (e) {
              return e.use_case === k.Ei.MyFiles;
            })
            .reverse()
            .slice(0, 4),
          o = i.map(function (e) {
            return (0, c.jsx)(
              F.ck,
              {
                className:
                  "cursor-pointer px-3 py-2.5 outline-none focus:bg-green-600 focus:text-white",
                onSelect: function () {
                  return r({ id: e.id, name: e.name, size: e.size });
                },
                children: (0, c.jsx)("div", {
                  className: "line-clamp-1",
                  children: e.name,
                }),
              },
              e.id
            );
          });
        return (0, c.jsxs)(F.VY, {
          side: "top",
          sideOffset: 8,
          align: "start",
          alignOffset: -20,
          className:
            "w-64 rounded-xl border border-gray-100 bg-white text-sm shadow-xxs dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:shadow-xs",
          children: [
            i.length > 0 &&
              (0, c.jsx)(F.__, {
                className: "px-3 pb-1 pt-3 font-medium",
                children: (0, c.jsx)(b.Z, (0, s._)({}, U.recentFiles)),
              }),
            o,
            (0, c.jsx)(F.ck, {
              className: "group cursor-pointer p-1 outline-none",
              onSelect: n,
              children: (0, c.jsxs)("div", {
                className:
                  "flex items-center gap-2 rounded-lg bg-black px-3 py-2.5 text-white group-radix-highlighted:bg-green-600",
                children: [
                  (0, c.jsx)(R.ZP, { icon: v.iRh }),
                  (0, c.jsx)("div", {
                    children: (0, c.jsx)(b.Z, (0, s._)({}, U.upload)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var U = (0, y.vU)({
          uploadFile: {
            id: "PromptFilePicker.uploadFile",
            defaultMessage: "Upload file",
            description: "Tooltip label for uploading a file button",
          },
          errorFileTooLarge: {
            id: "PromptFilePicker.errorFileTooLarge",
            defaultMessage: "File is too large. Maximum file size is {size}MB",
            description: "Error message when file is too large",
          },
          errorTooManyFiles: {
            id: "PromptFilePicker.errorTooManyFiles",
            defaultMessage: "Only one file upload at a time is supported",
            description: "Error message when too many files are uploaded",
          },
          recentFiles: {
            id: "PromptFilePicker.recentFiles",
            defaultMessage: "Recent files",
            description: "Header text for the list of recent files",
          },
          upload: {
            id: "PromptFilePicker.upload",
            defaultMessage: "Upload",
            description: "Button text for uploading a file",
          },
        }),
        O = n(21722),
        q = n(39889),
        z = n(5268),
        H = n(99486),
        W = n(68993),
        V = n(88798),
        Q = n(63031),
        G = { duration: 20, hasCloseButton: !0 },
        $ = Math.floor(Math.log(1201) / Math.log(2)),
        Y = { duration: 20, hasCloseButton: !0 },
        J = n(78018),
        K = n(42569),
        X = n(16592),
        ee = n(6013),
        et = n(32148),
        en = n(54655);
      function er() {
        return (0, z.a)(
          ["visionContent"],
          (0, O._)(function () {
            return (0, q.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    H.ZP.getContent("vision").catch(function () {
                      return (
                        V.m.danger("Failed to load content"),
                        { onboarding: { title: "", content: [] } }
                      );
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          })
        );
      }
      function ea(e) {
        var t = e.onPick,
          n = (0, u._)((0, g.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = (0, g.useCallback)(
            function (e, n) {
              a(!1), t(e, n);
            },
            [t]
          ),
          o = (0, x.Z)(),
          l = er().data,
          d = (null == l ? void 0 : l.examples) || [];
        return 0 === d.length
          ? null
          : (0, c.jsxs)(ee.fC, {
              onOpenChange: a,
              open: r,
              children: [
                (0, c.jsx)(ee.xz, {
                  asChild: !0,
                  children: (0, c.jsx)("div", {
                    className: "cursor-pointer",
                    children: (0, c.jsx)(E.u, {
                      label: o.formatMessage(eo.tryAnExample),
                      side: "top",
                      sideOffset: 4,
                      open: !0 !== r && void 0,
                      children: (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)(R.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: en.DcN,
                          }),
                          (0, c.jsx)(et.T, {
                            children: o.formatMessage(eo.tryAnExample),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, c.jsx)(ee.h_, {
                  children: (0, c.jsxs)(ee.VY, {
                    side: "top",
                    sideOffset: 8,
                    className:
                      "relative max-w-md animate-slideUpAndFade select-none rounded-xl border-gray-100 bg-white p-3 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "mb-3 flex items-center justify-center gap-2 text-center text-sm font-medium",
                        children: [
                          (0, c.jsx)(R.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: en.DcN,
                          }),
                          (0, c.jsx)(b.Z, (0, s._)({}, eo.tryAnExample)),
                        ],
                      }),
                      (0, c.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: d.map(function (e) {
                          return (0,
                          c.jsx)(ei, { imageUrl: e.imageUrl, thumbnailUrl: e.thumbnailUrl, label: e.label, prompt: e.prompt, onPick: i }, e.imageUrl);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function ei(e) {
        var t = e.imageUrl,
          n = e.thumbnailUrl,
          r = e.label,
          a = e.prompt,
          i = e.onPick,
          o = (0, g.useCallback)(
            (0, O._)(function () {
              var e, n, r, o, s;
              return (0, q.__generator)(this, function (l) {
                switch (l.label) {
                  case 0:
                    return l.trys.push([0, 3, , 4]), [4, fetch(t)];
                  case 1:
                    if (!(e = l.sent()).ok)
                      throw Error("Failed to load example image");
                    return [4, e.blob()];
                  case 2:
                    return (
                      (n = l.sent()),
                      (o = (r = t.split("/"))[r.length - 1]),
                      i(
                        new File([n], o, {
                          type:
                            null !== (s = e.headers.get("Content-Type")) &&
                            void 0 !== s
                              ? s
                              : void 0,
                        }),
                        a
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      l.sent(),
                      V.m.danger("Failed to load example image"),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [t, i, a]
          );
        return (0, c.jsxs)("button", {
          className:
            "group flex h-14 w-64 flex-row items-stretch overflow-hidden rounded text-left",
          onClick: o,
          children: [
            (0, c.jsx)("div", {
              className: "w-14 flex-none bg-cover bg-center",
              style: { backgroundImage: "url(".concat(n, ")") },
            }),
            (0, c.jsxs)("div", {
              className:
                "items-left flex min-w-0 flex-auto flex-col justify-center bg-gray-50 px-3 transition group-hover:bg-gray-100 dark:bg-gray-800 dark:group-hover:bg-gray-700",
              children: [
                (0, c.jsx)("div", {
                  className: "font-medium leading-none",
                  children: r,
                }),
                (0, c.jsx)("div", {
                  className:
                    "mt-2 truncate text-xs leading-none text-gray-600 dark:text-gray-300",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      var eo = (0, y.vU)({
          tryAnExample: {
            id: "VisionExamplePicker.tryAnExample",
            defaultMessage: "Try an example",
            description: "Label for examples popover",
          },
        }),
        es = n(13002),
        el = n(6948),
        eu = n(97747),
        ed = n(89368),
        ec = "oai/apps/hasSeenVisionOnboarding";
      function ef(e) {
        var t,
          n = e.currentModelConfig,
          r = e.disabled,
          a = (0, u._)(
            (0, g.useState)(function () {
              var e = el.m.getItem(ec);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1];
        return (null ===
          (t = null == n ? void 0 : n.product_features.attachments) ||
        void 0 === t
          ? void 0
          : t.type) !== k.Cd.Multimodal ||
          r ||
          !1 !== i
          ? null
          : (0, c.jsx)(eh, {
              onDismiss: function () {
                var e = Date.now();
                el.m.setItem(ec, e), o(e);
              },
            });
      }
      var eg = { lock: es.Zp7, use_cases: es.dvR };
      function eh(e) {
        var t = e.onDismiss,
          n = er().data,
          r = null == n ? void 0 : n.onboarding;
        return r
          ? (0, c.jsx)(ed.Z, {
              isOpen: !0,
              onClose: t,
              type: "success",
              primaryButton: (0, c.jsx)(eu.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: t,
              }),
              title: r.title,
              size: "custom",
              className:
                "max-w-[510px] text-gray-800 outline-none dark:text-gray-300",
              children: r.content.map(function (e, t) {
                if ("paragraph" === e.type)
                  return (0, c.jsx)("p", { children: e.text }, t);
                if ("callout" === e.type) {
                  var n;
                  return (0, c.jsx)(
                    em,
                    {
                      icon:
                        null !== (n = eg[e.icon]) && void 0 !== n
                          ? n
                          : eg.beaker,
                      title: e.title,
                      text: e.text,
                      color: e.color || 0,
                    },
                    t
                  );
                }
                return null;
              }),
            })
          : null;
      }
      function em(e) {
        var t = e.icon,
          n = e.title,
          r = e.text,
          a = e.color;
        return (0, c.jsxs)("div", {
          className: "my-4 flex flex-row",
          children: [
            (0, c.jsx)("div", {
              className: (0, f.Z)(
                "w-14 flex-none pl-2 pt-2",
                0 === a ? "text-brand-green" : "text-brand-purple"
              ),
              children: (0, c.jsx)(t, { size: 32 }),
            }),
            (0, c.jsxs)("div", {
              className: "max-w-60 flex-auto",
              children: [
                (0, c.jsx)("div", {
                  className: "font-bold text-black dark:text-white",
                  children: n,
                }),
                (0, c.jsx)("div", { children: r }),
              ],
            }),
          ],
        });
      }
      function ep() {
        var e = (0, d._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        var e = (0, d._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        var e = (0, d._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        var e = (0, d._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey() {
        var e = (0, d._)([
          "absolute p-1 bottom-[10px] md:bottom-3 md:p-2 right-12 transition-opacity ",
          "",
        ]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function ej() {
        var e = (0, d._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (ej = function () {
            return e;
          }),
          e
        );
      }
      function ew() {
        var e = (0, d._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (ew = function () {
            return e;
          }),
          e
        );
      }
      ((r = i || (i = {}))[(r.None = 0)] = "None"),
        (r[(r.Multimodal = 1)] = "Multimodal"),
        (r[(r.Interpreter = 2)] = "Interpreter"),
        (r[(r.Retrieval = 3)] = "Retrieval"),
        ((a = o || (o = {}))[(a.Upload = 0)] = "Upload"),
        (a[(a.Existing = 1)] = "Existing");
      var eC = (0, g.forwardRef)(function (e, t) {
        var n,
          r,
          a,
          i,
          d,
          m,
          b,
          y,
          j,
          Z,
          F,
          L,
          B,
          ee,
          et,
          en,
          er,
          ei,
          eo,
          es,
          el,
          eu,
          ed,
          ec,
          eg,
          eh,
          em,
          ep,
          ev,
          ex,
          eb,
          ey,
          ej,
          ew,
          eC,
          ek,
          eN,
          eD,
          eL,
          eA,
          eB,
          eU,
          eO,
          eq,
          ez,
          eH,
          eW,
          eV,
          eQ,
          eG,
          e$,
          eY,
          eJ,
          eK,
          eX,
          e0,
          e1,
          e2,
          e3 = e.onAbortCompletion,
          e5 = e.onCreateNewCompletion,
          e4 = e.onRequestMoreCompletions,
          e8 = e.onContinueGenerating,
          e6 = e.currentModelId,
          e7 = e.clientThreadId,
          e9 = e.isCompletionInProgress,
          te = e.className,
          tt = e.disabled,
          tn = void 0 !== tt && tt,
          tr = e.shouldRetry,
          ta = e.canPause,
          ti = void 0 !== ta && ta,
          to = e.canContinue,
          ts = e.suggestions,
          tl = e.isInteractableSharedThread,
          tu = (0, x.Z)(),
          td = (0, T.oq)(e7),
          tc = (0, T.Hk)(e7),
          tf = (0, X.Ri)(e6),
          tg = (0, S.w$)(),
          th = (0, g.useContext)(I.gt).serviceStatus,
          tm = (0, g.useContext)(I.QL).historyDisabled,
          tp = (0, g.useRef)(null),
          tv = (0, u._)((0, g.useState)(""), 2),
          tx = tv[0],
          tb = tv[1],
          ty = (0, u._)((0, g.useState)(null), 2),
          tj = ty[0],
          tw = ty[1],
          tC = (0, K.B9)(),
          t_ = null !== e6 ? tC.get(e6) : void 0,
          tk = (0, P.Fl)().isCodeInterpreterAvailable,
          tM = 0;
        tk &&
        (null ===
          (eX = null == t_ ? void 0 : t_.product_features.attachments) ||
        void 0 === eX
          ? void 0
          : eX.type) === k.Cd.CodeInterpreter
          ? (tM = 2)
          : (null ===
              (e0 = null == t_ ? void 0 : t_.product_features.attachments) ||
            void 0 === e0
              ? void 0
              : e0.type) === k.Cd.Multimodal ||
            (null == t_
              ? void 0
              : null === (e1 = t_.enabledTools) || void 0 === e1
              ? void 0
              : e1.includes(
                  "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                ))
          ? (tM = 1)
          : (null ===
              (e2 = null == t_ ? void 0 : t_.product_features.attachments) ||
            void 0 === e2
              ? void 0
              : e2.type) === k.Cd.Retrieval && (tM = 3);
        var tT = 0 !== tM,
          tN = (0, g.useCallback)(function (e, t) {
            if (
              (null === t
                ? w.o.logEvent(C.a.uploadFile, { eventSource: "mouse" })
                : w.o.logEvent(C.a.uploadFile, { eventSource: "drag" }),
              e.length > 0)
            ) {
              var n = e[0];
              tw({ type: o.Upload, file: n });
            }
          }, []),
          tP = (0, g.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var t = (function (e) {
                  var t = e.code,
                    n = e.message;
                  switch (t) {
                    case D.jK.FileTooLarge:
                      return U.errorFileTooLarge;
                    case D.jK.TooManyFiles:
                      return U.errorTooManyFiles;
                    default:
                      return n;
                  }
                })(e);
                "string" == typeof t
                  ? V.m.danger(t)
                  : V.m.danger(tu.formatMessage(t, { size: 512 }));
              });
            },
            [tu]
          ),
          tI = (0, g.useCallback)(function () {
            tw(null), tA(new Date().toString());
          }, []),
          tS = (0, h.uI)(
            (0, s._)(
              {
                maxFiles: 1,
                disabled: tn || !tT,
                noClick: !0,
                onDropAccepted: tN,
                onDropRejected: tP,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, g.useMemo)(
                function () {
                  var e,
                    t =
                      null ===
                        (e =
                          null == t_
                            ? void 0
                            : t_.product_features.attachments) || void 0 === e
                        ? void 0
                        : e.accepted_mime_types;
                  if (void 0 === t) return {};
                  var n = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                      [".docx"],
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                      [".pptx"],
                  };
                  return {
                    accept: t.reduce(function (e, t) {
                      return (
                        t in n
                          ? (e[t] = n[t])
                          : t.includes("/") &&
                            (e[t] = [".".concat(t.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [t_]
              )
            )
          ),
          tZ = tS.getRootProps,
          tE = tS.getInputProps,
          tF = tS.isDragActive,
          tD = tS.open,
          tR = (0, u._)(
            (0, g.useState)(function () {
              return new Date().toString();
            }),
            2
          ),
          tL = tR[0],
          tA = tR[1],
          tB = (null == tj ? void 0 : tj.type) === o.Upload ? tj.file : null,
          tU =
            null !== tB
              ? JSON.stringify({
                  file: tB.name,
                  modified: tB.lastModified,
                  size: tB.size,
                  fileUploadQueryHash: tL,
                })
              : null,
          tO =
            ((i = 2 === tM ? tB : null),
            (b = ((d = (0, Q.VF)()),
            (m = (0, z.a)({
              queryKey: ["interpreterUploadLink", tU],
              queryFn: (0, O._)(function () {
                return (0, q.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        H.ZP.createFile(i.name, i.size, k.Ei.AceUpload).catch(
                          function (e) {
                            var t = d("default_create_entry_error", {
                              fileName: null == i ? void 0 : i.name,
                            });
                            throw (
                              (void 0 !== e.code && (t = d(e.code)),
                              V.m.danger(t, G),
                              e)
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!i,
            }))).data),
            (y = m.isLoading),
            (j = m.isError),
            (Z =
              (null == b ? void 0 : b.status) === "success"
                ? b.upload_url
                : void 0),
            (en = ((L = (F = (0, u._)((0, g.useState)(0), 2))[0]),
            (B = F[1]),
            (0, g.useEffect)(
              function () {
                B(0);
              },
              [tU]
            ),
            (ee = (0, z.a)({
              queryKey: ["startFileUpload", tU],
              queryFn: (0, O._)(function () {
                return (0, q.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        H.ZP.uploadFileToAzureStorage(i, Z, B).then(function (
                          e
                        ) {
                          if (201 === e.status) return Z;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(i && Z),
            })),
            (et = (0, g.useMemo)(
              function () {
                return (0, l._)((0, s._)({}, ee), { progress: L });
              },
              [ee, L]
            ))).data),
            (er = et.isLoading),
            (ei = et.isError),
            (eo = et.progress),
            (es =
              (null == b ? void 0 : b.status) === "success" ? b.file_id : null),
            (ec = ((el = T.tQ.getServerThreadId(e7)),
            (eu = (0, Q.VF)()),
            (ed = (0, z.a)({
              queryKey: ["processCodeInterpeterUpload", tU],
              queryFn: (0, O._)(function () {
                return (0, q.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        H.ZP.processCodeInterpeterUpload(
                          null != el ? el : null,
                          es,
                          i.name
                        ).catch(function (e) {
                          var t = eu("default_download_link_error", {
                            fileName: null == i ? void 0 : i.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = eu(e.code)),
                            V.m.danger(t, G),
                            new W.gK(t, void 0, e.code))
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(null !== es && null !== i && void 0 !== en),
            }))).data),
            (eg = ed.isLoading),
            (eh = ed.isError),
            (em = (0, g.useMemo)(
              function () {
                return b ? 10 + 80 * eo : 10;
              },
              [b, eo]
            )),
            (ep = j || ei || eh),
            (ev = y || er || eg),
            (0, g.useEffect)(
              function () {
                ep && tI();
              },
              [ep, tI]
            ),
            (0, g.useMemo)(
              function () {
                var e =
                    null !== i &&
                    !!(null == i ? void 0 : i.name) &&
                    (null == ec ? void 0 : ec.status) === "success" &&
                    void 0 !== en &&
                    null !== es,
                  t = e ? { name: i.name, id: es, size: i.size } : null;
                return {
                  isLoading: ev,
                  loadingPercentage: ep || e ? void 0 : em,
                  isError: ep,
                  uploadedFile: t,
                };
              },
              [i, null == ec ? void 0 : ec.status, en, ep, ev, em, es]
            )),
          tq =
            ((ex = 0 !== tM && 2 !== tM ? tB : null),
            (eb = 1 === tM ? k.Ei.Multimodal : k.Ei.MyFiles),
            (ej = (ey = (0, z.a)({
              queryKey: ["createFile", tU],
              queryFn: (0, O._)(function () {
                return (0, q.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        H.ZP.createFile(ex.name, ex.size, eb).catch(function (
                          e
                        ) {
                          throw (
                            (console.error(
                              "Failed to create file for ".concat(
                                null == ex ? void 0 : ex.name
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!ex,
            })).data),
            (ew = ey.isLoading),
            (eC = ey.isError),
            (ek = null == ej ? void 0 : ej.file_id),
            (eN = null == ej ? void 0 : ej.upload_url),
            (eL = (eD = (0, z.a)({
              queryKey: ["uploadFile", tU],
              queryFn: (0, O._)(function () {
                var e, t, n, r;
                return (0, q.__generator)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 7, , 8]),
                        [4, H.ZP.uploadFileToAzureStorage(ex, eN)]
                      );
                    case 1:
                      if (!(201 !== (e = a.sent()).status)) return [3, 6];
                      (t = "Unknown error"), (a.label = 2);
                    case 2:
                      return a.trys.push([2, 4, , 5]), [4, e.data];
                    case 3:
                      return (t = a.sent()), [3, 5];
                    case 4:
                      return a.sent(), [3, 5];
                    case 5:
                      return (
                        console.error(
                          "File upload failed at blobstore upload step",
                          e.status,
                          t
                        ),
                        H.ZP.markFileUploadFailed(ek, t),
                        [2, { success: !1 }]
                      );
                    case 6:
                      return [3, 8];
                    case 7:
                      throw (
                        (console.error(
                          "File upload failed due to a network error",
                          (n = a.sent())
                        ),
                        (r = "Unknown error"),
                        n instanceof Error && (r = n.message),
                        H.ZP.markFileUploadFailed(ek, r),
                        n)
                      );
                    case 8:
                      return [4, H.ZP.markFileUploadComplete(ek)];
                    case 9:
                      return a.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(ex && ek && eN),
            })).data),
            (eA = eD.isLoading),
            (eB = eD.isError),
            (ez = ((eU = function (e) {
              var t = eO("default_download_link_error", {
                fileName: null == ex ? void 0 : ex.name,
              });
              void 0 !== e.code && (t = eO(e.code)), V.m.danger(t, Y);
            }),
            (eO = (0, Q.VF)()),
            (eq = (0, z.a)({
              queryKey: ["pollForFileReady", tU],
              queryFn: (0, O._)(function () {
                return (0, q.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (eb !== k.Ei.MyFiles) return [3, 2];
                      return [
                        4,
                        H.ZP.getRetrievalStatus(ek).catch(function (e) {
                          throw (eU(e), e);
                        }),
                      ];
                    case 1:
                      return [
                        2,
                        e.sent().retrieval_index_status === k.Xf.Success,
                      ];
                    case 2:
                      return [
                        4,
                        H.ZP.getFileDownloadLink(ek).catch(function (e) {
                          throw (eU(e), e);
                        }),
                      ];
                    case 3:
                      return [2, e.sent().status === k.KF.Success];
                    case 4:
                      return [2];
                  }
                });
              }),
              enabled: !!(eL && ex && ek),
              refetchInterval: function (e, t) {
                if (!e) {
                  if (eb === k.Ei.MyFiles) return 1e3;
                  var n = t.state.dataUpdateCount;
                  return n > $ ? (tI(), !1) : 500 * Math.pow(2, n);
                }
                return !1;
              },
            }))).data),
            (eH = eq.isLoading),
            (eW = eq.isError),
            (eV = null !== ex && ez && null != ek),
            (eQ = eC || eB || eW),
            (eG = ew || eA || eH || !ez),
            (e$ = (0, g.useMemo)(
              function () {
                return eV ? 100 : eL && !ez ? 80 : eL ? 50 : ej ? 10 : 0;
              },
              [eV, eL, ej, ez]
            )),
            (0, g.useEffect)(
              function () {
                eQ && (V.m.danger("File upload failed", Y), tI());
              },
              [null == ex ? void 0 : ex.name, eQ, tI]
            ),
            (eJ = (eY = (0, u._)(
              ((r = (n = (0, u._)((0, g.useState)([null, null]), 2))[0]),
              (a = n[1]),
              (0, g.useEffect)(
                function () {
                  if (!ex) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var t = new Image();
                    (t.onload = function () {
                      a([t.width, t.height]);
                    }),
                      (t.src = e.result);
                  }),
                    e.readAsDataURL(ex);
                },
                [ex]
              ),
              r),
              2
            ))[0]),
            (eK = eY[1]),
            (0, g.useMemo)(
              function () {
                var e = eV
                  ? null !== eJ && null !== eK
                    ? {
                        id: ek,
                        name: ex.name,
                        size: ex.size,
                        width: eJ,
                        height: eK,
                      }
                    : { id: ek, name: ex.name, size: ex.size }
                  : null;
                return {
                  isLoading: eG,
                  loadingPercentage: eQ || eV ? void 0 : e$,
                  isError: eQ,
                  uploadedFile: e,
                };
              },
              [eV, ex, ek, eQ, eG, e$, eJ, eK]
            )),
          tz = 2 === tM ? tO : tq,
          tH = tz.isLoading,
          tW = tz.isError,
          tV = tz.loadingPercentage,
          tQ = tz.uploadedFile,
          tG = (0, g.useCallback)(function () {
            tb(""), tw(null), (0, p.SI)(1, tp.current);
          }, []),
          t$ = (null == tj ? void 0 : tj.type) !== o.Upload || (!tH && !tW),
          tY = "root" !== td && !e9 && !(null == th ? void 0 : th.oof),
          tJ = null === tj ? "" !== tx : t$,
          tK = tJ && !tn && !e9,
          tX = (0, g.useCallback)(
            function (e) {
              if ((null == e || e.preventDefault(), !tn)) {
                var t,
                  n,
                  r,
                  a =
                    null === (t = tp.current) || void 0 === t
                      ? void 0
                      : t.value,
                  i = "".concat(
                    null === (n = tp.current) || void 0 === n
                      ? void 0
                      : n.dataset.id,
                    "-nextPrompt"
                  );
                if (tJ) {
                  var s = null != a ? a : "",
                    l = [];
                  if (tj) {
                    if (2 === tM || 3 === tM) {
                      switch (tj.type) {
                        case o.Upload:
                          tQ &&
                            (r = { id: tQ.id, name: tQ.name, size: tQ.size });
                          break;
                        case o.Existing:
                          r = tj.file;
                      }
                      r && l.push(r);
                    } else
                      1 === tM &&
                        tQ &&
                        "width" in tQ &&
                        (s = {
                          content_type: M.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, Q.L8)(tQ.id),
                              size_bytes: tQ.size,
                              width: tQ.width,
                              height: tQ.height,
                            },
                            null != a ? a : "",
                          ],
                        });
                  }
                  N.vm.hideThreadHeader(),
                    e5(
                      i,
                      { content: s, attachments: l },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: ts }
                    ),
                    tG(),
                    void 0 !== ts &&
                      _.m.logEvent("chatgpt_prompt_ignore_suggestions");
                }
              }
            },
            [tn, tG, tJ, e5, ts, tj, tQ, tM]
          ),
          t0 = (0, g.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return tK;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (tg && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), tX());
                  },
                },
                Escape: {
                  validator: function () {
                    return ti && e9;
                  },
                  handler: function () {
                    e3("", tc),
                      w.o.logEvent(C.a.pauseCompletion, {
                        threadId: T.tQ.getServerThreadId(e7),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [tK, tg, e9, tX, ti, e3, tc, e7]
          ),
          t1 = (0, g.useCallback)(
            function (e) {
              var t;
              (null === (t = t0[e.key]) || void 0 === t
                ? void 0
                : t.validator(e)) && t0[e.key].handler(e);
            },
            [t0]
          ),
          t2 = (0, g.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === tM) {
                var t,
                  n = e.clipboardData.files[0],
                  r =
                    null ===
                      (t =
                        null == t_
                          ? void 0
                          : t_.product_features.attachments) || void 0 === t
                      ? void 0
                      : t.accepted_mime_types;
                if (void 0 !== r && !r.includes(n.type)) {
                  V.m.danger(
                    tu.formatMessage(eR.unsupportedFileType, {
                      file_type: n.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                N.vm.hideThreadHeader(), tw({ type: o.Upload, file: n });
              }
            },
            [t_, tM, tu]
          ),
          t3 = (0, g.useCallback)(function (e, t) {
            tw({ type: o.Upload, file: e }), tb(t);
          }, []);
        (0, g.useEffect)(function () {
          var e;
          null === (e = tp.current) || void 0 === e || e.focus();
        }, []),
          (0, g.useEffect)(
            function () {
              tw(null);
            },
            [e6]
          );
        var t5 = (0, c.jsx)(eM, {
          clientThreadId: e7,
          currentLeafId: td,
          currentRequestId: tc,
          shouldRetry: tr,
          canRegenerateResponse: tY,
          canContinue: void 0 !== to && to,
          canPause: ti,
          suggestions: ts,
          isCompletionInProgress: e9,
          onAbortCompletion: e3,
          onCreateNewCompletion: e5,
          onRequestMoreCompletions: e4,
          onContinueGenerating: e8,
          onResetState: tG,
        });
        (0, g.useImperativeHandle)(t, function () {
          return { setInputValue: tb };
        });
        var t4 = tK
          ? { backgroundColor: null == tf ? void 0 : tf.backgroundColor }
          : {};
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)("form", {
              className: te,
              onSubmit: tX,
              children: (0, c.jsxs)(
                "div",
                (0, l._)(
                  (0, s._)(
                    {
                      className:
                        "relative flex h-full flex-1 items-stretch md:flex-col",
                    },
                    tZ()
                  ),
                  {
                    children: [
                      tg && t5,
                      !tr &&
                        (0, c.jsxs)(eF, {
                          $disabled: tr,
                          $historyDisabled: tm,
                          children: [
                            tj &&
                              (0, c.jsx)(eI, {
                                children: (0, c.jsx)(J.Z, {
                                  onRemoveFileClick: function () {
                                    return tw(null);
                                  },
                                  file: tj.file.name,
                                  loadingPercentage:
                                    tj.type === o.Upload ? tV : void 0,
                                }),
                              }),
                            (0, c.jsx)(p.ZP, {
                              id: eT,
                              tabIndex: 0,
                              value: tx,
                              "data-id": td,
                              ref: tp,
                              style: { maxHeight: "200px" },
                              rows: 1,
                              onKeyDown: t1,
                              onChange: function (e) {
                                N.vm.hideThreadHeader(), tb(e.target.value);
                              },
                              onPaste: t2,
                              placeholder: tl
                                ? tu.formatMessage(
                                    eR.continueSharedConversationPlaceholder
                                  )
                                : tu.formatMessage(eR.placeholder),
                              className: (0, f.Z)(
                                "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                                !tj && tT
                                  ? "pl-12 md:pl-[30px]"
                                  : "pl-3 md:pl-0"
                              ),
                              disabled: tr,
                            }),
                            !tj &&
                              tT &&
                              (0, c.jsx)(eZ, {
                                children: (0, c.jsx)(A, {
                                  openFileDialog: tD,
                                  disabled: tr,
                                  getInputProps: tE,
                                  attachmentsType:
                                    t_.product_features.attachments.type,
                                  onSelectRecentFile: function (e) {
                                    return tw({ type: o.Existing, file: e });
                                  },
                                }),
                              }),
                            1 === tM &&
                              (0, c.jsx)(eE, {
                                $visible: !tJ && !tj && !e9,
                                children: (0, c.jsx)(ea, { onPick: t3 }),
                              }),
                            (0, c.jsx)(eS, {
                              disabled: !tK || tr,
                              style: t4,
                              className: (0, f.Z)(
                                "bottom-1.5",
                                e9
                                  ? "disabled:bottom-0.5 md:disabled:bottom-0"
                                  : "transition-colors disabled:opacity-40"
                              ),
                              children: e9
                                ? (0, c.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, c.jsx)(e_, {}),
                                  })
                                : (0, c.jsx)(E.u, {
                                    label: tu.formatMessage(
                                      eR.sendMessageTooltip
                                    ),
                                    children: (0, c.jsx)(R.ZP, {
                                      icon: R.IX,
                                      size: "small",
                                      className: "m-1 md:m-0",
                                    }),
                                  }),
                            }),
                            tF &&
                              (0, c.jsxs)(eP, {
                                children: [
                                  (0, c.jsx)(R.ZP, { icon: v.tHe }),
                                  tu.formatMessage(eR.dragInstructions),
                                ],
                              }),
                          ],
                        }),
                      !tg && t5,
                    ],
                  }
                )
              ),
            }),
            (0, c.jsx)(ef, { currentModelConfig: t_, disabled: tl }),
          ],
        });
      });
      function e_() {
        var e = (0, u._)((0, g.useState)(0), 2),
          t = e[0],
          n = e[1];
        (0, g.useEffect)(function () {
          var e = setInterval(function () {
            n(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, c.jsx)(
              "span",
              { className: a <= t ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, c.jsx)(c.Fragment, { children: r });
      }
      function ek(e) {
        var t = e.suggestions,
          n = e.currentLeafId,
          r = e.onCreateNewCompletion,
          a = e.onResetState,
          i = (0, x.Z)();
        return (
          (0, g.useEffect)(
            function () {
              _.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [t]
          ),
          (0, c.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children: t.slice(0, 2).map(function (e, o) {
              return (0, c.jsxs)(
                Z.z,
                {
                  as: "button",
                  color: "neutral",
                  onClick: function () {
                    N.vm.hideThreadHeader(),
                      r(
                        "".concat(n, "-nextPrompt"),
                        { content: e, attachments: [] },
                        { eventSource: "mouse" },
                        { suggestions: t }
                      ),
                      a(),
                      _.m.logEvent("chatgpt_prompt_use_suggestion", e, {
                        index: "".concat(o),
                      });
                  },
                  className:
                    "group whitespace-nowrap text-left md:whitespace-normal",
                  children: [
                    e,
                    (0, c.jsx)("div", {
                      className:
                        "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                      children: (0, c.jsx)(E.u, {
                        label: i.formatMessage(eR.suggestionTooltip),
                        side: "top",
                        children: (0, c.jsx)(R.ZP, {
                          icon: m.Z,
                          size: "small",
                        }),
                      }),
                    }),
                  ],
                },
                o
              );
            }),
          })
        );
      }
      function eM(e) {
        var t = e.clientThreadId,
          n = e.currentLeafId,
          r = e.currentRequestId,
          a = e.shouldRetry,
          i = e.canRegenerateResponse,
          o = e.canContinue,
          l = e.canPause,
          u = e.suggestions,
          d = e.isCompletionInProgress,
          g = e.onAbortCompletion,
          h = e.onCreateNewCompletion,
          m = e.onRequestMoreCompletions,
          p = e.onContinueGenerating,
          x = e.onResetState,
          y = (0, S.w$)();
        return a || i || o || l || void 0 !== u
          ? (0, c.jsxs)("div", {
              className: a ? "w-full" : "",
              children: [
                a &&
                  (0, c.jsx)("div", {
                    className: "mb-3 text-center text-xs",
                    children: (0, c.jsx)(
                      b.Z,
                      (0, s._)({}, eR.errorGeneratingResponse)
                    ),
                  }),
                (0, c.jsxs)(eD, {
                  $shouldRetry: a,
                  children: [
                    !a &&
                      void 0 !== u &&
                      (0, c.jsx)(ek, {
                        suggestions: u,
                        currentLeafId: n,
                        onCreateNewCompletion: h,
                        onResetState: x,
                      }),
                    i &&
                      (0, c.jsxs)(Z.z, {
                        as: "button",
                        color: a ? "primary" : y ? "neutral" : "none",
                        onClick: function () {
                          g("", r), m(n, { eventSource: "mouse" });
                        },
                        className: (0, f.Z)(
                          a ? "m-auto" : "-z-0 border-0 md:border"
                        ),
                        children: [
                          (0, c.jsx)(R.ZP, {
                            icon: v.Qxo,
                            size: y ? "xsmall" : "small",
                            className: "flex-shrink-0",
                          }),
                          (y || a) &&
                            (0, c.jsx)(
                              b.Z,
                              (0, s._)({}, eR.regenerateResponse)
                            ),
                        ],
                      }),
                    o &&
                      (0, c.jsxs)(Z.z, {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          p(n);
                        },
                        className: "border-0 md:border",
                        children: [
                          (0, c.jsx)(R.ZP, {
                            icon: v.lV_,
                            className: "-rotate-180",
                            size: y ? "xsmall" : "small",
                          }),
                          y &&
                            (0, c.jsx)(
                              b.Z,
                              (0, s._)({}, eR.continueGenerating)
                            ),
                        ],
                      }),
                    l &&
                      d &&
                      (0, c.jsxs)(Z.z, {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          g("", r),
                            w.o.logEvent(C.a.pauseCompletion, {
                              threadId: T.tQ.getServerThreadId(t),
                              eventSource: "mouse",
                            });
                        },
                        className: "border-0 md:border",
                        children: [
                          (0, c.jsx)(R.ZP, {
                            icon: v.jxP,
                            size: y ? "xsmall" : "small",
                          }),
                          y && (0, c.jsx)(b.Z, (0, s._)({}, eR.stopGenerating)),
                        ],
                      }),
                  ],
                }),
              ],
            })
          : null;
      }
      var eT = "prompt-textarea";
      function eN() {
        var e;
        null === (e = document.getElementById(eT)) || void 0 === e || e.focus();
      }
      var eP = j.Z.div(ep()),
        eI = j.Z.div(ev()),
        eS = j.Z.button(ex()),
        eZ = j.Z.div(eb()),
        eE = j.Z.div(ey(), function (e) {
          return e.$visible ? "opacity-100" : "opacity-0 pointer-events-none";
        }),
        eF = j.Z.div(
          ej(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        eD = j.Z.div(ew(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        eR = (0, y.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate response",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "Continue generating",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "Stop generating",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "Send a message",
            description: "Placeholder text for the input field",
          },
          continueSharedConversationPlaceholder: {
            id: "PromptTextarea.continueSharedConversationPlaceholder",
            defaultMessage: "Send a message to continue the conversation.",
            description:
              "Placeholder text for the input field when viewing a shared chat",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
          sendMessageTooltip: {
            id: "PromptTextarea.sendMessageTooltip",
            defaultMessage: "Send message",
            description: "Tooltip for the send message button",
          },
          pauseTooltip: {
            id: "PromptTextarea.pauseTooltip",
            defaultMessage: "Pause",
            description: "Tooltip for the pause button",
          },
          dragInstructions: {
            id: "PromptTextarea.dragInstructions",
            defaultMessage: "Upload file",
            description:
              "Instructions for dragging and dropping a file to upload",
          },
          unsupportedFileType: {
            id: "PromptTextarea.unsupportedFileType",
            defaultMessage:
              'Uploads with file type "{file_type}" are not supported, please try another file.',
            description: "Error shown when an invalid file type is uploaded",
          },
        });
    },
    50921: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(35250),
        a = n(47103),
        i = n(19841),
        o = n(70079);
      function s(e) {
        var t = e.onChange,
          n = e.enabled,
          s = e.label,
          l = e.disabled,
          u = (0, o.useCallback)(
            function () {
              t(!n);
            },
            [n, t]
          );
        return (0, r.jsx)(a.fC, {
          checked: n,
          disabled: l,
          onCheckedChange: u,
          "aria-label": s,
          className: (0, i.Z)(
            l && "cursor-not-allowed opacity-30",
            "bg-gray-200 radix-state-checked:bg-green-600",
            "relative h-[25px] w-[42px] cursor-pointer rounded-full"
          ),
          children: (0, r.jsx)(a.bU, {
            className: (0, i.Z)(
              "block h-[21px] w-[21px] rounded-full",
              "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
              "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
            ),
          }),
        });
      }
    },
    15610: function (e, t, n) {
      n.d(t, {
        V: function () {
          return Z;
        },
        Z: function () {
          return _;
        },
      });
      var r = n(96237),
        a = n(39324),
        i = n(71209),
        o = n(22830),
        s = n(4337),
        l = n(35250),
        u = n(90209),
        d = n(47428),
        c = n(19841),
        f = n(70079),
        g = n(7137),
        h = n(1454),
        m = n(21389),
        p = n(33669),
        v = n(88327),
        x = n(43019);
      function b() {
        var e = (0, s._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (0, s._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, s._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, s._)(["block dark:text-white text-gray-900"]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = (0, s._)(["block text-xs text-gray-500"]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function _(e) {
        var t = e.items,
          n = e.value,
          s = e.onChange,
          u = I(),
          d = (0, o._)(
            (0, f.useState)(function () {
              return t.reduce(function (e, t) {
                if (t.options.length > 0) {
                  var r = t.options.find(function (e) {
                    return e.value === n;
                  });
                  if (r) return (e[t.value] = r.value), e;
                  e[t.value] = t.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          c = d[0],
          g = d[1],
          h = (0, f.useCallback)(
            function (e, o) {
              var l,
                d = n,
                f = t.find(function (t) {
                  return t.value === e;
                }),
                h = (null == c ? void 0 : c[e]) !== void 0,
                m =
                  h &&
                  t.some(function (t) {
                    return (
                      t.value === e &&
                      t.options.some(function (t) {
                        return t.value === c[e];
                      })
                    );
                  }),
                p = o;
              u &&
                void 0 === o &&
                (p = h
                  ? c[e]
                  : null !== (l = null == f ? void 0 : f.options[0].value) &&
                    void 0 !== l
                  ? l
                  : void 0),
                (d = void 0 !== p ? p : m ? c[e] : e) !== n &&
                  (s(d),
                  g(function (t) {
                    return (0, i._)((0, a._)({}, t), (0, r._)({}, e, d));
                  }));
            },
            [u, t, c, s, n]
          ),
          m = (0, o._)((0, f.useState)(new Set()), 2),
          p = m[0],
          v = m[1],
          x = (0, f.useCallback)(function (e, t) {
            t
              ? v(function (t) {
                  var n = new Set(t);
                  return n.add(e), n;
                })
              : v(function (t) {
                  var n = new Set(t);
                  return n.delete(e), n;
                });
          }, []);
        return (0, l.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, l.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: t.map(function (e, r) {
              var a,
                i,
                o,
                s,
                u,
                d,
                f =
                  n === e.value ||
                  e.options.some(function (e) {
                    return e.value === n;
                  }),
                g = f ? n : null == c ? void 0 : c[e.value],
                m =
                  null != g
                    ? g
                    : null === (i = e.options) || void 0 === i
                    ? void 0
                    : null === (o = i[0]) || void 0 === o
                    ? void 0
                    : o.value,
                v =
                  null !==
                    (s = e.options.find(function (e) {
                      return e.value === m;
                    })) && void 0 !== s
                    ? s
                    : e.options[0],
                b =
                  null !== (u = null == v ? void 0 : v.icon) && void 0 !== u
                    ? u
                    : null;
              return (0,
              l.jsx)(M, { onToggleItemOpenChanged: x, item: e, isSelected: f, isOtherToggleDropdownOpen: p.size > 0 && !p.has(e.categoryId), currentValue: n, defaultOption: null == v ? void 0 : v.value, onChange: h, currentIcon: b, displayCurrentValue: f && e.showSelectedValueBelow && null !== (d = null == v ? void 0 : v.name) && void 0 !== d ? d : "", contentAlign: ((a = t.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function k(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = e.currentIcon,
          o = e.displayCurrentValue,
          s = null != i ? i : t.icon,
          u = t.options.length > 1 || t.alwaysShowOptions,
          d = I();
        return (0, l.jsxs)("div", {
          className: (0, c.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            n
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            void 0 !== a && a && "text-gray-800 dark:text-gray-100",
            r && n && "opacity-50"
          ),
          children: [
            (0, l.jsxs)("span", {
              className: (0, c.Z)(
                "relative max-[370px]:hidden",
                t.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != s &&
                  (0, l.jsx)(v.ZP, {
                    icon: s,
                    className: (0, c.Z)(
                      "transition-colors",
                      n ? t.buttonActiveClass : t.buttonHoverClass
                    ),
                  }),
                t.disabled && (0, l.jsx)(E, {}),
              ],
            }),
            (0, l.jsx)("span", {
              className: (0, c.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !d && "pr-1.5"
              ),
              children: t.name,
            }),
            d &&
              (n || u) &&
              (0, l.jsx)(v.ZP, {
                icon: u ? h.bTu : g.DAO,
                className: "toggle-item-button-open ml-0.5 text-gray-500",
              }),
            d &&
              (0, l.jsx)(v.ZP, {
                icon: h.rH8,
                className: "toggle-item-button-closed ml-0.5 text-gray-500",
              }),
            null != o &&
              "" !== o &&
              (0, l.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: o,
              }),
          ],
        });
      }
      function M(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          s = e.currentValue,
          u = e.displayCurrentValue,
          g = e.contentAlign,
          h = e.onToggleItemOpenChanged,
          m = e.isOtherToggleDropdownOpen,
          p = (0, o._)((0, f.useState)(void 0), 2),
          v = p[0],
          b = p[1],
          y = (0, f.useRef)(null),
          j = t.options.length > 1 || t.alwaysShowOptions,
          w = !(void 0 === t.description && void 0 === t.disclaimer),
          C = I(),
          _ = (0, f.useCallback)(
            function (e) {
              b(e), h(t.categoryId, !!e);
            },
            [t.categoryId, h]
          );
        return (0, l.jsx)(d.fC, {
          open: v,
          modal: !1,
          onOpenChange: function (e) {
            C && e && !n && j && a(t.value);
          },
          children: (0, l.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return !C && _(!0);
            },
            onMouseLeave: function () {
              return !C && _(void 0);
            },
            children: [
              (0, l.jsx)(d.xz, {
                ref: y,
                className: "w-full cursor-pointer",
                onClick: function () {
                  t.disabled || a(t.value);
                },
                children: (0, l.jsx)(k, {
                  isOpen: !!v,
                  isOtherToggleDropdownOpen: m,
                  item: t,
                  isSelected: n,
                  currentIcon: i,
                  displayCurrentValue: u,
                }),
              }),
              (0, l.jsx)(
                d.Uv,
                {
                  children: (0, l.jsx)(d.VY, {
                    className: (0, c.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-3 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === t.name }
                    ),
                    align: g,
                    onCloseAutoFocus: function (e) {
                      v || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var t;
                      e.preventDefault(),
                        null === (t = y.current) || void 0 === t || t.focus();
                    },
                    children: (0, l.jsxs)(F, {
                      children: [
                        w && (0, l.jsx)(T, { item: t }),
                        (j || (!v && !C)) &&
                          (0, l.jsx)(N, {
                            defaultOption: n ? s : r,
                            item: t,
                            currentValue: s,
                            onChange: function (e, t) {
                              a(e, t), _(void 0), (0, x.go)();
                            },
                            className: (0, c.Z)(
                              "text-sm",
                              w &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                t.categoryId
              ),
            ],
          }),
        });
      }
      function T(e) {
        var t = e.item;
        return (0, l.jsxs)(D, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== t.description &&
              (0, l.jsx)(R, { children: t.description }),
            void 0 !== t.disclaimer &&
              (0, l.jsx)(L, { children: t.disclaimer }),
          ],
        });
      }
      function N(e) {
        var t = e.item,
          n = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, l.jsx)(d.Ee, {
          defaultValue: i,
          value: a,
          className: n,
          children: t.options.map(function (e, n) {
            return (0, l.jsx)(
              P,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: t.iconClass,
                iconActiveClass: t.buttonActiveClass,
                showBorder: n !== t.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(t.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function P(e) {
        var t,
          n = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          o = e.iconActiveClass,
          s = e.isDisabled,
          f = e.onChange,
          g = e.showBorder,
          h = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
        return (0, l.jsx)(d.Rk, {
          disabled: s,
          asChild: !0,
          value: n.value,
          onClick: f,
          className: "select-none outline-none",
          children: (0, l.jsxs)("div", {
            className: (0, c.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium focus:bg-gray-50 focus:dark:bg-gray-700",
              s ? "text-gray-500" : "text-gray-900 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": g,
              }
            ),
            children: [
              null != n.icon && null != h
                ? (0, l.jsx)(v.ZP, {
                    icon: r ? n.icon : h,
                    className: (0, c.Z)(
                      "max-[370px]:hidden",
                      !s && !r && i,
                      r || a ? o : "text-gray-500"
                    ),
                  })
                : null,
              (0, l.jsx)("span", {
                title: "string" == typeof n.name && n.name ? n.name : "",
                className: (0, c.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !s,
                  "text-gray-800 dark:text-gray-100": a && !s,
                }),
                children: n.name,
              }),
              n.tags.map(function (e) {
                return Z(e);
              }),
              (0, l.jsx)("span", {
                className: (0, c.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0 group-hover/options:opacity-0": !r && !s,
                  "text-red-500": s,
                }),
                children: (0, l.jsx)(v.ZP, {
                  icon: s ? u.Z : v.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var I = function () {
          return !(0, p.w$)();
        },
        S = new Set(["beta", "confidential", "alpha"]),
        Z = function (e) {
          return (
            S.has(e) &&
            (0, l.jsx)(
              "span",
              {
                className: (0, c.Z)(
                  "py-0.25 rounded px-1 text-sm capitalize",
                  "beta" === e && "bg-blue-200 text-blue-500",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "confidential" === e && "bg-red-200 text-red-800"
                ),
                children: e,
              },
              e
            )
          );
        },
        E = m.Z.span(b()),
        F = m.Z.div(y()),
        D = m.Z.div(j()),
        R = m.Z.span(w()),
        L = m.Z.span(C());
    },
    86273: function (e, t, n) {
      n.d(t, {
        iW: function () {
          return U;
        },
        wm: function () {
          return H;
        },
        sY: function () {
          return B;
        },
        Xu: function () {
          return q;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(71209),
        o = n(22830),
        s = n(39889),
        l = n(35250),
        u = n(6013),
        d = n(13995),
        c = n(74686),
        f = n(5268),
        g = n(19841),
        h = n(70737),
        m = n(97296),
        p = n(70079),
        v = n(1454),
        x = n(94968),
        b = n(70671),
        y = n(32004),
        j = n(62509),
        w = n(16920),
        C = n(99486),
        _ = n(46020),
        k = n(33669),
        M = n(97747),
        T = n(89368),
        N = n(45635),
        P = n(88327),
        I = n(1821),
        S = n(88798),
        Z = n(50921),
        E = n(80691),
        F = n(61888),
        D = n(6948),
        R = ""
          .concat("oai/apps/hasUserContextFirstTime", "/")
          .concat("2023-06-29"),
        L = function (e) {
          var t = e.onClose,
            n = (0, b.Z)(),
            r = (0, p.useCallback)(
              function () {
                D.m.setItem(R, !0), t();
              },
              [t]
            );
          return (0, l.jsxs)(T.Z, {
            isOpen: !0,
            onClose: F.noop,
            size: "custom",
            className: "max-w-xl",
            type: "success",
            title: n.formatMessage(A.title),
            primaryButton: (0, l.jsx)(M.ZP.Button, {
              onClick: r,
              title: n.formatMessage(A.ok),
              color: "primary",
            }),
            children: [
              (0, l.jsxs)("div", {
                className: "mb-6 flex flex-col gap-3",
                children: [
                  (0, l.jsx)("p", {
                    children: (0, l.jsx)(y.Z, (0, a._)({}, A.body1)),
                  }),
                  (0, l.jsx)("p", {
                    children: (0, l.jsx)(y.Z, (0, a._)({}, A.body2)),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "flex flex-col gap-3 text-sm text-gray-500",
                children: (0, l.jsx)("p", {
                  children: (0, l.jsx)(
                    y.Z,
                    (0, i._)((0, a._)({}, A.legal1), {
                      values: {
                        strong: function (e) {
                          return (0, l.jsx)("strong", { children: e });
                        },
                        article: function (e) {
                          return (0, l.jsx)("a", {
                            href: U,
                            target: "_blank",
                            className: "underline",
                            rel: "noopener noreferrer",
                            children: e,
                          });
                        },
                      },
                    })
                  ),
                }),
              }),
            ],
          });
        },
        A = (0, x.vU)({
          title: {
            id: "UserContextFirstTimeModal.title",
            defaultMessage: "Introducing Custom instructions",
            description: "Title of the UserContextFirstTimeModal",
          },
          body1: {
            id: "UserContextFirstTimeModal.body1",
            defaultMessage:
              "Custom instructions let you share anything you'd like ChatGPT to consider in its response.",
            description:
              "Body of the first paragraph UserContextFirstTimeModal",
          },
          body2: {
            id: "UserContextFirstTimeModal.body2",
            defaultMessage:
              "Your instructions will be added to new conversations going forward, and you can edit or delete them at any time.",
            description:
              "Body of the second paragraph UserContextFirstTimeModal",
          },
          legal1: {
            id: "UserContextFirstTimeModal.legal1",
            defaultMessage:
              "<strong>Note:</strong> This information will be used to improve model performance unless you’ve opted out and may also be shared with the plugins you’ve enabled – visit our <article>Help Center</article> to learn more.",
            description:
              "Legal text of the first paragraph UserContextFirstTimeModal",
          },
          ok: {
            id: "UserContextFirstTimeModal.ok",
            defaultMessage: "OK",
            description: "Button to close the UserContextFirstTimeModal",
          },
        }),
        B = (0, x.vU)({
          tipsHeader: {
            id: "userContextModal.tipsHeader",
            defaultMessage: "Thought starters",
            description: "header for Custom instructions tips",
          },
          aboutUserTip1: {
            id: "userContextModal.aboutUserTip1",
            defaultMessage: "Where are you based?",
            description: "tips for Custom instructions about you",
          },
          aboutUserTip2: {
            id: "userContextModal.aboutUserTip2",
            defaultMessage: "What do you do for work?",
            description: "tips for Custom instructions about you",
          },
          aboutUserTip3: {
            id: "userContextModal.aboutUserTip3",
            defaultMessage: "What are your hobbies and interests?",
            description: "tips for Custom instructions about you",
          },
          aboutUserTip4: {
            id: "userContextModal.aboutUserTip4",
            defaultMessage: "What subjects can you talk about for hours?",
            description: "tips for Custom instructions about you",
          },
          aboutUserTip5: {
            id: "userContextModal.aboutUserTip5",
            defaultMessage: "What are some goals you have?",
            description: "tips for Custom instructions about you",
          },
          modelTip1: {
            id: "userContextModal.modelTip1",
            defaultMessage: "How formal or casual should ChatGPT be?",
            description: "tips for Custom instructions about model",
          },
          modelTip2: {
            id: "userContextModal.modelTip2",
            defaultMessage: "How long or short should responses generally be?",
            description: "tips for Custom instructions about model",
          },
          modelTip3: {
            id: "userContextModal.modelTip3",
            defaultMessage: "How do you want to be addressed?",
            description: "tips for Custom instructions about model",
          },
          modelTip4: {
            id: "userContextModal.modelTip4",
            defaultMessage:
              "Should ChatGPT have opinions on topics or remain neutral?",
            description: "tips for Custom instructions about model",
          },
          save: {
            id: "userContextModal.save",
            defaultMessage: "Save",
            description: "save button for my profile modal",
          },
          chatPreferencesIsEnabled: {
            id: "userContextModal.chatPreferencesIsEnabled",
            defaultMessage: "Enabled for new chats",
            description: "chat preferences is enabled",
          },
          chatPreferencesIsDisabled: {
            id: "userContextModal.chatPreferencesIsDisabled",
            defaultMessage: "Disabled for new chats",
            description: "chat preferences is disabled",
          },
          enableToggleLabel: {
            id: "userContextModal.enableToggleLabel",
            defaultMessage: "Enable chat preferences",
            description: "enable chat preferences toggle label",
          },
          disableToggleLabel: {
            id: "userContextModal.disableToggleLabel",
            defaultMessage: "Disable chat preferences",
            description: "disable chat preferences toggle label",
          },
          cancel: {
            id: "userContextModal.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button for Custom instructions modal",
          },
          aboutYouHelpText: {
            id: "userContextModal.aboutYouHelpText",
            defaultMessage:
              "What would you like ChatGPT to know about you to provide better responses?",
            description:
              "help text for about you section of Custom instructions",
          },
          modelHelpText: {
            id: "userContextModal.modelHelpText",
            defaultMessage: "How would you like ChatGPT to respond?",
            description:
              "help text for about you section of Custom instructions",
          },
          profileTitle: {
            id: "userContextModal.title",
            defaultMessage: "Custom instructions",
            description: "title for Custom instructions modal",
          },
          profileSubhead: {
            id: "userContextModal.subhead",
            defaultMessage:
              "<article>Learn more</article> about Custom instructions and how they’re used to help ChatGPT provide better responses.",
            description: "subhead for Custom instructions modal",
          },
          messageLimitError: {
            id: "userContextModal.messageLimitError",
            defaultMessage:
              "Please limit your responses to {limit} characters or less.",
            description: "error message for Custom instructions modal",
          },
          showTips: {
            id: "userContextModal.showTips",
            defaultMessage: "Show tips",
            description: "show tips button for Custom instructions modal",
          },
          hideTips: {
            id: "userContextModal.hideTips",
            defaultMessage: "Hide tips",
            description: "hide tips button for Custom instructions modal",
          },
          confirmCloseTitle: {
            id: "userContextModal.confirmCloseTitle",
            defaultMessage: "You have unsaved changes.",
            description: "title for confirm close modal",
          },
          confirmCloseBody: {
            id: "userContextModal.confirmCloseBody",
            defaultMessage:
              "Are you sure you want to exit? Any changes you made will be permanently lost.",
            description: "confirm close modal",
          },
          confirmCloseCancel: {
            id: "userContextModal.confirmCloseCancel",
            defaultMessage: "Back",
            description: "cancel button for confirm close modal",
          },
          confirmCloseOk: {
            id: "userContextModal.confirmCloseOk",
            defaultMessage: "Exit",
            description: "ok button for confirm close modal",
          },
          modApiVoilation: {
            id: "userContextModal.modApiVoilation",
            defaultMessage:
              "This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
            description: "error message for mod api voilation",
          },
        }),
        U =
          "https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt",
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userContext", e];
        };
      function q(e) {
        var t = (0, j.kP)().session,
          n = (0, E.Z)();
        return (0, f.a)(
          O(null == t ? void 0 : t.accessToken),
          function () {
            return C.ZP.getUserSystemMessage(
              (null == t ? void 0 : t.accessToken) || ""
            ).catch(function () {
              S.m.danger("Failed to get your Custom Instructions");
            });
          },
          {
            enabled: !!(e && (null == t ? void 0 : t.accessToken) && n),
            select: function (e) {
              var t, n, r;
              return {
                aboutUserMessage:
                  null !== (t = null == e ? void 0 : e.about_user_message) &&
                  void 0 !== t
                    ? t
                    : "",
                aboutModelMessage:
                  null !== (n = null == e ? void 0 : e.about_model_message) &&
                  void 0 !== n
                    ? n
                    : "",
                enabled:
                  null === (r = null == e ? void 0 : e.enabled) ||
                  void 0 === r ||
                  r,
              };
            },
          }
        );
      }
      var z = {
        aboutUserMessage: void 0,
        aboutModelMessage: void 0,
        enabled: void 0,
      };
      function H() {
        var e,
          t,
          n,
          u,
          f,
          g,
          h,
          m,
          v,
          x = (0, b.Z)(),
          k = !1 == !!D.m.getItem(R),
          E = (0, o._)((0, p.useState)(!1), 2),
          F = E[0],
          A = E[1],
          H = (0, j.kP)().loading,
          $ = (0, _.tN)(function (e) {
            return e.activeModals.has(_.B.UserContext);
          }),
          Y = q($ && !H),
          J = Y.isLoading,
          K = Y.data,
          X = null != K ? K : {},
          ee = X.aboutUserMessage,
          et = void 0 === ee ? "" : ee,
          en = X.aboutModelMessage,
          er = void 0 === en ? "" : en,
          ea = X.enabled,
          ei = (0, o._)((0, p.useState)(z), 2),
          eo = ei[0],
          es = ei[1],
          el = eo.aboutUserMessage,
          eu = eo.aboutModelMessage,
          ed = eo.enabled,
          ec = null != ed ? ed : !!ea,
          ef = (0, o._)((0, p.useState)(null), 2),
          eg = ef[0],
          eh = ef[1],
          em = (0, p.useCallback)(function () {
            _.vm.closeModal(_.B.UserContext), es(z), eh(null);
          }, []),
          ep =
            ((t = (e = {
              onSuccess: function () {
                em();
              },
              onError: function (e) {
                var t, n, r, a;
                return (
                  (null === (t = e.response) || void 0 === t
                    ? void 0
                    : t.reason) === "content_policy" &&
                  (null === (n = e.response) || void 0 === n ? void 0 : n.field)
                    ? eh(
                        null === (r = e.response) || void 0 === r
                          ? void 0
                          : r.field
                      )
                    : S.m.danger(
                        null !== (a = e.message) && void 0 !== a
                          ? a
                          : "Failed to update Custom Instructions."
                      ),
                  e
                );
              },
            }).onSuccess),
            (n = e.onError),
            (u = (0, j.kP)().session),
            (f = (0, d.NL)()),
            (0, c.D)({
              mutationFn: function (e) {
                var t = e.userContext;
                return C.ZP.createOrUpdateUserSystemMessage(
                  (null == u ? void 0 : u.accessToken) || "",
                  t
                );
              },
              onSettled: function (e, t) {
                var n = O(null == u ? void 0 : u.accessToken);
                null === e || t
                  ? f.invalidateQueries({ queryKey: n })
                  : f.setQueryData(n, e);
              },
              onSuccess: t,
              onError: n,
            })),
          ev = ep.isLoading,
          ex = ep.mutate,
          eb = (0, o._)((0, p.useState)(!1), 2),
          ey = eb[0],
          ej = eb[1],
          ew = Q(null != el ? el : "") || Q(null != eu ? eu : ""),
          eC =
            (void 0 !== eu && eu !== er) ||
            (void 0 !== el && el !== et) ||
            (void 0 !== ed && ed !== ea),
          e_ = (0, p.useCallback)(
            function () {
              eC ? ej(!0) : em();
            },
            [em, eC]
          ),
          ek = (0, p.useCallback)(
            (0, r._)(function () {
              return (0, s.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (ev) return [3, 2];
                    return (
                      eh(null),
                      [
                        4,
                        ex({
                          userContext: {
                            aboutUserMessage: null != el ? el : "",
                            aboutModelMessage: null != eu ? eu : "",
                            enabled: !!ed,
                          },
                        }),
                      ]
                    );
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
            [ev, eu, el, ed, ex]
          ),
          eM = (0, p.useCallback)(
            function () {
              if (ew) {
                var e,
                  t,
                  n = Q(null != el ? el : ""),
                  r = Q(null != eu ? eu : "");
                n &&
                  w.m.logEvent(
                    "chatgpt_user_context_modal__message_past_limit",
                    void 0,
                    {
                      type: "about_user_message",
                      limit: V.toString(),
                      character_length:
                        null !==
                          (e = null == el ? void 0 : el.length.toString()) &&
                        void 0 !== e
                          ? e
                          : "",
                    }
                  ),
                  r &&
                    w.m.logEvent(
                      "chatgpt_user_context_modal__message_past_limit",
                      void 0,
                      {
                        type: "about_model_message",
                        limit: V.toString(),
                        character_length:
                          null !==
                            (t = null == eu ? void 0 : eu.length.toString()) &&
                          void 0 !== t
                            ? t
                            : "",
                      }
                    ),
                  S.m.danger(
                    x.formatMessage(B.messageLimitError, { limit: V }),
                    { duration: 4, hasCloseButton: !0 }
                  );
                return;
              }
              ek();
            },
            [x, ew, eu, el, ek]
          );
        if ($ && k && !F)
          return (0, l.jsx)(L, {
            onClose: function () {
              A(!0);
            },
          });
        if ($ && ey) {
          var eT = function () {
            ej(!1);
          };
          return (0, l.jsx)(
            T.Z,
            {
              isOpen: !0,
              onClose: eT,
              type: "success",
              title: x.formatMessage(B.confirmCloseTitle),
              primaryButton: (0, l.jsx)(M.ZP.Button, {
                title: x.formatMessage(B.confirmCloseOk),
                color: "danger",
                onClick: function () {
                  em(), eT();
                },
              }),
              secondaryButton: (0, l.jsx)(M.ZP.Button, {
                title: x.formatMessage(B.confirmCloseCancel),
                color: "neutral",
                onClick: eT,
              }),
              children: (0, l.jsx)("div", {
                className: "text-sm",
                children: (0, l.jsx)(y.Z, (0, a._)({}, B.confirmCloseBody)),
              }),
            },
            "confirm-close"
          );
        }
        return (0, l.jsxs)(
          T.Z,
          {
            isOpen: $,
            onClose: e_,
            type: "success",
            size: "custom",
            className: "max-w-lg xl:max-w-xl",
            title: (0, l.jsxs)("div", {
              className: "flex flex-row gap-2",
              children: [
                (0, l.jsx)(y.Z, (0, a._)({}, B.profileTitle)),
                (0, l.jsx)(N.u, {
                  sideOffset: 4,
                  interactive: !0,
                  delayDuration: 0,
                  label: (0, l.jsx)("div", {
                    children: (0, l.jsx)(
                      y.Z,
                      (0, i._)((0, a._)({}, B.profileSubhead), {
                        values: {
                          article: function (e) {
                            return (0, l.jsx)("a", {
                              href: U,
                              target: "_blank",
                              className: "underline",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                  side: "bottom",
                  children: (0, l.jsx)(P.HV, {
                    className: "h-6 w-6 flex-shrink-0 text-gray-500",
                  }),
                }),
              ],
            }),
            children: [
              H || J
                ? (0, l.jsx)("div", {
                    className: "flex h-14 items-center justify-center",
                    children: (0, l.jsx)(I.Z, {}),
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-muted pb-3 pt-2 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          y.Z,
                          (0, a._)({}, B.aboutYouHelpText)
                        ),
                      }),
                      (0, l.jsx)(G, {
                        className: "mb-3",
                        onSubmit: eM,
                        disabled: !ec,
                        tip: (0, l.jsx)(W, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.aboutUserTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.aboutUserTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.aboutUserTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.aboutUserTip4)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.aboutUserTip5)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasModError: "about_user_message" === eg,
                        value: null != el ? el : et,
                        onChange: function (e) {
                          return es(function (t) {
                            return {
                              aboutModelMessage:
                                null !== (g = t.aboutModelMessage) &&
                                void 0 !== g
                                  ? g
                                  : er,
                              aboutUserMessage: e.target.value,
                              enabled:
                                null !== (h = t.enabled) && void 0 !== h
                                  ? h
                                  : ec,
                            };
                          });
                        },
                      }),
                      (0, l.jsx)("p", {
                        className: "text-muted py-3 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          y.Z,
                          (0, a._)({}, B.modelHelpText)
                        ),
                      }),
                      (0, l.jsx)(G, {
                        onSubmit: eM,
                        disabled: !ec,
                        tip: (0, l.jsx)(W, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.modelTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.modelTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.modelTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, B.modelTip4)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasModError: "about_model_message" === eg,
                        value: null != eu ? eu : er,
                        onChange: function (e) {
                          return es(function (t) {
                            return {
                              aboutUserMessage:
                                null !== (m = t.aboutUserMessage) &&
                                void 0 !== m
                                  ? m
                                  : et,
                              aboutModelMessage: e.target.value,
                              enabled:
                                null !== (v = t.enabled) && void 0 !== v
                                  ? v
                                  : ec,
                            };
                          });
                        },
                      }),
                    ],
                  }),
              (0, l.jsx)("div", {
                className: "mt-5 sm:mt-4",
                children: (0, l.jsxs)("div", {
                  className:
                    "flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",
                  children: [
                    (0, l.jsxs)("label", {
                      className:
                        "mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",
                      children: [
                        (0, l.jsx)("div", {
                          className: "self-center text-sm text-gray-600",
                          children: ec
                            ? (0, l.jsx)(
                                y.Z,
                                (0, a._)({}, B.chatPreferencesIsEnabled)
                              )
                            : (0, l.jsx)(
                                y.Z,
                                (0, a._)({}, B.chatPreferencesIsDisabled)
                              ),
                        }),
                        (0, l.jsx)(Z.Z, {
                          enabled: ec,
                          onChange: function (e) {
                            var t, n;
                            es(function (r) {
                              return {
                                aboutUserMessage:
                                  null !== (t = r.aboutUserMessage) &&
                                  void 0 !== t
                                    ? t
                                    : et,
                                aboutModelMessage:
                                  null !== (n = r.aboutModelMessage) &&
                                  void 0 !== n
                                    ? n
                                    : er,
                                enabled: e,
                              };
                            });
                          },
                          label: ec
                            ? x.formatMessage(B.disableToggleLabel)
                            : x.formatMessage(B.enableToggleLabel),
                        }),
                      ],
                    }),
                    (0, l.jsx)(M.ZP.Actions, {
                      secondaryButton: (0, l.jsx)(M.ZP.Button, {
                        onClick: e_,
                        children: (0, l.jsx)(y.Z, (0, a._)({}, B.cancel)),
                      }),
                      primaryButton: (0, l.jsx)(M.ZP.Button, {
                        loading: ev,
                        onClick: eM,
                        color: "primary",
                        visuallyDisabled: ew,
                        disabled: !eC,
                        children: (0, l.jsx)(y.Z, (0, a._)({}, B.save)),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          },
          "user-context"
        );
      }
      var W = function (e) {
          var t = e.children;
          return (0, l.jsx)("div", {
            className: "whitespace-pre-line",
            children: t,
          });
        },
        V = 1500,
        Q = function (e) {
          return e.length > V;
        },
        G = function (e) {
          var t = e.disabled,
            n = e.onChange,
            r = e.onSubmit,
            s = e.placeholder,
            d = e.value,
            c = e.tip,
            f = e.hasModError,
            x = e.className,
            j = (0, b.Z)(),
            w = (0, p.useRef)(null),
            C = (0, k.x_)(),
            _ = (0, k.aj)(),
            N = !C,
            I = (0, o._)((0, p.useState)(!1), 2),
            S = I[0],
            Z = I[1],
            E = (0, o._)((0, p.useState)(N), 2),
            F = E[0],
            D = E[1],
            R = Q(d);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(T.Z, {
                isOpen: N && !F,
                type: "success",
                size: "custom",
                className: "max-w-lg",
                title: j.formatMessage(B.tipsHeader),
                closeButton: (0, l.jsx)(M.ZP.CloseButton, {
                  onClose: function () {
                    D(!0);
                  },
                }),
                onClose: function () {
                  D(!0);
                },
                children: c,
              }),
              (0, l.jsxs)(u.fC, {
                open: !N && S && !F,
                children: [
                  (0, l.jsxs)("div", {
                    className: x,
                    children: [
                      (0, l.jsx)(u.xz, {
                        asChild: !0,
                        children: (0, l.jsx)("textarea", {
                          ref: w,
                          className: (0, g.Z)(
                            "w-full	resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800",
                            {
                              "border-orange-400 focus:border-orange-400": f,
                              "border-red-500 focus:border-red-500": R && !f,
                              "border-gray-100 focus:border-brand-green":
                                !R && !f,
                              "bg-gray-50 text-gray-300": t,
                            }
                          ),
                          disabled: t,
                          placeholder: s,
                          onKeyDown: function (e) {
                            t ||
                              "Enter" !== e.key ||
                              !e.metaKey ||
                              e.shiftKey ||
                              e.nativeEvent.isComposing ||
                              (e.preventDefault(), r());
                          },
                          rows: C && !_ ? 8 : 7,
                          value: d,
                          onChange: n,
                          onBlur: function () {
                            Z(!1);
                          },
                          onFocus: function () {
                            Z(!0);
                          },
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: (0, g.Z)(
                          "flex items-center justify-between px-1 text-xs",
                          R ? "text-red-600" : "text-gray-400"
                        ),
                        children: f
                          ? (0, l.jsx)("div", {
                              className:
                                "visible mt-2 text-left text-xs text-orange-400 ",
                              children: (0, l.jsx)(
                                y.Z,
                                (0, i._)((0, a._)({}, B.modApiVoilation), {
                                  values: {
                                    policyLink: function (e) {
                                      return (0, l.jsx)("a", {
                                        href: "https://platform.openai.com/docs/usage-policies/content-policy",
                                        className: "underline",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e,
                                      });
                                    },
                                    feedbackLink: function (e) {
                                      return (0, l.jsx)("a", {
                                        href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                                        className: "underline",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e,
                                      });
                                    },
                                  },
                                })
                              ),
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsxs)("div", {
                                  children: [d.length, "/", V],
                                }),
                                (0, l.jsx)("button", {
                                  className: (0, g.Z)(
                                    "flex items-center gap-1",
                                    S ? "text-gray-400" : "text-gray-200"
                                  ),
                                  onClick: function () {
                                    var e;
                                    null === (e = w.current) ||
                                      void 0 === e ||
                                      e.focus(),
                                      D(!F);
                                  },
                                  tabIndex: -1,
                                  children: (0, l.jsx)(h.M, {
                                    initial: !1,
                                    children:
                                      S &&
                                      (0, l.jsx)(
                                        m.E.div,
                                        {
                                          className: "flex items-center gap-1",
                                          initial: { opacity: 0 },
                                          animate: {
                                            opacity: 1,
                                            transition: {
                                              duration: 0.2,
                                              ease: "easeIn",
                                            },
                                          },
                                          exit: {
                                            opacity: 0,
                                            transition: {
                                              duration: 0.2,
                                              ease: "easeIn",
                                            },
                                          },
                                          children: F
                                            ? (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                  (0, l.jsx)(
                                                    y.Z,
                                                    (0, a._)({}, B.showTips)
                                                  ),
                                                  (0, l.jsx)(P.ZP, {
                                                    size: "xsmall",
                                                    icon: v.rDJ,
                                                  }),
                                                ],
                                              })
                                            : (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                  (0, l.jsx)(
                                                    y.Z,
                                                    (0, a._)({}, B.hideTips)
                                                  ),
                                                  (0, l.jsx)(P.ZP, {
                                                    size: "xsmall",
                                                    icon: v.rzC,
                                                  }),
                                                ],
                                              }),
                                        },
                                        "show-hide"
                                      ),
                                  }),
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(u.h_, {
                    children: (0, l.jsx)(u.VY, {
                      side: "right",
                      align: "start",
                      sideOffset: 12,
                      className:
                        "relative max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-[0px_4px_14px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:text-white xl:max-w-xs",
                      onOpenAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      onCloseAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, l.jsx)("strong", {
                            children: (0, l.jsx)(
                              y.Z,
                              (0, a._)({}, B.tipsHeader)
                            ),
                          }),
                          c,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    63031: function (e, t, n) {
      n.d(t, {
        $H: function () {
          return g;
        },
        Iy: function () {
          return c;
        },
        L8: function () {
          return f;
        },
        O6: function () {
          return m;
        },
        VF: function () {
          return h;
        },
        qS: function () {
          return p;
        },
      });
      var r = n(21722),
        a = n(39889),
        i = n(70079),
        o = n(70671),
        s = n(94968),
        l = n(62509),
        u = n(99486),
        d = n(88798);
      function c(e) {
        return e.replace("file-service://", "");
      }
      function f(e) {
        return "file-service://" + e;
      }
      function g(e) {
        return e.startsWith("file-service://");
      }
      function h() {
        var e = (0, o.Z)();
        return (0, i.useCallback)(
          function (t, n) {
            switch (t) {
              case "file_too_large":
                return e.formatMessage(v.fileTooLarge, n);
              case "over_user_quota":
                return e.formatMessage(v.overUserQuota, n);
              case "file_not_found":
                return e.formatMessage(v.fileNotFound, n);
              case "file_timed_out":
                return e.formatMessage(v.fileTimedOut, n);
              case "ace_pod_expired":
                return e.formatMessage(v.codeInterpreterSessionTimeout, n);
              case "default_create_entry_error":
                return e.formatMessage(v.defaultCreateEntryError, n);
              case "default_download_link_error":
                return e.formatMessage(v.defaultDownloadLinkError, n);
              default:
                return e.formatMessage(v.unknownError);
            }
          },
          [e]
        );
      }
      function m() {
        var e,
          t = (0, l.kP)().session,
          n = (0, o.Z)();
        return (
          (e = (0, r._)(function (e, r) {
            var i, o, s, l, c;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (null == t)
                    return (
                      d.m.danger(n.formatMessage(v.fileDownloadFailed)), [2, !1]
                    );
                  a.label = 1;
                case 1:
                  return (
                    a.trys.push([1, 4, , 5]),
                    [4, u.ZP.getFileDownloadLink(e, t.accessToken)]
                  );
                case 2:
                  if (!(i = a.sent()).download_url)
                    throw Error(
                      "File is not ready to download: " + JSON.stringify(i)
                    );
                  return [
                    4,
                    fetch(i.download_url).then(function (e) {
                      return e.blob();
                    }),
                  ];
                case 3:
                  return (
                    (o = a.sent()),
                    (s = URL.createObjectURL(o)),
                    (l = window.open(s, "_blank")) &&
                      l.addEventListener("beforeunload", function () {
                        URL.revokeObjectURL(s);
                      }),
                    ((c = document.createElement("a")).href = s),
                    (c.download = r),
                    (c.style.display = "none"),
                    c.click(),
                    URL.revokeObjectURL(s),
                    [3, 5]
                  );
                case 4:
                  return (
                    a.sent(),
                    d.m.danger(n.formatMessage(v.fileDownloadFailed)),
                    [2, !1]
                  );
                case 5:
                  return [2, !0];
              }
            });
          })),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      }
      function p() {
        var e,
          t = (0, l.kP)().session,
          n = m();
        return (
          (e = (0, r._)(function (e, r) {
            var i;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (null == t) return [2];
                  (i = 0), (a.label = 1);
                case 1:
                  if (!(i < e.length)) return [3, 4];
                  return [
                    4,
                    Promise.all(
                      e.slice(i, i + r).map(function (e) {
                        return n(e.id, e.name);
                      })
                    ),
                  ];
                case 2:
                  a.sent(), (a.label = 3);
                case 3:
                  return (i += r), [3, 1];
                case 4:
                  return [2];
              }
            });
          })),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      }
      var v = (0, s.vU)({
        defaultCreateEntryError: {
          id: "fileUpload.defaultCreateEntryError",
          defaultMessage: "Unable to upload file",
          description: "Error message when file upload fails",
        },
        defaultDownloadLinkError: {
          id: "fileUpload.defaultDownloadLinkError",
          defaultMessage: "Failed to get upload status for {fileName}",
          description: "Error message when file download link fails",
        },
        unknownError: {
          id: "fileUpload.unknownError",
          defaultMessage: "Unknown error occurred",
          description: "Error message when file upload fails",
        },
        fileTooLarge: {
          id: "fileUpload.fileTooLarge",
          defaultMessage: "File is too large",
          description: "Error message when file is too large to upload",
        },
        overUserQuota: {
          id: "fileUpload.overUserQuota",
          defaultMessage: "User quota exceeded",
          description:
            "Error message when user storage space (quote) has been exceeded",
        },
        fileNotFound: {
          id: "fileUpload.fileNotFound",
          defaultMessage: "File not found",
          description: "Error message when file was not found",
        },
        fileTimedOut: {
          id: "fileUpload.fileTimedOut",
          defaultMessage: "File upload timed out. Please try again.",
          description: "Error message when file upload timed out",
        },
        codeInterpreterSessionTimeout: {
          id: "fileUpload.codeInterpreterSessionTimeout",
          defaultMessage: "Code interpreter session expired",
          description: "Error message when code interpreter session expired",
        },
        fileDownloadFailed: {
          id: "filesModal.fileDownloadFailed",
          defaultMessage: "File download failed. Please try again.",
          description: "Error message when file download fails",
        },
      });
    },
    67576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eu;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        o = n(35250),
        s = n(31636),
        l = n(19841),
        u = n(77997),
        d = n(70079),
        c = n(47567),
        f = n(54118),
        g = n(32542),
        h = n(96237),
        m = n(61110),
        p = n(55975),
        v = n(46050),
        x = n(29874),
        b = n(8449),
        y = n(15472),
        j = {
          tokenize: function (e, t, n) {
            var r = function (t) {
                return t === p.q.eof || (0, x.Ch)(t)
                  ? a(t)
                  : (e.enter("mathFlowFenceMeta"),
                    e.enter(y.V.chunkString, {
                      contentType: b._.contentTypeString,
                    }),
                    (function t(r) {
                      return r === p.q.eof || (0, x.Ch)(r)
                        ? (e.exit(y.V.chunkString),
                          e.exit("mathFlowFenceMeta"),
                          a(r))
                        : r === p.q.rightSquareBracket
                        ? n(r)
                        : (e.consume(r), t);
                    })(t));
              },
              a = function (n) {
                return (
                  e.exit("mathFlowFence"),
                  s.interrupt
                    ? t(n)
                    : (function t(n) {
                        return n === p.q.eof
                          ? i(n)
                          : (0, x.Ch)(n)
                          ? e.attempt(
                              w,
                              e.attempt(
                                { tokenize: o, partial: !0 },
                                i,
                                u ? (0, v.f)(e, t, y.V.linePrefix, u + 1) : t
                              ),
                              i
                            )(n)
                          : (e.enter("mathFlowValue"),
                            (function n(r) {
                              return r === p.q.eof || (0, x.Ch)(r)
                                ? (e.exit("mathFlowValue"), t(r))
                                : (e.consume(r), n);
                            })(n));
                      })(n)
                );
              },
              i = function (n) {
                return e.exit("mathFlow"), t(n);
              },
              o = function (e, t, n) {
                var r = [];
                return (0, v.f)(
                  e,
                  function (t) {
                    return (
                      e.enter("mathFlowFence"),
                      e.enter("mathFlowFenceSequence"),
                      (function t(i) {
                        return (i === p.q.backslash && 0 === r.length) ||
                          (i === p.q.rightSquareBracket &&
                            r[0] === p.q.backslash)
                          ? (e.consume(i), r.push(i), t)
                          : r < d
                          ? n(i)
                          : (e.exit("mathFlowFenceSequence"),
                            (0, v.f)(e, a, y.V.whitespace)(i));
                      })(t)
                    );
                  },
                  y.V.linePrefix,
                  b._.tabSize
                );
                function a(r) {
                  return r === p.q.eof || (0, x.Ch)(r)
                    ? (e.exit("mathFlowFence"), t(r))
                    : n(r);
                }
              },
              s = this,
              l = this.events[this.events.length - 1],
              u =
                l && l[1].type === y.V.linePrefix
                  ? l[2].sliceSerialize(l[1], !0).length
                  : 0,
              d = [];
            return function (t) {
              return (
                p.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(a) {
                  return a === p.q.backslash ||
                    (a === p.q.leftSquareBracket && d[0] === p.q.backslash)
                    ? (e.consume(a), d.push(a), t)
                    : (e.exit("mathFlowFenceSequence"),
                      d.length < 2 ? n(a) : (0, v.f)(e, r, y.V.whitespace)(a));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        w = {
          tokenize: function (e, t, n) {
            var r = function (e) {
                return a.parser.lazy[a.now().line] ? n(e) : t(e);
              },
              a = this;
            return function (t) {
              return (
                e.enter(y.V.lineEnding), e.consume(t), e.exit(y.V.lineEnding), r
              );
            };
          },
          partial: !0,
        },
        C = {
          tokenize: function (e, t, n) {
            var r = function (t) {
                return t === p.q.eof || (0, x.Ch)(t)
                  ? a(t)
                  : (e.enter("mathFlowFenceMeta"),
                    e.enter(y.V.chunkString, {
                      contentType: b._.contentTypeString,
                    }),
                    (function t(r) {
                      return r === p.q.eof || (0, x.Ch)(r)
                        ? (e.exit(y.V.chunkString),
                          e.exit("mathFlowFenceMeta"),
                          a(r))
                        : r === p.q.dollarSign
                        ? n(r)
                        : (e.consume(r), t);
                    })(t));
              },
              a = function (n) {
                return (
                  e.exit("mathFlowFence"),
                  s.interrupt
                    ? t(n)
                    : (function t(n) {
                        return n === p.q.eof
                          ? i(n)
                          : (0, x.Ch)(n)
                          ? e.attempt(
                              _,
                              e.attempt(
                                { tokenize: o, partial: !0 },
                                i,
                                u ? (0, v.f)(e, t, y.V.linePrefix, u + 1) : t
                              ),
                              i
                            )(n)
                          : (e.enter("mathFlowValue"),
                            (function n(r) {
                              return r === p.q.eof || (0, x.Ch)(r)
                                ? (e.exit("mathFlowValue"), t(r))
                                : (e.consume(r), n);
                            })(n));
                      })(n)
                );
              },
              i = function (n) {
                return e.exit("mathFlow"), t(n);
              },
              o = function (e, t, n) {
                var r = 0;
                return (0, v.f)(
                  e,
                  function (t) {
                    return (
                      e.enter("mathFlowFence"),
                      e.enter("mathFlowFenceSequence"),
                      (function t(i) {
                        return i === p.q.dollarSign
                          ? (e.consume(i), r++, t)
                          : r < d
                          ? n(i)
                          : (e.exit("mathFlowFenceSequence"),
                            (0, v.f)(e, a, y.V.whitespace)(i));
                      })(t)
                    );
                  },
                  y.V.linePrefix,
                  b._.tabSize
                );
                function a(r) {
                  return r === p.q.eof || (0, x.Ch)(r)
                    ? (e.exit("mathFlowFence"), t(r))
                    : n(r);
                }
              },
              s = this,
              l = s.events[s.events.length - 1],
              u =
                l && l[1].type === y.V.linePrefix
                  ? l[2].sliceSerialize(l[1], !0).length
                  : 0,
              d = 0;
            return function (t) {
              return (
                p.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(a) {
                  return a === p.q.dollarSign
                    ? (e.consume(a), d++, t)
                    : (e.exit("mathFlowFenceSequence"),
                      d < 2 ? n(a) : (0, v.f)(e, r, y.V.whitespace)(a));
                })(t)
              );
            };
          },
          concrete: !0,
        },
        _ = {
          tokenize: function (e, t, n) {
            var r = function (e) {
                return a.parser.lazy[a.now().line] ? n(e) : t(e);
              },
              a = this;
            return function (t) {
              return (
                (0, x.Ch)(t),
                e.enter(y.V.lineEnding),
                e.consume(t),
                e.exit(y.V.lineEnding),
                r
              );
            };
          },
          partial: !0,
        };
      function k(e) {
        var t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === y.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === y.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== y.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === y.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function M(e) {
        return (
          e !== p.q.backslash ||
          this.events[this.events.length - 1][1].type === y.V.characterEscape
        );
      }
      function T(e) {
        var t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === y.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === y.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== y.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === y.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function N(e) {
        return (
          e !== p.q.dollarSign ||
          this.events[this.events.length - 1][1].type === y.V.characterEscape
        );
      }
      function P(e) {
        var t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === y.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === y.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== y.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === y.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function I(e) {
        return (
          e !== p.q.backslash ||
          this.events[this.events.length - 1][1].type === y.V.characterEscape
        );
      }
      var S = n(67726),
        Z = n(63395),
        E = n(93362),
        F = n(45369),
        D = n(42426),
        R = n(65028),
        L = n(88366),
        A = n(52738),
        B = n(66570),
        U = n(21722),
        O = n(22830),
        q = n(39889),
        z = n(13995),
        H = n(5268),
        W = n(70671),
        V = n(32004),
        Q = n(94968),
        G = n(99486),
        $ = n(31621),
        Y = n(45635),
        J = n(63031),
        K = n(1821),
        X = n(88798),
        ee = "sandbox:";
      function et(e) {
        var t,
          n,
          s,
          l = e.messageId,
          u = e.clientThreadId,
          c = e.href,
          f = (0, i._)(e, ["messageId", "clientThreadId", "href"]),
          h = (0, d.useContext)(g.gB),
          m = (0, z.NL)(),
          p = (0, O._)((0, d.useState)(!1), 2),
          v = p[0],
          x = p[1],
          b = c.substring(ee.length),
          y = $.tQ.getServerThreadId(u),
          j = (0, W.Z)(),
          w = (0, d.useCallback)(function (e) {
            var t = document.createElement("a");
            (t.href = e), t.click(), x(!1);
          }, []),
          C = ((t = (0, d.useCallback)(function (e) {
            x(!1), X.m.danger(e);
          }, [])),
          (n = (0, J.VF)()),
          (0, H.a)({
            queryKey: er(l, b),
            queryFn: function () {
              return G.ZP.downloadFromInterpreter(l, y, b)
                .then(function (e) {
                  return (
                    (null == e ? void 0 : e.status) === "success" &&
                      w(e.download_url),
                    e
                  );
                })
                .catch(function (e) {
                  var r = n("default_download_link_error", { fileName: b });
                  throw (
                    (void 0 !== e.code && (r = n(e.code)), null == t || t(r), e)
                  );
                });
            },
            enabled: !!(v && !h && l && y && b),
          })).data,
          _ = (0, d.useCallback)(
            ((s = (0, U._)(function (e) {
              return (0, q.__generator)(this, function (t) {
                return (
                  void 0 !== u &&
                    (e.preventDefault(),
                    (void 0 === C ||
                      (null == C ? void 0 : C.status) === "error") &&
                      m.invalidateQueries({ queryKey: er(l, b) }),
                    (null == C ? void 0 : C.status) == "success" &&
                    (null == C ? void 0 : C.download_url)
                      ? w(C.download_url)
                      : x(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return s.apply(this, arguments);
            }),
            [u, C, m, l, b, w]
          );
        return (0, o.jsx)(Y.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, o.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              v
                ? j.formatMessage(ea.startingDownload)
                : j.formatMessage(ea.downloadFile),
              v && (0, o.jsx)(K.Z, {}),
            ],
          }),
          side: "top",
          sideOffset: 4,
          children: (0, o.jsx)(
            "a",
            (0, a._)((0, r._)({}, f), {
              className: "cursor-pointer",
              onClick: function (e) {
                return !v && _(e);
              },
            })
          ),
        });
      }
      function en(e) {
        return (0, o.jsx)(Y.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, o.jsx)("span", {
            className: "flex items-center gap-1",
            children: (0, o.jsx)(V.Z, (0, r._)({}, ea.downloadUnavailable)),
          }),
          side: "top",
          sideOffset: 4,
          children: (0, o.jsx)(
            "span",
            (0, a._)((0, r._)({}, e), {
              className:
                "font-semibold text-gray-500 underline dark:text-gray-300",
            })
          ),
        });
      }
      function er(e, t) {
        return ["downloadSandboxLink", e, t];
      }
      var ea = (0, Q.vU)({
          downloadFile: {
            id: "SandboxDownload.downloadFile",
            defaultMessage: "Download file",
            description: "Tooltip label for downloading a file button",
          },
          startingDownload: {
            id: "SandboxDownload.startingDownload",
            defaultMessage: "Starting download",
            description:
              "Tooltip label for downloading started for file button",
          },
          downloadUnavailable: {
            id: "SandboxDownload.downloadUnavailable",
            defaultMessage: "File download not supported in a shared chat",
            description:
              "Tooltip label indicating file is unavailable to download for shared conversations",
          },
        }),
        ei = function (e) {
          return e.startsWith(ee) ? e : (0, Z.A)(e);
        },
        eo = [
          R.Z,
          [
            function () {
              var e,
                t,
                n = function (e, t) {
                  (r[e] ? r[e] : (r[e] = [])).push(t);
                },
                r = this.data();
              n("micromarkExtensions", {
                flow:
                  ((e = {}),
                  (0, h._)(e, p.q.dollarSign, C),
                  (0, h._)(e, p.q.backslash, j),
                  e),
                text:
                  ((t = {}),
                  (0, h._)(t, p.q.dollarSign, {
                    tokenize: function (e, t, n) {
                      var r,
                        a,
                        i = 0;
                      return function (t) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function t(r) {
                            return r === p.q.dollarSign
                              ? (e.consume(r), i++, t)
                              : i < 2
                              ? n(r)
                              : (e.exit("mathTextSequence"), o(r));
                          })(t)
                        );
                      };
                      function o(l) {
                        return l === p.q.eof
                          ? n(l)
                          : l === p.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function n(o) {
                              return o === p.q.dollarSign
                                ? (e.consume(o), r++, n)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  t(o))
                                : ((a.type = "mathTextData"), s(o));
                            })(l))
                          : l === p.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), o)
                          : (0, x.Ch)(l)
                          ? (e.enter(y.V.lineEnding),
                            e.consume(l),
                            e.exit(y.V.lineEnding),
                            o)
                          : (e.enter("mathTextData"), s(l));
                      }
                      function s(t) {
                        return t === p.q.eof ||
                          t === p.q.space ||
                          t === p.q.dollarSign ||
                          (0, x.Ch)(t)
                          ? (e.exit("mathTextData"), o(t))
                          : (e.consume(t), s);
                      }
                    },
                    resolve: T,
                    previous: N,
                  }),
                  (0, h._)(t, p.q.backslash, [
                    {
                      tokenize: function (e, t, n) {
                        var r,
                          a = [],
                          i = [],
                          o = this;
                        return function (t) {
                          return (
                            p.q.backslash,
                            M.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === p.q.backslash && 0 === a.length) ||
                                (r === p.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(t)
                          );
                        };
                        function s(o) {
                          return o === p.q.eof
                            ? n(o)
                            : o === p.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(o) {
                                return (a.join(","),
                                (o === p.q.backslash && 0 === i.length) ||
                                  (o === p.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === p.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, x.Ch)(o)
                            ? (e.enter(y.V.lineEnding),
                              e.consume(o),
                              e.exit(y.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(t) {
                          return t === p.q.eof ||
                            t === p.q.space ||
                            t === p.q.backslash ||
                            (0, x.Ch)(t)
                            ? (e.exit("mathTextData"), s(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: k,
                      previous: M,
                    },
                    {
                      tokenize: function (e, t, n) {
                        var r,
                          a = [],
                          i = [],
                          o = this;
                        return function (t) {
                          return (
                            p.q.backslash,
                            I.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === p.q.backslash && 0 === a.length) ||
                                (r === p.q.leftSquareBracket && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(t)
                          );
                        };
                        function s(o) {
                          return o === p.q.eof
                            ? n(o)
                            : o === p.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(o) {
                                return (a.join(","),
                                (o === p.q.backslash && 0 === i.length) ||
                                  (o === p.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === p.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, x.Ch)(o)
                            ? (e.enter(y.V.lineEnding),
                              e.consume(o),
                              e.exit(y.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(t) {
                          return t === p.q.eof ||
                            t === p.q.space ||
                            t === p.q.backslash ||
                            (0, x.Ch)(t)
                            ? (e.exit("mathTextData"), s(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: P,
                      previous: I,
                    },
                  ]),
                  t),
              }),
                n("fromMarkdownExtensions", (0, m.N)()),
                n("toMarkdownExtensions", (0, m.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        es = [
          [
            E.Z,
            {
              languages: { mathematica: S.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          F.Z,
          [D.Z, { newlines: !0 }],
        ],
        el = {
          code: function (e) {
            var t = e.inline,
              n = e.node,
              s = e.className,
              l = e.children,
              u = (0, i._)(e, ["inline", "node", "className", "children"]);
            if (t) {
              var d = (0, L.B)(n),
                c = (0, A.T$)(d);
              return c
                ? (0, o.jsx)(A.s8, { displayInfo: c })
                : (0, o.jsx)(
                    "code",
                    (0, a._)((0, r._)({ className: s }, u), { children: l })
                  );
            }
            var f,
              g =
                null ===
                  (f =
                    null == s
                      ? void 0
                      : s.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              h = g ? g.split("-")[1] : "";
            return (0, o.jsx)(B.Z, {
              language: h,
              className: s,
              content: (0, L.B)(n),
              children: l,
            });
          },
        };
      function eu(e) {
        var t = e.size,
          n = e.children,
          h = e.className,
          m = e.clientThreadId,
          p = e.messageId,
          v = (0, u.F)().theme,
          x = (0, f.Fl)().isCodeInterpreterAvailable,
          b = (0, d.useContext)(g.gB),
          y = (0, d.useMemo)(
            function () {
              return (0, a._)((0, r._)({}, el), {
                a: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]);
                  return t.properties.href.startsWith(ee)
                    ? b
                      ? (0, o.jsx)(en, (0, r._)({}, n))
                      : x
                      ? (0, o.jsx)(
                          et,
                          (0, r._)({ clientThreadId: m, messageId: p }, n)
                        )
                      : null
                    : (0, o.jsx)("a", (0, r._)({}, n));
                },
                img: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.src;
                  return a.startsWith(ee) || a.startsWith("attachment:")
                    ? null
                    : (0, o.jsx)("img", (0, r._)({}, n));
                },
              });
            },
            [m, x, b, p]
          );
        return (0, o.jsx)(s.SV, {
          fallback: function () {
            return (0, o.jsx)(o.Fragment, { children: n });
          },
          children: (0, o.jsx)(c.D, {
            rehypePlugins: es,
            remarkPlugins: eo,
            linkTarget: "_new",
            className: (0, l.Z)(
              h,
              "markdown prose w-full break-words dark:prose-invert",
              "dark" === v ? "dark" : "light",
              "small" === (void 0 === t ? "medium" : t) && "prose-xs"
            ),
            transformLinkUri: ei,
            components: y,
            children: n,
          }),
        });
      }
    },
    31541: function (e, t, n) {
      n.d(t, {
        Cf: function () {
          return eM;
        },
        ZP: function () {
          return ek;
        },
        xz: function () {
          return eT;
        },
      });
      var r,
        a = n(39324),
        i = n(70216),
        o = n(4337),
        s = n(35250),
        l = n(19841),
        u = n(60554),
        d = n(70079),
        c = n(21389),
        f = n(16600),
        g = n(32877),
        h = n(31621),
        m = n(78931),
        p = n(52738),
        v = n(68993),
        x = n(52787),
        b = n(67273),
        y = n(78018),
        j = n(67576),
        w = n(22830),
        C = n(2827),
        _ = n(50795),
        k = n(82081),
        M = n(95954);
      function T() {
        var e = (0, o._)(["text-center mt-2 flex justify-center"]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, o._)(["flex gap-2 flex-wrap mt-2"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var P = c.Z.div(T());
      function I(e) {
        var t = e.initialText,
          n = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          o = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          c = e.onRequestCompletion,
          f = e.onCreateEditNode,
          g = e.disabled,
          m = e.attachments,
          p = (0, d.useId)(),
          v = "".concat(a, "-").concat(p),
          x = (0, w._)((0, d.useState)(null != t ? t : ""), 2),
          j = x[0],
          T = x[1],
          N = (0, d.useRef)(null);
        (0, d.useEffect)(function () {
          f(a, v, null != t ? t : "", m ? { attachments: m } : void 0);
        }, []);
        var I = (0, d.useCallback)(function (e) {
            T(e.currentTarget.value);
          }, []),
          Z = (0, d.useCallback)(
            function () {
              i(v, j),
                o(v),
                c(M.Os.Next, v, { eventSource: "mouse" }, !0),
                l(),
                _.o.logEvent(k.a.changeNode, { intent: "edit_save" });
            },
            [i, v, j, o, c, l]
          ),
          E = (0, d.useCallback)(
            function () {
              u(v),
                o(a),
                _.o.logEvent(k.a.changeNode, { intent: "edit_cancel" }),
                l();
              var e =
                n === M.uU.User
                  ? k.a.cancelEditPrompt
                  : k.a.cancelEditCompletion;
              _.o.logEvent(e, { threadId: h.tQ.getServerThreadId(r) });
            },
            [v, a, o, u, l, n, r]
          );
        (0, d.useEffect)(
          function () {
            var e = N.current,
              t = function (e) {
                "Enter" === e.key && e.metaKey
                  ? Z()
                  : "Escape" === e.key && E();
              };
            return (
              e && e.addEventListener("keydown", t),
              function () {
                e && e.removeEventListener("keydown", t);
              }
            );
          },
          [E, Z]
        );
        var F = m && m.length > 0;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(C.ZP, {
              ref: N,
              value: j,
              onChange: I,
              className:
                "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
            }),
            F &&
              (0, s.jsx)(S, {
                children: m.map(function (e) {
                  return (0, s.jsx)(y.Z, { file: e.name }, e.id);
                }),
              }),
            (0, s.jsxs)(P, {
              children: [
                (0, s.jsx)(b.z, {
                  as: "button",
                  onClick: Z,
                  className: "mr-2",
                  disabled: g,
                  children: "Save & Submit",
                }),
                (0, s.jsx)(b.z, {
                  as: "button",
                  color: "neutral",
                  onClick: E,
                  children: "Cancel",
                }),
              ],
            }),
          ],
        });
      }
      var S = c.Z.div(N()),
        Z = n(21722),
        E = n(39889),
        F = n(30644),
        D = n(47635),
        R = n(62509),
        L = n(99486),
        A = n(91809),
        B = n(1568);
      function U() {
        var e = (0, o._)(["text-xs text-black\n", ""]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, o._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function q(e) {
        var t,
          n = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          o = e.className,
          u = e.mini,
          c = !!a,
          f = (0, d.useCallback)(
            function () {
              _.o.logEvent(k.a.carouselCardClick, { content: r });
            },
            [r]
          );
        try {
          t = D.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, s.jsxs)(r ? "a" : "div", {
          className: (0, l.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            o
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: f,
          children: [
            c &&
              (0, s.jsx)(H, {
                children: (0, s.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, s.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(n),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, s.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, s.jsx)(z, {
                  $clamp: (void 0 !== u && u) || c,
                  children: n,
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, s.jsx)(A.Z, { url: i, name: t, size: 13 })
                      : (0, s.jsx)(B.Z, { url: r, size: 13 }),
                    (0, s.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var z = c.Z.div(U(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        H = c.Z.div(O()),
        W = n(96237),
        V = n(33554),
        Q = n(46244),
        G = n(95182),
        $ = n.n(G),
        Y = n(1454),
        J = n(33669),
        K = n(88327);
      function X(e) {
        var t = e.disabled,
          n = e.onClick,
          r = e.left,
          a = e.children;
        return (0, s.jsx)("button", {
          disabled: t,
          onClick: n,
          "aria-disabled": t,
          className: (0, l.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            t && "lg:hidden"
          ),
          children: a,
        });
      }
      var ee = n(97296),
        et = function (e) {
          var t = e.x,
            n = e.children,
            r = e.className;
          return (0, s.jsx)(ee.E.div, {
            className: (0, l.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: t },
            children: n,
          });
        },
        en = { type: "spring", bounce: 0 },
        er = (0, d.forwardRef)(function (e, t) {
          return (0,
          s.jsx)("div", { ref: t, className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      er.displayName = "CarouselContainer";
      var ea =
        ((r = {}),
        (0, W._)(r, J._G.Mobile, 1),
        (0, W._)(r, J._G.Small, 2),
        (0, W._)(r, J._G.Medium, 2),
        (0, W._)(r, J._G.Large, 3),
        (0, W._)(r, J._G.XLarge, 3),
        r);
      function ei(e) {
        var t = e.children,
          n = e.loop,
          r = void 0 === n || n,
          a = e.className,
          i = (0, V.c)(0),
          o = (0, d.useRef)(null),
          u = (0, w._)((0, d.useState)(0), 2),
          c = u[0],
          f = u[1],
          g = ea[(0, J.dQ)()] || 1,
          h = d.Children.count(t) > g,
          m = d.Children.toArray(t),
          p = (0, d.useCallback)(
            function () {
              var e,
                t =
                  null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return t ? -Math.floor(c / g) * (t + 12) : 0;
            },
            [g, c]
          ),
          v = (0, d.useCallback)(
            function (e) {
              var t = g * e;
              r
                ? f(function (e) {
                    return ((e + t) % m.length) - 1;
                  })
                : f(function (e) {
                    return $()(e + t, 0, m.length - 1);
                  });
            },
            [m.length, r, g]
          ),
          x = (0, d.useCallback)(
            function () {
              v(1);
            },
            [v]
          ),
          b = (0, d.useCallback)(
            function () {
              v(-1);
            },
            [v]
          ),
          y = (0, w._)(
            (0, d.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = c < m.length - g;
                return [c > 0, e];
              },
              [m.length, c, r, g]
            ),
            2
          ),
          j = y[0],
          C = y[1];
        return (
          (0, d.useEffect)(
            function () {
              return (0, Q.j)(i, p(), en).stop;
            },
            [p, c, i]
          ),
          (0, s.jsxs)("div", {
            className: (0, l.Z)(
              "relative h-full w-full",
              a,
              h && "mb-12 lg:mb-0"
            ),
            children: [
              (0, s.jsx)(er, {
                ref: o,
                children: m.map(function (e, t) {
                  return (0, s.jsx)(et, { x: i, children: e }, t);
                }),
              }),
              h &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(X, {
                      onClick: b,
                      left: !0,
                      disabled: !j,
                      children: (0, s.jsx)(K.ZP, { icon: Y.YFh }),
                    }),
                    (0, s.jsx)(X, {
                      onClick: x,
                      disabled: !C,
                      children: (0, s.jsx)(K.ZP, { icon: Y.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var eo = n(28531),
        es = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        el = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eu =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        ed = d.memo(function (e) {
          var t,
            n,
            r = e.urls,
            a = (0, eo.v)(),
            i =
              ((t = (0, R.kP)().session),
              (n = (0, F.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, Z._)(function () {
                      return (0, E.__generator)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, L.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, t.sent()];
                        }
                      });
                    }),
                    enabled: !!(e && (null == t ? void 0 : t.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, d.useMemo)(
                function () {
                  return n
                    .map(function (e, t) {
                      var n = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        o = r[t];
                      if (a || i) return null;
                      var s = n.tags.reduce(function (e, t) {
                        return es.has(t.type) && (e[el[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          u = o.split(/[#?]/)[0],
                          d =
                            null === (l = s.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          c = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (d || c)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (s.url = o), s;
                    })
                    .filter(Boolean);
                },
                [n, r]
              )),
            o = (0, d.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            l = (0, d.useMemo)(
              function () {
                return a.reduce(function (e, t) {
                  return (e[D.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            u = (0, d.useMemo)(
              function () {
                return i.map(function (e) {
                  var t, n;
                  if (!e) return null;
                  try {
                    t = D.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    t in l && (n = l[t]),
                    (0, s.jsx)(
                      q,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: o,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, o, l]
            );
          return 0 === i.length
            ? null
            : (0, s.jsx)(ei, { loop: !1, children: u });
        }),
        ec = n(98076),
        ef = n(5268),
        eg = n(19579),
        eh = n.n(eg),
        em = n(70671),
        ep = n(94968),
        ev = n(63031),
        ex = n(1821);
      function eb() {
        var e = (0, o._)([
          "w-full max-w-lg dark:bg-gray-700 dark:text-gray-400 bg-gray-100 text-gray-500 h-auto rounded-md overflow-hidden flex items-center justify-center",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey(e) {
        var t,
          n = e.asset,
          r = n.asset_pointer,
          a = n.width,
          i = n.height,
          o = (0, em.Z)(),
          u =
            ((t = (0, ev.Iy)(r)),
            (0, ef.a)({
              queryKey: ["getFileDownloadLink", t],
              queryFn: (0, Z._)(function () {
                return (0, E.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        L.ZP.getFileDownloadLink(t).catch(function (e) {
                          throw (
                            (console.error(
                              "Could not fetch file with ID ".concat(
                                t,
                                " from file service"
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
            })),
          c = u.data,
          f = u.isLoading,
          g = null == c ? void 0 : c.download_url,
          h = (0, d.useRef)(null),
          m = (0, w._)((0, d.useState)(!1), 2),
          p = m[0],
          v = m[1];
        (0, d.useEffect)(
          function () {
            var e;
            (null === (e = h.current) || void 0 === e ? void 0 : e.complete) ||
              v(!1);
          },
          [r]
        );
        var x = f || !p;
        return "string" == typeof g
          ? (0, s.jsx)(ej, {
              children: (0, s.jsx)(eh(), {
                alt: o.formatMessage(ew.alt),
                src: g,
                width: a,
                height: i,
                unoptimized: !0,
                ref: h,
                onLoadingComplete: function () {
                  return v(!0);
                },
                className: (0, l.Z)(
                  "max-w-full rounded-md transition-opacity duration-300",
                  p ? "opacity-100" : "opacity-0"
                ),
              }),
            })
          : (0, s.jsx)(ej, {
              style: { aspectRatio: "".concat(a, " / ").concat(i), width: a },
              title: x
                ? o.formatMessage(ew.loading)
                : o.formatMessage(ew.error),
              children: x ? (0, s.jsx)(ex.Z, {}) : (0, s.jsx)(Y.BJv, {}),
            });
      }
      var ej = c.Z.div(eb()),
        ew = (0, ep.vU)({
          loading: {
            id: "imageAsset.loading",
            defaultMessage: "Loading...",
            description: "Text that describes a loading image",
          },
          error: {
            id: "imageAsset.error",
            defaultMessage: "Could not load image",
            description: "Text that describes an image that failed to load",
          },
          alt: {
            id: "imageAsset.alt",
            defaultMessage: "Uploaded image",
            description: "Alt text for image asset",
          },
        });
      function eC() {
        var e = (0, o._)(["flex gap-2 flex-wrap"]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      function e_() {
        var e = (0, o._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      var ek = d.memo(function (e) {
        var t,
          n,
          r,
          o = e.message,
          l = e.isEditing,
          u = e.format,
          c = e.isCompletionInProgress,
          f = e.className,
          g = e.isCompletion,
          h = e.isResponseToPluginMessage,
          m = (0, i._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "isCompletion",
            "isResponseToPluginMessage",
          ]),
          p = (0, d.useMemo)(
            function () {
              return "parts" in o.message.content
                ? o.message.content.parts
                : [(0, x.RR)(o.message)];
            },
            [o]
          );
        return l
          ? (0, s.jsx)(
              I,
              (0, a._)(
                {
                  currentLeaf: o.nodeId,
                  initialText: (0, x.RR)(o.message),
                  role: o.message.author.role,
                  attachments:
                    null === (r = o.message.metadata) || void 0 === r
                      ? void 0
                      : r.attachments,
                },
                m
              )
            )
          : (0, s.jsx)(eM, {
              parts: p,
              errCode: o.errCode,
              err: o.err,
              flag: o.errType,
              isCompletionInProgress: c,
              format: u,
              className: f,
              citations:
                null === (t = o.message.metadata) || void 0 === t
                  ? void 0
                  : t.citations,
              attachments:
                null === (n = o.message.metadata) || void 0 === n
                  ? void 0
                  : n.attachments,
              isCompletion: g,
              id: o.nodeId,
              onRequestMoreCompletions: m.onRequestMoreCompletions,
              clientThreadId: m.clientThreadId,
              showExtractedLinkCards: h,
            });
      });
      function eM(e) {
        var t,
          n,
          r,
          a = e.attachments,
          i = e.citations,
          o = e.className,
          u = e.err,
          c = e.errCode,
          h = e.flag,
          x = e.format,
          b = e.isCompletionInProgress,
          w = e.size,
          C = void 0 === w ? "medium" : w,
          _ = e.parts,
          k = e.isCompletion,
          M = e.id,
          T = e.onRequestMoreCompletions,
          N = e.clientThreadId,
          P = e.showExtractedLinkCards,
          I = !_.some(function (e) {
            return "" !== e;
          }),
          S = u && I,
          Z = c === f.Dd,
          E =
            ((n = (t = {
              text: _.map(function (e) {
                return "string" == typeof e ? e : "";
              }).join(""),
              isCompletionInProgress: b,
            }).text),
            (r = t.isCompletionInProgress),
            (0, d.useMemo)(
              function () {
                if (r) return [];
                var e = n.match(eu);
                return Array.from(new Set(e));
              },
              [r, n]
            )),
          F = (0, d.useMemo)(
            function () {
              switch (c) {
                case f.Dd:
                  return (0, s.jsx)(eS, {
                    $flag: h,
                    children: (0, s.jsx)(eP, {}),
                  });
                case ec.uU:
                  return (0, s.jsx)(eN, {
                    id: M,
                    onRequestMoreCompletions: T,
                    flag: h,
                    clientThreadId: N,
                  });
                case v.wp:
                  return (0, s.jsx)(eS, {
                    $flag: h,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, s.jsx)(eS, { $flag: h, children: u });
              }
            },
            [u, c, h, M, T, N]
          ),
          D = (0, m.hz)().has(g.FZ),
          R = a && a.length > 0 && !k;
        return (0, s.jsxs)("div", {
          className: (0, l.Z)(
            o,
            "flex items-start overflow-x-auto whitespace-pre-wrap break-words",
            "danger" === h ? "flex-row gap-2 text-red-500" : "flex-col gap-4",
            "warning" === h && "text-orange-500",
            D && "text-base"
          ),
          children: [
            _.map(function (e, t) {
              return "string" == typeof e
                ? S || Z || !x
                  ? (0, s.jsx)(
                      "div",
                      {
                        className: "empty:hidden",
                        children: "danger" === h && Z ? null : e,
                      },
                      t
                    )
                  : (0, s.jsx)(
                      j.Z,
                      {
                        clientThreadId: N,
                        messageId: M,
                        size: C,
                        className: (0, l.Z)(
                          "danger" !== h && b && "result-streaming",
                          "danger" === h && "text-red-500",
                          "warning" === h && "text-orange-500"
                        ),
                        children: "" === e ? "&#8203;" : (0, p.Qd)(e, i),
                      },
                      t
                    )
                : (0, s.jsx)(ey, { asset: e }, t);
            }),
            R &&
              (0, s.jsx)(eI, {
                children: a.map(function (e) {
                  return (0, s.jsx)(y.Z, { file: e.name }, e.id);
                }),
              }),
            k && P && E.length > 0 && (0, s.jsx)(ed, { urls: E }),
            h && F,
          ],
        });
      }
      function eT(e) {
        var t = e && new Date(e),
          n = t && new Date(t);
        return n
          ? "after "
              .concat(n.getHours() % 12 || 12, ":")
              .concat(10 > n.getMinutes() ? "0" : "")
              .concat(n.getMinutes(), " ")
              .concat(n.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function eN(e) {
        var t = e.id,
          n = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, u.useRouter)(),
          o = (0, ec.Y8)(function (e) {
            return e.isoDate;
          }),
          l = eT(o),
          c = (0, d.useCallback)(
            function () {
              n(t, { eventSource: "mouse" }, !0, "none", !1);
            },
            [t, n]
          ),
          f = (0, d.useCallback)(
            function () {
              var e = void 0 !== a ? h.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, ec.m0)(e),
                n(t, { eventSource: "mouse" }, !0, "none", !0);
            },
            [t, n, i, a]
          ),
          g = o
            ? (0, s.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, s.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, s.jsx)(eS, {
          $flag: !!o && r,
          children: (0, s.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              g,
              !o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: c,
                  children: "Try again",
                }),
              o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function eP() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var eI = c.Z.div(eC()),
        eS = c.Z.div(
          e_(),
          function (e) {
            return (
              "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
            );
          },
          function (e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10";
          },
          function (e) {
            return !e.$flag && "border-green-500 bg-green-500/10";
          }
        );
    },
    7614: function (e, t, n) {
      n.d(t, {
        I: function () {
          return h;
        },
        Z: function () {
          return d;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(21389);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        var t = e.icon,
          n = e.children;
        return (0, a.jsxs)(c, {
          children: [
            (0, a.jsx)(f, { children: t }),
            (0, a.jsx)(g, { children: n }),
          ],
        });
      }
      var c = i.Z.div(o()),
        f = i.Z.div(s()),
        g = i.Z.div(l()),
        h = i.Z.div(u());
    },
    35101: function (e, t, n) {
      n.d(t, {
        V: function () {
          return l;
        },
        Z: function () {
          return u;
        },
      });
      var r = n(81949),
        a = n(5268),
        i = n(62509),
        o = n(99486),
        s = n(54118),
        l = ["approvedAip"];
      function u(e) {
        var t = e.category,
          n = e.search,
          u = e.offset,
          d = e.limit,
          c = (0, i.kP)().session,
          f = (0, s.Fl)().isPluginsAvailable;
        return (0, a.a)(
          (0, r._)(l).concat([
            { category: t, search: n },
            { limit: d, offset: u },
          ]),
          function () {
            return o.ZP.getApprovedPlugins({
              offset: u,
              limit: d,
              category: t,
              search: n,
              accessToken: null == c ? void 0 : c.accessToken,
            });
          },
          {
            enabled: f && (null == c ? void 0 : c.accessToken) != null,
            keepPreviousData: !0,
            onError: function (e) {
              console.error(e);
            },
          }
        );
      }
    },
    28531: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
      });
      var r = n(21722),
        a = n(20485),
        i = n(39889),
        o = n(13995),
        s = n(5268),
        l = n(70079),
        u = n(99486),
        d = n(32542),
        c = n(35101),
        f = n(14444);
      function g(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r._)(function (e) {
          var t;
          return (0, i.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = e.queryKey), [4, u.ZP.publicGetPluginsById({ ids: t })]
                );
              case 1:
                return [2, n.sent().items];
            }
          });
        })).apply(this, arguments);
      }
      function m() {
        var e, t, n;
        return null !==
          (e = ((t = (0, l.useContext)(d.XA)),
          (n = (0, o.NL)()),
          (0, s.a)({
            queryKey: t,
            queryFn: g,
            select: void 0,
            initialData: function () {
              var e =
                  null === (u = n.getQueryData(f.Z)) || void 0 === u
                    ? void 0
                    : u.items,
                r =
                  null === (d = n.getQueryData(c.V)) || void 0 === d
                    ? void 0
                    : d.items,
                i = [],
                o = !0,
                s = !1,
                l = void 0;
              try {
                for (
                  var u, d, g, h = t[Symbol.iterator]();
                  !(o = (g = h.next()).done);
                  o = !0
                ) {
                  var m = (function () {
                    var t,
                      n = g.value,
                      a =
                        null !==
                          (t =
                            null == e
                              ? void 0
                              : e.find(function (e) {
                                  return e.id === n;
                                })) && void 0 !== t
                          ? t
                          : null == r
                          ? void 0
                          : r.find(function (e) {
                              return e.id === n;
                            });
                    if (null == a) return { v: void 0 };
                    i.push(a);
                  })();
                  if ("object" === (0, a._)(m)) return m.v;
                }
              } catch (e) {
                (s = !0), (l = e);
              } finally {
                try {
                  o || null == h.return || h.return();
                } finally {
                  if (s) throw l;
                }
              }
              return i;
            },
          })).data) && void 0 !== e
          ? e
          : [];
      }
    },
    14444: function (e, t, n) {
      n.d(t, {
        C: function () {
          return u;
        },
        Z: function () {
          return l;
        },
      });
      var r = n(5268),
        a = n(70079),
        i = n(62509),
        o = n(99486),
        s = n(54118),
        l = ["installedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, s.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return o.ZP.getPlugins({
                offset: 0,
                limit: 250,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: t && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          u = n.data,
          d = n.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: u ? u.items : [], isLoading: d };
          },
          [u, d]
        );
      }
    },
    80691: function (e, t, n) {
      var r = n(54118);
      t.Z = function () {
        var e = (0, r.Fl)(),
          t = e.isChatPreferencesAvailable,
          n = e.isChatPreferencesEnabled;
        return t && n;
      };
    },
    98076: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return u;
        },
        Y8: function () {
          return d;
        },
        kc: function () {
          return s;
        },
        m0: function () {
          return l;
        },
        uU: function () {
          return o;
        },
      });
      var r = n(81949),
        a = n(78103),
        i = n(25229),
        o = "model_cap_exceeded",
        s = (0, a.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function l(e) {
        s.setState(function (t) {
          return {
            serverThreadIds: new Set((0, r._)(t.serverThreadIds).concat([e])),
          };
        });
      }
      function u() {
        var e = d(function (e) {
            return e.isoDate;
          }),
          t = d(function (e) {
            return e.clearCapTimeout;
          }),
          n = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= n ? (t(), null) : e ? "gpt-4" : null;
      }
      var d = (0, a.ZP)()(
        (0, i.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (t) {
                e(function () {
                  return { isoDate: t };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
    },
    73610: function (e, t, n) {
      n.d(t, {
        W: function () {
          return g;
        },
      });
      var r = n(21722),
        a = n(39889),
        i = n(5268),
        o = n(94968),
        s = n(70671),
        l = n(62509),
        u = n(99486),
        d = n(78931),
        c = n(88798),
        f = (0, o.vU)({
          errorLoadingFiles: {
            id: "filesModal.errorLoadingFiles",
            defaultMessage: "Failed to load files",
            description: "Error message when loading files fails",
          },
        });
      function g() {
        var e = (0, l.kP)(),
          t = e.session,
          n = e.loading,
          o = (0, d.hz)(),
          g = (0, s.Z)();
        return (0, i.a)(
          ["files"],
          (0, r._)(function () {
            return (0, a.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    u.ZP.listFiles(t.accessToken).catch(function () {
                      return (
                        c.m.danger(g.formatMessage(f.errorLoadingFiles)),
                        { files: [] }
                      );
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          {
            enabled:
              !n &&
              (null == t ? void 0 : t.accessToken) != null &&
              o.has("files_list_ui"),
          }
        );
      }
    },
    65642: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(5268),
        a = n(70079),
        i = n(62509),
        o = n(99486),
        s = n(78931),
        l = n(31541),
        u = n(98076),
        d = { textarea: "", "model-switcher": "" };
      function c() {
        var e = (0, i.kP)().session,
          t = (0, s.WY)(),
          n = (0, u.Y8)(function (e) {
            return e.isoDate;
          }),
          c = (0, l.xz)(n),
          f = (0, r.a)(
            ["modelMessageCap"],
            function () {
              return o.ZP.getModelMessageCap();
            },
            { enabled: (null == e ? void 0 : e.accessToken) != null && t }
          ).data;
        return (0, a.useMemo)(
          function () {
            var e = (null == f ? void 0 : f.message_cap) || 0,
              t = (null == f ? void 0 : f.message_cap_window) || 1,
              n = (function (e) {
                if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                var t = Math.floor(e / 60);
                if (t < 24) return t < 2 ? "hour" : "".concat(t, " hours");
                var n = Math.floor(t / 24);
                if (n < 7) return n < 2 ? "day" : "".concat(n, " days");
              })(t),
              r = (null == f ? void 0 : f.message_disclaimer) || d;
            return n
              ? f && t && e
                ? {
                    textareaDisclaimer: r.textarea
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                    modelSwitcherDisclaimer: r["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                  }
                : {
                    textareaDisclaimer: d.textarea,
                    modelSwitcherDisclaimer: d["model-switcher"],
                  }
              : {
                  textareaDisclaimer: r.textarea,
                  modelSwitcherDisclaimer: r["model-switcher"],
                };
          },
          [f, c]
        );
      }
    },
    16592: function (e, t, n) {
      n.d(t, {
        Ri: function () {
          return T;
        },
        ZP: function () {
          return P;
        },
        dN: function () {
          return a;
        },
        i0: function () {
          return N;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        d,
        c,
        f,
        g = n(96237),
        h = n(39324),
        m = n(81949),
        p = n(35250),
        v = n(41170),
        x = n(70079),
        b = n(54118),
        y = n(78931),
        j = n(88327),
        w = n(98076),
        C = n(65642),
        _ = n(42569);
      ((r = a || (a = {})).BROWSING = "browsing_model"),
        (r.CODE_INTERPRETER = "code_interpreter_model"),
        (r.PLUGINS = "plugins_model");
      var k =
          ((i = {}),
          (0, g._)(i, "gpt_3.5", {
            icon: j.jr,
            activeIcon: j.jr,
            backgroundColor: "#19c37d",
            buttonActiveClass: "text-brand-green",
            buttonHoverClass: "group-hover/button:text-brand-green",
            iconClass:
              "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, g._)(i, "gpt_4", {
            icon: j.Bj,
            activeIcon: j.MP,
            backgroundColor: "#AB68FF",
            buttonActiveClass: "text-brand-purple",
            buttonHoverClass: "group-hover/button:text-brand-purple",
            iconClass:
              "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, g._)(i, "other", {
            icon: v.Z,
            activeIcon: v.Z,
            backgroundColor: "#E06C2B",
            buttonActiveClass: "text-orange-500",
            buttonHoverClass: "group-hover/button:text-orange-500",
            showSelectedValueBelow: !0,
          }),
          i),
        M =
          ((f = {}),
          (0, g._)(f, a.BROWSING, {
            iconByCategory:
              ((o = {}),
              (0, g._)(o, "gpt_3.5", j.O1),
              (0, g._)(o, "gpt_4", j.Fz),
              o),
            activeIconByCategory:
              ((s = {}),
              (0, g._)(s, "gpt_3.5", j.X7),
              (0, g._)(s, "gpt_4", j.Ae),
              s),
            name: (0, p.jsxs)("span", {
              children: [
                "Browse with",
                " ",
                (0, p.jsx)(j.ZP, {
                  icon: j.jE,
                  className: "-mt-[3px] inline-block",
                }),
                " ",
                "Bing",
              ],
            }),
          }),
          (0, g._)(f, a.CODE_INTERPRETER, {
            iconByCategory:
              ((l = {}),
              (0, g._)(l, "gpt_3.5", j.lv),
              (0, g._)(l, "gpt_4", j.Q$),
              l),
            activeIconByCategory:
              ((u = {}),
              (0, g._)(u, "gpt_3.5", j.vy),
              (0, g._)(u, "gpt_4", j.$V),
              u),
            name: "Code Interpreter",
          }),
          (0, g._)(f, a.PLUGINS, {
            iconByCategory:
              ((d = {}),
              (0, g._)(d, "gpt_3.5", j.AQ),
              (0, g._)(d, "gpt_4", j.IT),
              d),
            activeIconByCategory:
              ((c = {}),
              (0, g._)(c, "gpt_3.5", j.Np),
              (0, g._)(c, "gpt_4", j.j3),
              c),
            name: "Plugins",
          }),
          f);
      function T(e) {
        var t = P();
        return (0, x.useMemo)(
          function () {
            return (function (e, t) {
              if (t)
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (r.options.length > 0) {
                    var a,
                      i,
                      o = r.options.find(function (e) {
                        return e.value === t;
                      });
                    if (o)
                      return {
                        item: o,
                        categoryId: r.categoryId,
                        backgroundColor: k[r.categoryId].backgroundColor,
                        icon:
                          null !==
                            (i =
                              null !== (a = o.icon) && void 0 !== a
                                ? a
                                : r.icon) && void 0 !== i
                            ? i
                            : k[r.categoryId].icon,
                      };
                  }
                }
            })(t, e);
          },
          [t, e]
        );
      }
      function N(e, t) {
        return (0, _.OX)().some(function (n) {
          return n[t] === e;
        });
      }
      function P() {
        var e = (0, _.OX)(),
          t = (0, _.B9)(),
          n = (0, w.BT)(),
          r = (0, b.Fl)(),
          i = (0, C.Z)().modelSwitcherDisclaimer,
          o = (0, y.hz)(),
          s = (0, _.B8)(),
          l = s.enabledModelsInCategoriesById,
          u = s.enabledModelsNotInCategoriesById;
        return (0, x.useMemo)(
          function () {
            var s = [],
              d = !0,
              c = !1,
              f = void 0;
            try {
              for (
                var g, h = e[Symbol.iterator]();
                !(d = (g = h.next()).done);
                d = !0
              ) {
                var p = g.value;
                if (l.has(p.default_model)) {
                  var v = k[p.category] || {},
                    x = n === p.default_model,
                    b = t.get(p.default_model),
                    y = x
                      ? []
                      : (function (e, t, n, r, i) {
                          var o = e.isBrowsingEnabled,
                            s = e.isPluginsEnabled,
                            l = e.isCodeInterpreterEnabled,
                            u = [];
                          if (
                            o &&
                            null != n[a.BROWSING] &&
                            r.has(n[a.BROWSING])
                          ) {
                            var d = M[a.BROWSING];
                            u.push(
                              I(i.get(n[a.BROWSING]), {
                                icon: d.iconByCategory[n.category],
                                name: d.name,
                                activeIcon: d.activeIconByCategory[n.category],
                                disabled: t.has("browsing_disabled"),
                              })
                            );
                          }
                          if (
                            l &&
                            null != n[a.CODE_INTERPRETER] &&
                            r.has(n[a.CODE_INTERPRETER])
                          ) {
                            var c = M[a.CODE_INTERPRETER];
                            u.push(
                              I(i.get(n[a.CODE_INTERPRETER]), {
                                icon: c.iconByCategory[n.category],
                                name: c.name,
                                activeIcon: c.activeIconByCategory[n.category],
                                disabled: t.has("code_interpreter_disabled"),
                              })
                            );
                          }
                          if (
                            s &&
                            null != n[a.PLUGINS] &&
                            r.has(n[a.PLUGINS])
                          ) {
                            var f = M[a.PLUGINS];
                            u.push(
                              I(i.get(n[a.PLUGINS]), {
                                icon: f.iconByCategory[n.category],
                                name: f.name,
                                activeIcon: f.activeIconByCategory[n.category],
                                disabled: t.has("plugins_disabled"),
                              })
                            );
                          }
                          return u;
                        })(r, o, p, l, t);
                  s.push({
                    categoryId: p.category,
                    value: b.id,
                    name: p.human_category_name,
                    description: x ? i : b.description,
                    disclaimer: v.disclaimer,
                    buttonActiveClass: v.buttonActiveClass,
                    buttonHoverClass: v.buttonHoverClass,
                    iconClass: v.iconClass,
                    icon: v.icon,
                    activeIcon: v.activeIcon,
                    options: [
                      I(b, {
                        icon: v.icon,
                        activeIcon: v.activeIcon,
                        name: "Default",
                      }),
                    ].concat((0, m._)(y)),
                    disabled: x,
                    showSelectedValueBelow: !1,
                  });
                }
              }
            } catch (e) {
              (c = !0), (f = e);
            } finally {
              try {
                d || null == h.return || h.return();
              } finally {
                if (c) throw f;
              }
            }
            var j = Array.from(u).map(function (e) {
              return t.get(e);
            });
            if (j.length > 0) {
              var w = j[0],
                C = k.other;
              s.push({
                categoryId: "other",
                value: null == w ? void 0 : w.id,
                name: "Alpha",
                buttonActiveClass: C.buttonActiveClass,
                buttonHoverClass: C.buttonHoverClass,
                options: j.map(function (e) {
                  return I(e);
                }),
                showSelectedValueBelow: !0,
                icon: C.icon,
                activeIcon: C.activeIcon,
                alwaysShowOptions: !0,
              });
            }
            return s;
          },
          [u, e, l, n, t, r, o, i]
        );
      }
      function I(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, h._)({ value: e.id, name: e.title, tags: e.tags }, t);
      }
    },
    42569: function (e, t, n) {
      n.d(t, {
        B8: function () {
          return E;
        },
        B9: function () {
          return N;
        },
        Bv: function () {
          return S;
        },
        Gg: function () {
          return P;
        },
        H6: function () {
          return F;
        },
        OX: function () {
          return M;
        },
        S: function () {
          return a;
        },
        Xy: function () {
          return Z;
        },
        ZL: function () {
          return k;
        },
        fm: function () {
          return I;
        },
        iu: function () {
          return T;
        },
        n2: function () {
          return C;
        },
      });
      var r,
        a,
        i = n(21722),
        o = n(39324),
        s = n(71209),
        l = n(81949),
        u = n(39889),
        d = n(5268),
        c = n(60554),
        f = n(70079),
        g = n(62509),
        h = n(99486),
        m = n(31621),
        p = n(54118),
        v = n(78931),
        x = n(32542),
        b = n(98076),
        y = n(16592),
        j = "text-davinci-002-render-sha";
      ((r = a || (a = {})).GPT_3_5 = "gpt3.5"),
        (r.GPT_4 = "gpt4"),
        (r.MOBILE = "mobile");
      var w = F({
          slug: j,
          max_tokens: 4097,
          title: "Default",
          description: "",
          tags: [a.GPT_3_5],
          product_features: {},
        }),
        C = new Set(["text-davinci-002-render-paid"]);
      function _(e) {
        var t = (0, f.useContext)(x.QL).historyDisabled,
          n = (0, g.kP)(),
          r = n.session,
          a = n.loading,
          o = null == r ? void 0 : r.accessToken;
        return (0, d.a)({
          queryKey: ["models", { isHistoryDisabled: !t }],
          queryFn: (0, i._)(function () {
            return (0, u.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, h.ZP.getModels(o, t)];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          enabled: !a && null != o,
          select: e,
        });
      }
      function k() {
        return _().isLoading;
      }
      function M() {
        var e = _(function (e) {
          return e.categories;
        }).data;
        return null != e ? e : [];
      }
      function T() {
        var e = _(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Set(
              e
                ? e.map(function (e) {
                    return e.slug;
                  })
                : [j]
            );
          },
          [e]
        );
      }
      function N() {
        var e = _(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Map(
              e
                ? e.map(function (e) {
                    return [e.slug, F(e)];
                  })
                : [[j, w]]
            );
          },
          [e]
        );
      }
      function P(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = function (e) {
            var t,
              n,
              r = o.get(e);
            return (
              null !==
                (n =
                  null == r
                    ? void 0
                    : null === (t = r.tags) || void 0 === t
                    ? void 0
                    : t.includes(a.GPT_3_5)) &&
              void 0 !== n &&
              n
            );
          },
          r = (0, v.hz)(),
          i = (0, l._)(e),
          o = N();
        if (!t && r.has("priority_driven_models_list")) return i[0];
        var s = (0, l._)(i).find(function (e) {
          return n(e);
        });
        return null != s ? s : i[0];
      }
      function I() {
        var e = (0, c.useRouter)(),
          t = e.query;
        return (0, f.useCallback)(
          function (n) {
            e.replace(
              {
                pathname: e.basePath,
                query: (0, s._)((0, o._)({}, t), {
                  model: encodeURIComponent(n),
                }),
              },
              void 0,
              { shallow: !0 }
            );
          },
          [t, e]
        );
      }
      function S(e, t) {
        var n,
          r = decodeURIComponent(
            null !== (n = (0, c.useRouter)().query.model) && void 0 !== n
              ? n
              : ""
          ),
          a = (0, m.XK)(t),
          i = E().enabledModelsById,
          o = (0, p.Fl)().isBetaFeaturesUiEnabled,
          s = (0, b.kc)().serverThreadIds,
          l = T(),
          u = o ? i : l,
          d = P(u);
        return (0, f.useMemo)(
          function () {
            if (0 !== u.size) {
              var t = void 0 !== a && s.has(a);
              return !t && null != e && l.has(e)
                ? null != e
                  ? e
                  : void 0
                : !t && r && u.has(r)
                ? null != r
                  ? r
                  : void 0
                : null != d
                ? d
                : void 0;
            }
          },
          [l, d, e, r, u, a, s]
        );
      }
      function Z(e, t) {
        var n = S(e, t),
          r = N();
        return (0, f.useMemo)(
          function () {
            var e;
            return null == n
              ? w
              : null !== (e = r.get(n)) && void 0 !== e
              ? e
              : w;
          },
          [n, r]
        );
      }
      function E() {
        var e = M(),
          t = T(),
          n = N(),
          r = (0, p.Fl)();
        return (0, f.useMemo)(
          function () {
            var i,
              o = e.reduce(
                function (e, a) {
                  var i,
                    o,
                    s,
                    l,
                    u,
                    d,
                    c = e.enabledModelsInCategoriesById,
                    f = e.availableModelsInCategoriesById,
                    g = t.has(a.default_model) ? a.default_model : null;
                  null != g && (f.add(g), c.add(g));
                  var h = t.has(
                    null !== (i = a[y.dN.BROWSING]) && void 0 !== i ? i : ""
                  )
                    ? n.get(
                        null !== (o = a[y.dN.BROWSING]) && void 0 !== o ? o : ""
                      )
                    : null;
                  h && (f.add(h.id), r.isBrowsingEnabled && c.add(h.id));
                  var m = t.has(
                    null !== (s = a[y.dN.CODE_INTERPRETER]) && void 0 !== s
                      ? s
                      : ""
                  )
                    ? n.get(
                        null !== (l = a[y.dN.CODE_INTERPRETER]) && void 0 !== l
                          ? l
                          : ""
                      )
                    : null;
                  m && (f.add(m.id), r.isCodeInterpreterEnabled && c.add(m.id));
                  var p = t.has(
                    null !== (u = a[y.dN.PLUGINS]) && void 0 !== u ? u : ""
                  )
                    ? n.get(
                        null !== (d = a[y.dN.PLUGINS]) && void 0 !== d ? d : ""
                      )
                    : null;
                  return (
                    p && (f.add(p.id), r.isPluginsEnabled && c.add(p.id)), e
                  );
                },
                {
                  enabledModelsInCategoriesById: new Set(),
                  availableModelsInCategoriesById: new Set(),
                }
              ),
              s = o.enabledModelsInCategoriesById,
              u = o.availableModelsInCategoriesById,
              d = new Set(
                Array.from(t).filter(function (e) {
                  return !u.has(e);
                })
              ),
              c = new Set(
                Array.from(d).filter(function (e) {
                  var t;
                  return !(null === (t = n.get(e)) || void 0 === t
                    ? void 0
                    // add Alpha models to availableModelsInCategoriesById
                    : false);
                    // : t.tags.includes(a.MOBILE));
                })
              );
            return {
              enabledModelsInCategoriesById: s,
              availableModelsInCategoriesById: u,
              enabledModelsNotInCategoriesById: c,
              enabledModelsById: new Set((0, l._)(s).concat((0, l._)(c))),
            };
          },
          [e, t, r, n]
        );
      }
      function F(e) {
        return {
          id: e.slug,
          maxTokens: e.max_tokens,
          title: e.title,
          description: e.description,
          tags: e.tags,
          enabledTools: e.enabled_tools,
          product_features: e.product_features,
        };
      }
    },
    31621: function (e, t, n) {
      n.d(t, {
        tQ: function () {
          return F;
        },
        iN: function () {
          return E;
        },
        _L: function () {
          return a;
        },
        OX: function () {
          return T;
        },
        Zz: function () {
          return N;
        },
        aS: function () {
          return er;
        },
        ax: function () {
          return D;
        },
        r7: function () {
          return ea;
        },
        hW: function () {
          return ee;
        },
        XK: function () {
          return R;
        },
        je: function () {
          return $;
        },
        Uy: function () {
          return G;
        },
        GD: function () {
          return H;
        },
        JI: function () {
          return z;
        },
        U0: function () {
          return q;
        },
        oq: function () {
          return U;
        },
        Hk: function () {
          return W;
        },
        UL: function () {
          return L;
        },
        Kt: function () {
          return A;
        },
        cj: function () {
          return ei;
        },
        Ro: function () {
          return O;
        },
        GR: function () {
          return B;
        },
        qA: function () {
          return V;
        },
        XL: function () {
          return Q;
        },
        u9: function () {
          return X;
        },
        nh: function () {
          return Y;
        },
        lA: function () {
          return J;
        },
        dz: function () {
          return K;
        },
        Qi: function () {
          return en;
        },
        qN: function () {
          return I;
        },
      });
      var r,
        a,
        i = n(39324),
        o = n(71209),
        s = n(5268),
        l = n(61888),
        u = n(60554),
        d = n(70079),
        c = n(78103),
        f = n(10301),
        g = n(62509),
        h = n(70216);
      n(68993);
      var m = n(77370),
        p = n(16600);
      n(44675).env.INTERNAL_API_URL;
      var v = n(75641),
        x = n(95954),
        b = n(88798),
        y = n(42569),
        j = n(86273),
        w = n(99486),
        C = n(32542),
        _ = n(52787),
        k = "NEW:",
        M = 0;
      function T() {
        return "".concat(k).concat(M++);
      }
      function N(e) {
        return e.startsWith(k);
      }
      ((r = a || (a = {})).NewChat = "NewChat"),
        (r.Server = "Server"),
        (r.User = "User"),
        (r.Generated = "Generated"),
        (r.Unknown = "Unknown");
      var P = {},
        I = (0, c.ZP)(
          (0, f.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        S = I.getState,
        Z = I.setState,
        E = {
          resolveThreadId: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : S();
            return null !== (t = n.clientNewThreadIdToServerIdMapping[e]) &&
              void 0 !== t
              ? t
              : e;
          },
          getThreadCustomTitle: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : S(),
              a = E.resolveThreadId(e, r);
            return null !==
              (n =
                null === (t = r.threads[a]) || void 0 === t
                  ? void 0
                  : t.title) && void 0 !== n
              ? n
              : void 0;
          },
          getThreadDataTitle: function (e) {
            var t,
              n,
              r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : S(),
              i = E.resolveThreadId(e, a);
            return null !==
              (r =
                null === (t = a.threads[i]) || void 0 === t
                  ? void 0
                  : null === (n = t.initialThreadData) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== r
              ? r
              : void 0;
          },
          getThreadTitleSource: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : S(),
              n = E.resolveThreadId(e, t);
            return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown;
          },
          getThreadCreateTime: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : S(),
              a = E.resolveThreadId(e, r);
            return null === (t = r.threads[a]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.createTime;
          },
        },
        F = {
          getOrInitThread: function (e) {
            var t = F.resolveThreadId(e);
            return null != S().threads[t]
              ? S().threads[t]
              : (F.resetThread(e), S().threads[e]);
          },
          getServerThreadId: function (e) {
            return N(e) ? S().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, t) {
            void 0 === S().clientNewThreadIdToServerIdMapping[e] &&
              Z(function (n) {
                (n.threads[t] = n.threads[e]),
                  delete n.threads[e],
                  (n.clientNewThreadIdToServerIdMapping[e] = t);
              });
          },
          initThreadFromServerData: function (e, t) {
            var n,
              r,
              s,
              l,
              u,
              d,
              c,
              f,
              g,
              v,
              x,
              b =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              j =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0,
              w = F.resolveThreadId(e);
            if (null != S().threads[w] || b) {
              var C =
                ((r =
                  null ===
                    (n = Object.values(t.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === n
                    ? void 0
                    : n.id),
                (s = new Set()),
                (l = new Set()),
                (t.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? l.add(e.message_id)
                    : e.flagged && s.add(e.message_id);
                }),
                {
                  rootId: r,
                  mapping: Object.keys(t.mapping).reduce(function (e, n) {
                    var r,
                      a = t.mapping[n],
                      u = a.parent,
                      d = a.children,
                      c = (0, h._)(a, ["parent", "children"]),
                      f = t.mapping[n].message || m.Cv.createRootMessage();
                    return (
                      l.has(f.id) ? (r = p.sK) : s.has(f.id) && (r = p.Mf),
                      (e[n] = (0, i._)(
                        (0, o._)((0, i._)({}, c), {
                          message: f,
                          children: d || [],
                          parentId: u || "",
                          type: m.uV[f.author.role],
                        }),
                        r && { metadata: r }
                      )),
                      e
                    );
                  }, {}),
                  initialCurrentLeafId: t.current_node,
                  authorName: t.author_name,
                });
              if (
                (null === (u = S().threads[w]) || void 0 === u
                  ? void 0
                  : u.isLoading) !== !1
              ) {
                var _ =
                    null !== (d = C.mapping) && void 0 !== d
                      ? d
                      : m.Cv.createTree(),
                  k = {
                    thread: _,
                    initialCurrentLeafId:
                      null !==
                        (f =
                          null !== (c = C.initialCurrentLeafId) && void 0 !== c
                            ? c
                            : C.rootId) && void 0 !== f
                        ? f
                        : "root",
                    threadId: w,
                    title: null !== (g = t.title) && void 0 !== g ? g : null,
                    lastModelUsed: (function e(t, n) {
                      var r,
                        a,
                        i = t[n];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(t, i.parentId)
                        : null;
                    })(C.mapping, C.initialCurrentLeafId),
                    hasUserEditableContextFlag:
                      null !== (v = t.has_user_editable_context) &&
                      void 0 !== v &&
                      v,
                    pluginIds:
                      null !== (x = t.plugin_ids) && void 0 !== x ? x : [],
                    authorName: C.authorName,
                    model:
                      "model" in t && null != t.model
                        ? (0, y.H6)(t.model)
                        : void 0,
                    createTime:
                      "create_time" in t
                        ? new Date(1e3 * t.create_time)
                        : void 0,
                  },
                  M = new m.Cv(_),
                  T = k.initialCurrentLeafId;
                Z(function (e) {
                  var t;
                  e.threads[w] = (0, o._)(
                    (0, i._)(
                      {},
                      null !== (t = e.threads[w]) && void 0 !== t ? t : {}
                    ),
                    {
                      initialThreadData: k,
                      title: k.title,
                      titleSource: a.Server,
                      tree: M,
                      currentLeafId: T,
                      isLoading: !1,
                      continuingFromSharedConversationId: j,
                    }
                  );
                }),
                  F.recomputeConversationTurns(
                    w,
                    S().threads[w].currentLeafId,
                    []
                  );
              }
            }
          },
          resetThread: function (e) {
            var t = {
              thread: m.Cv.createTree(),
              initialCurrentLeafId: "root",
              threadId: null,
              title: null,
              lastModelUsed: null,
              pluginIds: [],
              authorName: void 0,
            };
            F.deleteThread(e),
              Z(function (n) {
                n.threads[e] = {
                  initialThreadData: t,
                  tree: new m.Cv(t.thread),
                  title: t.title,
                  titleSource: a.NewChat,
                  currentLeafId: t.initialCurrentLeafId,
                  conversationTurns: [],
                  isLoading: !N(e),
                };
              });
          },
          updateInitialThreadDataForNewThread: function (e, t, n) {
            Z(function (r) {
              (r.threads[e].initialThreadData.lastModelUsed = t),
                (r.threads[e].initialThreadData.pluginIds = n);
            });
          },
          getThreadCurrentLeafId: function (e) {
            var t,
              n,
              r = F.resolveThreadId(e);
            return null !==
              (n =
                null === (t = S().threads[r]) || void 0 === t
                  ? void 0
                  : t.currentLeafId) && void 0 !== n
              ? n
              : "root";
          },
          setThreadCurrentLeafId: function (e, t) {
            var n,
              r,
              a = F.resolveThreadId(e);
            if (null != S().threads[a]) {
              Z(function (e) {
                e.threads[a].currentLeafId = t;
              });
              var i = S();
              F.recomputeConversationTurns(
                a,
                t,
                null !==
                  (r =
                    null === (n = i.threads[a]) || void 0 === n
                      ? void 0
                      : n.conversationTurns) && void 0 !== r
                  ? r
                  : []
              );
            }
          },
          setTitle: function (e, t, n) {
            var r = F.resolveThreadId(e);
            null != S().threads[r] &&
              Z(function (e) {
                (e.threads[r].title = t), (e.threads[r].titleSource = n);
              });
          },
          getTitle: function (e) {
            var t;
            return null !== (t = E.getThreadCustomTitle(e)) && void 0 !== t
              ? t
              : E.getThreadDataTitle(e);
          },
          getTitleAndSource: function (e) {
            var t;
            return {
              title:
                null !== (t = E.getThreadCustomTitle(e)) && void 0 !== t
                  ? t
                  : E.getThreadDataTitle(e),
              titleSource: E.getThreadTitleSource(e),
            };
          },
          updateTree: function (e, t) {
            var n,
              r,
              a,
              i,
              o = F.resolveThreadId(e);
            if (!(null != S().threads[o])) {
              console.warn("Thread does not exist, cannot update tree: ", o);
              return;
            }
            t(F.getTree(e));
            var s = S(),
              l =
                null !==
                  (a =
                    null === (n = s.threads[o]) || void 0 === n
                      ? void 0
                      : n.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = s.threads[o]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            F.recomputeConversationTurns(o, l, u);
          },
          getTree: function (e) {
            var t,
              n,
              r = F.resolveThreadId(e);
            return null !==
              (n =
                null === (t = S().threads[r]) || void 0 === t
                  ? void 0
                  : t.tree) && void 0 !== n
              ? n
              : new m.Cv();
          },
          resolveThreadId: function (e) {
            return E.resolveThreadId(e);
          },
          recomputeConversationTurns: function (e, t, n) {
            var r = F.resolveThreadId(e);
            Z(function (e) {
              if (e.threads[r]) {
                var a = F.computeThreadConversationTurns(r, t, n);
                e.threads[r].conversationTurns = a;
              }
            });
          },
          computeThreadConversationTurns: function (e, t, n) {
            var r = F.resolveThreadId(e);
            return F.getTree(r)
              .getConversationTurns(t)
              .map(function (e, t) {
                var r = null == n ? void 0 : n[t];
                return (0, l.isEqual)(r, e) ? r : e;
              });
          },
          getThreadConversationTurns: function (e, t, n) {
            var r,
              a,
              i,
              o,
              s = F.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = S().threads[s]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != t && t !== l
              ? F.computeThreadConversationTurns(s, t, null != n ? n : [])
              : null !==
                  (o =
                    null === (a = S().threads[s]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== o
              ? o
              : [];
          },
          getThreadModel: function (e) {
            var t,
              n = F.resolveThreadId(e);
            return null === (t = S().threads[n]) || void 0 === t
              ? void 0
              : t.initialThreadData.model;
          },
          removeContinuingFromSharedConversationId: function (e) {
            var t = F.resolveThreadId(e);
            Z(function (e) {
              var n;
              (null === (n = e.threads[t]) || void 0 === n
                ? void 0
                : n.continuingFromSharedConversationId) != null &&
                delete e.threads[t].continuingFromSharedConversationId;
            });
          },
          deleteThread: function (e) {
            Z(function (t) {
              delete t.threads[e],
                delete t.clientNewThreadIdToServerIdMapping[e];
            });
          },
          retainThread: function (e) {
            Z(function (t) {
              var n;
              t.threadRetainCounts[e] =
                (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                  ? n
                  : 0) + 1;
            }),
              clearTimeout(P[e]);
          },
          releaseThread: function (e) {
            null != S().threads[e] &&
              (Z(function (t) {
                var n;
                t.threadRetainCounts[e] = Math.max(
                  (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                    ? n
                    : 0) - 1,
                  0
                );
              }),
              S().threadRetainCounts[e] > 0 ||
                (clearTimeout(P[e]),
                (P[e] = setTimeout(function () {
                  null == S().threads[e] ||
                    S().threadRetainCounts[e] > 0 ||
                    F.deleteThread(e);
                }, 3e4))));
          },
        },
        D = function (e) {
          var t = (0, u.useRouter)(),
            n = (0, g.kP)().session,
            r = (0, d.useContext)(C.QL).historyDisabled,
            a = (0, d.useContext)(C.gB);
          (0, s.a)(
            ["conversation", e],
            function () {
              return w.ZP.getConversation(
                e,
                null == n ? void 0 : n.accessToken
              );
            },
            {
              enabled:
                !N(e) &&
                (null == n ? void 0 : n.accessToken) !== void 0 &&
                !r &&
                !a,
              onError: function () {
                t.replace("/"),
                  b.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (t) {
                t && F.initThreadFromServerData(e, t);
              },
            }
          ),
            (0, d.useEffect)(
              function () {
                F.getOrInitThread(e);
              },
              [e, t]
            );
        },
        R = function (e) {
          return I(function (t) {
            return N(e) ? t.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        L = function (e) {
          return I(function (t) {
            var n,
              r,
              a = F.resolveThreadId(e);
            return null !==
              (r =
                null === (n = t.threads[a]) || void 0 === n
                  ? void 0
                  : n.initialThreadData) && void 0 !== r
              ? r
              : Object.freeze({
                  thread: m.Cv.createTree(),
                  threadId: null,
                  initialCurrentLeafId: "root",
                  title: null,
                  lastModelUsed: null,
                });
          });
        },
        A = function (e) {
          return I(function (t) {
            var n,
              r,
              a = F.resolveThreadId(e);
            return (
              null !==
                (r =
                  null === (n = t.threads[a]) || void 0 === n
                    ? void 0
                    : n.isLoading) &&
              void 0 !== r &&
              r
            );
          });
        },
        B = function (e) {
          var t = I(function (t) {
            var n,
              r,
              a = F.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, d.useMemo)(
            function () {
              return null != t ? t : [];
            },
            [t]
          );
        },
        U = function (e) {
          return I(function () {
            return F.getThreadCurrentLeafId(e);
          });
        },
        O = function (e) {
          return I(function () {
            return F.getThreadModel(e);
          });
        },
        q = function (e, t) {
          var n = (0, d.useRef)([]);
          return I(function () {
            var r,
              a = F.getThreadConversationTurns(e, t, n.current);
            return (
              (n.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        z = function (e, t) {
          var n = (0, d.useRef)([]);
          return I(function () {
            var r = F.getThreadConversationTurns(e, t, n.current);
            return (n.current = r), r;
          });
        },
        H = function (e, t, n) {
          var r = (0, d.useRef)([]);
          return I(function () {
            var a = F.getThreadConversationTurns(e, n, r.current);
            return (r.current = a), a[t];
          });
        },
        W = function (e) {
          var t = U(e);
          return (0, d.useMemo)(
            function () {
              var n,
                r,
                a = F.getThreadConversationTurns(e, t, []),
                i =
                  null !== (n = null == a ? void 0 : a.length) && void 0 !== n
                    ? n
                    : 0,
                o =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? t : m.Cv.getRequestIdFromConversationTurn(o);
            },
            [t, e]
          );
        },
        V = function (e) {
          return I(function () {
            return F.getTitle(e);
          });
        },
        Q = function (e) {
          return I(function () {
            return F.getTitleAndSource(e);
          });
        },
        G = function (e) {
          return I(function () {
            var t,
              n = F.resolveThreadId(e);
            return null === (t = S().threads[n]) || void 0 === t
              ? void 0
              : t.continuingFromSharedConversationId;
          });
        },
        $ = function (e) {
          return I(function () {
            var t,
              n,
              r = F.resolveThreadId(e);
            return null === (t = S().threads[r]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.authorName;
          });
        },
        Y = function (e, t) {
          return I(function () {
            return F.getTree(e).getNode(t);
          });
        },
        J = function (e, t) {
          return I(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = F.getTree(e)) || void 0 === n
                    ? void 0
                    : n.getHasErrorFromNode(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        K = function (e, t) {
          return I(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = F.getTree(e)) || void 0 === n
                    ? void 0
                    : n.isMessageIncomplete(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        X = function (e, t) {
          return I(function () {
            var n = F.getTree(e);
            return null == n
              ? []
              : n
                  .getBranchFromLeaf(t)
                  .filter(function (e) {
                    return e.type !== x.Jq.Root;
                  })
                  .map(function (e) {
                    return e.message;
                  });
          });
        },
        ee = function (e) {
          var t = er(e),
            n = et(e),
            r = (0, j.Xu)(t),
            a = r.data,
            i = r.isLoading;
          return (
            !(t && "" === n.aboutModelMessage && "" === n.aboutUserMessage) &&
            t &&
            !i &&
            null != a &&
            (n.aboutUserMessage !== a.aboutUserMessage ||
              n.aboutModelMessage !== a.aboutModelMessage)
          );
        },
        et = function (e) {
          var t = F.getTree(e).getUserContext(),
            n = { aboutUserMessage: "", aboutModelMessage: "" };
          if (null == t) return n;
          var r = t.message;
          if (
            (null === (a = r.metadata) || void 0 === a
              ? void 0
              : a.user_context_message_data) != null
          ) {
            var a,
              i,
              o,
              s = r.metadata.user_context_message_data,
              l = s.about_user_message,
              u = s.about_model_message;
            return {
              aboutUserMessage:
                null !== (i = null == l ? void 0 : l.trim()) && void 0 !== i
                  ? i
                  : "",
              aboutModelMessage:
                null !== (o = null == u ? void 0 : u.trim()) && void 0 !== o
                  ? o
                  : "",
            };
          }
          return n;
        },
        en = function (e) {
          var t = F.getTree(e).getUserContext();
          if (null == t) return null;
          var n = t.message;
          if (
            (null === (r = n.metadata) || void 0 === r
              ? void 0
              : r.user_context_message_data) != null
          ) {
            var r,
              a,
              i,
              o = n.metadata.user_context_message_data,
              s = o.about_user_message,
              l = o.about_model_message;
            return {
              aboutUserMessage:
                null !== (a = null == s ? void 0 : s.trim()) && void 0 !== a
                  ? a
                  : "",
              aboutModelMessage:
                null !== (i = null == l ? void 0 : l.trim()) && void 0 !== i
                  ? i
                  : "",
              fallback: null,
            };
          }
          return {
            aboutUserMessage: null,
            aboutModelMessage: null,
            fallback: (0, _.RR)(n),
          };
        },
        er = function (e) {
          var t = I(function (t) {
            var n,
              r,
              a = F.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.hasUserEditableContextFlag;
          });
          return null != en(e) || !!t;
        },
        ea = function (e) {
          return I(function () {
            var t,
              n = F.resolveThreadId(e);
            return (
              (null === (t = S().threads[n]) || void 0 === t
                ? void 0
                : t.continuingFromSharedConversationId) != null
            );
          });
        },
        ei = function (e) {
          var t,
            n,
            r,
            a = L(e),
            i =
              null !==
                (r =
                  null == a
                    ? void 0
                    : null === (t = a.model) || void 0 === t
                    ? void 0
                    : t.id) && void 0 !== r
                ? r
                : null == a
                ? void 0
                : a.lastModelUsed,
            o = (0, y.B9)(),
            s = void 0 != i ? o.get(i) : void 0;
          return (
            (null ===
              (n = null == s ? void 0 : s.product_features.attachments) ||
            void 0 === n
              ? void 0
              : n.type) === v.Cd.Multimodal
          );
        };
    },
    54118: function (e, t, n) {
      n.d(t, {
        DN: function () {
          return M;
        },
        Fl: function () {
          return T;
        },
        N2: function () {
          return k;
        },
        tr: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        o = n(96237),
        s = n(39324),
        l = n(71209),
        u = n(22830),
        d = n(13995),
        c = n(5268),
        f = n(70079),
        g = n(78103),
        h = n(62509),
        m = n(6948),
        p = n(99486),
        v = n(32877),
        x = n(46020),
        b = n(78931),
        y = {
          isBetaFeaturesUiEnabled: !1,
          isBrowsingAvailable: !1,
          isBrowsingEnabled: !1,
          isChatPreferencesAvailable: !1,
          isChatPreferencesEnabled: !1,
          isPluginsAvailable: !1,
          isPluginsEnabled: !1,
          isCodeInterpreterAvailable: !1,
          isCodeInterpreterEnabled: !1,
        };
      ((r = a || (a = {})).BROWSING = "browsing"),
        (r.CODE_INTERPRETER = "code_interpreter"),
        (r.PLUGINS = "plugins"),
        (r.CHAT_PREFERENCES = "chat_preferences");
      var j =
          ((i = {}),
          (0, o._)(i, a.BROWSING, "isBrowsingEnabled"),
          (0, o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
          (0, o._)(i, a.PLUGINS, "isPluginsEnabled"),
          (0, o._)(i, a.CHAT_PREFERENCES, "isChatPreferencesEnabled"),
          i),
        w = (0, g.ZP)()(function () {
          return y;
        }),
        C = {
          updateUserSettings: function (e) {
            w.setState(function (t) {
              return (0, s._)({}, t, e);
            });
          },
          updateUserSettingsFromFeatures: function (e) {
            w.setState(function (t) {
              var n = C.getUserSettingsFromFeatures(e, t);
              return (0, s._)({}, t, n);
            });
          },
          getUserSettingsFromFeatures: function (e, t) {
            return Object.entries(e).reduce(function (e, n) {
              var r = (0, u._)(n, 2),
                a = r[0],
                i = r[1],
                d = j[a],
                c = !1;
              return ((("isBrowsingEnabled" === d && t.isBrowsingAvailable) ||
                ("isCodeInterpreterEnabled" === d &&
                  t.isCodeInterpreterAvailable) ||
                ("isPluginsEnabled" === d && t.isPluginsAvailable) ||
                ("isChatPreferencesEnabled" === d &&
                  t.isChatPreferencesAvailable)) &&
                (c = i),
              d)
                ? (0, l._)((0, s._)({}, e), (0, o._)({}, d, c))
                : e;
            }, {});
          },
        },
        _ = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userSettings", e];
        };
      function k() {
        var e = (0, h.kP)().session,
          t = (0, d.NL)();
        return function () {
          return t.invalidateQueries({
            queryKey: _(null == e ? void 0 : e.accessToken),
          });
        };
      }
      var M = "oai/apps/hasSeenBrowsingDisabledJuly2023";
      function T() {
        var e = (0, h.kP)().session,
          t = (0, b.hz)(),
          n = t.has("beta_features"),
          r = (0, b.ec)(b.F_.isBusinessWorkspace);
        return (
          (0, c.a)(
            _(null == e ? void 0 : e.accessToken),
            function () {
              return p.ZP.getUserSettingBetaFeatures(e.accessToken).then(
                function (e) {
                  null != e && C.updateUserSettingsFromFeatures(e);
                  var t = !!m.m.getItem(M);
                  return (
                    e.browsing && !t && x.vm.openModal(x.B.TempBrowseToast), e
                  );
                }
              );
            },
            { enabled: n && (null == e ? void 0 : e.accessToken) != null }
          ),
          (0, f.useEffect)(
            function () {
              C.updateUserSettings({
                isBetaFeaturesUiEnabled: n,
                isBrowsingAvailable:
                  !r &&
                  (null == e ? void 0 : e.user) != null &&
                  (0, h.yl)(null == e ? void 0 : e.user),
                isCodeInterpreterAvailable:
                  !r &&
                  (t.has("code_interpreter_available") || t.has("tools2")),
                isPluginsAvailable:
                  !r && (t.has("plugins_available") || t.has("tools3")),
                isChatPreferencesAvailable:
                  !r && (t.has(v.uo) || t.has("chat_preferences_available")),
              });
            },
            [t, n, r, null == e ? void 0 : e.user]
          ),
          w(function (e) {
            return e;
          })
        );
      }
    },
    52738: function (e, t, n) {
      n.d(t, {
        Op: function () {
          return h;
        },
        Qd: function () {
          return c;
        },
        T$: function () {
          return f;
        },
        s8: function () {
          return g;
        },
      });
      var r = n(35250),
        a = n(1454),
        i = n(45635),
        o = n(1568),
        s = n(63031),
        l = n(88327),
        u = "&#8203;",
        d = "oaicite:";
      function c(e, t) {
        if (!t) return e;
        for (var n = [], r = 1, a = {}, i = 0; i < t.length; i++) {
          var o = t[i],
            s = o.metadata,
            l = o.invalid_reason;
          if (s) {
            var c = m(s);
            null == a[c] && ((a[c] = r), r++), n.push(a[c]);
          } else null != l && (n.push(r), r++);
        }
        for (var f = t.length - 1; f >= 0; f--) {
          var g = t[f],
            h = g.start_ix,
            p = g.end_ix,
            v = g.metadata,
            x = g.invalid_reason,
            b = { number: n[f] };
          v ? (b.metadata = v) : null != x && (b.invalid_reason = x);
          var y = !1;
          if (f > 0) {
            var j = t[f - 1];
            null != j.metadata &&
              null != v &&
              m(j.metadata) === m(v) &&
              0 === e.slice(j.end_ix, g.start_ix).trim().length &&
              ((e = e.slice(0, j.end_ix) + e.slice(g.end_ix)), (y = !0));
          }
          y ||
            (e =
              e.slice(0, h) +
              ""
                .concat(u, "``")
                .concat(d)
                .concat(JSON.stringify(b), "``")
                .concat(u) +
              e.slice(p));
        }
        return e;
      }
      function f(e) {
        if (!e.startsWith(d)) return null;
        try {
          return JSON.parse(e.slice(d.length));
        } catch (e) {
          return { number: -1 };
        }
      }
      function g(e) {
        var t = e.displayInfo,
          n = (0, s.O6)(),
          a = t.metadata,
          o = (null == a ? void 0 : a.type) === "file";
        return (0, r.jsx)(i.u, {
          label: (0, r.jsx)(h, {
            citationMetadata: a,
            invalidReason: t.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: o
            ? (0, r.jsx)("button", {
                onClick: function () {
                  return n(a.id, a.name);
                },
                className: "px-0.5 text-green-600",
                children: (0, r.jsx)("sup", { children: t.number }),
              })
            : (0, r.jsx)("a", {
                href: null == a ? void 0 : a.url,
                target: "_blank",
                rel: "noreferrer",
                className: "px-0.5 text-green-600 !no-underline",
                children: (0, r.jsx)("sup", { children: t.number }),
              }),
        });
      }
      function h(e) {
        var t = e.citationMetadata,
          n = e.invalidReason,
          i = e.onClick,
          u = (0, s.O6)(),
          d = (null == t ? void 0 : t.type) === "file",
          c = t
            ? (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: d
                      ? (0, r.jsx)(a.NOg, {})
                      : (0, r.jsx)(o.Z, { url: t.url, className: "my-0" }),
                  }),
                  (0, r.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: d ? t.name : t.title,
                  }),
                  (0, r.jsx)("div", {
                    className: "shrink-0",
                    children: (0, r.jsx)(l.ZP, { icon: a.AlO, size: "xsmall" }),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: "text-red-500",
                children: null != n ? n : "Invalid citation",
              });
        return d
          ? (0, r.jsx)("button", {
              onClick: function () {
                u(t.id, t.name), null == i || i();
              },
              className: "text-xs",
              children: c,
            })
          : (0, r.jsx)("a", {
              href: null == t ? void 0 : t.url,
              target: "_blank",
              rel: "noreferrer",
              className: "text-xs !no-underline",
              onClick: i,
              children: c,
            });
      }
      function m(e) {
        return "file" === e.type ? e.id : e.url;
      }
    },
    52787: function (e, t, n) {
      n.d(t, {
        Cs: function () {
          return a;
        },
        Ej: function () {
          return m;
        },
        JD: function () {
          return c;
        },
        RR: function () {
          return h;
        },
        Rc: function () {
          return g;
        },
        fj: function () {
          return p;
        },
        lD: function () {
          return d;
        },
        oH: function () {
          return u;
        },
        qi: function () {
          return l;
        },
        qs: function () {
          return f;
        },
        rH: function () {
          return s;
        },
      });
      var r,
        a,
        i = n(22830),
        o = n(95954);
      function s(e) {
        if (e.author.role === o.uU.Assistant) {
          if ("browser" === e.recipient || "browser_one_box" === e.recipient)
            return a.Browsing;
          if ("myfiles_browser" === e.recipient) return a.RetrievalBrowsing;
          if ("python" === e.recipient) return a.Code;
          if (null != p(e.recipient)) return a.Plugin;
          else if ("browsing_team" === e.recipient) return a.Text;
        } else if (e.author.role === o.uU.Tool) {
          if (
            "browser" === e.author.name ||
            "browser_one_box" === e.author.name ||
            "browsing_team" === e.author.name
          )
            return a.BrowseTool;
          if ("myfiles_browser" === e.author.name)
            return a.RetrievalBrowsingTool;
          if (e.content.content_type === o.PX.ExecutionOutput)
            return a.CodeExecutionOutput;
          if (null != p(e.author.name) || "plugin_service" === e.author.name)
            return a.PluginTool;
        }
        return e.content.content_type === o.PX.Text ||
          e.content.content_type === o.PX.MultimodalText
          ? a.Text
          : a.Unknown;
      }
      function l(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.finish_details) != null
        );
      }
      function u(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "stop"
        );
      }
      function d(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "max_tokens"
        );
      }
      function c(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "interrupted"
        );
      }
      function f(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.message_type) === "continue"
        );
      }
      function g(e) {
        var t;
        return null === (t = e.metadata) || void 0 === t
          ? void 0
          : t.model_slug;
      }
      function h(e) {
        switch (e.content.content_type) {
          case "text":
            return e.content.parts.join("");
          case "multimodal_text":
            return e.content.parts
              .map(function (e) {
                return "string" == typeof e
                  ? e
                  : '[media pointer="'.concat(e.asset_pointer, '"]');
              })
              .join("\n");
          case "tether_browsing_display":
            return e.content.result;
          case "tether_quote":
          case "tether_browsing_code":
          case "code":
          case "execution_output":
          case "system_error":
            return e.content.text;
          case "system_message":
            var t = e.content.text,
              n = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var i,
                  o = Object.values(e.content.tools_section)[Symbol.iterator]();
                !(n = (i = o.next()).done);
                n = !0
              ) {
                var s = i.value;
                t += "\n\n".concat(s);
              }
            } catch (e) {
              (r = !0), (a = e);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (r) throw a;
              }
            }
            return t;
          default:
            return "";
        }
      }
      function m(e) {
        var t;
        return null !== (t = e.recipient) && void 0 !== t ? t : "";
      }
      function p(e) {
        if (null == e || !e.includes(".")) return null;
        var t = (0, i._)(e.split("."), 2);
        return { pluginNamespace: t[0], pluginFunctionName: t[1] };
      }
      ((r = a || (a = {}))[(r.Text = 0)] = "Text"),
        (r[(r.Browsing = 1)] = "Browsing"),
        (r[(r.BrowseTool = 2)] = "BrowseTool"),
        (r[(r.Code = 3)] = "Code"),
        (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (r[(r.MultimodalText = 5)] = "MultimodalText"),
        (r[(r.Plugin = 6)] = "Plugin"),
        (r[(r.PluginTool = 7)] = "PluginTool"),
        (r[(r.RetrievalBrowsing = 8)] = "RetrievalBrowsing"),
        (r[(r.RetrievalBrowsingTool = 9)] = "RetrievalBrowsingTool"),
        (r[(r.Unknown = 10)] = "Unknown");
    },
    88809: function (e, t, n) {
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var r,
        a = "refresh";
      function i() {
        null == r || r.postMessage(a);
      }
      void 0 !== window.BroadcastChannel &&
        ((r = new window.BroadcastChannel("session")).onmessage = function (e) {
          e.data === a &&
            (document.hidden
              ? window.addEventListener("visibilitychange", function () {
                  document.hidden || (window.location.href = "/");
                })
              : setTimeout(function () {
                  window.location.href = "/";
                }, 300));
        });
    },
    77370: function (e, t, n) {
      n.d(t, {
        Cv: function () {
          return T;
        },
        Vh: function () {
          return j;
        },
        uV: function () {
          return C;
        },
      });
      var r,
        a,
        i = n(51217),
        o = n(53596),
        s = n(66816),
        l = n(49406),
        u = n(31819),
        d = n(96237),
        c = n(39324),
        f = n(70216),
        g = n(81949),
        h = n(74050),
        m = n(84251),
        p = n.n(m),
        v = n(8844),
        x = n(16600),
        b = n(95954),
        y = n(52787),
        j = "request-",
        w =
          ((r = {}),
          (0, d._)(r, b.Jq.Root, b.uU.Unknown),
          (0, d._)(r, b.Jq.Prompt, b.uU.User),
          (0, d._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, d._)(r, b.Jq.System, b.uU.System),
          r),
        C =
          ((a = {}),
          (0, d._)(a, b.uU.Unknown, b.Jq.Root),
          (0, d._)(a, b.uU.System, b.Jq.System),
          (0, d._)(a, b.uU.User, b.Jq.Prompt),
          (0, d._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, d._)(a, b.uU.Critic, b.Jq.Completion),
          (0, d._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function _(e) {
        var t = (0, v.Z)();
        return "".concat(e).concat(t.substring(e.length));
      }
      var k = new WeakMap(),
        M = new WeakMap(),
        T = (function () {
          function e(t) {
            (0, i._)(this, e),
              (0, s._)(this, k, { writable: !0, value: void 0 }),
              (0, s._)(this, M, { writable: !0, value: void 0 }),
              (0, l._)(this, k, null != t ? t : e.createTree());
            var n,
              r = Object.values((0, o._)(this, k)).find(function (e) {
                return e.type === b.Jq.Root;
              });
            (0, l._)(
              this,
              M,
              null !== (n = null == r ? void 0 : r.id) && void 0 !== n
                ? n
                : "root"
            );
          }
          var t = e.prototype;
          return (
            (t.getNode = function (e) {
              return (0, o._)(this, k)[e];
            }),
            (t.getMessage = function (e) {
              return (0, o._)(this, k)[e].message;
            }),
            (t.getMessageId = function (e) {
              try {
                return (0, o._)(this, k)[e].message.id;
              } catch (t) {
                throw (
                  (console.error(
                    "Tree: Unable to getMessageId for node ".concat(e)
                  ),
                  t)
                );
              }
            }),
            (t.getMetadata = function (e) {
              return (0, o._)(this, k)[e].metadata;
            }),
            (t.getLeafFromNode = function (e) {
              for (var t = (0, o._)(this, k)[e]; ; ) {
                if (0 === t.children.length) return t;
                t = (0, o._)(this, k)[t.children.values().next().value];
              }
            }),
            (t.getParent = function (e) {
              var t = (0, o._)(this, k)[e].parentId;
              return (0, o._)(this, k)[t];
            }),
            (t.getParentId = function (e) {
              var t;
              return (
                (null === (t = this.getParent(e)) || void 0 === t
                  ? void 0
                  : t.id) || "root"
              );
            }),
            (t.getNodeByMessageId = function (e) {
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, k))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var s = a.value;
                  if (s.message.id === e) return s;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
            }),
            (t.getBranchFromLeaf = function (e) {
              for (
                var t,
                  n = [],
                  r =
                    null !== (t = (0, o._)(this, k)[e]) && void 0 !== t
                      ? t
                      : this.getNodeByMessageId(e);
                null != r;

              ) {
                if (n.includes(r)) {
                  console.error("Infinite loop detected in getBranchFromLeaf.");
                  break;
                }
                if ((n.push(r), "root" === r.type)) break;
                r = (0, o._)(this, k)[r.parentId];
              }
              return n.reverse();
            }),
            (t.getChildrenFromNode = function (e) {
              var t = this,
                n = (0, o._)(this, k)[e];
              return null == n
                ? []
                : Array.from(n.children).map(function (e) {
                    return (0, o._)(t, k)[e];
                  });
            }),
            (t.getFirstPrompt = function () {
              for (var e, t, n = this.getNode((0, o._)(this, M)); ; ) {
                if (null == n) return;
                if (
                  n.type === b.Jq.Prompt ||
                  (n.type === b.Jq.System &&
                    (null === (e = n.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return n;
                n = (0, o._)(this, k)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.getUserContext = function () {
              for (var e, t, n = this.getNode((0, o._)(this, M)); ; ) {
                if (null == n) return;
                if (
                  (n.type === b.Jq.System ||
                    n.message.author.role === b.uU.System) &&
                  (null === (e = n.message.metadata) || void 0 === e
                    ? void 0
                    : e.is_user_system_message)
                )
                  return n;
                if (n.type === b.Jq.Prompt) return null;
                n = (0, o._)(this, k)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.isMessageIncomplete = function (e) {
              var t = this.getMessage(e);
              return (0, y.lD)(t);
            }),
            (t.addNodeToEnd = function (e, t) {
              if (null == (0, o._)(this, k)[e]) return (0, d._)({}, t.id, t);
              (0, l._)(
                this,
                k,
                p()(
                  (0, o._)(this, k),
                  (0, d._)({ $merge: (0, d._)({}, t.id, t) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, g._)(e).concat([t.id])));
                      },
                    },
                  })
                )
              );
            }),
            (t.appendSystemMessageToRoot = function (e) {
              var t,
                n,
                r =
                  null === (t = this.getFirstPrompt()) || void 0 === t
                    ? void 0
                    : t.parentId;
              if (null != r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  k,
                  p()(
                    (0, o._)(this, k),
                    ((n = { $merge: (0, d._)({}, s.id, s) }),
                    (0, d._)(n, a.id, { children: { $set: [s.id] } }),
                    (0, d._)(n, i.id, { parentId: { $set: s.id } }),
                    n)
                  )
                );
              }
            }),
            (t.addNode = function (t, n, r, a, i, o) {
              var s =
                  "string" == typeof n
                    ? e.getTextAsMessage(n, a, o)
                    : "content_type" in n
                    ? e.getContentAsMessage(n, a, o)
                    : n,
                l = (0, c._)(
                  { id: t, children: [], parentId: r, type: a, message: s },
                  i ? { nodeMetadata: i } : {}
                );
              this.addNodeToEnd(r, l);
            }),
            (t.updateNode = function (e, t) {
              (0, l._)(this, k, p()((0, o._)(this, k), (0, d._)({}, e, t)));
            }),
            (t.updateNodeMessage = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, o._)(this, k),
                  (0, d._)({}, e, { message: { $set: t } })
                )
              );
            }),
            (t.updateNodeMessageMetadata = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, o._)(this, k),
                  (0, d._)({}, e, { message: { metadata: { $merge: t } } })
                )
              );
            }),
            (t.updateNodeText = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, o._)(this, k),
                  (0, d._)({}, e, {
                    message: { content: { parts: { $set: [t] } } },
                  })
                )
              );
            }),
            (t.deleteNode = function (e) {
              var t = (0, o._)(this, k),
                n = t[e],
                r = (0, f._)(t, [e].map(h._)),
                a = n.parentId;
              (0, l._)(
                this,
                k,
                p()(
                  r,
                  (0, d._)({}, a, {
                    children: {
                      $apply: function (t) {
                        return t.filter(function (t) {
                          return t !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (t.getTextFromNode = function (e) {
              return (0, y.RR)(this.getMessage(e));
            }),
            (t.getHasErrorFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger" ||
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "warning"
              );
            }),
            (t.getIsBlockedFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errCode) === x.Dd &&
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "danger"
              );
            }),
            (t.getTextFromThread = function (e) {
              return this.getBranchFromLeaf(e)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (e) {
                  return (0, y.RR)(e.message);
                })
                .join("\n\n");
            }),
            (t.shouldFilterNode = function (e) {
              var t = e.message,
                n = t.content.content_type,
                r = e.message.author.role === b.uU.System,
                a = e.message.author.role === b.uU.Tool,
                i = void 0 !== t.recipient && "all" !== t.recipient;
              return (
                r ||
                i ||
                (a &&
                  !(
                    "code" === n ||
                    "execution_output" === n ||
                    "system_error" === n ||
                    "tether_browsing_display" === n ||
                    "tether_quote" === n
                  ))
              );
            }),
            (t.getTextFromTurnsById = function (e) {
              var t = this;
              return e
                .map(function (e) {
                  return t.getNode(e);
                })
                .filter(function (e) {
                  return !t.shouldFilterNode(e);
                })
                .map(function (e) {
                  return t.getTextFromNode(e.id);
                })
                .join("\n\n");
            }),
            (t.getTextFromLastNTurns = function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return this.getConversationTurns(e, this.shouldFilterNode)
                .slice(-t)
                .map(function (e) {
                  var t = e.messages
                    .map(function (e) {
                      return (0, y.RR)(e.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return n ? "[".concat(e.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (t.getConversationTurns = function (e, t) {
              var n = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    s = e.message,
                    l = e.metadata;
                  if (null == t || !t(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === s.author.role ||
                    s.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, c._)({ nodeId: a, parentId: i, message: s }, l)
                        )
                      : r.push({
                          role: s.author.role,
                          messages: [
                            (0, c._)({ nodeId: a, parentId: i, message: s }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, o._)(n, k)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (t.getLastValidNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.metadata) || void 0 === t ? void 0 : t.err) !=
                  null;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.getParentPromptNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.message) || void 0 === t
                  ? void 0
                  : t.author.role) !== b.uU.User;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.messageIdToNodeId = function (e) {
              if (null != (0, o._)(this, k)[e]) return e;
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, k))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var s,
                    l = a.value;
                  if (
                    (null === (s = l.message) || void 0 === s
                      ? void 0
                      : s.id) === e
                  )
                    return l.id;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
              return e;
            }),
            (t.unstable_getMapping = function () {
              return (0, o._)(this, k);
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: _("aaa1"),
                author: { role: w[b.Jq.Root] },
                content: { content_type: b.PX.Text, parts: [] },
              };
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              for (var t = e.messages.length - 1; t >= 0; t--) {
                var n = e.messages[t];
                if (n.nodeId.startsWith(j)) return n.nodeId;
              }
              return e.messages[0].nodeId;
            }),
            (e.getTextAsMessage = function (e, t, n) {
              var r = { content_type: b.PX.Text, parts: [e] };
              return this.getContentAsMessage(r, t, n);
            }),
            (e.getContentAsMessage = function (e, t, n) {
              return {
                id: _("aaa2"),
                author: { role: w[t] },
                content: e,
                metadata: n,
              };
            }),
            (0, u._)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var t = (0, o._)(this, k)[e.children[0]];
                    if ((null == t ? void 0 : t.children.length) === 0)
                      return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    19012: function (e, t, n) {
      var r = n(70079);
      t.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    21817: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(70079);
      function a() {
        var e = (0, r.useRef)([]),
          t = (0, r.useRef)(function (t, n) {
            var r = setTimeout(t, n);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var t = e.current;
            return function () {
              t.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          t.current
        );
      }
    },
    16600: function (e, t, n) {
      n.d(t, {
        Dd: function () {
          return r;
        },
        Mf: function () {
          return a;
        },
        sK: function () {
          return i;
        },
      }),
        n(95182),
        n(99486);
      var r = "content_policy",
        a = { errType: "warning", errCode: r },
        i = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: r,
        };
    },
  },
]);
