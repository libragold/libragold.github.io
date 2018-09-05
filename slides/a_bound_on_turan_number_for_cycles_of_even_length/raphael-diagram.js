/*!
 * raphael-diagram.js
 * MIT licensed
 *
 * Copyright (C) 2015 Zilin Jiang, http://libragold.com
 */

// patch for stretch figures (BUGGY)
Reveal.addEventListener('fragmentshown', function(event) {
  setTimeout(function(){
    var f = $(event.fragment);
    if (f.is('figure.stretch')) {
      var d = f.find('div'),
          c = f.find('figcaption');
      if (f.height() > c.height() && d.find('svg').length == 0)
        var r = Raphael(d.attr('id'), f.width(), f.height() - c.height());
    }
  }, 300);
  return true;
});

Raphael.fn.vertex = function(c, s, xo, yo) {
  return this.circle(c[0]*s+xo,c[1]*s+yo,8).attr({fill: '#93a1a1', stroke: '#000', 'stroke-width': 1.5});
};

Raphael.fn.edge = function(u, v, s, xo, yo) {
  return this.path('M'+(u[0]*s+xo)+' '+(u[1]*s+yo)+'L'+(v[0]*s+xo)+' '+(v[1]*s+yo)).attr({'stroke-width': 1.5});
}

Raphael.fn.block = function(u, v, s, xo, yo) {
  console.log(u, v);
  var x0 = u[0]*s+xo, y0 = u[1]*s+yo;
  var x1 = v[0]*s+xo, y1 = v[1]*s+yo;
  return this.rect(x0-20, y0-20, x1-x0+40, y1-y0+40, 20).attr({fill: '#2aa198', 'fill-opacity': 0.2, stroke: 'none'}).toBack();
}

Raphael.fn.graph = function(c, e, s, w, h, g) {
  // c - coordinates of vertices, e - edges, s - scale, w - svg width, h - svg height
  var r = this;
  var xs = [], ys = [];
  c.forEach(function(d) {
    xs.push(d[0]);
    ys.push(d[1]);
  });
  var x_min = Math.min.apply(null, xs),
      y_min = Math.min.apply(null, ys);
  var x_span = Math.max.apply(null, xs) - x_min, 
      y_span = Math.max.apply(null, ys) - y_min;
  console.log(x_min, y_min);
  var x_offset = (w - s * x_span) / 2 - x_min * s,
      y_offset = (h - s * y_span) / 2 - y_min * s;
  var vertex_set = [],
      edge_set = [],
      group_set = [];
  e.forEach(function(d) {
    edge_set.push(r.edge(c[d[0]], c[d[1]], s, x_offset, y_offset))
  });
  c.forEach(function(d) {
    vertex_set.push(r.vertex(d, s, x_offset, y_offset));
  });
  g.forEach(function(d) {
    group_set.push(r.block(c[d[0]], c[d[1]], s, x_offset, y_offset));
  });
  return [vertex_set, edge_set, group_set];
}

$(function() {
  var width = 960, height = 0;
  var blue = '#268bd2', red = '#dc322f';
  var dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
  var solid = {fill: "none", stroke: "#666"};
  // Slide 3-0
  (function(){
    var r = Raphael("d0", width, height = $("#d0").data('height'));
    var coordinates = [[0,1], [0,2], [1,3], [2,3], [3,2], [3,1], [2,0], [1,0]];
    var edges = [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,0], [1,4]];
    var graph = r.graph(coordinates, edges, 100, width, height, []);
    var vertex_set = graph[0],
        edge_set = graph[1];
    var reds = [0, 1], blues = [2, 3, 4, 5, 6, 7];
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d0') {
        reds.forEach(function(i){
          vertex_set[i].animate({fill: red, stroke: red}, 400);
        });
        blues.forEach(function(i){
          vertex_set[i].animate({fill: blue, stroke: blue}, 400);
        });        
      }
    });
  })();
  // Slide 3-1
  (function(){
    var r = Raphael("d1", width, height = $("#d1").data('height'));
    var coordinates = [[0,0], [4,-3], [4,-1], [4,1], [4,3], [8,-4], [8,-3], [8,-2], [8,-1], [8,0], [8,1], [8,2], [8,3], [8,4], [12,-4], [12,-3], [12,-2], [12,-1], [12,0], [12,1], [12,2], [12,3], [12,4], [16,-4], [16,-3], [16,-2], [16,-1], [16,0], [16,1], [16,2], [16,3], [16,4]];
    var edges = [[0,1], [0,2], [0,3], [0,4], [1,5], [1,6], [1,7], [2,7], [2,8], [2,9], [3,9], [3,10], [3,11], [4,11], [4,12], [4,13]];
    for (var i = 14; i <= 22; ++i)
      for (var j = 23; j <= 31; ++j)
        if (Math.random() > 0.6) edges.push([i,j]);
    var vertex_group = [[0,0], [1,4], [5,13], [14, 22], [23, 31],[14,31]];
    var graph = r.graph(coordinates, edges, 30, width, height, vertex_group);
    var vertex_set = graph[0], block_set = graph[2];
    // draw ... in between
    r.text(width/2+60, height/2-11, '...').attr({fill: "#999", 'font-size': 38});
    // label blocks
    var label_attr = {fill: '#657b83', 'font-size': 24, 'font-family': 'Lato, sans-serif'};
    block_set.forEach(function(d, i){
      var x = d.attr('x');
      var y = d.attr('y');
      if (i == 0) r.text(x+20, y - 20, 'x').attr(label_attr);
      if (i == 3) i = 'i';
      if (i == 4) i = 'i+1';
      if (i != 5) r.text(x+20, 10, i).attr(label_attr);
    });
    block_set[5].hide();
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d1' && f.data('step') == undefined) {
        var x0 = vertex_set[14].attr('cx'), y0 = vertex_set[14].attr('cy'), x1 = vertex_set[31].attr('cx'), y1 = vertex_set[31].attr('cy');
        block_set[3].animate({opacity: 0},400);
        block_set[4].animate({opacity: 0},400);
        block_set[5].show().attr({opacity: 0}).animate({opacity: 1}, 400);
        r.text((x0+x1)/2, height-12, 'Hi').attr(label_attr);        
        f.data('step', '1');
      }
    });
  })();
  // Slide 3-2
  r = Raphael("d2", width, height = $("#d2").data('height'));
  var coordinates = [[0,0],[1,0],[0,1],[1,1],[0,2],[1,2],[0,3],[1,3],[0,4],[1,4],[-7,2],[-4,2],[-4,1],[-4,3],[-3,2],[-3,1],[-3,3]];
  var edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],[9,4],[11,14],[11,15],[11,16]], group = [[0,8],[1,9],[10,10],[12,13],[15,16]];
  var graph = r.graph(coordinates, edges, 80, width, height, group);
  var vertex_set = graph[0], edge_set = graph[1], block_set = graph[2];
  // label
  var label_attr = {fill: '#657b83', 'font-size': 24, 'font-family': 'Lato, sans-serif'};
  r.text(vertex_set[10].attr('cx'), 12, '0').attr(label_attr);
  r.text(vertex_set[10].attr('cx'), vertex_set[10].attr('cy')-40, 'x').attr(label_attr);
  r.text(vertex_set[0].attr('cx'), 12, 'i').attr(label_attr);
  r.text(vertex_set[1].attr('cx'), 12, 'i+1').attr(label_attr);
  t1 = r.text(vertex_set[12].attr('cx'), 12, 'i-j').attr(label_attr);
  t2 = r.text(vertex_set[14].attr('cx'), 12, 'i-j+1').attr(label_attr);
  t3 = r.text(vertex_set[11].attr('cx'), vertex_set[11].attr('cy')-40, 'y').attr(label_attr);
  t4 = r.text(vertex_set[15].attr('cx'), vertex_set[15].attr('cy')-40, 'z').attr(label_attr);
  // hide vertices
  vertex_set[12].hide(), vertex_set[13].hide(), t4.hide();
  var hidden_set = [vertex_set[11],vertex_set[14],vertex_set[15],vertex_set[16],edge_set[12],edge_set[13],edge_set[11],block_set[3],block_set[4],t1,t2,t3];
  hidden_set.forEach(function(d) {
    d.hide();
  });
  Reveal.addEventListener('fragmentshown', function(event){
    var f = $(event.fragment);
    var div = $("#d2")
    if (f.data('toggle') == 'diagram' && f.data('target') == '#d2') {
      if (div.data('step') == undefined) {
        hidden_set.forEach(function(d) {
          d.show().attr({opacity: 0}).animate({opacity: 1}, 400);
        });
        div.data('step', '1');
      } else if (div.data('step') == 1) {
        [vertex_set[14],vertex_set[16],edge_set[11],edge_set[13]].forEach(function(d){
          d.animate({opacity: 0.2}, 400);
        });
        t4.show().attr({opacity: 0}).animate({opacity: 1}, 400);
        div.data('step', '2');
      } else if (div.data('step') == 2) {
        [vertex_set[0],vertex_set[2],vertex_set[4]].forEach(function(d){
          d.animate({fill: red, stroke: red},400);
        });
        [vertex_set[1],vertex_set[3],vertex_set[5],vertex_set[6],vertex_set[7],vertex_set[8],vertex_set[9]].forEach(function(d){
          d.animate({fill: blue, stroke: blue},400);
        });
      }
    }
  });
  // ANIMATION
  // // Slide 3-3
  // (function(){
  //   var r = Raphael("d3", width, height = $("#d3").data('height'));
  //   var coordinates = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [16,-2], [16,-1], [16,0], [16,1], [16,2], [16,3], [16,4], [16,5], [16,6], [16,7], [16,8], [16,9]];
  //   var edges = [], vertex_group = [[0,7], [8,19]];
  //   var graph = r.graph(coordinates, edges, 14, width, height, vertex_group);
  //   var vertex_set = graph[0], block_set = graph[2];
  //   // label blocks
  //   var label_attr = {fill: '#333', 'font-size': 16, 'font-family': 'Lato, sans-serif'};
  //   block_set.forEach(function(d, i){
  //     var x = d.attr('x');
  //     if (i == 0) i = 'i';
  //     if (i == 1) i = 'i+1';
  //     r.text(x+10, 8, i).attr(label_attr);
  //   });
  //   var label_attr = {fill: '#333', 'font-size': 24, 'font-family': 'STIX'};
  //   // right to left degree condition
  //   var x0 = vertex_set[16].attr('cx'), y0 = vertex_set[16].attr('cy'), x1 = vertex_set[6].attr('cx'), y1 = vertex_set[6].attr('cy');
  //   r.path('M'+(x0-20)+' '+y0+'L'+(x1+20)+' '+y1).attr({fill: 'none', stroke: '#333', 'arrow-end': 'classical-wide-long'});
  //   r.text((x0+x1)/2, (y0+y1)/2+16, '≤ 2k').attr(label_attr);
  //   $('#d3').click(function(){
  //     // left to right degree condition
  //     var x0 = vertex_set[1].attr('cx'), y0 = vertex_set[1].attr('cy'), x1 = vertex_set[11].attr('cx'), y1 = vertex_set[11].attr('cy');
  //     r.path('M'+(x0+20)+' '+y0+'L'+(x1-20)+' '+y1).attr({fill: 'none', stroke: '#333', 'arrow-end': 'classical-wide-long'});
  //     r.text((x0+x1)/2, (y0+y1)/2-16, '≳ δ').attr(label_attr);
  //   });
  // })();
  // Slide 5-0
  (function(){
    var r = Raphael("d4", width, height = $("#d4").data('height'));
    var coordinates = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7]];
    var edges = [];
    for (var i = 0; i <= 7; ++i)
      for (var j = 8; j <= 15; ++j)
        if (Math.random() > 0.7) edges.push([i,j]);
    for (var i = 8; i <= 15; ++i)
      for (var j = 16; j <= 23; ++j)
        if (Math.random() > 0.7) edges.push([i,j]);
    var vertex_group = [[0,7], [8,15], [16,23]];
    var graph = r.graph(coordinates, edges, 40, width, height, vertex_group);
  })();
  // Slide 5-1
  (function(){
    var r = Raphael("d5", width, height = $("#d5").data('height'));
    var coordinates = [[0,0], [0,8], [0,16], [8,1], [8,3], [8,5], [8,7], [8,9], [8,11], [8,13], [8,15], [16, 2], [16, 4], [16, 6], [16,10], [16,12], [16,14], [8,17]];
    var edges = [[0,3],[3,11],[11,4],[4,12],[12,5],[5,13],[13,6],[6,1],[1,7],[7,14],[14,8],[8,15],[15,9],[9,16],[16,10],[10,2],[2,17], [0,17], [1,17]], vertex_group = [];
    var graph = r.graph(coordinates, edges, 30, width, height, vertex_group);
    var vertex_set = graph[0];
    // 2 step animation
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      var canvas = $('#d5');
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d5') {
        if (canvas.data('step') == undefined) {
          var reds = [3,4,5,6,7,8,9,10], blues = [0,1,2,11,12,13,14,15,16,17];
          reds.forEach(function(i){
            vertex_set[i].animate({fill: red, stroke: red}, 400);
          });
          blues.forEach(function(i){
            vertex_set[i].animate({fill: blue, stroke: blue}, 400);
          });
          canvas.data('step', '1');
        } else if (canvas.data('step') == '1') {
          var x0 = vertex_set[0].attr('cx'), y0 = vertex_set[0].attr('cy'), y1 = vertex_set[1].attr('cy'), y2 = vertex_set[2].attr('cy');
          var x1 = vertex_set[3].attr('cx'),
              y3 = vertex_set[3].attr('cy');
              y4 = vertex_set[4].attr('cy'),
              y5 = vertex_set[5].attr('cy'),
              y6 = vertex_set[6].attr('cy'),
              y7 = vertex_set[7].attr('cy'),
              y8 = vertex_set[8].attr('cy'),
              y9 = vertex_set[9].attr('cy'),
              y10 = vertex_set[10].attr('cy');
              y17 = vertex_set[17].attr('cy');
          r.circle(x0, (y0*2+y1)/3, 8).attr({fill: '#fff', stroke: '#000'});
          r.circle(x0, (y0+y1*2)/3, 8).attr({fill: '#fff', stroke: '#000'});
          r.circle(x0, (y1*2+y2)/3, 8).attr({fill: '#fff', stroke: '#000'});
          r.circle(x0, (y1+y2*2)/3, 8).attr({fill: '#fff', stroke: '#000'});
          r.path('M'+x1+' '+y3+'L'+x0+' '+(y0*2+y1)/3+'L'+x1+' '+y4).attr(dashed).toBack();
          r.path('M'+x1+' '+y5+'L'+x0+' '+(y0+2*y1)/3+'L'+x1+' '+y6).attr(dashed).toBack();
          r.path('M'+x1+' '+y7+'L'+x0+' '+(y1*2+y2)/3+'L'+x1+' '+y8).attr(dashed).toBack();
          r.path('M'+x1+' '+y9+'L'+x0+' '+(y1+2*y2)/3+'L'+x1+' '+y10).attr(dashed).toBack();
          r.path('M'+x1+' '+y17+'L'+x0+' '+(y1+2*y2)/3).attr(dashed).toBack();
          canvas.data('step', '2');     
        }
      }
    });
  })();
  // Slide 5-2
  (function(){
    var r = Raphael("d6", width, height = $("#d6").data('height'));
    var coordinates = [[0,2],[0,3],[0,4],[0,5],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[8,2],[8,3],[8,4],[8,5], [16,2],[16,3],[16,4],[16,5],[20,0],[20,1],[20,2],[20,3],[20,4],[20,5],[20,6],[20,7],[24,2],[24,3],[24,4],[24,5]];
    var edges = [], vertex_group = [];
    for (var i = 0; i < 4; ++i)
      for (var j = 4; j < 12; ++j)
        if (Math.random() > 0.3) edges.push([i,j]);
    for (var i = 4; i < 12; ++i)
      for (var j = 12; j < 16; ++j)
        if (Math.random() > 0.3) edges.push([i,j]);
    for (var i = 16; i < 20; ++i)
      for (var j = 20; j < 24; ++j)
        edges.push([i,j]);
    for (var i = 24; i < 28; ++i)
      for (var j = 28; j < 32; ++j)
        edges.push([i,j]);    
    var graph = r.graph(coordinates, edges, 30, width, height, vertex_group);
  })();
  // Slide 5-3
  (function(){
    var r = Raphael("d7", width, height = $("#d7").data('height'));
    var coordinates = [[0,0],[0,1],[0,2],[0,3],[4,-1],[5,-1],[6,-1],[7,-1],[8,-1],[9,-1],[10,-1],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4]];
    var edges = [], vertex_group = [[0,3],[4,45],[4,17],[18,45]];
    var graph = r.graph(coordinates, edges, 48, width, height, vertex_group);
    var vertex_set = graph[0], block_set = graph[2];
    block_set[2].attr({opacity: 0});
    block_set[3].attr({opacity: 0});
    var x0 = vertex_set[0].attr('cx') + 20, x1 = vertex_set[4].attr('cx') - 20, x2 = vertex_set[7].attr('cx');
    var y0 = vertex_set[0].attr('cy'), y1 = vertex_set[1].attr('cy'), y2 = vertex_set[2].attr('cy'), y3 = vertex_set[3].attr('cy'), y4 = vertex_set[4].attr('cy'), y7 = vertex_set[19].attr('cy');
    var y5 = (y4 * 2 + y7) / 3, y6 = (y4 + 2 * y7) / 3;
    var label_attr = {fill: '#657b83', 'font-size': 24, 'font-family': 'Lato, sans-serif'};
    r.text(x0-20, 14, 'Vi').attr(label_attr);
    r.text(x2, 14, 'Unexplored neighbors').attr(label_attr);
    // animation
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d7' && f.data('step') == undefined) {
        for (var i=4; i<18; ++i) {
          var x = vertex_set[i].attr('cx'), y=vertex_set[i].attr('cy');
          r.path('M'+x+' '+y+'L'+(x+20)+' '+(y)).attr({'stroke-width': 1.5}).toBack();
          r.path('M'+x+' '+y+'L'+(x+15)+' '+(y+15)).attr({'stroke-width': 1.5}).toBack();
          r.path('M'+x+' '+y+'L'+(x+15)+' '+(y-15)).attr({'stroke-width': 1.5}).toBack();
        }
        for (var i=18; i<46; ++i) {
          var x = vertex_set[i].attr('cx'), y=vertex_set[i].attr('cy');
          r.path('M'+x+' '+y+'L'+(x+20)+' '+(y)).attr({'stroke-width': 1.5}).toBack();
        }
        block_set[1].animate({opacity: 0}, 400);
        block_set[2].animate({opacity: 1}, 400);
        block_set[3].animate({opacity: 1}, 400);
        var x0 = vertex_set[10].attr('cx'), y1 = (vertex_set[9].attr('cy')+vertex_set[17].attr('cy'))/2, y2 = (vertex_set[18].attr('cy')+vertex_set[45].attr('cy'))/2;
        r.text(x0+48, y1, 'Bg').attr(label_attr);
        r.text(x0+48, y2, 'Sm').attr(label_attr);
        f.data('step', '1');
      }
    });    
  })();
});
