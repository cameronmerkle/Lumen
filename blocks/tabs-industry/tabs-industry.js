// eslint-disable-next-line import/no-unresolved
import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {
  const tabs = [...block.children].map((child) => child.firstElementChild);

  // build dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'tabs-industry-dropdown';

  const header = document.createElement('button');
  header.className = 'tabs-industry-dropdown-header';
  header.setAttribute('type', 'button');
  header.setAttribute('aria-expanded', 'false');
  const label = document.createElement('span');
  label.className = 'tabs-industry-dropdown-label';
  const arrow = document.createElement('span');
  arrow.className = 'tabs-industry-dropdown-arrow';
  header.append(label, arrow);
  dropdown.append(header);

  const list = document.createElement('div');
  list.className = 'tabs-industry-dropdown-list';
  list.setAttribute('role', 'listbox');
  dropdown.append(list);

  // decorate panels and build dropdown options
  tabs.forEach((tab, i) => {
    const id = toClassName(tab.textContent);

    // decorate tabpanel
    const panel = block.children[i];
    panel.className = 'tabs-industry-panel';
    panel.id = `tabpanel-${id}`;
    panel.setAttribute('aria-hidden', !!i);

    // build option
    const option = document.createElement('div');
    option.className = 'tabs-industry-dropdown-option';
    option.setAttribute('role', 'option');
    option.setAttribute('aria-selected', !i);
    option.setAttribute('data-target', `tabpanel-${id}`);
    option.textContent = tab.textContent;
    list.append(option);

    // set initial selected label
    if (i === 0) {
      header.querySelector('.tabs-industry-dropdown-label').textContent = tab.textContent;
    }

    tab.remove();
  });

  // toggle dropdown open/close
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', !expanded);
  });

  // select an option
  list.addEventListener('click', (e) => {
    const option = e.target.closest('.tabs-industry-dropdown-option');
    if (!option) return;

    const targetId = option.getAttribute('data-target');

    // hide all panels
    block.querySelectorAll('.tabs-industry-panel').forEach((panel) => {
      panel.setAttribute('aria-hidden', true);
    });
    // deselect all options
    list.querySelectorAll('.tabs-industry-dropdown-option').forEach((opt) => {
      opt.setAttribute('aria-selected', false);
    });

    // show selected
    const panel = block.querySelector(`#${targetId}`);
    if (panel) panel.setAttribute('aria-hidden', false);
    option.setAttribute('aria-selected', true);
    header.querySelector('.tabs-industry-dropdown-label').textContent = option.textContent;
    header.setAttribute('aria-expanded', false);
  });

  // close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      header.setAttribute('aria-expanded', 'false');
    }
  });

  block.prepend(dropdown);
}
