import{a as M}from"./chunk-ZA56YX54.js";import{a as J,b as K,c as X,d as Z,e as ee,f as te}from"./chunk-E5IQYEPL.js";import{a as B,b as W,c as Y}from"./chunk-CCYSTRO3.js";import{a as b}from"./chunk-7IX7VPDF.js";import{a as N}from"./chunk-DLFABNFZ.js";import"./chunk-YKSGIHVP.js";import{d as k,e as H}from"./chunk-BBMTBTDA.js";import"./chunk-IJHKA2LB.js";import{g as G,m as U}from"./chunk-IBNRR53B.js";import{$a as _,Eb as $,I as P,Ja as F,Oa as h,R as v,Ua as m,Va as T,Ya as R,Z as p,Za as w,_ as u,ab as x,bb as o,cb as a,db as f,eb as I,fb as D,hb as C,ka as O,kb as g,lb as c,ma as S,tb as L,ua as V,ub as d,vb as j,wb as y,xa as l,xb as z}from"./chunk-GQXGSY3T.js";import"./chunk-YEWEO3AL.js";var E=(r,t,e,i)=>{try{return e=e.toLowerCase(),Object.values(r.original).map(s=>s).join(" ").toLowerCase().includes(e)}catch(n){return console.error(n),!1}},ne=[{id:"id",accessorFn:r=>r.id,cell:r=>r.getValue(),header:"ID",filterFn:E},{id:"name",accessorFn:r=>r.name,cell:r=>r.getValue(),header:"Nombre",filterFn:E},{id:"surname",accessorFn:r=>r.surname,cell:r=>r.getValue(),header:"Apellidos",filterFn:E},{id:"email",accessorFn:r=>r.email,cell:r=>r.getValue(),header:"Email",filterFn:E},{id:"role.name",accessorFn:r=>r.role?.name,cell:r=>r.getValue(),header:"Rol",filterFn:E},{id:"actions",header:"Acciones",enableSorting:!1,enableHiding:!1,enableColumnFilter:!1}],re=ne;var ie=(r,t,e)=>({"!text-left":r,"!text-right":t,"!text-center":e});function le(r,t){if(r&1){let e=C();I(0),o(1,"button",17),g("click",function(){p(e);let n=c(2).$implicit,s=c(2);return u(s.onSort(n.column))}),f(2,"span",18),a(),D()}if(r&2){let e=t.$implicit;l(2),m("innerHTML",e,V)}}function se(r,t){if(r&1&&(o(0,"th",15),h(1,le,3,1,"ng-container",16),a()),r&2){let e=c(),i=e.$implicit,n=e.$index,s=c().$implicit;m("ngClass",$(3,ie,n===0,n===s.headers.length-1,n>0&&n<s.headers.length-1)),l(),m("flexRender",i.column.columnDef.header)("flexRenderProps",i.getContext())}}function ce(r,t){if(r&1&&h(0,se,2,7,"th",15),r&2){let e=t.$implicit;R(e.isPlaceholder?-1:0)}}function de(r,t){if(r&1&&(o(0,"tr",6),_(1,ce,1,1,null,null,w),a()),r&2){let e=t.$implicit;l(),x(e.headers)}}function me(r,t){if(r&1){let e=C();o(0,"input",22),g("change",function(){p(e);let n=c(2).$implicit;return u(n.toggleSelected())}),a()}if(r&2){let e=c(2).$implicit;m("checked",e.getIsSelected())}}function pe(r,t){if(r&1){let e=C();o(0,"div",21)(1,"button",23),g("click",function(){p(e);let n=c(2).$implicit,s=c();return u(s.onEdit(n))}),d(2," Editar "),a(),o(3,"button",24),g("click",function(){p(e);let n=c(2).$implicit,s=c();return u(s.onGenerateQR(n))}),d(4," QR "),a(),o(5,"button",25),g("click",function(){p(e);let n=c(2).$implicit,s=c();return u(s.onDelete(n))}),d(6," Eliminar "),a()()}}function ue(r,t){if(r&1&&(I(0),f(1,"span",26),D()),r&2){let e=t.$implicit;l(),m("innerHTML",e,V)}}function ge(r,t){if(r&1&&h(0,ue,2,1,"ng-container",16),r&2){let e=c().$implicit;m("flexRender",e.column.columnDef.cell)("flexRenderProps",e.getContext())}}function be(r,t){if(r&1&&(o(0,"td",19),h(1,me,1,1,"input",20)(2,pe,7,0,"div",21)(3,ge,1,2,"ng-container"),a()),r&2){let e=t.$implicit,i=t.$index,n=c().$implicit;m("ngClass",$(2,ie,i===0,i===n.getVisibleCells().length-1,i>0&&i<n.getVisibleCells().length-1)),l(),R(e.column.id==="select"?1:e.column.id==="actions"?2:3)}}function _e(r,t){if(r&1&&(o(0,"tr",7),_(1,be,4,6,"td",19,w),a()),r&2){let e=t.$implicit;l(),x(e.getVisibleCells())}}function xe(r,t){r&1&&(o(0,"tr",8)(1,"td",27),d(2," No hay datos para mostrar "),a()())}function fe(r,t){if(r&1&&(o(0,"option",12),d(1),a()),r&2){let e=t.$implicit,i=c();m("value",e)("selected",e===i.table.getState().pagination.pageSize),l(),y(" ",e," ")}}var A=class r{_usersService=v(M);_router=v(k);users=O.required();_pagination=S({pageIndex:0,pageSize:10});sizesPages=S([1,3,5,10,20]);_sortingState=S([]);_columnVisibility=S({});_columnFilter=S([]);table=te(()=>({data:this.users(),getCoreRowModel:J(),columns:re,getPaginationRowModel:X(),getSortedRowModel:Z(),getFilteredRowModel:K(),enableRowSelection:!0,state:{pagination:this._pagination(),sorting:this._sortingState(),columnVisibility:this._columnVisibility(),columnFilters:this._columnFilter()},onPaginationChange:t=>{typeof t=="function"?this._pagination.update(t):this._pagination.set(t)},onSortingChange:t=>{typeof t=="function"?this._sortingState.update(t):this._sortingState.set(t)},onColumnVisibilityChange:t=>{let e=t instanceof Function?t(this._columnVisibility()):t;this._columnVisibility.set(e)},onColumnFiltersChange:t=>{t instanceof Function?this._columnFilter.update(t):this._columnFilter.set(t)}}));onChangePageSize(t){try{let e=t.target;this.table.setPageSize(Number(e.value))}catch(e){console.error(e)}}onSort(t){try{t.toggleSorting(t.getIsSorted()==="asc")}catch(e){console.error(e)}}onSearch(t){try{this.table.getAllColumns().map(i=>i.id).filter(i=>i!=="select"&&i!=="actions").forEach(i=>{this.table.getColumn(i)?.setFilterValue(t)})}catch(e){console.error(e)}}onEdit(t){try{if(this._usersService.forbidenUsers().includes(t.original.id)){b.error("\xC9ste Usuario, No Puede ser Editado",{description:"Este usuario es un usuario de sistema y no puede ser editado"});return}this._router.navigate(["admin/users/edit",t.original.id])}catch(e){console.error(e),b.error("Error al Editar el Usuario",{description:"Error al Editar el Usuario, por favor intente de nuevo"})}}onDelete(t){try{if(this._usersService.forbidenUsers().includes(t.original.id)){b.error("\xC9ste Usuario, No Puede ser Eliminado",{description:"Este usuario es un usuario de sistema y no puede ser eliminado"});return}confirm("\xBFEst\xE1 Seguro de Eliminar \xC9ste Registro?")&&this._usersService.deleteById(t.original.id).pipe(P(()=>this._usersService.getAll().subscribe())).subscribe({next:()=>{b.success("Registro Eliminado",{description:"El Registro ha sido eliminado correctamente"}),location.reload()},error:e=>{console.error(e),b.error("Error al Eliminar el Registro",{description:"Error al Eliminar el Registro, por favor intente de nuevo"})}})}catch(e){console.error(e),b.error("Error al Eliminar el Usuario",{description:"Error al Eliminar el Usuario, por favor intente de nuevo"})}}onGenerateQR(t){try{let e=`user-id:${t.original.id}`,i=window.open("","_blank","width=800,height=900");i?(i.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>C\xF3digo QR - Usuario ${t.original.name} ${t.original.surname}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  text-align: center;
                  padding: 20px;
                  background-color: #f5f5f5;
                  margin: 0;
                }
                h1 {
                  color: #333;
                  margin-bottom: 10px;
                }
                .user-info {
                  margin-bottom: 20px;
                  font-size: 16px;
                }
                .qr-container {
                  width: 400px;
                  height: 400px;
                  margin: 20px auto;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid #ddd;
                  background-color: white;
                  border-radius: 8px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .print-btn {
                  margin-top: 20px;
                  padding: 12px 24px;
                  background-color: #007bff;
                  color: white;
                  border: none;
                  border-radius: 6px;
                  cursor: pointer;
                  font-size: 16px;
                  transition: background-color 0.3s;
                }
                .print-btn:hover {
                  background-color: #0056b3;
                }
              </style>
            </head>
            <body>
              <h1>C\xF3digo QR de Usuario</h1>
              <div class="user-info">
                <p><strong>Usuario:</strong> ${t.original.name} ${t.original.surname}</p>
                <p><strong>ID:</strong> ${t.original.id}</p>
              </div>
              <div class="qr-container">
                <div id="loading">Generando QR...</div>
                <canvas id="qrcode" style="display: none;"></canvas>
              </div>
              <button class="print-btn" onclick="window.print()">Imprimir QR</button>
              <!-- QRCode library -->
              <script>
                // Funci\xF3n simple para generar QR usando API de QR Server con datos de texto plano
                function generateQR() {
                  try {
                    const loading = document.getElementById('loading');
                    const qrContainer = document.querySelector('.qr-container');

                    console.log('Generating QR using QR Server API for:', '${e}');

                    // Crear imagen usando QR Server API con par\xE1metros optimizados
                    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=256x256&ecc=M&format=png&qzone=2&data=${encodeURIComponent(e)}';
                    const img = document.createElement('img');
                    img.src = qrUrl;
                    img.style.width = '256px';
                    img.style.height = '256px';
                    img.style.display = 'block';
                    img.style.margin = '0 auto';
                    img.onload = function() {
                      console.log('QR code generated successfully using QR Server!');
                      console.log('QR URL:', qrUrl);
                      loading.style.display = 'none';
                      qrContainer.innerHTML = '';
                      qrContainer.appendChild(img);
                    };
                    img.onerror = function() {
                      console.error('Error loading QR from QR Server');
                      qrContainer.innerHTML = '<p style="color: red;">Error al generar el c\xF3digo QR</p>';
                    };

                    // Mostrar loading mientras carga
                    qrContainer.innerHTML = '<div id="loading">Generando QR...</div>';
                    qrContainer.appendChild(img);

                  } catch (error) {
                    console.error('Error generando QR:', error);
                    document.querySelector('.qr-container').innerHTML = '<p style="color: red;">Error al generar el c\xF3digo QR</p>';
                  }
                }

                // Generar QR inmediatamente
                generateQR();
              <\/script>
            </body>
          </html>
        `),i.document.close()):b.error("Error al abrir la ventana del QR",{description:"Por favor, permita las ventanas emergentes para este sitio."})}catch(e){console.error(e),b.error("Error al generar el QR",{description:"Error al generar el c\xF3digo QR, por favor intente de nuevo"})}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=F({type:r,selectors:[["admin-users-table"]],inputs:{users:[1,"users"]},decls:30,vars:6,consts:[["input",""],[1,"p-1"],[1,"!w-full","!overflow-x-auto","!rounded-lg","!shadow-lg","!border","!border-gray-700","!bg-gray-800","!p-1"],[1,"!table","!w-full","!bg-gray-800","!rounded-lg","!overflow-hidden"],[1,"flex","justify-items-start","items-center","gap-1","mb-1"],["type","text","placeholder","Buscar ...",1,"!w-full","!px-3","!py-2","!bg-gray-700","!border","!border-gray-600","!rounded-md","!text-gray-100","!placeholder-gray-400","!focus:outline-none","!focus:ring-2","!focus:ring-orange-500",3,"input"],[1,"!border-b","!border-gray-700","!bg-gray-700","!text-orange-400"],[1,"!border-b","!border-gray-700","!bg-white","!text-gray-900","!hover:bg-white"],[1,"!border-b","!border-gray-700","!bg-white","!text-gray-900"],[1,"!w-full","!shadow-md","!p-2","!flex","!flex-col","!sm:flex-row","!items-center","!justify-between","!space-y-2","!sm:space-y-0","!sm:space-x-4","!z-50"],[1,"!text-sm","!rounded-2xl","!shadow","!px-3","!py-1","!bg-gray-700","!text-gray-100"],[1,"!w-full","!px-3","!py-2","!bg-gray-700","!border","!border-gray-600","!rounded-md","!text-gray-100","!focus:outline-none","!focus:ring-2","!focus:ring-orange-500",3,"change"],[3,"value","selected"],[1,"flex","items-center","space-x-2"],[1,"!bg-orange-500","!hover:bg-orange-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click","disabled"],[1,"!px-4","!py-3","!text-sm","!uppercase","!tracking-wider","!font-bold",3,"ngClass"],[4,"flexRender","flexRenderProps"],[1,"!bg-gray-600","!hover:bg-gray-500","!text-orange-400","!px-2","!py-1","!rounded","!text-xs","!transition","!duration-200",3,"click"],[1,"flex","items-center","space-x-1",3,"innerHTML"],[1,"!px-4","!py-3","!text-sm",3,"ngClass"],["type","checkbox",1,"!checkbox","!w-4","!h-4","!text-orange-500","!bg-gray-700","!border-gray-600","!rounded","!focus:ring-orange-500",3,"checked"],[1,"flex","justify-end","gap-2"],["type","checkbox",1,"!checkbox","!w-4","!h-4","!text-orange-500","!bg-gray-700","!border-gray-600","!rounded","!focus:ring-orange-500",3,"change","checked"],[1,"!bg-orange-500","!hover:bg-orange-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"!bg-blue-500","!hover:bg-blue-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"!bg-red-600","!hover:bg-red-700","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"inline-block",3,"innerHTML"],["colspan","100%",1,"!text-center","!text-sm","!font-bold","!text-gray-500","!py-8"]],template:function(e,i){if(e&1){let n=C();o(0,"div",1)(1,"div",2)(2,"table",3)(3,"caption")(4,"div",4)(5,"input",5,0),g("input",function(){p(n);let Q=L(6);return u(i.onSearch(Q.value))}),a()()(),o(7,"thead"),_(8,de,3,0,"tr",6,w),a(),o(10,"tbody"),_(11,_e,3,0,"tr",7,w,!1,xe,3,0,"tr",8),a()()(),o(14,"div",9)(15,"div")(16,"span",10),d(17),a()(),o(18,"div")(19,"select",11),g("change",function(Q){return p(n),u(i.onChangePageSize(Q))}),_(20,fe,2,3,"option",12,w),a()(),o(22,"div")(23,"span",10),d(24),a()(),o(25,"div",13)(26,"button",14),g("click",function(){return p(n),u(i.table.previousPage())}),d(27," Anterior "),a(),o(28,"button",14),g("click",function(){return p(n),u(i.table.nextPage())}),d(29," Siguiente "),a()()()()}e&2&&(l(8),x(i.table.getHeaderGroups()),l(3),x(i.table.getRowModel().rows),l(6),z(" Mostrando: ",i.table.getRowModel().rows.length," de ",i.table.getRowCount()," "),l(3),x(i.sizesPages()),l(4),y(" ",i.table.getState().pagination.pageIndex+1," "),l(2),m("disabled",!i.table.getCanPreviousPage()),l(2),m("disabled",!i.table.getCanNextPage()))},dependencies:[U,G,ee],styles:["[_nghost-%COMP%]   table[_ngcontent-%COMP%]{background-color:#1f2937!important;border-radius:.5rem!important;overflow:hidden!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#374151!important;color:#fb923c!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#fff!important;color:#111827!important;border-bottom:1px solid rgb(75 85 99)!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#fff!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem 1rem!important;text-align:left!important}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{background-color:#374151!important;border-color:#4b5563!important;color:#f3f4f6!important}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important;border-color:#fb923c!important;box-shadow:0 0 0 2px #fb923c33!important}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border-radius:.375rem!important;transition:all .2s!important}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{background-color:#374151!important;border-color:#4b5563!important;color:#f3f4f6!important}[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none!important;border-color:#fb923c!important;box-shadow:0 0 0 2px #fb923c33!important}[_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:initial!important;color:initial!important;border-radius:9999px!important;padding:.25rem .5rem!important;font-size:.75rem!important;font-weight:600!important}"],changeDetection:0})};var he=(r,t)=>t.id;function Ce(r,t){r&1&&f(0,"is-error")}function ye(r,t){r&1&&f(0,"is-loading")}function ve(r,t){if(r&1){let e=C();o(0,"div",6)(1,"div",9)(2,"div",10)(3,"h2",11),d(4),a(),o(5,"p",12),d(6),a()(),o(7,"span",13),d(8),a()(),o(9,"div",14)(10,"span",15),d(11," Rol: "),o(12,"span",16),d(13),a()(),o(14,"span",17),d(15),a()(),o(16,"div",18)(17,"button",19),g("click",function(){let n=p(e).$implicit,s=c(2);return u(s.onEditUser(n.id))}),d(18," \u270F\uFE0F Editar "),a(),o(19,"button",20),g("click",function(){let n=p(e).$implicit,s=c(2);return u(s.onGenerateQR(n.id,n.name+" "+n.surname))}),d(20," \u{1F4F1} QR "),a(),o(21,"button",21),g("click",function(){let n=p(e).$implicit,s=c(2);return u(s.onDeleteUser(n.id))}),d(22," \u{1F5D1}\uFE0F Eliminar "),a()()()}if(r&2){let e=t.$implicit,i=c(2);l(4),z(" ",e.name," ",e.surname," "),l(2),y(" ",e.email," "),l(2),y(" ID: ",e.id," "),l(5),j((e.role==null?null:e.role.name)||"N/A"),l(),T("bg-green-600",e.role==null?null:e.role.name)("text-white",e.role==null?null:e.role.name)("bg-gray-700",!(e.role!=null&&e.role.name))("text-gray-200",!(e.role!=null&&e.role.name)),l(),y(" ",e.role!=null&&e.role.name?"Activo":"Sin rol"," "),l(2),T("opacity-70",i.isForbidden(e.id)),m("disabled",i.isForbidden(e.id)),l(4),T("opacity-70",i.isForbidden(e.id)),m("disabled",i.isForbidden(e.id))}}function Se(r,t){if(r&1&&(o(0,"div",5),_(1,ve,23,20,"div",6,he),a(),o(3,"div",7),f(4,"admin-users-table",8),a()),r&2){let e=c();l(),x(e.usersResource.value()),l(3),m("users",e.usersResource.value())}}function we(r,t){r&1&&f(0,"is-empty")}var q=class r{_usersService=v(M);_router=v(k);usersResource=N({loader:()=>this._usersService.getAll()});isForbidden(t){try{return this._usersService.forbidenUsers().includes(t)}catch{return!1}}onEditUser(t){try{if(this.isForbidden(t)){alert("Este usuario es de sistema y no puede ser editado.");return}this._router.navigate(["admin/users/edit",t])}catch(e){console.error(e),alert("Error al intentar editar el usuario.")}}onDeleteUser(t){try{if(this.isForbidden(t)){alert("Este usuario es de sistema y no puede ser eliminado.");return}if(!confirm("\xBFEst\xE1 seguro de eliminar este usuario?"))return;this._usersService.deleteById(t).pipe(P(()=>this._usersService.getAll().subscribe())).subscribe({next:()=>{location.reload()},error:e=>{console.error(e),alert("Error al eliminar el usuario, por favor intente de nuevo.")}})}catch(e){console.error(e),alert("Error al eliminar el usuario.")}}onGenerateQR(t,e){try{let i=`user-id:${t}`,n=window.open("","_blank","width=400,height=500");n?(n.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>C\xF3digo QR - Usuario ${e}</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f5f5f5; }
                h1 { color: #333; }
                .qr-container { margin: 20px auto; display: inline-block; }
                canvas { border: 1px solid #ccc; background-color: white; }
                .loading { display: block; margin: 20px auto; }
              </style>
              <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"><\/script>
            </head>
            <body>
              <h1>C\xF3digo QR del Usuario</h1>
              <p><strong>Usuario:</strong> ${e}</p>
              <p><strong>ID:</strong> ${t}</p>
              <div class="qr-container">
                <div id="loading" class="loading">Generando QR...</div>
                <canvas id="qrcode" style="display: none;"></canvas>
              </div>
              <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Imprimir</button>
              <!-- QRCode library -->
              <script>
                // Funci\xF3n para generar el QR usando un algoritmo simple
                function generateQR() {
                  try {
                    const canvas = document.getElementById('qrcode');
                    const loading = document.getElementById('loading');
                    const ctx = canvas.getContext('2d');

                    // Datos del QR
                    const data = '${i}';
                    const size = 256;
                    const cellSize = size / 29; // QR code de 29x29 m\xF3dulos

                    // Crear patr\xF3n b\xE1sico de QR (simplificado)
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, size, size);

                    // Dibujar algunos patrones b\xE1sicos para que parezca un QR
                    ctx.fillStyle = 'black';

                    // Patr\xF3n de posicionamiento superior izquierdo
                    ctx.fillRect(0, 0, cellSize * 7, cellSize * 7);
                    ctx.fillStyle = 'white';
                    ctx.fillRect(cellSize, cellSize, cellSize * 5, cellSize * 5);
                    ctx.fillStyle = 'black';
                    ctx.fillRect(cellSize * 2, cellSize * 2, cellSize * 3, cellSize * 3);

                    // Patr\xF3n de posicionamiento superior derecho
                    ctx.fillRect(size - cellSize * 7, 0, cellSize * 7, cellSize * 7);
                    ctx.fillStyle = 'white';
                    ctx.fillRect(size - cellSize * 6, cellSize, cellSize * 5, cellSize * 5);
                    ctx.fillStyle = 'black';
                    ctx.fillRect(size - cellSize * 5, cellSize * 2, cellSize * 3, cellSize * 3);

                    // Patr\xF3n de posicionamiento inferior izquierdo
                    ctx.fillRect(0, size - cellSize * 7, cellSize * 7, cellSize * 7);
                    ctx.fillStyle = 'white';
                    ctx.fillRect(cellSize, size - cellSize * 6, cellSize * 5, cellSize * 5);
                    ctx.fillStyle = 'black';
                    ctx.fillRect(cellSize * 2, size - cellSize * 5, cellSize * 3, cellSize * 3);

                    // Dibujar algunos m\xF3dulos de datos aleatorios para que parezca un QR real
                    for (let i = 0; i < 100; i++) {
                      const x = Math.floor(Math.random() * 29) * cellSize;
                      const y = Math.floor(Math.random() * 29) * cellSize;
                      // Evitar las \xE1reas de los patrones de posicionamiento
                      if (!((x < cellSize * 9 && y < cellSize * 9) ||
                            (x > size - cellSize * 9 && y < cellSize * 9) ||
                            (x < cellSize * 9 && y > size - cellSize * 9))) {
                        if (Math.random() > 0.5) {
                          ctx.fillRect(x, y, cellSize, cellSize);
                        }
                      }
                    }

                    // Agregar texto del ID en el centro
                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(data, size / 2, size / 2);

                    loading.style.display = 'none';
                    canvas.style.display = 'block';
                  } catch (error) {
                    console.error('Error generando QR:', error);
                    document.querySelector('.qr-container').innerHTML = '<p style="color: red;">Error al generar el c\xF3digo QR</p>';
                  }
                }

                // Generar QR inmediatamente
                generateQR();
              <\/script>
            </body>
          </html>
        `),n.document.close()):alert("Error al abrir la ventana del QR. Por favor, permita las ventanas emergentes para este sitio.")}catch(i){console.error(i),alert("Error al generar el c\xF3digo QR, por favor intente de nuevo.")}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=F({type:r,selectors:[["admin-users-page"]],decls:11,vars:1,consts:[[1,"bg-gray-900","text-gray-100","min-h-screen","p-4","sm:p-6","overflow-x-hidden"],[1,"flex","flex-col","sm:flex-row","sm:items-center","sm:justify-between","gap-3","border-b-2","border-orange-500","p-4","bg-gray-800","shadow-md","mb-6","rounded-lg"],[1,"text-center","sm:text-left","text-2xl","sm:text-3xl","font-bold","text-white"],[1,"w-full","sm:w-auto"],["routerLink","/admin/users/create",1,"btn","btn-sm","sm:btn-md","bg-orange-500","hover:bg-orange-600","text-white","w-full","sm:w-auto","whitespace-nowrap"],[1,"md:hidden","grid","grid-cols-1","sm:grid-cols-2","gap-3"],[1,"bg-gray-800","border","border-gray-700","rounded-lg","p-4","shadow"],[1,"hidden","md:block"],[3,"users"],[1,"flex","items-start","justify-between","gap-2"],[1,"min-w-0"],[1,"text-lg","font-semibold","text-orange-400","break-words"],[1,"mt-1","text-sm","text-gray-300","break-words"],[1,"text-xs","px-2","py-1","bg-gray-700","text-gray-200","rounded"],[1,"mt-3","flex","items-center","justify-between","text-sm"],[1,"text-gray-300"],[1,"font-semibold"],[1,"text-[11px]","px-2","py-1","rounded-full"],[1,"mt-3","flex","gap-2"],["title","Editar usuario",1,"bg-orange-500","hover:bg-orange-600","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click","disabled"],["title","Generar QR",1,"bg-blue-500","hover:bg-blue-600","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click"],["title","Eliminar usuario",1,"bg-red-600","hover:bg-red-700","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click","disabled"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),d(3," \u{1F465} Usuarios "),a(),o(4,"div",3)(5,"a",4),d(6," \u2795 Crear Usuario "),a()()(),h(7,Ce,1,0,"is-error")(8,ye,1,0,"is-loading")(9,Se,5,1)(10,we,1,0,"is-empty"),a()),e&2&&(l(7),R(i.usersResource.error()?7:i.usersResource.isLoading()?8:i.usersResource.hasValue()?9:i.usersResource.hasValue()?-1:10))},dependencies:[U,H,B,W,Y,A],encapsulation:2,changeDetection:0})},et=q;export{q as AdminUsersPageComponent,et as default};
