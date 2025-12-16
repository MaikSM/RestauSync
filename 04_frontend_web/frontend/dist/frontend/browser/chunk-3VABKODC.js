import{a as J,b as K,c as X,d as Z,e as ee,f as te}from"./chunk-AJIEFJR7.js";import{a as B,b as W,c as Y}from"./chunk-6O4JYRLI.js";import{a as Q}from"./chunk-E7FNAGCF.js";import{a as _}from"./chunk-4XBRS2GN.js";import{a as N}from"./chunk-ASKH5DUS.js";import"./chunk-NMI43S2G.js";import{d as M,e as j}from"./chunk-UFL7QPX4.js";import"./chunk-7IYL6UTE.js";import{j as G,q as k}from"./chunk-JQOZS3TN.js";import{Aa as s,Ab as L,Bb as c,Cb as H,Db as y,Eb as F,I as U,Lb as D,Na as T,R as v,Sa as h,Z as p,Za as m,_ as u,_a as P,bb as S,cb as R,eb as b,fb as x,gb as o,hb as a,ib as f,jb as q,ka as z,kb as $,ma as w,mb as C,pb as g,qb as d,wa as I}from"./chunk-CFQE6O6P.js";import"./chunk-4X36HX5K.js";var E=(r,t,e,n)=>{try{return e=e.toLowerCase(),Object.values(r.original).map(l=>l).join(" ").toLowerCase().includes(e)}catch(i){return console.error(i),!1}},ie=[{id:"id",accessorFn:r=>r.id,cell:r=>r.getValue(),header:"ID",filterFn:E},{id:"name",accessorFn:r=>r.name,cell:r=>r.getValue(),header:"Nombre",filterFn:E},{id:"surname",accessorFn:r=>r.surname,cell:r=>r.getValue(),header:"Apellidos",filterFn:E},{id:"email",accessorFn:r=>r.email,cell:r=>r.getValue(),header:"Email",filterFn:E},{id:"role.name",accessorFn:r=>r.role?.name,cell:r=>r.getValue(),header:"Rol",filterFn:E},{id:"actions",header:"Acciones",enableSorting:!1,enableHiding:!1,enableColumnFilter:!1}],re=ie;var ne=(r,t,e)=>({"!text-left":r,"!text-right":t,"!text-center":e});function se(r,t){if(r&1){let e=C();q(0),o(1,"button",17),g("click",function(){p(e);let i=d(2).$implicit,l=d(2);return u(l.onSort(i.column))}),f(2,"span",18),a(),$()}if(r&2){let e=t.$implicit;s(2),m("innerHTML",e,I)}}function le(r,t){if(r&1&&(o(0,"th",15),h(1,se,3,1,"ng-container",16),a()),r&2){let e=d(),n=e.$implicit,i=e.$index,l=d().$implicit;m("ngClass",D(3,ne,i===0,i===l.headers.length-1,i>0&&i<l.headers.length-1)),s(),m("flexRender",n.column.columnDef.header)("flexRenderProps",n.getContext())}}function de(r,t){if(r&1&&h(0,le,2,7,"th",15),r&2){let e=t.$implicit;S(e.isPlaceholder?-1:0)}}function ce(r,t){if(r&1&&(o(0,"tr",6),b(1,de,1,1,null,null,R),a()),r&2){let e=t.$implicit;s(),x(e.headers)}}function me(r,t){if(r&1){let e=C();o(0,"input",22),g("change",function(){p(e);let i=d(2).$implicit;return u(i.toggleSelected())}),a()}if(r&2){let e=d(2).$implicit;m("checked",e.getIsSelected())}}function pe(r,t){if(r&1){let e=C();o(0,"div",21)(1,"button",23),g("click",function(){p(e);let i=d(2).$implicit,l=d();return u(l.onEdit(i))}),c(2," Editar "),a(),o(3,"button",24),g("click",function(){p(e);let i=d(2).$implicit,l=d();return u(l.onGenerateQR(i))}),c(4," QR "),a(),o(5,"button",25),g("click",function(){p(e);let i=d(2).$implicit,l=d();return u(l.onDelete(i))}),c(6," Eliminar "),a()()}}function ue(r,t){if(r&1&&(q(0),f(1,"span",26),$()),r&2){let e=t.$implicit;s(),m("innerHTML",e,I)}}function ge(r,t){if(r&1&&h(0,ue,2,1,"ng-container",16),r&2){let e=d().$implicit;m("flexRender",e.column.columnDef.cell)("flexRenderProps",e.getContext())}}function _e(r,t){if(r&1&&(o(0,"td",19),h(1,me,1,1,"input",20)(2,pe,7,0,"div",21)(3,ge,1,2,"ng-container"),a()),r&2){let e=t.$implicit,n=t.$index,i=d().$implicit;m("ngClass",D(2,ne,n===0,n===i.getVisibleCells().length-1,n>0&&n<i.getVisibleCells().length-1)),s(),S(e.column.id==="select"?1:e.column.id==="actions"?2:3)}}function be(r,t){if(r&1&&(o(0,"tr",7),b(1,_e,4,6,"td",19,R),a()),r&2){let e=t.$implicit;s(),x(e.getVisibleCells())}}function xe(r,t){r&1&&(o(0,"tr",8)(1,"td",27),c(2," No hay datos para mostrar "),a()())}function fe(r,t){if(r&1&&(o(0,"option",12),c(1),a()),r&2){let e=t.$implicit,n=d();m("value",e)("selected",e===n.table.getState().pagination.pageSize),s(),y(" ",e," ")}}var A=class r{_usersService=v(Q);_router=v(M);users=z.required();_pagination=w({pageIndex:0,pageSize:10});sizesPages=w([1,3,5,10,20]);_sortingState=w([]);_columnVisibility=w({});_columnFilter=w([]);table=te(()=>({data:this.users(),getCoreRowModel:J(),columns:re,getPaginationRowModel:X(),getSortedRowModel:Z(),getFilteredRowModel:K(),enableRowSelection:!0,state:{pagination:this._pagination(),sorting:this._sortingState(),columnVisibility:this._columnVisibility(),columnFilters:this._columnFilter()},onPaginationChange:t=>{typeof t=="function"?this._pagination.update(t):this._pagination.set(t)},onSortingChange:t=>{typeof t=="function"?this._sortingState.update(t):this._sortingState.set(t)},onColumnVisibilityChange:t=>{let e=t instanceof Function?t(this._columnVisibility()):t;this._columnVisibility.set(e)},onColumnFiltersChange:t=>{t instanceof Function?this._columnFilter.update(t):this._columnFilter.set(t)}}));onChangePageSize(t){try{let e=t.target;this.table.setPageSize(Number(e.value))}catch(e){console.error(e)}}onSort(t){try{t.toggleSorting(t.getIsSorted()==="asc")}catch(e){console.error(e)}}onSearch(t){try{this.table.getAllColumns().map(n=>n.id).filter(n=>n!=="select"&&n!=="actions").forEach(n=>{this.table.getColumn(n)?.setFilterValue(t)})}catch(e){console.error(e)}}onEdit(t){try{if(this._usersService.forbidenUsers().includes(t.original.id)){_.error("\xC9ste Usuario, No Puede ser Editado",{description:"Este usuario es un usuario de sistema y no puede ser editado"});return}this._router.navigate(["admin/users/edit",t.original.id])}catch(e){console.error(e),_.error("Error al Editar el Usuario",{description:"Error al Editar el Usuario, por favor intente de nuevo"})}}onDelete(t){try{if(this._usersService.forbidenUsers().includes(t.original.id)){_.error("\xC9ste Usuario, No Puede ser Eliminado",{description:"Este usuario es un usuario de sistema y no puede ser eliminado"});return}confirm("\xBFEst\xE1 Seguro de Eliminar \xC9ste Registro?")&&this._usersService.deleteById(t.original.id).pipe(U(()=>this._usersService.getAll().subscribe())).subscribe({next:()=>{_.success("Registro Eliminado",{description:"El Registro ha sido eliminado correctamente"}),location.reload()},error:e=>{console.error(e),_.error("Error al Eliminar el Registro",{description:"Error al Eliminar el Registro, por favor intente de nuevo"})}})}catch(e){console.error(e),_.error("Error al Eliminar el Usuario",{description:"Error al Eliminar el Usuario, por favor intente de nuevo"})}}onGenerateQR(t){try{let e=`user-id:${t.original.id}`,n=window.open("","_blank","width=800,height=900");n?(n.document.write(`
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
        `),n.document.close()):_.error("Error al abrir la ventana del QR",{description:"Por favor, permita las ventanas emergentes para este sitio."})}catch(e){console.error(e),_.error("Error al generar el QR",{description:"Error al generar el c\xF3digo QR, por favor intente de nuevo"})}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=T({type:r,selectors:[["admin-users-table"]],inputs:{users:[1,"users"]},decls:30,vars:6,consts:[["input",""],[1,"p-1"],[1,"!w-full","!overflow-x-auto","!rounded-lg","!shadow-lg","!border","!border-gray-700","!bg-gray-800","!p-1"],[1,"!table","!w-full","!bg-gray-800","!rounded-lg","!overflow-hidden"],[1,"flex","justify-items-start","items-center","gap-1","mb-1"],["type","text","placeholder","Buscar ...",1,"!w-full","!px-3","!py-2","!bg-gray-700","!border","!border-gray-600","!rounded-md","!text-gray-100","!placeholder-gray-400","!focus:outline-none","!focus:ring-2","!focus:ring-orange-500",3,"input"],[1,"!border-b","!border-gray-700","!bg-gray-700","!text-orange-400"],[1,"!border-b","!border-gray-700","!bg-white","!text-gray-900","!hover:bg-white"],[1,"!border-b","!border-gray-700","!bg-white","!text-gray-900"],[1,"!w-full","!shadow-md","!p-2","!flex","!flex-col","!sm:flex-row","!items-center","!justify-between","!space-y-2","!sm:space-y-0","!sm:space-x-4","!z-50"],[1,"!text-sm","!rounded-2xl","!shadow","!px-3","!py-1","!bg-gray-700","!text-gray-100"],[1,"!w-full","!px-3","!py-2","!bg-gray-700","!border","!border-gray-600","!rounded-md","!text-gray-100","!focus:outline-none","!focus:ring-2","!focus:ring-orange-500",3,"change"],[3,"value","selected"],[1,"flex","items-center","space-x-2"],[1,"!bg-orange-500","!hover:bg-orange-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click","disabled"],[1,"!px-4","!py-3","!text-sm","!uppercase","!tracking-wider","!font-bold",3,"ngClass"],[4,"flexRender","flexRenderProps"],[1,"!bg-gray-600","!hover:bg-gray-500","!text-orange-400","!px-2","!py-1","!rounded","!text-xs","!transition","!duration-200",3,"click"],[1,"flex","items-center","space-x-1",3,"innerHTML"],[1,"!px-4","!py-3","!text-sm",3,"ngClass"],["type","checkbox",1,"!checkbox","!w-4","!h-4","!text-orange-500","!bg-gray-700","!border-gray-600","!rounded","!focus:ring-orange-500",3,"checked"],[1,"flex","justify-end","gap-2"],["type","checkbox",1,"!checkbox","!w-4","!h-4","!text-orange-500","!bg-gray-700","!border-gray-600","!rounded","!focus:ring-orange-500",3,"change","checked"],[1,"!bg-orange-500","!hover:bg-orange-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"!bg-blue-500","!hover:bg-blue-600","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"!bg-red-600","!hover:bg-red-700","!text-white","!px-3","!py-1","!rounded","!text-sm","!transition","!duration-200",3,"click"],[1,"inline-block",3,"innerHTML"],["colspan","100%",1,"!text-center","!text-sm","!font-bold","!text-gray-500","!py-8"]],template:function(e,n){if(e&1){let i=C();o(0,"div",1)(1,"div",2)(2,"table",3)(3,"caption")(4,"div",4)(5,"input",5,0),g("input",function(){p(i);let V=L(6);return u(n.onSearch(V.value))}),a()()(),o(7,"thead"),b(8,ce,3,0,"tr",6,R),a(),o(10,"tbody"),b(11,be,3,0,"tr",7,R,!1,xe,3,0,"tr",8),a()()(),o(14,"div",9)(15,"div")(16,"span",10),c(17),a()(),o(18,"div")(19,"select",11),g("change",function(V){return p(i),u(n.onChangePageSize(V))}),b(20,fe,2,3,"option",12,R),a()(),o(22,"div")(23,"span",10),c(24),a()(),o(25,"div",13)(26,"button",14),g("click",function(){return p(i),u(n.table.previousPage())}),c(27," Anterior "),a(),o(28,"button",14),g("click",function(){return p(i),u(n.table.nextPage())}),c(29," Siguiente "),a()()()()}e&2&&(s(8),x(n.table.getHeaderGroups()),s(3),x(n.table.getRowModel().rows),s(6),F(" Mostrando: ",n.table.getRowModel().rows.length," de ",n.table.getRowCount()," "),s(3),x(n.sizesPages()),s(4),y(" ",n.table.getState().pagination.pageIndex+1," "),s(2),m("disabled",!n.table.getCanPreviousPage()),s(2),m("disabled",!n.table.getCanNextPage()))},dependencies:[k,G,ee],styles:["[_nghost-%COMP%]   table[_ngcontent-%COMP%]{background-color:#1f2937!important;border-radius:.5rem!important;overflow:hidden!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#374151!important;color:#fb923c!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#fff!important;color:#111827!important;border-bottom:1px solid rgb(75 85 99)!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#fff!important}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem 1rem!important;text-align:left!important}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{background-color:#374151!important;border-color:#4b5563!important;color:#f3f4f6!important}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important;border-color:#fb923c!important;box-shadow:0 0 0 2px #fb923c33!important}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border-radius:.375rem!important;transition:all .2s!important}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{background-color:#374151!important;border-color:#4b5563!important;color:#f3f4f6!important}[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none!important;border-color:#fb923c!important;box-shadow:0 0 0 2px #fb923c33!important}[_nghost-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:initial!important;color:initial!important;border-radius:9999px!important;padding:.25rem .5rem!important;font-size:.75rem!important;font-weight:600!important}"],changeDetection:0})};var he=(r,t)=>t.id;function Ce(r,t){r&1&&f(0,"is-error")}function ye(r,t){r&1&&f(0,"is-loading")}function ve(r,t){if(r&1){let e=C();o(0,"div",6)(1,"div",9)(2,"div",10)(3,"h2",11),c(4),a(),o(5,"p",12),c(6),a()(),o(7,"span",13),c(8),a()(),o(9,"div",14)(10,"span",15),c(11," Rol: "),o(12,"span",16),c(13),a()(),o(14,"span",17),c(15),a()(),o(16,"div",18)(17,"button",19),g("click",function(){let i=p(e).$implicit,l=d(2);return u(l.onEditUser(i.id))}),c(18," \u270F\uFE0F Editar "),a(),o(19,"button",20),g("click",function(){let i=p(e).$implicit,l=d(2);return u(l.onGenerateQR(i.id,i.name+" "+i.surname))}),c(20," \u{1F4F1} QR "),a(),o(21,"button",21),g("click",function(){let i=p(e).$implicit,l=d(2);return u(l.onDeleteUser(i.id))}),c(22," \u{1F5D1}\uFE0F Eliminar "),a()()()}if(r&2){let e=t.$implicit,n=d(2);s(4),F(" ",e.name," ",e.surname," "),s(2),y(" ",e.email," "),s(2),y(" ID: ",e.id," "),s(5),H((e.role==null?null:e.role.name)||"N/A"),s(),P("bg-green-600",e.role==null?null:e.role.name)("text-white",e.role==null?null:e.role.name)("bg-gray-700",!(e.role!=null&&e.role.name))("text-gray-200",!(e.role!=null&&e.role.name)),s(),y(" ",e.role!=null&&e.role.name?"Activo":"Sin rol"," "),s(2),P("opacity-70",n.isForbidden(e.id)),m("disabled",n.isForbidden(e.id)),s(4),P("opacity-70",n.isForbidden(e.id)),m("disabled",n.isForbidden(e.id))}}function we(r,t){if(r&1&&(o(0,"div",5),b(1,ve,23,20,"div",6,he),a(),o(3,"div",7),f(4,"admin-users-table",8),a()),r&2){let e=d();s(),x(e.usersResource.value()),s(3),m("users",e.usersResource.value())}}function Re(r,t){r&1&&f(0,"is-empty")}var O=class r{_usersService=v(Q);_router=v(M);usersResource=N({loader:()=>this._usersService.getAll()});isForbidden(t){try{return this._usersService.forbidenUsers().includes(t)}catch{return!1}}onEditUser(t){try{if(this.isForbidden(t)){alert("Este usuario es de sistema y no puede ser editado.");return}this._router.navigate(["admin/users/edit",t])}catch(e){console.error(e),alert("Error al intentar editar el usuario.")}}onDeleteUser(t){try{if(this.isForbidden(t)){alert("Este usuario es de sistema y no puede ser eliminado.");return}if(!confirm("\xBFEst\xE1 seguro de eliminar este usuario?"))return;this._usersService.deleteById(t).pipe(U(()=>this._usersService.getAll().subscribe())).subscribe({next:()=>{location.reload()},error:e=>{console.error(e),alert("Error al eliminar el usuario, por favor intente de nuevo.")}})}catch(e){console.error(e),alert("Error al eliminar el usuario.")}}onGenerateQR(t,e){try{let n=`user-id:${t}`,i=window.open("","_blank","width=800,height=900");i?(i.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>C\xF3digo QR - Usuario ${e}</title>
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
                <p><strong>Usuario:</strong> ${e}</p>
                <p><strong>ID:</strong> ${t}</p>
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

                    console.log('Generating QR using QR Server API for:', '${n}');

                    // Crear imagen usando QR Server API con par\xE1metros optimizados
                    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=256x256&ecc=M&format=png&qzone=2&data=${encodeURIComponent(n)}';
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
        `),i.document.close()):alert("Error al abrir la ventana del QR. Por favor, permita las ventanas emergentes para este sitio.")}catch(n){console.error(n),alert("Error al generar el c\xF3digo QR, por favor intente de nuevo.")}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=T({type:r,selectors:[["admin-users-page"]],decls:11,vars:1,consts:[[1,"bg-gray-900","text-gray-100","min-h-screen","p-4","sm:p-6","overflow-x-hidden"],[1,"flex","flex-col","sm:flex-row","sm:items-center","sm:justify-between","gap-3","border-b-2","border-orange-500","p-4","bg-gray-800","shadow-md","mb-6","rounded-lg"],[1,"text-center","sm:text-left","text-2xl","sm:text-3xl","font-bold","text-white"],[1,"w-full","sm:w-auto"],["routerLink","/admin/users/create",1,"btn","btn-sm","sm:btn-md","bg-orange-500","hover:bg-orange-600","text-white","w-full","sm:w-auto","whitespace-nowrap"],[1,"md:hidden","grid","grid-cols-1","sm:grid-cols-2","gap-3"],[1,"bg-gray-800","border","border-gray-700","rounded-lg","p-4","shadow"],[1,"hidden","md:block"],[3,"users"],[1,"flex","items-start","justify-between","gap-2"],[1,"min-w-0"],[1,"text-lg","font-semibold","text-orange-400","break-words"],[1,"mt-1","text-sm","text-gray-300","break-words"],[1,"text-xs","px-2","py-1","bg-gray-700","text-gray-200","rounded"],[1,"mt-3","flex","items-center","justify-between","text-sm"],[1,"text-gray-300"],[1,"font-semibold"],[1,"text-[11px]","px-2","py-1","rounded-full"],[1,"mt-3","flex","gap-2"],["title","Editar usuario",1,"bg-orange-500","hover:bg-orange-600","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click","disabled"],["title","Generar QR",1,"bg-blue-500","hover:bg-blue-600","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click"],["title","Eliminar usuario",1,"bg-red-600","hover:bg-red-700","text-white","px-3","py-1.5","rounded","text-sm","transition","w-full",3,"click","disabled"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),c(3," \u{1F465} Usuarios "),a(),o(4,"div",3)(5,"a",4),c(6," \u2795 Crear Usuario "),a()()(),h(7,Ce,1,0,"is-error")(8,ye,1,0,"is-loading")(9,we,5,1)(10,Re,1,0,"is-empty"),a()),e&2&&(s(7),S(n.usersResource.error()?7:n.usersResource.isLoading()?8:n.usersResource.hasValue()?9:n.usersResource.hasValue()?-1:10))},dependencies:[k,j,B,W,Y,A],encapsulation:2,changeDetection:0})},et=O;export{O as AdminUsersPageComponent,et as default};
