function addRowToBottom(){
  let cell,firstRow,row;
  let table=document.getElementById("tbl");
  firstRow=table.rows[0];
  row=table.insertRow(-1);
  row.className="tr";
  cell=row.insertCell(-1);
  cell.innerHTML=(table.rows.length-1);
  for (let i=1;i<firstRow.cells.length;i++){
    cell=row.insertCell(-1)
    switch (i){
      case 1:
        cell.innerHTML="Manju";
        break;
      case 2:
        cell.innerHTML="Ballari";
        break;
      case 3:
        cell.innerHTML="Maski";
        break;  
      case 4:
        cell.innerHTML="India";
        break;        
    }
  }  
}
function addRowToTop(){
    let cell,firstRow,row;
  let table=document.getElementById("tbl");
  firstRow=table.rows[0];
  row=table.insertRow(1);
  row.className="tr";
  cell=row.insertCell(-1);
  cell.innerHTML="1";
  for (let i=0;i<firstRow.cells.length-1;i++){
    cell=row.insertCell(-1)
  } 
  for (let i=2;i<table.rows.length;i++){
    table.rows[i].cells[0].innerHTML=i;
  }
}