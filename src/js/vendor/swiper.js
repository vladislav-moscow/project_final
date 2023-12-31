/* eslint-disable getter-return */
/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-invalid-this */
/* eslint-disable no-var */
/* eslint-disable max-len */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global = global || self, global.Swiper = factory());
}(this, function () {
  'use strict';
  const doc =
    typeof document === 'undefined'
      ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: { blur: function blur() {}, nodeName: '' },
        querySelector: function querySelector() {
          return null;
        },
        querySelectorAll: function querySelectorAll() {
          return [];
        },
        getElementById: function getElementById() {
          return null;
        },
        createEvent: function createEvent() {
          return { initEvent: function initEvent() {} };
        },
        createElement: function createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute() {},
            getElementsByTagName: function getElementsByTagName() {
              return [];
            },
          };
        },
        location: { hash: '' },
      }
      : document;
  const win =
    typeof window === 'undefined'
      ? {
        document: doc,
        navigator: { userAgent: '' },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
          return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
          return {
            getPropertyValue: function getPropertyValue() {
              return '';
            },
          };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
      }
      : window;
  const Dom7 = function Dom7(arr) {
    const self = this;
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    return this;
  };
  function $(selector, context) {
    const arr = [];
    let i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
      if (typeof selector === 'string') {
        let els;
        let tempParent;
        const html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) {
            toCreate = 'ul';
          }
          if (html.indexOf('<tr') === 0) {
            toCreate = 'tbody';
          }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
            toCreate = 'tr';
          }
          if (html.indexOf('<tbody') === 0) {
            toCreate = 'table';
          }
          if (html.indexOf('<option') === 0) {
            toCreate = 'select';
          }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }
  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;
  function unique(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.add(classes[i]);
        }
      }
    }
    return this;
  }
  function removeClass(className) {
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.remove(classes[i]);
        }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) {
      return false;
    }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    const classes = className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      for (let j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.toggle(classes[i]);
        }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    const arguments$1 = arguments;
    if (arguments.length === 1 && typeof attrs === 'string') {
      if (this[0]) {
        return this[0].getAttribute(attrs);
      }
      return undefined;
    }
    for (let i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (const attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    let el;
    if (typeof value === 'undefined') {
      el = this[0];
      if (el) {
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }
        const dataKey = el.getAttribute('data-' + key);
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }
    for (let i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) {
        el.dom7ElementDataStorage = {};
      }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  function transform(transform) {
    for (let i = 0; i < this.length; i += 1) {
      const elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration += 'ms';
    }
    for (let i = 0; i < this.length; i += 1) {
      const elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  function on() {
    let assign;
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    let eventType = args[0];
    let targetSelector = args[1];
    let listener = args[2];
    let capture = args[3];
    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }
    function handleLiveEvent(e) {
      const target = e.target;
      if (!target) {
        return;
      }
      const eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) {
        listener.apply(target, eventData);
      } else {
        const parents = $(target).parents();
        for (let k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) {
            listener.apply(parents[k], eventData);
          }
        }
      }
    }
    function handleEvent(e) {
      const eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          const event = events[j];
          if (!el.dom7Listeners) {
            el.dom7Listeners = {};
          }
          if (!el.dom7Listeners[event]) {
            el.dom7Listeners[event] = [];
          }
          el.dom7Listeners[event].push({ listener: listener, proxyListener: handleEvent });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events.length; j += 1) {
          const event$1 = events[j];
          if (!el.dom7LiveListeners) {
            el.dom7LiveListeners = {};
          }
          if (!el.dom7LiveListeners[event$1]) {
            el.dom7LiveListeners[event$1] = [];
          }
          el.dom7LiveListeners[event$1].push({ listener: listener, proxyListener: handleLiveEvent });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    let assign;
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    let eventType = args[0];
    let targetSelector = args[1];
    let listener = args[2];
    let capture = args[3];
    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }
    if (!capture) {
      capture = false;
    }
    const events = eventType.split(' ');
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers = void 0;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (
              listener &&
              handler.listener &&
              handler.listener.dom7proxy &&
              handler.listener.dom7proxy === listener
            ) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    const events = args[0].split(' ');
    const eventData = args[1];
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let evt = void 0;
        try {
          evt = new win.CustomEvent(event, { detail: eventData, bubbles: true, cancelable: true });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    const events = [ 'webkitTransitionEnd', 'transitionend' ];
    const dom = this;
    let i;
    function fireCallBack(e) {
      if (e.target !== this) {
        return;
      }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(styles.getPropertyValue('margin-right')) +
          parseFloat(styles.getPropertyValue('margin-left'))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(styles.getPropertyValue('margin-top')) +
          parseFloat(styles.getPropertyValue('margin-bottom'))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = doc.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === win ? win.scrollY : el.scrollTop;
      const scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return { top: box.top + scrollTop - clientTop, left: box.left + scrollLeft - clientLeft };
    }
    return null;
  }
  function styles() {
    if (this[0]) {
      return win.getComputedStyle(this[0], null);
    }
    return {};
  }
  function css(props, value) {
    let i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) {
          return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (const prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback) {
      return this;
    }
    for (let i = 0; i < this.length; i += 1) {
      if (callback.call(this[i], i, this[i]) === false) {
        return this;
      }
    }
    return this;
  }
  function filter(callback) {
    const matchedItems = [];
    const dom = this;
    for (let i = 0; i < dom.length; i += 1) {
      if (callback.call(dom[i], i, dom[i])) {
        matchedItems.push(dom[i]);
      }
    }
    return new Dom7(matchedItems);
  }
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') {
      return false;
    }
    if (typeof selector === 'string') {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      }
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    } else if (selector === doc) {
      return el === doc;
    } else if (selector === win) {
      return el === win;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }
      return false;
    }
    return false;
  }
  function index() {
    let child = this[0];
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) {
          i += 1;
        }
      }
      return i;
    }
    return undefined;
  }
  function eq(index) {
    if (typeof index === 'undefined') {
      return this;
    }
    const length = this.length;
    let returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) {
        return new Dom7([]);
      }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    let newChild;
    for (let k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (let i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    let i;
    let j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }
      if (this[0].nextElementSibling) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if ($(next).is(selector)) {
          nextEls.push(next);
        }
      } else {
        nextEls.push(next);
      }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      const el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }
      if (el.previousElementSibling) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) {
      return new Dom7([]);
    }
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if ($(prev).is(selector)) {
          prevEls.push(prev);
        }
      } else {
        prevEls.push(prev);
      }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    const parents = [];
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) {
            parents.push(this[i].parentNode);
          }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    const parents = [];
    for (let i = 0; i < this.length; i += 1) {
      let parent = this[i].parentNode;
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    let closest = this;
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    const foundElements = [];
    for (let i = 0; i < this.length; i += 1) {
      const found = this[i].querySelectorAll(selector);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    const children = [];
    for (let i = 0; i < this.length; i += 1) {
      const childNodes = this[i].childNodes;
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) {
            children.push(childNodes[j]);
          }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) {
        this[i].parentNode.removeChild(this[i]);
      }
    }
    return this;
  }
  function add() {
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    const dom = this;
    let i;
    let j;
    for (i = 0; i < args.length; i += 1) {
      const toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }
  const Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove,
    add: add,
    styles: styles,
  };
  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
  });
  var Utils = {
    deleteProps: function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) { /* Empty */ }
        try {
          delete object[key];
        } catch (e) { /* Empty */ }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = win.getComputedStyle(el, null);
      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform
            .split(', ')
            .map(function (a) {
              return a.replace(',', '.');
            })
            .join(', ');
        }
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix =
          curStyle.MozTransform ||
          curStyle.OTransform ||
          curStyle.MsTransform ||
          curStyle.msTransform ||
          curStyle.transform ||
          curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
      if (axis === 'x') {
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m41;
        } else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[12]);
        } else {
          curTransform = parseFloat(matrix[4]);
        }
      }
      if (axis === 'y') {
        if (win.WebKitCSSMatrix) {
          curTransform = transformMatrix.m42;
        } else if (matrix.length === 16) {
          curTransform = parseFloat(matrix[13]);
        } else {
          curTransform = parseFloat(matrix[5]);
        }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      const query = {};
      let urlToParse = url || win.location.href;
      let i;
      let params;
      let param;
      let length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) {
          return paramsPart !== '';
        });
        length = params.length;
        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] =
            typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      let args = [],
        len$1 = arguments.length;
      while (len$1--) {
        args[len$1] = arguments[len$1];
      }
      const to = Object(args[0]);
      for (let i = 1; i < args.length; i += 1) {
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          const keysArray = Object.keys(Object(nextSource));
          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };
  const Support = (function Support() {
    return {
      touch:
        win.Modernizr && win.Modernizr.touch === true ||
        (function checkTouch() {
          return !!(
            win.navigator.maxTouchPoints > 0 ||
            'ontouchstart' in win ||
            win.DocumentTouch && doc instanceof win.DocumentTouch
          );
        }()),
      pointerEvents: !!win.PointerEvent && 'maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0,
      observer: (function checkObserver() {
        return 'MutationObserver' in win || 'WebkitMutationObserver' in win;
      }()),
      passiveListener: (function checkPassiveListener() {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) { /* Empty */ }
        return supportsPassive;
      }()),
      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());
  const SwiperClass = function SwiperClass(params) {
    if (params === void 0) {
      params = {};
    }
    const self = this;
    self.params = params;
    self.eventsListeners = {};
    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };
  const staticAccessors = { components: { configurable: true } };
  SwiperClass.prototype.on = function on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') {
      return self;
    }
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) {
        self.eventsListeners[event] = [];
      }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };
  SwiperClass.prototype.once = function once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') {
      return self;
    }
    function onceHandler() {
      let args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
      handler.apply(self, args);
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };
  SwiperClass.prototype.off = function off(events, handler) {
    const self = this;
    if (!self.eventsListeners) {
      return self;
    }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.emit = function emit() {
    let args = [],
      len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }
    const self = this;
    if (!self.eventsListeners) {
      return self;
    }
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };
  SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      const module = instance.modules[moduleName];
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };
  SwiperClass.prototype.useModules = function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }
    const instance = this;
    if (!instance.modules) {
      return;
    }
    Object.keys(instance.modules).forEach(function (moduleName) {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };
  staticAccessors.components.set = function (components) {
    const Class = this;
    if (!Class.use) {
      return;
    }
    Class.use(components);
  };
  SwiperClass.installModule = function installModule(module) {
    let params = [],
      len = arguments.length - 1;
    while (len-- > 0) {
      params[len] = arguments[len + 1];
    }
    const Class = this;
    if (!Class.prototype.modules) {
      Class.prototype.modules = {};
    }
    const name = module.name || Object.keys(Class.prototype.modules).length + '_' + Utils.now();
    Class.prototype.modules[name] = module;
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };
  SwiperClass.use = function use(module) {
    let params = [],
      len = arguments.length - 1;
    while (len-- > 0) {
      params[len] = arguments[len + 1];
    }
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Class.installModule(m);
      });
      return Class;
    }
    return Class.installModule.apply(Class, [module].concat(params));
  };
  Object.defineProperties(SwiperClass, staticAccessors);
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
    Utils.extend(swiper, { width: width, height: height, size: swiper.isHorizontal() ? width : height });
  }
  function updateSlides() {
    const swiper = this;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const swiperSize = swiper.size;
    const rtl = swiper.rtlTranslate;
    const wrongRTL = swiper.wrongRTL;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children('.' + swiper.params.slideClass);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    function slidesForMargin(slideIndex) {
      if (!params.cssMode) {
        return true;
      }
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.snapGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl) {
      slides.css({ marginLeft: '', marginTop: '' });
    } else {
      slides.css({ marginRight: '', marginBottom: '' });
    }
    let slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }
    let slideSize;
    const slidesPerColumn = params.slidesPerColumn;
    const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      const slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        let newSlideOrderIndex = void 0;
        let column = void 0;
        let row = void 0;
        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          const columnsInGroup =
            groupIndex === 0
              ? params.slidesPerGroup
              : Math.min(
                Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn),
                params.slidesPerGroup,
              );
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
        } else if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;
          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.css(
          'margin-' + (swiper.isHorizontal() ? 'top' : 'left'),
          row !== 0 && params.spaceBetween && params.spaceBetween + 'px',
        );
      }
      if (slide.css('display') === 'none') {
        continue;
      }
      if (params.slidesPerView === 'auto') {
        const slideStyles = win.getComputedStyle(slide[0], null);
        const currentTransform = slide[0].style.transform;
        const currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          if (swiper.isHorizontal()) {
            const width = parseFloat(slideStyles.getPropertyValue('width'));
            const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            const boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            const height = parseFloat(slideStyles.getPropertyValue('height'));
            const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            const boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) {
          slideSize = Math.floor(slideSize);
        }
        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + 'px';
          } else {
            slides[i].style.height = slideSize + 'px';
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (i === 0) {
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        }
        if (Math.abs(slidePosition) < 1 / 1000) {
          slidePosition = 0;
        }
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) {
          slidePosition = Math.floor(slidePosition);
        }
        if (index % params.slidesPerGroup === 0) {
          snapGrid.push(slidePosition);
        }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    let newSlidesGrid;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });
    }
    if (params.setWrapperSize) {
      if (swiper.isHorizontal()) {
        $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });
      } else {
        $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + 'px' });
      }
    }
    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) {
        $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + 'px' });
      } else {
        $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + 'px' });
      }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (let i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          let slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) {
            slidesGridItem = Math.floor(slidesGridItem);
          }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
      }
    }
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (let i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        let slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) {
          slidesGridItem$1 = Math.floor(slidesGridItem$1);
        }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) {
      snapGrid = [0];
    }
    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) {
          slides.filter(slidesForMargin).css({ marginLeft: spaceBetween + 'px' });
        } else {
          slides.filter(slidesForMargin).css({ marginRight: spaceBetween + 'px' });
        }
      } else {
        slides.filter(slidesForMargin).css({ marginBottom: spaceBetween + 'px' });
      }
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) {
          return -offsetBefore;
        }
        if (snap > maxSnap) {
          return maxSnap + offsetAfter;
        }
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize$1 = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize$1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize$1 -= params.spaceBetween;
      if (allSlidesSize$1 < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length) {
          break;
        }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight) {
      swiper.$wrapperEl.css('height', newHeight + 'px');
    }
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const slides = swiper.slides;
    const rtl = swiper.rtlTranslate;
    if (slides.length === 0) {
      return;
    }
    if (typeof slides[0].swiperSlideOffset === 'undefined') {
      swiper.updateSlidesOffset();
    }
    let offsetCenter = -translate;
    if (rtl) {
      offsetCenter = translate;
    }
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      const slideProgress =
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) /
        (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible =
          slideBefore >= 0 && slideBefore < swiper.size - 1 ||
          slideAfter > 1 && slideAfter <= swiper.size ||
          slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }
  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let progress = swiper.progress;
    let isBeginning = swiper.isBeginning;
    let isEnd = swiper.isEnd;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, { progress: progress, isBeginning: isBeginning, isEnd: isEnd });
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesProgress(translate);
    }
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const slides = swiper.slides;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const activeIndex = swiper.activeIndex;
    const realIndex = swiper.realIndex;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(
      params.slideActiveClass +
        ' ' +
        params.slideNextClass +
        ' ' +
        params.slidePrevClass +
        ' ' +
        params.slideDuplicateActiveClass +
        ' ' +
        params.slideDuplicateNextClass +
        ' ' +
        params.slideDuplicatePrevClass,
    );
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find('.' + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            '.' +
              params.slideClass +
              ':not(.' +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              realIndex +
              '"]',
          )
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(
            '.' + params.slideClass + '.' + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]',
          )
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    let nextSlide = activeSlide
      .nextAll('.' + params.slideClass)
      .eq(0)
      .addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    let prevSlide = activeSlide
      .prevAll('.' + params.slideClass)
      .eq(0)
      .addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            '.' +
              params.slideClass +
              ':not(.' +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              nextSlide.attr('data-swiper-slide-index') +
              '"]',
          )
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(
            '.' +
              params.slideClass +
              '.' +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              nextSlide.attr('data-swiper-slide-index') +
              '"]',
          )
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            '.' +
              params.slideClass +
              ':not(.' +
              params.slideDuplicateClass +
              ')[data-swiper-slide-index="' +
              prevSlide.attr('data-swiper-slide-index') +
              '"]',
          )
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(
            '.' +
              params.slideClass +
              '.' +
              params.slideDuplicateClass +
              '[data-swiper-slide-index="' +
              prevSlide.attr('data-swiper-slide-index') +
              '"]',
          )
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const slidesGrid = swiper.slidesGrid;
    const snapGrid = swiper.snapGrid;
    const params = swiper.params;
    const previousIndex = swiper.activeIndex;
    const previousRealIndex = swiper.realIndex;
    const previousSnapIndex = swiper.snapIndex;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') {
          activeIndex = 0;
        }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }
  function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = $(e.target).closest('.' + params.slideClass)[0];
    let slideFound = false;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  const update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };
  function getTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }
    const swiper = this;
    const params = swiper.params;
    const rtl = swiper.rtlTranslate;
    const translate = swiper.translate;
    const $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) {
      currentTranslate = -currentTranslate;
    }
    return currentTranslate || 0;
  }
  function setTranslate(translate, byController) {
    const swiper = this;
    const rtl = swiper.rtlTranslate;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const wrapperEl = swiper.wrapperEl;
    const progress = swiper.progress;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    let obj;
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const params = swiper.params;
    const wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) {
      newTranslate = minTranslate;
    } else if (translateBounds && translate < maxTranslate) {
      newTranslate = maxTranslate;
    } else {
      newTranslate = translate;
    }
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -newTranslate, obj.behavior = 'smooth', obj));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  const translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo,
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit('setTransition', duration, byController);
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    const params = swiper.params;
    const previousIndex = swiper.previousIndex;
    if (params.cssMode) {
      return;
    }
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = 'next';
      } else if (activeIndex < previousIndex) {
        dir = 'prev';
      } else {
        dir = 'reset';
      }
    }
    swiper.emit('transitionStart');
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }
  function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    const previousIndex = swiper.previousIndex;
    const params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) {
      return;
    }
    swiper.setTransition(0);
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) {
        dir = 'next';
      } else if (activeIndex < previousIndex) {
        dir = 'prev';
      } else {
        dir = 'reset';
      }
    }
    swiper.emit('transitionEnd');
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }
  const transition$1 = { setTransition: setTransition, transitionStart: transitionStart, transitionEnd: transitionEnd$1 };
  function slideTo(index, speed, runCallbacks, internal) {
    let obj;
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    const params = swiper.params;
    const snapGrid = swiper.snapGrid;
    const slidesGrid = swiper.slidesGrid;
    const previousIndex = swiper.previousIndex;
    const activeIndex = swiper.activeIndex;
    const rtl = swiper.rtlTranslate;
    const wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    let snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) {
      snapIndex = snapGrid.length - 1;
    }
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }
    const translate = -snapGrid[snapIndex];
    swiper.updateProgress(translate);
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    let direction;
    if (slideIndex > activeIndex) {
      direction = 'next';
    } else if (slideIndex < activeIndex) {
      direction = 'prev';
    } else {
      direction = 'reset';
    }
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
      } else {
        if (wrapperEl.scrollTo) {
          wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -translate, obj.behavior = 'smooth', obj));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const params = swiper.params;
    const animating = swiper.animating;
    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const params = swiper.params;
    const animating = swiper.animating;
    const snapGrid = swiper.snapGrid;
    const slidesGrid = swiper.slidesGrid;
    const rtlTranslate = swiper.rtlTranslate;
    if (params.loop) {
      if (animating) {
        return false;
      }
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) {
        return -Math.floor(Math.abs(val));
      }
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    const normalizedSlidesGrid = slidesGrid.map(function (val) {
      return normalize(val);
    });
    const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) {
          prevSnap = snap;
        }
      });
    }
    let prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) {
        prevIndex = swiper.activeIndex - 1;
      }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap$1 = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap$1 - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.snapGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating) {
        return;
      }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(
              '.' +
                params.slideClass +
                '[data-swiper-slide-index="' +
                realIndex +
                '"]:not(.' +
                params.slideDuplicateClass +
                ')',
            )
            .eq(0)
            .index();
          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(
            '.' +
              params.slideClass +
              '[data-swiper-slide-index="' +
              realIndex +
              '"]:not(.' +
              params.slideDuplicateClass +
              ')',
          )
          .eq(0)
          .index();
        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  const slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };
  function loopCreate() {
    const swiper = this;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    $wrapperEl.children('.' + params.slideClass + '.' + params.slideDuplicateClass).remove();
    let slides = $wrapperEl.children('.' + params.slideClass);
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i = 0; i < blankSlidesNum; i += 1) {
          const blankNode = $(doc.createElement('div')).addClass(params.slideClass + ' ' + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children('.' + params.slideClass);
      }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) {
      params.loopedSlides = slides.length;
    }
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
    const prependSlides = [];
    const appendSlides = [];
    slides.each(function (index, el) {
      const slide = $(el);
      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }
      slide.attr('data-swiper-slide-index', index);
    });
    for (let i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (let i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }
  function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const activeIndex = swiper.activeIndex;
    const slides = swiper.slides;
    const loopedSlides = swiper.loopedSlides;
    const allowSlidePrev = swiper.allowSlidePrev;
    const allowSlideNext = swiper.allowSlideNext;
    const snapGrid = swiper.snapGrid;
    const rtl = swiper.rtlTranslate;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
  }
  function loopDestroy() {
    const swiper = this;
    const $wrapperEl = swiper.$wrapperEl;
    const params = swiper.params;
    const slides = swiper.slides;
    $wrapperEl
      .children(
        '.' +
          params.slideClass +
          '.' +
          params.slideDuplicateClass +
          ',.' +
          params.slideClass +
          '.' +
          params.slideBlankClass,
      )
      .remove();
    slides.removeAttr('data-swiper-slide-index');
  }
  const loop = { loopCreate: loopCreate, loopFix: loopFix, loopDestroy: loopDestroy };
  function setGrabCursor(moving) {
    const swiper = this;
    if (
      Support.touch ||
      !swiper.params.simulateTouch ||
      swiper.params.watchOverflow && swiper.isLocked ||
      swiper.params.cssMode
    ) {
      return;
    }
    const el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper.el.style.cursor = '';
  }
  const grabCursor = { setGrabCursor: setGrabCursor, unsetGrabCursor: unsetGrabCursor };
  function appendSlide(slides) {
    const swiper = this;
    const $wrapperEl = swiper.$wrapperEl;
    const params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.append(slides[i]);
        }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const activeIndex = swiper.activeIndex;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) {
          $wrapperEl.prepend(slides[i]);
        }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper = this;
    const $wrapperEl = swiper.$wrapperEl;
    const params = swiper.params;
    const activeIndex = swiper.activeIndex;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children('.' + params.slideClass);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) {
          $wrapperEl.append(slides[i$1]);
        }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (let i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const params = swiper.params;
    const $wrapperEl = swiper.$wrapperEl;
    const activeIndex = swiper.activeIndex;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children('.' + params.slideClass);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) {
          swiper.slides.eq(indexToRemove).remove();
        }
        if (indexToRemove < newActiveIndex) {
          newActiveIndex -= 1;
        }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) {
        swiper.slides.eq(indexToRemove).remove();
      }
      if (indexToRemove < newActiveIndex) {
        newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  const manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };
  const Device = (function Device() {
    const platform = win.navigator.platform;
    const ua = win.navigator.userAgent;
    const device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      iphone: false,
      ipod: false,
      ipad: false,
      edge: false,
      ie: false,
      firefox: false,
      macos: false,
      windows: false,
      cordova: !!(win.cordova || win.phonegap),
      phonegap: !!(win.cordova || win.phonegap),
      electron: false,
    };
    const screenWidth = win.screen.width;
    const screenHeight = win.screen.height;
    const android = ua.match(/(?<temp2>Android);?[\s/]+(?<temp1>[\d.]+)?/);
    let ipad = ua.match(/(?:iPad).*OS\s(?<temp1>[\d_]+)/);
    const ipod = ua.match(/(?:iPod)(?:.*OS\s(?<temp1>[\d_]+))?/);
    const iphone = !ipad && ua.match(/(?:iPhone\sOS|iOS)\s(?<temp1>[\d_]+)/);
    const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
    const edge = ua.indexOf('Edge/') >= 0;
    const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
    const windows = platform === 'Win32';
    const electron = ua.toLowerCase().indexOf('electron') >= 0;
    let macos = platform === 'MacIntel';
    if (
      !ipad &&
      macos &&
      Support.touch &&
      (screenWidth === 1024 && screenHeight === 1366 ||
        screenWidth === 834 && screenHeight === 1194 ||
        screenWidth === 834 && screenHeight === 1112 ||
        screenWidth === 768 && screenHeight === 1024)
    ) {
      ipad = ua.match(/(?<temp1>Version)\/(?:[\d.]+)/);
      macos = false;
    }
    device.ie = ie;
    device.edge = edge;
    device.firefox = firefox;
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.ipod = true;
    }
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }
    device.webView =
      !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)) ||
      win.matchMedia && win.matchMedia('(display-mode: standalone)').matches;
    device.webview = device.webView;
    device.standalone = device.webView;
    device.desktop = !(device.ios || device.android) || electron;
    if (device.desktop) {
      device.electron = electron;
      device.macos = macos;
      device.windows = windows;
      if (device.macos) {
        device.os = 'macos';
      }
      if (device.windows) {
        device.os = 'windows';
      }
    }
    device.pixelRatio = win.devicePixelRatio || 1;
    return device;
  }());
  function onTouchStart(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const params = swiper.params;
    const touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    let e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    const $targetEl = $(e.target);
    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) {
        return;
      }
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) {
      return;
    }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) {
      return;
    }
    if (data.isTouched && data.isMoved) {
      return;
    }
    if (
      params.noSwiping &&
      $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : '.' + params.noSwipingClass)[0]
    ) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) {
        return;
      }
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= win.screen.width - edgeSwipeThreshold)) {
      return;
    }
    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) {
      data.allowThresholdMove = false;
    }
    if (e.type !== 'touchstart') {
      let preventDefault = true;
      if ($targetEl.is(data.formElements)) {
        preventDefault = false;
      }
      if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== $targetEl[0]) {
        doc.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }
  function onTouchMove(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const params = swiper.params;
    const touches = swiper.touches;
    const rtl = swiper.rtlTranslate;
    let e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') {
      return;
    }
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, { startX: pageX, startY: pageY, currentX: pageX, currentY: pageY });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (
          pageY < touches.startY && swiper.translate <= swiper.maxTranslate() ||
          pageY > touches.startY && swiper.translate >= swiper.minTranslate()
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        pageX < touches.startX && swiper.translate <= swiper.maxTranslate() ||
        pageX > touches.startX && swiper.translate >= swiper.minTranslate()
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) {
      return;
    }
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) {
      return;
    }
    if (typeof data.isScrolling === 'undefined') {
      let touchAngle;
      if (
        swiper.isHorizontal() && touches.currentY === touches.startY ||
        swiper.isVertical() && touches.currentX === touches.startX
      ) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
    }
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate =
          swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) {
      return;
    }
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({ position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'], time: Utils.now() });
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const params = swiper.params;
    const touches = swiper.touches;
    const rtl = swiper.rtlTranslate;
    const $wrapperEl = swiper.$wrapperEl;
    const slidesGrid = swiper.slidesGrid;
    const snapGrid = swiper.snapGrid;
    let e = event;
    if (e.originalEvent) {
      e = e.originalEvent;
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = Utils.now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) {
        swiper.allowClick = true;
      }
    });
    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      touches.diff === 0 ||
      data.currentTranslate === data.startTranslate
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1000 * params.freeModeMomentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) {
          newPosition = -newPosition;
        }
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) {
            needsLoopFix = true;
          }
        } else if (params.freeModeSticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (
            Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === 'next'
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeModeSticky) {
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
              return;
            }
            swiper.emit('momentumBounce');
            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) {
                return;
              }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget =
        swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(stopIndex + params.slidesPerGroup);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const params = swiper.params;
    const el = swiper.el;
    if (el && el.offsetWidth === 0) {
      return;
    }
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const allowSlideNext = swiper.allowSlideNext;
    const allowSlidePrev = swiper.allowSlidePrev;
    const snapGrid = swiper.snapGrid;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if (
      (params.slidesPerView === 'auto' || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.params.centeredSlides
    ) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) {
        e.preventDefault();
      }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const wrapperEl = swiper.wrapperEl;
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop;
    if (swiper.translate === -0) {
      swiper.translate = 0;
    }
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
  }
  let dummyEventAttached = false;
  function dummyEventListener() {}
  function attachEvents() {
    const swiper = this;
    const params = swiper.params;
    const touchEvents = swiper.touchEvents;
    const el = swiper.el;
    const wrapperEl = swiper.wrapperEl;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    const capture = !!params.nested;
    if (!Support.touch && Support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener =
          touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners
            ? { passive: true, capture: false }
            : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(
          touchEvents.move,
          swiper.onTouchMove,
          Support.passiveListener ? { passive: false, capture: capture } : capture,
        );
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (!dummyEventAttached) {
          doc.addEventListener('touchstart', dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if (
        params.simulateTouch && !Device.ios && !Device.android ||
        params.simulateTouch && !Support.touch && Device.ios
      ) {
        el.addEventListener('mousedown', swiper.onTouchStart, false);
        doc.addEventListener('mousemove', swiper.onTouchMove, capture);
        doc.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener('scroll', swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper.on(
        Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
        onResize,
        true,
      );
    } else {
      swiper.on('observerUpdate', onResize, true);
    }
  }
  function detachEvents() {
    const swiper = this;
    const params = swiper.params;
    const touchEvents = swiper.touchEvents;
    const el = swiper.el;
    const wrapperEl = swiper.wrapperEl;
    const capture = !!params.nested;
    if (!Support.touch && Support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener =
          touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners
            ? { passive: true, capture: false }
            : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if (
        params.simulateTouch && !Device.ios && !Device.android ||
        params.simulateTouch && !Support.touch && Device.ios
      ) {
        el.removeEventListener('mousedown', swiper.onTouchStart, false);
        doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
        doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.removeEventListener('scroll', swiper.onScroll);
    }
    swiper.off(
      Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
      onResize,
    );
  }
  const events = { attachEvents: attachEvents, detachEvents: detachEvents };
  function setBreakpoint() {
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    const initialized = swiper.initialized;
    let loopedSlides = swiper.loopedSlides;
    if (loopedSlides === void 0) {
      loopedSlides = 0;
    }
    const params = swiper.params;
    const $el = swiper.$el;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) {
      return;
    }
    const breakpoint = swiper.getBreakpoint(breakpoints);
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        [ 'slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerColumn' ].forEach(function (param) {
          const paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') {
            return;
          }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = params.slidesPerColumn > 1;
      const isMultiRow = breakpointParams.slidesPerColumn > 1;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + 'multirow ' + params.containerModifierClass + 'multirow-column');
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + 'multirow');
        if (breakpointParams.slidesPerColumnFill === 'column') {
          $el.addClass(params.containerModifierClass + 'multirow-column');
        }
      }
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
      Utils.extend(swiper.params, breakpointParams);
      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });
      swiper.currentBreakpoint = breakpoint;
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }
      swiper.emit('breakpoint', breakpointParams);
    }
  }
  function getBreakpoint(breakpoints) {
    if (!breakpoints) {
      return undefined;
    }
    let breakpoint = false;
    const points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) {
      return parseInt(a, 10) - parseInt(b, 10);
    });
    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      if (point <= win.innerWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }
  const breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };
  function addClasses() {
    const swiper = this;
    const classNames = swiper.classNames;
    const params = swiper.params;
    const rtl = swiper.rtl;
    const $el = swiper.$el;
    const suffixes = [];
    suffixes.push('initialized');
    suffixes.push(params.direction);
    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
      if (params.slidesPerColumnFill === 'column') {
        suffixes.push('multirow-column');
      }
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    if (params.cssMode) {
      suffixes.push('css-mode');
    }
    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });
    $el.addClass(classNames.join(' '));
  }
  function removeClasses() {
    const swiper = this;
    const $el = swiper.$el;
    const classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
  }
  const classes = { addClasses: addClasses, removeClasses: removeClasses };
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    let image;
    function onReady() {
      if (callback) {
        callback();
      }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }
  function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
        return;
      }
      if (swiper.imagesLoaded !== undefined) {
        swiper.imagesLoaded += 1;
      }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) {
          swiper.update();
        }
        swiper.emit('imagesReady');
      }
    }
    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
      const imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady,
      );
    }
  }
  const images = { loadImage: loadImage, preloadImages: preloadImages };
  function checkOverflow() {
    const swiper = this;
    const params = swiper.params;
    const wasLocked = swiper.isLocked;
    const lastSlidePosition =
      swiper.slides.length > 0 &&
      params.slidesOffsetBefore +
        params.spaceBetween * (swiper.slides.length - 1) +
        swiper.slides[0].offsetWidth * swiper.slides.length;
    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }
  const checkOverflow$1 = { checkOverflow: checkOverflow };
  const defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    preventInteractionOnTransition: false,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: 'slide',
    breakpoints: undefined,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: false,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: true,
    containerModifierClass: 'swiper-container-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: true,
  };
  const prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };
  const extendedDefaults = {};
  const Swiper = (function (SwiperClass) {
    function Swiper() {
      let assign;
      let args = [],
        len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }
      let el;
      let params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        assign = args, el = assign[0], params = assign[1];
      }
      if (!params) {
        params = {};
      }
      params = Utils.extend({}, params);
      if (el && !params.el) {
        params.el = el;
      }
      SwiperClass.call(this, params);
      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });
      const swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        const module = swiper.modules[moduleName];
        if (module.params) {
          const moduleParamName = Object.keys(module.params)[0];
          const moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) {
            return;
          }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            return;
          }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) {
            params[moduleParamName] = { enabled: false };
          }
        }
      });
      const swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);
      swiper.$ = $;
      const $el = $(swiper.params.el);
      el = $el[0];
      if (!el) {
        return undefined;
      }
      if ($el.length > 1) {
        const swipers = [];
        $el.each(function (index, containerEl) {
          const newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      el.swiper = swiper;
      $el.data('swiper', swiper);
      let $wrapperEl;
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(el.shadowRoot.querySelector('.' + swiper.params.wrapperClass));
        $wrapperEl.children = function (options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children('.' + swiper.params.wrapperClass);
      }
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        classNames: [],
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate:
          swiper.params.direction === 'horizontal' &&
          (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: (function touchEvents() {
          const touch = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel' ];
          let desktop = [ 'mousedown', 'mousemove', 'mouseup' ];
          if (Support.pointerEvents) {
            desktop = [ 'pointerdown', 'pointermove', 'pointerup' ];
          }
          swiper.touchEventsTouch = { start: touch[0], move: touch[1], end: touch[2], cancel: touch[3] };
          swiper.touchEventsDesktop = { start: desktop[0], move: desktop[1], end: desktop[2] };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          formElements: 'input, select, option, textarea, button, video',
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      });
      swiper.useModules();
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    if (SwiperClass) {
      Swiper.__proto__ = SwiperClass;
    }
    Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
    Swiper.prototype.constructor = Swiper;
    const staticAccessors = {
      extendedDefaults: { configurable: true },
      defaults: { configurable: true },
      Class: { configurable: true },
      $: { configurable: true },
    };
    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
      const swiper = this;
      const params = swiper.params;
      const slides = swiper.slides;
      const slidesGrid = swiper.slidesGrid;
      const swiperSize = swiper.size;
      const activeIndex = swiper.activeIndex;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
        for (let i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) {
              breakLoop = true;
            }
          }
        }
      } else {
        for (let i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };
    Swiper.prototype.update = function update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) {
        return;
      }
      const snapGrid = swiper.snapGrid;
      const params = swiper.params;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) &&
          swiper.isEnd &&
          !swiper.params.centeredSlides
        ) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };
    Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }
      swiper.$el
        .removeClass('' + swiper.params.containerModifierClass + currentDirection)
        .addClass('' + swiper.params.containerModifierClass + newDirection);
      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');
      if (needUpdate) {
        swiper.update();
      }
      return swiper;
    };
    Swiper.prototype.init = function init() {
      const swiper = this;
      if (swiper.initialized) {
        return;
      }
      swiper.emit('beforeInit');
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit('init');
    };
    Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const params = swiper.params;
      const $el = swiper.$el;
      const $wrapperEl = swiper.$wrapperEl;
      const slides = swiper.slides;
      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }
      swiper.emit('beforeDestroy');
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass(
              [ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(
                ' ',
              ),
            )
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index');
        }
      }
      swiper.emit('destroy');
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    };
    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };
    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };
    staticAccessors.defaults.get = function () {
      return defaults;
    };
    staticAccessors.Class.get = function () {
      return SwiperClass;
    };
    staticAccessors.$.get = function () {
      return $;
    };
    Object.defineProperties(Swiper, staticAccessors);
    return Swiper;
  }(SwiperClass));
  const Device$1 = { name: 'device', proto: { device: Device }, static: { device: Device } };
  const Support$1 = { name: 'support', proto: { support: Support }, static: { support: Support } };
  const Browser = (function Browser() {
    function isSafari() {
      const ua = win.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(?<temp1>iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());
  const Browser$1 = { name: 'browser', proto: { browser: Browser }, static: { browser: Browser } };
  const Resize = {
    name: 'resize',
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) {
              return;
            }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        win.addEventListener('resize', swiper.resize.resizeHandler);
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        const swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };
  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }
      const swiper = this;
      const ObserverFunc = Observer.func;
      const observer = new ObserverFunc(function (mutations) {
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };
        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });
      swiper.observer.observers.push(observer);
    },
    init: function init() {
      const swiper = this;
      if (!Support.observer || !swiper.params.observer) {
        return;
      }
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      const swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };
  const Observer$1 = {
    name: 'observer',
    params: { observer: false, observeParents: false, observeSlideChildren: false },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        const swiper = this;
        swiper.observer.destroy();
      },
    },
  };
  const Virtual = {
    update: function update(force) {
      const swiper = this;
      const ref = swiper.params;
      const slidesPerView = ref.slidesPerView;
      const slidesPerGroup = ref.slidesPerGroup;
      const centeredSlides = ref.centeredSlides;
      const ref$1 = swiper.params.virtual;
      const addSlidesBefore = ref$1.addSlidesBefore;
      const addSlidesAfter = ref$1.addSlidesAfter;
      const ref$2 = swiper.virtual;
      const previousFrom = ref$2.from;
      const previousTo = ref$2.to;
      const slides = ref$2.slides;
      const previousSlidesGrid = ref$2.slidesGrid;
      const renderSlide = ref$2.renderSlide;
      const previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      const activeIndex = swiper.activeIndex || 0;
      let offsetProp;
      if (swiper.rtlTranslate) {
        offsetProp = 'right';
      } else {
        offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      }
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      const from = Math.max((activeIndex || 0) - slidesBefore, 0);
      const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      Utils.extend(swiper.virtual, { from: from, to: to, offset: offset, slidesGrid: swiper.slidesGrid });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, offset + 'px');
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find('.' + swiper.params.slideClass).remove();
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + i + '"]').remove();
          }
        }
      }
      for (let i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) {
              appendIndexes.push(i$1);
            }
            if (i$1 < previousFrom) {
              prependIndexes.push(i$1);
            }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes
        .sort(function (a, b) {
          return b - a;
        })
        .forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + 'px');
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      const swiper = this;
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      const $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $('<div class="' + swiper.params.slideClass + '" data-swiper-slide-index="' + index + '">' + slide + '</div>');
      if (!$slideEl.attr('data-swiper-slide-index')) {
        $slideEl.attr('data-swiper-slide-index', index);
      }
      if (params.cache) {
        swiper.virtual.cache[index] = $slideEl;
      }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      const swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.push(slides[i]);
          }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      const swiper = this;
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            swiper.virtual.slides.unshift(slides[i]);
          }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          const $cachedEl = cache[cachedIndex];
          const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
          if (cachedElIndex) {
            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      const swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
        return;
      }
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) {
            activeIndex -= 1;
          }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) {
          activeIndex -= 1;
        }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      const swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };
  const Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + 'virtual');
        const overwriteParams = { watchSlidesProgress: true };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (!swiper.params.virtual.enabled) {
          return;
        }
        swiper.virtual.update();
      },
    },
  };
  const Keyboard = {
    handle: function handle(event) {
      const swiper = this;
      const rtl = swiper.rtlTranslate;
      let e = event;
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      const kc = e.keyCode || e.charCode;
      if (
        !swiper.allowSlideNext &&
        (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40 || kc === 34)
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38 || kc === 33)
      ) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (
        doc.activeElement &&
        doc.activeElement.nodeName &&
        (doc.activeElement.nodeName.toLowerCase() === 'input' ||
          doc.activeElement.nodeName.toLowerCase() === 'textarea')
      ) {
        return undefined;
      }
      if (
        swiper.params.keyboard.onlyInViewport &&
        (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)
      ) {
        let inView = false;
        if (
          swiper.$el.parents('.' + swiper.params.slideClass).length > 0 &&
          swiper.$el.parents('.' + swiper.params.slideActiveClass).length === 0
        ) {
          return undefined;
        }
        const windowWidth = win.innerWidth;
        const windowHeight = win.innerHeight;
        const swiperOffset = swiper.$el.offset();
        if (rtl) {
          swiperOffset.left -= swiper.$el[0].scrollLeft;
        }
        const swiperCoord = [
          [ swiperOffset.left, swiperOffset.top ],
          [ swiperOffset.left + swiper.width, swiperOffset.top ],
          [ swiperOffset.left, swiperOffset.top + swiper.height ],
          [ swiperOffset.left + swiper.width, swiperOffset.top + swiper.height ],
        ];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            inView = true;
          }
        }
        if (!inView) {
          return undefined;
        }
      }
      if (swiper.isHorizontal()) {
        if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if ((kc === 34 || kc === 39) && !rtl || (kc === 33 || kc === 37) && rtl) {
          swiper.slideNext();
        }
        if ((kc === 33 || kc === 37) && !rtl || (kc === 34 || kc === 39) && rtl) {
          swiper.slidePrev();
        }
      } else {
        if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
        }
        if (kc === 34 || kc === 40) {
          swiper.slideNext();
        }
        if (kc === 33 || kc === 38) {
          swiper.slidePrev();
        }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        return;
      }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      const swiper = this;
      if (!swiper.keyboard.enabled) {
        return;
      }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };
  const Keyboard$1 = {
    name: 'keyboard',
    params: { keyboard: { enabled: false, onlyInViewport: true } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };
  function isEventSupported() {
    const eventName = 'onwheel';
    let isSupported = eventName in doc;
    if (!isSupported) {
      const element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (
      !isSupported &&
      doc.implementation &&
      doc.implementation.hasFeature &&
      doc.implementation.hasFeature('', '') !== true
    ) {
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) {
        return 'DOMMouseScroll';
      }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize: function normalize(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return { spinX: sX, spinY: sY, pixelX: pX, pixelY: pY };
    },
    handleMouseEnter: function handleMouseEnter() {
      const swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      const swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      let e = event;
      const swiper = this;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      if (!swiper.mouseEntered && !params.releaseOnEdges) {
        return true;
      }
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = Mousewheel.normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
            delta = data.pixelX * rtlFactor;
          } else {
            return true;
          }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
          delta = data.pixelY;
        } else {
          return true;
        }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) {
        return true;
      }
      if (params.invert) {
        delta = -delta;
      }
      if (!swiper.params.freeMode) {
        const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta), raw: event };
        const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) {
            swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          swiper.mousewheel.animateSlider(newEvent);
        }
        if (swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent$1 = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
        const ref = swiper.mousewheel;
        const lastEventBeforeSnap = ref.lastEventBeforeSnap;
        const ignoreWheelEvents =
          lastEventBeforeSnap &&
          newEvent$1.time < lastEventBeforeSnap.time + 500 &&
          newEvent$1.delta <= lastEventBeforeSnap.delta &&
          newEvent$1.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;
          if (swiper.params.loop) {
            swiper.loopFix();
          }
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) {
            position = swiper.minTranslate();
          }
          if (position <= swiper.maxTranslate()) {
            position = swiper.maxTranslate();
          }
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.freeModeSticky) {
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            const recentWheelEvents$1 = swiper.mousewheel.recentWheelEvents;
            if (recentWheelEvents$1.length >= 15) {
              recentWheelEvents$1.shift();
            }
            const prevEvent$1 = recentWheelEvents$1.length
              ? recentWheelEvents$1[recentWheelEvents$1.length - 1]
              : undefined;
            const firstEvent = recentWheelEvents$1[0];
            recentWheelEvents$1.push(newEvent$1);
            if (
              prevEvent$1 &&
              (newEvent$1.delta > prevEvent$1.delta || newEvent$1.direction !== prevEvent$1.direction)
            ) {
              recentWheelEvents$1.splice(0);
            } else if (
              recentWheelEvents$1.length >= 15 &&
              newEvent$1.time - firstEvent.time < 500 &&
              firstEvent.delta - newEvent$1.delta >= 1 &&
              newEvent$1.delta <= 6
            ) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
              recentWheelEvents$1.splice(0);
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0);
            }
            if (!swiper.mousewheel.timeout) {
              swiper.mousewheel.timeout = Utils.nextTick(function () {
                const snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                recentWheelEvents$1.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents) {
            swiper.emit('scroll', e);
          }
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
            swiper.autoplay.stop();
          }
          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
            return true;
          }
        }
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return false;
    },
    animateSlider: function animateSlider(newEvent) {
      const swiper = this;
      if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          swiper.emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        swiper.emit('scroll', newEvent.raw);
      }
      swiper.mousewheel.lastScrollTime = new win.Date().getTime();
      return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
      const swiper = this;
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    },
    enable: function enable() {
      const swiper = this;
      const event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) {
        return false;
      }
      if (swiper.mousewheel.enabled) {
        return false;
      }
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      const swiper = this;
      const event = Mousewheel.event();
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }
      if (!event) {
        return false;
      }
      if (!swiper.mousewheel.enabled) {
        return false;
      }
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };
  const Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          animateSlider: Mousewheel.animateSlider.bind(swiper),
          releaseScroll: Mousewheel.releaseScroll.bind(swiper),
          lastScrollTime: Utils.now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }
        if (swiper.params.mousewheel.enabled) {
          swiper.mousewheel.enable();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }
        if (swiper.mousewheel.enabled) {
          swiper.mousewheel.disable();
        }
      },
    },
  };
  const Navigation = {
    update: function update() {
      const swiper = this;
      const params = swiper.params.navigation;
      if (swiper.params.loop) {
        return;
      }
      const ref = swiper.navigation;
      const $nextEl = ref.$nextEl;
      const $prevEl = ref.$prevEl;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      const swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) {
        return;
      }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      const swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) {
        return;
      }
      swiper.slideNext();
    },
    init: function init() {
      const swiper = this;
      const params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) {
        return;
      }
      let $nextEl;
      let $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.nextEl === 'string' &&
          $nextEl.length > 1 &&
          swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements &&
          typeof params.prevEl === 'string' &&
          $prevEl.length > 1 &&
          swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }
      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      const swiper = this;
      const ref = swiper.navigation;
      const $nextEl = ref.$nextEl;
      const $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };
  const Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        const swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        const swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        const swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        const swiper = this;
        const ref = swiper.navigation;
        const $nextEl = ref.$nextEl;
        const $prevEl = ref.$prevEl;
        if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
          let isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };
  const Pagination = {
    update: function update() {
      const swiper = this;
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let current;
      const total = swiper.params.loop
        ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
        : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) {
          current -= total;
        }
        if (current < 0 && swiper.params.paginationType !== 'bullets') {
          current = total + current;
        }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(
            swiper.isHorizontal() ? 'width' : 'height',
            swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + 'px',
          );
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(
          params.bulletActiveClass +
            ' ' +
            params.bulletActiveClass +
            '-next ' +
            params.bulletActiveClass +
            '-next-next ' +
            params.bulletActiveClass +
            '-prev ' +
            params.bulletActiveClass +
            '-prev-prev ' +
            params.bulletActiveClass +
            '-main',
        );
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            const $bullet = $(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + '-main');
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(params.bulletActiveClass + '-prev')
                  .prev()
                  .addClass(params.bulletActiveClass + '-prev-prev');
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(params.bulletActiveClass + '-next')
                  .next()
                  .addClass(params.bulletActiveClass + '-next-next');
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + '-main');
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (let i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                  bullets.eq(bullets.length - i$1).addClass(params.bulletActiveClass + '-main');
                }
                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + '-prev');
              } else {
                $firstDisplayedBullet
                  .prev()
                  .addClass(params.bulletActiveClass + '-prev')
                  .prev()
                  .addClass(params.bulletActiveClass + '-prev-prev');
                $lastDisplayedBullet
                  .next()
                  .addClass(params.bulletActiveClass + '-next')
                  .next()
                  .addClass(params.bulletActiveClass + '-next-next');
              }
            } else {
              $firstDisplayedBullet
                .prev()
                .addClass(params.bulletActiveClass + '-prev')
                .prev()
                .addClass(params.bulletActiveClass + '-prev-prev');
              $lastDisplayedBullet
                .next()
                .addClass(params.bulletActiveClass + '-next')
                .next()
                .addClass(params.bulletActiveClass + '-next-next');
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset =
            (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 -
            midIndex * swiper.pagination.bulletSize;
          const offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + 'px');
        }
      }
      if (params.type === 'fraction') {
        $el.find('.' + params.currentClass).text(params.formatFractionCurrent(current + 1));
        $el.find('.' + params.totalClass).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el
          .find('.' + params.progressbarFillClass)
          .transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')')
          .transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let paginationHTML = '';
      if (params.type === 'bullets') {
        const numberOfBullets = swiper.params.loop
          ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
          : swiper.snapGrid.length;
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML +=
              '<' + params.bulletElement + ' class="' + params.bulletClass + '"></' + params.bulletElement + '>';
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find('.' + params.bulletClass);
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML =
            '0<span class="' + params.currentClass + '"></span> / 0<span class="' + params.totalClass + '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = '<span class="' + params.progressbarFillClass + '"></span>';
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el) {
        return;
      }
      let $el = $(params.el);
      if ($el.length === 0) {
        return;
      }
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === 'string' &&
        $el.length > 1 &&
        swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }
      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass('' + params.modifierClass + params.type + '-dynamic');
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on('click', '.' + params.bulletClass, function onClick(e) {
          e.preventDefault();
          let index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) {
            index += swiper.loopedSlides;
          }
          swiper.slideTo(index);
        });
      }
      Utils.extend(swiper.pagination, { $el: $el, el: $el[0] });
    },
    destroy: function destroy() {
      const swiper = this;
      const params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
        return;
      }
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) {
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      }
      if (params.clickable) {
        $el.off('click', '.' + params.bulletClass);
      }
    },
  };
  const Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-',
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable',
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        const swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        const swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        const swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        const swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        const swiper = this;
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          swiper.pagination.$el.length > 0 &&
          !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };
  const Scrollbar = {
    setTranslate: function setTranslate() {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      const scrollbar = swiper.scrollbar;
      const rtl = swiper.rtlTranslate;
      const progress = swiper.progress;
      const dragSize = scrollbar.dragSize;
      const trackSize = scrollbar.trackSize;
      const $dragEl = scrollbar.$dragEl;
      const $el = scrollbar.$el;
      const params = swiper.params.scrollbar;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform('translate3d(' + newPos + 'px, 0, 0)');
        $dragEl[0].style.width = newSize + 'px';
      } else {
        $dragEl.transform('translate3d(0px, ' + newPos + 'px, 0)');
        $dragEl[0].style.height = newSize + 'px';
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      const swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
        return;
      }
      const scrollbar = swiper.scrollbar;
      const $dragEl = scrollbar.$dragEl;
      const $el = scrollbar.$el;
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      const divider = swiper.size / swiper.virtualSize;
      const moveDivider = divider * (trackSize / swiper.size);
      let dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + 'px';
      } else {
        $dragEl[0].style.height = dragSize + 'px';
      }
      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, { trackSize: trackSize, divider: divider, moveDivider: moveDivider, dragSize: dragSize });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](
        swiper.params.scrollbar.lockClass,
      );
    },
    getPointerPosition: function getPointerPosition(e) {
      const swiper = this;
      if (swiper.isHorizontal()) {
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
      }
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      const swiper = this;
      const scrollbar = swiper.scrollbar;
      const rtl = swiper.rtlTranslate;
      const $el = scrollbar.$el;
      const dragSize = scrollbar.dragSize;
      const trackSize = scrollbar.trackSize;
      const dragStartPos = scrollbar.dragStartPos;
      let positionRatio;
      positionRatio =
        (scrollbar.getPointerPosition(e) -
          $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      const swiper = this;
      const params = swiper.params.scrollbar;
      const scrollbar = swiper.scrollbar;
      const $wrapperEl = swiper.$wrapperEl;
      const $el = scrollbar.$el;
      const $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos =
        e.target === $dragEl[0] || e.target === $dragEl
          ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top']
          : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(swiper.scrollbar.dragTimeout);
      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      const swiper = this;
      const scrollbar = swiper.scrollbar;
      const $wrapperEl = swiper.$wrapperEl;
      const $el = scrollbar.$el;
      const $dragEl = scrollbar.$dragEl;
      if (!swiper.scrollbar.isTouched) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      const swiper = this;
      const params = swiper.params.scrollbar;
      const scrollbar = swiper.scrollbar;
      const $wrapperEl = swiper.$wrapperEl;
      const $el = scrollbar.$el;
      if (!swiper.scrollbar.isTouched) {
        return;
      }
      swiper.scrollbar.isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      const scrollbar = swiper.scrollbar;
      const touchEventsTouch = swiper.touchEventsTouch;
      const touchEventsDesktop = swiper.touchEventsDesktop;
      const params = swiper.params;
      const $el = scrollbar.$el;
      const target = $el[0];
      const activeListener =
        Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      const passiveListener =
        Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      const scrollbar = swiper.scrollbar;
      const touchEventsTouch = swiper.touchEventsTouch;
      const touchEventsDesktop = swiper.touchEventsDesktop;
      const params = swiper.params;
      const $el = scrollbar.$el;
      const target = $el[0];
      const activeListener =
        Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      const passiveListener =
        Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      const swiper = this;
      if (!swiper.params.scrollbar.el) {
        return;
      }
      const scrollbar = swiper.scrollbar;
      const $swiperEl = swiper.$el;
      const params = swiper.params.scrollbar;
      let $el = $(params.el);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === 'string' &&
        $el.length > 1 &&
        $swiperEl.find(params.el).length === 1
      ) {
        $el = $swiperEl.find(params.el);
      }
      let $dragEl = $el.find('.' + swiper.params.scrollbar.dragClass);
      if ($dragEl.length === 0) {
        $dragEl = $('<div class="' + swiper.params.scrollbar.dragClass + '"></div>');
        $el.append($dragEl);
      }
      Utils.extend(scrollbar, { $el: $el, el: $el[0], $dragEl: $dragEl, dragEl: $dragEl[0] });
      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      const swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };
  const Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        const swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        const swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };
  const Parallax = {
    setTransform: function setTransform(el, progress) {
      const swiper = this;
      const rtl = swiper.rtl;
      const $el = $(el);
      const rtlFactor = rtl ? -1 : 1;
      const p = $el.attr('data-swiper-parallax') || '0';
      let x = $el.attr('data-swiper-parallax-x');
      let y = $el.attr('data-swiper-parallax-y');
      const scale = $el.attr('data-swiper-parallax-scale');
      const opacity = $el.attr('data-swiper-parallax-opacity');
      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }
      if (x.indexOf('%') >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + '%';
      } else {
        x = x * progress * rtlFactor + 'px';
      }
      if (y.indexOf('%') >= 0) {
        y = parseInt(y, 10) * progress + '%';
      } else {
        y = y * progress + 'px';
      }
      if (typeof opacity !== 'undefined' && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform('translate3d(' + x + ', ' + y + ', 0px)');
      } else {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform('translate3d(' + x + ', ' + y + ', 0px) scale(' + currentScale + ')');
      }
    },
    setTranslate: function setTranslate() {
      const swiper = this;
      const $el = swiper.$el;
      const slides = swiper.slides;
      const progress = swiper.progress;
      const snapGrid = swiper.snapGrid;
      $el
        .children(
          '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
        )
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl)
          .find(
            '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
          )
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) {
        duration = this.params.speed;
      }
      const swiper = this;
      const $el = swiper.$el;
      $el
        .find(
          '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
        )
        .each(function (index, parallaxEl) {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) {
            parallaxDuration = 0;
          }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };
  const Parallax$1 = {
    name: 'parallax',
    params: { parallax: { enabled: false } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        if (!swiper.params.parallax.enabled) {
          return;
        }
        swiper.parallax.setTransition(duration);
      },
    },
  };
  var Zoom = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      const x1 = e.targetTouches[0].pageX;
      const y1 = e.targetTouches[0].pageY;
      const x2 = e.targetTouches[1].pageX;
      const y2 = e.targetTouches[1].pageY;
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    onGestureStart: function onGestureStart(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.$imageEl.transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
    },
    onGestureEnd: function onGestureEnd(e) {
      const swiper = this;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) {
        gesture.$slideEl = undefined;
      }
    },
    onTouchStart: function onTouchStart(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      const image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (image.isTouched) {
        return;
      }
      if (Device.android) {
        e.preventDefault();
      }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      const image = zoom.image;
      const velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) {
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
        return;
      }
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal() &&
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x ||
            Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        ) {
          image.isTouched = false;
          return;
        }
        if (
          !swiper.isHorizontal() &&
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y ||
            Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      image.isMoved = true;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX) {
        velocity.prevPositionX = image.touchesCurrent.x;
      }
      if (!velocity.prevPositionY) {
        velocity.prevPositionY = image.touchesCurrent.y;
      }
      if (!velocity.prevTime) {
        velocity.prevTime = Date.now();
      }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
        velocity.x = 0;
      }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
        velocity.y = 0;
      }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');
    },
    onTouchEnd: function onTouchEnd() {
      const swiper = this;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      const image = zoom.image;
      const velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) {
        momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      }
      if (velocity.y !== 0) {
        momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      }
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.$imageWrapEl
        .transition(momentumDuration)
        .transform('translate3d(' + image.currentX + 'px, ' + image.currentY + 'px,0)');
    },
    onTransitionEnd: function onTransitionEnd() {
      const swiper = this;
      const zoom = swiper.zoom;
      const gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    toggle: function toggle(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoom.out();
      } else {
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      const swiper = this;
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      const gesture = zoom.gesture;
      const image = zoom.image;
      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      gesture.$slideEl.addClass('' + params.zoomedSlideClass);
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + zoom.scale + ')');
    },
    out: function out() {
      const swiper = this;
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      const gesture = zoom.gesture;
      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent('.' + params.containerClass);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        return;
      }
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass('' + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    enable: function enable() {
      const swiper = this;
      const zoom = swiper.zoom;
      if (zoom.enabled) {
        return;
      }
      zoom.enabled = true;
      const passiveListener =
        swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
      }
      swiper.$wrapperEl.on(
        swiper.touchEvents.move,
        '.' + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture,
      );
    },
    disable: function disable() {
      const swiper = this;
      const zoom = swiper.zoom;
      if (!zoom.enabled) {
        return;
      }
      swiper.zoom.enabled = false;
      const passiveListener =
        swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners
          ? { passive: true, capture: false }
          : false;
      const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
      }
      swiper.$wrapperEl.off(
        swiper.touchEvents.move,
        '.' + swiper.params.zoom.containerClass,
        zoom.onTouchMove,
        activeListenerWithCapture,
      );
    },
  };
  const Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      const swiper = this;
      const zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };
      'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
        .split(' ')
        .forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
      Utils.extend(swiper, { zoom: zoom });
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        const swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        const swiper = this;
        if (!swiper.zoom.enabled) {
          return;
        }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        const swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        const swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange() {
        const swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };
  const Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }
      const swiper = this;
      const params = swiper.params.lazy;
      if (typeof index === 'undefined') {
        return;
      }
      if (swiper.slides.length === 0) {
        return;
      }
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      const $slideEl = isVirtual
        ? swiper.$wrapperEl.children('.' + swiper.params.slideClass + '[data-swiper-slide-index="' + index + '"]')
        : swiper.slides.eq(index);
      let $images = $slideEl.find(
        '.' + params.elementClass + ':not(.' + params.loadedClass + '):not(.' + params.loadingClass + ')',
      );
      if (
        $slideEl.hasClass(params.elementClass) &&
        !$slideEl.hasClass(params.loadedClass) &&
        !$slideEl.hasClass(params.loadingClass)
      ) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) {
        return;
      }
      $images.each(function (imageIndex, imageEl) {
        const $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        const background = $imageEl.attr('data-background');
        const src = $imageEl.attr('data-src');
        const srcset = $imageEl.attr('data-srcset');
        const sizes = $imageEl.attr('data-sizes');
        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
          if (
            typeof swiper === 'undefined' ||
            swiper === null ||
            !swiper ||
            swiper && !swiper.params ||
            swiper.destroyed
          ) {
            return;
          }
          if (background) {
            $imageEl.css('background-image', 'url("' + background + '")');
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }
          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find('.' + params.preloaderClass).remove();
          if (swiper.params.loop && loadInDuplicate) {
            const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              const originalSlide = swiper.$wrapperEl.children(
                '[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + swiper.params.slideDuplicateClass + ')',
              );
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              const duplicatedSlide = swiper.$wrapperEl.children(
                '.' + swiper.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]',
              );
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });
        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      const swiper = this;
      const $wrapperEl = swiper.$wrapperEl;
      const swiperParams = swiper.params;
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex;
      const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      const params = swiperParams.lazy;
      let slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }
      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children('.' + swiperParams.slideClass + '[data-swiper-slide-index="' + index + '"]').length) {
            return true;
          }
        } else if (slides[index]) {
          return true;
        }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }
      if (!swiper.lazy.initialImageLoaded) {
        swiper.lazy.initialImageLoaded = true;
      }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children('.' + swiperParams.slideVisibleClass).each(function (elIndex, slideEl) {
          const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) {
            swiper.lazy.loadInSlide(i);
          }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          const amount = params.loadPrevNextAmount;
          const spv = slidesPerView;
          const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          for (let i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) {
              swiper.lazy.loadInSlide(i$1);
            }
          }
          for (let i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) {
              swiper.lazy.loadInSlide(i$2);
            }
          }
        } else {
          const nextSlide = $wrapperEl.children('.' + swiperParams.slideNextClass);
          if (nextSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(nextSlide));
          }
          const prevSlide = $wrapperEl.children('.' + swiperParams.slidePrevClass);
          if (prevSlide.length > 0) {
            swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    },
  };
  const Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        lazy: { initialImageLoaded: false, load: Lazy.load.bind(swiper), loadInSlide: Lazy.loadInSlide.bind(swiper) },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        const swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        const swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        const swiper = this;
        if (swiper.params.lazy.enabled) {
          if (
            swiper.params.lazy.loadOnTransitionStart ||
            !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded
          ) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        const swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
      slideChange: function slideChange() {
        const swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      },
    },
  };
  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      const binarySearch = (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) {
          return 0;
        }
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    },
    getInterpolateFunction: function getInterpolateFunction(c) {
      const swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      const swiper = this;
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      function setControlledTranslate(c) {
        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }
        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      const swiper = this;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) {
              return;
            }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  const Controller$1 = {
    name: 'controller',
    params: { controller: { control: undefined, inverse: false, by: 'slide' } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        const swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        const swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        const swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        const swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.controller.control) {
          return;
        }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };
  const a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      const swiper = this;
      const params = swiper.params.a11y;
      if (e.keyCode !== 13) {
        return;
      }
      const $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is('.' + swiper.params.pagination.bulletClass)) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      const swiper = this;
      const notification = swiper.a11y.liveRegion;
      if (notification.length === 0) {
        return;
      }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      const swiper = this;
      if (swiper.params.loop || !swiper.navigation) {
        return;
      }
      const ref = swiper.navigation;
      const $nextEl = ref.$nextEl;
      const $prevEl = ref.$prevEl;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      const swiper = this;
      const params = swiper.params.a11y;
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          const $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      const swiper = this;
      swiper.$el.append(swiper.a11y.liveRegion);
      const params = swiper.params.a11y;
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.on('keydown', '.' + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      const swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
        swiper.a11y.liveRegion.remove();
      }
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if (
        swiper.pagination &&
        swiper.params.pagination.clickable &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      ) {
        swiper.pagination.$el.off('keydown', '.' + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    },
  };
  const A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(
            '<span class="' +
              swiper.params.a11y.notificationClass +
              '" aria-live="assertive" aria-atomic="true"></span>',
          ),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        const swiper = this;
        if (!swiper.params.a11y.enabled) {
          return;
        }
        swiper.a11y.destroy();
      },
    },
  };
  var History = {
    init: function init() {
      const swiper = this;
      if (!swiper.params.history) {
        return;
      }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      const history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) {
        return;
      }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      const swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      const swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      const pathArray = win.location.pathname
        .slice(1)
        .split('/')
        .filter(function (part) {
          return part !== '';
        });
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      const swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) {
        return;
      }
      const slide = swiper.slides.eq(index);
      let value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + '/' + value;
      }
      const currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text
        .toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      const swiper = this;
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };
  const History$1 = {
    name: 'history',
    params: { history: { enabled: false, replaceState: false, key: 'slides' } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        const swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
      slideChange: function slideChange() {
        const swiper = this;
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };
  const HashNavigation = {
    onHashCange: function onHashCange() {
      const swiper = this;
      const newHash = doc.location.hash.replace('#', '');
      const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.$wrapperEl
          .children('.' + swiper.params.slideClass + '[data-hash="' + newHash + '"]')
          .index();
        if (typeof newIndex === 'undefined') {
          return;
        }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      const swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
        return;
      }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, '#' + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
      } else {
        const slide = swiper.slides.eq(swiper.activeIndex);
        const hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      const swiper = this;
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) {
        return;
      }
      swiper.hashNavigation.initialized = true;
      const hash = doc.location.hash.replace('#', '');
      if (hash) {
        const speed = 0;
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides.eq(i);
          const slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            const index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  const HashNavigation$1 = {
    name: 'hash-navigation',
    params: { hashNavigation: { enabled: false, replaceState: false, watchState: false } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        const swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
      slideChange: function slideChange() {
        const swiper = this;
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };
  const Autoplay = {
    run: function run() {
      const swiper = this;
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) {
          swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      const swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') {
        return false;
      }
      if (swiper.autoplay.running) {
        return false;
      }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      const swiper = this;
      if (!swiper.autoplay.running) {
        return false;
      }
      if (typeof swiper.autoplay.timeout === 'undefined') {
        return false;
      }
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      const swiper = this;
      if (!swiper.autoplay.running) {
        return;
      }
      if (swiper.autoplay.paused) {
        return;
      }
      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
      }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };
  const Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onVisibilityChange: function onVisibilityChange() {
            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
              swiper.autoplay.pause();
            }
            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
              swiper.autoplay.run();
              swiper.autoplay.paused = false;
            }
          },
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
              return;
            }
            if (e.target !== this) {
              return;
            }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        const swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        const swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        const swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd() {
        const swiper = this;
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy() {
        const swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
        document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      },
    },
  };
  const Fade = {
    setTranslate: function setTranslate() {
      const swiper = this;
      const slides = swiper.slides;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset = $slideEl[0].swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) {
          tx -= swiper.translate;
        }
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl.css({ opacity: slideOpacity }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
      }
    },
    setTransition: function setTransition(duration) {
      const swiper = this;
      const slides = swiper.slides;
      const $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = [ 'webkitTransitionEnd', 'transitionend' ];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  const EffectFade = {
    name: 'effect-fade',
    params: { fadeEffect: { crossFade: false } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        fadeEffect: { setTranslate: Fade.setTranslate.bind(swiper), setTransition: Fade.setTransition.bind(swiper) },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'fade') {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + 'fade');
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'fade') {
          return;
        }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'fade') {
          return;
        }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };
  const Cube = {
    setTranslate: function setTranslate() {
      const swiper = this;
      const $el = swiper.$el;
      const $wrapperEl = swiper.$wrapperEl;
      const slides = swiper.slides;
      const swiperWidth = swiper.width;
      const swiperHeight = swiper.height;
      const rtl = swiper.rtlTranslate;
      const swiperSize = swiper.size;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: swiperWidth + 'px' });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform =
          'rotateX(' +
          (isHorizontal ? 0 : -slideAngle) +
          'deg) rotateY(' +
          (isHorizontal ? slideAngle : 0) +
          'deg) translate3d(' +
          tx +
          'px, ' +
          ty +
          'px, ' +
          tz +
          'px)';
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) {
            wrapperRotate = -slideIndex * 90 - progress * 90;
          }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          let shadowBefore = isHorizontal
            ? $slideEl.find('.swiper-slide-shadow-left')
            : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = isHorizontal
            ? $slideEl.find('.swiper-slide-shadow-right')
            : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $('<div class="swiper-slide-shadow-' + (isHorizontal ? 'left' : 'top') + '"></div>');
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $('<div class="swiper-slide-shadow-' + (isHorizontal ? 'right' : 'bottom') + '"></div>');
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
        '-moz-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
        '-ms-transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
        'transform-origin': '50% 50% -' + swiperSize / 2 + 'px',
      });
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(
            'translate3d(0px, ' +
              (swiperWidth / 2 + params.shadowOffset) +
              'px, ' +
              -swiperWidth / 2 +
              'px) rotateX(90deg) rotateZ(0deg) scale(' +
              params.shadowScale +
              ')',
          );
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier =
            1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          $cubeShadowEl.transform(
            'scale3d(' +
              scale1 +
              ', 1, ' +
              scale2 +
              ') translate3d(0px, ' +
              (swiperHeight / 2 + offset) +
              'px, ' +
              -swiperHeight / 2 / scale2 +
              'px) rotateX(-90deg)',
          );
        }
      }
      const zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform(
        'translate3d(0px,0,' +
          zFactor +
          'px) rotateX(' +
          (swiper.isHorizontal() ? 0 : wrapperRotate) +
          'deg) rotateY(' +
          (swiper.isHorizontal() ? -wrapperRotate : 0) +
          'deg)',
      );
    },
    setTransition: function setTransition(duration) {
      const swiper = this;
      const $el = swiper.$el;
      const slides = swiper.slides;
      slides
        .transition(duration)
        .find(
          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
        )
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };
  const EffectCube = {
    name: 'effect-cube',
    params: { cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        cubeEffect: { setTranslate: Cube.setTranslate.bind(swiper), setTransition: Cube.setTransition.bind(swiper) },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'cube') {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + 'cube');
        swiper.classNames.push(swiper.params.containerModifierClass + '3d');
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'cube') {
          return;
        }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'cube') {
          return;
        }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };
  const Flip = {
    setTranslate: function setTranslate() {
      const swiper = this;
      const slides = swiper.slides;
      const rtl = swiper.rtlTranslate;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (swiper.params.flipEffect.slideShadows) {
          let shadowBefore = swiper.isHorizontal()
            ? $slideEl.find('.swiper-slide-shadow-left')
            : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = swiper.isHorizontal()
            ? $slideEl.find('.swiper-slide-shadow-right')
            : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $('<div class="swiper-slide-shadow-' + (swiper.isHorizontal() ? 'left' : 'top') + '"></div>');
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(
              '<div class="swiper-slide-shadow-' + (swiper.isHorizontal() ? 'right' : 'bottom') + '"></div>',
            );
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) {
            shadowBefore[0].style.opacity = Math.max(-progress, 0);
          }
          if (shadowAfter.length) {
            shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $slideEl.transform(
          'translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
        );
      }
    },
    setTransition: function setTransition(duration) {
      const swiper = this;
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex;
      const $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find(
          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
        )
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) {
            return;
          }
          if (!swiper || swiper.destroyed) {
            return;
          }
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = [ 'webkitTransitionEnd', 'transitionend' ];
          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };
  const EffectFlip = {
    name: 'effect-flip',
    params: { flipEffect: { slideShadows: true, limitRotation: true } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        flipEffect: { setTranslate: Flip.setTranslate.bind(swiper), setTransition: Flip.setTransition.bind(swiper) },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'flip') {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + 'flip');
        swiper.classNames.push(swiper.params.containerModifierClass + '3d');
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'flip') {
          return;
        }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'flip') {
          return;
        }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };
  const Coverflow = {
    setTranslate: function setTranslate() {
      const swiper = this;
      const swiperWidth = swiper.width;
      const swiperHeight = swiper.height;
      const slides = swiper.slides;
      const $wrapperEl = swiper.$wrapperEl;
      const slidesSizesGrid = swiper.slidesSizesGrid;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate * Math.abs(offsetMultiplier);
        let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
        let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
        if (Math.abs(translateX) < 0.001) {
          translateX = 0;
        }
        if (Math.abs(translateY) < 0.001) {
          translateY = 0;
        }
        if (Math.abs(translateZ) < 0.001) {
          translateZ = 0;
        }
        if (Math.abs(rotateY) < 0.001) {
          rotateY = 0;
        }
        if (Math.abs(rotateX) < 0.001) {
          rotateX = 0;
        }
        const slideTransform =
          'translate3d(' +
          translateX +
          'px,' +
          translateY +
          'px,' +
          translateZ +
          'px)  rotateX(' +
          rotateX +
          'deg) rotateY(' +
          rotateY +
          'deg)';
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let $shadowBeforeEl = isHorizontal
            ? $slideEl.find('.swiper-slide-shadow-left')
            : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal
            ? $slideEl.find('.swiper-slide-shadow-right')
            : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $('<div class="swiper-slide-shadow-' + (isHorizontal ? 'left' : 'top') + '"></div>');
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $('<div class="swiper-slide-shadow-' + (isHorizontal ? 'right' : 'bottom') + '"></div>');
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) {
            $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          }
          if ($shadowAfterEl.length) {
            $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      }
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + 'px 50%';
      }
    },
    setTransition: function setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find(
          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
        )
        .transition(duration);
    },
  };
  const EffectCoverflow = {
    name: 'effect-coverflow',
    params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true } },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') {
          return;
        }
        swiper.classNames.push(swiper.params.containerModifierClass + 'coverflow');
        swiper.classNames.push(swiper.params.containerModifierClass + '3d');
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') {
          return;
        }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        if (swiper.params.effect !== 'coverflow') {
          return;
        }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };
  const Thumbs = {
    init: function init() {
      const swiper = this;
      const ref = swiper.params;
      const thumbsParams = ref.thumbs;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false });
        Utils.extend(swiper.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(
          Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
          }),
        );
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
        return;
      }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
        return;
      }
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        let currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        const prevIndex = swiper.slides
          .eq(currentIndex)
          .prevAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        const nextIndex = swiper.slides
          .eq(currentIndex)
          .nextAll('[data-swiper-slide-index="' + slideToIndex + '"]')
          .eq(0)
          .index();
        if (typeof prevIndex === 'undefined') {
          slideToIndex = nextIndex;
        } else if (typeof nextIndex === 'undefined') {
          slideToIndex = prevIndex;
        } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
          slideToIndex = nextIndex;
        } else {
          slideToIndex = prevIndex;
        }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) {
        return;
      }
      const slidesPerView =
        thumbsSwiper.params.slidesPerView === 'auto'
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;
      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        let currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          const prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          const nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]')
            .eq(0)
            .index();
          if (typeof prevThumbsIndex === 'undefined') {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === 'undefined') {
            newThumbsIndex = prevThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = currentThumbsIndex;
          } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl
            .children('[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]')
            .addClass(thumbActiveClass);
        }
      } else {
        for (let i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  const Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        multipleActiveThumbs: true,
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      const swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        const swiper = this;
        const ref = swiper.params;
        const thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) {
          return;
        }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        const swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      update: function update() {
        const swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      resize: function resize() {
        const swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        const swiper = this;
        if (!swiper.thumbs.swiper) {
          return;
        }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        const swiper = this;
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        const swiper = this;
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) {
          return;
        }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };
  const components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1,
  ];
  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }
  Swiper.use(components);
  return Swiper;
}));
