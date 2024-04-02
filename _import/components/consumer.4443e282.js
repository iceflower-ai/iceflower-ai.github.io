import embed from "../../_npm/vega-embed@6.24.0/_esm.js";

async function container(spec, opt = {}) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('vega-embed-wrapper');
  
    const div = document.createElement('div');
    wrapper.appendChild(div);
  
    const actions =
      opt.actions === true || opt.actions === false
        ? opt.actions
        : {export: true, source: false, compiled: true, editor: true, ...(opt.actions ?? {})};
  
    const result = await embed(div, spec, {
      actions,
      ...(opt ?? {}),
    });
  
    wrapper.value = result.view;
    return wrapper;
  }

export async function streamingChart() {
  return container({
    $schema: "https://vega.github.io/schema/vega/v5.json",
    background: "transparent",
    config: {
      text: {fill: "#333333", fontSize: 13},
      view: {stroke: "transparent"}
    },
    data: [
      {
        name: "input",
        values: [
          {
            category: "None - 2017",
            gap: 5,
            labels: "left",
            sort: 1,
            stack: 1
          },
          {
            category: "None - 2018",
            gap: 5,
            labels: "left",
            sort: 1,
            stack: 2
          },
          {
            category: "None - 2019",
            gap: 5,
            labels: "left",
            sort: 1,
            stack: 3
          },
          {
            category: "None - 2020",
            gap: 5,
            labels: "left",
            sort: 1,
            stack: 4
          },
          {
            category: "None - 2021",
            gap: 5,
            labels: "left",
            sort: 1,
            stack: 5
          },
          {
            category: "Netflix - 2017",
            gap: 5,
            labels: "left",
            sort: 2,
            stack: 1
          },
          {
            category: "Netflix - 2018",
            gap: 5,
            labels: "left",
            sort: 2,
            stack: 2
          },
          {
            category: "Netflix - 2019",
            gap: 5,
            labels: "left",
            sort: 2,
            stack: 3
          },
          {
            category: "Netflix - 2020",
            gap: 5,
            labels: "left",
            sort: 2,
            stack: 4
          },
          {
            category: "Netflix - 2021",
            gap: 5,
            labels: "left",
            sort: 2,
            stack: 5
          },
          {
            category: "HBO - 2017",
            gap: 5,
            labels: "left",
            sort: 3,
            stack: 1
          },
          {
            category: "HBO - 2018",
            gap: 5,
            labels: "left",
            sort: 3,
            stack: 2
          },
          {
            category: "HBO - 2019",
            gap: 5,
            labels: "left",
            sort: 3,
            stack: 3
          },
          {
            category: "HBO - 2020",
            gap: 5,
            labels: "left",
            sort: 3,
            stack: 4
          },
          {
            category: "HBO - 2021",
            gap: 5,
            labels: "left",
            sort: 3,
            stack: 5
          },
          {
            category: "Prime video - 2017",
            gap: 5,
            labels: "left",
            sort: 4,
            stack: 1
          },
          {
            category: "Prime video - 2018",
            gap: 5,
            labels: "left",
            sort: 4,
            stack: 2
          },
          {
            category: "Prime video - 2019",
            gap: 5,
            labels: "left",
            sort: 4,
            stack: 3
          },
          {
            category: "Prime video - 2020",
            gap: 5,
            labels: "left",
            sort: 4,
            stack: 4
          },
          {
            category: "Prime video - 2021",
            gap: 5,
            labels: "left",
            sort: 4,
            stack: 5
          },
          {
            category: "Disney Plus - 2017",
            gap: 5,
            labels: "left",
            sort: 5,
            stack: 1
          },
          {
            category: "Disney Plus - 2018",
            gap: 5,
            labels: "left",
            sort: 5,
            stack: 2
          },
          {
            category: "Disney Plus - 2019",
            gap: 5,
            labels: "left",
            sort: 5,
            stack: 3
          },
          {
            category: "Disney Plus - 2020",
            gap: 5,
            labels: "left",
            sort: 5,
            stack: 4
          },
          {
            category: "Disney Plus - 2021",
            gap: 5,
            labels: "left",
            sort: 5,
            stack: 5
          },
          {destination: "None - 2018", source: "None - 2017", value: 23080},
          {
            destination: "Netflix - 2018",
            source: "None - 2017",
            value: 6910
          },
          {
            destination: "Netflix - 2018",
            source: "Netflix - 2017",
            value: 6485
          },
          {
            destination: "None - 2018",
            source: "Netflix - 2017",
            value: 1742
          },
          {destination: "HBO - 2018", source: "None - 2017", value: 1661},
          {destination: "HBO - 2018", source: "HBO - 2017", value: 513},
          {destination: "None - 2018", source: "HBO - 2017", value: 456},
          {
            destination: "Prime video - 2018",
            source: "None - 2017",
            value: 421
          },
          {destination: "HBO - 2018", source: "Netflix - 2017", value: 394},
          {destination: "Netflix - 2018", source: "HBO - 2017", value: 121},
          {
            destination: "Prime video - 2018",
            source: "Netflix - 2017",
            value: 58
          },
          {
            destination: "None - 2018",
            source: "Prime video - 2017",
            value: 45
          },
          {
            destination: "Prime video - 2018",
            source: "HBO - 2017",
            value: 17
          },
          {
            destination: "Netflix - 2018",
            source: "Prime video - 2017",
            value: 11
          },
          {
            destination: "Prime video - 2018",
            source: "Prime video - 2017",
            value: 9
          },
          {
            destination: "HBO - 2018",
            source: "Prime video - 2017",
            value: 3
          },
          {destination: "None - 2019", source: "None - 2018", value: 14434},
          {
            destination: "Netflix - 2019",
            source: "Netflix - 2018",
            value: 10232
          },
          {
            destination: "Netflix - 2019",
            source: "None - 2018",
            value: 6345
          },
          {
            destination: "Prime video - 2019",
            source: "None - 2018",
            value: 3386
          },
          {
            destination: "None - 2019",
            source: "Netflix - 2018",
            value: 2446
          },
          {destination: "HBO - 2019", source: "HBO - 2018", value: 1348},
          {destination: "HBO - 2019", source: "None - 2018", value: 1158},
          {destination: "None - 2019", source: "HBO - 2018", value: 744},
          {
            destination: "Prime video - 2019",
            source: "Netflix - 2018",
            value: 570
          },
          {destination: "HBO - 2019", source: "Netflix - 2018", value: 352},
          {
            destination: "Prime video - 2019",
            source: "Prime video - 2018",
            value: 268
          },
          {destination: "Netflix - 2019", source: "HBO - 2018", value: 190},
          {
            destination: "None - 2019",
            source: "Prime video - 2018",
            value: 162
          },
          {
            destination: "Prime video - 2019",
            source: "HBO - 2018",
            value: 128
          },
          {
            destination: "Netflix - 2019",
            source: "Prime video - 2018",
            value: 36
          },
          {
            destination: "HBO - 2019",
            source: "Prime video - 2018",
            value: 14
          },
          {
            destination: "Netflix - 2020",
            source: "Netflix - 2019",
            value: 12503
          },
          {destination: "None - 2020", source: "None - 2019", value: 7646},
          {
            destination: "Netflix - 2020",
            source: "None - 2019",
            value: 5655
          },
          {
            destination: "None - 2020",
            source: "Netflix - 2019",
            value: 3042
          },
          {
            destination: "Prime video - 2020",
            source: "None - 2019",
            value: 2656
          },
          {
            destination: "Prime video - 2020",
            source: "Prime video - 2019",
            value: 2625
          },
          {destination: "HBO - 2020", source: "HBO - 2019", value: 1596},
          {destination: "HBO - 2020", source: "None - 2019", value: 1378},
          {
            destination: "None - 2020",
            source: "Prime video - 2019",
            value: 1176
          },
          {destination: "None - 2020", source: "HBO - 2019", value: 772},
          {destination: "HBO - 2020", source: "Netflix - 2019", value: 592},
          {
            destination: "Prime video - 2020",
            source: "Netflix - 2019",
            value: 563
          },
          {
            destination: "Disney Plus - 2020",
            source: "None - 2019",
            value: 451
          },
          {
            destination: "Netflix - 2020",
            source: "Prime video - 2019",
            value: 288
          },
          {destination: "Netflix - 2020", source: "HBO - 2019", value: 192},
          {
            destination: "Disney Plus - 2020",
            source: "Netflix - 2019",
            value: 177
          },
          {
            destination: "HBO - 2020",
            source: "Prime video - 2019",
            value: 101
          },
          {
            destination: "Prime video - 2020",
            source: "HBO - 2019",
            value: 94
          },
          {
            destination: "Disney Plus - 2020",
            source: "HBO - 2019",
            value: 48
          },
          {
            destination: "Disney Plus - 2020",
            source: "Prime video - 2019",
            value: 29
          },
          {
            destination: "Netflix - 2021",
            source: "Netflix - 2020",
            value: 10908
          },
          {destination: "None - 2021", source: "None - 2020", value: 6948},
          {
            destination: "None - 2021",
            source: "Netflix - 2020",
            value: 6735
          },
          {
            destination: "Prime video - 2021",
            source: "Prime video - 2020",
            value: 3112
          },
          {
            destination: "Netflix - 2021",
            source: "None - 2020",
            value: 2770
          },
          {
            destination: "None - 2021",
            source: "Prime video - 2020",
            value: 2341
          },
          {destination: "HBO - 2021", source: "HBO - 2020", value: 1709},
          {
            destination: "Prime video - 2021",
            source: "None - 2020",
            value: 1611
          },
          {destination: "None - 2021", source: "HBO - 2020", value: 1448},
          {destination: "HBO - 2021", source: "None - 2020", value: 995},
          {destination: "HBO - 2021", source: "Netflix - 2020", value: 432},
          {
            destination: "Prime video - 2021",
            source: "Netflix - 2020",
            value: 430
          },
          {
            destination: "Disney Plus - 2021",
            source: "None - 2020",
            value: 314
          },
          {
            destination: "Disney Plus - 2021",
            source: "Disney Plus - 2020",
            value: 306
          },
          {
            destination: "None - 2021",
            source: "Disney Plus - 2020",
            value: 256
          },
          {
            destination: "Netflix - 2021",
            source: "Prime video - 2020",
            value: 223
          },
          {
            destination: "Disney Plus - 2021",
            source: "Netflix - 2020",
            value: 191
          },
          {destination: "Netflix - 2021", source: "HBO - 2020", value: 137},
          {
            destination: "HBO - 2021",
            source: "Prime video - 2020",
            value: 98
          },
          {
            destination: "Disney Plus - 2021",
            source: "HBO - 2020",
            value: 72
          },
          {
            destination: "Prime video - 2021",
            source: "HBO - 2020",
            value: 67
          },
          {
            destination: "Disney Plus - 2021",
            source: "Prime video - 2020",
            value: 53
          },
          {
            destination: "Netflix - 2021",
            source: "Disney Plus - 2020",
            value: 33
          },
          {
            destination: "HBO - 2021",
            source: "Disney Plus - 2020",
            value: 27
          },
          {
            destination: "Prime video - 2021",
            source: "Disney Plus - 2020",
            value: 19
          }
        ]
      },
      {
        name: "stacks",
        source: "input",
        transform: [
          {expr: "datum.source != null", type: "filter"},
          {as: "end", expr: "['source','destination']", type: "formula"},
          {
            as: "name",
            expr: "[ datum.source,datum.destination]",
            type: "formula"
          },
          {fields: ["end", "name", "value"], type: "project"},
          {fields: ["end", "name"], type: "flatten"},
          {
            as: ["stack", "sort", "gap", "labels"],
            fields: ["name"],
            from: "input",
            key: "category",
            type: "lookup",
            values: ["stack", "sort", "gap", "labels"]
          },
          {
            as: ["value", "stack", "sort", "gap", "labels"],
            fields: ["value", "stack", "sort", "gap", "labels"],
            groupby: ["end", "name"],
            ops: ["sum", "max", "max", "max", "max"],
            type: "aggregate"
          },
          {
            as: ["value", "stack", "sort", "gap", "labels"],
            fields: ["value", "stack", "sort", "gap", "labels"],
            groupby: ["name"],
            ops: ["max", "max", "max", "max", "max"],
            type: "aggregate"
          },
          {as: "gap", expr: "datum.gap?datum.gap:0", type: "formula"}
        ]
      },
      {
        name: "maxValue",
        source: ["stacks"],
        transform: [
          {
            as: ["value"],
            fields: ["value"],
            groupby: ["stack"],
            ops: ["sum"],
            type: "aggregate"
          },
          {
            as: ["value"],
            fields: ["value"],
            ops: ["max"],
            type: "aggregate"
          }
        ]
      },
      {
        name: "plottedStacks",
        source: ["stacks"],
        transform: [
          {
            as: "spacer",
            expr: " (data('maxValue')[0].value/100)*(standardGap+datum.gap)",
            type: "formula"
          },
          {as: "type", expr: "['data','spacer']", type: "formula"},
          {
            as: "spacedValue",
            expr: "[datum.value,datum.spacer]",
            type: "formula"
          },
          {fields: ["type", "spacedValue"], type: "flatten"},
          {
            field: "spacedValue",
            groupby: ["stack"],
            offset: {signal: "base"},
            sort: {field: "sort", order: "descending"},
            type: "stack"
          },
          {as: "yc", expr: "((datum.value)/2)+datum.y0", type: "formula"}
        ]
      },
      {
        name: "finalTable",
        source: ["plottedStacks"],
        transform: [{expr: "datum.type == 'data'", type: "filter"}]
      },
      {
        name: "linkTable",
        source: ["input"],
        transform: [
          {expr: "datum.source != null", type: "filter"},
          {
            as: ["sourceStacky0", "sourceStacky1", "sourceStack", "sourceSort"],
            fields: ["source"],
            from: "finalTable",
            key: "name",
            type: "lookup",
            values: ["y0", "y1", "stack", "sort"]
          },
          {
            as: [
              "destinationStacky0",
              "destinationStacky1",
              "destinationStack",
              "destinationSort"
            ],
            fields: ["destination"],
            from: "finalTable",
            key: "name",
            type: "lookup",
            values: ["y0", "y1", "stack", "sort"]
          },
          {
            as: ["syi0", "syi1"],
            field: "value",
            groupby: ["source"],
            offset: "zero",
            sort: {field: "destinationSort", order: "descending"},
            type: "stack"
          },
          {
            as: "sy0",
            expr: "datum.syi0+datum.sourceStacky0",
            type: "formula"
          },
          {as: "sy1", expr: "datum.sy0+datum.value", type: "formula"},
          {
            as: ["dyi0", "dyi1"],
            field: "value",
            groupby: ["destination"],
            offset: "zero",
            sort: {field: "sourceSort", order: "descending"},
            type: "stack"
          },
          {
            as: "dy0",
            expr: "datum.dyi0+datum.destinationStacky0",
            type: "formula"
          },
          {as: "dy1", expr: "datum.dy0+datum.value", type: "formula"},
          {as: "syc", expr: "((datum.value)/2)+datum.sy0", type: "formula"},
          {as: "dyc", expr: "((datum.value)/2)+datum.dy0", type: "formula"},
          {
            orient: "horizontal",
            shape: "diagonal",
            sourceX: {
              expr: "scale('x', toNumber(  datum.sourceStack))+ bandwidth('x')"
            },
            sourceY: {expr: "scale('y', datum.syc)"},
            targetX: {expr: "scale('x', datum.destinationStack)"},
            targetY: {expr: "scale('y', datum.dyc)"},
            type: "linkpath"
          },
          {
            as: "strokeWidth",
            expr: "range('y')[0]-scale('y', datum.value)",
            type: "formula"
          }
        ]
      }
    ],
    description: "Marketshare over the years",
    height: 800,
    marks: [
      {
        encode: {
          hover: {
            fillOpacity: {value: 1},
            tooltip: {
              signal: "{'Name':datum.name, 'Value':format(datum.value, '') + ''}"
            }
          },
          update: {
            fill: {field: "sort", scale: "color"},
            fillOpacity: {value: 0.75},
            stroke: {field: "sort", scale: "color"},
            strokeWidth: {value: 0},
            width: {band: 1, scale: "x"},
            x: {field: "stack", scale: "x"},
            y: {field: "y0", scale: "y"},
            y2: {field: "y1", scale: "y"}
          }
        },
        from: {data: "finalTable"},
        type: "rect"
      },
      {
        clip: true,
        encode: {
          hover: {
            strokeOpacity: {value: 1},
            tooltip: {
              signal: "{'Source':datum.source,'Destination':datum.destination, 'Value':format(datum.value, '') + ''}"
            }
          },
          update: {
            path: {field: "path"},
            stroke: {field: "destinationSort", scale: "color"},
            strokeOpacity: {signal: "0.3"},
            strokeWidth: {field: "strokeWidth"}
          }
        },
        from: {data: "linkTable"},
        name: "links",
        type: "path"
      },
      {
        clip: false,
        encode: {
          update: {
            fillOpacity: {signal: "0.1"},
            height: {signal: "0"},
            stroke: {value: "red"},
            strokeWidth: {value: 1},
            width: {signal: "0"},
            x: {
              signal: "datum.labels=='left'?scale('x', datum.stack)-8 : scale('x', datum.stack) + (bandwidth('x')) +8"
            },
            yc: {scale: "y", signal: "datum.yc"}
          }
        },
        from: {
          facet: {
            data: "finalTable",
            groupby: ["name", "stack", "yc", "value", "labels"],
            name: "labelFacet"
          }
        },
        marks: [
          {
            encode: {
              update: {
                align: {signal: "datum.labels=='left'?'right':'left'"},
                fontWeight: {value: "normal"},
                text: {field: "name"},
                x: {value: 0},
                y: {value: -2}
              }
            },
            from: {data: "labelFacet"},
            name: "heading",
            type: "text"
          },
          {
            encode: {
              update: {
                align: {signal: "datum.labels=='left'?'right':'left'"},
                text: {signal: " format(datum.value, '') + ''"},
                x: {value: 0},
                y: {value: 12}
              }
            },
            from: {data: "labelFacet"},
            name: "amount",
            type: "text"
          }
        ],
        name: "labelText",
        type: "group",
        zindex: 1
      },
      {
        encode: {
          update: {
            cornerRadius: {value: 4},
            fill: {value: "white"},
            opacity: {value: 0.8},
            x: {field: "bounds.x1", offset: -2},
            x2: {field: "bounds.x2", offset: 2},
            y: {field: "bounds.y1", offset: -2},
            y2: {field: "bounds.y2", offset: 2}
          }
        },
        from: {data: "labelText"},
        type: "rect"
      }
    ],
    padding: {bottom: 20, left: 20, right: 30, top: 40},
    scales: [
      {
        domain: {data: "finalTable", field: "stack"},
        name: "x",
        paddingInner: 0.88,
        range: "width",
        type: "band"
      },
      {
        domain: {data: "finalTable", field: "y1"},
        name: "y",
        range: "height",
        reverse: false,
        type: "linear"
      },
      {
        name: "color",
        range: [
          "#DDDDDD",
          "#4E79A7",
          "#F28E2B",
          "#E15759",
          "#76B7B2",
          "#59A14E",
          "#EDC949",
          "#B07AA2",
          "#FF9DA7",
          "#9C755F",
          "#BAB0AC"
        ],
        type: "ordinal"
      }
    ],
    signals: [
      {
        description: "Gap as a percentage of full domain",
        name: "standardGap",
        value: 2
      },
      {
        description: "How to stack(center or zero)",
        name: "base",
        value: "center"
      }
    ],
    width: 900,
    height: 700
  }, {actions: false});
}