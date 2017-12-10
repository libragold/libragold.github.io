---
layout: post
title:  "Communicating through randomness"
categories: blog
tags: hamming-code math.CO
---
This week Staren sent me a puzzle on WeChat. After we discovered a solution, I tried to track back to the source. I found it appeared in the blog post [Yet another prisoner puzzle](https://web.archive.org/web/20161207071105/http://ocfnash.wordpress.com/2009/10/31/yet-another-prisoner-puzzle/) by Oliver Nash. The author seemed to work at a quantitative trading company SIG at that time. Given that Staren is working at JP Morgan, I guess this is one of those brain-teasers that was circulating among the traders around year 2010. Here is a version of the puzzle that was used in that blog post.<!--more-->

    A room contains a normal 8 by 8 chessboard together with 64 identical coins, each with one "heads" side and one "tails" side. Two prisoners are at the mercy of a typically eccentric jailer who has decided to play a game with them for their freedom. The rules are the game are as follows.

    The jailer will take one of the prisoners (let us call him the "first" prisoner) with him into the aforementioned room, leaving the second prisoner outside. Inside the room the jailer will place exactly one coin on each square of the chess board, choosing to show heads or tails as he sees fit (e.g. randomly). Having done this he will then choose one square of the chess board and declare to the first prisoner that this is the "magic" square. The first prisoner must then turn over exactly one of the coins and exit the room. After the first prisoner has left the room, the second prisoner is admitted. The jailer will ask him to identify the magic square. If he is able to do this, both prisoners will be granted their freedom.

    These rules are explained to both prisoners before the game begins and they are allowed some time together to discuss their strategy. Of course the question is: what strategy should the prisoners adopt?

There is an extremely simple and clever solution that uses the XOR operation. However we will detour into the realm of linear algebra and information theory. At the end of the post, we shall come back to the elegant one-line solution.

In this puzzle, it does not matter that we have a 8 by 8 chessboard to place the coins. All it matters is that we have $$n=64$$ places to put the coins in. Also it does not matter that the jailer declare a magic square. All it matters is that he pick a magic number from $$0, 1, \ldots, n-1$$, which corresponds to the position of the magic square.

Henceforth, we consider the following puzzle.

The jailer chooses an $$n$$-bit binary and pick a magic number from $$1, 2, \ldots, n$$. The first prisoner flips exactly at most one bit of the binary (not necessarily the magic bit) and shows the second prisoner the altered binary. What strategy should the prisoners adopt so that the second prisoner is able to recover the magic number?

I have changed the puzzle a little bit. In the original puzzle, the first prisoner must flip a bit. Now we allow him to do nothing if he wants to. We shall solve this weaker version of the puzzle first.

If we think of the set of all the $$n$$-bit binaries as a metric space under the Hamming distance. I claim such strategy exists if and only if one can partition all the $$n$$-bit binaries into $$n$$ groups denoted as $$A_1, \ldots, A_n$$ such that for all $$k$$, the 1-neighborhood of $$A_k$$ covers all the $$n$$-bit binaries, i.e. any $$n$$-bit binary is at most 1-bit away from some binary in $$A_k$$.

The reason is as follows. Given such partition $$A_1, \ldots, A_n$$. If the jailer chooses the initial binary $$x$$ and the magic number $$k$$, because there is some binary, say $$y$$, in $$A_k$$ such that $$x$$ and $$y$$ are at most 1 bit off, the first prisoner can turn the initial binary into $$y$$ by flipping at most 1 bit in $$x$$. The second prisoner then can take this binary $$y$$, look up the partition $$A_1, \ldots, A_n$$ and find the index of the group which contains $$y$$. Conversely, one can argue it is necessary to have such a partition of all the binaries if one has the strategy.

For some reason we will see later, we call a subset $$A$$ of $$n$$-bit binaries a covering code provided its 1-neighborhood covers all $$n$$-bit binaries. In terms of covering codes, our goal is to find $$n$$ disjoint covering codes. By the way, in information theory, people call a subset of binaries a code.

Notice that if we can find $$n+1$$ disjoint covering codes, we can find a strategy that works even if we allow the jailer to pick the magic number from $$1, 2, \ldots, n+1$$. However we can not hope for more than $$n+1$$ disjoint covering codes. Here is why. Suppose we have $$N$$ disjoint covering codes. By pigeonhole principle, there is a covering code, say $$A$$, whose size is no more than $$2^n/N$$. Note that the 1-neighborhood of a binary contains exactly $$n+1$$ binaries. Hence the 1-neighborhood of $$A$$ contains at most $$2^n\times\frac{n+1}{N}$$. In order to have the 1-neighborhood of $$A$$ to cover all the binaries, we must have $$N\leq n+1$$. Moreover, if $$N=n+1$$, all codes should have the same size $$2^n/(n+1)$$.

Let us start with small $$n$$.

- For $$n=1$$, we can find 2 disjoint covering codes $$A_1=\{0\}, A_2=\{1\}$$.
- For $$n=2$$, we can find 2 disjoint covering codes $$A_1=\{00, 11\}, A_2=\{01, 10\}$$ or $$A_1=\{00, 01\}, A_2=\{10, 11\}$$.
- For $$n=3$$, we can find 4 disjoint covering codes $$A_1=\{000,111\}, A_2=\{001,110\}, A_3=\{010,101\}, A_4=\{100, 011\}$$.
- For $$n=4$$, we can take 4 disjoint covering codes by appending 0,1 to the covering codes for $$n=3$$. These covering codes are $$A_1=\{*000,*111\}, A_2=\{*001,*110\}, A_3=\{*010,*101\}, A_4=\{*100, *011\}$$ where $$*$$ is a wild card that can be either 0 or 1.
- For $$n=5$$, it is impossible to find 5 disjoint covering codes because by pigeonhole principle one of the 5 disjoint covering codes would contain no more than $$2^5/5\sim 6$$ binaries and the 1-neighborhood of any 6-element subset will always have 2 binaries not covered. This can be checked by a computer program.

It is interesting to see that for some $$n$$ we can find $$n$$ or $$n+1$$ disjoint covering codes and for some $$n$$, for instance 5, there are no $$n$$ disjoint covering codes. The situation is quite complicated here.

Therefore we had better focus on the extremal cases in which we can find $$n+1$$ disjoint covering codes. If it is the case that $$n+1$$ disjoint covering codes exist, all the covering codes should be of the same size $$2^n/(n+1)$$ and for each covering code $$A$$, the 1-neighborhoods of two distinct point in $$A$$ do not overlap. This implies that $$n=2^m-1$$ for some $$m$$. Since we are interested in the extremal case, henceforth we always assume $$n=2^m-1$$.

Even finding one covering code is hard besides that our goal is to find $$n+1$$ many of them. However, Richard Hamming in 1950 invented the first error correction code, the [Hamming code](https://en.wikipedia.org/wiki/Hamming_code) $$H$$, which has the properties:

1. it is a linear code, i.e., $$H$$ is a $$(n-m)$$-dimensional linear subspace of $$\mathbb{Z}_2^n$$, the liner space of all the $$n$$-bit binaries over the finite field $$\mathbb{Z}_2$$;
1. the minimum Hamming distance between two distinct elements in $$H$$ is exactly three.

For an introduction to Hamming code, I recommend Thirty-three Miniatures by Jiri Matousek. The 5th miniature, Error-Correcting Codes, includes detailed construction of the Hamming code.

Because of the 1st property, $$H$$ has $$2^{n-m}$$ elements. The 2nd property says that the 1-neighborhoods of any two distinct elements in $$H$$ are disjoint since $$1+1<3$$. Hence the 1-neighborhood of $$H$$ contains $$2^{n-m}(n+1)=2^{n-m}2^m=2^n$$ many elements. In other words, the Hamming code is a linear covering code!

Good! We have found a linear covering code $$H$$. By translating the Hamming code $$H$$ by $$\mathbf{e_1}=100\ldots 00, \mathbf{e_2}=010\ldots 00, \ldots, \mathbf{e_n}=000\ldots 01$$ respectively, we have $$n+1$$ covering codes in total (including $$H$$ itself) since a translate of a covering code is still a covering code. Moreover, they are disjoint from each other because of the 2nd property of Hamming code.

Great! We have found $$n+1=2^m$$ disjoint covering codes for $$n$$-bit binaries. We can take this construction and use the wild card trick to get $$n+1$$ disjoint covering codes for $$n+1$$-bit binaries. In fact, for any $$n+1$$ disjoint covering codes for $$n$$-bit binaries, say $$A_0, \ldots, A_n$$, define $$A_k^* = \{0,1\}\times A_k $$. For each $$k$$, $$A_k^*$$ is a covering code for $$n$$-bit binaries, and what’s more, they are disjoint.

Hence the weaker version of the puzzle in which the first prisoner can opt to not flip the coin is totally settled since $$8\times 8=2^6$$. The same strategy works for the stronger version of the puzzle, because if unfortunately the initial binary is an element of $$A_k^* = \{0,1\}\times A_k $$ and the magic number is also $$k$$, the first prisoner can flip the leftmost bit so that the outcome stays in $$A_k^*$$.

Practically, in order to achieve such strategy, the first prisoner needs to memorize the Hamming code. However there is an easy way to get the Hamming code as it can be characterized as follows.

The Hamming code is the solution set of the linear system $$R\mathbf{x}=\mathbf{0}$$, where the matrix $$R=[\mathbf{c_1}, \mathbf{c_2}, \ldots, \mathbf{c_n}]$$ is an $$m \times n$$ matrix whose $$k$$th column $$\mathbf{c_k}$$ is the binary expansion of $$k$$ for $$k=1,2,\ldots, n$$.

For instance, when $$m=3, n=2^m-1=7$$, the matrix $$R=\begin{bmatrix}0 & 0 & 0 & 1 & 1 & 1 & 1\\ 0  & 1 & 1 & 0 & 0 & 1 & 1\\ 1 & 0 & 1 & 0 & 1 & 0 & 1\end{bmatrix}.$$

Similarly, we can characterize $$\{0,1\}\times H$$ as the solution set of $$\begin{bmatrix}\mathbf{0} & R\end{bmatrix}\mathbf{x}=\mathbf{0}.$$ We denote $$R^*=[\mathbf{c_0}, \mathbf{c_1}, \ldots, \mathbf{c_n}]$$ as the matrix $$R$$ prepended by a zero column.

Suppose $$x_0x_1\ldots x_n$$ is in $$\{0,1\}\times H$$. This means $$\sum_{x_k\neq 0}\mathbf{c_k}=\sum_{k=0}^nx_k\mathbf{c_k}=\mathbf{0},$$ where all summations take place in $$\mathbb{Z}_2^n$$. The left hand side of the equation above can be thought as the following procedure: we take all indices of the non-zero bit in the binary, $$\{k: x_k\neq 0\}$$, write out the binary expansions of them, $$\{\mathbf{c_k}: x_k\neq 0\}$$ and then add them up bitwise. Recall that adding binaries bitwise is equivalent to the XOR operation of numbers. The number corresponding to the left hand side is $$\mathrm{XOR}_{x_k\neq 0}k$$. We call this number the XOR-signature of the binary $$x_0x_1\ldots x_n$$. Therefore the XOR-signature $$\mathrm{XOR}_{x_k\neq 0}k=0$$ is another characterization of the set $$\{0,1\}\times H$$. Similarly, a binary $$x_0x_1\ldots x_n$$ is in $$\{0,1\}\times (H+\mathbf{e_k})$$ if and only if its XOR-signature is equal to $$k$$.

All right. Now we have a convenient way to tell which covering code a binary belongs to according to its XOR-signature. How will this help the first prisoner to figure out which coin to flip? Given the initial binary $$x_0x_1\ldots x_n$$, the first prisoner can compute its XOR-signature denoted by $$s$$. He wants to flip the $$k$$th bit of the binary so as to change its XOR-signature from $$s$$ to $$s’$$ which is the magic number that the jailer has picked from $$0,1,\ldots, n(=2^m-1)$$. Note that when he flips the $$k$$th bit of the binary, he will change the XOR-signature from $$s$$ to $$s \mathrm{XOR} k$$. So $$k$$ must satisfy $$s \mathrm{XOR} k=s’$$. One can solve this equation by XOR both sides by $$s$$ and get $$k=s \mathrm{XOR} s \mathrm{XOR} k = s \mathrm{XOR} s’$$.

In other words, the first prisoner only needs to compute the XOR-signature of the initial binary, say $$s$$ and flip the $$(s\mathrm{XOR}s’)$$th bit of the binary, which will change the XOR-signature of the binary from $$s$$ to $$s’$$. Then the second prisoner comes in and compute the XOR-signature of the new binary which gives the magic number.