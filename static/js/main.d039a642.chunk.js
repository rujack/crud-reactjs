(this.webpackJsonpastaga=this.webpackJsonpastaga||[]).push([[0],{44:function(t,a,e){"use strict";e.r(a);var n=e(0),s=e.n(n),i=e(15),r=e.n(i),c=e(27),d=e(28),h=e(19),l=e(29),j=e(30),b=e(16),o=e(34),u=e(33),O=e(46),m=e(49),x=e(47),g=e(3),k=function(t){var a=t.nama,e=t.harga,n=t.stok,s=t.handleChange,i=t.handleSubmit,r=t.id,c=t.isValid;return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{className:"mt-4",children:[Object(g.jsxs)("h3",{children:[r?"Edit":"Input"," Data"]}),Object(g.jsxs)(m.a,{onSubmit:i,className:"mt-3",children:[c,Object(g.jsxs)(m.a.Group,{controlId:"nama",children:[Object(g.jsx)(m.a.Label,{children:"Nama Barang"}),Object(g.jsx)(m.a.Control,{type:"Text",placeholder:"Nama",name:"nama",value:a,onChange:function(t){return s(t)}})]}),Object(g.jsxs)(m.a.Group,{controlId:"harga",children:[Object(g.jsx)(m.a.Label,{children:"Harga Barang"}),Object(g.jsx)(m.a.Control,{type:"number",placeholder:"harga",name:"harga",value:e,onChange:function(t){return s(t)}})]}),Object(g.jsxs)(m.a.Group,{controlId:"stok",children:[Object(g.jsx)(m.a.Label,{children:"Stok Barang"}),Object(g.jsx)(m.a.Control,{type:"number",min:0,placeholder:"stok",name:"stok",value:n,onChange:function(t){return s(t)}})]}),Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:r?"Edit":"Submit"})]})]})})},p=e(51),v=e(50),f=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(p.a,{expand:"xl",bg:"dark",variant:"dark",children:[Object(g.jsx)(p.a.Brand,{href:"#home",children:Object(g.jsx)("h4",{children:"Rujack"})}),Object(g.jsxs)(v.a,{defaultActiveKey:"#input",as:"ul",children:[Object(g.jsx)(v.a.Item,{as:"li",children:Object(g.jsx)(v.a.Link,{href:"#home",children:"Home"})}),Object(g.jsx)(v.a.Item,{as:"li",children:Object(g.jsx)(v.a.Link,{eventKey:"#input",children:"Input"})}),Object(g.jsx)(v.a.Item,{as:"li",children:Object(g.jsx)(v.a.Link,{eventKey:"#eksekusi",children:"Eksekusi"})})]})]})})},S=e(48),C=function(t){var a=t.datas,e=t.handleEdit,n=t.handleHapus;return Object(g.jsx)(O.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"mt-5",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"No."}),Object(g.jsx)("th",{children:"Nama Barang"}),Object(g.jsx)("th",{children:"Harga"}),Object(g.jsx)("th",{children:"Stok"}),Object(g.jsx)("th",{children:"Aksi"})]})}),a.map((function(t,a){return Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:a+1}),Object(g.jsx)("td",{children:t.nama}),Object(g.jsx)("td",{children:"Rp. "+t.harga+"-;"}),Object(g.jsx)("td",{children:t.stok+" Unit"}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{className:"btn btn-warning mr-2",onClick:function(){return e(t.id)},children:"Edit"}),Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.id)},children:"Hapus"})]})]})},a)}))]})})})},y=e(52),I=function(t){Object(o.a)(e,t);var a=Object(u.a)(e);function e(t){var n;return Object(l.a)(this,e),(n=a.call(this,t)).handleEdit=function(t){console.log("ID : "+t);var a=n.state.datas.filter((function(a){return a.id===t})).map((function(t){return t}));n.setState({isValid:"",id:a[0].id,nama:a[0].nama,harga:a[0].harga,stok:a[0].stok})},n.handleHapus=function(t){var a=n.state.datas.filter((function(a){return a.id!==t})).map((function(t){return t}));n.setState({isValid:Object(g.jsx)(y.a,{variant:"success",children:"Berhasil di hapus :)"}),datas:a})},n.state={datas:[],nama:"",harga:"",stok:"",id:"",isValid:"",setShow:!1},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(j.a)(e,[{key:"handleChange",value:function(t){this.setState(Object(h.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){var a=this;if(t.preventDefault(),""===this.state.id)this.state.nama&&this.state.harga&&this.state.stok?(this.setState({isValid:Object(g.jsx)(y.a,{variant:"success",children:"Berhasil :)"}),datas:[].concat(Object(d.a)(this.state.datas),[{id:this.state.datas.length+1,nama:this.state.nama,harga:this.state.harga,stok:this.state.stok}])}),this.setState({nama:"",harga:"",stok:"",id:""})):this.setState({isValid:Object(g.jsx)(y.a,{variant:"danger",children:"Harap semua data di isi :("})});else{var e=this.state.datas.filter((function(t){return t.id!==a.state.id})).map((function(t){return t}));this.setState({isValid:Object(g.jsx)(y.a,{variant:"success",children:"Berhasil di edit :)"}),datas:[].concat(Object(d.a)(e),[{id:this.state.datas.length+1,nama:this.state.nama,harga:this.state.harga,stok:this.state.stok}])}),this.setState({nama:"",harga:"",stok:"",id:""})}}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(f,{}),Object(g.jsx)(k,Object(c.a)(Object(c.a)({},this.state),{},{handleChange:this.handleChange,handleSubmit:this.handleSubmit})),Object(g.jsx)(C,{datas:this.state.datas,handleEdit:this.handleEdit,handleHapus:this.handleHapus})]})}}]),e}(n.Component);e(43);r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d039a642.chunk.js.map