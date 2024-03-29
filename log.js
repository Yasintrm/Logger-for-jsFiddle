//LOGGER
var LOGGER = (function () {
    var doc = document,
        logger, div, childs, txt, counter = 0,
        style, num, methods = {
            init: function () {
                window.onload = function () {
                    logger = doc.createElement('div');
                    logger.style.height = '200px';
                    logger.style.overflow = 'auto';
                    logger.style.border = '1px solid gray';
                    doc.body.appendChild(logger);
                };
                window.onerror = function (errorMsg, url, line) {
                    methods.log('error: ' + errorMsg + ' line: ' + line, true, true);
                    return true;
                };
                return this;
            },
            err: function (arg, line) {
                return this.log('error: ' + arg + ' line: ' + line, true, true);
            },
            log: function (arg, printToConsole, err) {
				arg = JSON.stringify(arg);
                div = doc.createElement('div');
                style = div.style;
                style.font = '12px Tahoma';
                style.fontSize = '12px';
                style.borderRadius = '3px';
                style.border = '1px solid #BCE3DE';
                style.padding = '4px';
                style.margin = '4px';
                style.backgroundColor = err ? 'red' : (counter % 2 ? '#C9C5E3' : '#AAA2DE');

                num = doc.createElement('span');
                num.className = 'num';
                num.style.color = '#fff';
                num.innerText = ++counter + '. ';

                txt = doc.createElement('span');
                txt.innerText = arg;
                txt.style.fontStyle = 'italic';

                div.appendChild(num);
                div.appendChild(txt);

                if (logger) {

                    childs = childs || logger.children;
                    if (childs.length) {
                        logger.insertBefore(div, childs[0]);
                    } else {
                        logger.appendChild(div);
                    }
                }

                if (printToConsole) {
                    console.log(arg);
                }
            }
        };

    return methods;
}().init());
var L = LOGGER.log;