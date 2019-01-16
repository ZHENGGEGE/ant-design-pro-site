webpackJsonp([57],{865:function(n,s){n.exports={content:["article",["p","Ant Design Pro is a SPA based on the React technology stack. We provide a set of front-end code and local simulation data development model.\nWork in the form of an API with the server application of any technology stack. The basics of interacting with the server are briefly described below."],["h2","Request Process"],["p","In Ant Design Pro, a complete front-end UI interaction to the server-side processing flow looks like this:"],["ol",["li",["p","UI component interaction;"]],["li",["p","Call the effect of model;"]],["li",["p","Call the unified management service request function;"]],["li",["p","Send the request using the encapsulated request.js;"]],["li",["p","Get the server response;"]],["li",["p","Then call reducer to change state;"]],["li",["p","Update the model."]]],["p","As can be seen from the above process, in order to facilitate management and maintenance, unified request processing is placed in the ",["code","services"]," folder, and the files are generally split according to the model dimension, such as:"],["pre",{lang:null,highlighted:'services<span class="token operator">/</span>\n  user<span class="token punctuation">.</span>js\n  api<span class="token punctuation">.</span>js\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","services/\n  user.js\n  api.js\n  ..."]],["p","Among them, ",["code","utils/request.js"]," is based on ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"fetch"],", which is convenient for handling POST, GET and other parameters, headers, and error messages. See ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"},"request.js"]," for details."],["p","For example, an example of requesting user information in services:"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> services<span class="token operator">/</span>user<span class="token punctuation">.</span>js\nimport request from <span class="token string">\'../utils/request\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport async function <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">\'/api/users\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\nexport async function <span class="token function">queryCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">\'/api/currentUser\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> models<span class="token operator">/</span>user<span class="token punctuation">.</span>js\nimport { queryCurrent } from <span class="token string">\'../services/user\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\neffects<span class="token punctuation">:</span> {\n  <span class="token operator">*</span><span class="token function">fetch</span><span class="token punctuation">(</span>{ payload }<span class="token punctuation">,</span> { call<span class="token punctuation">,</span> put }<span class="token punctuation">)</span> {\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> yield <span class="token function">call</span><span class="token punctuation">(</span>queryUsers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  }<span class="token punctuation">,</span>\n}'},["code","// services/user.js\nimport request from '../utils/request';\n\nexport async function query() {\n  return request('/api/users');\n}\n\nexport async function queryCurrent() {\n  return request('/api/currentUser');\n}\n\n// models/user.js\nimport { queryCurrent } from '../services/user';\n...\neffects: {\n  *fetch({ payload }, { call, put }) {\n    ...\n    const response = yield call(queryUsers);\n    ...\n  },\n}"]],["h3","Handling Asynchronous Requests"],["p","When dealing with complex asynchronous requests, it's easy to mess up the logic and get stuck in nesting traps, so the underlying infrastructure of Ant Design Pro ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," uses the ",["code","effect"]," concept. To manage synchronized asynchronous requests:"],["pre",{lang:"js",highlighted:'effects<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token operator">*</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> payload <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'changeLoading\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Async request 1</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>queryFakeList<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'save\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> response<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// Async request 2</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>queryFakeList2<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'save2\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> response2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'changeLoading\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code","effects: {\n  *fetch({ payload }, { call, put }) {\n    yield put({\n      type: 'changeLoading',\n      payload: true,\n    });\n    // Async request 1\n    const response = yield call(queryFakeList, payload);\n    yield put({\n      type: 'save',\n      payload: response,\n    });\n    // Async request 2\n    const response2 = yield call(queryFakeList2, payload);\n    yield put({\n      type: 'save2',\n      payload: response2,\n    });\n    yield put({\n      type: 'changeLoading',\n      payload: false,\n    });\n  },\n},"]],["p","Via ",["a",{title:null,href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*"},"generator"]," and ",["a",{title:null,href:"https://developer.mozilla.org/es/docs/Web /JavaScript/Reference/Operators/yield"},"yield"]," the logical processing of asynchronous calls the same as synchronization, refer to ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md #async-logic"},"dva async logic"]," for details."]],meta:{order:7,title:"Communicate with Server",type:"Introduction",filename:"docs/server.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Request-Process",title:"Request Process"},"Request Process"]]]}}});