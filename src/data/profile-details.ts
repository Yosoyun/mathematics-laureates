import type { Laureate } from "./schema";

export type ProfileDetail = Pick<
  Laureate,
  | "biography"
  | "education"
  | "explanation"
  | "majorContributions"
  | "publications"
>;

type DetailInput = {
  biography: string;
  education?: string[];
  contribution: string;
  plain: string;
  student: string;
  advanced: string;
  prerequisites: string[];
  publications: string[];
};

function detail(input: DetailInput): ProfileDetail {
  return {
    biography: input.biography,
    education: input.education,
    majorContributions: [input.contribution],
    explanation: {
      title: input.contribution,
      plain: input.plain,
      student: input.student,
      advanced: input.advanced,
      prerequisites: input.prerequisites,
    },
    publications: input.publications,
  };
}

export const profileDetails: Record<string, ProfileDetail> = {
  "gerd-faltings": detail({
    biography:
      "Gerd Faltings is a German arithmetic geometer whose work changed the scale of what could be proved about Diophantine equations. His proof of the Mordell conjecture, later folded into the proof of finiteness results for abelian varieties, made him a Fields Medalist in 1986 and the 2026 Abel laureate. His career is closely associated with the Max Planck Institute for Mathematics and with modern arithmetic geometry's dialogue between algebraic geometry, Galois representations, and number theory.",
    education: ["PhD, University of Münster"],
    contribution:
      "Proof of the Mordell conjecture and foundational finiteness theorems in arithmetic geometry.",
    plain:
      "Faltings proved that many algebraic curves have only finitely many rational solutions. In everyday terms, he showed that some equations may have scattered solutions, but not an endless supply, giving number theorists a powerful finiteness principle.",
    student:
      "A student can view the Mordell conjecture as a statement about rational points on curves of genus greater than one. Faltings brought tools from algebraic geometry, abelian varieties, and height theory together to control those rational points.",
    advanced:
      "For specialists, Faltings's work connects Arakelov methods, moduli of abelian varieties, Tate conjecture techniques, and isogeny estimates. It reshaped Diophantine geometry by turning finiteness from a guiding expectation into a proved theorem in a central case.",
    prerequisites: [
      "Algebraic geometry",
      "Number theory",
      "Abelian varieties",
      "Height functions",
    ],
    publications: [
      "Endlichkeitssätze für abelsche Varietäten über Zahlkörpern, Inventiones Mathematicae, 1983.",
    ],
  }),
  "masaki-kashiwara": detail({
    biography:
      "Masaki Kashiwara is a Japanese mathematician central to algebraic analysis, representation theory, and the theory of D-modules. His work developed microlocal and sheaf-theoretic methods for systems of linear differential equations, and his theory of crystal bases became a standard language in quantum groups. The Abel Prize and Chern Medal records recognise both the technical force of his theorems and the breadth of the school of mathematics that grew around them.",
    education: ["Doctorate, University of Tokyo"],
    contribution:
      "Algebraic analysis, D-modules, microlocal methods, and crystal bases in representation theory.",
    plain:
      "Kashiwara built tools for studying differential equations by translating analytic questions into algebraic and geometric ones. His work lets mathematicians track hidden structure in equations and in symmetries.",
    student:
      "At student level, D-modules can be seen as algebraic packages for differential equations. Kashiwara's ideas explain how solutions behave near singularities and how representation-theoretic objects can be decomposed using crystal bases.",
    advanced:
      "Advanced readers meet Kashiwara through constructible sheaves, the Riemann-Hilbert correspondence, holonomic D-modules, and global crystal bases for quantized enveloping algebras. These tools connect analysis, category theory, and Lie theory.",
    prerequisites: [
      "Sheaf theory",
      "Differential equations",
      "Lie algebras",
      "Algebraic geometry",
    ],
    publications: [
      "D-Modules and Microlocal Calculus, with Pierre Schapira, American Mathematical Society, 2003.",
    ],
  }),
  "michel-talagrand": detail({
    biography:
      "Michel Talagrand is a French probabilist and analyst known for deep theorems about high-dimensional randomness. His concentration inequalities and work on Gaussian processes explain why random systems can be sharply predictable even when individual components fluctuate. The Abel Prize citation places his influence across probability, functional analysis, spin glasses, statistics, and theoretical computer science.",
    education: ["Doctorat d'État, Université Paris VI"],
    contribution:
      "Concentration of measure, Gaussian processes, empirical processes, and rigorous tools for high-dimensional randomness.",
    plain:
      "Talagrand showed that large random systems often behave far more regularly than intuition suggests. His theorems explain why averages, optima, and random landscapes can concentrate near typical values.",
    student:
      "A student might first learn variance bounds and the law of large numbers. Talagrand's inequalities go much further, giving sharp probability estimates for complex functions of many random variables.",
    advanced:
      "Technically, Talagrand's majorizing-measure and generic-chaining work gives near-optimal control of suprema of stochastic processes. His results also shaped rigorous treatments of spin glasses and empirical process theory.",
    prerequisites: [
      "Measure theory",
      "Probability",
      "Functional analysis",
      "Metric entropy",
    ],
    publications: [
      "Upper and Lower Bounds for Stochastic Processes, Springer, 2014.",
    ],
  }),
  "luis-caffarelli": detail({
    biography:
      "Luis A. Caffarelli is an Argentine-American analyst whose regularity theory changed the study of nonlinear partial differential equations. His work on free boundaries, Monge-Ampère equations, and fully nonlinear elliptic equations explains when solutions that are initially weak or irregular must become smooth. His Abel, Shaw, and Wolf recognitions reflect a career that made PDE methods indispensable in geometry, physics, and optimisation.",
    education: ["PhD, University of Buenos Aires"],
    contribution:
      "Regularity theory for nonlinear PDE, free-boundary problems, and Monge-Ampère equations.",
    plain:
      "Caffarelli studies equations where an unknown shape or boundary is part of the answer. His theorems tell when rough-looking boundaries are actually smooth and predictable.",
    student:
      "Students meet free-boundary problems in melting ice, obstacle problems, or fluid interfaces. Caffarelli developed comparison, compactness, and geometric arguments that reveal regularity hidden inside weak solutions.",
    advanced:
      "In advanced PDE, Caffarelli's work provides central regularity results for fully nonlinear elliptic equations, viscosity solutions, and Monge-Ampère equations, with techniques that continue to guide modern geometric analysis.",
    prerequisites: [
      "Real analysis",
      "Elliptic PDE",
      "Convex analysis",
      "Measure theory",
    ],
    publications: [
      "The regularity of free boundaries in higher dimensions, Acta Mathematica, 1977.",
    ],
  }),
  "dennis-sullivan": detail({
    biography:
      "Dennis Parnell Sullivan is an American mathematician whose work moved between topology, geometry, and dynamical systems with unusual force. In topology he helped create rational homotopy theory and surgery methods; in dynamics he brought geometric and quasiconformal ideas to iteration and Kleinian groups. His Abel, Wolf, and Balzan records recognise a career that repeatedly changed the questions mathematicians ask about spaces and transformations.",
    education: ["PhD, Princeton University"],
    contribution:
      "Rational homotopy theory, manifold topology, Kleinian groups, and conformal dynamics.",
    plain:
      "Sullivan studies shapes and dynamical systems by finding the right algebraic or geometric shadow of the object. Those shadows make difficult spaces easier to compare and classify.",
    student:
      "A student can think of homotopy theory as a way to classify spaces up to continuous deformation. Sullivan introduced algebraic models that capture rational information and made topology interact with geometry and dynamics.",
    advanced:
      "For advanced readers, Sullivan's minimal models, surgery-theoretic insights, and work on quasiconformal dynamics created bridges between rational homotopy, geometric topology, Kleinian groups, and complex dynamics.",
    prerequisites: [
      "Algebraic topology",
      "Differential topology",
      "Complex analysis",
      "Dynamical systems",
    ],
    publications: [
      "Infinitesimal computations in topology, Publications Mathématiques de l'IHÉS, 1977.",
    ],
  }),
  "laszlo-lovasz": detail({
    biography:
      "László Lovász is a Hungarian mathematician whose work made graph theory a central language of modern discrete mathematics and theoretical computer science. He proved landmark results in combinatorics, developed algorithmic methods, and helped connect optimization, probability, and computation. His Abel Prize with Avi Wigderson emphasises how discrete mathematics became a shared foundation for pure mathematics and computer science.",
    education: ["Doctorate, Eötvös Loránd University"],
    contribution:
      "Graph theory, combinatorial optimization, algorithms, and bridges between discrete mathematics and computation.",
    plain:
      "Lovász studies networks: dots connected by lines. His work explains when networks can be coloured, optimized, represented, or efficiently searched.",
    student:
      "Students encounter Lovász through graph colouring, matching, and optimization. His results show how clever algebraic and geometric viewpoints can solve problems that look purely discrete.",
    advanced:
      "At research level, Lovász's theta function, local lemma contributions, graph limits, and semidefinite methods shape extremal combinatorics, algorithm design, and optimization theory.",
    prerequisites: [
      "Combinatorics",
      "Linear algebra",
      "Algorithms",
      "Convex optimization",
    ],
    publications: [
      "The Shannon capacity of a graph, IEEE Transactions on Information Theory, 1979.",
    ],
  }),
  "avi-wigderson": detail({
    biography:
      "Avi Wigderson is an Israeli-American theoretical computer scientist at the Institute for Advanced Study. His work treats computation itself as a mathematical object, especially through complexity, randomness, cryptography, and proof. The Abel Prize shared with László Lovász recognises how his research helped make theoretical computer science one of the deepest mathematical languages of the late twentieth and early twenty-first centuries.",
    education: ["BSc, Technion", "PhD, Princeton University"],
    contribution:
      "Computational complexity, derandomization, cryptography, and the mathematical theory of efficient computation.",
    plain:
      "Wigderson asks which problems can be solved efficiently and how randomness changes the answer. His work helps explain the hidden structure behind algorithms and secure computation.",
    student:
      "A student can start with P versus NP, randomized algorithms, and zero-knowledge proofs. Wigderson's research shows that randomness, hardness, and efficient verification are tightly linked.",
    advanced:
      "Advanced themes include hardness versus randomness, expander graphs, pseudorandomness, interactive proofs, and circuit lower bounds. His work makes complexity theory a meeting point for combinatorics, logic, algebra, and probability.",
    prerequisites: [
      "Algorithms",
      "Discrete mathematics",
      "Probability",
      "Complexity theory",
    ],
    publications: [
      "Mathematics and Computation: A Theory Revolutionizing Technology and Science, Princeton University Press, 2019.",
    ],
  }),
  "karen-uhlenbeck": detail({
    biography:
      "Karen Uhlenbeck is an American geometric analyst whose work brought analytic precision to gauge theory and harmonic maps. She proved compactness and removable-singularity theorems that became basic tools in mathematical physics and differential geometry. As the first woman to receive the Abel Prize, she is also widely recognised for mentoring and institution-building that opened pathways in modern geometric analysis.",
    education: ["BA, University of Michigan", "PhD, Brandeis University"],
    contribution:
      "Gauge theory, harmonic maps, and analytic foundations for geometric analysis.",
    plain:
      "Uhlenbeck showed how to handle fields and surfaces that appear to develop singular points. Her work tells when those apparent defects can be controlled or removed.",
    student:
      "Students can approach her work through variational problems and differential geometry. She used elliptic PDE estimates to study geometric objects defined by energy minimization.",
    advanced:
      "Her compactness theorem for Yang-Mills connections, Coulomb gauge techniques, and removable singularity results became structural in Donaldson theory, gauge theory, and the analysis of geometric variational problems.",
    prerequisites: [
      "Differential geometry",
      "Elliptic PDE",
      "Functional analysis",
      "Gauge theory",
    ],
    publications: [
      "Removable singularities in Yang-Mills fields, Communications in Mathematical Physics, 1982.",
    ],
  }),
  "robert-langlands": detail({
    biography:
      "Robert P. Langlands is a Canadian-American mathematician whose conjectural programme reshaped number theory and representation theory. The Langlands programme predicts deep correspondences among Galois representations, automorphic forms, and harmonic analysis on groups. His Abel, Shaw, Wolf, and Nemmers recognitions reflect the extraordinary generative power of a vision that continues to organise much of modern arithmetic geometry.",
    education: [
      "BA and MSc, University of British Columbia",
      "PhD, Yale University",
    ],
    contribution:
      "The Langlands programme linking number theory, automorphic forms, representation theory, and Galois representations.",
    plain:
      "Langlands found that different-looking mathematical worlds may be translations of each other. His programme says that symmetries of equations and symmetries of analytic functions should match in precise ways.",
    student:
      "A student can begin with modular forms and Galois groups. The Langlands viewpoint predicts that arithmetic data from equations corresponds to representation-theoretic data from automorphic forms.",
    advanced:
      "Advanced work involves functoriality, L-functions, trace formulas, automorphic representations, and local-global compatibility. Langlands's framework remains a central research engine rather than a single solved theorem.",
    prerequisites: [
      "Algebraic number theory",
      "Representation theory",
      "Harmonic analysis",
      "Modular forms",
    ],
    publications: [
      "Problems in the theory of automorphic forms, Lecture Notes in Mathematics, 1970.",
    ],
  }),
  "andrew-wiles": detail({
    biography:
      "Sir Andrew J. Wiles is a British number theorist best known for proving Fermat's Last Theorem. His proof worked by establishing a crucial modularity result for semistable elliptic curves, joining Galois representations, modular forms, and arithmetic geometry. The Abel Prize, Fermat Prize, Clay Research Award, Shaw Prize, and other honours recognise not only a famous problem's resolution but a decisive advance in modern number theory.",
    education: ["BA, University of Oxford", "PhD, University of Cambridge"],
    contribution:
      "Proof of Fermat's Last Theorem through modularity methods in arithmetic geometry.",
    plain:
      "Wiles proved that the equation behind Fermat's Last Theorem has no whole-number solutions in the forbidden cases. The route was not a clever trick but a deep bridge between two areas of mathematics.",
    student:
      "Students should know that Wiles connected elliptic curves to modular forms. A hypothetical Fermat solution would create an elliptic curve that could not fit the modularity theory he proved.",
    advanced:
      "The proof uses deformation theory of Galois representations, Hecke algebras, modular curves, and modularity lifting. Taylor-Wiles patching became a central method well beyond Fermat's Last Theorem.",
    prerequisites: [
      "Algebraic number theory",
      "Elliptic curves",
      "Modular forms",
      "Galois representations",
    ],
    publications: [
      "Modular elliptic curves and Fermat's Last Theorem, Annals of Mathematics, 1995.",
    ],
  }),
  "john-nash": detail({
    biography:
      "John F. Nash Jr. was an American mathematician whose research ranged from game theory to geometry and partial differential equations. In mathematics, his embedding theorems and work on nonlinear PDE gave unexpectedly powerful existence and regularity results. The Abel Prize shared with Louis Nirenberg recognised this analytic and geometric legacy, distinct from but compatible with his famous economic influence through Nash equilibrium.",
    education: [
      "BS and MS, Carnegie Institute of Technology",
      "PhD, Princeton University",
    ],
    contribution:
      "Nonlinear PDE, isometric embedding theorems, and mathematical foundations of game theory.",
    plain:
      "Nash showed that abstract geometric spaces can sometimes be placed inside ordinary Euclidean space without distorting their internal distances. He also created the equilibrium idea central to game theory.",
    student:
      "In geometry, an isometric embedding preserves distances measured on a manifold. Nash proved startling embedding theorems by developing new nonlinear analytic methods.",
    advanced:
      "Nash's work introduced techniques such as Nash-Moser iteration and deep regularity ideas for nonlinear elliptic and parabolic equations, influencing geometric analysis and PDE theory for decades.",
    prerequisites: [
      "Differential geometry",
      "Partial differential equations",
      "Functional analysis",
      "Game theory",
    ],
    publications: [
      "The imbedding problem for Riemannian manifolds, Annals of Mathematics, 1956.",
    ],
  }),
  "louis-nirenberg": detail({
    biography:
      "Louis Nirenberg was a Canadian-American analyst at the Courant Institute whose estimates and inequalities became part of the working grammar of PDE. He contributed to elliptic regularity, interpolation inequalities, nonlinear analysis, and geometric problems. His Abel Prize with John Nash and Chern Medal record a career in which technical clarity and collaboration shaped generations of analysts.",
    education: ["BSc, McGill University", "PhD, New York University"],
    contribution:
      "Elliptic partial differential equations, interpolation inequalities, and nonlinear analysis.",
    plain:
      "Nirenberg developed ways to estimate solutions of equations before solving them explicitly. Those estimates reveal smoothness, stability, and structure.",
    student:
      "Students meet his influence through elliptic regularity and Sobolev inequalities. The point is to control derivatives and norms so that weak solutions become meaningful classical objects.",
    advanced:
      "His work includes the Agmon-Douglis-Nirenberg estimates, Gagliardo-Nirenberg inequalities, and major contributions to fully nonlinear elliptic equations and geometric analysis.",
    prerequisites: [
      "Real analysis",
      "Sobolev spaces",
      "Elliptic PDE",
      "Functional analysis",
    ],
    publications: [
      "On elliptic partial differential equations, Annali della Scuola Normale Superiore di Pisa, 1959.",
    ],
  }),
  "pierre-deligne": detail({
    biography:
      "Pierre Deligne is a Belgian mathematician whose work in algebraic geometry transformed the study of varieties over finite fields and beyond. His proof of the Weil conjectures supplied a spectacular confirmation of Grothendieck's cohomological programme. Fields, Abel, Wolf, and Balzan honours recognise his influence across motives, Hodge theory, representation theory, and arithmetic geometry.",
    education: ["Université libre de Bruxelles"],
    contribution:
      "Proof of the Weil conjectures and cohomological methods in algebraic geometry.",
    plain:
      "Deligne proved that counting solutions to polynomial equations over finite fields follows deep geometric rules. His work made arithmetic counting behave like topology.",
    student:
      "A student can think of the Weil conjectures as predictions about zeta functions attached to varieties over finite fields. Deligne used étale cohomology to prove the final and hardest part.",
    advanced:
      "The proof of the Weil conjectures, mixed Hodge theory, weights, and Tannakian ideas made Deligne's work foundational for modern arithmetic geometry and the theory of motives.",
    prerequisites: [
      "Algebraic geometry",
      "Étale cohomology",
      "Number theory",
      "Homological algebra",
    ],
    publications: [
      "La conjecture de Weil I, Publications Mathématiques de l'IHÉS, 1974.",
    ],
  }),
  "terence-tao": detail({
    biography:
      "Terence Tao is an Australian-American mathematician at UCLA whose work spans harmonic analysis, additive combinatorics, PDE, analytic number theory, and random matrices. His Fields Medal and Breakthrough Prize records reflect both depth and unusual breadth. Tao's collaborative work with Ben Green on arithmetic progressions in the primes became a landmark example of transferring ideas between analysis, combinatorics, and number theory.",
    education: [
      "BSc and MSc, Flinders University",
      "PhD, Princeton University",
    ],
    contribution:
      "Harmonic analysis, additive combinatorics, PDE, and analytic number theory, including prime progressions.",
    plain:
      "Tao often finds structure inside objects that look random or chaotic. One famous result says the prime numbers contain arbitrarily long evenly spaced patterns.",
    student:
      "Students can approach the Green-Tao theorem by combining Szemerédi-type combinatorics with analytic estimates for primes. Tao's range shows how tools travel between fields.",
    advanced:
      "His work includes restriction theory, nonlinear dispersive PDE, inverse theorems in additive combinatorics, compressed sensing, and analytic number theory methods for pseudorandom majorants.",
    prerequisites: [
      "Real analysis",
      "Fourier analysis",
      "Combinatorics",
      "Analytic number theory",
    ],
    publications: [
      "The primes contain arbitrarily long arithmetic progressions, with Ben Green, Annals of Mathematics, 2008.",
    ],
  }),
  "maryam-mirzakhani": detail({
    biography:
      "Maryam Mirzakhani was an Iranian mathematician whose work linked hyperbolic geometry, Teichmüller theory, moduli spaces, and dynamics. She became the first woman awarded a Fields Medal, recognised for results on the geometry and dynamics of Riemann surfaces. Her papers revealed exact volume recursions and asymptotic counts of curves, giving concrete structure to spaces that had seemed forbiddingly intricate.",
    education: [
      "BSc, Sharif University of Technology",
      "PhD, Harvard University",
    ],
    contribution:
      "Geometry and dynamics of Riemann surfaces, moduli spaces, and Teichmüller flow.",
    plain:
      "Mirzakhani studied surfaces with holes and handles, asking how curves wind around them. She found surprising formulas for how many curves of a given length can occur.",
    student:
      "Students can picture moduli space as the space of all possible shapes of a surface. Mirzakhani computed volumes of these spaces and linked them to curve-counting problems.",
    advanced:
      "Her work connects Weil-Petersson geometry, earthquake flow, measured laminations, Teichmüller dynamics, and ergodic theory, including a breakthrough analogue of Ratner-type rigidity in moduli-space settings.",
    prerequisites: [
      "Differential geometry",
      "Hyperbolic geometry",
      "Dynamical systems",
      "Algebraic topology",
    ],
    publications: [
      "Weil-Petersson volumes and intersection theory on the moduli space of curves, Journal of the AMS, 2007.",
    ],
  }),
  "manjul-bhargava": detail({
    biography:
      "Manjul Bhargava is a Canadian-American number theorist at Princeton known for new composition laws and arithmetic statistics. He revived and extended the geometry of numbers to count number fields, study class groups, and measure ranks of elliptic curves. The Fields Medal and Clay Research Award records recognise a body of work that combines classical arithmetic questions with modern counting techniques.",
    education: ["AB, Harvard University", "PhD, Princeton University"],
    contribution:
      "Higher composition laws, arithmetic statistics, and geometry-of-numbers methods in number theory.",
    plain:
      "Bhargava studies how many arithmetic objects of a certain kind exist and how they are distributed. His work makes old questions about forms, fields, and elliptic curves countable in new ways.",
    student:
      "A student can begin with Gauss composition of binary quadratic forms. Bhargava found higher analogues and used them to count rings and fields with prescribed algebraic properties.",
    advanced:
      "His parametrisations of rings, average-rank results, and geometry-of-numbers estimates opened major directions in arithmetic statistics and influenced modern approaches to Selmer groups and number fields.",
    prerequisites: [
      "Algebraic number theory",
      "Geometry of numbers",
      "Elliptic curves",
      "Invariant theory",
    ],
    publications: [
      "Higher composition laws I: A new view on Gauss composition, and quadratic generalizations, Annals of Mathematics, 2004.",
    ],
  }),
  "peter-scholze": detail({
    biography:
      "Peter Scholze is a German arithmetic geometer whose introduction of perfectoid spaces gave number theorists a new way to move between characteristic zero and characteristic p. His Fields Medal, Ostrowski Prize, and Clay Research Award records reflect the speed with which his ideas became structural in p-adic geometry, the Langlands programme, and cohomological methods.",
    education: ["Diploma and PhD, University of Bonn"],
    contribution:
      "Perfectoid spaces and new foundations for p-adic arithmetic geometry.",
    plain:
      "Scholze created a language that lets mathematicians compare different number systems by passing to highly completed spaces. This opened paths through problems that had been stuck.",
    student:
      "Students can view perfectoid spaces as geometric objects adapted to p-adic numbers. They make it possible to tilt between characteristic zero and characteristic p while preserving deep information.",
    advanced:
      "His work transformed p-adic Hodge theory, local Langlands methods, diamonds, pro-étale cohomology, and the geometry of Shimura varieties, giving new conceptual tools for arithmetic geometry.",
    prerequisites: [
      "Algebraic geometry",
      "p-adic analysis",
      "Étale cohomology",
      "Number theory",
    ],
    publications: [
      "Perfectoid spaces, Publications Mathématiques de l'IHÉS, 2012.",
    ],
  }),
  "june-huh": detail({
    biography:
      "June Huh is a Korean-American mathematician whose work brought algebraic geometry into the heart of combinatorics. With collaborators, he proved long-standing log-concavity conjectures about matroids and characteristic polynomials by interpreting combinatorial objects through geometric and Hodge-theoretic structures. The Fields Medal recognises this unexpected synthesis of discrete mathematics and algebraic geometry.",
    education: [
      "BA and MS, Seoul National University",
      "PhD, University of Michigan",
    ],
    contribution:
      "Log-concavity theorems in combinatorics using algebraic-geometric and Hodge-theoretic methods.",
    plain:
      "Huh found geometric order inside counting sequences. Numbers that arise from graphs and matroids often rise and fall in a controlled way, and his work explains why.",
    student:
      "Students can start with log-concavity: each term in a sequence is large enough relative to its neighbours. Huh's theorems prove such patterns for important combinatorial invariants.",
    advanced:
      "The work develops combinatorial Hodge theory for matroids and uses Chow rings, Lefschetz properties, and tropical geometry to resolve conjectures of Read, Rota, Heron, and Welsh.",
    prerequisites: [
      "Combinatorics",
      "Algebraic geometry",
      "Matroid theory",
      "Hodge theory",
    ],
    publications: [
      "Hodge theory for combinatorial geometries, with Karim Adiprasito and Eric Katz, Annals of Mathematics, 2018.",
    ],
  }),
  "maryna-viazovska": detail({
    biography:
      "Maryna Viazovska is a Ukrainian mathematician at EPFL whose solution of the sphere-packing problem in dimension eight was a rare exact answer in a notoriously difficult area. She constructed a special modular-form-based function proving the optimality of the E8 lattice packing, and joint work extended the method to dimension twenty-four. Her Fields Medal, Fermat Prize, and Clay Research Award records all point to this striking fusion of analysis, number theory, and geometry.",
    education: [
      "BSc and MSc, Taras Shevchenko National University of Kyiv",
      "PhD, University of Bonn",
    ],
    contribution:
      "Sharp sphere-packing results in dimensions 8 and 24 using modular forms and Fourier analysis.",
    plain:
      "Viazovska solved the problem of the densest way to stack equal spheres in eight dimensions. The answer is an exceptionally symmetric pattern called the E8 lattice.",
    student:
      "Students can think of sphere packing as arranging equal balls without overlap while wasting as little space as possible. Viazovska built an auxiliary function that proves no arrangement beats E8.",
    advanced:
      "The proof uses Fourier analysis, modular forms, interpolation, and linear programming bounds in Euclidean space. It completed the Cohn-Elkies strategy in dimensions 8 and, with collaborators, 24.",
    prerequisites: [
      "Fourier analysis",
      "Modular forms",
      "Euclidean geometry",
      "Number theory",
    ],
    publications: [
      "The sphere packing problem in dimension 8, Annals of Mathematics, 2017.",
    ],
  }),
  "hugo-duminil-copin": detail({
    biography:
      "Hugo Duminil-Copin is a French probabilist whose work made lattice models of statistical physics more rigorous and more precise. He proved results about phase transitions, percolation, self-avoiding walks, and the Ising model, often showing exactly when a system changes macroscopic behaviour. His Fields Medal recognises a programme that turns physical intuition about critical phenomena into mathematical theorems.",
    education: ["École Normale Supérieure", "PhD, University of Geneva"],
    contribution:
      "Probability and statistical physics, especially phase transitions in lattice models.",
    plain:
      "Duminil-Copin studies systems made of many local random choices, such as paths on a lattice or spins in a magnet. His work identifies the tipping points where global behaviour suddenly changes.",
    student:
      "A student can begin with percolation: edges are open or closed at random. The central question is whether an infinite connected cluster appears, and at which probability threshold.",
    advanced:
      "His results use parafermionic observables, sharp-threshold theory, random-current methods, and correlation inequalities to analyse criticality and universality in planar and higher-dimensional models.",
    prerequisites: [
      "Probability",
      "Graph theory",
      "Statistical mechanics",
      "Complex analysis",
    ],
    publications: [
      "The connective constant of the honeycomb lattice equals sqrt(2+sqrt(2)), with Stanislav Smirnov, Annals of Mathematics, 2012.",
    ],
  }),
  "james-maynard": detail({
    biography:
      "James Maynard is a British number theorist whose work transformed the study of primes. He developed sieve methods that proved bounded gaps between primes independently of, and then beyond, earlier breakthroughs. His Fields Medal recognises results on prime gaps, primes with restricted digits, and analytic methods that reveal unexpectedly fine structure in the prime numbers.",
    education: [
      "BA and MMath, University of Cambridge",
      "DPhil, University of Oxford",
    ],
    contribution: "Prime gaps, sieve methods, and analytic number theory.",
    plain:
      "Maynard studies how prime numbers are spaced. He proved that infinitely often, two primes occur within a fixed bounded distance of each other.",
    student:
      "Students can approach his work through sieve theory, which filters integers to isolate primes or prime-like numbers. Maynard's innovations made those filters much more flexible.",
    advanced:
      "His multidimensional sieve refinements, work on small gaps, large gaps, and primes with missing digits sharpened the analytic toolkit around the distribution of primes.",
    prerequisites: [
      "Analytic number theory",
      "Sieve methods",
      "Real analysis",
      "Asymptotic estimates",
    ],
    publications: ["Small gaps between primes, Annals of Mathematics, 2015."],
  }),
  "akshay-venkatesh": detail({
    biography:
      "Akshay Venkatesh is an Australian mathematician whose work moves between number theory, dynamics, representation theory, and topology. He uses homogeneous dynamics and automorphic forms to study arithmetic problems, often importing ideas from one field to another. His Fields Medal and Ostrowski Prize records recognise an unusually synthetic style in modern number theory.",
    education: [
      "BSc, University of Western Australia",
      "PhD, Princeton University",
    ],
    contribution:
      "Number theory, homogeneous dynamics, automorphic forms, and representation-theoretic methods.",
    plain:
      "Venkatesh looks for arithmetic information in the way spaces with symmetry behave under motion. Patterns in those motions can reveal facts about numbers.",
    student:
      "Students can begin with modular forms, group actions, and equidistribution. Venkatesh's work shows that dynamical systems can answer questions about L-functions and arithmetic objects.",
    advanced:
      "His research includes subconvexity, periods of automorphic forms, derived structures in the Langlands programme, and topology of arithmetic locally symmetric spaces.",
    prerequisites: [
      "Number theory",
      "Ergodic theory",
      "Representation theory",
      "Automorphic forms",
    ],
    publications: [
      "Sparse equidistribution problems, period bounds and subconvexity, Annals of Mathematics, 2010.",
    ],
  }),
  "caucher-birkar": detail({
    biography:
      "Caucher Birkar is a Kurdish-Iranian-British algebraic geometer known for decisive work in birational geometry. His Fields Medal recognised contributions to the minimal model programme and boundedness of Fano varieties. His career path from Iran to the United Kingdom is often noted, but mathematically his impact lies in making classification results for higher-dimensional algebraic varieties more powerful and systematic.",
    education: ["BSc, University of Tehran", "PhD, University of Nottingham"],
    contribution:
      "Birational geometry, minimal model programme, and boundedness of Fano varieties.",
    plain:
      "Birkar studies algebraic shapes by simplifying them without losing their essential birational information. His work helps classify complicated higher-dimensional shapes.",
    student:
      "A student can think of the minimal model programme as an effort to reduce algebraic varieties to simpler standard forms. Birkar proved major existence and boundedness results in this programme.",
    advanced:
      "His contributions include work on flips, log canonical pairs, complements, and boundedness of Fano varieties, shaping the modern birational classification of higher-dimensional varieties.",
    prerequisites: [
      "Algebraic geometry",
      "Commutative algebra",
      "Birational geometry",
      "Singularities",
    ],
    publications: [
      "Existence of log canonical flips and a special LMMP, Publications Mathématiques de l'IHÉS, 2010.",
    ],
  }),
  "alessio-figalli": detail({
    biography:
      "Alessio Figalli is an Italian analyst whose work develops optimal transport and applies it to PDE, geometry, and inequalities. His Fields Medal recognises technical breakthroughs that turned optimal transport into a versatile method for regularity and stability questions. Based at ETH Zurich, he has also written influential expository treatments connecting transport, Monge-Ampère equations, and geometric analysis.",
    education: [
      "PhD, Scuola Normale Superiore and École Normale Supérieure de Lyon",
    ],
    contribution:
      "Optimal transport, Monge-Ampère equations, PDE regularity, and geometric inequalities.",
    plain:
      "Figalli studies the most efficient way to move one distribution of mass into another. Those transport maps reveal hidden geometry in equations and inequalities.",
    student:
      "Students can first learn the Monge problem: move dirt from piles to holes at minimal cost. Figalli's work studies when the optimal map is smooth and how transport controls PDE behaviour.",
    advanced:
      "His results include regularity for optimal transport maps, quantitative stability in geometric inequalities, and applications to Monge-Ampère type equations and free-boundary problems.",
    prerequisites: [
      "Real analysis",
      "Partial differential equations",
      "Convex analysis",
      "Optimal transport",
    ],
    publications: [
      "The Monge-Ampère Equation and Its Applications, Zurich Lectures in Advanced Mathematics, 2017.",
    ],
  }),
  "martin-hairer": detail({
    biography:
      "Martin Hairer is an Austrian-British probabilist whose theory of regularity structures made sense of singular stochastic partial differential equations. His Fields Medal, Breakthrough Prize, and Sylvester Medal records recognise a framework that allows equations driven by rough random noise to be solved and renormalised. The work connects probability, analysis, mathematical physics, and ideas reminiscent of quantum field theory.",
    education: ["PhD, University of Geneva"],
    contribution:
      "Regularity structures and singular stochastic partial differential equations.",
    plain:
      "Hairer found a way to interpret equations where random noise is so rough that ordinary multiplication breaks down. His theory makes those equations mathematically meaningful.",
    student:
      "Students can compare deterministic PDE with stochastic PDE, where noise enters the equation. Hairer's regularity structures organise local expansions so singular products can be renormalised.",
    advanced:
      "Regularity structures provide modelled distributions, reconstruction theorems, and renormalisation machinery for equations such as KPZ and Phi-four-three, extending rough-path ideas to higher-dimensional singular SPDE.",
    prerequisites: [
      "Probability",
      "Functional analysis",
      "Stochastic processes",
      "Partial differential equations",
    ],
    publications: [
      "A theory of regularity structures, Inventiones Mathematicae, 2014.",
    ],
  }),
  "jean-bourgain": detail({
    biography:
      "Jean Bourgain was a Belgian mathematician whose range across analysis, Banach spaces, combinatorics, PDE, and number theory was extraordinary. He solved problems by importing tools across fields, often creating new interfaces as he worked. His Fields Medal, Breakthrough Prize, Wolf Prize, Ostrowski Prize, and Steele honours reflect both his technical power and his role in reshaping modern analysis.",
    education: ["PhD, Vrije Universiteit Brussel"],
    contribution:
      "Harmonic analysis, Banach spaces, additive combinatorics, PDE, and analytic number theory.",
    plain:
      "Bourgain found deep patterns in functions, sets, and equations. His work often showed that ideas from one part of mathematics could unlock a problem in another.",
    student:
      "Students can see his influence in additive combinatorics and Fourier analysis. Bourgain-style arguments use estimates, randomness, and combinatorial structure to control complicated objects.",
    advanced:
      "His work includes new Banach-space constructions, restriction estimates, nonlinear dispersive PDE, sum-product phenomena, decoupling precursors, and arithmetic applications of harmonic analysis.",
    prerequisites: [
      "Functional analysis",
      "Fourier analysis",
      "Combinatorics",
      "Analytic number theory",
    ],
    publications: [
      "New Classes of Lp-Spaces, Lecture Notes in Mathematics, Springer, 1981.",
    ],
  }),
  "richard-stanley": detail({
    biography:
      "Richard P. Stanley is an American combinatorialist whose work made enumerative and algebraic combinatorics central parts of modern mathematics. He connected counting problems with commutative algebra, symmetric functions, posets, and geometry. His Steele Lifetime Achievement Prize recognises both a research programme and a pair of books that trained generations of mathematicians to see counting as structural mathematics.",
    education: [
      "BS, California Institute of Technology",
      "PhD, Harvard University",
    ],
    contribution:
      "Enumerative and algebraic combinatorics, posets, symmetric functions, and influential exposition.",
    plain:
      "Stanley studies counting problems where the answer reveals hidden algebraic structure. He showed that enumeration can be a way to understand shape, order, and symmetry.",
    student:
      "Students meet his work through generating functions, partially ordered sets, and symmetric functions. The key habit is to encode a counting problem in algebra and then use algebra to solve it.",
    advanced:
      "Stanley's contributions include Stanley-Reisner rings, P-partitions, Cohen-Macaulay posets, and deep links between enumerative combinatorics, commutative algebra, and polyhedral geometry.",
    prerequisites: [
      "Combinatorics",
      "Abstract algebra",
      "Generating functions",
      "Commutative algebra",
    ],
    publications: [
      "Enumerative Combinatorics, Volumes 1 and 2, Cambridge University Press.",
    ],
  }),
  "ingrid-daubechies": detail({
    biography:
      "Ingrid Daubechies is a Belgian-American mathematician whose compactly supported wavelets transformed signal processing and applied harmonic analysis. Her work gave practical, mathematically controlled ways to represent images, sounds, and data at multiple scales. Wolf, Nemmers, and Steele recognitions point to both theoretical elegance and concrete influence in compression, imaging, and scientific computation.",
    education: ["PhD, Vrije Universiteit Brussel"],
    contribution:
      "Compactly supported wavelets, applied harmonic analysis, and mathematical signal processing.",
    plain:
      "Daubechies created wavelets that break signals into pieces at different scales. This helps computers store, denoise, and analyse images and sounds efficiently.",
    student:
      "Students can compare Fourier series, which use global waves, with wavelets, which are localised in both scale and position. Daubechies wavelets made that idea practical and rigorous.",
    advanced:
      "Her compactly supported orthonormal wavelet bases, regularity analysis, and multiresolution frameworks became foundational in harmonic analysis, numerical algorithms, and image compression.",
    prerequisites: [
      "Fourier analysis",
      "Linear algebra",
      "Functional analysis",
      "Signal processing",
    ],
    publications: ["Ten Lectures on Wavelets, SIAM, 1992."],
  }),
  "john-milnor": detail({
    biography:
      "John Willard Milnor is an American mathematician whose discoveries run through differential topology, geometry, algebraic K-theory, and dynamics. His construction of exotic spheres changed the understanding of smooth manifolds, and his expository writing became a model of mathematical clarity. Fields, Abel, Wolf, and Steele honours recognise both landmark theorems and a rare ability to make difficult structures visible.",
    education: ["BA and PhD, Princeton University"],
    contribution:
      "Differential topology, exotic spheres, characteristic classes, dynamics, and mathematical exposition.",
    plain:
      "Milnor showed that some spaces can look like ordinary spheres topologically but have different smooth structures. That discovery changed the meaning of shape in higher dimensions.",
    student:
      "Students can distinguish topological equivalence from smooth equivalence. Milnor's exotic spheres show that continuous and differentiable classifications can diverge dramatically.",
    advanced:
      "His work includes exotic 7-spheres, h-cobordism-related topology, Milnor fibrations, characteristic classes, K-theory, and one-dimensional complex dynamics.",
    prerequisites: [
      "Algebraic topology",
      "Differential topology",
      "Manifolds",
      "Dynamical systems",
    ],
    publications: [
      "On manifolds homeomorphic to the 7-sphere, Annals of Mathematics, 1956.",
    ],
  }),
  "mikhail-gromov": detail({
    biography:
      "Mikhail Gromov is a Russian-French mathematician whose work reshaped geometry by emphasizing large-scale structures, flexibility, and metric viewpoints. He introduced ideas such as Gromov-Hausdorff convergence, hyperbolic groups, and h-principles, while also transforming symplectic geometry through pseudoholomorphic curves. Abel, Wolf, Nemmers, and Balzan honours reflect influence across geometry, topology, analysis, and group theory.",
    education: ["Leningrad State University"],
    contribution:
      "Metric geometry, geometric group theory, symplectic geometry, and the h-principle.",
    plain:
      "Gromov studies spaces by asking what they look like from far away, how flexible they are, and what kinds of curves or groups can live inside them.",
    student:
      "Students can start with distance spaces and manifolds. Gromov's ideas show that geometry can be studied through limits, large-scale comparisons, and qualitative flexibility principles.",
    advanced:
      "His work includes Gromov-Hausdorff compactness, hyperbolic groups, h-principles, filling invariants, and pseudoholomorphic curves, which opened modern symplectic topology.",
    prerequisites: [
      "Differential geometry",
      "Topology",
      "Metric spaces",
      "Group theory",
    ],
    publications: [
      "Pseudo holomorphic curves in symplectic manifolds, Inventiones Mathematicae, 1985.",
    ],
  }),
  "michael-atiyah": detail({
    biography:
      "Sir Michael Atiyah was a British mathematician whose work connected topology, geometry, analysis, and mathematical physics. With Isadore Singer he proved the index theorem, showing that an analytic quantity associated with a differential operator equals a topological quantity. Fields and Abel honours recognise a career that made deep correspondences between geometry and physics part of mainstream mathematics.",
    education: ["BA and PhD, University of Cambridge"],
    contribution:
      "K-theory, index theory, gauge theory, and bridges between geometry and mathematical physics.",
    plain:
      "Atiyah helped show that the number of solutions to an analytic problem can be determined by the shape of the underlying space, turning topology into a tool for understanding differential equations.",
    student:
      "Students can think of the index theorem as a bridge: differential equations live in analysis, while characteristic classes live in topology, yet the theorem says they match.",
    advanced:
      "Atiyah's work spans topological K-theory, the Atiyah-Singer index theorem, equivariant methods, instantons, and the geometry underlying quantum field theory.",
    prerequisites: [
      "Algebraic topology",
      "Differential geometry",
      "Functional analysis",
      "K-theory",
    ],
    publications: [
      "The index of elliptic operators I, with Isadore Singer, Annals of Mathematics, 1968.",
    ],
  }),
  "isadore-singer": detail({
    biography:
      "Isadore M. Singer was an American mathematician whose collaboration with Michael Atiyah produced the index theorem, one of the central achievements of twentieth-century mathematics. He worked at the boundary of analysis, geometry, and topology, and he helped bring physicists' gauge-theoretic intuitions into rigorous mathematical conversation. The Abel Prize recognised the enduring power of the Atiyah-Singer theorem.",
    education: ["BS, University of Michigan", "PhD, University of Chicago"],
    contribution:
      "Index theory and analytic-geometric methods connecting topology with elliptic operators.",
    plain:
      "Singer's work helps translate between equations and shapes. The index theorem says that certain analytic features are controlled by topological data.",
    student:
      "Students can begin with elliptic operators, kernels, and characteristic classes. The Atiyah-Singer theorem identifies an analytic index with a topological index.",
    advanced:
      "Singer contributed to global analysis, the index theorem, geometric analysis on manifolds, and mathematical structures later central to gauge theory and quantum field theory.",
    prerequisites: [
      "Differential geometry",
      "Topology",
      "Elliptic operators",
      "Functional analysis",
    ],
    publications: [
      "The index of elliptic operators I, with Michael Atiyah, Annals of Mathematics, 1968.",
    ],
  }),
  "peter-lax": detail({
    biography:
      "Peter D. Lax is a Hungarian-American mathematician at the Courant Institute whose work shaped modern applied mathematics. He made fundamental contributions to hyperbolic conservation laws, numerical analysis, scattering theory, and fluid mechanics. Abel and Norbert Wiener honours recognise a career that joined rigorous analysis with problems arising from computation and physical systems.",
    education: ["PhD, New York University"],
    contribution:
      "Partial differential equations, numerical analysis, conservation laws, and applied mathematical theory.",
    plain:
      "Lax studies equations that describe waves, fluids, and physical change. His work explains how such equations behave and how computers can approximate them reliably.",
    student:
      "Students encounter Lax through hyperbolic PDE and numerical schemes. Stability, convergence, and weak solutions become essential when waves form shocks.",
    advanced:
      "His contributions include Lax pairs, Lax equivalence, entropy conditions, hyperbolic conservation laws, and scattering theory, all central to analysis and computation.",
    prerequisites: [
      "Partial differential equations",
      "Numerical analysis",
      "Functional analysis",
      "Fluid mechanics",
    ],
    publications: [
      "Hyperbolic systems of conservation laws II, Communications on Pure and Applied Mathematics, 1957.",
    ],
  }),
  "wendelin-werner": detail({
    biography:
      "Wendelin Werner is a German-born French mathematician known for work on probability, planar Brownian motion, and statistical physics. His Fields Medal recognised the rigorous development of stochastic Loewner evolution and related models, clarifying the random geometry of two-dimensional critical systems. The Fermat Prize record also points to the influence of his probabilistic methods in modern mathematical physics.",
    education: ["École Normale Supérieure", "Doctorate, Université Paris VI"],
    contribution:
      "Planar Brownian motion, stochastic Loewner evolution, and random geometry in statistical physics.",
    plain:
      "Werner studies random curves in the plane. These curves help describe the shapes that appear in physical systems at critical points, where small local randomness can create large-scale geometric patterns.",
    student:
      "Students can start with Brownian motion and conformal maps. Stochastic Loewner evolution gives a way to grow random curves while preserving conformal structure.",
    advanced:
      "His work with Lawler and Schramm on Brownian intersection exponents and SLE connected probability, conformal invariance, and scaling limits of lattice models.",
    prerequisites: [
      "Probability",
      "Complex analysis",
      "Statistical mechanics",
      "Conformal maps",
    ],
    publications: [
      "Conformal restriction: the chordal case, with Gregory Lawler and Oded Schramm, Journal of the AMS, 2003.",
    ],
  }),
  "cedric-villani": detail({
    biography:
      "Cédric Villani is a French mathematician known for optimal transport, kinetic theory, and nonlinear PDE. His Fields Medal recognised work connecting transportation distances with entropy, convergence to equilibrium, and regularity phenomena. His Fermat Prize record similarly reflects influence in analysis and mathematical physics, especially the rigorous study of equations describing gases and particle systems.",
    education: ["École Normale Supérieure", "PhD, Université Paris Dauphine"],
    contribution:
      "Optimal transport, kinetic theory, Landau damping, and nonlinear evolution equations.",
    plain:
      "Villani studies how distributions move and how systems settle toward equilibrium. Optimal transport gives a geometric way to measure change.",
    student:
      "Students can learn transport distances as costs for moving mass. Villani's work shows that these distances can control solutions of PDE and kinetic equations.",
    advanced:
      "His contributions include hypocoercivity, regularity in optimal transport, and nonlinear Landau damping with Mouhot, connecting analysis, geometry, and statistical mechanics.",
    prerequisites: [
      "Partial differential equations",
      "Probability",
      "Optimal transport",
      "Statistical mechanics",
    ],
    publications: ["Optimal Transport: Old and New, Springer, 2009."],
  }),
  "emmanuel-candes": detail({
    biography:
      "Emmanuel Candès is a French-American statistician and applied mathematician whose work made compressed sensing and modern high-dimensional inference central to data science. He showed that sparse signals can often be reconstructed from surprisingly few measurements by convex optimisation. The 2026 Shaw Prize recognises this mathematical foundation for sampling, imaging, uncertainty quantification, and data analysis.",
    education: ["École Polytechnique", "PhD, Stanford University"],
    contribution:
      "Compressed sensing, convex optimisation, high-dimensional statistics, and data-science methodology.",
    plain:
      "Candès helped show that if a signal is sparse, one can recover it from far fewer measurements than classical rules would suggest, provided the measurements are designed and decoded with the right mathematics.",
    student:
      "Students can study sparse vectors and l1 minimization. Compressed sensing proves that convex optimisation can recover a sparse signal under suitable measurement conditions.",
    advanced:
      "His work includes restricted isometry methods, matrix completion, conformal prediction, and rigorous uncertainty tools for high-dimensional statistical learning.",
    prerequisites: [
      "Linear algebra",
      "Convex optimization",
      "Probability",
      "Statistics",
    ],
    publications: [
      "Robust uncertainty principles: exact signal reconstruction from highly incomplete frequency information, with Justin Romberg and Terence Tao, IEEE Transactions on Information Theory, 2006.",
    ],
  }),
  "camillo-de-lellis": detail({
    biography:
      "Camillo De Lellis is an Italian mathematician whose work lies in geometric analysis, calculus of variations, and nonlinear PDE. He has made major contributions to regularity theory, minimal surfaces, and the analysis of fluid equations. The 2026 Shaw Prize recognises a body of work that combines geometric measure theory with PDE methods at high technical intensity.",
    education: ["Laurea, University of Pisa", "Scuola Normale Superiore"],
    contribution:
      "Geometric analysis, calculus of variations, minimal surfaces, and nonlinear PDE.",
    plain:
      "De Lellis studies shapes and flows that minimise energy or satisfy complex equations. His work explains when such objects are regular and when singular behaviour can occur.",
    student:
      "Students can start with minimal surfaces and variational principles. De Lellis's work analyses weak solutions, regularity, and geometric structure in settings where classical smoothness may fail.",
    advanced:
      "His contributions include Almgren's regularity programme, convex integration for fluid equations with Székelyhidi, and deep work on currents, minimal surfaces, and geometric PDE.",
    prerequisites: [
      "Geometric measure theory",
      "Partial differential equations",
      "Calculus of variations",
      "Differential geometry",
    ],
    publications: [
      "The h-principle and the equations of fluid dynamics, with László Székelyhidi Jr., Bulletin of the AMS, 2013.",
    ],
  }),
  "grace-wahba": detail({
    biography:
      "Grace Wahba is an American statistician whose work on smoothing splines and regularisation changed nonparametric regression and data analysis. She developed methods for estimating functions from noisy data and for choosing smoothing parameters in principled ways. The 2025 International Prize in Statistics recognises decades of influence across statistics, machine learning, climate science, and biomedical applications.",
    education: ["BA, Cornell University", "MA and PhD, Stanford University"],
    contribution:
      "Smoothing splines, regularisation, nonparametric regression, and statistical learning methods.",
    plain:
      "Wahba developed ways to draw a smooth curve through noisy data without chasing every bump. Her methods help estimate hidden patterns responsibly.",
    student:
      "Students can view smoothing splines as a tradeoff between fitting data and keeping a function smooth. Cross-validation helps choose the balance.",
    advanced:
      "Her work connects reproducing-kernel Hilbert spaces, generalized cross-validation, penalized likelihood, spline models, and early statistical learning theory.",
    prerequisites: [
      "Statistics",
      "Linear algebra",
      "Functional analysis",
      "Regression",
    ],
    publications: ["Spline Models for Observational Data, SIAM, 1990."],
  }),
  "bradley-efron": detail({
    biography:
      "Bradley Efron is an American statistician at Stanford whose bootstrap method transformed statistical inference. By resampling observed data, the bootstrap estimates uncertainty without requiring a fully specified parametric model. His International Prize in Statistics record recognises a method that became standard in science, engineering, biomedicine, and data analysis.",
    education: [
      "BS, California Institute of Technology",
      "PhD, Stanford University",
    ],
    contribution:
      "The bootstrap, empirical Bayes methods, false-discovery tools, and modern statistical inference.",
    plain:
      "Efron's bootstrap asks what can be learned by repeatedly resampling the data already observed. It gives a practical way to measure uncertainty.",
    student:
      "Students can simulate many new samples by drawing with replacement from the original data. The variation across resamples approximates the variation of an estimator.",
    advanced:
      "The bootstrap, jackknife-after-bootstrap, empirical Bayes, and local false-discovery approaches made computational statistics central to modern inference.",
    prerequisites: [
      "Probability",
      "Mathematical statistics",
      "Simulation",
      "Regression",
    ],
    publications: [
      "Bootstrap methods: another look at the jackknife, Annals of Statistics, 1979.",
    ],
  }),
  "cr-rao": detail({
    biography:
      "Calyampudi Radhakrishna Rao was an Indian statistician whose work supplied core tools of twentieth-century statistics. The Cramér-Rao bound, Rao-Blackwell theorem, and information-geometric ideas are still taught as foundational results. The 2023 International Prize in Statistics recognised a career whose influence runs through estimation theory, multivariate analysis, experimental design, and official statistics.",
    education: [
      "MA, Andhra University",
      "MA, University of Calcutta",
      "PhD, King's College, Cambridge",
    ],
    contribution:
      "Cramér-Rao bound, Rao-Blackwell theorem, information geometry, and multivariate statistical theory.",
    plain:
      "Rao's work tells statisticians how accurate an estimate can possibly be and how to improve estimates using available information, giving practical inference a set of sharp mathematical limits.",
    student:
      "Students meet the Cramér-Rao lower bound as a limit on estimator variance. The Rao-Blackwell theorem shows how conditioning can turn an estimator into a better one.",
    advanced:
      "His work spans Fisher information geometry, orthogonal arrays, score tests, multivariate analysis, and the theoretical structure of efficient estimation.",
    prerequisites: [
      "Probability",
      "Statistical inference",
      "Linear algebra",
      "Estimation theory",
    ],
    publications: [
      "Information and the accuracy attainable in the estimation of statistical parameters, Bulletin of the Calcutta Mathematical Society, 1945.",
    ],
  }),
  "yoav-benjamini": detail({
    biography:
      "Yoav Benjamini is an Israeli statistician whose false discovery rate framework changed multiple testing. Working with Yosef Hochberg and later collaborators, he created procedures that control the expected proportion of false discoveries rather than the probability of any false positive. The Rousseeuw Prize record recognises the broad impact of this idea in genomics, neuroscience, imaging, and large-scale science.",
    education: ["PhD, Princeton University"],
    contribution:
      "False discovery rate methodology and multiple-testing procedures for large-scale inference.",
    plain:
      "Benjamini's work helps scientists make many discoveries at once while keeping false claims under control, a crucial need when one experiment may test thousands of genes, images, or signals.",
    student:
      "Students can compare family-wise error control with false discovery rate control. The Benjamini-Hochberg procedure is less conservative and often better suited to high-dimensional studies.",
    advanced:
      "FDR methodology studies ordered p-values, dependency conditions, adaptive procedures, and selective inference, becoming central to modern high-throughput statistical practice.",
    prerequisites: [
      "Probability",
      "Statistical inference",
      "Hypothesis testing",
      "Multiple comparisons",
    ],
    publications: [
      "Controlling the false discovery rate: a practical and powerful approach to multiple testing, with Yosef Hochberg, Journal of the Royal Statistical Society Series B, 1995.",
    ],
  }),
  "frank-merle": detail({
    biography:
      "Frank Merle is a French analyst whose work studies nonlinear dispersive and fluid equations, especially blow-up, stability, and soliton dynamics. The 2026 Breakthrough Prize and 2023 Clay Research Award records recognise a programme that clarifies how smooth solutions can concentrate, become singular, or decompose into coherent structures. His research is central to modern nonlinear PDE.",
    education: ["École Normale Supérieure", "Doctorate, University of Paris"],
    contribution:
      "Nonlinear evolution equations, blow-up analysis, stability, singularity formation, and soliton resolution.",
    plain:
      "Merle studies equations where waves can focus so intensely that a solution breaks down. His work explains the shape and timing of that breakdown.",
    student:
      "Students can begin with nonlinear Schrödinger, wave, and fluid equations. Merle's analysis tracks conserved quantities and profiles near singularity formation.",
    advanced:
      "His work with collaborators includes classification of minimal blow-up solutions, soliton resolution mechanisms, and constructions of singular solutions to compressible Euler and Navier-Stokes equations.",
    prerequisites: [
      "Partial differential equations",
      "Functional analysis",
      "Dispersive equations",
      "Fluid mechanics",
    ],
    publications: [
      "Universality of blow-up profile for small radial type II blow-up solutions of energy-critical wave equations, with Pierre Raphaël, Inventiones Mathematicae, 2013.",
    ],
  }),
  "hong-wang": detail({
    biography:
      "Hong Wang is a Chinese mathematician whose work in harmonic analysis and geometric measure theory contributed to major progress on Kakeya-type problems. Her 2025 Ostrowski Prize and 2026 Clay Research Award records recognise collaborations resolving the three-dimensional Kakeya conjecture and related Furstenberg set questions. The work combines incidence geometry, Fourier restriction, and delicate multiscale analysis.",
    education: [
      "BSc, Peking University",
      "PhD, Massachusetts Institute of Technology",
    ],
    contribution:
      "Harmonic analysis, geometric measure theory, Kakeya-type problems, and incidence geometry.",
    plain:
      "Wang studies how thin tubes and directions can fill space. Kakeya problems ask how small a set can be if it contains a line segment in every direction.",
    student:
      "Students can picture rotating a needle through every direction inside a set. The Kakeya conjecture predicts such sets must have full dimension despite possibly tiny measure.",
    advanced:
      "Her work uses polynomial partitioning, incidence estimates, decoupling-adjacent tools, and multiscale geometry to attack Kakeya and Furstenberg set conjectures.",
    prerequisites: [
      "Harmonic analysis",
      "Geometric measure theory",
      "Incidence geometry",
      "Fourier analysis",
    ],
    publications: [
      "A restriction estimate in R3 using brooms, Duke Mathematical Journal, 2018.",
    ],
  }),
  "mark-braverman": detail({
    biography:
      "Mark Braverman is an Israeli-Canadian-American theoretical computer scientist whose work analyses the information cost of communication. His IMU Abacus Medal recognises contributions to information complexity and noise-resilient interactive communication. The central theme is understanding not just how many bits are sent in a protocol, but how much information those bits reveal.",
    education: ["PhD, University of Toronto"],
    contribution:
      "Information complexity, communication protocols, and noise-resilient interactive communication.",
    plain:
      "Braverman studies how parties can compute together while communicating as little useful information as possible. This refines the idea of communication cost.",
    student:
      "Students can start with communication complexity, where two players hold different inputs and must compute a joint answer. Information complexity measures how much their messages reveal.",
    advanced:
      "His work establishes direct-sum and compression phenomena, interactive coding results, and information-theoretic frameworks for communication complexity and distributed computation.",
    prerequisites: [
      "Algorithms",
      "Information theory",
      "Complexity theory",
      "Probability",
    ],
    publications: [
      "Interactive information complexity, SIAM Journal on Computing, 2015.",
    ],
  }),
  "robert-mccann": detail({
    biography:
      "Robert McCann is a Canadian mathematician whose work in optimal transport connects geometry, analysis, economics, and physics. His polar factorisation and displacement convexity results helped make transport a central tool in nonlinear analysis. The 2025 Norbert Wiener Prize recognises broad applied-mathematical influence across interacting particle systems, economics, and geometric inequalities.",
    education: ["PhD, Princeton University"],
    contribution:
      "Optimal transport, displacement convexity, geometric inequalities, and applications to economics and physics.",
    plain:
      "McCann studies efficient ways to move mass and how that movement bends the space of probability distributions, revealing geometric structure in models from physics, economics, and analysis.",
    student:
      "Students can view transport maps as moving one probability distribution to another. McCann's displacement convexity shows that some functionals become convex along transport geodesics.",
    advanced:
      "His contributions include polar factorization, convexity principles for interacting gases, and transport methods that influence Ricci curvature, economics, and nonlinear PDE.",
    prerequisites: [
      "Optimal transport",
      "Measure theory",
      "Convex analysis",
      "Partial differential equations",
    ],
    publications: [
      "A convexity principle for interacting gases, Advances in Mathematics, 1997.",
    ],
  }),
  "andrei-okounkov": detail({
    biography:
      "Andrei Okounkov is a Russian-American mathematician whose work connects representation theory, algebraic geometry, probability, and mathematical physics. He received the Fields Medal in 2006 and the 2026 Nemmers Prize in Mathematics for a body of work that treats random partitions, enumerative geometry, and quantum cohomology as parts of a shared structure.",
    education: ["Moscow State University", "PhD, Moscow State University"],
    contribution:
      "Representation theory, random partitions, enumerative geometry, quantum cohomology, and mathematical physics.",
    plain:
      "Okounkov studies random and algebraic structures that appear in both geometry and physics. His work reveals exact patterns in objects that initially look combinatorial or probabilistic.",
    student:
      "Students can begin with partitions and Young diagrams. Okounkov's work shows how their asymptotic shapes connect to representation theory and geometry.",
    advanced:
      "His research includes random matrices, Hilbert schemes, Gromov-Witten theory, Donaldson-Thomas theory, quantum cohomology, and stable envelopes in geometric representation theory.",
    prerequisites: [
      "Representation theory",
      "Algebraic geometry",
      "Probability",
      "Mathematical physics",
    ],
    publications: [
      "Random matrices and random permutations, International Mathematics Research Notices, 2000.",
    ],
  }),
};
