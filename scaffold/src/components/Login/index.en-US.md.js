webpackJsonp([26],{815:function(t,e){t.exports={content:["section",["p","Support multiple common ways of login with built-in controls. You can choose your own combinations and use with your custom controls."]],meta:{title:"Login",cols:1,order:15,filename:"scaffold/src/components/Login/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Login"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","defaultActiveKey"],["td","default key to activate the tab panel"],["td","String"],["td","-"]],["tr",["td","onTabChange"],["td","callback on changing tabs"],["td","(key) => void"],["td","-"]],["tr",["td","onSubmit"],["td","callback on submit"],["td","(err, values) => void"],["td","-"]]]],["h3","Login.Tab"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","key"],["td","key of the tab"],["td","String"],["td","-"]],["tr",["td","tab"],["td","displayed text of the tab"],["td","ReactNode"],["td","-"]]]],["h3","Login.UserName"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","name"],["td","name of the control, also the key of the submitted data"],["td","String"],["td","-"]],["tr",["td","rules"],["td","validation rules, same with ",["a",{title:null,href:"getFieldDecorator(id, options)"},"option.rules"]," in Form getFieldDecorator(id, options)"],["td","object[]"],["td","-"]]]],["p","Apart from the above properties, Login.Username also support all properties of antd.Input, together with the default values of basic settings, such as ",["em","placeholder"],", ",["em","size"]," and ",["em","prefix"],". All of these default values can be over-written."],["h3","Login.Password, Login.Mobile are the same as Login.UserName"],["h3","Login.Captcha"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","onGetCaptcha"],["td","callback on getting a new Captcha"],["td","() => (void ","|"," false ","|"," Promise)"],["td","-"]],["tr",["td","countDown"],["td","count down"],["td","number"],["td","-"]],["tr",["td","buttonText"],["td","text on getting a new Captcha"],["td","ReactNode"],["td","'\u83b7\u53d6\u9a8c\u8bc1\u7801'"]]]],["p","Apart from the above properties, ",["em","Login.Captcha"]," support the same properties with ",["em","Login.UserName"],"."],["h3","Login.Submit"],["p","Support all properties of ",["em","antd.Button"],"."]]}}});