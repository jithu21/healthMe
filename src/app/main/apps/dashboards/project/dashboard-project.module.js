(function ()
{
    'use strict';

    angular
        .module('app.dashboards.project', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_project', {
            url      : '/dashboard-project',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/project/dashboard-project.html',
                    controller : 'DashboardProjectController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return {
                      "projects": [
                        {
                          "name": "ACME Corp. Backend App"
                        },
                        {
                          "name": "ACME Corp. Frontend App"
                        },
                        {
                          "name": "Creapond"
                        },
                        {
                          "name": "Withinpixels"
                        }
                      ],
                      "widget1": {
                        "ranges": {
                          "DY": "2 Months ago",
                          "DT": "Current Month",
                          "DTM": "1 Month ago"
                        },
                        "currentRange": "DT",
                        "data": {
                          "label": "CHECKUPS",
                          "count": {
                            "DY": 21,
                            "DT": 25,
                            "DTM": 19
                          },
                          "extra": {
                            "label": "Completed",
                            "count": {
                              "DY": 6,
                              "DT": 7,
                              "DTM": "-"
                            }
                          }
                        },
                        "detail": "Next check up in on next monday"
                      },
                      "widget2": {
                        "title": "POLIO DROPS",
                        "data": {
                          "label": "VISITS",
                          "count": 4,
                          "extra": {
                            "label": "Remaining Visits",
                            "count": 2
                          }
                        },
                        "detail": "Next polio visit is on next sunday"
                      },
                      "widget3": {
                        "title": "SLEEP TIME",
                        "data": {
                          "label": "SLEEP ANALYSIS",
                          "count": 32,
                          "extra": {
                            "label": "Average Time",
                            "count": "7hr"
                          }
                        },
                        "detail": "You can show some detailed information about this widget in here."
                      },
                      "widget4": {
                        "title": "MEDICINES",
                        "data": {
                          "label": "PRESCIBED",
                          "count": 7,
                          "extra": {
                            "label": "Per day medicine",
                            "count": 5
                          }
                        },
                        "detail": "You can show some detailed information about this widget in here."
                      },
                      "widget5": {
                        "title": "Github Issues",
                        "ranges": {
                          "TW": "This Week",
                          "LW": "Last Week",
                          "2W": "2 Weeks Ago"
                        },
                        "mainChart": [
                          {
                            "key": "Closed Issues",
                            "values": {
                              "2W": [
                                {"x": "Mon", "y": 9},
                                {"x": "Tue", "y": 12},
                                {"x": "Wed", "y": 9},
                                {"x": "Thu", "y": 12},
                                {"x": "Fri", "y": 7},
                                {"x": "Sat", "y": 8},
                                {"x": "Sun", "y": 16}
                              ],
                              "LW": [
                                {"x": "Mon", "y": 12},
                                {"x": "Tue", "y": 8},
                                {"x": "Wed", "y": 7},
                                {"x": "Thu", "y": 13},
                                {"x": "Fri", "y": 7},
                                {"x": "Sat", "y": 6},
                                {"x": "Sun", "y": 10}
                              ],
                              "TW": [
                                {"x": "Mon", "y": 11},
                                {"x": "Tue", "y": 10},
                                {"x": "Wed", "y": 8},
                                {"x": "Thu", "y": 11},
                                {"x": "Fri", "y": 8},
                                {"x": "Sat", "y": 10},
                                {"x": "Sun", "y": 17}
                              ]
                            }
                          },
                          {
                            "key": "Issues",
                            "values": {
                              "2W": [
                                {"x": "Mon", "y": 37},
                                {"x": "Tue", "y": 32},
                                {"x": "Wed", "y": 39},
                                {"x": "Thu", "y": 27},
                                {"x": "Fri", "y": 18},
                                {"x": "Sat", "y": 24},
                                {"x": "Sun", "y": 20}
                              ],
                              "LW": [
                                {"x": "Mon", "y": 37},
                                {"x": "Tue", "y": 24},
                                {"x": "Wed", "y": 51},
                                {"x": "Thu", "y": 31},
                                {"x": "Fri", "y": 29},
                                {"x": "Sat", "y": 17},
                                {"x": "Sun", "y": 31}
                              ],
                              "TW": [
                                {"x": "Mon", "y": 42},
                                {"x": "Tue", "y": 28},
                                {"x": "Wed", "y": 43},
                                {"x": "Thu", "y": 34},
                                {"x": "Fri", "y": 20},
                                {"x": "Sat", "y": 25},
                                {"x": "Sun", "y": 22}
                              ]
                            }
                          }
                        ],
                        "supporting": {
                          "created": {
                            "label": "CREATED",
                            "count": {
                              "2W": 48,
                              "LW": 46,
                              "TW": 54
                            },
                            "chart": {
                              "key": "Created",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 8},
                                  {"x": 2, "y": 5},
                                  {"x": 3, "y": 6},
                                  {"x": 4, "y": 7},
                                  {"x": 5, "y": 8},
                                  {"x": 6, "y": 7}
                                ],
                                "LW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 3},
                                  {"x": 2, "y": 7},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "TW": [
                                  {"x": 0, "y": 3},
                                  {"x": 1, "y": 2},
                                  {"x": 2, "y": 1},
                                  {"x": 3, "y": 4},
                                  {"x": 4, "y": 8},
                                  {"x": 5, "y": 8},
                                  {"x": 6, "y": 4}
                                ]
                              }
                            }
                          },
                          "closed": {
                            "label": "CLOSED",
                            "count": {
                              "2W": 27,
                              "LW": 31,
                              "TW": 26
                            },
                            "chart": {
                              "key": "Closed",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 3},
                                  {"x": 1, "y": 2},
                                  {"x": 2, "y": 1},
                                  {"x": 3, "y": 4},
                                  {"x": 4, "y": 8},
                                  {"x": 5, "y": 8},
                                  {"x": 6, "y": 4}
                                ],
                                "LW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 5},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 7},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "TW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 3},
                                  {"x": 2, "y": 7},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ]
                              }
                            }
                          },
                          "reOpened": {
                            "label": "RE-OPENED",
                            "count": {
                              "2W": 4,
                              "LW": 5,
                              "TW": 2
                            },
                            "chart": {
                              "key": "Re-Opened",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 3},
                                  {"x": 2, "y": 7},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "LW": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 7},
                                  {"x": 2, "y": 8},
                                  {"x": 3, "y": 8},
                                  {"x": 4, "y": 6},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 1}
                                ],
                                "TW": [
                                  {"x": 0, "y": 3},
                                  {"x": 1, "y": 2},
                                  {"x": 2, "y": 1},
                                  {"x": 3, "y": 4},
                                  {"x": 4, "y": 8},
                                  {"x": 5, "y": 8},
                                  {"x": 6, "y": 4}
                                ]
                              }
                            }
                          },
                          "wontFix": {
                            "label": "WON'T FIX",
                            "count": {
                              "2W": 6,
                              "LW": 3,
                              "TW": 4
                            },
                            "chart": {
                              "key": "Won't Fix",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 7},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 6},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 3},
                                  {"x": 6, "y": 2}
                                ],
                                "LW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 3},
                                  {"x": 2, "y": 7},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "TW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 5},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 7},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ]
                              }
                            }
                          },
                          "needsTest": {
                            "label": "NEEDS TEST",
                            "count": {
                              "2W": 10,
                              "LW": 7,
                              "TW": 8
                            },
                            "chart": {
                              "key": "Needs Test",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 5},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 7},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "LW": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 7},
                                  {"x": 2, "y": 8},
                                  {"x": 3, "y": 8},
                                  {"x": 4, "y": 6},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 1}
                                ],
                                "TW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 3},
                                  {"x": 2, "y": 7},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ]
                              }
                            }
                          },
                          "fixed": {
                            "label": "FIXED",
                            "count": {
                              "2W": 21,
                              "LW": 17,
                              "TW": 14
                            },
                            "chart": {
                              "key": "Fixed",
                              "values": {
                                "2W": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 7},
                                  {"x": 2, "y": 8},
                                  {"x": 3, "y": 8},
                                  {"x": 4, "y": 6},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 1}
                                ],
                                "LW": [
                                  {"x": 0, "y": 6},
                                  {"x": 1, "y": 5},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 5},
                                  {"x": 4, "y": 7},
                                  {"x": 5, "y": 4},
                                  {"x": 6, "y": 7}
                                ],
                                "TW": [
                                  {"x": 0, "y": 5},
                                  {"x": 1, "y": 7},
                                  {"x": 2, "y": 4},
                                  {"x": 3, "y": 6},
                                  {"x": 4, "y": 5},
                                  {"x": 5, "y": 3},
                                  {"x": 6, "y": 2}
                                ]
                              }
                            }
                          }
                        }
                      },
                      "widget6": {
                        "title": "Task Distribution",
                        "ranges": {
                          "TW": "This Week",
                          "LW": "Last Week",
                          "2W": "2 Weeks Ago"
                        },
                        "mainChart": [
                          {
                            "label": "Frontend",
                            "values": {
                              "2W": 18,
                              "LW": 19,
                              "TW": 15
                            }
                          },
                          {
                            "label": "Backend",
                            "values": {
                              "2W": 17,
                              "LW": 16,
                              "TW": 20
                            }
                          },
                          {
                            "label": "API",
                            "values": {
                              "2W": 40,
                              "LW": 42,
                              "TW": 38
                            }
                          },
                          {
                            "label": "Issues",
                            "values": {
                              "2W": 25,
                              "LW": 23,
                              "TW": 27
                            }
                          }
                        ],
                        "footerLeft": {
                          "title": "Tasks Added",
                          "count": {
                            "2W": 487,
                            "LW": 526,
                            "TW": 594
                          }
                        },
                        "footerRight": {
                          "title": "Tasks Completed",
                          "count": {
                            "2W": 193,
                            "LW": 260,
                            "TW": 287
                          }
                        }
                      },
                      "widget71": {
                        "title": "Schedule",
                        "ranges": {
                          "T": "Today",
                          "TM": "Tomorrow"
                        },
                        "schedule": {
                          "T": [
                            {
                              "title": "Group Meeting",
                              "time": "In 32 minutes",
                              "location": "Room 1B"
                            },
                            {
                              "title": "Coffee Break",
                              "time": "10:30 AM"
                            },
                            {
                              "title": "Public Beta Release",
                              "time": "11:00 AM"
                            },
                            {
                              "title": "Lunch",
                              "time": "12:10 PM"
                            },
                            {
                              "title": "Dinner with David",
                              "time": "17:30 PM"
                            },
                            {
                              "title": "Jane's Birthday Party",
                              "time": "19:30 PM"
                            },
                            {
                              "title": "Overseer's Retirement Party",
                              "time": "21:30 PM"
                            }
                          ],
                          "TM": [
                            {
                              "title": "Marketing Meeting",
                              "time": "09:00 AM"
                            },
                            {
                              "title": "Public Announcement",
                              "time": "11:00 AM"
                            },
                            {
                              "title": "Lunch",
                              "time": "12:10 PM"
                            },
                            {
                              "title": "Meeting with Beta Testers",
                              "time": "15:00 AM"
                            },
                            {
                              "title": "Live Stream",
                              "time": "17:30 PM"
                            },
                            {
                              "title": "Release Party",
                              "time": "19:30 PM"
                            },
                            {
                              "title": "CEO's Party",
                              "time": "22:30 PM"
                            }
                          ]
                        }
                      },
                      "widget81": {
                        "title": "Budget Distribution",
                        "mainChart": [
                          {
                            "label": "Wireframing",
                            "value": 12
                          },
                          {
                            "label": "Design",
                            "value": 17
                          },
                          {
                            "label": "Coding",
                            "value": 28
                          },
                          {
                            "label": "Marketing",
                            "value": 25
                          },
                          {
                            "label": "Extra",
                            "value": 15
                          }
                        ]
                      },
                      "widget9": {
                        "title": "Spent",
                        "ranges": {
                          "TW": "This Week",
                          "LW": "Last Week",
                          "2W": "2 Weeks Ago"
                        },
                        "weeklySpent": {
                          "title": "WEEKLY SPENT",
                          "count": {
                            "2W": "2,682.85",
                            "LW": "1,445.34",
                            "TW": "3,630.15"
                          },
                          "chart": {
                            "label": "Weekly Spent",
                            "values": {
                              "2W": [
                                {"x": 0, "y": 6},
                                {"x": 1, "y": 1},
                                {"x": 2, "y": 3},
                                {"x": 3, "y": 4},
                                {"x": 4, "y": 5},
                                {"x": 5, "y": 5},
                                {"x": 6, "y": 2}
                              ],
                              "LW": [
                                {"x": 0, "y": 4},
                                {"x": 1, "y": 6},
                                {"x": 2, "y": 2},
                                {"x": 3, "y": 2},
                                {"x": 4, "y": 1},
                                {"x": 5, "y": 3},
                                {"x": 6, "y": 4}
                              ],
                              "TW": [
                                {"x": 0, "y": 2},
                                {"x": 1, "y": 6},
                                {"x": 2, "y": 5},
                                {"x": 3, "y": 4},
                                {"x": 4, "y": 5},
                                {"x": 5, "y": 3},
                                {"x": 6, "y": 6}
                              ]
                            }
                          }
                        },
                        "totalSpent": {
                          "title": "TOTAL SPENT",
                          "count": {
                            "2W": "29,682.85",
                            "LW": "31,128.19",
                            "TW": "34,758.34"
                          },
                          "chart": {
                            "label": "Spent",
                            "values": {
                              "2W": [
                                {"x": 0, "y": 3},
                                {"x": 1, "y": 2},
                                {"x": 2, "y": 2},
                                {"x": 3, "y": 4},
                                {"x": 4, "y": 7},
                                {"x": 5, "y": 7},
                                {"x": 6, "y": 4}
                              ],
                              "LW": [
                                {"x": 0, "y": 5},
                                {"x": 1, "y": 7},
                                {"x": 2, "y": 8},
                                {"x": 3, "y": 8},
                                {"x": 4, "y": 6},
                                {"x": 5, "y": 4},
                                {"x": 6, "y": 1}
                              ],
                              "TW": [
                                {"x": 0, "y": 6},
                                {"x": 1, "y": 3},
                                {"x": 2, "y": 7},
                                {"x": 3, "y": 5},
                                {"x": 4, "y": 5},
                                {"x": 5, "y": 4},
                                {"x": 6, "y": 7}
                              ]
                            }
                          }
                        },
                        "remaining": {
                          "title": "REMAINING",
                          "count": {
                            "2W": "94.317,15",
                            "LW": "92.871,81",
                            "TW": "89.241,66"
                          },
                          "chart": {
                            "label": "Remaining",
                            "values": {
                              "2W": [
                                {"x": 0, "y": 1},
                                {"x": 1, "y": 4},
                                {"x": 2, "y": 5},
                                {"x": 3, "y": 7},
                                {"x": 4, "y": 8},
                                {"x": 5, "y": 2},
                                {"x": 6, "y": 4}
                              ],
                              "LW": [
                                {"x": 0, "y": 3},
                                {"x": 1, "y": 2},
                                {"x": 2, "y": 1},
                                {"x": 3, "y": 4},
                                {"x": 4, "y": 8},
                                {"x": 5, "y": 8},
                                {"x": 6, "y": 4}
                              ],
                              "TW": [
                                {"x": 0, "y": 2},
                                {"x": 1, "y": 4},
                                {"x": 2, "y": 8},
                                {"x": 3, "y": 6},
                                {"x": 4, "y": 2},
                                {"x": 5, "y": 5},
                                {"x": 6, "y": 1}
                              ]
                            }
                          }
                        },
                        "totalRemaining": {
                          "title": "TOTAL BUDGET",
                          "count": "124.000,00"
                        },
                        "totalBudget": {
                          "title": "TOTAL BUDGET",
                          "count": "124.000,00"
                        }
                      },
                      "widget10": {
                        "title": "Next Vaccinations",
                        "table": {
                          "columns": [
                            {
                              "title": "Vaccination Name"
                            },
                            {
                              "title": "Recommend Age"
                            },
                            {
                              "title": "Next Available Date"
                            },
                            {
                              "title": "Use of Vaccine"
                            }
                          ],
                          "rows": [
                            [
                              {
                                "value": "DTwP3/DTaP3",
                                "classes": "text-boxed m-0 deep-orange-bg white-fg",
                                "icon": ""
                              },
                              {
                                "value": "14 weeks",
                                "classes": "text-bold",
                                "icon": ""
                              },
                              {
                                "value": "21st April",
                                "classes": "",
                                "icon": ""
                              },
                              {
                                "value": "Increase Hemoglobin",
                                "classes": "red-fg",
                                "icon": "icon icon-trending-up s14 red-fg"
                              }
                            ],
                            [
                              {
                                "value": "HEP-B3",
                                "classes": "text-boxed m-0 purple-bg white-fg",
                                "icon": ""
                              },
                              {
                                "value": "6 months",
                                "classes": "text-bold",
                                "icon": ""
                              },
                              {
                                "value": "21st May",
                                "classes": "",
                                "icon": ""
                              },
                              {
                                "value": "Increases the Immunity",
                                "classes": "red-fg",
                                "icon": "icon icon-trending-up s14 red-fg"
                              }
                            ],
                            [
                              {
                                "value": "MEASLES",
                                "classes": "text-boxed m-0 light-blue-bg white-fg",
                                "icon": ""
                              },
                              {
                                "value": "9 months",
                                "classes": "text-bold",
                                "icon": ""
                              },
                              {
                                "value": "21st July",
                                "classes": "",
                                "icon": ""
                              },
                              {
                                "value": "Increases Resistance",
                                "classes": "green-fg",
                                "icon": "icon icon-trending-down s14 green-fg"
                              }
                            ],
                            [
                              {
                                "value": "HEP-A1/HEP-A2/MMR",
                                "classes": "text-boxed m-0 pink-bg white-fg",
                                "icon": ""
                              },
                              {
                                "value": "12 months",
                                "classes": "text-bold",
                                "icon": ""
                              },
                              {
                                "value": "21st September",
                                "classes": "",
                                "icon": ""
                              },
                              {
                                "value": "Reduces Infections",
                                "classes": "green-fg",
                                "icon": "icon icon-minus s14 green-fg"
                              }
                            ],
                            [
                              {
                                "value": "THYPOID 1",
                                "classes": "text-boxed m-0 amber-bg white-fg",
                                "icon": ""
                              },
                              {
                                "value": "5 YEARS",
                                "classes": "text-bold",
                                "icon": ""
                              },
                              {
                                "value": "30th December",
                                "classes": "",
                                "icon": ""
                              },
                              {
                                "value": "Increases Immunity for Thyroid",
                                "classes": "green-fg",
                                "icon": "icon icon-minus s14 green-fg"
                              }
                            ]
                          ]
                        }
                      },
                      "widget11": {
                        "title": "Team Members",
                        "table": {
                          "columns": [
                            {
                              "title": ""
                            },
                            {
                              "title": "Name"
                            },
                            {
                              "title": "Position"
                            },
                            {
                              "title": "Office"
                            },
                            {
                              "title": "E-Mail"
                            },
                            {
                              "title": "Phone"
                            }
                          ],
                          "rows": [
                            [
                              "james.jpg",
                              "Jack Gilbert",
                              "Design Manager",
                              "Johor Bahru",
                              "jgilbert48@mail.com",
                              "+16 298 032 7774"
                            ],
                            [
                              "katherine.jpg",
                              "Kathy Anderson",
                              "Recruiting Manager",
                              "Solţānābād",
                              "kanderson49@mail.com.br",
                              "+23 572 311 1136"
                            ],
                            [
                              "andrew.jpg",
                              "Mark Turner",
                              "Recruiting Manager",
                              "Neftegorsk",
                              "mturner4a@mail.com",
                              "+01 139 803 9263"
                            ],
                            [
                              "jane.jpg",
                              "Kathryn Martinez",
                              "Director of Sales",
                              "Palekastro",
                              "kmartinez4b@mail.com",
                              "+25 467 022 5393"
                            ],
                            [
                              "alice.jpg",
                              "Annie Gonzales",
                              "Actuary",
                              "Candon",
                              "agonzales4c@mail.edu",
                              "+99 891 619 7138"
                            ],
                            [
                              "vincent.jpg",
                              "Howard King",
                              "Human Resources",
                              "Bergen op Zoom",
                              "hking4d@mail.gov",
                              "+46 984 348 1409"
                            ],
                            [
                              "joyce.jpg",
                              "Elizabeth Dixon",
                              "Electrical Engineer",
                              "Písečná",
                              "edixon4e@mail.gov",
                              "+33 332 067 9063"
                            ],
                            [
                              "danielle.jpg",
                              "Dorothy Morris",
                              "Office Assistant",
                              "Magsaysay",
                              "dmorris4f@mail.com",
                              "+05 490 958 6120"
                            ],
                            [
                              "carl.jpg",
                              "Mark Gonzales",
                              "Quality Control",
                              "Matsue-shi",
                              "mgonzales4g@mail.com",
                              "+03 168 394 9935"
                            ],
                            [
                              "profile.jpg",
                              "Catherine Rogers",
                              "Programmer Analyst",
                              "Kangar",
                              "crogers4h@mail.com",
                              "+86 235 407 5373"
                            ],
                            [
                              "garry.jpg",
                              "Ruth Grant",
                              "Community Outreach",
                              "Beaune",
                              "rgrant4i@mail.pl",
                              "+36 288 083 8460"
                            ],
                            [
                              "james.jpg",
                              "Phyllis Gutierrez",
                              "Administrative Assistant",
                              "Shlissel’burg",
                              "pgutierrez4j@mail.net",
                              "+52 749 861 9304"
                            ],
                            [
                              "alice.jpg",
                              "Lillian Morris",
                              "Media Planner",
                              "Berlin",
                              "lmorris4k@mail.de",
                              "+59 695 110 3856"
                            ],
                            [
                              "vincent.jpg",
                              "Jeremy Anderson",
                              "Systems Engineer",
                              "Lũng Hồ",
                              "janderson4l@mail.uk",
                              "+40 384 115 1448"
                            ],
                            [
                              "carl.jpg",
                              "Arthur Lawrence",
                              "Nurse Practicioner",
                              "Sarkanjut",
                              "alawrence4m@mail.com",
                              "+36 631 599 7867"
                            ],
                            [
                              "andrew.jpg",
                              "David Simmons",
                              "Social Worker",
                              "Ushumun",
                              "dsimmons4n@mail.com",
                              "+01 189 681 4417"
                            ],
                            [
                              "danielle.jpg",
                              "Daniel Johnston",
                              "Help Desk",
                              "São Carlos",
                              "djohnston4o@mail.gov",
                              "+60 028 943 7919"
                            ],
                            [
                              "joyce.jpg",
                              "Ann King",
                              "Internal Auditor",
                              "Liren",
                              "aking4p@mail.com",
                              "+91 103 932 6545"
                            ],
                            [
                              "james.jpg",
                              "Phillip Franklin",
                              "VP Accounting",
                              "Soba",
                              "pfranklin4q@mail.com",
                              "+25 820 986 7626"
                            ],
                            [
                              "garry.jpg",
                              "Gary Gonzalez",
                              "Speech Pathologist",
                              "Gangkou",
                              "ggonzalez4r@mail.cc",
                              "+10 862 046 7916"
                            ]
                          ]
                        }
                      },
                      "weatherWidget": {
                        "locations": {
                          "NewYork": {
                            "name": "New York",
                            "icon": "icon-weather-pouring",
                            "temp": {
                              "C": "22",
                              "F": "72"
                            },
                            "windSpeed": {
                              "KMH": 12,
                              "MPH": 7.5
                            },
                            "windDirection": "NW",
                            "rainProbability": "98%",
                            "next3Days": [
                              {
                                "name": "Height",
                                "icon": "icon-weather-pouring",
                                "temp": {
                                  "C": "170 cm",
                                  "F": "70"
                                }
                              },
                              {
                                "name": "Weight",
                                "icon": "icon-weather-pouring",
                                "temp": {
                                  "C": "60 kg",
                                  "F": "66"
                                }
                              },
                              {
                                "name": "Blood Group",
                                "icon": "icon-weather-partlycloudy",
                                "temp": {
                                  "C": "O +ve",
                                  "F": "75"
                                }
                              }
                            ]
                          }
                        },
                        "currentLocation": "NewYork",
                        "tempUnit": "C",
                        "speedUnit": "KMH"
                      },
                      "widget7": {
                        "title": "Social Network Feed",
                        "table": {
                          "columns": [
                            {
                              "title": "Campaign Name"
                            },
                            {
                              "title": "Location"
                            },
                            {
                              "title": "Category"
                            },
                            {
                              "title": "Status"
                            }
                          ],
                          "rows": [
                            [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ],
                            [
                              {
                                "value": "Increase Height",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Andhra",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase Metabolism",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Telangana",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ], [
                              {
                                "value": "Increase weight",
                                "classes": "text-bold"
                              },
                              {
                                "value": "Karnataka",
                                "classes": "text-boxed m-0 green-bg white-fg"
                              },
                              {"value": "Growth"},
                              {"value": "Running"}
                            ],
                            [
                              {
                                "value": "Valentines Day",
                                "classes": "text-bold"
                              },
                              {
                                "value": "ALL",
                                "classes": "text-boxed m-0 deep-orange-bg white-fg"
                              },
                              {"value": "South"},
                              {"value": "Running"}
                            ]
                          ]
                        }
                      },
                      "widget8": {
                        "title": "Activity",
                        "activities": [
                          {
                            "process" : "Check up at Narayana Hospital",
                            "type": "Output",
                            "value": "5%"
                          },
                          {
                            "process" : "Check up at Polio clinic",
                            "type": "Output",
                            "value": "2%"
                          },
                          {
                            "process" : "Check up at clinic",
                            "type": "Output",
                            "value": "5 %"
                          },
                          {
                            "process" : "Check up at KIMS",
                            "type": "Output",
                            "value": "3%"
                          },
                          {
                            "process" : "Check up at APOLLO",
                            "type": "Output",
                            "value": "4 %"
                          },
                          {
                            "process" : "Check up at Vasan",
                            "type": "Output",
                            "value": "30 %"
                          }
                        ]
                      }
                    };
                }
            },
            bodyClass: 'dashboard-project'
        });
    }

})();
