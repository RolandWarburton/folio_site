module.exports = (previous, next) => {
    const prevLink = (previous) ? `<a class="darkHyperLink" href=/${previous.filepath}>${previous.title}</a>` : '';
    const nextLink = (next) ? `<a class="darkHyperLink" href=/${next.filepath}>${next.title}</a>` : '';
    return (
        `
        ${(prevLink || nextLink) ? 
        `
            <nav id="dynamic-nav">
                <li id="nav-prev-link">${prevLink}</li>
                <li id="nav-next-link">${nextLink}</li>
            </nav>
        ` : ''
        }
        `
        
    )
}
// i might use this home link one day for something useful
{/* <li id="nav-home-link"><a class="darkHyperLink" href="/index.html">Home</a></li> */}

// `
// <nav id="dynamic-nav">
//     <li id="nav-prev-link">${prevLink}</li>
//     <li id="nav-next-link">${nextLink}</li>
// </nav>
// `