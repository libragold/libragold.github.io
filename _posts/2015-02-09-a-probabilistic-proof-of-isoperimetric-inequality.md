---
layout: post
title:  "A Probabilistic Proof of Isoperimetric Inequality"
categories: blog
tags: isoperimetric-inequality probabilistic-method math.MG
excerpt:
  We demonstrate a probabilistic proof of the isoperimetric inequality.
---
This note is based on [Nicolas Garcia Trillos](http://www.nicolasgarciat.com)' talk, *Some Problems and Techniques in Geometric Probability*, at Carnegie Mellon University on January 29, 2015. We demonstrate a probabilistic proof of the isoperimetric inequality. The proof can also be found in *Integral Geometry and Geometric Probability* by Luis A. Santaló.

**Theorem** For a convex set with perimeter $$L$$ and area $$A$$, the isoperimetric inequality states that $$4\pi A\leq L^2$$, and that equality holds if and only if the convex set is a disk. (Assume that the boundary is a closed convex curve of class $$C^1$$.)

*Proof* Let $$P(s)$$ parametrize the boundary by its arc length $$s$$. Given $$s$$ and $$\theta$$. Suppose the line through $$P(s)$$ whose angle to the tangent line equals $$\theta$$ intersects the boundary at another point $$Q(s)$$. Let $$\sigma(s, \theta)$$ be the length of the chord between the two intersections $$P(s), Q(s)$$. Consider the integral

$$\int (\sigma_1\sin\theta_2 – \sigma_2\sin\theta_1)^2 \mathrm{d}s_1\mathrm{d}\theta_1\mathrm{d}s_2\mathrm{d}\theta_2,$$

where the integration extends over $$0 \leq s_1, s_2 \leq L$$ and $$0 \leq \theta_1, \theta_2 \leq \pi$$.

{% include helpers/image.html name="random_variables.png" caption="Figure 1: Random variables" %}

Expanding the square in the integrand, we obtain that the integral is equal to

$$\pi L \int \sigma^2\mathrm{d}s\mathrm{d}\theta – 2\left(\int \sigma\sin\theta\mathrm{d}s\mathrm{d}\theta\right)^2.$$

On one hand, we have

$$\int \sigma^2\mathrm{d}s\mathrm{d}\theta = \int_0^L\int_0^\pi \sigma^2\mathrm{d}\theta\mathrm{d}s = \int_0^L 2A\mathrm{d}s = 2LA.$$

{% include helpers/image.html name="change_variables.png" caption="Figure 2: Change of variables" %}

On the other hand, let $$p$$ be the distance from the chord to the origin and $$\phi$$ the angle from the $$x$$-axis to the chord. Suppose the angle from the $$x$$-axis to the tangent line is $$\tau$$. We have

$$p = \langle x, y\rangle\cdot\langle \sin\phi, -\cos\phi \rangle = x\sin\phi – y\cos\phi.$$

Differentiating the latter, we get

$$\mathrm{d}p = \sin\phi\mathrm{d}x – \cos\phi\mathrm{d}y + (x\cos\phi + y\sin\phi)\mathrm{d}\phi.$$

Moreover, we know that

$$\mathrm{d}x = \cos\tau\mathrm{d}s, \mathrm{d}y = \sin\tau\mathrm{d}s.$$

Therefore

$$\mathrm{d}p = \sin\phi\cos\tau\mathrm{d}s – \cos\phi\sin\tau\mathrm{d}s + + (x\cos\phi + y\sin\phi)\mathrm{d}\phi,$$

and so

$$\mathrm{d}p\mathrm{d}\phi = \sin(\phi – \tau)\mathrm{d}s\mathrm{d}\phi.$$

Since $$\theta + \phi = \tau$$ and $$\mathrm{d}\theta + \mathrm{d}\phi = \tau'\mathrm{d}s$$, we have

$$\mathrm{d}p\mathrm{d}\phi = -\sin\theta\mathrm{d}s\mathrm{d}\theta,$$

and so

$$\int\sigma\sin\theta\mathrm{d}s\mathrm{d}\theta = \int_0^{2\pi}\int_{-\infty}^\infty \sigma\mathrm{d}p\mathrm{d}\theta = 2\pi A.$$

Since the integral is non-negative, we have that $$2\pi A(L^2 – 4\pi A)\geq 0$$, and so $$4\pi A \leq L^2$$. The equality is achieved if and only if $$\sigma / \sin\theta$$ is a constant, in which case the boundary is a circle. <!--tomb-->

**Remark** The proof is considered a probabilistic proof because the differential form $$\mathrm{d}p\mathrm{d}\theta$$ is the measure (invariant under rigid motion) of a random line.