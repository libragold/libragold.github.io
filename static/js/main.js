$(document).ready(function() {
    $(".nav a").click(function() {
      link = $(this).attr("href");
    if (window.matchMedia("(min-width: 980px)").matches)
      $.scrollTo(link, 250, {offset: -120});
    else
      $.scrollTo(link, 250, {offset: -20});
    $(".nav-collapse").dropdown('toggle');
      return false;
    })
    $('.has_tooltip').tooltip()
  });
  
  var app = angular.module('app', []);
  app.controller('ctrl', function($scope){
    var authorList = $scope.authors = {
      'bbukh': {
        name: "Boris Bukh",
        website: "http://www.borisbukh.org"
      },
      'polyanom': {
        name: "Alexandr Polyanskii",
        website: "http://polyanskii.com"
      },
      'aharoni': {
        name: "Ron Aharoni",
        website: "http://raharoni.net.technion.ac.il"
      },
      'censor': {
        name: "Yair Censor",
        website: "http://math.haifa.ac.il/yair/"
      },
      'alon': {
        name: "Noga Alon",
        website: "http://www.tau.ac.il/~nogaa/"
      },
      'amir': {
        name: "Michal Amir",
        website: "https://en-exact-sciences.tau.ac.il/math"
      },
      'haxell': {
        name: "Penny Haxell",
        website: "https://uwaterloo.ca/combinatorics-and-optimization/people-profiles/penny-haxell"
      },
      'hefetz': {
        name: "Dan Hefetz",
        website: "https://dannyhefetz.wixsite.com/homepage"
      },
      'kronenberg': {
        name: "Gal Kronenberg",
        website: "http://www.math.tau.ac.il/~galkrone/"
      },
      'naor': {
        name: "Alon Naor",
        website: "http://www.tau.ac.il/~alonnaor/"
      },
      'nikita': {
        name: "Nikita Polyanskii",
        website: "https://scholar.google.co.il/citations?user=4Y8b6l8AAAAJ"
      }
    };
    var talkList = $scope.talks = [
      {
        title: "Many models for unstable first-order theory (4 talks)",
        occasion: "Model Theory Seminar",
        abstractUrl: "https://www.math.cmu.edu/math/modeltheoryseminars/modeltheoryseminar.php?SeminarSelect=676",
        location: "Carnegie Mellon University",
        date: new Date(2012,10-1,29),
        endDate: new Date(2012,11-1,19),
      },
      {
        title: "Computability and busy beaver",
        occasion: "Math Club",
        location: "Carnegie Mellon University",
        date: new Date(2012,11-1,8)
      },
      {
        title: "A taste of topological methods in combinatorics",
        occasion: "Gradaute Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1019",
        location: "Carnegie Mellon University",
        date: new Date(2014,9-1,23)
      },
      {
        title: "Introduction to Diophantine approximation",
        occasion: "Gradaute Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1041",
        location: "Carnegie Mellon University",
        date: new Date(2014,11-1,4),
        blogUrl: "http://www.libragold.com/blog/2014/11/a-note-on-thues-method/"
      },
      {
        title: "An expedition to the world of $p$-adic numbers",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1076",
        location: "Carnegie Mellon University",
        date: new Date(2015,1-1,15),
        blogUrl: "http://www.libragold.com/blog/2015/01/on-extension-of-rationals/"
      },
      {
        title: "The best card trick",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1099",
        location: "Carnegie Mellon University",
        date: new Date(2015,2-1,19)
      },
      {
        title: "Hardy–Littlewood circle method and Waring's problem",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1118",
        location: "Carnegie Mellon University",
        date: new Date(2015,4-1,9)
      },
      {
        title: "A bound on Turán number for cycles of even length",
        occasion: "Connections in Discrete Mathematics",
        abstractUrl: "https://sites.google.com/site/connectionsindiscretemath/schedule-1",
        location: "Simon Fraser University",
        date: new Date(2015,6-1,18),
        slidesUrl: "slides/vancouver_jun_2015/index.html",
        publicationUrl: "http://arxiv.org/abs/1403.1601"
      },
      {
        title: "Topological method for the colored Bárány’s theorem",
        occasion: "Random Structures and Algorithms",
        abstractUrl: "http://rsa2015.amu.edu.pl/program",
        location: "Carnegie Mellon University",
        date: new Date(2015,7-1,30),
        slidesUrl: "slides/pittsburgh_jul_2015/index.html",
        publicationUrl: "http://arxiv.org/abs/1405.2503"
      },
      {
        title: "Why elliptic curves are called elliptic?",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1234",
        location: "Carnegie Mellon University",
        date: new Date(2015,10-1,13)
      },
      {
        title: "Classification of bipartite algebraic graphs without quadrilaterals",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1251",
        location: "Carnegie Mellon University",
        date: new Date(2015, 11-1, 17)
      },
      {
        title: "Random algebraic method and its application",
        occasion: "Graduate Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1292",
        location: "Carnegie Mellon University",
        date: new Date(2016, 3-1, 1),
        videoUrl: "https://youtu.be/MRor7NeXPrw"
      },
      {
        title: "Races beyond Riemann hypothesis",
        occasion: "Gradaute Student Seminar",
        abstractUrl: "http://math.cmu.edu/graduate/graduateseminar.php?SeminarSelect=1320",
        location: "Carnegie Mellon University",
        date: new Date(2016, 4-1, 19),
        videoUrl: "https://youtu.be/v4OMOnmW_0g"
      },
      {
        title: "Bipartite algebraic graphs without quadrilaterals",
        occasion: "Hungarian-Israeli Combinatorial Days at the Technion",
        abstractUrl: "http://www.math.technion.ac.il/Site/events/EvntOffices/files/view/cms/104-301-189.pdf",
        location: "the Technion – Israel Institute of Technology",
        date: new Date(2016, 8-1, 23),
        slidesUrl: "slides/haifa_aug_2016/index.html",
        publicationUrl: "http://arxiv.org/abs/1511.04719"
      },
      {
        title: "Relations between Tverberg points and central points",
        occasion: "Combinatorics Seminar at Hebrew University of Jerusalem",
        abstractUrl: "https://calendar.google.com/calendar/event?eid=ZGl0bzY3ZmY1c2xqb21icDAwYW44bjN1NGsgdHY5cnVicG9kMm0yODVlMDUwN2FtZjZocjRAZw&ctz=Asia/Jerusalem",
        location: "the Hebrew University of Jerusalem",
        date: new Date(2017, 3-1, 6)
      },
      {
        title: "On spherical Tarski's plank problem",
        occasion: "Combinatorics Gathering at the Technion",
        location: "the Technion – Israel Institute of Technology",
        date: new Date(2017, 4-1, 5),
        publicationUrl: "http://arxiv.org/abs/1703.10550"
      },
      {
        title: "On spherical Tarski's plank problem",
        occasion: "Israel Mathematical Union 2017 Annual Meeting",
        abstractUrl: "https://imudotorgdotil.files.wordpress.com/2017/01/program1713.pdf",
        location: "Rimonim Palm Beach, Akko",
        date: new Date(2017, 5-1, 28),
        slidesUrl: "slides/akko_may_2017/index.html",
        publicationUrl: "http://arxiv.org/abs/1703.10550"
      },
      {
        title: "Finding the closest pair of points on two polyhedra",
        occasion: "Nonlinear Analysis and Optimization Seminar at the Technion",
        abstractUrl: "http://www.math.technion.ac.il/Site/events/EvntOffices/event.php?eid=eo526",
        location: "the Technion – Israel Institute of Technology",
        date: new Date(2017, 8-1, 20),
        publicationUrl: "http://arxiv.org/abs/1707.09639"
      },
      {
        title: "Finding the closest pair of points on two polyhedra",
        location: "ORT Braude College",
        date: new Date(2017, 12-1, 12),
        publicationUrl: "http://arxiv.org/abs/1707.09639"
      },
      {
        title: "On spherical Tarski's plank problem",
        occasion: "Nonlinear Analysis and Optimization Seminar at the Technion",
        abstractUrl: "http://www.math.technion.ac.il/Site/events/EvntOffices/event.php?eid=eo626",
        location: "the Technion – Israel Institute of Technology",
        date: new Date(2018, 1-1, 21),
        publicationUrl: "http://arxiv.org/abs/1703.10550"
      },
      {
        title: "Five Miniatures of Linear Algebra (in Chinese)",
        occasion: "An Hour of Maths at Peking University",
        location: "Peking University",
        date: new Date(2018, 3-1, 14)
      },
      {
        title: "Spherical Tarski' Plank Problem (in Chinese)",
        occasion: "School Colloquim at Peking University",
        abstractUrl: "http://portal.math.pku.edu.cn/htdocs/showlecture.php?id=12971",
        location: "Peking University",
        date: new Date(2018, 3-1, 16),
        publicationUrl: "http://arxiv.org/abs/1703.10550"
      },
      {
        title: "Sperical Tarski's Plank Problem",
        occasion: "ERC Workshop: Geometric Transversal and Epsilon-Nets",
        location: "Ein Gedi",
        date: new Date(2018, 3-1, 20),
        publicationUrl: "http://arxiv.org/abs/1703.10550"
      },
      {
        title: "How to guess an n-digit number",
        occasion: "Research Seminar in Combinatorics",
        abstractUrl: "http://www.cs.tau.ac.il/~asafico/seminar/mar25.html",
        location: "Tel Aviv University",
        date: new Date(2018, 4-1, 24),
        publicationUrl: "http://arxiv.org/abs/1712.02723"
      },
      {
        title "How to guess an n-digit number",
        occasion: "",
        location: "Ben Gurion University",
        date: new Date(2018, 4-1, 25),
        publicationUrl: "http://arxiv.org/abs/1712.02723"
      }
    ];
    $scope.writings = [
      {
        title: "A slight improvement to the colored Bárány’s theorem",
        summary: "Let $P_0, \\dots, P_d$ be $d + 1$ disjoint $n$-point sets in $\\mathbb{R}^d$. A colorful simplex is the convex hull of $d + 1$ points each of which comes from a distinct $P_i$. There always exists a point that is contained in at least $\\frac{2d}{(d+1)(d+1)!}n^d$ colorful simplices.",
        journal: {
          name: "The Electronic Journal of Combinatorics",
          url: "http://www.combinatorics.org/ojs/index.php/eljc/article/view/v21i4p39",
          etc: "21(4) (2014), #P4.39"
        },
        arxiv: {
          no: "1405.2503",
          category: "math.CO"
        },
        talk: talkList[8],
        completed: new Date(2014,5-1,11),
        submitted: new Date(2014,5-1,14),
        published: new Date(2014,10-1,30)
      },
      {
        title: "A bound on the number of edges in graphs without an even cycle",
        coauthor: [
          authorList['bbukh']
        ],
        summary: "For each fixed $k$, an $n$-vertex graph not containing a cycle of length $2k$ has at most $80\\sqrt{k}\\log k \\cdot n^{1+1/k}+O(n)$ edges.",
        journal: {
          name: "Combinatorics, Probability and Computing",
          url: "https://doi.org/10.1017/S0963548316000134",
          etc: "26(1), pp. 1–15"
        },
        arxiv: {
          no: "1403.1601",
          category: "math.CO"
        },
        talk: talkList[7],
        completed: new Date(2014,3-1,6),
        submitted: new Date(2014,4-1,8),
        published: new Date(2016,12-1,8)
      },
      {
        title: "Bipartite algebraic graphs without quadrilaterals",
        coauthor: [
          authorList['bbukh']
        ],
        summary: "We conjecture that every algebraic hypersurface that gives rise to a $K_{s,t}$-free graph is equivalent, in a suitable sense, to a low-degree hypersurface. We establish a version of this conjecture for $K_{2,2}$-free graphs.",
        journal: {
          name: "Discrete Mathematics",
          url: "https://doi.org/10.1016/j.disc.2018.03.005",
          etc: "341(6), pp. 1597–1604"
        },
        arxiv: {
          no: "1511.04719",
          category: "math.CO"
        },
        talk: talkList[13],
        completed: new Date(2015, 11-1, 15),
        submitted: new Date(2016, 6-1, 14),
        accepted: new Date(2018, 3-1, 4)
      },
      {
        title: "Proof of László Fejes Tóth's zone conjecture",
        coauthor: [
          authorList['polyanom']
        ],
        summary: "A zone of width $\\omega $ on the unit sphere is the set of points within spherical distance $\\omega/2$ of a given great circle. We show that the total width of any collection of zones covering the unit sphere is at least $\\pi$.",
        journal: {
          name: "Geometric and Functional Analysis",
          url: "https://doi.org/10.1007/s00039-017-0427-6",
          etc: "(2017) 27: 1367"
        }
        arxiv: {
          no: "1703.10550",
          category: "math.MG"
        },
        completed: new Date(2017, 3-1, 30),
        submitted: new Date(2017, 6-1, 12),
        accepted: new Date(2017, 11-1, 1),
        talk: talkList[16]
      },
      {
        title: "Finding a best approximation pair of points for two polyhedra",
        coauthor: [
          authorList['aharoni'],
          authorList['censor']
        ],
        summary: "Given two disjoint convex polyhedra, we propose a process, based on projections onto the half-spaces defining the two polyhedra, for finding a pair of points, one in each polyhedron, attaining the minimum distance.",
        arxiv: {
          no: "1707.09639",
          category: "math.OC"
        },
        completed: new Date(2017, 7-1, 30)
      },
      {
        title: "Forbidden subgraphs for graphs of bounded spectral radius, with applications to equiangular lines",
        summary: "We find the threshold $\\lambda^* = \\sqrt{2+\\sqrt{5}}$ such that, for every $\\lambda < \\lambda^*$, the family of graphs of spectral radius $\\le \\lambda$ has a finite forbidden subgraphs characterization. As a consequence, we establish the asymptotic formula of the maximum cardinality of equiangular lines with angle $\\arccos\\alpha$ in $\\mathbb{R}^n$ for every $\\alpha > \\frac{1}{1+2\\lambda^*}$.",
        arxiv: {
          no: "1708.02317",
          category: "math.CO"
        },
        coauthor: [
          authorList['polyanom']
        ],
        completed: new Date(2017, 8-1, 7)
      },
      {
        title: "Ramsey-nice families of graphs",
        summary: "A finite family $\\mathcal{F}$ of graphs is $k$-nice if for every graph $G$ with $\\chi(G) = R_k(\\mathcal{F})$ (the chromatic number equals to the Ramsey number) and for every coloring of $E(G)$ there exists a monochromatic copy of some $F\\in\\mathcal{F}$. It seems conceivable that for any finite family of graphs $\\mathcal{F}$ that contains at least one forest, $\\mathcal{F}$ is $k$-nice for all $k \\ge k_0(\\mathcal{F})$. We show that the conjecture holds for each of the three families consisting of two connected graphs with 3 edges each.",
        journal: {
          name: "European Journal of Combinatorics",
          url: ""
        }
        arxiv: {
          no: "1708.07369",
          category: "math.CO"
        },
        coauthor: [
          authorList['aharoni'],
          authorList['alon'],
          authorList['amir'],
          authorList['haxell'],
          authorList['hefetz'],
          authorList['kronenberg'],
          authorList['naor']
        ],
        completed: new Date(2017, 8-1, 24),
        submitted: new Date(2017, 9-1, 19),
        accepted: new Date(2018, 4-1, 17)
      },
      {
        title: "On spectral radii of unraveled balls",
        summary: "If the average degree of $G$ after deleting any ball of radius $r$ is at least $d$, then its second largest eigenvalue is at least $2\\sqrt{d-1}\\cos\\left(\\frac{\\pi}{r+1}\\right)$.",
        arxiv: {
          no: "1710.06719",
          category: "math.CO"
        },
        completed: new Date(2017, 10-1, 18)
      },
      {
        title: "On the metric dimension of Cartesian powers of a graph",
        summary: "A set of vertices $S$ resolves a graph if every vertex is uniquely determined by its vector of distances to the vertices in $S$. The metric dimension of a graph is the minimum cardinality of a resolving set of the graph. We prove that the metric dimension of the Cartesian product of $n$ copies of the complete graph on $q$ vertices is $2n/\\log_q n$ asymptotically.",
        arxiv: {
          no: "1712.02723",
          category: "math.CO"
        },
        coauthor: [
          authorList['nikita']
        ],
        completed: new Date(2017, 12-1, 7)
      },
      {
        title: "On capacities of the two-user union channel with complete feedback",
        summary: "We complete the line of research on the optimal symmetric rate point in the chanel capacity region of the two-user union channel, and we construct a practical near-optimal zero-error communication scheme.",
        arxiv: {
          no: "1804.08599",
          category: "cs.IT"
        },
        coauthor: [authorList['nikita']],
        completed: new Date(2018, 4-1, 24)
      }
    ];
    $scope.teaching = [
      [
        {
          name: "Basic Logic & Introduction to Mathematical Logic",
          code: "21-300 & 21-600",
          semester: "Fall 2011",
          role: "Grader",
          url: "http://www.libragold.com/blog/21-300-21-600-fall-2011/"
        },
        {
          name: "Principles of Real Analysis I",
          code: "21-355",
          semester: "Spring 2012",
          role: "Grader",
          url: "http://www.libragold.com/blog/21-355-spring-2012/"
        },
        {
          name: "Differential and Integral Calculus",
          code: "21-120",
          semester: "Fall 2012",
          role: "TA",
          url: "http://www.libragold.com/blog/21-120-fall-2012/"
        },
        {
          name: "Concepts of Mathematics",
          code: "21-127",
          semester: "Spring 2013",
          role: "TA",
          url: "http://www.libragold.com/blog/21-127-spring-2013/"
        },
        {
          name: "Calculus in Three Dimensions",
          code: "21-259",
          semester: "Fall 2013",
          role: "TA",
          url: "http://www.libragold.com/blog/21-259-fall-2013/"
        },
        {
          name: "Matrix Algebra with Applications",
          code: "21-240",
          semester: "Spring 2014",
          role: "TA",
          url: "http://www.libragold.com/blog/21-240-spring-2014/"
        },
        {
          name: "Integration, Differential Equations and Approximation",
          code: "21-122",
          semester: "Fall 2014",
          role: "TA",
          url: "http://www.libragold.com/blog/21-122-fall-2014/"
        },
        {
          name: "Models and Methods for Optimization",
          code: "21-257",
          semester: "Fall 2015",
          role: "TA",
          url: "http://www.libragold.com/blog/21-257-fall-2015/"
        },
        {
          name: "Differential Geometry of Curves and Surfaces",
          code: "21-366",
          semester: "Fall 2015",
          role: "Grader"
        }
      ],
      [
        {
          name: "Differential and Integral Calculus 1M",
          code: "104018",
          semester: "Spring 2017",
          role: "TA",
          url: "http://www.libragold.com/blog/104018-spring-2017/"
        },
        {
          name: "Ordinary Differential Equations",
          code: "104131",
          semester: "Winter 2017",
          role: "TA",
          url: "http://www.libragold.com/blog/104131-winter-2017/"
        },
        {
          name: "Differential and Integral Calculus 1M",
          code: "104018",
          semester: "Spring 2018",
          role: "TA",
          url: "http://www.libragold.com/blog/104018-spring-2018/"
        }
      ],
    ];
    $scope.summaryDisplay = true;
    $scope.toggleSummary = function() {
      $scope.summaryDisplay = !$scope.summaryDisplay;
    };
    $scope.featuredTalkDisplay = true;
    $scope.toggleFeaturedTalk = function() {
      $scope.featuredTalkDisplay = !$scope.featuredTalkDisplay;
    };
    $scope.featuredTalkFilter = function(t) {
      return !$scope.featuredTalkDisplay || t.slidesUrl != null || t.publishedUrl != null || t.blogUrl != null
    };
  });
  