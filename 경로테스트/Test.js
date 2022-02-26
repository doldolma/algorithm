function compare(accessPath, permission){
  accessPath = accessPath.replace(/^\/|\/$/g, "").split("/");
  permission = permission.replace(/^\/|\/$/g, "").split("/");

  for(let i = 0; i<accessPath.length; i++){
    if(permission[i] === "*") return true;
    if(accessPath[i] !== permission[i]) return false;
  }
  return true;
}

const accessPath = "/page/bundle/123/";
const permission = "/page/bundle/*";

console.log(compare(accessPath, permission));