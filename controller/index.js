const {getDbComments, getDbCustomers} = require("../model/comment.js");

exports.getMain =(req,res) => {
  res.render("index.ejs",{
    data : getDbCustomers(),
  });
};

exports.postMain=(req,res)=>{
  res.send("!!!");
};

exports.getId =(req,res)=>{
  const {id}=req.params;
  res.render("paramIndex.ejs",{
    id,
    data:getDbComments(),
  }) ;
};
