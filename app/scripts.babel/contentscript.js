'use strict';

const matchers = [
  [
    'test',
    [
      'web',
      'data'
    ]
  ],
  [
    'education',
    [
      'school',
      'education',
      'teacher',
      'kindergarten',
    ]
  ],
  [
    'women',
    [
      'women',
      'woman',
      'female',
      'reproductive',
      'abortion',
    ]
  ],
];

const matcherRegexs = matchers.map(([topic, words]) => {
  return [topic, new RegExp(words.join('|'), 'gi')];
});

function countMatches() {
  const pageText = document.body.innerText;
  const matchCounts = matcherRegexs.map(([topic, regex]) => {
    const matches = pageText.match(regex);
    const matchCount = matches ? matches.length : 0;

    return [topic, matchCount];
  });

  console.log(`Matches!: ${matchCounts}`);

  return matchCounts;
}

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  console.log('message', type);
  if (type !== 'getMatches') return;

  sendResponse(countMatches());
});
