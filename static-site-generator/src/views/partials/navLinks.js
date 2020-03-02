module.exports = (previous, next) => {
    const prevLink = (previous) ? `<a href=/${previous.filepath}>${previous.title}</a>` : '';
    const nextLink = (next) ? `<a href=/${next.filepath}>${next.title}</a>` : '';
    return (
        `<nav id="prev-next-nav">
        <li id="nav-prev-link">${prevLink}</li>
        <li id="nav-next-link">${nextLink}</li>
        </nav>`
    )
}
