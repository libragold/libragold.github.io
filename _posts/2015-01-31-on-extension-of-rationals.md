---
layout: post
title:  "On extension of rationals"
categories: blog
tags: p-adic non-archimedean math.NT
excerpt:
  This note is based on my talk An Expedition to the World of $$p$$-adic Numbers at Carnegie Mellon University on January 15, 2014.
---
This note is based on my talk *An Expedition to the World of $$p$$-adic Numbers* at Carnegie Mellon University on January 15, 2014.

### Construction from Cauchy sequences

A standard approach to construct the real numbers from the rational numbers is a procedure called completion, which forces all Cauchy sequences converge in a metric space by adding new points to the metric space.

**Definition 1** A *norm*, denoted by $$\vert\cdot\vert$$, on the field $$F$$ is a function from $$F$$ to the set of nonnegative numbers in an ordered field $$R$$ such that (1) $$\vert x\vert=0$$ if and only if $$x=0$$; (2) $$\vert xy\vert=\vert x\vert\vert y\vert$$; (3) $$\vert x+y\vert\leq\vert x\vert+\vert y\vert$$.

**Remark 1** The ordered field is usually chosen to be $$\mathbb{R}$$. However, to construct of $$\mathbb{R}$$, the ordered field is $$\mathbb{Q}$$.

A norm on the field $$F$$ naturally gives rise to a metric $$d(x,y)=\vert x-y\vert$$ on $$F$$. For example, the standard metric on the rationals is defined by the absolute value, namely, $$d(x, y) = \vert x-y\vert$$, where $$x,y\in\mathbb{Q}$$, and $$\vert\cdot\vert$$ is the standard norm, i.e., the absolute value, on $$\mathbb{Q}$$.

Given a metric $$d$$ on the field $$F$$, the completion procedure considers the set of all Cauchy sequences on $$F$$ and an equivalence relation

$$(a_n)\sim (b_n)\text{ if and only if }d(a_n, b_n)\to 0\text{ as }n\to\infty.$$

**Definition 2** Given 2 norms on $$F$$, $$\vert\cdot\vert_1, \vert\cdot\vert_2$$. Let $$d_1, d_2$$ be the metrics determined by $$\vert\cdot\vert_1, \vert\cdot\vert_2$$ respectively. If being a Cauchy sequence with respect to $$d_1$$ is equivalent to being so with respect to $$d_2$$, then we say the two norms are *equivalent*.

**Remark 2** It is reasonable to worry about the situation in which two norms $$\vert\cdot\vert_1$$ and $$\vert\cdot\vert_2$$ are equivalent, but they introduce different equivalent relationships on the set of Cauchy sequences. However, given two equivalent norms, $$\vert a_n\vert_1$$ converges to 0 if and only if it does so with respect to $$d_2$$. (Hint: prove by contradiction and consider the sequence $$(1/a_n)$$.)

**Definition 3** The trivial norm on $$F$$ is a norm $$\vert\cdot\vert$$ such that $$\vert0\vert=0$$ and $$\vert x\vert=1$$ for $$x\neq 0$$.

Since we are interested in norms that generate different completions of the field, it would be great if we can classify all nontrivial norms modulo the norm equivalence.

### Alternative norms on rationals

**Definition 4** Let $$p$$ be any prime number. For any non-zero integer $$a$$, let $$\mathrm{ord}_pa$$ be the highest power of $$p$$ which divides $$a$$. For any rational $$x=a/b$$, define $$\mathrm{ord}_px=\mathrm{ord}_pa-\mathrm{ord}_pb$$. Further define a map $$\vert\cdot\vert_p$$ on $$\mathbb{Q}$$ as follows:

$$\vert x\vert_p = \begin{cases}p^{-\mathrm{ord}_px} & \text{if }x\neq 0 \\ 0 & \text{if }x=0\end{cases}.$$

**Proposition 1** $$\vert\cdot\vert_p$$ is a norm on $$\mathbb{Q}$$. We call it the $$p$$-adic norm on $$\mathbb{Q}$$.

*Proof (sketch)* We only check the triangle inequality. Notice that

$$\begin{align*}
\mathrm{ord}_p\left(\frac{a}{b}-\frac{c}{d}\right) &=\mathrm{ord}_p\left(\frac{ad-bc}{bd}\right) \\
&= \mathrm{ord}_p(ad-bc)-\mathrm{ord}_p(bd) \\
&\geq \min(\mathrm{ord}_p(ad), \mathrm{ord}_p(bc)) – \mathrm{ord}_p(bd) \\
&= \min(\mathrm{ord}_p(ad/bd), \mathrm{ord}_p(bc/bd)).
\end{align*}$$

Therefore, we obtain

$$\vert a/b-c/d\vert_p \leq \max(\vert a/b\vert_p, \vert c/d\vert_p) \leq \vert a/b\vert_p+\vert c/d\vert_p$$. <!--tomb-->

The following theorem due to Ostrowski classifies all possible norms on the rationals up to norm equivalence. We denote the standard absolute value by $$\vert\cdot\vert_\infty$$.

**Theorem 2 (Ostrowski 1916)** Every nontrivial norm $$\vert\cdot\vert$$ on $$\mathbb{Q}$$ is equivalent to $$\vert\cdot\vert_p$$ for some prime $$p$$ or for $$p=\infty$$.

*Proof* We consider two cases 

1. There is $$n\in\{1,2,\ldots\}$$ such that $$\vert n\vert>1$$; 
1. For all $$n\in\{1,2,\ldots\}$$, $$\vert n\vert\leq 1$$.

As we shall see, in the 1st case, the norm is equivalent to $$\vert\cdot\vert_\infty$$, whereas, in the 2nd case, the norm is equivalent to $$\vert\cdot\vert_p$$ for some prime $$p$$.

**Case 1** Let $$n_0$$ be the least such $$n\in\{1,2,\ldots\}$$ such that $$\vert n\vert>1$$. Let $$\alpha > 0$$ be such that $$\vert n_0\vert=n_0^\alpha$$. For every positive integer $$n$$, if $$n_0^s \leq n < n_0^{s+1}$$, then we can write it in $$n_0$$-base: $$n = a_0 + a_1n_0 + \ldots + a_sn_0^s.$$

By the choice of $$n_0$$, we know that $$\vert a_i\vert\leq 1$$ for all $$i$$. Therefore, we obtain

$$\begin{align*}
\vert n\vert & \leq \vert a_0\vert + \vert a_1\vert\vert n_0\vert + \ldots + \vert a_s\vert\vert n_0\vert^s \\
& \leq 1 + \vert n_0\vert + \ldots \vert n_0\vert^s \\
& \leq n_0^{s\alpha}\left(1+n_0^{-\alpha}+n_0^{-2\alpha}+\ldots\right) \\
& \leq Cn^\alpha,
\end{align*}$$

where $$C$$ does not depend on $$n$$. Replace $$n$$ by $$n^N$$ and get $$\vert n\vert^N = \vert n^N\vert \leq Cn^{N\alpha}$$, and so $$\vert n\vert\leq \sqrt[N]{C}n^\alpha$$. As we can choose $$N$$ to be arbitrarily large, we obtain $$\vert n\vert \leq n^\alpha$$.

On the other hand, we have

$$\begin{align*}
\vert n\vert & \geq \vert n_0^{s+1}\vert – \vert n_0^{s+1}-n\vert \\
& \geq n_0^{(s+1)\alpha} – (n_0^{s+1}-n_0^s)^\alpha\\
& = n_0^{(s+1)\alpha}\left[1-(1-1/n_0)^\alpha\right] \\
& > C'n^\alpha.
\end{align*}$$

Using the same trick, we can actually take $$C'=1$$. Therefore $$\vert n\vert = n^\alpha$$. It is easy to see it is equivalent to $$\vert\cdot\vert_\infty$$.

**Case 2** Since the norm is nontrivial, let $$n_0$$ be the least $$n$$ such that $$\vert n\vert<1$$. We claim that $$n_0=p$$ is a prime, and $$\vert q\vert=1$$ if $$q$$ is a prime other than $$p$$.

Suppose $$\vert q\vert < 1$$. Find $$M$$ large enough so that both $$\vert p^M\vert$$ and $$\vert q^M\vert$$ are less than $$1/2$$. By Bézout's lemma, there exists $$a,b\in\mathbb{Z}$$ such that $$ap^M + bq^M = 1$$. However, $$1 = \vert1\vert \leq \vert a\vert\vert p^M\vert + \vert b\vert\vert q^M\vert < 1/2 + 1/2 = 1,$$ a contradiction.

Therefore, we know $$\vert n\vert=\vert p\vert^{ord_p n}$$. It is easy to see it is equivalent to $$\vert\cdot\vert_p$$. <!--tomb-->

### Non-Archimedean Norm

As one might have noticed, the $$p$$-adic norm satisfies an inequality stronger than the triangle inequality, namely $$\vert a\pm b\vert_p\leq \max(\vert x\vert_p, \vert y\vert_p)$$.

**Definition 5** A norm is non-Archimedean provided $$\vert x\pm y\vert\leq \max(\vert x\vert, \vert y\vert)$$.

The world of non-Archimedean norm is weird. Here are two examples.

**Proposition 3 (no scalene triangles)** If $$\vert x\vert\neq \vert y\vert$$, then $$\vert x\pm y\vert = \max(\vert x\vert, \vert y\vert)$$.

*Proof* Suppose $$\vert x\vert < \vert y\vert$$. On one hand, we have $$\vert x\pm y\vert \leq \vert y\vert$$. On the other hand, $$\vert y\vert \leq \max(\vert x\pm y\vert, \vert x\vert)$$. Since $$\vert x\vert < \vert y\vert$$, we must have $$\vert y\vert \leq \vert x\pm y\vert$$. <!--tomb-->

**Proposition 4 (all points are centers)** $$D(a, r^-) = D(b, r^-)$$ for all $$b\in D(a, r^-)$$ and $$D(a, r) = D(b,r)$$ for all $$b\in D(a,r)$$, where $$D(c, r^-) = \{x : \vert x-c\vert < r\}$$ and $$D(c,r)=\{x:\vert x-c\vert\leq r\}$$.

### Construction of $$p$$-adic numbers

The $$p$$-adic numbers are the completion of $$\mathbb{Q}$$ via the $$p$$-adic norm.

**Definition 5** The set of $$p$$-adic numbers is defined as

$$\mathbb{Q}_p = \{\text{Cauchy sequences with respect to }\vert\cdot\vert_p\} / \sim_p,$$

where $$(a_n)\sim_p(b_n)$$ iff $$\vert a_n-b_n\vert_p\to 0$$ as $$n\to\infty$$.

We would like to extend $$\vert\cdot\vert_p$$ from $$\mathbb{Q}$$ to $$\mathbb{Q}_p$$. When extending $$\vert\cdot\vert_\infty$$ from $$\mathbb{Q}$$ to $$\mathbb{R}$$, we set $$\vert[(a_n)]\vert_\infty$$ to be $$[(\vert a_n\vert)]$$, an element in $$\mathbb{R}$$. However, the values that $$\vert\cdot\vert_p$$ can take after the extension are still in $$\mathbb{Q}$$.

**Definition 6** The extension of $$\vert\cdot\vert_p$$ on $$\mathbb{Q}_p$$ is defined by $$\vert[(a_n)]\vert_p = \lim_{n\to\infty}\vert a_n\vert_p$$.

**Remark 3** Suppose $$(a_n)\sim_p (a_n')$$. Then $$\lim_{n\to\infty}\vert a_n-a_n'\vert_p=0$$, and so $$\lim_{n\to\infty}\vert a_n\vert_p=\lim_{n\to\infty}\vert a_n'\vert_p$$. Moreover, one can prove that $$\lim_{n\to\infty}\vert a_n\vert_p$$ always exists provided that $$(a_n)$$ is a Cauchy sequence. (Hint: Suppose $$\lim_{n\to\infty}\vert a_n\vert_p > 0$$. There exists $$\epsilon > 0$$ such that $$\vert a_n\vert_p > \epsilon$$ infinitely often. Choose $$N$$ enough so that $$\vert a_m – a_n\vert_p < \epsilon$$ for all $$m,n>N$$. Use Proposition 3 to deduce a contradiction.)

### Representation of $$p$$-adic Numbers

Even though each real number is an equivalence class of Cauchy sequences, each equivalence class has a canonical representative. For instance, the canonical representative of $$\pi$$ is $$(3, 3.1, 3.14, 3.141, 3.1415, \ldots)$$. The analog for $$\mathbb{Q}_p$$ is the following.

**Theorem 5** Every equivalence class $$a$$ in $$\mathbb{Q}_p$$ for which $$\vert a\vert_p\leq 1$$ has exactly one representative Cauchy sequence of the form $$(a_i)$$ for which (1) $$0\leq a_i < p^i$$ for $$i=1,2,3,\ldots$$; (2) $$a_i = a_{i+1} {\pmod{p^i}}$$ for $$i=1,2,3,\ldots$$.

The proof of uniqueness is a simple definition chasing. For the proof of existence, we shall repeatedly apply the following lemma.

**Lemma 6** For every $$b\in\mathbb{Q}$$ for which $$\vert b\vert_p \leq 1$$ and $$i\in\mathbb{N}$$, there exists $$a\in\{0, \ldots, p^i-1\}$$ such that $$\vert a-b\vert_p \leq p^{-i}$$.

*Proof* Suppose $$b=m/n$$ is in the lowest form. As $$\vert b\vert_p\leq 1$$, we know that $$(n, p^i)=1$$. By Bézout's lemma, $$an+a'p^i=m$$ for some integers $$a,a'$$. We may assume $$a\in\{0,\ldots,p^i-1\}$$. Note that $$a-b=a'p^i/n$$, and so $$\vert a-b\vert_p \leq p^{-i}$$. <!--tomb--> for lemma.

Suppose $$(c_i)$$ is a representative of $$a$$. As $$(c_i)$$ is a Cauchy sequence, we can extract a subsequence $$(b_i)$$ such that $$\vert b_i – b_j\vert \leq p^{-i}$$ for all $$i < j$$ which is still a representative of $$a$$. Using the lemma above, for each $$b_i$$, we can find $$0 \leq a_i < q^i$$ such that $$\vert a_i-b_i\vert_p \leq q^{-i}$$. Therefore $$(a_i)$$ is a representative of $$a$$ as well. For all $$i< j$$, we have

$$\vert a_i-a_j\vert_p \leq \max(\vert a_i – b_i\vert_p, \vert b_i-b_j\vert_p, \vert b_j-a_j\vert_p) \leq q^{-i},$$

Therefore $$q^i$$ divides $$a_i – a_j$$. 
<!--tomb-->

For $$\vert a\vert_p\leq 1$$, we write

$$a=b_0 + b_1p + b_2p^2 + \ldots,$$

where $$(b_{n-1}b_{n-2} \ldots b_0)_p = a_n$$.

What about $$\vert a\vert_p > 1$$? As $$\vert ap^m\vert=\vert a\vert/p^m$$, $$\vert ap^m\vert\leq 1$$ for some natural number $$m$$. By the representation theorem, we can write

$$ap^m = b_0 + b_1p + b_2p^2 + \ldots, \text{ and }a = b_0p^{-m} + b_1p^{-m+1} + b_2p^{-m+2} + \ldots.$$

Using the representation of $$p$$-adic numbers, one can perform arithmetic operations such as addition, subtraction, multiplication and division.

Like $$\mathbb{R}$$, $$\mathbb{Q}_p$$ is not algebraically closed. Though $$\mathbb{C}$$, the algebraic closure of $$\mathbb{R}$$, has degree $$2$$ over $$\mathbb{R}$$, and it is complete with respect to the absolute value, it is not so for $$\overline{\mathbb{Q}_p}$$, the algebraic closure of $$\mathbb{Q}_p$$. In fact, $$\overline{\mathbb{Q}_p}$$ has infinite degree over $$\mathbb{Q}_p$$ and is, unfortunately, not complete with respect to proper extension of $$\vert\cdot\vert_p$$. The good news is that the completion of $$\overline{\mathbb{Q}_p}$$, denoted by $$\Omega$$ is algebraically closed.