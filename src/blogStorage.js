export function loadPosts() {
  const stored = localStorage.getItem('blogPosts');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [
    { id: 1, title: 'How to rock your Savage merch', date: '7/1/2025', content: '' },
    { id: 2, title: 'Why American grit matters', date: '', content: '' },
    { id: 3, title: 'Behind the scenes at Savage Nation USA HQ', date: '', content: '' },
  ];
}

export function savePosts(posts) {
  localStorage.setItem('blogPosts', JSON.stringify(posts));
}
