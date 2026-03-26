const CustomImportScript = (() => {
  const __defProp = Object.defineProperty;
  const __defProps = Object.defineProperties;
  const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  const __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  const __getOwnPropNames = Object.getOwnPropertyNames;
  const __getOwnPropSymbols = Object.getOwnPropertySymbols;
  const __hasOwnProp = Object.prototype.hasOwnProperty;
  const __propIsEnum = Object.prototype.propertyIsEnumerable;
  const __defNormalProp = (obj, key, value) => (key in obj ? __defProp(obj, key, {
    enumerable: true, configurable: true, writable: true, value,
  }) : obj[key] = value);
  const __spreadValues = (a, b) => {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      }
    }
    return a;
  };
  const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const __export = (target, all) => {
    for (const name in all) __defProp(target, name, { get: all[name], enumerable: true });
  };
  const __copyProps = (to, from, except, desc) => {
    if (from && typeof from === 'object' || typeof from === 'function') {
      for (const key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  const __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

  // tools/importer/import-homepage.js
  const import_homepage_exports = {};
  __export(import_homepage_exports, {
    default: () => import_homepage_default,
  });

  // tools/importer/parsers/hero-enterprise.js
  function parse(element, { document }) {
    const teaser = element.querySelector('.cmp-teaser') || element;
    const img = teaser.querySelector('.cmp-teaser__image img');
    const heading = teaser.querySelector('.cmp-teaser__title');
    const description = teaser.querySelector('.cmp-teaser__description');
    const ctas = Array.from(teaser.querySelectorAll('.cmp-teaser__action-container a'));
    const cells = [];
    if (img) {
      cells.push([img]);
    }
    const contentCell = [];
    if (heading) contentCell.push(heading);
    if (description) contentCell.push(description);
    contentCell.push(...ctas);
    cells.push(contentCell);
    const block = WebImporter.Blocks.createBlock(document, { name: 'hero-enterprise', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-stats.js
  function parse2(element, { document }) {
    const cards = element.querySelectorAll(':scope > .card');
    const cells = [];
    cards.forEach((card) => {
      const teaser = card.querySelector('.cmp-teaser') || card;
      const img = teaser.querySelector('.cmp-teaser__image img');
      const pretitle = teaser.querySelector('.cmp-teaser__pretitle');
      const title = teaser.querySelector('.cmp-teaser__title');
      const description = teaser.querySelector('.cmp-teaser__description');
      const ctas = Array.from(teaser.querySelectorAll('.cmp-teaser__action-container a'));
      const imageCell = img || '';
      const contentCell = [];
      if (pretitle) contentCell.push(pretitle);
      if (title) contentCell.push(title);
      if (description) contentCell.push(description);
      contentCell.push(...ctas);
      cells.push([imageCell, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'cards-stats', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/tabs-numbered.js
  function parse3(element, { document }) {
    const panels = element.querySelectorAll('article.lumen-tabs__panel');
    const cells = [];
    panels.forEach((panel, index) => {
      const labelText = String(index + 1).padStart(2, '0');
      const img = panel.querySelector('.lumen-tabs__imageWrap img');
      const title = panel.querySelector('.lumen-tabs__title');
      const desc = panel.querySelector('.lumen-tabs__desc');
      const cta = panel.querySelector('.lumen-tabs__cta');
      const contentCell = [];
      if (img) contentCell.push(img);
      if (title) contentCell.push(title);
      if (desc) contentCell.push(desc);
      if (cta) contentCell.push(cta);
      cells.push([labelText, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'tabs-numbered', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/tabs-industry.js
  function parse4(element, { document }) {
    const dropdownOptions = element.querySelectorAll('.dropdown-option');
    const items = element.querySelectorAll('.industry-selector-item');
    const sharedImg = element.querySelector('.industry-selector-image img');
    const cells = [];
    items.forEach((item, index) => {
      const optionEl = dropdownOptions[index];
      const labelText = optionEl ? optionEl.textContent.trim() : `Industry ${index + 1}`;
      const title = item.querySelector('.industry-selector-title');
      const description = item.querySelector('.industry-selector-description');
      const cta = item.querySelector('.industry-selector-cta-link1');
      const industryName = item.querySelector('.industry-selector-industry-name');
      const location = item.querySelector('.industry-selector-industry-location');
      const contentCell = [];
      if (sharedImg && index === 0) contentCell.push(sharedImg.cloneNode(true));
      else if (sharedImg) contentCell.push(sharedImg.cloneNode(true));
      if (industryName && industryName.textContent.trim()) contentCell.push(industryName);
      if (location && location.textContent.trim()) contentCell.push(location);
      if (title) contentCell.push(title);
      if (description) contentCell.push(description);
      if (cta) contentCell.push(cta);
      cells.push([labelText, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'tabs-industry', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-solutions.js
  function parse5(element, { document }) {
    const cards = element.querySelectorAll(':scope > .card');
    const cells = [];
    cards.forEach((card) => {
      const teaser = card.querySelector('.cmp-teaser') || card;
      const img = teaser.querySelector('.cmp-teaser__image img');
      const title = teaser.querySelector('.cmp-teaser__title');
      const description = teaser.querySelector('.cmp-teaser__description');
      const ctas = Array.from(teaser.querySelectorAll('.cmp-teaser__action-container a'));
      const imageCell = img || '';
      const contentCell = [];
      if (title) contentCell.push(title);
      if (description) contentCell.push(description);
      contentCell.push(...ctas);
      cells.push([imageCell, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'cards-solutions', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-logos.js
  function parse6(element, { document }) {
    const logoContainers = element.querySelectorAll(':scope > div');
    const cells = [];
    logoContainers.forEach((container) => {
      const img = container.querySelector('img');
      if (img) {
        cells.push([img]);
      }
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'cards-logos', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-industry.js
  function parse7(element, { document }) {
    const cards = element.querySelectorAll(':scope > .card');
    const cells = [];
    cards.forEach((card) => {
      const teaser = card.querySelector('.cmp-teaser') || card;
      const img = teaser.querySelector('.cmp-teaser__image img');
      const title = teaser.querySelector('.cmp-teaser__title');
      const description = teaser.querySelector('.cmp-teaser__description');
      const ctas = Array.from(teaser.querySelectorAll('.cmp-teaser__action-container a'));
      const imageCell = img || '';
      const contentCell = [];
      if (title) contentCell.push(title);
      if (description) contentCell.push(description);
      contentCell.push(...ctas);
      cells.push([imageCell, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'cards-industry', cells });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-support.js
  function parse8(element, { document }) {
    const cards = element.querySelectorAll(':scope > .card');
    const cells = [];
    cards.forEach((card) => {
      const teaser = card.querySelector('.cmp-teaser') || card;
      const img = teaser.querySelector('.cmp-teaser__image img');
      const title = teaser.querySelector('.cmp-teaser__title');
      const description = teaser.querySelector('.cmp-teaser__description');
      const ctas = Array.from(teaser.querySelectorAll('.cmp-teaser__action-container a'));
      const imageCell = img || '';
      const contentCell = [];
      if (title) contentCell.push(title);
      if (description) contentCell.push(description);
      contentCell.push(...ctas);
      cells.push([imageCell, contentCell]);
    });
    const block = WebImporter.Blocks.createBlock(document, { name: 'cards-support', cells });
    element.replaceWith(block);
  }

  // tools/importer/transformers/lumen-cleanup.js
  const H = { before: 'beforeTransform', after: 'afterTransform' };
  function transform(hookName, element, payload) {
    if (hookName === H.before) {
      WebImporter.DOMUtils.remove(element, [
        '#onetrust-consent-sdk',
        '.loaderbox',
        '.warningDiv',
      ]);
    }
    if (hookName === H.after) {
      WebImporter.DOMUtils.remove(element, [
        '.is-navigation-sticky',
        'footer',
        '.cmp-header__breadcrumb',
        '.carousel-dots',
        '#env-run-mode-setting',
        'noscript',
        'iframe',
        'link',
      ]);
      element.querySelectorAll('*').forEach((el) => {
        el.removeAttribute('data-cmp-data-layer');
        el.removeAttribute('data-cmp-data-layer-enabled');
        el.removeAttribute('data-track');
        el.removeAttribute('onclick');
      });
    }
  }

  // tools/importer/transformers/lumen-sections.js
  const H2 = { before: 'beforeTransform', after: 'afterTransform' };
  function transform2(hookName, element, payload) {
    if (hookName === H2.after) {
      const { template } = payload;
      if (!template || !template.sections || template.sections.length < 2) return;
      const { document } = element.ownerDocument ? { document: element.ownerDocument } : { document };
      const doc = element.ownerDocument || document;
      const sections = [...template.sections].reverse();
      for (const section of sections) {
        const selectors = Array.isArray(section.selector) ? section.selector : [section.selector];
        let sectionEl = null;
        for (const sel of selectors) {
          sectionEl = element.querySelector(sel);
          if (sectionEl) break;
        }
        if (!sectionEl) continue;
        if (section.style) {
          const sectionMetadata = WebImporter.Blocks.createBlock(doc, {
            name: 'Section Metadata',
            cells: { style: section.style },
          });
          sectionEl.after(sectionMetadata);
        }
        const isFirst = section.id === template.sections[0].id;
        if (!isFirst) {
          const hr = doc.createElement('hr');
          sectionEl.before(hr);
        }
      }
    }
  }

  // tools/importer/import-homepage.js
  const parsers = {
    'hero-enterprise': parse,
    'cards-stats': parse2,
    'tabs-numbered': parse3,
    'tabs-industry': parse4,
    'cards-solutions': parse5,
    'cards-logos': parse6,
    'cards-industry': parse7,
    'cards-support': parse8,
  };
  const PAGE_TEMPLATE = {
    name: 'homepage',
    description: 'Lumen Technologies homepage with hero, product/service offerings, and company information',
    urls: [
      'https://www.lumen.com/en-us/home.html',
    ],
    sections: [
      {
        id: 'section-1',
        name: 'Hero',
        selector: '.herobanner.teaser',
        style: null,
        blocks: ['hero-enterprise'],
        defaultContent: [],
      },
      {
        id: 'section-2',
        name: 'Stats',
        selector: '.teasercontainer.teaser:has(.teaser-stat-tiles)',
        style: null,
        blocks: ['cards-stats'],
        defaultContent: ['.teaser-stat-tiles > .cmp-teaser__content'],
      },
      {
        id: 'section-3',
        name: 'Tabbed Features',
        selector: '.stackedContent',
        style: null,
        blocks: ['tabs-numbered'],
        defaultContent: [],
      },
      {
        id: 'section-4',
        name: 'Industry Selector',
        selector: '.industrySelectorBlock',
        style: null,
        blocks: ['tabs-industry'],
        defaultContent: [],
      },
      {
        id: 'section-5',
        name: 'Solutions Cards',
        selector: '.teasercontainer.teaser:has(.teaser-cards-block)',
        style: 'dark',
        blocks: ['cards-solutions'],
        defaultContent: ['.teaser-cards-block > .cmp-teaser__content'],
      },
      {
        id: 'section-6',
        name: 'Logo Bar',
        selector: '.partnerstory',
        style: null,
        blocks: ['cards-logos'],
        defaultContent: ['.partner-story-heading'],
      },
      {
        id: 'section-7',
        name: 'Staggered Industry Cards',
        selector: '.teasercontainer.teaser:has(.teaser-staggered-cards)',
        style: 'dark',
        blocks: ['cards-industry'],
        defaultContent: [],
      },
      {
        id: 'section-8',
        name: 'Support',
        selector: '.teasercontainer.teaser:has(.teaser-with-cards)',
        style: null,
        blocks: ['cards-support'],
        defaultContent: ['.teaser-with-cards > .cmp-teaser__content'],
      },
    ],
    blocks: [
      {
        name: 'hero-enterprise',
        instances: ['.herobanner.teaser'],
      },
      {
        name: 'cards-stats',
        instances: ['.teaser-stat-tiles .cards.wrapper'],
      },
      {
        name: 'tabs-numbered',
        instances: ['.stackedContent .lumen-tabs'],
      },
      {
        name: 'tabs-industry',
        instances: ['.industrySelectorBlock .industry-selector-container'],
      },
      {
        name: 'cards-solutions',
        instances: ['.teaser-cards-block .cards.wrapper'],
      },
      {
        name: 'cards-logos',
        instances: ['.partnerstory .carousel-group:first-child'],
      },
      {
        name: 'cards-industry',
        instances: ['.teaser-staggered-cards .cards.wrapper'],
      },
      {
        name: 'cards-support',
        instances: ['.teaser-with-cards .cards.wrapper'],
      },
    ],
  };
  const transformers = [
    transform,
    transform2,
  ];
  function executeTransformers(hookName, element, payload) {
    const enhancedPayload = __spreadProps(__spreadValues({}, payload), {
      template: PAGE_TEMPLATE,
    });
    transformers.forEach((transformerFn) => {
      try {
        transformerFn.call(null, hookName, element, enhancedPayload);
      } catch (e) {
        console.error(`Transformer failed at ${hookName}:`, e);
      }
    });
  }
  function findBlocksOnPage(document, template) {
    const pageBlocks = [];
    template.blocks.forEach((blockDef) => {
      blockDef.instances.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) {
          console.warn(`Block "${blockDef.name}" selector not found: ${selector}`);
        }
        elements.forEach((element) => {
          pageBlocks.push({
            name: blockDef.name,
            selector,
            element,
            section: blockDef.section || null,
          });
        });
      });
    });
    console.log(`Found ${pageBlocks.length} block instances on page`);
    return pageBlocks;
  }
  var import_homepage_default = {
    transform: (payload) => {
      const {
        document, url, html, params,
      } = payload;
      const main = document.body;
      executeTransformers('beforeTransform', main, payload);
      const pageBlocks = findBlocksOnPage(document, PAGE_TEMPLATE);
      pageBlocks.forEach((block) => {
        const parser = parsers[block.name];
        if (parser) {
          try {
            parser(block.element, { document, url, params });
          } catch (e) {
            console.error(`Failed to parse ${block.name} (${block.selector}):`, e);
          }
        } else {
          console.warn(`No parser found for block: ${block.name}`);
        }
      });
      executeTransformers('afterTransform', main, payload);
      const hr = document.createElement('hr');
      main.appendChild(hr);
      WebImporter.rules.createMetadata(main, document);
      WebImporter.rules.transformBackgroundImages(main, document);
      WebImporter.rules.adjustImageUrls(main, url, params.originalURL);
      const path = WebImporter.FileUtils.sanitizePath(
        new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, ''),
      );
      return [{
        element: main,
        path,
        report: {
          title: document.title,
          template: PAGE_TEMPLATE.name,
          blocks: pageBlocks.map((b) => b.name),
        },
      }];
    },
  };
  return __toCommonJS(import_homepage_exports);
})();
