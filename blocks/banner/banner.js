export default function decorate(block) {
  const imgSrc = block.querySelector('img')?.src;
  const cta = block.querySelector('a')?.href;
  return `
        <mj-section mj-class="mj-aem-image-section">
            <mj-navbar-link href="${cta}">
                <mj-text mj-class="mj-aem-image">
                    <img src="${imgSrc}"/>
                </mj-text>
            </mj-navbar-link>
        </mj-section>
    `;
}
