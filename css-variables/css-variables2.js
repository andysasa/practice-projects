const updates = document.querySelectorAll("input");

function handleUpdates() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

updates.forEach(update => update.addEventListener('change', handleUpdates));
updates.forEach(update => update.addEventListener('mousemove', handleUpdates));
