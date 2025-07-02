
  const follower=document.getElementById('mouse-circle');

// Show heading (default visible), then hide after 3s
setTimeout(() => {
  document.getElementById('pre-heading').classList.add('hidden');
}, 3000);

// Show button at 3s, hide after 3s (at 6s)
setTimeout(() => {
  const btn = document.getElementById('pre-btn');
  btn.classList.remove('hidden');
  btn.classList.remove('opacity-0'); // show with fade-in if using Tailwind
}, 3000);

setTimeout(() => {
  document.getElementById('pre-btn').classList.add('hidden');
}, 6000);

// Show name at 6s, hide after 3s (at 9s)
setTimeout(() => {
  const name = document.getElementById('pre-name');
  name.classList.remove('hidden');
  name.classList.remove('opacity-0');
}, 6000);

setTimeout(() => {
  document.getElementById('pre-name').classList.add('hidden');
}, 9000);




// Show main content at 9s
setTimeout(() => {
  document.getElementById('main-content').classList.remove('hidden');
}, 9000);

document.addEventListener("mousemove", (e) => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    });