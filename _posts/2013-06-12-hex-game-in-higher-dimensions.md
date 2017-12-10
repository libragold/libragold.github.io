---
layout: post
title:  "Hex game in higher dimensions"
categories: blog
tags: math.CO
series: "Hex game"
excerpt:
  The Hex game was invented by the Danish mathematician Piet Hein, who introduced it in 1942 at the Niels Bohr Institute. It was independently re-invented in 1947 by the mathematician John Nash at Princeton University.
---
The Hex game was invented by the Danish mathematician Piet Hein, who introduced it in 1942 at the Niels Bohr Institute. It was independently re-invented in 1947 by the mathematician John Nash at Princeton University. The rules are really simple. Each player has an allocated color, Red and Blue being conventional. Players take turns placing a stone of their color on a single cell within the overall playing board. The goal is to form a connected path of your stones linking the opposing sides of the board marked by your colors, before your opponent connects his or her sides in a similar fashion. The first player to complete his or her connection wins the game. The four corner hexagons each belong to both adjacent sides… The game can never end in a tie, a fact proved by John Nash: the only way to prevent your opponent from forming a connecting path is to form a path yourself. In other words, Hex is a determined game.

For instance, in the following 2 by 2 board, player 1 should intend to build a connected path linking $$x_1=0, x_1=2$$, while player 2 should intend to build a connected path linking $$x_2=0, x_2=2$$.

{% include helpers/image.html name="coordinates.png" caption="Figure 1: A 2 by 2 Hex Game Board with a coordinate attached to each cell." %}

Now, we would like to play Hex game in higher dimensions. The first question is: how can we set up the game board in the $$n$$ dimensional space? The answer all depends on your point of view. If we visualize the game board in 2 dimension as follows, we can view each cell as a cube in 3 dimensional space.

{% include helpers/image.html name="perspective.png" caption="Figure 2: Hex Board from another perspective." %}

Here is a rework of the 2 dimensional board which can be easily generalized to higher dimension. Consider all unit cubes in $$\mathbb{R}^3$$ who are translation of the canonical unit cube (whose vertices are $$(0,0,0), (1,0,0), (0,1,0), (0,0,1), (1,1,0), (1,0,1), (0,1,1),(1,1,1)$$) along the vector $$(x,y,z)$$, where $$(x,y,z)\in[n]\times[n]\times\mathbb{Z}$$ ($$[n]=\{1,2,\ldots, n\}$$) and $$x+y+z=0$$. Basically, those unit cubes are the ones illustrated above. Now project all those cubes to the 2-dimensional plane $$x+y+z=0$$. This gives us the hexagon board.

For higher dimension, say $$d$$ dimension, just project all unit cubes in $$\mathbb{R}^{d+1}$$ who are translation of the $$d+1$$-dimensional canonical unit cube along the vector $$(x_0, \ldots, x_n)$$, where where $$(x_0,\ldots, x_d)\in\mathbb{Z}^{d+1}$$ and $$x_0+\ldots+x_d=0$$, to the $$d$$-dimensional hyperplane given by the equation $$x_0+\ldots+x_d=0$$.

With the help of Mathematica, each cell of 3D Hex board looks like the following.

{% include helpers/image.html name="block.png" caption="Figure 3: Building Block of 3D Hex" %}

Source code is attached here for those who want to play with it a little bit in Mathematica.

{% highlight mathematica %}
{% endhighlight %}

I forgot to mention, in the $$d$$-dimensional Hex game, we have at most $$d$$ players. Again, the game will never tie. For those who are interested beyond this mere fact, please refer to David Gale’s great exposition on this topic [^1].

However as a paper-and-pencil game, drawing a real Hex board is time consuming. Here is another version of Hex with an easy-to-draw game board. The vertices represent the hexagon region of the graph and the edges represent the borders. Two players take turns to color the vertices and try to form a monochromatic path from one side to the opposite.

{% include helpers/image.html name="simplified.png" caption="Figure 4: A 3 by 3 Dual Game Board" %}

Indeed, mathematically speaking, this is the dual diagram of the original board. Its generalization in higher dimension is easy to imagine. Define a graph whose vertex set $$V=[n]^d$$.Two distinct vertices $$u, v\in V$$ are adjacent if $$u_i-v_i\in\{0,1\}$$ for all $$i\in[d]$$ or the other way around $$v_i-u_i\in\{0,1\}$$ for all $$i\in[d]$$.

[^1] David Gale, The Game of Hex and the Brouwer Fixed-Point Theorem, The American Mathematical Monthly, vol. 86, 1979, pp. 818-827.