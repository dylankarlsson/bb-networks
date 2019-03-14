var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "purple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-family" : "Times-Roman",
      "font-weight" : "normal",
      "background-opacity" : 1.0,
      "text-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "width" : 14.0,
      "border-opacity" : 1.0,
      "border-width" : 0.0,
      "shape" : "ellipse",
      "border-color" : "rgb(255,255,255)",
      "text-valign" : "center",
      "text-halign" : "center",
      "height" : 14.0,
      "background-color" : "rgb(102,102,255)",
      "font-size" : 10,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "source-arrow-color" : "rgb(0,0,0)",
      "width" : 2.0,
      "source-arrow-shape" : "none",
      "line-style" : "solid",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "target-arrow-shape" : "none",
      "text-opacity" : 1.0,
      "font-size" : 10,
      "opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "content" : "",
      "line-color" : "rgb(153,153,153)"
    }
  }, {
    "selector" : "edge[weight > 98]",
    "css" : {
      "opacity" : 0.00392156862745098
    }
  }, {
    "selector" : "edge[weight = 98]",
    "css" : {
      "opacity" : 1.031372549019608
    }
  }, {
    "selector" : "edge[weight > 2][weight < 98]",
    "css" : {
      "opacity" : "mapData(weight,2,98,21,263)"
    }
  }, {
    "selector" : "edge[weight = 2]",
    "css" : {
      "opacity" : 0.08235294117647059
    }
  }, {
    "selector" : "edge[weight < 2]",
    "css" : {
      "opacity" : 0.00392156862745098
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}
