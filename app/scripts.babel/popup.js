'use strict';

const MATCH_MINIMUM = 2;

function topicToLink([topic]) {
  const link = 'https://pitch-in-staging.herokuapp.com';
  const filter = `?filter%5Bskills%5D=&filter%5Bissues%5D=${topic}&filter%5Byears_experience%5D=`;
  return `
    <div>
      <a title="Pitch In on ${topic}" href="${link}${filter}" target="_blank"/>
        Pitch in on ${topic}
      </a>
    </div>
  `;
}

function renderMatch(matches) {
  const html = matches
  .filter(([_topic, matchCount]) => {
    return matchCount >= MATCH_MINIMUM;
  })
  .sort(([_topicA, matchCountA], [_topicB, matchCountB]) => {
    // Descending order.
    return matchCountB - matchCountA;
  })
  .map(topicToLink)
  .join('');
  document.querySelector('#match-count').innerHTML = html;
}

chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, { type: 'getMatches' }, renderMatch);
});
