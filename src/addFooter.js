export function addFooter(rajatPorwalLink, sourceCodeLink) {
   
    var footer = document.createElement('footer');
    var paragraph = document.createElement('p');
    var builtBySpan = document.createElement('span');
    builtBySpan.textContent = 'Built by ';
    
    var rajatPorwalAnchor = document.createElement('a');
    rajatPorwalAnchor.textContent = 'Rajat Porwal';
    rajatPorwalAnchor.href = rajatPorwalLink;
    
    var pipeSpan = document.createElement('span');
    pipeSpan.textContent = ' | ';
    
    var sourceCodeSpan = document.createElement('span');
    var sourceCodeAnchor = document.createElement('a');
    sourceCodeAnchor.textContent = 'Source code';
    sourceCodeAnchor.href = sourceCodeLink;

    sourceCodeSpan.appendChild(sourceCodeAnchor);
    paragraph.appendChild(builtBySpan);
    paragraph.appendChild(rajatPorwalAnchor);
    paragraph.appendChild(pipeSpan);
    paragraph.appendChild(sourceCodeSpan);
    footer.appendChild(paragraph);
   
    document.body.appendChild(footer);
}