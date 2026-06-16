// script.js — Minimal bootstrapping and hooks for future Three.js / Tone.js logic

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form){
    form.addEventListener('submit', handleFormSubmit);
  }

  // Placeholder: initialize visual/audio systems here when needed
  // initializeThree();
  // initializeAudio();
});

function handleFormSubmit(event){
  event.preventDefault();
  const f = event.target;
  const data = {
    name: f.name.value.trim(),
    email: f.email.value.trim(),
    message: f.message.value.trim(),
    subscribe: !!f.subscribe.checked
  };

  // Basic client-side validation
  if (!data.name || !data.email){
    alert('Please provide name and email.');
    return;
  }

  // TODO: wire to backend or mailing service
  console.log('Contact form submitted', data);
  f.reset();
  alert('Thank you — message queued.');
}

/* Exported hooks (for future modules)
export function initializeThree(){
  // Intentionally empty: import Three.js and bootstrap scene here.
} */

/*
export function initializeAudio(){
  // Intentionally empty: import Tone.js or WebAudio API setup here.
} */
