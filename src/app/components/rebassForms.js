// /* eslint-disable no-param-reassign */
// /* eslint-disable prefer-rest-params */
// /* eslint-disable no-void */
// /* eslint-disable block-scoped-var */
// /* eslint-disable no-var */
// /* eslint-disable vars-on-top */
// /* eslint-disable consistent-return */
// /* eslint-disable no-plusplus */
// /* eslint-disable no-continue */
// /* eslint-disable no-restricted-syntax */
// /* eslint-disable @typescript-eslint/no-shadow */
// /* eslint-disable no-shadow */
// /* eslint-disable no-func-assign */
// /* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable @typescript-eslint/naming-convention */
// /* eslint-disable no-use-before-define */
// /* eslint-disable @typescript-eslint/no-use-before-define */
// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-multi-assign */
// /* eslint-disable max-len */
// Object.defineProperty(exports, '__esModule', {
//     value: true,
// });
// exports.Switch =
//     exports.Slider =
//     exports.Checkbox =
//     exports.Radio =
//     exports.Textarea =
//     exports.Select =
//     exports.Input =
//     exports.Label =
//         void 0;

// const _react = _interopRequireWildcard(require('react'));

// const _styledComponents = require('reflexbox/styled-components');

// const _shouldForwardProp = require('@styled-system/should-forward-prop');

// function _getRequireWildcardCache() {
//     if (typeof WeakMap !== 'function') return null;
//     const cache = new WeakMap();
//     _getRequireWildcardCache = function _getRequireWildcardCache() {
//         return cache;
//     };
//     return cache;
// }

// function _interopRequireWildcard(obj) {
//     if (obj && obj.__esModule) {
//         return obj;
//     }
//     const cache = _getRequireWildcardCache();
//     if (cache && cache.has(obj)) {
//         return cache.get(obj);
//     }
//     const newObj = {};
//     if (obj != null) {
//         const hasPropertyDescriptor =
//             Object.defineProperty && Object.getOwnPropertyDescriptor;
//         for (const key in obj) {
//             if (Object.prototype.hasOwnProperty.call(obj, key)) {
//                 const desc = hasPropertyDescriptor
//                     ? Object.getOwnPropertyDescriptor(obj, key)
//                     : null;
//                 if (desc && (desc.get || desc.set)) {
//                     Object.defineProperty(newObj, key, desc);
//                 } else {
//                     newObj[key] = obj[key];
//                 }
//             }
//         }
//     }
//     newObj.default = obj;
//     if (cache) {
//         cache.set(obj, newObj);
//     }
//     return newObj;
// }

// function _extends() {
//     _extends =
//         Object.assign ||
//         function (target) {
//             for (let i = 1; i < arguments.length; i++) {
//                 const source = arguments[i];
//                 for (const key in source) {
//                     if (Object.prototype.hasOwnProperty.call(source, key)) {
//                         target[key] = source[key];
//                     }
//                 }
//             }
//             return target;
//         };
//     return _extends.apply(this, arguments);
// }

// function _objectWithoutProperties(source, excluded) {
//     if (source == null) return {};
//     const target = _objectWithoutPropertiesLoose(source, excluded);
//     let key;
//     let i;
//     if (Object.getOwnPropertySymbols) {
//         const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
//         for (i = 0; i < sourceSymbolKeys.length; i++) {
//             key = sourceSymbolKeys[i];
//             if (excluded.indexOf(key) >= 0) continue;
//             if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// function _objectWithoutPropertiesLoose(source, excluded) {
//     if (source == null) return {};
//     const target = {};
//     const sourceKeys = Object.keys(source);
//     let key;
//     let i;
//     for (i = 0; i < sourceKeys.length; i++) {
//         key = sourceKeys[i];
//         if (excluded.indexOf(key) >= 0) continue;
//         target[key] = source[key];
//     }
//     return target;
// }

// function _toConsumableArray(arr) {
//     return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
// }

// function _nonIterableSpread() {
//     throw new TypeError('Invalid attempt to spread non-iterable instance');
// }

// function _iterableToArray(iter) {
//     if (
//         Symbol.iterator in Object(iter) ||
//         Object.prototype.toString.call(iter) === '[object Arguments]'
//     ) {
//         return Array.from(iter);
//     }
// }

// function _arrayWithoutHoles(arr) {
//     if (Array.isArray(arr)) {
//         for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
//             arr2[i] = arr[i];
//         }
//         return arr2;
//     }
// }

// const rebassProps = [].concat(_toConsumableArray(_shouldForwardProp.props), [
//     'sx',
//     'variant',
// ]);
// const PRE = new RegExp('^('.concat(rebassProps.join('|'), ')$'));
// const MRE = /^m[trblxy]?$/;

// const getProps = function getProps(test) {
//     return function (props) {
//         const next = {};

//         for (const key in props) {
//             if (test(key || '')) next[key] = props[key];
//         }

//         return next;
//     };
// };

// const getSystemProps = getProps((k) => {
//     return PRE.test(k);
// });
// const getMarginProps = getProps((k) => {
//     return MRE.test(k);
// });
// const omitMarginProps = getProps((k) => {
//     return !MRE.test(k);
// });

// const SVG = function SVG(_ref) {
//     const _ref$size = _ref.size;
//     const size = _ref$size === void 0 ? 24 : _ref$size;
//     const props = _objectWithoutProperties(_ref, ['size']);

//     return _react.default.createElement(_styledComponents.Box, {
//         as: 'svg',
//         xmlns: 'http://www.w3.org/2000/svg',
//         width: 24,
//         height: 24,
//         viewBox: '0 0 24 24',
//         fill: 'currentcolor',
//         ...props,
//     });
// };

// const Label = (0, _react.forwardRef)((props, ref) => {
//     return _react.default.createElement(_styledComponents.Flex, {
//         ref,
//         as: 'label',
//         tx: 'forms',
//         variant: 'label',
//         ...props,
//         __css: {
//             width: '100%',
//         },
//     });
// });
// exports.Label = Label;
// const Input = (0, _react.forwardRef)((props, ref) => {
//     return _react.default.createElement(_styledComponents.Box, {
//         ref,
//         as: 'input',
//         type: 'text',
//         tx: 'forms',
//         variant: 'input',
//         ...props,
//         __css: {
//             display: 'block',
//             width: '100%',
//             p: 2,
//             appearance: 'none',
//             fontSize: 'inherit',
//             lineHeight: 'inherit',
//             border: '1px solid',
//             borderRadius: 'default',
//             color: 'inherit',
//             bg: 'transparent',
//         },
//     });
// });
// exports.Input = Input;

// const DownArrow = function DownArrow(props) {
//     return _react.default.createElement(
//         SVG,
//         props,
//         _react.default.createElement('path', {
//             d: 'M7 10l5 5 5-5z',
//         })
//     );
// };

// const Select = (0, _react.forwardRef)((props, ref) => {
//     return _react.default.createElement(
//         _styledComponents.Flex,
//         getMarginProps(props),
//         _react.default.createElement(_styledComponents.Box, {
//             ref,
//             as: 'select',
//             tx: 'forms',
//             variant: 'select',
//             ...omitMarginProps(props),
//             __css: {
//                 display: 'block',
//                 width: '100%',
//                 p: 2,
//                 appearance: 'none',
//                 fontSize: 'inherit',
//                 lineHeight: 'inherit',
//                 border: '1px solid',
//                 borderRadius: 'default',
//                 color: 'inherit',
//                 bg: 'transparent',
//             },
//         }),
//         _react.default.createElement(DownArrow, {
//             sx: {
//                 ml: -28,
//                 alignSelf: 'center',
//                 pointerEvents: 'none',
//             },
//         })
//     );
// });
// exports.Select = Select;
// const Textarea = (0, _react.forwardRef)((props, ref) => {
//     return _react.default.createElement(_styledComponents.Box, {
//         ref,
//         as: 'textarea',
//         tx: 'forms',
//         variant: 'textarea',
//         ...props,
//         __css: {
//             display: 'block',
//             width: '100%',
//             p: 2,
//             appearance: 'none',
//             fontSize: 'inherit',
//             lineHeight: 'inherit',
//             border: '1px solid',
//             borderRadius: 'default',
//             color: 'inherit',
//             bg: 'transparent',
//         },
//     });
// });
// exports.Textarea = Textarea;

// const RadioChecked = function RadioChecked(props) {
//     return _react.default.createElement(
//         SVG,
//         props,
//         _react.default.createElement('path', {
//             d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
//         })
//     );
// };

// const RadioUnchecked = function RadioUnchecked(props) {
//     return _react.default.createElement(
//         SVG,
//         props,
//         _react.default.createElement('path', {
//             d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
//         })
//     );
// };

// const RadioIcon = function RadioIcon(props) {
//     return _react.default.createElement(
//         _react.default.Fragment,
//         null,
//         _react.default.createElement(RadioChecked, {
//             ...props,
//             __css: {
//                 'display': 'none',
//                 'input:checked ~ &': {
//                     display: 'block',
//                 },
//             },
//         }),
//         _react.default.createElement(RadioUnchecked, {
//             ...props,
//             __css: {
//                 'display': 'block',
//                 'input:checked ~ &': {
//                     display: 'none',
//                 },
//             },
//         })
//     );
// };

// const Radio = (0, _react.forwardRef)((_ref2, ref) => {
//     const { className } = _ref2;
//     const { sx } = _ref2;
//     const _ref2$variant = _ref2.variant;
//     const variant = _ref2$variant === void 0 ? 'radio' : _ref2$variant;
//     const props = _objectWithoutProperties(_ref2, ['className', 'sx', 'variant']);

//     return _react.default.createElement(
//         _styledComponents.Box,
//         null,
//         _react.default.createElement(_styledComponents.Box, {
//             ref,
//             as: 'input',
//             type: 'radio',
//             ...props,
//             sx: {
//                 position: 'absolute',
//                 opacity: 0,
//                 zIndex: -1,
//                 width: 1,
//                 height: 1,
//                 overflow: 'hidden',
//             },
//         }),
//         _react.default.createElement(_styledComponents.Box, {
//             'as': RadioIcon,
//             'aria-hidden': 'true',
//             'tx': 'forms',
//             'variant': variant,
//             'className': className,
//             'sx': sx,
//             ...getSystemProps(props),
//             '__css': {
//                 'mr': 2,
//                 'borderRadius': 9999,
//                 'color': 'gray',
//                 'input:checked ~ &': {
//                     color: 'primary',
//                 },
//                 'input:focus ~ &': {
//                     bg: 'highlight',
//                 },
//             },
//         })
//     );
// });
// exports.Radio = Radio;

// const CheckboxChecked = function CheckboxChecked(props) {
//     return _react.default.createElement(
//         SVG,
//         props,
//         _react.default.createElement('path', {
//             d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
//         })
//     );
// };

// const CheckboxUnchecked = function CheckboxUnchecked(props) {
//     return _react.default.createElement(
//         SVG,
//         props,
//         _react.default.createElement('path', {
//             d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
//         })
//     );
// };

// const CheckboxIcon = function CheckboxIcon(props) {
//     return _react.default.createElement(
//         _react.default.Fragment,
//         null,
//         _react.default.createElement(CheckboxChecked, {
//             ...props,
//             __css: {
//                 'display': 'none',
//                 'input:checked ~ &': {
//                     display: 'block',
//                 },
//             },
//         }),
//         _react.default.createElement(CheckboxUnchecked, {
//             ...props,
//             __css: {
//                 'display': 'block',
//                 'input:checked ~ &': {
//                     display: 'none',
//                 },
//             },
//         })
//     );
// };

// const Checkbox = (0, _react.forwardRef)((_ref3, ref) => {
//     const { className } = _ref3;
//     const { sx } = _ref3;
//     const _ref3$variant = _ref3.variant;
//     const variant = _ref3$variant === void 0 ? 'checkbox' : _ref3$variant;
//     const props = _objectWithoutProperties(_ref3, ['className', 'sx', 'variant']);

//     return _react.default.createElement(
//         _styledComponents.Box,
//         null,
//         _react.default.createElement(_styledComponents.Box, {
//             ref,
//             as: 'input',
//             type: 'checkbox',
//             ...props,
//             sx: {
//                 position: 'absolute',
//                 opacity: 0,
//                 zIndex: -1,
//                 width: 1,
//                 height: 1,
//                 overflow: 'hidden',
//             },
//         }),
//         _react.default.createElement(_styledComponents.Box, {
//             'as': CheckboxIcon,
//             'aria-hidden': 'true',
//             'tx': 'forms',
//             'variant': variant,
//             'className': className,
//             'sx': sx,
//             ...getSystemProps(props),
//             '__css': {
//                 'mr': 2,
//                 'borderRadius': 4,
//                 'color': 'gray',
//                 'input:checked ~ &': {
//                     color: 'primary',
//                 },
//                 'input:focus ~ &': {
//                     color: 'primary',
//                     bg: 'highlight',
//                 },
//             },
//         })
//     );
// });
// exports.Checkbox = Checkbox;
// const Slider = (0, _react.forwardRef)((_ref4, ref) => {
//     const props = { ..._ref4 };

//     return _react.default.createElement(_styledComponents.Box, {
//         ref,
//         as: 'input',
//         type: 'range',
//         tx: 'forms',
//         variant: 'slider',
//         ...props,
//         __css: {
//             'display': 'block',
//             'width': '100%',
//             'height': 4,
//             'my': 2,
//             'cursor': 'pointer',
//             'appearance': 'none',
//             'borderRadius': 9999,
//             'color': 'inherit',
//             'bg': 'gray',
//             ':focus': {
//                 outline: 'none',
//                 color: 'primary',
//             },
//             '&::-webkit-slider-thumb': {
//                 appearance: 'none',
//                 width: 16,
//                 height: 16,
//                 bg: 'currentcolor',
//                 border: 0,
//                 borderRadius: 9999,
//                 variant: 'forms.slider.thumb',
//             },
//         },
//     });
// });
// exports.Slider = Slider;
// const Switch = (0, _react.forwardRef)((_ref5, ref) => {
//     const { checked } = _ref5;
//     const props = _objectWithoutProperties(_ref5, ['checked']);

//     return _react.default.createElement(
//         _styledComponents.Box,
//         {
//             'ref': ref,
//             'as': 'button',
//             'type': 'button',
//             'role': 'switch',
//             'tx': 'forms',
//             'variant': 'switch',
//             'aria-checked': checked,
//             ...props,
//             '__css': {
//                 'appearance': 'none',
//                 'm': 0,
//                 'p': 0,
//                 'width': 40,
//                 'height': 24,
//                 'color': 'primary',
//                 'bg': 'transparent',
//                 'border': '1px solid',
//                 'borderColor': 'primary',
//                 'borderRadius': 9999,
//                 '&[aria-checked=true]': {
//                     bg: 'primary',
//                 },
//                 ':focus': {
//                     outline: 'none',
//                     boxShadow: '0 0 0 2px',
//                 },
//             },
//         },
//         _react.default.createElement(_styledComponents.Box, {
//             'aria-hidden': true,
//             'style': {
//                 transform: checked ? 'translateX(16px)' : 'translateX(0)',
//             },
//             'sx': {
//                 mt: '-1px',
//                 ml: '-1px',
//                 width: 24,
//                 height: 24,
//                 borderRadius: 9999,
//                 border: '1px solid',
//                 borderColor: 'primary',
//                 bg: 'background',
//                 transitionProperty: 'transform',
//                 transitionTimingFunction: 'ease-out',
//                 transitionDuration: '0.1s',
//                 variant: 'forms.switch.thumb',
//             },
//         })
//     );
// });
// exports.Switch = Switch;
