// /src/Algs/OllPics/OLL49.png
const OllAlgs = [
    {
        id: 1,
        name: 'Runway',
        alg: "R U2 (R2 F R F') U2 (R' F R F')",
        img: '/src/Algs/OllPics/Oll1.png',
        category: 'Dot'
    },
    {
        id: 2,
        name: 'Zamboni',
        alg: "f (U R U' R') S' (U R U' R') F'",
        img: '/src/Algs/OllPics/Oll2.png',
        category: 'Dot',
        rotation: 90
    },
    {
        id: 3,
        name: 'Pinwheel 2',
        alg: "(R' F2 R2 U2 R') F (R U2 R2 F2 R)",
        img: '/src/Algs/OllPics/Oll3.png',
        category: 'Dot',
        rotation: 90
    },
    {
        id: 4,
        name: 'Pinwheel 1',
        alg: "(R' F2 R2 U2 R') F' (R U2 R2 F2 R)",
        img: '/src/Algs/OllPics/Oll4.png',
        category: 'Dot',
        rotation: -90
    },
    {
        id: 5,
        name: 'Reverse Fat Anti-Sune',
        alg: "l' U2 L U L' U l",
        img: '/src/Algs/OllPics/Oll5.png',
        category: 'Block'
    },
    {
        id: 6,
        name: 'Fat Anti-Sune',
        alg: "r U2 R' U' R U' r'",
        img: '/src/Algs/OllPics/Oll6.png',
        category: 'Block'
    },
    {
        id: 7,
        name: 'Fat Sune',
        alg: "r U R' U R U2 r'",
        img: '/src/Algs/OllPics/Oll7.png',
        category: 'Lightning'
    },
    {
        id: 8,
        name: 'Reverse Fat Sune',
        alg: "l' U' L U' L' U2 l",
        img: '/src/Algs/OllPics/Oll8.png',
        category: 'Lightning'
    },
    {
        id: 9,
        name: 'Squid 1',
        alg: "(R U R' U') R' F (R2 U R' U') F'",
        img: '/src/Algs/OllPics/Oll9.png',
        category: 'Fish'
    },
    {
        id: 10,
        name: 'Squid 2',
        alg: "R U R' U (R' F R F') R U2 R'",
        img: '/src/Algs/OllPics/Oll10.png',
        category: 'Fish'
    },
    {
        id: 11,
        name: 'Downstairs',
        alg: "r (R2 U' R U' R' U2 R) U' M",
        img: '/src/Algs/OllPics/Oll11.png',
        category: 'Lightning',
        rotation: 180
    },
    {
        id: 12,
        name: 'Upstairs',
        alg: "r' (R2 U R' U R U2 R') U M'",
        img: '/src/Algs/OllPics/Oll12.png',
        category: 'Lightning',
    },
    {
        id: 13,
        name: 'Gun',
        alg: "(F U R U') R2  F' R (U R U' R')",
        img: '/src/Algs/OllPics/Oll13.png',
        category: 'L'
    },
    {
        id: 14,
        name: 'Anti-Gun',
        alg: "R' F (R U R') F' R (F U' F')",
        img: '/src/Algs/OllPics/Oll14.png',
        category: 'L'
    },
    {
        id: 15,
        name: 'Left Squeegee',
        alg: "l' U' l L' U' L U l' U l",
        img: '/src/Algs/OllPics/Oll15.png',
        category: 'L'
    },
    {
        id: 16,
        name: 'Squeegee',
        alg: "r U r' R U R' U' r U' r'",
        img: '/src/Algs/OllPics/Oll16.png',
        category: 'L'
    },
    {
        id: 17,
        name: 'Slash',
        alg: "(F R' F' R) U S' (R U' R') S",
        img: '/src/Algs/OllPics/Oll17.png',
        category: 'Dot'
    },
    {
        id: 18,
        name: 'Mouse 2',
        alg: "(r U R' U R U2 r') (r' U' R U' R' U2 r)",
        img: '/src/Algs/OllPics/Oll18.png',
        category: 'Dot'
    },
    {
        id: 19,
        name: 'Mouse 1',
        alg: "S' (R U R') S U' (R' F R F')",
        img: '/src/Algs/OllPics/Oll19.png',
        category: 'Dot',
        rotation: 90
    },
    {
        id: 20,
        name: 'Superflip',
        alg: "S R' U' (R U) (R U) R U' R' S'",
        img: '/src/Algs/OllPics/Oll20.png',
        category: 'Dot'
    },
    {
        id: 21,
        name: 'Cross 1 (H)',
        alg: "R U R' U (R U' R' U) R U2 R'",
        img: '/src/Algs/OllPics/Oll21.png',
        category: 'Solved Cross',
        rotation: 90
    },
    {
        id: 22,
        name: 'Cross 2 (Pi)',
        alg: "R U2 (R2 U') (R2 U') R2 U2 R",
        img: '/src/Algs/OllPics/Oll22.png',
        category: 'Solved Cross',
    },
    {
        id: 23,
        name: 'Headlights (U)',
        alg: "R2 D (R' U2 R) D' (R' U2 R')",
        img: '/src/Algs/OllPics/Oll23.png',
        category: 'Solved Cross',
        rotation: 180
    },
    {
        id: 24,
        name: 'Chameleon',
        alg: "r U R' U' r' F R F'",
        img: '/src/Algs/OllPics/Oll24.png',
        category: 'Solved Cross'
    },
    {
        id: 25,
        name: 'Bowtie',
        alg: "F' r U R' U' r' F R",
        img: '/src/Algs/OllPics/Oll25.png',
        category: 'Solved Cross'
    },
    {
        id: 26,
        name: 'Anti-Sune',
        alg: "(R U2 R') U' R U' R'",
        img: '/src/Algs/OllPics/Oll26.png',
        category: 'Solved Cross'
    },
    {
        id: 27,
        name: 'Sune',
        alg: "R U R' U (R U2 R')",
        img: '/src/Algs/OllPics/Oll27.png',
        category: 'Solved Cross'
    },
    {
        id: 28,
        name: 'Arrow',
        alg: "(r U R' U') M (U R U' R')",
        img: '/src/Algs/OllPics/Oll28.png',
        category: 'Edges Only'
    },
    {
        id: 29,
        name: 'Awkward 1',
        alg: "r2 D' (r U r') D r2 U' (r' U' r)",
        img: '/src/Algs/OllPics/Oll29.png',
        category: 'Awkward',
        rotation: -90
    },
    {
        id: 30,
        name: 'Awkward 2',
        alg: "F U (R U2 R' U') (R U2 R' U') F'",
        img: '/src/Algs/OllPics/Oll30.png',
        category: 'Awkward'
    },
    {
        id: 31,
        name: 'Anti-Couch',
        alg: "S' (L' U' L U) (L F' L' f)",
        img: '/src/Algs/OllPics/Oll31.png',
        category: 'P',
        rotation: 180
    },
    {
        id: 32,
        name: 'Couch',
        alg: "S (R U R' U) (R' F R' f')",
        img: '/src/Algs/OllPics/Oll32.png',
        category: 'P',
        rotation: 180
    },
    {
        id: 33,
        name: 'Sexy Sledge',
        alg: "(R U R' U) (R' F R F')",
        img: '/src/Algs/OllPics/Oll33.png',
        category: 'T'
    },
    {
        id: 34,
        name: 'Unlucky C',
        alg: "(R U R' U) B' (R' F R F')",
        img: '/src/Algs/OllPics/Oll34.png',
        category: 'C'
    },
    {
        id: 35,
        name: 'Fish 2',
        alg: "(R U2) (R2 F R F') (R U2) R'",
        img: '/src/Algs/OllPics/Oll35.png',
        category: 'Fish'
    },
    {
        id: 36,
        name: 'Wario',
        alg: "(L' U' L U') L' U L U (r U' r' F)",
        img: '/src/Algs/OllPics/Oll36.png',
        category: 'W'
    },
    {
        id: 37,
        name: 'Fish 1',
        alg: "(F R' F' R) (U R U' R')",
        img: '/src/Algs/OllPics/Oll37.png',
        category: 'Fish'
    },
    {
        id: 38,
        name: 'Mario',
        alg: "(R U R' U') R U' R' U' (R' F R F')",
        img: '/src/Algs/OllPics/Oll38.png',
        category: 'W'
    },
    {
        id: 39,
        name: 'Big Lightning',
        alg: "L F' L' U' L U F U' L'",
        img: '/src/Algs/OllPics/Oll39.png',
        category: 'Lightning',
        rotation: 180
    },
    {
        id: 40,
        name: 'Anti-Big Lightning',
        alg: "R' F R U R' U' F' U R",
        img: '/src/Algs/OllPics/Oll40.png',
        category: 'Lightning',
        rotation: 180
    },
    {
        id: 41,
        name: 'Poodle 2',
        alg: "(R U R' U R U2 R') F (R U R' U' F')",
        img: '/src/Algs/OllPics/Oll41.png',
        category: 'Awkward',
    },
    {
        id: 42,
        name: 'Poodle 1',
        alg: "R' U' R U' R' U2 R F R U R' U' F'",
        img: '/src/Algs/OllPics/Oll42.png',
        category: 'Awkward',
        rotation: 90
    },
    {
        id: 43,
        name: 'Anti-P',
        alg: "f' (L' U' L U)",
        img: '/src/Algs/OllPics/Oll43.png',
        category: 'P',
        rotation: 180
    },
    {
        id: 44,
        name: 'P',
        alg: "f (R U R' U')",
        img: '/src/Algs/OllPics/Oll44.png',
        category: 'P',
        rotation: 180
    },
    {
        id: 45,
        name: "F Sexy F'",
        alg: "F (R U R' U') F'",
        img: '/src/Algs/OllPics/Oll45.png',
        category: 'T'
    },
    {
        id: 46,
        name: 'Lucky C',
        alg: "R' U' (R' F R F') U R",
        img: '/src/Algs/OllPics/Oll46.png',
        category: 'C'
    },
    {
        id: 47,
        name: 'Ani-Breakneck',
        alg: "F' (L' U' L U) (L' U' L U) F",
        img: '/src/Algs/OllPics/Oll47.png',
        category: 'Hook'
    },
    {
        id: 48,
        name: 'Breakneck',
        alg: "F (R U R' U)' (R U R' U)' F'",
        img: '/src/Algs/OllPics/Oll48.png',
        category: 'Hook'
    },
    {
        id: 49,
        name: 'Back Squeezy',
        alg: "r U' (r2' U) (r2 U) r2' U' r",
        img: '/src/Algs/OllPics/Oll49.png',
        category: 'Hook'
    },
    {
        id: 50,
        name: 'Front Squeezy',
        alg: "r' U (r2 U') (r2' U') r2 U r'",
        img: '/src/Algs/OllPics/Oll50.png',
        category: 'Hook'
    },
    {
        id: 51,
        name: 'Ant',
        alg: "f (R U R' U') (R U R' U') f'",
        img: '/src/Algs/OllPics/Oll51.png',
        category: 'Line',
        rotation: 180
    },
    {
        id: 52,
        name: 'Rice Cooker',
        alg: "R' (F' U' F U') R U R' U R",
        img: '/src/Algs/OllPics/Oll52.png',
        category: 'Line',
        rotation: 180
    },
    {
        id: 53,
        name: 'Frying Pan',
        alg: "(l' U2) L U (L' U' L U) L' U l",
        img: '/src/Algs/OllPics/Oll53.png',
        category: 'Hook',
        rotation: 90
    },
    {
        id: 54,
        name: 'Anti-Frying Pan',
        alg: "(r U2) R' U' (R U R' U') R U' r'",
        img: '/src/Algs/OllPics/Oll54.png',
        category: 'Hook',
        rotation: 90
    },
    {
        id: 55,
        name: 'Highway',
        alg: "R' F (R U R U') R2 F' R2 U' R' U (R U R')",
        img: '/src/Algs/OllPics/Oll55.png',
        category: 'Line'
    },
    {
        id: 56,
        name: 'Streetlights',
        alg: "r' U' r (U' R' U R) (U' R' U R) r' U r",
        img: '/src/Algs/OllPics/Oll56.png',
        category: 'Line'
    },
    {
        id: 57,
        name: 'H',
        alg: "(R U R' U') M' (U R U' r')",
        img: '/src/Algs/OllPics/Oll57.png',
        category: 'Edges Only'
    },
]

export default OllAlgs