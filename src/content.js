// Original starter content. Extend pathways without changing the application renderer.
export const brand = { name: 'Adel English Academy', teacher: 'Mr. Adel Badwi' };
export const pathways = {
  step: {
    title: 'STEP', subtitle: 'أساس قوي. خطوة تلو الأخرى.', label: 'الاستعداد لاختبار كفايات اللغة الإنجليزية',
    description: 'ابدأ بالقواعد والمفردات وفهم المقروء عبر دروس قصيرة وتطبيق مباشر.',
    skills: ['Grammar', 'Vocabulary', 'Reading'],
    lessons: [
      { id: 'step-present', title: 'Present simple', skill: 'Grammar', minutes: 5, body: 'Use the present simple for routines and facts. Add -s or -es with he, she, and it. After does not, use the base verb.', examples: ['She studies English every evening.', 'He does not work on Fridays.'] },
      { id: 'step-context', title: 'Meaning from context', skill: 'Vocabulary', minutes: 4, body: 'Read the whole sentence before choosing a meaning. Look for clues such as contrasts, examples, and reasons.', examples: ['The room was silent; nobody spoke. Silent means quiet.', 'Unlike his tired friends, Omar was energetic.'] },
      { id: 'step-reading', title: 'Find the main idea', skill: 'Reading', minutes: 6, body: 'The main idea describes the overall message. Supporting details explain it. Choose an answer that covers the whole paragraph, not one small fact.', examples: ['A paragraph about buses, trains, and cycling may describe ways to travel sustainably.'] }
    ],
    questions: [
      { prompt: 'Sara ___ English every day.', options: ['study', 'studies', 'studying', 'studied'], answer: 1, explanation: 'Sara is third-person singular. The present simple form of study is studies.' },
      { prompt: 'He does not ___ coffee.', options: ['drinks', 'drinking', 'drink', 'drank'], answer: 2, explanation: 'After does not, use the base form: drink.' },
      { prompt: 'The library was silent; nobody was talking. What does silent mean?', options: ['Busy', 'Quiet', 'Expensive', 'Bright'], answer: 1, explanation: 'Nobody was talking is a context clue meaning quiet.' },
      { passage: 'Lina used to drive to work. Now she cycles three days a week. She spends less on fuel and feels healthier. She hopes more colleagues will try cycling.', prompt: 'What is the main idea?', options: ['Lina wants a new car.', 'Fuel is free.', 'Cycling has benefited Lina.', 'Her colleagues cycle daily.'], answer: 2, explanation: 'Saving money and feeling healthier are both benefits of cycling.' },
      { prompt: 'We have lived in Madinah ___ 2020.', options: ['for', 'since', 'during', 'at'], answer: 1, explanation: 'Since introduces the starting point of a period continuing to the present.' }
    ]
  },
  ielts: {
    title: 'IELTS', subtitle: 'عبّر بثقة. وطوّر مهاراتك.', label: 'الاستعداد للدراسة والتواصل باللغة الإنجليزية',
    description: 'تعرّف على استراتيجيات القراءة والكتابة والتحدث، ثم اختبر فهمك وابدأ الكتابة.',
    skills: ['Reading', 'Writing', 'Speaking'],
    lessons: [
      { id: 'ielts-reading', title: 'Read for evidence', skill: 'Reading', minutes: 5, body: 'Match every answer to evidence in the text. True agrees with the text. False contradicts it. Not Given means the text does not provide enough information.', examples: ['Text: The museum opens at 10 a.m. Claim: It opens at 9 a.m. → False.', 'Text: Entry is free for children. Claim: All adults pay £5. → Not Given.'] },
      { id: 'ielts-writing', title: 'Build a clear paragraph', skill: 'Writing', minutes: 7, body: 'Start with a topic sentence. Explain your idea and add a relevant example. Use linking words only where the relationship is clear.', examples: ['Public parks improve city life. They give residents space to exercise. For example, a local walking trail can encourage daily activity.'] },
      { id: 'ielts-speaking', title: 'Extend your answer', skill: 'Speaking', minutes: 5, body: 'Answer the question directly, explain why, and add a personal example. Practise aloud. Aim for clear communication rather than memorised answers.', examples: ['I enjoy reading because it helps me relax. Last week, I finished a short novel about travel.'] }
    ],
    questions: [
      { passage: 'The city museum opens at 10 a.m. every day. Children enter for free. The text does not mention adult ticket prices.', prompt: 'The museum opens at 9 a.m.', options: ['True', 'False', 'Not Given'], answer: 1, explanation: 'The text says 10 a.m., which contradicts 9 a.m.' },
      { passage: 'The city museum opens at 10 a.m. every day. Children enter for free.', prompt: 'Adult tickets cost £5.', options: ['True', 'False', 'Not Given'], answer: 2, explanation: 'No adult ticket price is given.' },
      { prompt: 'Which sentence best introduces a paragraph about the benefits of parks?', options: ['My shoes are blue.', 'Parks offer valuable spaces for exercise and relaxation.', 'However, yesterday.', 'There are seven words.'], answer: 1, explanation: 'This topic sentence clearly identifies the paragraph’s central idea.' },
      { prompt: 'Which linking phrase introduces an example?', options: ['In contrast', 'As a result', 'For instance', 'Despite this'], answer: 2, explanation: 'For instance introduces an example supporting an idea.' },
      { prompt: 'Which answer gives a reason and a specific example?', options: ['Yes.', 'I like books.', 'I enjoy reading because it helps me relax; last week I read a travel novel.', 'Reading, reading, reading.'], answer: 2, explanation: 'It develops the answer with both a reason and a concrete example.' }
    ]
  }
};
export function grade(questions, answers) {
  return questions.reduce((score, q, i) => score + (answers[i] === q.answer ? 1 : 0), 0);
}
export function wordCount(text) { return text.trim() ? text.trim().split(/\s+/u).length : 0; }
