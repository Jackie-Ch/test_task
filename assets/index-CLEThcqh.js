(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const f="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQyMzllOGEwYzBjMTE0NDc0ODgzMGNkYzY2OTRhODhkYjEwZjhlY2E0N2M3ZjM3ODM1OWY3Y2VlZjAwOTlhMmRhMDA5YjNmODhlOGFmOGViIn0.eyJhdWQiOiJkMTQ2OTk5Ny1jZjk3LTQ0YTMtOWQxNS1mMTVjNmU0M2EwMGYiLCJqdGkiOiJkMjM5ZThhMGMwYzExNDQ3NDg4MzBjZGM2Njk0YTg4ZGIxMGY4ZWNhNDdjN2YzNzgzNTlmN2NlZWYwMDk5YTJkYTAwOWIzZjg4ZThhZjhlYiIsImlhdCI6MTcyNjgzMTE5NywibmJmIjoxNzI2ODMxMTk3LCJleHAiOjE3Mjg5NTA0MDAsInN1YiI6IjExNTI4Nzk0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTU0ODcwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiN2RiNDNhNzEtYjQ4Yy00MjQ1LTliYWQtZTIwZDcwYmY5N2E5IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.UXPOQcc0HFFs6wMaQv3K-HKwy6YI7JcJtNzFijttiUnkCdPfMah1rsXEVfYR2IzmVknR6C8Se_s5Gu8GiS3pCOWnGRvNsz3-z1Rjf2y0VxBsBdIhIbeeq-3U493IwE1n1x3D537lOdpjEvNj9M10uNddNJUw7cLES6fsNp04G0G2VS5nE769or-UNEVpQsFriQrjLxRyCJcy3pUNQH2Rs9rfshe67q668__f5iS2AmrhAtyOttOhDtC14liXX1QZoq_Q52AjbEPqaRgod22qtJ6o_ev65sfrWq74XsQSnuiRt58XG54vKC29BaIKsfmM63fixy23y-BzeDb5rn0Yww";let o=[];function m(r){return fetch(`https://thingproxy.freeboard.io/fetch/${r}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`}}).then(e=>e.json()).then(e=>(console.log(e),o=o.concat(e._embedded.leads),e._links.next?(console.log(e._links.next),new Promise(t=>{setTimeout(()=>{m(e._links.next.href).then(s=>t(s))},1e3)})):o)).catch(e=>(console.error("Error: ",e.message),o))}function N(r){return new Date(r).toLocaleString("ru-Ru",{day:"numeric",month:"numeric",year:"numeric"})}function p(r){const i=new Date,e=i.getDate(),n=i.getMonth()+1,t=i.getFullYear(),s=new Date(r),c=s.getDate(),u=s.getMonth()+1,h=s.getFullYear(),l={red:"#c52d2d",green:"#67ca24",yellow:"#dbd519"};return Number(i)>r?l.red:c===e&&u===n&&h===t?l.green:l.yellow}const d=document.querySelector(".loader-wrap"),a=document.querySelector(".leads-list");async function I(){const r=await m("https://reamonn8.amocrm.ru/api/v4/leads?limit=3&page=1");d&&d.classList.add("hidden"),r.forEach(e=>{const n=document.createElement("div");n.classList.add("leads-item"),n.dataset.id=String(e.id),n.innerHTML=`
      <div class="front" >
        <h4>ID <span class="id-item">${e.id}</span></h4>
        <div class="name-item">${e.name}</div>
        <div class="price-item">
          <span class="price">${e.price}</span><span> &#x20bd;</span>
        </div>

      </div>
      <div class="back" >
        <h4>ID <span class="id-item">${e.id}</span></h4>
        <div class="name-item">${e.name}</div>
        <div class="date-and-status">
          <div class="status">
            <svg
              class="status-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="7" r="7" fill=${p(e.closest_task_at*1e3)} />
            </svg>
          </div>
          <div class="date">${N(e.closest_task_at*1e3)}</div>
        </div>
      </div>
`,a&&a.append(n)});let i;a&&a.addEventListener("click",e=>{const n=e.target;if(n.closest(".leads-item")){const t=n.closest(".leads-item");i!==t&&document.querySelectorAll(".leads-item").forEach(s=>{s.classList.contains("turn")&&s.classList.remove("turn")}),i=t,t&&t.classList.toggle("turn")}})}I();
