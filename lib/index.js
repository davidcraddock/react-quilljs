"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme = 'snow';
var modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
        ['clean'],
    ],
    clipboard: {
        matchVisual: false,
    },
};
var formats = [
    'bold', 'italic', 'underline', 'strike', 'align', 'list', 'indent',
    'size', 'header', 'link', 'image', 'video', 'color', 'background', 'clean'
];
function assign(target, _varArgs) {
    'use strict';
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.useQuill = function (options) {
    if (options === void 0) { options = { theme: theme, modules: modules, formats: formats }; }
    var quillRef = react_1.useRef();
    var _a = react_1.useState(false), isLoaded = _a[0], setIsLoaded = _a[1];
    var _b = react_1.useState({
        Quill: undefined,
        quillRef: quillRef,
        quill: undefined,
        editorRef: quillRef,
        editor: undefined,
    }), obj = _b[0], setObj = _b[1];
    react_1.useEffect(function () {
        if (!obj.Quill) {
            obj.Quill = require('quill');
        }
        if (obj.Quill && !obj.quill && quillRef && quillRef.current && isLoaded) {
            var opts = assign(options, {
                modules: assign(modules, options.modules),
                formats: options.formats || formats,
                theme: options.theme || theme,
            });
            var quill = new obj.Quill(quillRef.current, opts);
            setObj(assign(assign({}, obj), { quill: quill, editor: quill }));
        }
        setIsLoaded(true);
    }, [obj.Quill]);
    return obj;
};
