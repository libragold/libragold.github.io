// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

Raphael.fn.point = function(a, c) {
  return this.circle(a[0],a[1],6).attr({fill: c, stroke: '#000', 'stroke-width': 1.5});
};

Raphael.fn.triangle = function(a, b, c) {
  var string = "M"+a[0]+" "+a[1]+"L"+b[0]+" "+b[1]+"L"+c[0]+" "+c[1]+"Z";
  // console.log(string);
  return this.path(string);
}

Raphael.fn.ball = function (x, y, r, hue) {
  hue = hue || 0;
  return this.set(
    this.ellipse(x, y + r - r / 5, r, r / 2).attr({fill: "rhsb(" + hue + ", 1, .25)-hsb(" + hue + ", 1, .25)", stroke: "none", opacity: 0}),
    this.ellipse(x, y, r, r).attr({fill: "r(.5,.9)hsb(" + hue + ", 1, .75)-hsb(" + hue + ", .5, .25)", stroke: "none"}),
    this.ellipse(x, y, r - r / 5, r - r / 20).attr({stroke: "none", fill: "r(.5,.1)#ccc-#ccc", opacity: 0})
  );
};

$(function() {
  var width = 960, height = 0;
  var blue = '#268bd2', red = '#dc322f', green = "#859900", gray = "#93a1a1", dark_gray = "#073642";
  var dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
  var solid = {fill: "none", stroke: "#666"};
  // ========== helper function ==========
  function normalize(a, width, height, wbleed, hbleed){
    var b = [], x = [], y = [];
    a.forEach(function(c){
      x.push(c[0]);
      y.push(c[1]);
    });
    width = width - 2 * wbleed;
    height = height - 2 * hbleed;
    var minx = x.min(), miny = y.min(), maxx = x.max(), maxy = y.max(),
        s = Math.min(width/(maxx-minx), height/(maxy-miny)),
        xoffset = (width-(maxx-minx)*s)/2, yoffset = (height-(maxy-miny)*s)/2;
    // console.log(minx, miny, maxx, maxy, s, xoffset, yoffset);
    a.forEach(function(c){
      b.push([(c[0]-minx)*s+xoffset+wbleed,(c[1]-miny)*s+yoffset+hbleed]);
    });
    return b;
  }
  // ========== Sphere 1 ==========
  function sphere1(r, coord, blue, dark_gray) {
    r.triangle(coord[177],coord[196],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445551});
    r.triangle(coord[177],coord[196],coord[148]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.529562});
    r.triangle(coord[45],coord[108],coord[158]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.152162});
    r.triangle(coord[45],coord[108],coord[47]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.108922});
    r.triangle(coord[20],coord[174],coord[229]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.737563});
    r.triangle(coord[183],coord[229],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.570243});
    r.triangle(coord[183],coord[229],coord[174]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.672501});
    r.triangle(coord[201],coord[232],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.482893});
    r.triangle(coord[201],coord[232],coord[52]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.529008});
    r.triangle(coord[69],coord[229],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.543148});
    r.triangle(coord[88],coord[192],coord[179]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.216424});
    r.triangle(coord[88],coord[192],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.265657});
    r.triangle(coord[98],coord[226],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.357290});
    r.triangle(coord[98],coord[226],coord[115]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.292515});
    r.triangle(coord[30],coord[210],coord[137]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.344452});
    r.triangle(coord[30],coord[210],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.374158});
    r.triangle(coord[46],coord[133],coord[101]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.044272});
    r.triangle(coord[46],coord[133],coord[119]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.078356});
    r.triangle(coord[164],coord[228],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.552943});
    r.triangle(coord[164],coord[228],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.474705});
    r.triangle(coord[28],coord[224],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.229908});
    r.triangle(coord[28],coord[224],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.186918});
    r.triangle(coord[13],coord[40],coord[233]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258660});
    r.triangle(coord[13],coord[40],coord[108]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.201529});
    r.triangle(coord[109],coord[233],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380155});
    r.triangle(coord[109],coord[233],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.322737});
    r.triangle(coord[47],coord[123],coord[190]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.073750});
    r.triangle(coord[47],coord[123],coord[51]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.046071});
    r.triangle(coord[29],coord[204],coord[76]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.003297});
    r.triangle(coord[29],coord[204],coord[39]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.010528});
    r.triangle(coord[82],coord[227],coord[8]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.316375});
    r.triangle(coord[82],coord[227],coord[102]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.376518});
    r.triangle(coord[129],coord[216],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.791622});
    r.triangle(coord[54],coord[187],coord[219]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.230692});
    r.triangle(coord[54],coord[187],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.285967});
    r.triangle(coord[36],coord[209],coord[104]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.114898});
    r.triangle(coord[36],coord[209],coord[119]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.119204});
    r.triangle(coord[16],coord[125],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.295777});
    r.triangle(coord[16],coord[125],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.366351});
    r.triangle(coord[28],coord[197],coord[23]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.254868});
    r.triangle(coord[196],coord[214],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.448347});
    r.triangle(coord[196],coord[214],coord[148]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.533111});
    r.triangle(coord[129],coord[150],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.803581});
    r.triangle(coord[97],coord[211],coord[155]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638620});
    r.triangle(coord[97],coord[211],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.616987});
    r.triangle(coord[67],coord[231],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.760509});
    r.triangle(coord[4],coord[117],coord[38]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.022241});
    r.triangle(coord[4],coord[117],coord[22]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.012927});
    r.triangle(coord[107],coord[162],coord[161]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.265993});
    r.triangle(coord[107],coord[162],coord[180]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.203651});
    r.triangle(coord[147],coord[225],coord[89]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.542179});
    r.triangle(coord[147],coord[225],coord[31]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.434697});
    r.triangle(coord[37],coord[159],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.736505});
    r.triangle(coord[37],coord[159],coord[221]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.836562});
    r.triangle(coord[115],coord[122],coord[219]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.191422});
    r.triangle(coord[115],coord[122],coord[98]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.228321});
    r.triangle(coord[3],coord[81],coord[166]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.124737});
    r.triangle(coord[3],coord[81],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.127257});
    r.triangle(coord[99],coord[232],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.544622});
    r.triangle(coord[99],coord[232],coord[132]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.639089});
    r.triangle(coord[4],coord[101],coord[2]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.010795});
    r.triangle(coord[4],coord[101],coord[38]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.020423});
    r.triangle(coord[34],coord[113],coord[55]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.075951});
    r.triangle(coord[34],coord[113],coord[51]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.045683});
    r.triangle(coord[7],coord[230],coord[92]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.103073});
    r.triangle(coord[7],coord[230],coord[12]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.076659});
    r.triangle(coord[77],coord[124],coord[217]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.427264});
    r.triangle(coord[77],coord[124],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.515235});
    r.triangle(coord[134],coord[203],coord[26]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.253317});
    r.triangle(coord[134],coord[203],coord[9]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.230655});
    r.triangle(coord[102],coord[135],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.491289});
    r.triangle(coord[102],coord[135],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.405872});
    r.triangle(coord[22],coord[51],coord[113]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.026584});
    r.triangle(coord[22],coord[51],coord[29]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.010663});
    r.triangle(coord[2],coord[76],coord[42]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.012768});
    r.triangle(coord[2],coord[76],coord[4]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.004922});
    r.triangle(coord[121],coord[169],coord[199]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.626500});
    r.triangle(coord[121],coord[169],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.563113});
    r.triangle(coord[65],coord[83],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.407631});
    r.triangle(coord[65],coord[83],coord[215]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.463384});
    r.triangle(coord[120],coord[200],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.270785});
    r.triangle(coord[120],coord[200],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.262294});
    r.triangle(coord[92],coord[179],coord[88]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.174944});
    r.triangle(coord[92],coord[179],coord[7]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.128060});
    r.triangle(coord[23],coord[197],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.315511});
    r.triangle(coord[70],coord[154],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.459052});
    r.triangle(coord[70],coord[154],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.435491});
    r.triangle(coord[90],coord[215],coord[160]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638785});
    r.triangle(coord[90],coord[215],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.602744});
    r.triangle(coord[152],coord[228],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.540315});
    r.triangle(coord[150],coord[220],coord[205]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.809575});
    r.triangle(coord[42],coord[76],coord[61]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.018452});
    r.triangle(coord[95],coord[169],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454273});
    r.triangle(coord[95],coord[169],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.488766});
    r.triangle(coord[55],coord[173],coord[113]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.081739});
    r.triangle(coord[55],coord[173],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.112233});
    r.triangle(coord[148],coord[218],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.690119});
    r.triangle(coord[148],coord[218],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606774});
    r.triangle(coord[68],coord[158],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.229349});
    r.triangle(coord[68],coord[158],coord[55]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.168445});
    r.triangle(coord[30],coord[137],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.378023});
    r.triangle(coord[27],coord[148],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.627320});
    r.triangle(coord[108],coord[131],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.181664});
    r.triangle(coord[108],coord[131],coord[190]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.135515});
    r.triangle(coord[180],coord[230],coord[92]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.121463});
    r.triangle(coord[180],coord[230],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.112846});
    r.triangle(coord[36],coord[104],coord[122]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.138498});
    r.triangle(coord[100],coord[166],coord[3]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.103243});
    r.triangle(coord[100],coord[166],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.118132});
    r.triangle(coord[115],coord[219],coord[187]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222379});
    r.triangle(coord[93],coord[207],coord[168]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.694335});
    r.triangle(coord[42],coord[61],coord[126]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.041642});
    r.triangle(coord[64],coord[159],coord[176]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.624389});
    r.triangle(coord[115],coord[187],coord[226]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.280038});
    r.triangle(coord[138],coord[170],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.285194});
    r.triangle(coord[138],coord[170],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.355813});
    r.triangle(coord[62],coord[126],coord[53]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.103392});
    r.triangle(coord[62],coord[126],coord[212]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.104320});
    r.triangle(coord[112],coord[173],coord[113]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.061545});
    r.triangle(coord[112],coord[173],coord[3]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.075130});
    r.triangle(coord[168],coord[225],coord[89]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.588882});
    r.triangle(coord[168],coord[225],coord[188]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.510240});
    r.triangle(coord[40],coord[233],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.273542});
    r.triangle(coord[65],coord[189],coord[182]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.458138});
    r.triangle(coord[130],coord[160],coord[182]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.673655});
    r.triangle(coord[52],coord[132],coord[232]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.614631});
    r.triangle(coord[52],coord[132],coord[157]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.709504});
    r.triangle(coord[89],coord[168],coord[207]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.679367});
    r.triangle(coord[20],coord[172],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.766316});
    r.triangle(coord[8],coord[153],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.277359});
    r.triangle(coord[8],coord[153],coord[81]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.214784});
    r.triangle(coord[139],coord[228],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.462610});
    r.triangle(coord[11],coord[136],coord[15]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.045782});
    r.triangle(coord[11],coord[136],coord[118]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.045601});
    r.triangle(coord[143],coord[213],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.771386});
    r.triangle(coord[83],coord[161],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380050});
    r.triangle(coord[83],coord[161],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.328644});
    r.triangle(coord[138],coord[201],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.414899});
    r.triangle(coord[138],coord[201],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.417029});
    r.triangle(coord[111],coord[164],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454299});
    r.triangle(coord[111],coord[164],coord[18]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.521518});
    r.triangle(coord[8],coord[227],coord[202]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.296095});
    r.triangle(coord[65],coord[215],coord[160]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.560332});
    r.triangle(coord[31],coord[233],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294858});
    r.triangle(coord[31],coord[233],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.367438});
    r.triangle(coord[70],coord[125],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.326497});
    r.triangle(coord[70],coord[125],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.406381});
    r.triangle(coord[18],coord[218],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606898});
    r.triangle(coord[18],coord[218],coord[114]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.719481});
    r.triangle(coord[47],coord[190],coord[108]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.102216});
    r.triangle(coord[144],coord[199],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.732899});
    r.triangle(coord[144],coord[199],coord[149]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.834436});
    r.triangle(coord[165],coord[170],coord[71]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.237000});
    r.triangle(coord[12],coord[230],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.085714});
    r.triangle(coord[90],coord[160],coord[178]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.762624});
    r.triangle(coord[7],coord[118],coord[33]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.087442});
    r.triangle(coord[7],coord[118],coord[39]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.054792});
    r.triangle(coord[9],coord[192],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.280876});
    r.triangle(coord[9],coord[192],coord[179]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.218617});
    r.triangle(coord[38],coord[117],coord[112]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.036577});
    r.triangle(coord[48],coord[145],coord[202]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.266118});
    r.triangle(coord[48],coord[145],coord[68]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.242882});
    r.triangle(coord[146],coord[205],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.770496});
    r.triangle(coord[66],coord[70],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.318265});
    r.triangle(coord[66],coord[70],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.375863});
    r.triangle(coord[52],coord[201],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490533});
    r.triangle(coord[167],coord[217],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.363405});
    r.triangle(coord[167],coord[217],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.309503});
    r.triangle(coord[77],coord[217],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.408253});
    r.triangle(coord[137],coord[210],coord[87]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.287723});
    r.triangle(coord[71],coord[224],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.189284});
    r.triangle(coord[71],coord[224],coord[167]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.236752});
    r.triangle(coord[106],coord[217],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.341096});
    r.triangle(coord[104],coord[209],coord[19]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.084186});
    r.triangle(coord[145],coord[202],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.210372});
    r.triangle(coord[72],coord[154],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.592471});
    r.triangle(coord[72],coord[154],coord[181]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.580185});
    r.triangle(coord[69],coord[194],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.460144});
    r.triangle(coord[21],coord[155],coord[97]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583090});
    r.triangle(coord[21],coord[155],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606787});
    r.triangle(coord[18],coord[214],coord[111]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.527305});
    r.triangle(coord[91],coord[221],coord[128]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.795356});
    r.triangle(coord[11],coord[204],coord[61]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.017456});
    r.triangle(coord[11],coord[204],coord[39]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.016924});
    r.triangle(coord[159],coord[176],coord[128]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.635306});
    r.triangle(coord[50],coord[212],coord[126]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.080854});
    r.triangle(coord[50],coord[212],coord[104]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.087308});
    r.triangle(coord[151],coord[208],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.413504});
    r.triangle(coord[151],coord[208],coord[181]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.496804});
    r.triangle(coord[31],coord[188],coord[225]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.421331});
    r.triangle(coord[31],coord[188],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.355454});
    r.triangle(coord[35],coord[193],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.696694});
    r.triangle(coord[35],coord[193],coord[44]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.767177});
    r.triangle(coord[35],coord[94],coord[216]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.793155});
    r.triangle(coord[87],coord[210],coord[98]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.282063});
    r.triangle(coord[86],coord[208],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.450585});
    r.triangle(coord[86],coord[208],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.564991});
    r.triangle(coord[129],coord[220],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.671910});
    r.triangle(coord[89],coord[222],coord[58]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.756904});
    r.triangle(coord[89],coord[222],coord[207]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.767977});
    r.triangle(coord[88],coord[162],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.262234});
    r.triangle(coord[88],coord[162],coord[92]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.199976});
    r.triangle(coord[43],coord[213],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.706474});
    r.triangle(coord[13],coord[31],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294718});
    r.triangle(coord[8],coord[202],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222822});
    r.triangle(coord[14],coord[189],coord[83]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.342580});
    r.triangle(coord[14],coord[189],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.311731});
    r.triangle(coord[64],coord[194],coord[176]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.563405});
    r.triangle(coord[64],coord[194],coord[20]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.634425});
    r.triangle(coord[105],coord[123],coord[12]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.043843});
    r.triangle(coord[105],coord[123],coord[51]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.031558});
    r.triangle(coord[21],coord[185],coord[30]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.443597});
    r.triangle(coord[21],coord[185],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.515271});
    r.triangle(coord[83],coord[215],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.448062});
    r.triangle(coord[46],coord[100],coord[38]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.061639});
    r.triangle(coord[46],coord[100],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.095498});
    r.triangle(coord[112],coord[117],coord[113]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.039396});
    r.triangle(coord[78],coord[79],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.139001});
    r.triangle(coord[78],coord[79],coord[136]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.094156});
    r.triangle(coord[73],coord[200],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222807});
    r.triangle(coord[73],coord[200],coord[131]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.189072});
    r.triangle(coord[5],coord[155],coord[211]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.737755});
    r.triangle(coord[5],coord[155],coord[44]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.809746});
    r.triangle(coord[73],coord[141],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.152501});
    r.triangle(coord[73],coord[141],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.203364});
    r.triangle(coord[53],coord[126],coord[15]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.079952});
    r.triangle(coord[156],coord[176],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.460672});
    r.triangle(coord[156],coord[176],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490942});
    r.triangle(coord[23],coord[96],coord[137]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.273080});
    r.triangle(coord[23],coord[96],coord[28]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.233685});
    r.triangle(coord[15],coord[136],coord[79]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.076105});
    r.triangle(coord[62],coord[219],coord[212]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.137546});
    r.triangle(coord[62],coord[219],coord[54]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.183233});
    r.triangle(coord[23],coord[137],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.342865});
    r.triangle(coord[174],coord[223],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.736084});
    r.triangle(coord[167],coord[224],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258829});
    r.triangle(coord[130],coord[182],coord[93]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.667693});
    r.triangle(coord[6],coord[171],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.520361});
    r.triangle(coord[6],coord[171],coord[67]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.648435});
    r.triangle(coord[10],coord[202],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.314304});
    r.triangle(coord[10],coord[202],coord[227]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.331636});
    r.triangle(coord[99],coord[223],coord[186]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.779692});
    r.triangle(coord[99],coord[223],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.680933});
    r.triangle(coord[2],coord[101],coord[19]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.024348});
    r.triangle(coord[132],coord[186],coord[99]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.747971});
    r.triangle(coord[102],coord[227],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.431376});
    r.triangle(coord[82],coord[153],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.261469});
    r.triangle(coord[75],coord[195],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.753514});
    r.triangle(coord[66],coord[142],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.343186});
    r.triangle(coord[66],coord[142],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.261133});
    r.triangle(coord[32],coord[63],coord[198]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.726712});
    r.triangle(coord[32],coord[63],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.590233});
    r.triangle(coord[20],coord[229],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.627891});
    r.triangle(coord[184],coord[226],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.412147});
    r.triangle(coord[184],coord[226],coord[56]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.398421});
    r.triangle(coord[92],coord[180],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.171118});
    r.triangle(coord[181],coord[205],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.702904});
    r.triangle(coord[181],coord[205],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.679957});
    r.triangle(coord[15],coord[61],coord[11]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.035515});
    r.triangle(coord[15],coord[61],coord[126]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.053208});
    r.triangle(coord[32],coord[171],coord[67]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.667033});
    r.triangle(coord[32],coord[171],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.555371});
    r.triangle(coord[56],coord[187],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.326629});
    r.triangle(coord[56],coord[187],coord[226]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.330223});
    r.triangle(coord[90],coord[178],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.716610});
    r.triangle(coord[76],coord[204],coord[61]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.011100});
    r.triangle(coord[32],coord[67],coord[198]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.792320});
    r.triangle(coord[43],coord[110],coord[154]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.544213});
    r.triangle(coord[43],coord[110],coord[191]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583562});
    r.triangle(coord[74],coord[192],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.310630});
    r.triangle(coord[98],coord[210],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.341141});
    r.triangle(coord[75],coord[152],coord[143]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.768991});
    r.triangle(coord[181],coord[220],coord[208]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.586567});
    r.triangle(coord[16],coord[26],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258861});
    r.triangle(coord[16],coord[26],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.350461});
    r.triangle(coord[5],coord[211],coord[57]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.822607});
    r.triangle(coord[60],coord[66],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.249012});
    r.triangle(coord[141],coord[175],coord[180]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.142519});
    r.triangle(coord[107],coord[161],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.270415});
    r.triangle(coord[68],coord[145],coord[55]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.178284});
    r.triangle(coord[80],coord[191],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.574628});
    r.triangle(coord[80],coord[191],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.527096});
    r.triangle(coord[27],coord[218],coord[114]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785390});
    r.triangle(coord[128],coord[221],coord[159]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.754564});
    r.triangle(coord[84],coord[119],coord[28]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.154556});
    r.triangle(coord[84],coord[119],coord[46]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.108147});
    r.triangle(coord[102],coord[183],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.510836});
    r.triangle(coord[26],coord[203],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.322024});
    r.triangle(coord[25],coord[182],coord[93]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.577209});
    r.triangle(coord[25],coord[182],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.465476});
    r.triangle(coord[56],coord[59],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.415968});
    r.triangle(coord[71],coord[84],coord[166]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.158509});
    r.triangle(coord[71],coord[167],coord[170]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.259172});
    r.triangle(coord[99],coord[183],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.558066});
    r.triangle(coord[103],coord[161],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.325447});
    r.triangle(coord[54],coord[142],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294802});
    r.triangle(coord[54],coord[142],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.237339});
    r.triangle(coord[121],coord[199],coord[149]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.734552});
    r.triangle(coord[91],coord[128],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.672216});
    r.triangle(coord[34],coord[45],coord[47]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.085241});
    r.triangle(coord[34],coord[45],coord[55]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.100731});
    r.triangle(coord[95],coord[103],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.356214});
    r.triangle(coord[95],coord[140],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.363364});
    r.triangle(coord[95],coord[140],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.325130});
    r.triangle(coord[109],coord[147],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.461933});
    r.triangle(coord[121],coord[149],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.757330});
    r.triangle(coord[127],coord[215],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.512479});
    r.triangle(coord[22],coord[117],coord[113]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.025637});
    r.triangle(coord[19],coord[104],coord[50]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.070136});
    r.triangle(coord[12],coord[105],coord[39]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.035006});
    r.triangle(coord[29],coord[105],coord[39]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.016931});
    r.triangle(coord[29],coord[105],coord[51]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.015125});
    r.triangle(coord[38],coord[100],coord[3]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.071942});
    r.triangle(coord[57],coord[211],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.728550});
    r.triangle(coord[2],coord[42],coord[19]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.025979});
    r.triangle(coord[81],coord[166],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.164874});
    r.triangle(coord[17],coord[79],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.155651});
    r.triangle(coord[17],coord[79],coord[53]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.125890});
    r.triangle(coord[28],coord[96],coord[119]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.175582});
    r.triangle(coord[133],coord[209],coord[19]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.067546});
    r.triangle(coord[133],coord[209],coord[119]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.089664});
    r.triangle(coord[143],coord[191],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.687977});
    r.triangle(coord[143],coord[191],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.690004});
    r.triangle(coord[58],coord[91],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.698767});
    r.triangle(coord[13],coord[131],coord[200]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.213589});
    r.triangle(coord[127],coord[199],coord[169]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.613287});
    r.triangle(coord[157],coord[198],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.793826});
    r.triangle(coord[135],coord[138],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.374255});
    r.triangle(coord[45],coord[158],coord[55]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.141687});
    r.triangle(coord[167],coord[170],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.333710});
    r.triangle(coord[42],coord[50],coord[19]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.042909});
    r.triangle(coord[42],coord[50],coord[126]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.052904});
    r.triangle(coord[57],coord[231],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785714});
    r.triangle(coord[10],coord[194],coord[156]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.434447});
    r.triangle(coord[19],coord[133],coord[101]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.040069});
    r.triangle(coord[59],coord[142],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.354047});
    r.triangle(coord[1],coord[173],coord[3]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.104887});
    r.triangle(coord[131],coord[190],coord[73]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.144191});
    r.triangle(coord[9],coord[116],coord[203]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.272474});
    r.triangle(coord[9],coord[116],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.300883});
    r.triangle(coord[40],coord[158],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.235614});
    r.triangle(coord[40],coord[158],coord[108]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.185457});
    r.triangle(coord[48],coord[156],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.379651});
    r.triangle(coord[48],coord[156],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.364254});
    r.triangle(coord[93],coord[168],coord[25]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.588001});
    r.triangle(coord[38],coord[46],coord[101]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.038715});
    r.triangle(coord[123],coord[190],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.086741});
    r.triangle(coord[78],coord[136],coord[118]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.073868});
    r.triangle(coord[72],coord[146],coord[213]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785405});
    r.triangle(coord[111],coord[214],coord[116]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.428496});
    r.triangle(coord[160],coord[182],coord[65]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.572889});
    r.triangle(coord[14],coord[141],coord[107]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.223285});
    r.triangle(coord[37],coord[172],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.805198});
    r.triangle(coord[56],coord[184],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454803});
    r.triangle(coord[116],coord[203],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.328740});
    r.triangle(coord[17],coord[53],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.147127});
    r.triangle(coord[73],coord[190],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.126062});
    r.triangle(coord[26],coord[139],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.388680});
    r.triangle(coord[81],coord[153],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.200814});
    r.triangle(coord[71],coord[165],coord[166]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.183904});
    r.triangle(coord[58],coord[89],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.616723});
    r.triangle(coord[4],coord[22],coord[29]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.003825});
    r.triangle(coord[68],coord[163],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.264230});
    r.triangle(coord[33],coord[179],coord[9]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.171541});
    r.triangle(coord[33],coord[179],coord[7]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.122796});
    r.triangle(coord[111],coord[116],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.388804});
    r.triangle(coord[33],coord[118],coord[78]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.095157});
    r.triangle(coord[34],coord[47],coord[51]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.051438});
    r.triangle(coord[15],coord[53],coord[79]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.091332});
    r.triangle(coord[121],coord[177],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638117});
    r.triangle(coord[184],coord[193],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.584447});
    r.triangle(coord[184],coord[193],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.492473});
    r.triangle(coord[128],coord[176],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.538933});
    r.triangle(coord[109],coord[163],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.359184});
    r.triangle(coord[18],coord[164],coord[195]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.623560});
    r.triangle(coord[17],coord[60],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.199457});
    r.triangle(coord[17],coord[60],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.197216});
    r.triangle(coord[23],coord[85],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.364142});
    r.triangle(coord[147],coord[206],coord[58]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583881});
    r.triangle(coord[103],coord[169],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.513116});
    r.triangle(coord[107],coord[141],coord[180]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180878});
    r.triangle(coord[36],coord[96],coord[87]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.193319});
    r.triangle(coord[36],coord[96],coord[119]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.155946});
    r.triangle(coord[36],coord[87],coord[122]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.179763});
    r.triangle(coord[52],coord[124],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.550808});
    r.triangle(coord[16],coord[24],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.243107});
    r.triangle(coord[12],coord[123],coord[175]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.071665});
    r.triangle(coord[106],coord[171],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445593});
    r.triangle(coord[106],coord[171],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.463337});
    r.triangle(coord[63],coord[157],coord[52]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.684019});
    r.triangle(coord[30],coord[97],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454533});
    r.triangle(coord[30],coord[97],coord[21]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490576});
    r.triangle(coord[87],coord[98],coord[122]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.231346});
    r.triangle(coord[49],coord[163],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.335741});
    r.triangle(coord[25],coord[188],coord[168]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.498320});
    r.triangle(coord[25],coord[188],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.401923});
    r.triangle(coord[80],coord[110],coord[125]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.435283});
    r.triangle(coord[39],coord[118],coord[11]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.034336});
    r.triangle(coord[1],coord[81],coord[8]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180968});
    r.triangle(coord[94],coord[129],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.664250});
    r.triangle(coord[122],coord[212],coord[104]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.125357});
    r.triangle(coord[122],coord[212],coord[219]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.151711});
    r.triangle(coord[87],coord[137],coord[96]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.250741});
    r.triangle(coord[44],coord[155],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.724111});
    r.triangle(coord[12],coord[39],coord[7]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.053019});
    r.triangle(coord[151],coord[181],coord[154]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.507097});
    r.triangle(coord[41],coord[53],coord[62]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.134822});
    r.triangle(coord[82],coord[138],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.298832});
    r.triangle(coord[69],coord[227],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.406351});
    r.triangle(coord[144],coord[178],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.794435});
    r.triangle(coord[78],coord[134],coord[33]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.140323});
    r.triangle(coord[78],coord[134],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.163600});
    r.triangle(coord[128],coord[206],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.543735});
    r.triangle(coord[18],coord[114],coord[195]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.749427});
    r.triangle(coord[152],coord[195],coord[164]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.634404});
    r.triangle(coord[24],coord[26],coord[134]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.225203});
    r.triangle(coord[85],coord[97],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.523252});
    r.triangle(coord[95],coord[177],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.428735});
    r.triangle(coord[86],coord[94],coord[184]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.558007});
    r.triangle(coord[9],coord[134],coord[33]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.179517});
    r.triangle(coord[38],coord[112],coord[3]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.059510});
    r.triangle(coord[49],coord[109],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445380});
    r.triangle(coord[41],coord[62],coord[54]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.181432});
    r.triangle(coord[1],coord[55],coord[145]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.156432});
    r.triangle(coord[74],coord[116],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.396529});
    r.triangle(coord[25],coord[120],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380413});
    r.triangle(coord[29],coord[76],coord[4]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.000104});
  }
  // ========== Sphere 2 ==========
  function sphere2(r, coord, blue, dark_gray) {
    r.triangle(coord[177],coord[196],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445551});
    r.triangle(coord[177],coord[196],coord[148]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.529562});
    r.triangle(coord[20],coord[174],coord[229]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.737563});
    r.triangle(coord[183],coord[229],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.570243});
    r.triangle(coord[183],coord[229],coord[174]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.672501});
    r.triangle(coord[201],coord[232],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.482893});
    r.triangle(coord[201],coord[232],coord[52]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.529008});
    r.triangle(coord[69],coord[229],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.543148});
    r.triangle(coord[88],coord[192],coord[179]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.216424});
    r.triangle(coord[88],coord[192],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.265657});
    r.triangle(coord[98],coord[226],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.357290});
    r.triangle(coord[98],coord[226],coord[115]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.292515});
    r.triangle(coord[30],coord[210],coord[137]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.344452});
    r.triangle(coord[30],coord[210],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.374158});
    r.triangle(coord[164],coord[228],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.552943});
    r.triangle(coord[164],coord[228],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.474705});
    r.triangle(coord[28],coord[224],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.229908});
    r.triangle(coord[28],coord[224],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.186918});
    r.triangle(coord[13],coord[40],coord[233]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258660});
    r.triangle(coord[13],coord[40],coord[108]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.201529});
    r.triangle(coord[109],coord[233],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380155});
    r.triangle(coord[109],coord[233],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.322737});
    r.triangle(coord[82],coord[227],coord[8]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.316375});
    r.triangle(coord[82],coord[227],coord[102]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.376518});
    r.triangle(coord[129],coord[216],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.791622});
    r.triangle(coord[54],coord[187],coord[219]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.230692});
    r.triangle(coord[54],coord[187],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.285967});
    r.triangle(coord[16],coord[125],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.295777});
    r.triangle(coord[16],coord[125],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.366351});
    r.triangle(coord[28],coord[197],coord[23]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.254868});
    r.triangle(coord[196],coord[214],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.448347});
    r.triangle(coord[196],coord[214],coord[148]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.533111});
    r.triangle(coord[129],coord[150],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.803581});
    r.triangle(coord[97],coord[211],coord[155]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638620});
    r.triangle(coord[97],coord[211],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.616987});
    r.triangle(coord[67],coord[231],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.760509});
    r.triangle(coord[107],coord[162],coord[161]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.265993});
    r.triangle(coord[107],coord[162],coord[180]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.203651});
    r.triangle(coord[147],coord[225],coord[89]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.542179});
    r.triangle(coord[147],coord[225],coord[31]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.434697});
    r.triangle(coord[37],coord[159],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.736505});
    r.triangle(coord[37],coord[159],coord[221]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.836562});
    r.triangle(coord[115],coord[122],coord[219]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.191422});
    r.triangle(coord[115],coord[122],coord[98]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.228321});
    r.triangle(coord[99],coord[232],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.544622});
    r.triangle(coord[99],coord[232],coord[132]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.639089});
    r.triangle(coord[77],coord[124],coord[217]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.427264});
    r.triangle(coord[77],coord[124],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.515235});
    r.triangle(coord[134],coord[203],coord[26]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.253317});
    r.triangle(coord[134],coord[203],coord[9]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.230655});
    r.triangle(coord[102],coord[135],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.491289});
    r.triangle(coord[102],coord[135],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.405872});
    r.triangle(coord[121],coord[169],coord[199]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.626500});
    r.triangle(coord[121],coord[169],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.563113});
    r.triangle(coord[65],coord[83],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.407631});
    r.triangle(coord[65],coord[83],coord[215]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.463384});
    r.triangle(coord[120],coord[200],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.270785});
    r.triangle(coord[120],coord[200],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.262294});
    r.triangle(coord[23],coord[197],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.315511});
    r.triangle(coord[70],coord[154],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.459052});
    r.triangle(coord[70],coord[154],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.435491});
    r.triangle(coord[90],coord[215],coord[160]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638785});
    r.triangle(coord[90],coord[215],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.602744});
    r.triangle(coord[152],coord[228],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.540315});
    r.triangle(coord[150],coord[220],coord[205]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.809575});
    r.triangle(coord[95],coord[169],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454273});
    r.triangle(coord[95],coord[169],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.488766});
    r.triangle(coord[148],coord[218],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.690119});
    r.triangle(coord[148],coord[218],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606774});
    r.triangle(coord[68],coord[158],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.229349});
    r.triangle(coord[30],coord[137],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.378023});
    r.triangle(coord[27],coord[148],coord[177]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.627320});
    r.triangle(coord[108],coord[131],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.181664});
    r.triangle(coord[115],coord[219],coord[187]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222379});
    r.triangle(coord[93],coord[207],coord[168]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.694335});
    r.triangle(coord[64],coord[159],coord[176]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.624389});
    r.triangle(coord[115],coord[187],coord[226]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.280038});
    r.triangle(coord[138],coord[170],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.285194});
    r.triangle(coord[138],coord[170],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.355813});
    r.triangle(coord[168],coord[225],coord[89]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.588882});
    r.triangle(coord[168],coord[225],coord[188]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.510240});
    r.triangle(coord[40],coord[233],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.273542});
    r.triangle(coord[65],coord[189],coord[182]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.458138});
    r.triangle(coord[130],coord[160],coord[182]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.673655});
    r.triangle(coord[52],coord[132],coord[232]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.614631});
    r.triangle(coord[52],coord[132],coord[157]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.709504});
    r.triangle(coord[89],coord[168],coord[207]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.679367});
    r.triangle(coord[20],coord[172],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.766316});
    r.triangle(coord[8],coord[153],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.277359});
    r.triangle(coord[8],coord[153],coord[81]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.214784});
    r.triangle(coord[139],coord[228],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.462610});
    r.triangle(coord[143],coord[213],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.771386});
    r.triangle(coord[83],coord[161],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380050});
    r.triangle(coord[83],coord[161],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.328644});
    r.triangle(coord[138],coord[201],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.414899});
    r.triangle(coord[138],coord[201],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.417029});
    r.triangle(coord[111],coord[164],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454299});
    r.triangle(coord[111],coord[164],coord[18]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.521518});
    r.triangle(coord[8],coord[227],coord[202]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.296095});
    r.triangle(coord[65],coord[215],coord[160]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.560332});
    r.triangle(coord[31],coord[233],coord[13]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294858});
    r.triangle(coord[31],coord[233],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.367438});
    r.triangle(coord[70],coord[125],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.326497});
    r.triangle(coord[70],coord[125],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.406381});
    r.triangle(coord[18],coord[218],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606898});
    r.triangle(coord[18],coord[218],coord[114]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.719481});
    r.triangle(coord[144],coord[199],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.732899});
    r.triangle(coord[144],coord[199],coord[149]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.834436});
    r.triangle(coord[165],coord[170],coord[71]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.237000});
    r.triangle(coord[90],coord[160],coord[178]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.762624});
    r.triangle(coord[9],coord[192],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.280876});
    r.triangle(coord[9],coord[192],coord[179]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.218617});
    r.triangle(coord[48],coord[145],coord[202]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.266118});
    r.triangle(coord[48],coord[145],coord[68]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.242882});
    r.triangle(coord[146],coord[205],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.770496});
    r.triangle(coord[66],coord[70],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.318265});
    r.triangle(coord[66],coord[70],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.375863});
    r.triangle(coord[52],coord[201],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490533});
    r.triangle(coord[167],coord[217],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.363405});
    r.triangle(coord[167],coord[217],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.309503});
    r.triangle(coord[77],coord[217],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.408253});
    r.triangle(coord[137],coord[210],coord[87]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.287723});
    r.triangle(coord[71],coord[224],coord[84]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.189284});
    r.triangle(coord[71],coord[224],coord[167]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.236752});
    r.triangle(coord[106],coord[217],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.341096});
    r.triangle(coord[145],coord[202],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.210372});
    r.triangle(coord[72],coord[154],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.592471});
    r.triangle(coord[72],coord[154],coord[181]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.580185});
    r.triangle(coord[69],coord[194],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.460144});
    r.triangle(coord[21],coord[155],coord[97]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583090});
    r.triangle(coord[21],coord[155],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.606787});
    r.triangle(coord[18],coord[214],coord[111]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.527305});
    r.triangle(coord[91],coord[221],coord[128]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.795356});
    r.triangle(coord[159],coord[176],coord[128]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.635306});
    r.triangle(coord[151],coord[208],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.413504});
    r.triangle(coord[151],coord[208],coord[181]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.496804});
    r.triangle(coord[31],coord[188],coord[225]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.421331});
    r.triangle(coord[31],coord[188],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.355454});
    r.triangle(coord[35],coord[193],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.696694});
    r.triangle(coord[35],coord[193],coord[44]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.767177});
    r.triangle(coord[35],coord[94],coord[216]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.793155});
    r.triangle(coord[87],coord[210],coord[98]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.282063});
    r.triangle(coord[86],coord[208],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.450585});
    r.triangle(coord[86],coord[208],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.564991});
    r.triangle(coord[129],coord[220],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.671910});
    r.triangle(coord[89],coord[222],coord[58]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.756904});
    r.triangle(coord[89],coord[222],coord[207]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.767977});
    r.triangle(coord[88],coord[162],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.262234});
    r.triangle(coord[43],coord[213],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.706474});
    r.triangle(coord[13],coord[31],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294718});
    r.triangle(coord[8],coord[202],coord[1]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222822});
    r.triangle(coord[14],coord[189],coord[83]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.342580});
    r.triangle(coord[14],coord[189],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.311731});
    r.triangle(coord[64],coord[194],coord[176]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.563405});
    r.triangle(coord[64],coord[194],coord[20]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.634425});
    r.triangle(coord[21],coord[185],coord[30]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.443597});
    r.triangle(coord[21],coord[185],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.515271});
    r.triangle(coord[83],coord[215],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.448062});
    r.triangle(coord[73],coord[200],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.222807});
    r.triangle(coord[73],coord[200],coord[131]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.189072});
    r.triangle(coord[5],coord[155],coord[211]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.737755});
    r.triangle(coord[5],coord[155],coord[44]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.809746});
    r.triangle(coord[73],coord[141],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.203364});
    r.triangle(coord[156],coord[176],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.460672});
    r.triangle(coord[156],coord[176],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490942});
    r.triangle(coord[23],coord[96],coord[137]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.273080});
    r.triangle(coord[23],coord[96],coord[28]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.233685});
    r.triangle(coord[23],coord[137],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.342865});
    r.triangle(coord[174],coord[223],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.736084});
    r.triangle(coord[167],coord[224],coord[197]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258829});
    r.triangle(coord[130],coord[182],coord[93]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.667693});
    r.triangle(coord[6],coord[171],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.520361});
    r.triangle(coord[6],coord[171],coord[67]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.648435});
    r.triangle(coord[10],coord[202],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.314304});
    r.triangle(coord[10],coord[202],coord[227]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.331636});
    r.triangle(coord[99],coord[223],coord[186]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.779692});
    r.triangle(coord[99],coord[223],coord[183]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.680933});
    r.triangle(coord[132],coord[186],coord[99]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.747971});
    r.triangle(coord[102],coord[227],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.431376});
    r.triangle(coord[82],coord[153],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.261469});
    r.triangle(coord[75],coord[195],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.753514});
    r.triangle(coord[66],coord[142],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.343186});
    r.triangle(coord[66],coord[142],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.261133});
    r.triangle(coord[32],coord[63],coord[198]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.726712});
    r.triangle(coord[32],coord[63],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.590233});
    r.triangle(coord[20],coord[229],coord[194]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.627891});
    r.triangle(coord[184],coord[226],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.412147});
    r.triangle(coord[184],coord[226],coord[56]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.398421});
    r.triangle(coord[181],coord[205],coord[220]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.702904});
    r.triangle(coord[181],coord[205],coord[72]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.679957});
    r.triangle(coord[32],coord[171],coord[67]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.667033});
    r.triangle(coord[32],coord[171],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.555371});
    r.triangle(coord[56],coord[187],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.326629});
    r.triangle(coord[56],coord[187],coord[226]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.330223});
    r.triangle(coord[90],coord[178],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.716610});
    r.triangle(coord[32],coord[67],coord[198]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.792320});
    r.triangle(coord[43],coord[110],coord[154]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.544213});
    r.triangle(coord[43],coord[110],coord[191]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583562});
    r.triangle(coord[74],coord[192],coord[140]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.310630});
    r.triangle(coord[98],coord[210],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.341141});
    r.triangle(coord[75],coord[152],coord[143]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.768991});
    r.triangle(coord[181],coord[220],coord[208]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.586567});
    r.triangle(coord[16],coord[26],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.258861});
    r.triangle(coord[16],coord[26],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.350461});
    r.triangle(coord[5],coord[211],coord[57]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.822607});
    r.triangle(coord[60],coord[66],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.249012});
    r.triangle(coord[107],coord[161],coord[14]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.270415});
    r.triangle(coord[80],coord[191],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.574628});
    r.triangle(coord[80],coord[191],coord[110]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.527096});
    r.triangle(coord[27],coord[218],coord[114]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785390});
    r.triangle(coord[128],coord[221],coord[159]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.754564});
    r.triangle(coord[102],coord[183],coord[69]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.510836});
    r.triangle(coord[26],coord[203],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.322024});
    r.triangle(coord[25],coord[182],coord[93]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.577209});
    r.triangle(coord[25],coord[182],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.465476});
    r.triangle(coord[56],coord[59],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.415968});
    r.triangle(coord[71],coord[167],coord[170]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.259172});
    r.triangle(coord[99],coord[183],coord[135]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.558066});
    r.triangle(coord[103],coord[161],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.325447});
    r.triangle(coord[54],coord[142],coord[59]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.294802});
    r.triangle(coord[54],coord[142],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.237339});
    r.triangle(coord[121],coord[199],coord[149]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.734552});
    r.triangle(coord[91],coord[128],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.672216});
    r.triangle(coord[95],coord[103],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.356214});
    r.triangle(coord[95],coord[140],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.363364});
    r.triangle(coord[95],coord[140],coord[162]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.325130});
    r.triangle(coord[109],coord[147],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.461933});
    r.triangle(coord[121],coord[149],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.757330});
    r.triangle(coord[127],coord[215],coord[103]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.512479});
    r.triangle(coord[57],coord[211],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.728550});
    r.triangle(coord[143],coord[191],coord[152]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.687977});
    r.triangle(coord[143],coord[191],coord[43]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.690004});
    r.triangle(coord[58],coord[91],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.698767});
    r.triangle(coord[13],coord[131],coord[200]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.213589});
    r.triangle(coord[127],coord[199],coord[169]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.613287});
    r.triangle(coord[157],coord[198],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.793826});
    r.triangle(coord[135],coord[138],coord[82]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.374255});
    r.triangle(coord[167],coord[170],coord[124]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.333710});
    r.triangle(coord[57],coord[231],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785714});
    r.triangle(coord[10],coord[194],coord[156]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.434447});
    r.triangle(coord[59],coord[142],coord[151]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.354047});
    r.triangle(coord[9],coord[116],coord[203]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.272474});
    r.triangle(coord[9],coord[116],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.300883});
    r.triangle(coord[40],coord[158],coord[163]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.235614});
    r.triangle(coord[40],coord[158],coord[108]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.185457});
    r.triangle(coord[48],coord[156],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.379651});
    r.triangle(coord[48],coord[156],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.364254});
    r.triangle(coord[93],coord[168],coord[25]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.588001});
    r.triangle(coord[72],coord[146],coord[213]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.785405});
    r.triangle(coord[111],coord[214],coord[116]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.428496});
    r.triangle(coord[160],coord[182],coord[65]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.572889});
    r.triangle(coord[14],coord[141],coord[107]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.223285});
    r.triangle(coord[37],coord[172],coord[64]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.805198});
    r.triangle(coord[56],coord[184],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454803});
    r.triangle(coord[116],coord[203],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.328740});
    r.triangle(coord[26],coord[139],coord[80]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.388680});
    r.triangle(coord[81],coord[153],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.200814});
    r.triangle(coord[58],coord[89],coord[147]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.616723});
    r.triangle(coord[68],coord[163],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.264230});
    r.triangle(coord[111],coord[116],coord[139]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.388804});
    r.triangle(coord[121],coord[177],coord[27]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.638117});
    r.triangle(coord[184],coord[193],coord[94]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.584447});
    r.triangle(coord[184],coord[193],coord[185]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.492473});
    r.triangle(coord[128],coord[176],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.538933});
    r.triangle(coord[109],coord[163],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.359184});
    r.triangle(coord[18],coord[164],coord[195]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.623560});
    r.triangle(coord[17],coord[60],coord[24]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.199457});
    r.triangle(coord[17],coord[60],coord[41]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.197216});
    r.triangle(coord[23],coord[85],coord[106]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.364142});
    r.triangle(coord[147],coord[206],coord[58]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.583881});
    r.triangle(coord[103],coord[169],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.513116});
    r.triangle(coord[107],coord[141],coord[180]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180878});
    r.triangle(coord[36],coord[96],coord[87]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.193319});
    r.triangle(coord[36],coord[87],coord[122]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.179763});
    r.triangle(coord[52],coord[124],coord[63]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.550808});
    r.triangle(coord[16],coord[24],coord[60]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.243107});
    r.triangle(coord[106],coord[171],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445593});
    r.triangle(coord[106],coord[171],coord[77]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.463337});
    r.triangle(coord[63],coord[157],coord[52]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.684019});
    r.triangle(coord[30],coord[97],coord[85]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.454533});
    r.triangle(coord[30],coord[97],coord[21]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.490576});
    r.triangle(coord[87],coord[98],coord[122]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.231346});
    r.triangle(coord[49],coord[163],coord[48]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.335741});
    r.triangle(coord[25],coord[188],coord[168]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.498320});
    r.triangle(coord[25],coord[188],coord[120]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.401923});
    r.triangle(coord[80],coord[110],coord[125]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.435283});
    r.triangle(coord[1],coord[81],coord[8]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180968});
    r.triangle(coord[94],coord[129],coord[86]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.664250});
    r.triangle(coord[87],coord[137],coord[96]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.250741});
    r.triangle(coord[44],coord[155],coord[193]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.724111});
    r.triangle(coord[151],coord[181],coord[154]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.507097});
    r.triangle(coord[82],coord[138],coord[165]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.298832});
    r.triangle(coord[69],coord[227],coord[10]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.406351});
    r.triangle(coord[144],coord[178],coord[127]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.794435});
    r.triangle(coord[128],coord[206],coord[49]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.543735});
    r.triangle(coord[18],coord[114],coord[195]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.749427});
    r.triangle(coord[152],coord[195],coord[164]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.634404});
    r.triangle(coord[24],coord[26],coord[134]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.225203});
    r.triangle(coord[85],coord[97],coord[6]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.523252});
    r.triangle(coord[95],coord[177],coord[74]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.428735});
    r.triangle(coord[86],coord[94],coord[184]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.558007});
    r.triangle(coord[49],coord[109],coord[206]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.445380});
    r.triangle(coord[74],coord[116],coord[214]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.396529});
    r.triangle(coord[25],coord[120],coord[189]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.380413});
    r.triangle(coord[68],coord[158],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.189487});
    r.triangle(coord[108],coord[131],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.276710});
    r.triangle(coord[88],coord[179],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.375546});
    r.triangle(coord[88],coord[162],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180908});
    r.triangle(coord[73],coord[141],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.220588});
    r.triangle(coord[68],coord[145],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.190718});
    r.triangle(coord[54],coord[219],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.346537});
    r.triangle(coord[71],coord[84],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.413475});
    r.triangle(coord[28],coord[96],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.185861});
    r.triangle(coord[71],coord[165],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.180539});
    r.triangle(coord[73],coord[131],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.221595});
    r.triangle(coord[9],coord[179],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.318090});
    r.triangle(coord[36],coord[96],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.392888});
    r.triangle(coord[28],coord[84],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.313500});
    r.triangle(coord[1],coord[81],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.250075});
    r.triangle(coord[17],coord[24],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.237712});
    r.triangle(coord[17],coord[41],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.228534});
    r.triangle(coord[141],coord[180],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.280848});
    r.triangle(coord[122],coord[219],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.212010});
    r.triangle(coord[9],coord[134],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.199973});
    r.triangle(coord[81],coord[165],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.342749});
    r.triangle(coord[41],coord[54],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.252387});
    r.triangle(coord[24],coord[134],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.193846});
    r.triangle(coord[108],coord[158],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.291573});
    r.triangle(coord[36],coord[122],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.252079});
    r.triangle(coord[1],coord[145],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.382650});
    r.triangle(coord[162],coord[180],coord[0]).attr({fill: blue, stroke: dark_gray, 'fill-opacity': 0.596247});
  }
  // ========== Slide 1 ==========
  (function(){
    var r = Raphael("d1", width, height = $("#d1").data('height'));
    var coord = [];
    var n = 8;
    // for (i = 0; i < n; i++) {
    //   coord.push([Math.random(), Math.random()]);
    // }
    coord = [[0.5413140002638102,0.8801555086392909],[0.11300084949471056,0.475876459851861],[0.07273891405202448,0.6087481593713164],[0.4963881524745375,0.9649955288041383],[0.7454210016876459,0.9555765483528376],[0.06737982807680964,0.8998979688622057],[0.9826808767393231,0.7158342872280627],[0.5105823655612767,0.8523080768063664]];
    // console.log(coord);
    coord = normalize(coord, width, height, 8, 8);
    // =========== draw triangles ==========
    var tri = [];
    for (i = 0; i < n; i++) {
      for (j = i + 1; j < n; j++) {
        for (k = j + 1; k < n; k++) {
          tri.push(r.triangle(coord[i],coord[j],coord[k]).attr({fill: blue, 'fill-opacity': 0.03, stroke: 'none'}).attr({opacity: 0}));
        }
      }
    }
    for (i = 0; i < n; i++) {
      r.point(coord[i],gray);
    }
    // =========== animation ==========
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d1' && $(r).data('step') == undefined) {
        tri.forEach(function(t){
          t.animate({opacity: 1},400);
        });
        $(r).data('step', 'stop');
      }
    });
  })();
  // ========== Slide 3 ==========
  (function(){
    var r = Raphael("d2", width, height = $("#d2").data('height'));
    var coord = []
    var n = 3;
    // for (i = 0; i < 3*n; i++) {
    //   coord.push([Math.random(),Math.random()]);
    // }
    // console.log(coord);
    coord = [[88, 33], [33, 90], [49, 31], [0, 93], [40, 38], [68, 26], [92, 64], [6, 83], [48, 38], [40, 58]];
    coord = normalize(coord, width, height, 8, 8);
    var redc = coord.splice(0,n), 
        greenc = coord.splice(0,n),
        bluec = coord.splice(0,n),
        record = coord.pop();
    // console.log(redcoord, greencoord, bluecoord);
    var tri = [];
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        for (k = 0; k < n; k++) {
          tri.push(r.triangle(redc[i],greenc[j],bluec[k]).attr({fill: blue, 'fill-opacity': 0.05, stroke: 'none'}).attr({opacity: 0}));
        }
      }
    }
    var recordPt = r.point(record, gray).attr({opacity: 0});
    redc.forEach(function(c){
      r.point(c,red);
    });
    greenc.forEach(function(c){
      r.point(c,green);
    });
    bluec.forEach(function(c){
      r.point(c,blue);
    });
    // =========== animation ==========
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      var $div = $('#d2');
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d2' && $div.data('step') == undefined) {
        [2, 4, 7, 11, 12, 14, 16, 18].forEach(function(i){
          tri[i].animate({opacity: 1},400);
          recordPt.animate({opacity: 1},400);
        });
        $div.data('step', 'stop');
      }
    });    
  })();
  // ========== Slide 5 ==========
  (function(){
    var r = Raphael("d3", 200, 250);
    r.path("M0 220L150 220L200 150L50 150Z").attr({fill: blue, 'fill-opacity': 0.1, stroke: gray, 'stroke-width': 2});
    r.point([100, 50], gray);
    var r = Raphael("d4", 200, 250);
    r.ellipse(100, 148, 98, 98).attr({fill: blue, 'fill-opacity': 0.1, stroke: gray, 'stroke-width': 2});
    r.ellipse(100, 148, 98, 40).attr({stroke: gray, 'stroke-width': 2});
    r.point([100, 50], gray);
  })();
  // ========== Slide 5-1 5-2 5-3 ==========
  (function(){
    var delta = 100;
    var r1 = Raphael("d5", (width-delta) / 2, height = $("#d5").data('height'));
    var coord = [[0.000000, 0.000000], [-0.556143, 0.292089], [-0.062101, -0.182003], [-0.529667, 0.065896], [-0.167333, -0.015117], [-0.435283, -0.899465], [-0.699072, -0.681168], [0.460636, 0.199219], [-0.742850, 0.287090], [0.749833, 0.117224], [-0.747065, 0.473703], [0.277487, -0.078969], [0.273609, 0.327573], [-0.058801, 0.770018], [0.324800, 0.729321], [0.341647, -0.258545], [0.713456, -0.409011], [0.499088, -0.434169], [0.976010, 0.019217], [-0.155636, -0.380265], [-0.893688, 0.440627], [-0.284612, -0.913600], [-0.131636, 0.161564], [-0.557140, -0.606596], [0.638874, -0.304251], [0.180587, 0.920839], [0.782629, -0.268825], [0.954807, 0.285584], [-0.564164, -0.445233], [0.083960, 0.103990], [-0.412335, -0.798862], [-0.076021, 0.853858], [-0.855388, -0.488573], [0.584921, 0.070488], [-0.194771, 0.418700], [-0.037897, -0.996546], [-0.301314, -0.555288], [-0.728580, 0.684851], [-0.357133, -0.035533], [0.260014, 0.138738], [-0.183144, 0.729806], [0.368368, -0.589898], [0.070972, -0.275349], [0.762912, -0.619782], [-0.249837, -0.968284], [-0.218588, 0.552866], [-0.395105, -0.199426], [-0.016217, 0.456979], [-0.581115, 0.593184], [-0.513156, 0.753698], [0.017571, -0.425965], [-0.057754, 0.274567], [-0.957824, -0.155456], [0.343957, -0.428229], [0.226765, -0.740707], [-0.379535, 0.427578], [0.108345, -0.873052], [-0.609073, -0.793112], [-0.300900, 0.948645], [0.260425, -0.830183], [0.560389, -0.549771], [0.199595, -0.222558], [0.163310, -0.577600], [-0.919120, -0.349423], [-0.781324, 0.594774], [0.424434, 0.825837], [0.510834, -0.672601], [-0.815093, -0.577118], [-0.442241, 0.574291], [-0.865640, 0.381908], [0.623015, -0.638807], [-0.695726, -0.212577], [0.654488, -0.731965], [0.196755, 0.642150], [0.834026, 0.263392], [0.955164, -0.293801], [0.067729, -0.141070], [-0.860282, -0.370562], [0.551616, -0.140519], [0.508827, -0.282913], [0.850736, -0.393041], [-0.629952, 0.114042], [-0.842527, 0.144612], [0.514877, 0.741869], [-0.575234, -0.271921], [-0.590241, -0.696256], [0.249489, -0.927556], [-0.294873, -0.697865], [0.664571, 0.346168], [-0.139685, 0.974736], [0.545311, 0.823170], [-0.452163, 0.889490], [0.532707, 0.308095], [0.141526, 0.980105], [0.084174, -0.984403], [0.761613, 0.499522], [-0.461123, -0.572785], [-0.498228, -0.823615], [-0.174110, -0.810369], [-0.981049, 0.078556], [-0.493850, -0.092709], [-0.208964, -0.142972], [-0.902696, 0.198015], [0.660503, 0.623328], [-0.180795, -0.521188], [0.137568, 0.254498], [-0.715834, -0.528532], [0.508750, 0.559713], [-0.107360, 0.617616], [-0.315857, 0.823527], [0.760253, -0.560757], [0.925787, -0.010479], [-0.358407, 0.180858], [-0.256456, 0.301743], [0.998167, 0.058521], [-0.012372, -0.744817], [0.845538, 0.041599], [-0.266660, 0.072596], [0.428296, 0.064531], [-0.457612, -0.371147], [0.113647, 0.830494], [0.845901, 0.499378], [-0.105576, -0.671834], [0.096234, 0.390889], [-0.887076, -0.243981], [0.687552, -0.523047], [0.200244, -0.459852], [0.662204, 0.715850], [-0.556857, 0.814995], [0.260484, -0.962421], [0.297703, 0.948594], [0.016008, 0.668846], [-0.988639, -0.085125], [-0.298708, -0.289349], [0.708278, -0.088345], [-0.920473, 0.063083], [0.402844, -0.121306], [-0.452600, -0.711659], [-0.868576, -0.053231], [0.880418, -0.196171], [0.741969, 0.400971], [0.340176, 0.602084], [0.373630, -0.730537], [0.854947, -0.515995], [0.735949, 0.677036], [-0.571609, 0.490739], [0.642738, -0.765813], [-0.233443, 0.903986], [0.941241, 0.258537], [0.880733, 0.472571], [0.367250, -0.930121], [0.468759, -0.785251], [0.928123, -0.321215], [-0.751781, 0.151019], [0.657203, -0.679821], [-0.353696, -0.921200], [-0.657614, 0.632918], [-0.970579, -0.237749], [-0.320316, 0.636978], [-0.700765, 0.698767], [0.426569, 0.895736], [0.548825, 0.646772], [0.613943, 0.480028], [-0.419342, 0.707565], [0.940699, -0.135237], [-0.747083, -0.041848], [-0.604238, -0.045739], [-0.760535, -0.304465], [-0.007882, 0.974443], [0.777497, 0.558241], [-0.803414, -0.141803], [-0.775402, -0.565687], [-0.837555, 0.546262], [-0.408434, 0.299737], [-0.944646, 0.323870], [0.278171, 0.497445], [-0.647441, 0.708986], [0.880634, 0.363169], [0.583381, 0.812161], [0.633664, 0.230878], [0.445739, 0.435512], [0.498107, -0.839604], [0.310896, 0.915522], [-0.946576, 0.223947], [-0.011324, -0.932881], [-0.241980, -0.871531], [-0.999453, 0.026271], [0.104760, -0.788612], [0.000865, 0.914044], [0.336149, 0.810710], [0.084022, 0.542997], [0.857167, -0.469615], [0.746987, 0.255597], [-0.099854, -0.973665], [-0.800957, 0.511871], [0.984835, -0.151380], [0.899463, 0.246474], [-0.633876, -0.496498], [-0.919164, -0.393701], [0.768506, 0.626457], [0.165227, 0.748855], [-0.924220, -0.096881], [-0.683762, 0.422129], [0.793515, -0.114777], [0.152161, -0.010377], [0.531139, -0.844715], [-0.392025, 0.881214], [0.019112, 0.996977], [0.352949, -0.863395], [-0.301560, -0.441328], [-0.324921, -0.780053], [-0.533703, -0.833743], [0.012518, -0.553479], [0.774395, -0.631604], [0.945678, 0.139598], [0.537034, 0.791740], [0.151015, -0.988520], [-0.785793, -0.402047], [0.978129, 0.144751], [0.104476, -0.689057], [0.385495, -0.912566], [-0.566586, 0.823997], [-0.172197, 0.984574], [-0.982193, 0.177650], [-0.653852, -0.350607], [-0.113378, 0.943680], [-0.095196, -0.874444], [-0.827055, 0.274195], [0.912426, -0.264618], [-0.914278, 0.348806], [0.407290, 0.323747], [-0.732191, -0.680559], [-0.961823, -0.015271], [-0.207829, 0.810695]];
    coord = normalize(coord, (width-delta) / 2, height, 0, 0);
    sphere1(r1, coord, blue, dark_gray);
    var r2 = Raphael("d6", (width-delta) / 2, height = $("#d6").data('height'));
    sphere2(r2, coord, blue, dark_gray);

    var delta = 300;    
    var r3 = Raphael("d7", (width-delta) / 2, height = $("#d7").data('height'));
    coord = normalize(coord, (width-delta) / 2, height, 0, 0);
    sphere2(r3, coord, blue, 'none');
    var r4 = Raphael("d8", (width-delta) / 2, height = $("#d8").data('height'));
    sphere1(r4, coord, blue, 'none');
  })();
  // ========== Slide 5-4 ==========
  (function(){
    // =========== d9 ==========
    var width1 = 200;
    var r1 = Raphael("d9", width1+10, (height = $("#d9").data('height'))+20);
    var sx = width1/2, sy = height/2+60;
    // =========== correspondence ===========
    var crsp1 = [[90, 96],[70, 170],[60,216],[50,260],[34,334],[70,334],[100,334],[130,334],[166,334],[150,260],[140,216],[130,170],[110,96]],
        crsp2 = [[250, 30],[250,180],[250,280],[250,460],[250,1400],[150,400],[190,400],[240,400],[250,370],[250,260],[250,190],[250,60],[120,30]],
        crsp3 = [[204,80],[158,183],[134,224],[112,272],[84,334],[120,334],[150,334],[180,334],[216,334],[166,226],[150,190],[128,146],[100,80]];
    var vset1 = [], vset2 = [];
    crsp1.forEach(function(c){
      vset1.push(r1.path('M'+sx+' '+sy+'L'+c[0]+' '+c[1]).attr({fill: 'none', stroke: blue, opacity: 0, 'stroke-width': '6px', 'stroke-linecap': 'round'}));
    });
    var block1 = r1.path('M32 '+(height-16)+'L'+(width1-32)+' '+(height-16)+'L'+(width1/2)+' 44Z').attr({fill: blue, opacity: 0, stroke: 'none'});

    // ======================================
    r1.path('M32 '+(height-16)+'L'+(width1-32)+' '+(height-16)+'L'+(width1/2)+' 44Z').attr({fill: 'none', stroke: gray, 'stroke-width': '6px', 'stroke-linejoin': 'round'});
    r1.text(12, height-16, 'P').attr({'font-size': 32, 'fill': gray});
    r1.text(width1-12, height-16, 'Q').attr({'font-size': 32, 'fill': gray});
    r1.text(width1/2-20, 44, 'O').attr({'font-size': 32, 'fill': gray});
    var ts = r1.text(sx, sy-30, 'S').attr({'font-size': 32, 'fill': gray, opacity: 0});
    var cs = r1.circle(sx, sy, 6).attr({'fill': gray, stroke: 'none', opacity: 0});
    // =========== d10 ==========
    var width2 = 200, o2 = 50;
    var r2 = Raphael("d10", width2+o2*2, (height = $("#d10").data('height'))+20);
    var tx = 60, ty = height/2+16;
    crsp2.forEach(function(c,i){
      vset2.push(r2.path('M'+crsp3[i][0]+' '+crsp3[i][1]+'L'+c[0]+' '+c[1]).attr({fill: 'none', stroke: blue, opacity: 0, 'stroke-width': '6px', 'stroke-linecap': 'round'}));
    });
    var block2 = r2.path('M84 334L90 364L260 364L260 20L230 20Z').attr({fill: blue, opacity: 0, stroke: 'none'});
    var block3 = r2.path('M84 334L90 364L260 364L260 20L70 20L220 334Z').attr({fill: blue, opacity: 0, stroke: 'none'});
    r2.path('M'+(o2+width2-32)+' 44L82 '+(height-16)+'L'+(o2+width2-32)+' '+(height-16)+'L82 44').attr({fill: 'none', stroke: gray, 'stroke-width': '6px', 'stroke-linejoin': 'round', 'stroke-linecap': 'round'});
    r2.text(12+o2, height-16, 'P').attr({'font-size': 32, 'fill': gray});
    r2.text(width2-12+o2, height-16, 'Q').attr({'font-size': 32, 'fill': gray});
    r2.text(width2/2+o2,100,'A').attr({'font-size': 32, 'fill': gray});
    r2.text(width2/2+o2,280,'A').attr({'font-size': 32, 'fill': gray});
    var b1 = r2.text(o2*2,190,'B').attr({'font-size': 32, 'fill': gray});
    var b2 = r2.text(width2,190,'B').attr({'font-size': 32, 'fill': gray});
    var tt = r2.text(tx, ty-30, 'T').attr({'font-size': 32, 'fill': gray, opacity: 0});
    var ct = r2.circle(tx, ty, 6).attr({'fill': gray, stroke: 'none', opacity: 0});
    // =========== d11 ==========
    o2 = 10;
    var r3 = Raphael("d11", width2+o2*2, (height = $("#d11").data('height'))+20);
    r3.triangle([42,height-16], [o2+width2-32, height-16], [width2/2+o2,height/2+13]).attr({fill: blue, 'fill-opacity':0.3, stroke: 'none'});
    r3.triangle([width2-8,16], [28, 16], [width2/2+o2,height/2+13]).attr({fill: blue, 'fill-opacity':0.4, stroke: 'none'});
    r3.path('M'+(o2+width2-32)+' 44L42 '+(height-16)+'L'+(o2+width2-32)+' '+(height-16)+'L42 44').attr({fill: 'none', stroke: gray, 'stroke-width': '6px', 'stroke-linejoin': 'round', 'stroke-linecap': 'round'});
    // =========== animation ==========
    Reveal.addEventListener('fragmentshown', function(event){
      var f = $(event.fragment);
      var $div = $('#d9');
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d9' && $div.data('step') == undefined) {
        $div.data('step', 1);
        b1.animate({opacity: 0},400);
        b2.animate({opacity: 0},400);
        tt.animate({opacity: 1},400);
        ct.animate({opacity: 1},400);
        ts.animate({opacity: 1},400);
        cs.animate({opacity: 1},400);
      }
      else if (f.data('toggle') == 'diagram' && f.data('target') == '#d9' && (step = parseInt($div.data('step'))) > 0) {
        $div.data('step',step+1);
        step -= 1;
        vset1[step].animate({opacity: 0.3},400);
        vset2[step].animate({opacity: 0.3},400);
      }
      var $div2 = $('#d10');
      if (f.data('toggle') == 'diagram' && f.data('target') == '#d10' && $div2.data('step') == undefined) {
        vset1.forEach(function(c, i){
          vset1[i].animate({opacity: 0},400);
          vset2[i].animate({opacity: 0},400);
        });
        block1.animate({opacity: 0.3},400);
        block2.animate({opacity: 0.3},400);
        block3.animate({opacity: 0.3},400);
      }
    });
  })();
  // ========== inline colored triangle and green-blue segment ==========
  (function(){
    $('.colorful-triangle').each(function(){
      var r = Raphael(this, 56, 50);
      r.triangle([28,8],[8,42],[48,42]).attr({fill: gray, 'opacity': 0.8, stroke: gray, 'stroke-width': '6px'});
      r.point([28, 8], red);
      r.point([8, 42], green);
      r.point([48, 42], blue);
    });
    $('.green-to-blue').each(function(){
      var r = Raphael(this, 56, 20);
      r.path('M8 10L48 10').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px'});
      r.point([8, 10], green);
      r.point([48, 10], blue);      
    });
    $('.white-dot').each(function(){
      var r = Raphael(this, 20, 20);
      r.point([10, 10], 'white');
    });
    $('.red-dot').each(function(){
      var r = Raphael(this, 20, 20);
      r.point([10, 10], red);
    });
    $('.red-gray-ray').each(function(){
      var r = Raphael(this, 124, 20);
      r.path('M18 10L18 10').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px', 'stroke-linecap': 'round'});
      r.path('M28 10L28 10').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px', 'stroke-linecap': 'round'});
      r.path('M38 10L38 10').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px', 'stroke-linecap': 'round'});
      r.path('M48 10L116 10').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px', 'stroke-linecap': 'round', 'arrow-end': 'classic'});
      r.point([8, 10], red);
      r.point([48, 10], 'white');
    });
    var r = Raphael('knot', 40, 60);
    r.path('M3 3L37 57L3 57L37 3').attr({'opacity': 0.8, stroke: gray, 'stroke-width': '6px'});
  })();
});
