// eslint-disable-next-line import/no-unresolved
import { toClassName } from '../../scripts/aem.js';

export default async function decorate(block) {
  // snapshot rows before any DOM mutations
  const rows = [...block.children];

  // shared image container (left column)
  const imageContainer = document.createElement('div');
  imageContainer.className = 'tabs-industry-image';

  // content wrapper (right column): eyebrow + dropdown + panels
  const content = document.createElement('div');
  content.className = 'tabs-industry-content';

  // eyebrow label
  const eyebrow = document.createElement('div');
  eyebrow.className = 'tabs-industry-eyebrow';
  eyebrow.textContent = 'Industries we serve';
  content.append(eyebrow);

  // dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'tabs-industry-dropdown';

  const header = document.createElement('button');
  header.className = 'tabs-industry-dropdown-header';
  header.setAttribute('type', 'button');
  header.setAttribute('aria-expanded', 'false');
  const labelEl = document.createElement('span');
  labelEl.className = 'tabs-industry-dropdown-label';
  const arrowEl = document.createElement('span');
  arrowEl.className = 'tabs-industry-dropdown-arrow';
  header.append(labelEl, arrowEl);
  dropdown.append(header);

  const list = document.createElement('div');
  list.className = 'tabs-industry-dropdown-list';
  list.setAttribute('role', 'listbox');
  dropdown.append(list);
  content.append(dropdown);

  // decorate panels, extract images, build options
  const images = [];
  rows.forEach((row, i) => {
    const tab = row.firstElementChild;
    const id = toClassName(tab.textContent);

    // the second child div holds panel content (image + text)
    const panelContent = row.children[1];

    // extract image from panel content
    if (panelContent) {
      const imgP = panelContent.querySelector('p:has(img), picture');
      if (imgP) {
        images.push(imgP.cloneNode(true));
        imgP.remove();
      } else {
        images.push(null);
      }
    } else {
      images.push(null);
    }

    // turn the row into a panel
    row.className = 'tabs-industry-panel';
    row.id = `tabpanel-${id}`;
    row.setAttribute('aria-hidden', !!i);

    // remove the tab label div, keep only content
    tab.remove();

    // build dropdown option
    const option = document.createElement('div');
    option.className = 'tabs-industry-dropdown-option';
    option.setAttribute('role', 'option');
    option.setAttribute('aria-selected', !i);
    option.setAttribute('data-target', `tabpanel-${id}`);
    option.setAttribute('data-index', i);
    option.textContent = tab.textContent;
    list.append(option);

    if (i === 0) {
      labelEl.textContent = tab.textContent;
    }

    content.append(row);
  });

  // set initial image
  if (images[0]) {
    imageContainer.append(images[0]);
  }

  // helper to swap image
  function showImage(index) {
    imageContainer.innerHTML = '';
    if (images[index]) {
      imageContainer.append(images[index].cloneNode(true));
    }
  }

  // toggle dropdown
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', !expanded);
  });

  // select option
  list.addEventListener('click', (e) => {
    const option = e.target.closest('.tabs-industry-dropdown-option');
    if (!option) return;

    const targetId = option.getAttribute('data-target');
    const idx = Number(option.getAttribute('data-index'));

    content.querySelectorAll('.tabs-industry-panel').forEach((panel) => {
      panel.setAttribute('aria-hidden', true);
    });
    list.querySelectorAll('.tabs-industry-dropdown-option').forEach((opt) => {
      opt.setAttribute('aria-selected', false);
    });

    const panel = content.querySelector(`#${targetId}`);
    if (panel) panel.setAttribute('aria-hidden', false);
    option.setAttribute('aria-selected', true);
    labelEl.textContent = option.textContent;
    header.setAttribute('aria-expanded', false);
    showImage(idx);
  });

  // close on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      header.setAttribute('aria-expanded', 'false');
    }
  });

  // clear block and build final structure
  block.innerHTML = '';
  block.append(imageContainer, content);
}
