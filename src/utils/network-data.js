const BASE_URL = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addNote({ title, body }) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  let responseJson = await response.json();
  const data = [{
    id: "notes-1A2B3C4D5E6F7G8H9",
    title: "Meeting Notes - Project Alpha",
    body: "Discussed the project timeline and deliverables. Next steps include assigning tasks to team members.",
    createdAt: "2024-12-18T10:00:00.000Z",
    archived: false,
    owner: "user-abc123xyz456"
  },
  {
    id: "notes-2B3C4D5E6F7G8H9I0",
    title: "Grocery List",
    body: "1. Milk\n2. Eggs\n3. Bread\n4. Apples\n5. Chicken\n5. Chicken\n5. Chicken\n5. Chicken\n5. Chicken\n5. Chicken",
    createdAt: "2024-12-18T11:15:30.000Z",
    archived: false,
    owner: "user-def456uvw789"
  },
  {
    id: "notes-3C4D5E6F7G8H9I0J1",
    title: "Travel Plans",
    body: "Planning a trip to the mountains. Need to book accommodations and check the weather.",
    createdAt: "2024-12-18T12:30:45.000Z",
    archived: false,
    owner: "user-ghi789rst012"
  },
  {
    id: "notes-4D5E6F7G8H9I0J1K2",
    title: "Book Recommendations",
    body: "1. The Great Gatsby\n2. To Kill a Mockingbird\n3. 1984\n4. Moby Dick\n4. Moby Dick\n4. Moby Dick\n4. Moby Dick",
    createdAt: "2024-12-18T13:45:55.000Z",
    archived: false,
    owner: "user-jkl012mno345"
  },
  {
    id: "notes-5E6F7G8H9I0J1K2L3",
    title: "Workout Routine",
    body: "Monday: Chest and Triceps\nWednesday: Back and Biceps\nFriday: Legs and Shoulders",
    createdAt: "2024-12-18T14:00:00.000Z",
    archived: false,
    owner: "user-mno345pqr678"
  },
  {
    id: "notes-6F7G8H9I0J1K2L3M4",
    title: "Ideas for Blog Posts",
    body: "1. How to stay productive\n2. Benefits of meditation\n3. Top 10 travel destinations",
    createdAt: "2024-12-18T15:15:15.000Z",
    archived: false,
    owner: "user-pqr678stu901"
  }];

  const combinedArray = [...responseJson.data, ...data];

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: combinedArray };
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
};
