export default function decorate(block) {
  const imgSrc = block.querySelector('a')?.href;
  return `
        <mj-section mj-class="mj-aem-image-section">
                <mj-text mj-class="mj-aem-image">
                    <img src="${imgSrc}"/>
                </mj-text>
        </mj-section>
    `;
}
