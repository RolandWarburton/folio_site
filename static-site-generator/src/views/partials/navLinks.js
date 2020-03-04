module.exports = (previous, next) => {
    const prevLink = (previous) ? `<a class="darkHyperLink" href=/${previous.filepath}>${previous.title}</a>` : '';
    const nextLink = (next) ? `<a class="darkHyperLink" href=/${next.filepath}>${next.title}</a>` : '';
    return (
        `<nav id="prev-next-nav">
            <li id="nav-prev-link">${prevLink}</li>
            <li id="nav-next-link">${nextLink}</li>
        </nav>`
    )
}
