const homeTl = gsap.timeline();

const titleSplit = new SplitType(".title");
const pSplit = new SplitType(".description");
homeTl.from(titleSplit.chars, { opacity: 0, duration: 1, stagger: 0.05 });
homeTl.from(pSplit.chars, { opacity: 0, duration: 1, stagger: 0.03 }, "-=0.5");
