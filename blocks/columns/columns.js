import { decorateDefaultContent } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = [...block.children];
  let mjml = '';
  let isGrey = true;

  rows.forEach((row) => {
    const cols = [...row.children];
    const filteredClassList = [...block.classList]
      .filter((cls) => cls !== 'columns' && cls !== 'block');
    const type = filteredClassList.length ? `-${filteredClassList[0]}` : '';

    // Toggle between grey and white for striped effect
    const backgroundColor = isGrey ? '#F0F0F0' : '#FFFFFF';
    isGrey = !isGrey;

    mjml += `<mj-section mj-class="mj-colums${type}-cols-${cols.length}" background-color="${backgroundColor}">`;

    cols.forEach((div, index) => {
      mjml += `
        <mj-column mj-class="mj-columns${type}-col mj-columns${type}-col-${index + 1} mj-columns${type}-col-${index === 0 ? 'first' : (index === cols.length - 1 ? 'last' : '')}">
          ${decorateDefaultContent(div)}
        </mj-column>
      `;
    });

    mjml += '</mj-section>';
  });

  return mjml;
}
