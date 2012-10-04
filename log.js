//LOGGER
var LOGGER = (function() {
    var doc = document,
        logger, div, childs, txt, counter = 0,
        divStyle, num, methods = {
            init: function() {
                logger = doc.createElement('div');
                logger.id = 'logger_' + new Date().valueOf();
                logger.style.height = '200px';
                logger.style.overflow = 'auto';
                logger.style.border = '1px solid black';
                doc.body.appendChild(logger);
                return this;
            },
            log: function(arg) {
                div = doc.createElement('div');
                div.className = 'log';

                num = doc.createElement('span');
                num.className = 'num';
                num.style.color = '#fff';
                num.innerText = ++counter + '. ';

                txt = doc.createElement('span');
                txt.innerText = arg;
                txt.style.fontStyle = 'italic';

                div.appendChild(num);
                div.appendChild(txt);
                divStyle = div.style;
                divStyle.fontFamily = 'Tahoma';
                divStyle.fontSize = '12px';
                divStyle.borderRadius = '3px';
                divStyle.borderWidth = '1px';
                divStyle.borderStyle = 'solid';
                divStyle.borderColor = '#BCE3DE';
                divStyle.padding = '4px';
                divStyle.margin = '4px';
                divStyle.backgroundColor = counter % 2 ? '#C9C5E3' : '#AAA2DE';

                childs = childs || logger.children;
                if (childs.length) {
                    logger.insertBefore(div, childs[0]);
                }
                else {
                    logger.appendChild(div);
                }

            }
        };

    return methods;

}().init());
