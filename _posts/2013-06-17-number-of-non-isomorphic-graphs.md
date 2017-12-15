---
layout: post
title:  "Number of non-isomorphic graphs"
categories: blog
tags: math.CO
excerpt:
  Let $$g(k)$$ be the number of non-isomorphic graphs with $$n$$ vertices and $$k$$ edges. We prove that the sequence $$g_n(0),\ldots, g_n({n\choose 2})$$ is unimodal.
---
This expository essay is to test my understanding of the techniques used in *More Bricks – More Walls?* in Thirty-three Miniatures by Jiří Matoušek’s.

We shall prove the sequence $$g_n(0),\ldots, g_n({n\choose 2})$$ is unimodal, i.e., it is first nondecreasing and then, from some point on, non-increasing, where $$g_n(k)$$ is the number of non-isomorphic graphs with $$n$$ vertices and $$k$$ edges. In particular, we shall prove

$$g_n(0)\leq g_n(1)\leq\ldots\leq g_n(\lfloor m/2\rfloor)=g_n(\lceil m/2\rceil)\geq\ldots\geq g_n(m-1)\geq g_n(m),$$

where $$m={n\choose 2}$$.

Throughout the article, the number of vertices, which is denoted as $$n$$, is always fixed. And $$m$$ always stands for the maximal number of edges between $$n$$ vertices.

Notice that taking the complement of graphs establishes a bijection between graphs with $$k$$ edges and graphs with $$m-k$$ edges. Moreover, two graphs are isomorphic if and only if their complement graphs are isomorphic. Thus we have $$g_n(k)=g_n(m-k)$$. Hence it is enough to show that $$g_n(k)\leq g_n(l)$$ for all $$k\leq l\leq m/2$$.

Denote $$U, V$$ be the sets of all graphs with $$k, l$$ edges on the fixed vertex set $$[n]$$ respectively. Let $$r, s$$ denote the number of non-isomorphic graphs in $$U, V$$. By our notation above, $$r=g_n(k), s=g_n(l)$$. We shall show $$r\leq s$$. The graph $$G$$ is the bipartite graph between $$U$$ and $$V$$ with $$u\sim v$$ if and only if $$u$$ is a subgraph of $$v$$.

Let $$B=(b_{uv})_{u\in U, v\in V}$$ be the bipartite adjacent matrix of $$G$$, where $$b_{uv}=1$$ if $$u$$ and $$v$$ are adjacent in $$G$$, otherwise $$0$$.

We claim the matrix $$B$$ is of full rank. As it is easy to see the size of $$U$$ is no greater than the size of $$V$$, we shall prove an equivalent statement that the matrix $$B$$ is of full row rank, that is the rows of $$B$$ are linearly independent.

Suppose not. There is a non-zero row vector $$y$$ in $$\mathbb{R}^{U}$$ such that $$yB=0$$. Notice the coordinates of $$y$$ are indexed by the elements in $$U$$. Let $$K^*\in U$$ such that $$y_{K^*}\neq 0$$.

Now we partition $$U, V$$ into $$k+1$$ according to the number of edges in the intersection of the graph with $$K^*$$: $$K_i$$ is the set of graphs in $$U$$ who share $$i$$ common edges with $$K^*$$ and $$L_j$$ is the set of graphs in $$V$$ who share $$j$$ common edges with $$K^*$$ for all $$i, j=0,\ldots, k$$. Remember the number of edges in $$K^*$$ is $$k$$ and $$K_k$$ contains only one element $$K^*$$. Also all $$K_i$$ and $$L_j$$ defined above are non-empty because of the assumption $$k< l\leq m/2$$.

Note that for any $$i, j\in \{0,\ldots, k\}$$, all vertices in $$K_i$$ have the same degree to $$L_j$$ in the bipartite graph $$G$$. This is because the ways to extend a graph with $$k$$ edges and $$i$$ edges in common with $$K^*$$ to graphs with $$l$$ edges and $$j$$ edges in common with $$$$ doesn’t specifically depend the graph we start with. Denote this number as $$d_{ij}$$ and let $$D=(d_{ij})$$ be the matrix. Apparently, $$D$$ is an upper triangular matrix with $$d_{ii}\neq 0$$. Thus $$D$$ is non-singular. On the other hand, as $$k_i\cdot d_{ij}=\sum_{K\in K_i, L\in L_j}B_{KL}$$ where $$k_i$$ is the size of $$K_i$$,

$$D=\mathrm{diag}(k_0^{-1},\ldots, k_k^{-1})FBG,$$

where $$F=(f_{i, u})_{i\in\{0,\ldots, k\}, u\in U}$$ and $$G=(g_{v, j})_{v\in V, j\in\{0,\ldots, k\}}$$ are matrices with $$f_{i, u}=1$$ if and only if $$u\in K_i$$ and $$g_{v, j}=1$$ if and only if $$v\in L_j$$ otherwise $$0$$.

Let $$x$$ be a $$k+1$$ dimensional row vector such that $$x=yE$$, where

$$E=(e_{ui})_{u\in U, i\in\{0,\ldots, k\}}$$

is matrix with $$e_{ui}=1$$ if $$u\in K_i$$ otherwise $$0$$. In fact,

$$x_i=\sum_{u\in U}y_ue_{ui}=\sum_{K\in K_i}y_K.$$

Hence $$x_k=y_{K^*}\neq 0$$ as $$K_k$$ contains only one element $$K^*$$.

Now we have

$$xD=yE\mathrm{diag}(k_0^{-1},\ldots, k_k^{-1})FBG.$$

However it is easy to check $$EF=\mathrm{diag}(k_0,\ldots, k_k)$$ and $$yB=0$$. So $$xD=yBG=0$$ contradicting to the non-singularity of $$D$$ as $$x\neq 0$$.

Now, according to the graph isomorphism the graphs in $$U, V$$ are classified into equivalent classes, denoted as $$U_1,\ldots, U_r, V_1, \ldots, V_s$$.

Similarly, we observe that all vertices in $$V_j$$ have the same degree to $$U_i$$ since the number of ways to restrict two isomorphic graphs to a certain class of isomorphic graphs is the same. Denote this degree as $$d_{ij}$$ as well. And again we claim the matrix $$D$$(different from the one we define before) is of full row rank where $$D=(d_{ij})_{r\times s}$$. This will finish the proof since an $$r\times s$$ matrix of full row rank implies $$r\leq s$$.

Suppose not. We have a non-zero $$r$$ dimensional row vector $$y$$ such that $$yD=0$$. Let $$x\in\mathbb{R}^U$$ be the row vector indexed by $$U$$ such that $$x_u=y_i$$ for all $$u\in U_i$$. Thus for all $$u\in V_j$$ we have

$$(xB)_v=\sum_{u\in U}x_uB_{uv}=\sum_{i\in[r]}\sum_{u\in U_i}x_uB_{uv}=\sum_{i\in[r]}y_i\sum_{u\in U_i}B_{uv}=\sum_{i\in[r]}y_id_{ij}=(yD)_j=0.$$

Notice $$x\neq 0$$ but $$xB=0$$ which contradicts with the non-sigularity of $$B$$.

**Remark** This proof appears to me as an intricate idea similar to finding an injection. To prove one set is smaller than the other, one would just hope to find an injection from one set to the other. But this is hard in this problem because those two sets we are considering are sets of equivalent classes. On the other hand, in this problem, the inclusion mapping works just fine on the level of graphs though it breaks down on the level of equivalent classes. Thus we should come up with a delicate analysis on the bipartite graph induced by the inclusion mapping. And I think this is the motivation behind the proof.