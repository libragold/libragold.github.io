---
layout: post
title:  "Alternating Fourier coefficients"
categories: blog
tags: math.CA
excerpt:
  Suppose $$f\in L^2$$ is a periodic function from $$\mathbb{R}$$ to $$\mathbb{C}$$ with period $$1$$. Let $$a(n)$$ be its Fourier coefficients. We prove that for all $$p\geq 2$$ that $$g(\omega)(x)=\sum_{n\in \mathbb{Z}}\omega(n)a(n)e^{i2\pi nx}$$ is almost surely in $$L^p$$, where each $$\omega(n)$$ equals either $$-1$$ or $$1$$ with probability $$1/2$$.
---
Suppose $$f\in L^2$$ is a periodic function from $$\mathbb{R}$$ to $$\mathbb{C}$$ with period $$1$$. Let $$a(n)$$ be its Fourier coefficients, namely $$a(n)=\int_0^1{f(x)e^{-i2\pi nx}dx}$$ for all $$n\in\mathbb{Z}$$. Prove for all $$p\geq 2$$ it is almost surely that function

$$g(\omega)(x)=\sum_{n\in \mathbb{Z}}\omega(n)a(n)e^{i2\pi nx}$$

is in $$L^p$$ where $$\omega$$ is an infinite sequence of independent and identical random variables indexed by $$\mathbb{Z}$$ with $$\omega(n)$$ equals either $$-1$$ or $$1$$ with probability $$1/2$$.

I heard this problem from Yue Pu who heard it from [Gautam Iyer](http://www.math.cmu.edu/~gautam/sj/). Roughly speaking, given a periodic $$L^2$$ function, by alternating the signs of its Fourier coefficients, one almost surely gets an $$L^p$$ function for all $$p\geq 2$$.

Here is the proof Yue and I worked out this afternoon which I think is pretty neat. However, all convergence arguments are omitted.

We shall prove that for all $$p\in\mathbb{N}$$, the expectation of $$\int_0^1 \vert g(\omega)(x)\vert^{2p}dx$$ is less than or equal to $$C_p\left(\int_0^1\vert f(x)\vert^2dx\right)^p$$, where $$C_p$$ is a constant that only depends on $$p$$.

This is sufficient to prove the original problem. For all $$p\in\mathbb{N}$$, we let $$A=\{\omega: g(\omega)\notin L^{2p}\}$$. If $$\mathbb{P}(A)>0$$, then for all $$\omega\in A$$, $$\int_0^1{\vert g(\omega)(x)\vert^{2p}dx}=\infty$$. Consequently 

$$\infty\leq\mathbb{E}\left[\int_0^1 \vert g(\omega)(x)\vert^{2p}dx\right]\leq C_n\left(\int_0^1\vert f(x)\vert^2dx\right)^p<\infty,$$

which is impossible. For a general $$p\geq 2$$, pick any $$p'\in\mathbb{N}$$ such that $$p\leq 2p'$$. We know $$g(\omega)$$ is almost surely in $$L^{2p'}$$, hence almost surely in $$L^{p}$$.

For brevity, we denote $$e(n)(x)=e^{i2\pi nx}$$. We will repeatedly use the facts that $$e(m)(x)e(n)(x)=e(m+n)(x)$$, $$\overline{e(m)(x)}=e(-m)(x)$$ and $$\int_0^1e(n)(x)=0$$ except for $$n=0$$ it equals $$1$$. We will also use Parseval's identity which says $$\int_0^1\vert f(x)\vert^2dx=\sum_{n\in\mathbb{Z}}\vert a(n)\vert^2$$.

For all $$p\in\mathbb{N}$$, we have

$$\vert g(\omega)(x)\vert^2=g(\omega)(x)\overline{g(\omega)(x)}=\sum_{m,n}\omega(m)\omega(n)a(m)\overline{a(n)}e(m)(x)e(-n)(x).$$

This gives us

$$\vert g(\omega)(x)\vert^{2p}=\sum_{m_1,\ldots,m_p,n_1,\ldots,n_p}\prod_{i=1}^p\omega(m_i)a(m_i)e(m_i)(x)\omega(n_i)\overline{a(n_i)}e(-n_i)(x).$$

Integrate above formula from $$0$$ to $$1$$, we have

$$\int_0^1{\vert g(\omega)(x)\vert^{2p}}dx=\sum_{m_1+\ldots+m_p=n_1+\ldots+n_p}\prod_{i=1}^p\omega(m_i)\omega(n_i)a(m_i)\overline{a(n_i)}.$$

Notice that for fixed $$m_1, \ldots, m_p, n_1, \ldots, n_p$$, the expectation of the summand is always $$0$$ except when there is a perfect matching among $$m_1,\ldots, m_p, n_1, \ldots, n_p$$. By a perfect matching, we mean that one can pair the numbers such that the two numbers in each pair are the same. Hence the expectation of above is equal to

$$\sum_{m_1+\ldots+m_p=n_1+\ldots+n_p}^*\prod_{i=1}^pa(m_i)\overline{a(n_i)},$$

where $$\sum^*$$ is the summation over every sequence that admits a perfect matching.

The above is less than or equal to

$$\sum_{m_1,\ldots, m_p, n_1,\ldots, n_p}^*\prod_{i=1}^p\vert a(m_i)\vert \vert a(n_i)\vert .$$

By over counting, the expectation is less than or equal to

$$\frac{(2p)!}{p!2^p}\sum_{l_1, \ldots, l_p}\prod_{i=1}^p\vert a(l_i)\vert^2=\frac{(2p)!}{p!2^p}\left(\int_0^1\vert f(x)\vert^2dx\right)^p,$$

where $$\frac{(2p)!}{p!2^p}$$ is the number of perfect matching can possibly be formed among $$2p$$ numbers.

**Remark** The proof is not constructive. Indeed, it doesn't provide a way for one to alternate the Fourier coefficients so that the outcome is an $$L^p$$ function, though it is almost sure that the outcome is in $$L^p$$.