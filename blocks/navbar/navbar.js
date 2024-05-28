export default async function decorate(block) {
    const container = block.closest('.navbar-container');
    console.log(block);
    // const img = container.querySelector('img');
    // const navigationItems = [...block.children[1].children]
    //     // .filter((element) => element.matches('.button-container') )
    //     .map((element) => {
    //         console.log(element);
    //         const { href, textContent } = element.firstElementChild;
    //         return `<mj-navbar-link href="${href}">${textContent}</mj-navbar-link>`;
    //     })

    console.log(block.querySelectorAll('a'));
    const navigationItems = [...block.querySelectorAll('a')].map((element) => {
    
    console.log(element);
        const { href, textContent } = element;
        return `<mj-navbar-link href="${href}">${textContent}</mj-navbar-link>`;
    });
    console.log(navigationItems);
    return `
        <mj-section mj-class="mj-navbar-container">
            <mj-column mj-class="mj-navbar-column">
                <mj-navbar hamburger="none">
                    ${navigationItems.join('')}
                </mj-navbar>
            </mj-column>
        </mj-section>
    `
}