let id = "no";
//localStorage.clear();
selectData();
function manageData() 
{
  document.getElementById("msg").innerHTML = "";
  let bookName = document.getElementById("bname").value;
  let authorName = document.getElementById("aname").value;
  let Desc = document.getElementById("desc").value;
  let Price = document.getElementById("price").value;
  if (bookName == "" && authorName == "" && Desc == "" && Price == "") 
  {
    document.getElementById("msg").innerHTML = "Please enter your Details";
  }
  else
  {
    if (id == "no")
    {
      let arr = getCrudData();
      if (arr == null)
      {
        let data = new Array();
        data.push({bookName, authorName, Desc, Price});
        setCrudData(data);
      }
      else
      {
        let data1 = new Array();
        data1.push({bookName, authorName, Desc, Price});
        let data2 = arr.concat(data1);
        setCrudData(data2);
      }
      freeForm();
    }
    else
    {
      let arr = getCrudData();
      arr[id] = bookName;
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Data updated";
    }
    selectData();
  }
}

function freeForm()
{
  // For free the form
  document.getElementById("bname").value = "";
  document.getElementById("aname").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("price").value = "";
  document.getElementById("msg").innerHTML = "Data added";
}
function selectData() 
{
  let arr = getCrudData();
  builtTable(arr);
}
function builtTable(data)
{
  const table = document.getElementById('tbl');
  //var sno = 1;
  for(var i = 0 ; i < data.length ; i++)
  {
    var template  = `<tr>
                        <td>${data[i].bookName}</td>
                        <td>${data[i].authorName}</td>
                        <td>${data[i].Desc}</td>
                        <td>${data[i].Price}</td>
                    </tr>`;
    table.innerHTML += template;                
  }
}
function editData(rid) 
{
  id = rid;
  let arr = getCrudData();
  document.getElementById("name").value = arr[rid];
}

function deleteData(rid) 
{
  let arr = getCrudData();
  arr.splice(rid, 1);
  setCrudData(arr);
  selectData();
}

function getCrudData() 
{
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}

function setCrudData(arr) 
{
  localStorage.setItem("crud", JSON.stringify(arr));
}
