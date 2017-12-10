---
layout: post
title:  "Topological aspects of Hex game"
categories: blog
tags: handshaking-lemma math.CO
series: "Hex game"
---
In the previous post, I asserted without proof that the Hex Game will never result a draw. In *An Invitation to Discrete Mathematics*, Jiri Matousek gave an elegant proof for the assertion, which requires only a little bit of elementary graph theory. The idea of the proof can also prove Sperner's Lemma. Moreover, I will present later how to extrapolate this idea to discover something new. The only bit of elementary graph theory we are going to use is the Handshaking lemma.<!--more-->

**Handshaking Lemma** Every finite undirected graph has an even number of vertices with odd degree.

To prove the lemma, simply observe that the sum of the degrees of all vertices is equal to twice the number of the edges, which should be even.

Now let us review the Hex Game. Recall two versions of the Hex Game.

{% include helpers/image.html name="voronoi.png" caption="Figure 1: Voronoi Duality" %}

The original version of the game is to color the hexagons of the game board (illustrated in black) and each player tries to link the opposite sides of the board with a connected series of hexagons with the same color.

Alternatively, one can play with the Voronoi dual of the hexagon game board (illustrated in red). This time, two players color the vertices and compete to link the opposite sides with a path of vertices of their own color. For instance, player one would try to form a red path from the northwest side to the southeast side, while player two would strive to build a blue one from the northeast side to the southwest side.

We can tilt and rescale the dual graph without changing the game as follows.

{% include helpers/image.html name="dual-graph.png" caption="Figure 2: Dual graph which can be easily drawn" %}

In this new graph, the first player wants to build a red path from the west to the east and the second player wants to build a blue path from the north to the south. Furthermore, for purpose of the proof, we add four auxiliary vertices on each side and color them according to which player it belongs to.

{% include helpers/image.html name="aux-vertices.png" caption="Figure 3: Dual graph with four auxiliary vertices on each side" %}

As are shown in the above graph, the vertices on the west and the east are red and the ones on the north and the south are blue. Our goal is to prove that no matter how you color the remaining vertices with red and blue, there is always a monochromatic path connecting two of the four auxiliary points. For the coloring below, there is a red path from W to E.

{% include helpers/image.html name="red-path.png" caption="Figure 4: A red path from W to E" %}

*Proof* Assume, for the sake of contradiction, that some coloring does not form any red path from W to E or blue path from N to S. First, for every red vertex unreachable by any red path starting from W, we change it to green. Similarly, for every blue vertex unreachable by any blue path starting from N, we change it to green, too.

Under the assumption that there is no red path from W to E and no blue path from N to S, the vertices E ans S are both changed to green. Now we have a triangulated planar graph whose four vertices on the external face, W, N, E, S are colored by red, blue, green, green respectively.<!--tomb-->

**Lemma** Given a 3-coloring on a triangulated planar graph whose four vertices on the external face, say W, N, E, S, are colored by red, blue, green, green respectively. There is an internal triangular face whose vertices are of different color.

By this lemma, we can conclude that there exists an internal triangular face, say ABC, such that A is red, B blue and C green. This implies that there are a red path from W to A and a blue path from N to B. If the vertex C is originally red, then it should still be red because there is an edge between A and C. By the same reason, if it is originally blue, then it should still be blue. This gives a contradiction! To finish the proof for the Hex Game, we only need to prove the lemma.

*Proof of Lemma* For each face of the triangulated planar graph, we put a vertex in it. Two vertices are adjacent if and only if their corresponding faces share a common edge whose endpoints are colored red and blue.

{% include helpers/image.html name="3-coloring.png" caption="Figure 5: 3-coloring of a triangulated planar graph and its correspondent 'face graph'." %}

Note that the degree of the vertex in the external face is 1. By the handshaking lemma, there is a vertex, say $$v$$ in the internal face, say $$F$$, whose degree is odd. It is easy to see the only possible coloring of the vertices of $$F$$ to get an odd degree of $$v$$ is to color them by 3 different colors.<!--tomb-->

Now I am going to show something new. The idea to consider another game board which looks like:

{% include helpers/image.html name="symmetric-hex.png" caption="Figure 6: Symmetric Hex Game of size 3" %}

The idea is to get a symmetric board. To build such a game board, one can start with a hexagon in the center and then add several layers of hexagons around it. In the picture above, the hexagon labeled by 1 is the one we start with. We call it the 1st layer. Then we can add 6 hexagons labeled by 2 around it to form the 2nd layer and another 12 hexagons labeled by 3 around the 2nd layer. In general, to build a symmetric Hex of size $$n$$, one only needs to repeat the process $$n$$ times.

For this symmetric Hex game board, we have three pairs of opposite sides. One reasonable goal, which is analogous to the goal of the Hex game, is to build a monochromatic path that links two opposite sides. However two players can cooperate to tie the game in this case.

{% include helpers/image.html name="cooperation.png" caption="Figure 7: Two players can cooperate not to connect any pair of opposite sides" %}

Therefore, for the symmetric Hex, the goal is to build a monochromatic connected component that touches two opposite sides or three nonadjacent sides. For simplicity, we can such a monochromatic connected component a winning component. In other words, if we label six sides by 1 through 6, both players want to use their own colors to connect side 1 and 4, or side 2 and 5, or side 3 and 6, or side 1, 3 and 5, or side 2, 4 and 6. Again, we will only consider its dual variant in the sense that each player colors the vertex of the following graph.

{% include helpers/image.html name="dual-symmetric-hex.png" caption="Figure 8: Dual variant of symmetric Hex Game" %}

**Proposition** The Symmetric Hex game can never end in a tie.

*Proof* Assume, for the sake of contradiction, that there is a 2-coloring of the symmetric Hex that contains no winning component. Consider the graph with 4 extra vertices W, E, N, S which connect to the vertices of the original graph as follows.

{% include helpers/image.html name="4-extra-vertices.png" caption="Figure 9: Graph with 4 extra vertices" %}

To be specific, W connects to all the vertices on side 5, E the vertices on side 2, N the vertices on side 1 and 6, S the vertices on side 3 and 4.

By the same argument we used in the proof of the Hex game, there is either a red path from W to E or a blue path from N to S. In other words, we should have one of the following schematic pictures.

{% include helpers/image.html name="5-possibilities.png" caption="Figure 10: Five possibilities" %}

By our assumption, it must look like the pictures on the second row. Without loss of generality, assume that we have the first picture on the second row and the blue path connects vertices a and b.

Now we change the way the extra 4 vertices connect to the vertices on the boundary as follows.

{% include helpers/image.html name="4-extra-vertices-connection.png" caption="Figure 11: 4 extra vertices connect the vertices on the sides in a different way" %}

Again, there is either a blue path from W to E or a red path from N to S. If there is a blue path from W to E, then this path combined with the blue path from a
to b gives us a connected component that touches two opposite sides or 3 nonadjacent sides. Therefore it has to be the case that a red path connects N to S.

{% include helpers/image.html name="red-path-blue-path.png" caption="Figure 12: A red path on the blue path's right side." %}

To summarize, whenever we have a blue path $$P_1$$ that connects side 4 and 6, there is be a red path $$P_2$$ connecting the same sides on its right side. By symmetry, there is a blue path $$P_3$$ connecting side 4 and 6 on $$P_2$$'s right side. We can keep going and get an infinite sequence of paths connecting side 4 and 6 with alternating colors, which is impossible!<!--tomb-->

**Corollary** For any 2-coloring of the symmetric Hex board of size $$n$$, there is a monochromatic connected component of size $$\ge 2n+1$$.

*Proof* By the symmetric Hex theorem, there is a monochromatic connected component that touches 2 opposite sides or 3 nonadjacent sides. In either case, the size of the component is at least $$2n+1$$.<!--tomb-->