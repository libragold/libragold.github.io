---
layout: post
title:  "Stirling number of the second kind"
categories: blog
tags: probabilistic-method math.CO
excerpt:
  We shall show an upper bound on the Stirling number of the second kind, a byproduct of a homework exercise of Probabilistic Combinatorics offered by Prof. Tom Bohman.
---
We shall show an upper bound on the Stirling number of the second kind, a byproduct of a homework exercise of Probabilistic Combinatorics offered by Prof. [Tom Bohman](http://www.math.cmu.edu/~tbohman/).

**Definition** A Stirling number of the second kind (or Stirling partition number), denoted by $$S(n,k)$$, is the number of ways to partition a set of $$n$$ objects into $$k$$ non-empty subsets.

**Proposition** For all $$n,k$$, we have
$$
S(n,k) \leq \frac{k^n}{k!}\left(1-(1-1/m)^k\right)^m.
$$

*Proof* Consider a random bipartite graph with partite sets $$U:=[n],V:=[k]$$. For each vertex $$u\in U$$, it (independently) connects to exactly one of the vertices in $$V$$ uniformly at random. Suppose $$X$$ is the set of non-isolated vertices in $$V$$. It is easy to see that
$$
\operatorname{Pr}\left(X=V\right) = \frac{\text{number of surjections from }U\text{ to }V}{k^n} = \frac{k!S(n,k)}{k^n}.
$$
On the other hand,  we claim that for any $$\emptyset \new A\subset[k]$$ and $$i\in [k]∖setminus A$$,
$$
\operatorname{Pr}\left(i\in X \mid A\subset X\right) \leq \operatorname{Pr}\left(i\in X\right).
$$
Note that the claim is equivalent to
$$
\operatorname{Pr}\left(A\subset X \mid i\notin X\right) \geq \operatorname{Pr}\left(A\subset X\right).
$$
Consider the same random bipartite graph with $$V$$ replaced by $$V':=[k]∖setminus\{i\}$$ and let $$X'$$ be the set of non-isolated vertices in $$V'$$. The claim is justified since
$$
\operatorname{Pr}\left(A\subset X\mid i\notin X\right) = \operatorname{Pr}\left(A\subset X'\right) \geq \operatorname{Pr}\left(A\subset X\right).
$$
Set $$A:=[i−1]$$ in above for $$i=2,\dots,k$$. Using the multiplication rule with telescoping the conditional probability, we obtain 
$$
\begin{eqnarray}\operatorname{Pr}\left(X=V\right) &=& \operatorname{Pr}\left(1\in X\right)\operatorname{Pr}\left(2\in X \mid [1]\subset X\right)\ldots \operatorname{Pr}\left(k\in X\mid [k-1]\subset X\right)\\ & \leq & \operatorname{Pr}\left(1\in X\right)\operatorname{Pr}\left(2\in X\right)\ldots\operatorname{Pr}\left(k\in X\right) \\ & = & \left(1-(1-1/m)^k\right)^m.\end{eqnarray}
$$<!--tomb-->