webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(166);


	var TodoList = _react2.default.createClass({
	    displayName: 'TodoList',

	    changeTab: function changeTab(e) {
	        var type = e.target.getAttribute('type');
	        this.setState({ type: type });
	    },
	    getInitialState: function getInitialState() {
	        return { type: 'all' };
	    },
	    render: function render() {
	        var _this = this;

	        var style = {};
	        if (this.props.items.length === 0) {
	            style = { display: 'none' };
	        }

	        return _react2.default.createElement(
	            'div',
	            { className: 'itemList' },
	            _react2.default.createElement(
	                'div',
	                { className: 'clearfix' },
	                this.props.items.length,
	                ' items',
	                _react2.default.createElement(
	                    'nav',
	                    { style: style },
	                    _react2.default.createElement(
	                        'a',
	                        { className: this.state.type === 'all' ? 'navTab active' : 'navTab', type: 'all', onClick: this.changeTab },
	                        'ALL'
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { className: this.state.type === 'active' ? 'navTab active' : 'navTab', type: 'active', onClick: this.changeTab },
	                        'ACTIVE'
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { className: this.state.type === 'done' ? 'navTab active' : 'navTab', type: 'done', onClick: this.changeTab },
	                        'COMPLETE'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'ul',
	                null,
	                this.props.items.map(function (item, index) {
	                    if (_this.state.type === 'all' || _this.state.type === item.status) {
	                        return _react2.default.createElement(
	                            'li',
	                            { key: index, id: index, className: item.status },
	                            _react2.default.createElement('input', { type: 'checkbox', className: 'toggle', onChange: _this.props.changeStatus, checked: item.status === 'done' }),
	                            _react2.default.createElement(
	                                'lable',
	                                null,
	                                item.text
	                            ),
	                            _react2.default.createElement('button', { className: 'remove', onClick: _this.props.removeItem })
	                        );
	                    }
	                })
	            )
	        );
	    }
	});
	var TodoApp = _react2.default.createClass({
	    displayName: 'TodoApp',

	    getInitialState: function getInitialState() {
	        var itemsFromStorage = localStorage.getItem('TODOs') ? window.JSON.parse(localStorage.getItem('TODOs')) : [];
	        return { items: itemsFromStorage, text: '' };
	    },
	    onChange: function onChange(e) {
	        this.setState({ text: e.target.value });
	    },
	    handleSubmit: function handleSubmit(e) {
	        e.preventDefault();
	        var nextItems = this.state.items.concat([{ text: this.state.text, status: 'active' }]);
	        var nextText = '';
	        var itemJson = JSON.stringify(nextItems);
	        localStorage.setItem('TODOs', itemJson);
	        this.setState({ items: nextItems, text: nextText });
	    },
	    changeStatus: function changeStatus(e) {
	        var key = e.target.parentNode.getAttribute('id');
	        var items = this.state.items;
	        var status = this.state.items[key]['status'];
	        if (status === 'done') {
	            items[key]['status'] = 'active';
	        } else {
	            items[key]['status'] = 'done';
	        }
	        this.changeStates(items);
	    },
	    changeStates: function changeStates(items) {
	        this.setState({ items: items });
	        localStorage.setItem('TODOs', JSON.stringify(items));
	    },
	    removeItem: function removeItem(e) {
	        var key = e.target.parentNode.getAttribute('id');
	        var items = this.state.items;
	        items.splice(key, 1);
	        this.changeStates(items);
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'pure-u-11-12' },
	            _react2.default.createElement(
	                'header',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    'TODOs'
	                )
	            ),
	            _react2.default.createElement(
	                'form',
	                { onSubmit: this.handleSubmit, className: 'submitForm' },
	                _react2.default.createElement('input', { type: 'text', className: 'submitInput pure-u-3-4 pure-u-md-5-6 pure-u-lg-7-8', onChange: this.onChange, value: this.state.text, placeholder: 'What needs to be done?' }),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'submitBtn pure-u-1-4 pure-u-md-1-6 pure-u-lg-1-8', disabled: this.state.text === '' },
	                    'Add'
	                )
	            ),
	            _react2.default.createElement(TodoList, { items: this.state.items, changeStatus: this.changeStatus, removeItem: this.removeItem })
	        );
	    }
	});

	(0, _reactDom.render)(_react2.default.createElement(TodoApp, null), document.getElementsByTagName('div')[0]);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(169)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(168)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Helvetica Neue', Helvetica,  \"Microsoft YaHei\", \"\\5FAE\\8F6F\\96C5\\9ED1\",  STXihei, \"\\534E\\6587\\7EC6\\9ED1\",  serif; }\n\nbody {\n  text-align: center; }\n\n.clearfix {\n  zoom: 1; }\n  .clearfix:after {\n    overflow: hidden;\n    content: \" \";\n    display: block;\n    clear: both; }\n\n.container {\n  margin: 0 auto;\n  background: #f9f9f9;\n  box-sizing: border-box;\n  padding: 30px 0;\n  text-align: center; }\n  .container header {\n    font-size: 26px;\n    text-align: center;\n    margin-bottom: 30px; }\n    .container header h3 {\n      font-weight: 100;\n      color: #8493C5; }\n\n.submitBtn {\n  background: #B2BFDE;\n  border: none;\n  color: #fff;\n  height: 50px;\n  float: right;\n  font-size: 18px;\n  font-weight: 100;\n  transition: background .3s; }\n  .submitBtn:hover {\n    background: #8493C5; }\n  .submitBtn:disable {\n    background: #a5a5a5; }\n\n.submitInput {\n  color: #a5a5a5;\n  height: 50px;\n  padding: 0 3%;\n  font-size: 20px;\n  font-weight: 100;\n  border: none; }\n  .submitInput:focus {\n    color: #8493C5; }\n\n.submitForm {\n  -webkit-border-radius: 3px;\n  -khtml-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -ms-border-radius: 3px;\n  -o-border-radius: 3px;\n  border-radius: 3px;\n  height: 50px;\n  width: 100%;\n  border: 1px solid #d5d5d5;\n  -webkit-box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  -khtml-box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  -moz-box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  -ms-box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  -o-box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  box-shadow: 0 7px 10px 3px rgba(192, 192, 192, 0.35);\n  margin-bottom: 20px; }\n  .submitForm:focus {\n    border-color: #B2BFDE; }\n\n.itemList {\n  font-weight: 100;\n  color: #a5a5a5;\n  text-align: left; }\n  .itemList li {\n    font-weight: 200;\n    background: #fff;\n    list-style: none;\n    height: 50px;\n    line-height: 50px;\n    font-size: 20px;\n    position: relative;\n    padding: 0 10%; }\n    .itemList li:hover {\n      background: #F7F9FF; }\n    .itemList li .toggle {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      left: 3%;\n      top: 10px;\n      border: 1px solid #d5d5d5;\n      -webkit-appearance: none;\n      appearance: none;\n      -webkit-border-radius: 50%;\n      -khtml-border-radius: 50%;\n      -moz-border-radius: 50%;\n      -ms-border-radius: 50%;\n      -o-border-radius: 50%;\n      border-radius: 50%; }\n      .itemList li .toggle:checked:after {\n        content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29\" height=\"29\" viewBox=\"0 0 95 95\"><path fill=\"#8493C5\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>'); }\n    .itemList li .remove {\n      font-weight: 100;\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: 3%;\n      font-size: 30px;\n      color: #cc9a9a;\n      padding: 0;\n      border: 0;\n      background: none; }\n      .itemList li .remove:after {\n        content: \"\\D7\"; }\n  .itemList li.done {\n    color: #B2BFDE;\n    font-style: italic;\n    text-decoration: line-through;\n    font-weight: 100; }\n  .itemList nav {\n    float: right; }\n    .itemList nav .navTab {\n      display: inline-block;\n      text-align: center;\n      line-height: 30px;\n      width: 150px;\n      height: 30px;\n      background: #B2BFDE;\n      color: #fff;\n      border: 1px solid #d5d5d5;\n      border-bottom: none;\n      -webkit-border-radius: 5px 5px 0px 0px;\n      -khtml-border-radius: 5px 5px 0px 0px;\n      -moz-border-radius: 5px 5px 0px 0px;\n      -ms-border-radius: 5px 5px 0px 0px;\n      -o-border-radius: 5px 5px 0px 0px;\n      border-radius: 5px 5px 0px 0px;\n      transition: all 0.2s; }\n      .itemList nav .navTab:hover {\n        background: #8493C5; }\n    .itemList nav .navTab.active {\n      background: #fff;\n      color: #d5d5d5; }\n\nbutton, input,\ninput[type=\"checkbox\"],\ninput[type=\"text\"] {\n  outline: none; }\n", ""]);

	// exports


/***/ },

/***/ 168:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});