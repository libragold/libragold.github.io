---
layout: post
title:  "Telescoping trick"
categories: blog
tags: tricks math.GM
excerpt:
  In mathematics, a telescoping series is a series whose partial sums eventually only have a fixed number of terms after cancellation.
---
In mathematics, a telescoping series is a series whose partial sums eventually only have a fixed number of terms after cancellation.

Yesterday, I was helping [Po-Shen Loh](http://www.math.cmu.edu/~ploh/) to proctor the Annual Virginia Regional Mathematics Contest at CMU. The last problem is to find:

$$
\sum_{n=1}^\infty\frac{n}{(2^n+2^{-n})^2}+\frac{(-1)^nn}{(2^n-2^{-n})^2}.
$$

First consider the first term,

$$
\frac{1}{(2^1+2^{-1})^2}+\frac{-1}{(2^1-2^{-1})^2}=\frac{-2\times 2}{(2^2-2^{-2})^2}.
$$

Then take look at the second term,

$$
\frac{2}{(2^2+2^{-2})^2}+\frac{2}{(2^2-2^{-2})^2}.
$$

The sum of the first two terms then becomes

$$
\frac{2}{(2^2+2^{-2})^2}+\frac{-2}{(2^2-2^{-2})^2}=\frac{-4\times 2}{(2^4-2^{-4})^2},
$$

which again will cooperate nicely with the 4th term (not the 3rd term). After all, the sum of the 1st, 2nd, 4th, 8th, ..., terms is $$\frac{-4n}{(2^{2n}-2^{-2n})^2}$$. Note that this goes to zero.

But this only handles the terms indexed by powers of 2. Naturally, the next thing to look at is the 3rd, 6th, 12th, 24th, ..., terms, which amazingly turn out have the telescoping phenomenon and their sum equals to $$\frac{-4n}{(2^{2n}-2^{-2n})^2}.$$ Again, the this goes to zero.

We claim that starting with an odd index, say $$(2l+1)$$, the partial sum of the $$(2l+1), 2(2l+1), \ldots, 2^m(2l+1), \ldots$$'th terms goes to zero.

For people who is willing to suffer a bit more for rigorousness, the argument for the previous claim can be easily formalized by the method of differences. The key fact we have been exploiting above is the following identity.

$$
\frac{2n}{(2^{2n}+2^{-2n})^2}+\frac{2n}{(2^{2n}-2^{-2n})^2} = \frac{4n}{(2^{2n}-2^{-2n})^2}-\frac{8n}{(2^{4n}-2^{-4n})^2}
$$

The last bit of the ingredient is the absolute summability of the original sequence which implies that changing the order of summation does not affect the result. Hence the sum in total is $$0$$.