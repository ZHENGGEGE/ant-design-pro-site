webpackJsonp([75],{847:function(n,a){n.exports={content:["article",["p","Ant Design Pro provides the well-designed abstract chart components based on the ",["a",{title:null,href:"https://github.com/alibaba/BizCharts"},"BizCharts"],".\nThese components provide the ability to use with complex mixed view or just use along for common business usage."],["p","Currently chart components have 10 type of charts and 2 type of chart suites:"],["ul",["li",["p","Pie"]],["li",["p","Bar"]],["li",["p","Gauge"]],["li",["p","Radar"]],["li",["p","TagCloud"]],["li",["p","WaterWave"]],["li",["p","MiniBar"]],["li",["p","MiniArea"]],["li",["p","MiniProgress"]],["li",["p","TimelineChart"]],["li",["p","ChartCard"]],["li",["p","Field"]]],["p",["a",{title:null,href:"https://pro.ant.design/components/Charts/"},"View chart components doc"]],["h2","Use Chart Components"],["p","Chart components are included in ",["code","components/Charts"],".\nJust use then as other components:"],["blockquote",["p","You can also import then as pro module: ",["a",{title:null,href:"https://pro.ant.design/docs/use-components-alone"},"Use components alone"]]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ChartCard<span class="token punctuation">,</span> MiniBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@/components/Charts\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> visitData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-01"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">100</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-02"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">120</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-03"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">88</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-04"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">65</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChartCard</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Payments<span class="token punctuation">"</span></span>\n    <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Payments</span> <span class="token attr-name">reflect</span> <span class="token attr-name">the</span> <span class="token attr-name">quality</span> <span class="token attr-name">of</span> <span class="token attr-name">transaction"</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>exclamation-circle-o<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span></span>\n    <span class="token attr-name">total</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6,500<span class="token punctuation">"</span></span>\n    <span class="token attr-name">contentHeight</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniBar</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visitData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChartCard</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { ChartCard, MiniBar } from \'@/components/Charts\';\nimport { Tooltip, Icon } from \'antd\';\n\nconst visitData = [\n  {\n    x: "2017-09-01",\n    y: 100\n  },\n  {\n    x: "2017-09-02",\n    y: 120\n  },\n  {\n    x: "2017-09-03",\n    y: 88\n  },\n  {\n    x: "2017-09-04",\n    y: 65\n  }\n];\n\nReactDOM.render(\n  <ChartCard\n    title="Payments"\n    action={\n      <Tooltip title="Payments reflect the quality of transaction">\n        <Icon type="exclamation-circle-o" />\n      </Tooltip>\n    }\n    total="6,500"\n    contentHeight={46}\n  >\n    <MiniBar height={46} data={visitData} />\n  </ChartCard>,\n  mountNode\n);']],["p","And now you have the combined chart:"],["p",["img",{width:"260",src:"https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png"}]],["h2","Use BizCharts"],["p","If exists chart components is not what you want,\nyou can just use ",["a",{title:null,href:"https://github.com/alibaba/BizCharts"},"BizCharts"]," to customize your own chart components."],["h3","install BizCharts"],["p","Use npm in command line:"],["pre",{lang:null,highlighted:'npm install bizcharts <span class="token operator">-</span><span class="token operator">-</span>save'},["code","npm install bizcharts --save"]],["p","And import into your project:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart<span class="token punctuation">,</span> Axis<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Geom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bizcharts\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chart</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token attr-name">forceFit</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Axis</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Axis</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>temperature<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> formatter<span class="token punctuation">:</span> val <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\xb0C`</span></span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">crosshairs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> type <span class="token punctuation">:</span> <span class="token string">"y"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Geom</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month*temperature<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'city\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Geom</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>point<span class="token punctuation">\'</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month*temperature<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'city\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chart</span><span class="token punctuation">></span></span>'},["code",'import { Chart, Axis, Tooltip, Geom } from \'bizcharts\';\n\nconst data = [...];\n\n<Chart height={400} data={data} forceFit>\n  <Axis name="month" />\n  <Axis name="temperature" label={{ formatter: val => `${val}\xb0C` }} />\n  <Tooltip crosshairs={{ type : "y" }} />\n  <Geom type="line" position="month*temperature" size={2} color={\'city\'} />\n  <Geom type=\'point\' position="month*temperature" size={4} color={\'city\'} />\n</Chart>']],["p","Reference ",["a",{title:null,href:"https://alibaba.github.io/BizCharts/demo.html"},"more demo"],"\u3002"]],meta:{order:11,title:"Charts",type:"Advanced",filename:"docs/graph.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Use-Chart-Components",title:"Use Chart Components"},"Use Chart Components"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use-BizCharts",title:"Use BizCharts"},"Use BizCharts"]]]}}});