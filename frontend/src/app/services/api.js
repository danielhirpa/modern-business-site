const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Fetch all services for your /services page
export async function getServices() {
  const res = await fetch(`${API_BASE_URL}/services/`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

// Fetch all projects for your portfolio section
export async function getProjects() {
  const res = await fetch(`${API_BASE_URL}/projects/`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

// Send contact form data from your /contact page to Django
export async function sendContactMessage(formData) {
  const res = await fetch(`${API_BASE_URL}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Failed to submit message');
  return res.json();
}