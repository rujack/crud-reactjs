(this.webpackJsonpastaga=this.webpackJsonpastaga||[]).push([[0],{58:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(20),c=a.n(i),r=a(32),d=a(35),h=a(25),j=a(36),l=a(37),b=a(22),o=a(42),u=a(41),O=a(60),x=a(65),k=a(61),m=a(2),p=function(t){var e=t.nama,a=t.harga,n=t.stok,s=t.handleChange,i=t.handleSubmit,c=t.id,r=t.isValid;return Object(m.jsx)("div",{children:Object(m.jsxs)(O.a,{className:"mt-4",children:[Object(m.jsxs)("h3",{children:[c?"Edit":"Input"," Data"]}),Object(m.jsxs)(x.a,{onSubmit:i,className:"mt-3",children:[r,Object(m.jsxs)(x.a.Group,{controlId:"nama",children:[Object(m.jsx)(x.a.Label,{children:"Nama Barang"}),Object(m.jsx)(x.a.Control,{type:"Text",placeholder:"Nama",name:"nama",value:e,onChange:function(t){return s(t)}})]}),Object(m.jsxs)(x.a.Group,{controlId:"harga",children:[Object(m.jsx)(x.a.Label,{children:"Harga Barang"}),Object(m.jsx)(x.a.Control,{type:"number",placeholder:"harga",name:"harga",value:a,onChange:function(t){return s(t)}})]}),Object(m.jsxs)(x.a.Group,{controlId:"stok",children:[Object(m.jsx)(x.a.Label,{children:"Stok Barang"}),Object(m.jsx)(x.a.Control,{type:"number",min:0,placeholder:"stok",name:"stok",value:n,onChange:function(t){return s(t)}})]}),Object(m.jsx)(k.a,{variant:"primary",type:"submit",children:c?"Edit":"Submit"})]})]})})},g=a(67),f=a(66),w=a(16),v=function(t){var e=t.resetValid;return Object(m.jsx)("div",{children:Object(m.jsxs)(g.a,{expand:"xl",bg:"dark",variant:"dark",children:[Object(m.jsx)(w.b,{to:"/",children:Object(m.jsx)(g.a.Brand,{children:Object(m.jsx)("h4",{children:"Rujack"})})}),Object(m.jsxs)(f.a,{defaultActiveKey:"/",as:"ul",children:[Object(m.jsx)(f.a.Item,{as:"li",children:Object(m.jsx)(w.b,{to:"/",children:Object(m.jsx)(f.a.Link,{href:"/",children:"Home"})})}),Object(m.jsx)(f.a.Item,{as:"li",children:Object(m.jsx)(w.b,{to:"/input",children:Object(m.jsx)(f.a.Link,{href:"/input",onClick:function(t){return e()},children:"Input"})})}),Object(m.jsx)(f.a.Item,{as:"li",children:Object(m.jsx)(w.b,{to:"/eksekusi",children:Object(m.jsx)(f.a.Link,{href:"/eksekusi",onClick:function(t){return e()},children:"Eksekusi"})})})]})]})})},S=a(62),C=function(t){var e=t.datas,a=t.handleEdit;return Object(m.jsx)(O.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"mt-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"No."}),Object(m.jsx)("th",{children:"Nama Barang"}),Object(m.jsx)("th",{children:"Harga"}),Object(m.jsx)("th",{children:"Stok"}),Object(m.jsx)("th",{children:"Aksi"})]})}),e.map((function(t,e){return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e+1}),Object(m.jsx)("td",{children:t.nama}),Object(m.jsx)("td",{children:"Rp. "+t.harga+"-;"}),Object(m.jsx)("td",{children:t.stok+" Unit"}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn btn-warning mr-2",onClick:function(){return a(t.id)},children:"Edit"})})]})},e)}))]})})})},y=a(68),N=a(6),V=a(63),H=a(64),B=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(O.a,{children:Object(m.jsx)(V.a,{fluid:!0,className:"mt-4",children:Object(m.jsxs)(O.a,{children:[Object(m.jsx)("h1",{children:"Rujack"}),Object(m.jsx)("p",{children:"Lorem ipsum wwkwkwkwkwkwkwkwkwkwkw wkwkwkwkwkwkwkwkwkwkwkw wwkwkwkwkwkwkwk"}),Object(m.jsx)(H.a,{src:"https://cdn.pixabay.com/photo/2020/01/23/17/35/monkey-4788328_960_720.jpg",rounded:!0,fluid:!0})]})})})})},E=function(t){var e=t.datas,a=t.handleHapus;t.isValid;return Object(m.jsx)(O.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"mt-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"No."}),Object(m.jsx)("th",{children:"Nama Barang"}),Object(m.jsx)("th",{children:"Harga"}),Object(m.jsx)("th",{children:"Stok"}),Object(m.jsx)("th",{children:"Aksi"})]})}),e.map((function(t,e){return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e+1}),Object(m.jsx)("td",{children:t.nama}),Object(m.jsx)("td",{children:"Rp. "+t.harga+"-;"}),Object(m.jsx)("td",{children:t.stok+" Unit"}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.id)},children:"Hapus"})})]})},e)}))]})})})},I=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(j.a)(this,a),(n=e.call(this,t)).handleEdit=function(t){var e=n.state.datas.filter((function(e){return e.id===t})).map((function(t){return t}));n.setState({isValid:"",id:e[0].id,nama:e[0].nama,harga:e[0].harga,stok:e[0].stok})},n.handleHapus=function(t){var e=n.state.datas.filter((function(e){return e.id!==t})).map((function(t){return t}));n.setState({datas:e})},n.resetValid=function(t){n.setState({isValid:""})},n.state={datas:[],nama:"",harga:"",stok:"",id:"",isValid:"",setShow:!1},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(h.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){var e=this;if(t.preventDefault(),""===this.state.id)this.state.nama&&this.state.harga&&this.state.stok?(this.setState({isValid:Object(m.jsx)(y.a,{variant:"success",children:"Berhasil :)"}),datas:[].concat(Object(d.a)(this.state.datas),[{id:this.state.datas.length+1,nama:this.state.nama,harga:this.state.harga,stok:this.state.stok}])}),this.setState({nama:"",harga:"",stok:"",id:""})):this.setState({isValid:Object(m.jsx)(y.a,{variant:"danger",children:"Harap semua data di isi :("})});else{var a=this.state.datas.filter((function(t){return t.id!==e.state.id})).map((function(t){return t}));this.setState({isValid:Object(m.jsx)(y.a,{variant:"success",children:"Berhasil di edit :)"}),datas:[].concat(Object(d.a)(a),[{id:this.state.datas.length+1,nama:this.state.nama,harga:this.state.harga,stok:this.state.stok}])}),this.setState({nama:"",harga:"",stok:"",id:""})}}},{key:"render",value:function(){return Object(m.jsx)(w.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{resetValid:this.resetValid}),Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{exact:!0,path:"/",children:Object(m.jsx)(B,{})}),Object(m.jsxs)(N.a,{path:"/input",children:[Object(m.jsx)(p,Object(r.a)(Object(r.a)({},this.state),{},{handleChange:this.handleChange,handleSubmit:this.handleSubmit})),Object(m.jsx)(C,{datas:this.state.datas,handleEdit:this.handleEdit})]}),Object(m.jsx)(N.a,{path:"/eksekusi",children:Object(m.jsx)(E,{datas:this.state.datas,handleHapus:this.handleHapus})})]})]})})}}]),a}(n.Component);a(57);c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.79bb3254.chunk.js.map