import{a as O,b as q}from"./chunk-HMA44JBL.js";import{a as B}from"./chunk-HVWSZP6M.js";import{a as L}from"./chunk-SJXFQYTK.js";import{a as v}from"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import"./chunk-CWNFCDZO.js";import{a as S}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import{c as F,e as k,f as h}from"./chunk-ECKCXZDJ.js";import"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as p}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as y}from"./chunk-UJ4RDOBF.js";import{d as b}from"./chunk-EWS3NXQH.js";import{d as s,i as c}from"./chunk-AQDAG4C2.js";import"./chunk-TT3E6PQD.js";import{i as f}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as u}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as e}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a,f as Q,i as T}from"./chunk-ORNWO27Z.js";var o=Q(T());var U=({match:{params:{orgId:m}}})=>{let[x,g]=(0,o.useState)(!1),[t,D]=(0,o.useState)({}),{data:i,loading:E}=u(q,{fetchPolicy:"cache-and-network",variables:{orgId:m}}),{feedback:r,setFeedback:d,clearFeedback:G}=L(),[M,{loading:l}]=p(O,{onCompleted:()=>{g(!1),d({type:"success",message:o.default.createElement(e,{id:"organisationSettings.success"}),location:"organisationSettings"})},onError:n=>{d({type:"error",message:S(n),location:"organisationSettings"})}}),P=n=>{g(!0),D(a(a({},t),n))},C=n=>{n.preventDefault(),M({variables:{organisation:m,attributes:t}})};return o.default.createElement(o.default.Fragment,null,E?o.default.createElement(s,null,o.default.createElement(b,null)):o.default.createElement(o.default.Fragment,null,o.default.createElement(y,{id:"organisationSettings.title",breadcrumbs:[i.organisation.name]}),o.default.createElement(s,{p:4},o.default.createElement(B,null,o.default.createElement(e,{id:"organisationSettings.heading",values:{organisation:i.organisation.name}}))),o.default.createElement("form",{onSubmit:C},r&&r.location==="organisationSettings"&&o.default.createElement(v,a({"data-qa":"organisationSettingsFeedback",p:null,pt:4,px:4,pb:0,duration:0,onDismiss:()=>G()},r)),o.default.createElement(s,{p:4},o.default.createElement(c,{id:"organisationSettings.details",mb:0}),o.default.createElement(F,{mb:0},o.default.createElement(k,{labelid:"organisationSettings.nameLabel",span:2},o.default.createElement(h,{name:"organisation_name",defaultValue:i.organisation.name,required:!0,maxLength:30,onChange:n=>P({name:n}),placeholder:i.organisation.name}))),o.default.createElement(f,{loading:l,variant:"primary",type:"submit",disabled:!x||(t==null?void 0:t.name)===""||l},o.default.createElement(e,{id:"organisationSettings.actions.save"}))))))},X=U;export{X as default};
//# sourceMappingURL=OrganisationSettings-K3UYA5Q3.js.map