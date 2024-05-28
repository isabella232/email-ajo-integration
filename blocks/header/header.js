import { decorateButtons, decorateBlocks, decorateSections } from '../../scripts/lib-franklin.js';

export default async function decorate(block, { fetch }) {
  const resp = await fetch('/header.plain.html');
  console.log('head');
  if (resp.ok) {
    block.innerHTML = await resp.text();
    block.querySelectorAll('a[href="http://view-as-webpage.marketo"]').forEach((a) => a.href = '{{system.viewAsWebpageLink:default=edit me}}');
    console.log(block);
    const elements = block.querySelectorAll('div');
    return `
    <mj-section mj-class="mj-header-section">
    <mj-image mj-class="mj-header-image" src="${elements[0].querySelector('img')?.src || ''}" />
    <mj-list>
      <mj-li>Home</ml-li>
    </mj-list>
  </mj-section>`;
  }
  return [];
}
