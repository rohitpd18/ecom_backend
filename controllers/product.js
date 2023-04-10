const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  if (req.query.name) {
    req.query.name = { $regex: name, $options: "i" };
  }



  let apiData= Product.find(req.query)

  if(req.query.sort){
    let sortFix= req.query.sort.replaceAll(",", " ")
    apiData= apiData.sort(sortFix)
    
  }

  if(req.query.select){
    let selectFix= req.query.select.replaceAll(",", " ")
    apiData= apiData.select(selectFix)
    
  }

  let page= Number(req.query.page) || 1
  let limit= Number(req.query.limit) || 3

  let skip = (page-1)* limit

  const allProduct = await apiData.skip(skip).limit(limit);
  res
    .status(200)
    .json({ success: true, result: allProduct.length, data: allProduct });
};

const getAllProductsTesting = async (req, res) => {
  const allProduct = await Product.find(req.query);
  console.log(req.query);

  res.status(200).json({ allProduct });
};

module.exports = { getAllProducts, getAllProductsTesting };
