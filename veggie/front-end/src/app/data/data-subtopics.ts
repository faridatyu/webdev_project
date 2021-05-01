import { Subheading } from '../interfaces/subheading';

export const SORTING_SUBTOPICS: Subheading[] = [
  {
    id: 4,
    heading: 4,
    name: 'Quick Sort',
    description: 'Quick Sort algorithm explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 5,
    heading: 4,
    name: 'Merge Sort',
    description: 'Merge Sort algorithm explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const STRINGS_SUBTOPICS: Subheading[] = [
  {
    id: 6,
    heading: 5,
    name: 'Knuth-Morris-Pratt Algorithm',
    description: 'Knuth-Morris-Pratt algorithm explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 7,
    heading: 5,
    name: 'Manacher\'s Algorithm',
    description: 'Manacher\'s algorithm explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const LINKED_SUBTOPICS: Subheading[] = [
  {
    id: 8,
    heading: 6,
    name: 'Singly Linked List',
    description: 'Singly Linked List explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 9,
    heading: 6,
    name: 'Doubly Linked List',
    description: 'Doubly Linked List explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  }
];

export const HEAP_SUBTOPICS: Subheading[] = [
  {
    id: 10,
    heading: 7,
    name: 'Min Heap',
    description: 'Min Heap explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
  {
    id: 11,
    heading: 7,
    name: 'Max Heap',
    description: 'Max Heap explained',
    recipe: '#inlcude <bits/stdc++.h>\n\nusing namespace std\n\nint main() {\n};'
  },
];

export const SUBTOPICS: Subheading[] =
  [
    {
      id: 1,
      heading: 1,
      name: 'subsuka',
      description: 'loldfakdjf',
      recipe: 'print("front zaebal")'
    },
    {
      id: 2,
      heading: 2,
      name: 'subblyat',
      description: 'loldfakdjf',
      recipe: 'print("front zaebal")'
    },
    {
      id: 3,
      heading: 3,
      name: 'subshshs',
      description: 'loldfakdjf',
      recipe: 'print("front zaebal")'
    }
  ];

export const ALL_SUBTOPICS = [ ...SORTING_SUBTOPICS, ...STRINGS_SUBTOPICS, ...LINKED_SUBTOPICS, ...HEAP_SUBTOPICS, ...SUBTOPICS ];
